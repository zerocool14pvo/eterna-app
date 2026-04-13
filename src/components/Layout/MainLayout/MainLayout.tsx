import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { BottomNavigation } from '#components/Navigation'

import './MainLayout.scss'

const cnMainLayout = cn('MainLayout')

export const MainLayout: FC<WithClassName> = ({ className }) => {
  return (
    <div className={cnMainLayout(null, [className])}>
      <main className={cnMainLayout('content')}>
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}
