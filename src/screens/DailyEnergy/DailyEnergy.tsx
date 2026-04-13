import { type FC } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Title, Text } from '#components'

import './DailyEnergy.scss'

const cnDailyEnergy = cn('DailyEnergy')

export const DailyEnergy: FC<WithClassName> = ({ className }) => {
  return (
    <div className={cnDailyEnergy(null, [className])}>
      <Title variant="h1">Daily Energy</Title>
      <Text>Your daily energy dashboard</Text>
    </div>
  )
}
