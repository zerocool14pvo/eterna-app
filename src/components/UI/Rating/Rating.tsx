import type { FC } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Icon } from '#components/UI/Icon'

import './Rating.scss'

const cnRating = cn('Rating')

export interface IRatingProps extends WithClassName {
  value?: number
  max?: number
  size?: number
}

export const Rating: FC<IRatingProps> = ({
  value = 5,
  max = 5,
  size = 18,
  className
}) => {
  return (
    <div className={cnRating({}, [className])}>
      {Array.from({ length: max }).map((_, index) => (
        <Icon 
          key={index}
          src="/icons/star.svg" 
          size={size} 
          className={cnRating('star', { active: index < value })} 
        />
      ))}
    </div>
  )
}
