import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'
import { AuthLayout, Title, Text } from '#components'

import './MoneyBack.scss'

const cnMoneyBack = cn('MoneyBack')

export const MoneyBack: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <AuthLayout className={cnMoneyBack(null, [className])}>
      <Title variant="h2" className={cnMoneyBack('title')}>
        {t('home.footer.links.moneyBack')}
      </Title>
      
      {/* Контент страницы */}
      <Text className={cnMoneyBack('body')}>
        Кнопка «назад» и Enter
      </Text>

      <Text className={cnMoneyBack('footer')}>
        А посередине внизу текст.
      </Text>
    </AuthLayout>
  )
}
