import type { FC } from 'react'
import SVG from 'react-inlinesvg'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'

import './Icon.scss'

const cnIcon = cn('Icon')

export interface IIconProps extends WithClassName {
  src: string
  size?: number | string
  fill?: string
  stroke?: string
}

export const Icon: FC<IIconProps> = ({
  src,
  size = 24,
  fill,
  stroke,
  className
}) => {
  return (

    <SVG
      src={src}
      width={size}
      height={size}
      className={cnIcon(null, [className])}
      fill={fill}
      stroke={stroke}
    />

  )
}
