import { z } from 'zod'
import type { TFunction } from 'i18next'
import { passwordRegex } from '@/constants/validation'

export const getSignInSchema = (t: TFunction) => z.object({
  email: z.string().min(1, t('validation.required', 'Обязательное поле')).email(t('validation.email', 'Неверный формат email')),
  password: z
    .string()
    .min(6, t('validation.minLength', 'Минимум 6 символов'))
    .regex(
      passwordRegex,
      t('validation.passwordComplexity', 'Пароль должен содержать минимум 6 символов, заглавную букву, цифру и спецсимвол')
    ),
})

export type ISignInForm = z.infer<ReturnType<typeof getSignInSchema>>
