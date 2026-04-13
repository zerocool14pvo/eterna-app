import { z } from 'zod'
import type { TFunction } from 'i18next'
import { passwordRegex } from '@/constants/validation'

export const getCreatePasswordSchema = (t: TFunction) => z.object({
  password: z
    .string()
    .min(6, t('validation.minLength', 'Минимум 6 символов'))
    .regex(
      passwordRegex,
      t('validation.passwordComplexity', 'Пароль должен содержать минимум 6 символов, заглавную букву, цифру и спецсимвол')
    ),
  confirmPassword: z.string().min(1, t('validation.required', 'Обязательное поле')),
}).refine((data) => data.password === data.confirmPassword, {
  message: t('validation.passwordMismatch', "Пароли не совпадают"),
  path: ["confirmPassword"],
})

export type ICreatePasswordForm = z.infer<ReturnType<typeof getCreatePasswordSchema>>
