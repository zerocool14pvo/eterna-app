import { Text, Title } from '#components'
import { cn } from '@bem-react/classname'
import { type FC } from 'react'

import type { WithClassName } from '@/types/withClassName'

import './Settings.scss'

const cnSettings = cn('Settings')

export const Settings: FC<WithClassName> = ({ className }) => {
  return (
    <div className={cnSettings(null, [className])}>
      <Title variant="h1">Settings</Title>
      <Text>User settings and info</Text>
    </div>
  )
}
