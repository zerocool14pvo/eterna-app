import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'
import { AuthLayout, Title, Text } from '#components'

import './Billing.scss'

const cnBilling = cn('Billing')

export const Billing: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <AuthLayout className={cnBilling(null, [className])}>
      <Title variant="h2" className={cnBilling('title')}>
        {t('home.footer.links.billing')}
      </Title>
      <Text className={cnBilling('content')}>
        {/* Контент условий оплаты */}
        Содержание условий оплаты будет здесь.
      </Text>
    </AuthLayout>
  )
}
