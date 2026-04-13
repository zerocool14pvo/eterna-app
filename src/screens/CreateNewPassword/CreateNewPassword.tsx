import { type FC } from 'react'
import { cn } from '@bem-react/classname'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

import type { WithClassName } from '@/types/withClassName'
import { Input, Button, Title, Text, Field } from '#components'

import { getCreatePasswordSchema, type ICreatePasswordForm } from './schema'
import './CreateNewPassword.scss'

const cnCreateNewPassword = cn('CreateNewPassword')

export const CreateNewPassword: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICreatePasswordForm>({
    resolver: zodResolver(getCreatePasswordSchema(t)),
    mode: 'onChange',
  })

  const onSubmit = (data: ICreatePasswordForm) => {
    console.log('CreateNewPassword submit:', data)
  }

  return (
    <form className={cnCreateNewPassword(null, [className])} onSubmit={handleSubmit(onSubmit)}>

      <div className={cnCreateNewPassword('header')}>
        <Title variant="h2" className={cnCreateNewPassword('title')}>
          {t('auth.createNewPassword.title')}
        </Title>

        <Text className={cnCreateNewPassword('description')}>
          {t('auth.createNewPassword.description')}
        </Text>
      </div>

      <div className={cnCreateNewPassword('fields')}>
        <Field error={errors.password?.message}>
          <Input
            placeholder={t('auth.createNewPassword.passwordPlaceholder')}
            type="password"
            isError={!!errors.password}
            {...register('password')}
          />
        </Field>
        <Field error={errors.confirmPassword?.message}>
          <Input
            placeholder={t('auth.createNewPassword.confirmPasswordPlaceholder')}
            type="password"
            isError={!!errors.confirmPassword}
            {...register('confirmPassword')}
          />
        </Field>
      </div>

      <Button
        type="submit"
        className={cnCreateNewPassword('submit')}
        variant="primary"
        disabled={!isValid}
        size="xl"
      >
        {t('auth.createNewPassword.submit')}
      </Button>
    </form>
  )
}
