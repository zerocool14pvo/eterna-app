import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'
import { AuthLayout, Title, Text } from '#components'

import './Terms.scss'

const cnTerms = cn('Terms')

export const Terms: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <AuthLayout className={cnTerms(null, [className])}>
      <Title variant="h2" className={cnTerms('title')}>
        {t('home.footer.links.terms')}
      </Title>
      <Text className={cnTerms('content')}>
        {/* Контент пользовательского соглашения */}
        Содержание пользовательского соглашения будет здесь.
      </Text>
    </AuthLayout>
  )
}
