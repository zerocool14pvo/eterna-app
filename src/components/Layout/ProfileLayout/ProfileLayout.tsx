import { type FC } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { BottomNavigation } from '#components/Navigation'
import { useAuthStore } from '@/store/auth'

import './ProfileLayout.scss'

const cnProfileLayout = cn('ProfileLayout')

export const ProfileLayout: FC<WithClassName> = ({ className }) => {
  const token = useAuthStore((state) => state.token)

  if (!token) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return (
    <div className={cnProfileLayout(null, [className])}>
      <main className={cnProfileLayout('content')}>
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}
