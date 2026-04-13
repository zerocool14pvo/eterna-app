import { z } from 'zod'
import type { TFunction } from 'i18next'

export const getForgotSchema = (t: TFunction) => z.object({
  email: z.string().min(1, t('validation.required', 'Обязательное поле')).email(t('validation.email', 'Неверный формат email')),
})

export type IForgotForm = z.infer<ReturnType<typeof getForgotSchema>>
