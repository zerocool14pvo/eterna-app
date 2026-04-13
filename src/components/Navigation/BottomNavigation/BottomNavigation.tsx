import { type FC } from 'react'
import { cn } from '@bem-react/classname'
import { NavLink } from 'react-router-dom'
import type { WithClassName } from '@/types/withClassName'
import { Icon } from '#components/UI/Icon'
import { Text } from '#components/UI/Text'

import './BottomNavigation.scss'

const cnBottomNavigation = cn('BottomNavigation')

export const BottomNavigation: FC<WithClassName> = ({ className }) => {
  return (
    <nav className={cnBottomNavigation(null, [className])}>
      <NavLink
        to="/app/energy"
        className={({ isActive }) => cnBottomNavigation('item', { active: isActive })}
      >
        <Icon src="/icons/energy.svg" className={cnBottomNavigation('icon')} />
        <Text className={cnBottomNavigation('label')}>Daily Energy</Text>
      </NavLink>
      <NavLink
        to="/app/chat"
        className={({ isActive }) => cnBottomNavigation('item', { active: isActive })}
      >
        <Icon src="/icons/ai-chat.svg" className={cnBottomNavigation('icon')} />
        <Text className={cnBottomNavigation('label')}>AI Chat</Text>
      </NavLink>
      <NavLink
        to="/app/profile"
        className={({ isActive }) => cnBottomNavigation('item', { active: isActive })}
      >
        <Icon src="/icons/profile.svg" className={cnBottomNavigation('icon')} />
        <Text className={cnBottomNavigation('label')}>Profile</Text>
      </NavLink>
    </nav>
  )
}
