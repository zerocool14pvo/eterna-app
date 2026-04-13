import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'
import { AuthLayout, Title, Text } from '#components'

import './Privacy.scss'

const cnPrivacy = cn('Privacy')

export const Privacy: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <AuthLayout className={cnPrivacy(null, [className])}>
      <Title variant="h2" className={cnPrivacy('title')}>
        {t('home.footer.links.privacy')}
      </Title>
      <Text className={cnPrivacy('content')}>
        {/* Контент политики конфиденциальности */}
        Содержание политики конфиденциальности будет здесь.
      </Text>
    </AuthLayout>
  )
}
