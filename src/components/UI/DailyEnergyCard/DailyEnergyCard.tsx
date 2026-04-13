import { cn } from '@bem-react/classname'
import parse from 'html-react-parser'
import { type FC } from 'react'

import type { WithClassName } from '@/types/withClassName'

import './DailyEnergyCard.scss'

const cnDailyEnergyCard = cn('DailyEnergyCard')

export interface IDailyEnergyCardProps extends WithClassName {
  imageSrc?: string
  title?: string
  description?: string
}

export const DailyEnergyCard: FC<IDailyEnergyCardProps> = ({
  className,
  imageSrc = '',
  title = '',
  description = '',
}) => {
  return (
    <div
      className={cnDailyEnergyCard(null, [className])}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={cnDailyEnergyCard('overlay')}>
        <div className={cnDailyEnergyCard('content')}>
          <div className={cnDailyEnergyCard('title')}>
            {title ? parse(title) : null}
          </div>
          <div className={cnDailyEnergyCard('description')}>{description}</div>
        </div>
      </div>
    </div>
  )
}
