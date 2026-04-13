import type { FC } from 'react'
import { cn } from '@bem-react/classname'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import type { WithClassName } from '@/types/withClassName'
import { Button, Title, Text } from '#components'

import './NotFound.scss'

const cnNotFound = cn('NotFound')

export const NotFound: FC<WithClassName> = ({ className }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={cnNotFound(null, [className])}>
      <Title variant="h1" className={cnNotFound('title')}>
        404
      </Title>

      <Text className={cnNotFound('description')}>
        {t('notFound.description', 'Страница не найдена или перенесена')}
      </Text>

      <Button
        className={cnNotFound('submit')}
        variant="primary"
        size="xs"
        onClick={() => navigate('/')}
      >
        {t('notFound.goHome', 'Go Home')}
      </Button>
    </div>
  )
}
