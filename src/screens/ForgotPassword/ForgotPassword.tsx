import { type FC } from 'react'
import { cn } from '@bem-react/classname'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { WithClassName } from '@/types/withClassName'
import { Input, Button, Title, Text, Field } from '#components'

import { getForgotSchema, type IForgotForm } from './schema'
import './ForgotPassword.scss'

const cnForgotPassword = cn('ForgotPassword')

export const ForgotPassword: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForgotForm>({
    resolver: zodResolver(getForgotSchema(t)),
    mode: 'onChange',
  })

  const handleNext = (data: IForgotForm) => {
    console.log('ForgotPassword submit:', data)
    navigate('/auth/create-new-password')
  }

  return (
    <form className={cnForgotPassword(null, [className])} onSubmit={handleSubmit(handleNext)}>

      <div className={cnForgotPassword('header')}>
        <Title variant="h2" className={cnForgotPassword('title')}>
          {t('auth.forgotPassword.title')}
        </Title>

        <Text className={cnForgotPassword('description')}>
          {t('auth.forgotPassword.description')}
        </Text>
      </div>

      <Field error={errors.email?.message} className={cnForgotPassword('field')}>
        <Input
          placeholder={t('auth.forgotPassword.emailPlaceholder')}
          type="email"

          isError={!!errors.email}
          {...register('email')}
        />
      </Field>

      <Button
        type="submit"
        className={cnForgotPassword('submit')}
        variant="primary"
        size="xl"
        disabled={!isValid}
      >
        {t('auth.forgotPassword.submit')}
      </Button>
    </form>
  )
}
