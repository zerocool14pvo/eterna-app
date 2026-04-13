import { type FC, type ReactNode } from 'react'
import { cn } from '@bem-react/classname'
import { Outlet, useLocation } from 'react-router-dom'

import type { WithClassName } from '@/types/withClassName'
import { BackButton, Logo } from '#components'


import starLeft from '@/assets/star-left.png'
import starRight from '@/assets/star-right.png'


import './AuthLayout.scss'

const cnAuthLayout = cn('AuthLayout')

export interface IAuthLayoutProps extends WithClassName {
  children?: ReactNode
  to?: string | number
}

export const AuthLayout: FC<IAuthLayoutProps> = ({ children, to, className }) => {
  const { pathname } = useLocation()

  const isSignIn = pathname.includes('sign-in')

  return (
    <div className={cnAuthLayout(null, [className])}>
      <header className={cnAuthLayout('header')}>
        <BackButton
          className={cnAuthLayout('back')}
          to={to}
        />
        <Logo />
      </header>

      <main className={cnAuthLayout('main', { variant: isSignIn ? 'signIn' : undefined })}>

        <div className={cnAuthLayout('decoration')}>
          <img src={starRight} alt="" className={cnAuthLayout('star', { pos: 'top-right' })} />
          <img src={starLeft} alt="" className={cnAuthLayout('star', { pos: 'center-left' })} />
        </div>

        {children ?? <Outlet />}
      </main>
    </div>
  )
}
