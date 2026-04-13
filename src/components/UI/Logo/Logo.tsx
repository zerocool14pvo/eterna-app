import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'

import './Logo.scss'

const cnLogo = cn('Logo')

export interface ILogoProps extends WithClassName { }

export const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <Link to="/" className={cnLogo(null, [className])}>
      Eterna
    </Link>
  )
}
