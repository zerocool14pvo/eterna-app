import type { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { AnimatePresence, motion } from 'framer-motion'

import './Field.scss'

const cnField = cn('Field')

export interface IFieldProps extends WithClassName {
  children: ReactNode
  label?: string
  error?: string
}

export const Field: FC<IFieldProps> = ({
  className,
  children,
  label,
  error
}) => {
  return (
    <div className={cnField({}, [className])}>
      {label && <div className={cnField('label')}>{label}</div>}
      
      {children}
      
      <AnimatePresence>
        {error && (
          <motion.div
            className={cnField('error')}
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
