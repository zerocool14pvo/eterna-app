import { Button, Field, Input, Text, Title } from '#components'
import { cn } from '@bem-react/classname'
import { zodResolver } from '@hookform/resolvers/zod'
import type { TFunction } from 'i18next'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useAuthStore } from '@/store/auth'
import type { WithClassName } from '@/types/withClassName'

import './SignIn.scss'

const cnSignIn = cn('SignIn')

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/

const getSignInSchema = (t: TFunction) =>
  z.object({
    email: z
      .string()
      .min(1, t('validation.required', 'Обязательное поле'))
      .email(t('validation.email', 'Неверный формат email')),
    password: z
      .string()
      .min(6, t('validation.minLength', 'Минимум 6 символов'))
      .regex(
        passwordRegex,
        t(
          'validation.passwordComplexity',
          'Пароль должен содержать минимум 6 символов, заглавную букву, цифру и спецсимвол',
        ),
      ),
  })

type ISignInForm = z.infer<ReturnType<typeof getSignInSchema>>

export const SignIn: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const setToken = useAuthStore((state) => state.setToken)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ISignInForm>({
    resolver: zodResolver(getSignInSchema(t)),
    mode: 'onChange',
  })

  const onSubmit = async (data: ISignInForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('SignIn submit:', data)
    setToken('mock_jwt_token_abc123')
    navigate('/app/energy')
  }

  return (
    <form
      className={cnSignIn(null, [className])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cnSignIn('header')}>
        <Title variant="h2" className={cnSignIn('title')}>
          {t('auth.signIn.title')}
        </Title>

        <Text className={cnSignIn('description')}>
          {t('auth.signIn.description')}
        </Text>
      </div>

      <div className={cnSignIn('fields')}>
        <Field error={errors.email?.message}>
          <Input
            placeholder={t('auth.signIn.emailPlaceholder')}
            type="email"
            autoComplete="email"
            isError={!!errors.email}
            {...register('email')}
          />
        </Field>
        <Field error={errors.password?.message}>
          <Input
            placeholder={t('auth.signIn.passwordPlaceholder')}
            type="password"
            autoComplete="current-password"
            isError={!!errors.password}
            {...register('password')}
          />
        </Field>

        <Link to="/auth/forgot-password" className={cnSignIn('link')}>
          {t('auth.signIn.forgotPassword')}
        </Link>
      </div>

      <div className={cnSignIn('footer')}>
        <Button
          type="submit"
          fullWidth
          className={cnSignIn('submit')}
          variant="primary"
          disabled={!isValid}
          isLoading={isSubmitting}
          size="xl"
        >
          {t('auth.signIn.submit')}
        </Button>

        <div className={cnSignIn('up')}>
          {t('auth.signIn.footerText')}
          <Link to="/auth/sign-up" className={cnSignIn('accent')}>
            {t('auth.signIn.signUpLink')}
          </Link>
        </div>
      </div>
    </form>
  )
}
