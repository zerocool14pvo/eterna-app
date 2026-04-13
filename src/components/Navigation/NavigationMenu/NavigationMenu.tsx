import { type FC } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import type { WithClassName } from '@/types/withClassName'
import { LINKS } from '@/constants/links'
import { Button } from '#components/UI'

import './NavigationMenu.scss'

const cnNavigationMenu = cn('NavigationMenu')

export interface INavigationMenuProps extends WithClassName {
  isOpen: boolean
  onClose: () => void
}

export const NavigationMenu: FC<INavigationMenuProps> = ({ className, isOpen, onClose }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      className={cnNavigationMenu(null, [className])}
      initial={{ y: '100%', x: '-50%' }}
      animate={{ y: isOpen ? 0 : '100%', x: '-50%' }}
      exit={{ y: '100%', x: '-50%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      <div className={cnNavigationMenu('nav')}>
        <a href="#reviews" className={cnNavigationMenu('link')} onClick={onClose}>
          {t('navigation.reviews')}
        </a>
        <a href="#how-it-works" className={cnNavigationMenu('link')} onClick={onClose}>
          {t('navigation.howItWorks')}
        </a>
      </div>

      <div className={cnNavigationMenu('footer')}>
        <Button
          as="a"
          href={LINKS.FUNNEL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="xl"
          className={cnNavigationMenu('button')}
          onClick={onClose}
        >
          {t('navigation.getStarted')}
        </Button>
        <Button
          as={Link}
          to="/auth/sign-in"
          variant="gray"
          size="xl"
          className={cnNavigationMenu('button')}
          onClick={onClose}
        >
          {t('navigation.signIn')}
        </Button>
      </div>
    </motion.div>
  )
}
