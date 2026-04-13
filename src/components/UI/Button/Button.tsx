import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'

import './Button.scss'

const cnButton = cn('Button')

export type ButtonVariant = 'primary' | 'gray'
export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IButtonBaseProps extends WithClassName {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  isLoading?: boolean
  fullWidth?: boolean
}

export type IButtonProps<T extends ElementType = 'button'> = IButtonBaseProps & {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  className,
  children,
  variant = 'primary',
  size = 'xl',
  disabled,
  isLoading,
  fullWidth,
  as,
  ...props
}: IButtonProps<T>) => {
  const Component = as || 'button'

  const isDisabled = disabled || isLoading

  return (
    <Component
      className={cnButton({ variant, size, disabled: isDisabled, loading: isLoading, full: fullWidth }, [className])}
      disabled={isDisabled}
      {...props}
    >
      {children}
      {isLoading && <span className={cnButton('spinner')} />}
    </Component>
  )
}
