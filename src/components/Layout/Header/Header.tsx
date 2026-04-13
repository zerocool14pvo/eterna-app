import { useState, type FC } from 'react'
import { AnimatePresence } from 'framer-motion'
import { cn } from '@bem-react/classname'

import type { WithClassName } from '@/types/withClassName'
import { NavigationMenu } from '#components/Navigation'
import { Logo, Toggle } from '#components/UI'

import './Header.scss'

const cnHeader = cn('Header')

export const Header: FC<WithClassName> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => setIsMenuOpen((prev) => !prev)
  const handleClose = () => setIsMenuOpen(false)

  return (
    <>
      <header className={cnHeader(null, [className])}>
        <Logo className={cnHeader('logo')} />
        <Toggle isActive={isMenuOpen} onClick={handleToggle} className={cnHeader('toggle')} />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <NavigationMenu isOpen={isMenuOpen} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  )
}
