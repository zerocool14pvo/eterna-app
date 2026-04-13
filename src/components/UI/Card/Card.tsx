import type { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'

import './Card.scss'

const cnCard = cn('Card')

export type CardVariant = 'default' | 'accent'

export interface ICardProps extends WithClassName {
  children: ReactNode
  variant?: CardVariant
}

export const Card: FC<ICardProps> = ({
  className,
  children,
  variant = 'default'
}) => {
  return (
    <div className={cnCard({ variant }, [className])}>
      {children}
    </div>
  )
}
