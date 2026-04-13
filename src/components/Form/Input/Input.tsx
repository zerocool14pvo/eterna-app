import { useState, forwardRef, type ReactNode, type InputHTMLAttributes } from 'react'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'
import { Icon } from '#components/UI/Icon'

import './Input.scss'

const cnInput = cn('Input')

export type InputSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, WithClassName {
  sizeVariant?: InputSize
  isError?: boolean
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({
  className,
  leftIcon,
  sizeVariant = 'xl',
  isError = false,
  rightIcon,
  type,
  ...props
}, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const isPassword = type === 'password'

  const togglePassword = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const currentType = isPassword && isPasswordVisible ? 'text' : type

  return (
    <div className={cnInput({ size: sizeVariant, error: isError }, [className])}>
      {leftIcon && (
        <div className={cnInput('icon', { left: true })}>
          {leftIcon}
        </div>
      )}
      <input
        ref={ref}
        className={cnInput('field')}
        type={currentType}
        {...props}
      />
      {isPassword && (
        <button 
          type="button" 
          className={cnInput('icon', { right: true, toggle: true })} 
          onClick={togglePassword}
          aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
        >
          <Icon src={isPasswordVisible ? '/icons/eye-open.svg' : '/icons/eye.svg'} />
        </button>
      )}
      {!isPassword && rightIcon && (
        <div className={cnInput('icon', { right: true })}>
          {rightIcon}
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'
