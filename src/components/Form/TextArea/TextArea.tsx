import type { FC, TextareaHTMLAttributes } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'

import './TextArea.scss'

const cnTextArea = cn('TextArea')

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, WithClassName {
  isError?: boolean
}

export const TextArea: FC<ITextAreaProps> = ({
  className,
  isError = false,
  ...props
}) => {
  return (
    <div className={cnTextArea({ error: isError }, [className])}>
      <textarea
        className={cnTextArea('field')}
        {...props}
      />
    </div>
  )
}
