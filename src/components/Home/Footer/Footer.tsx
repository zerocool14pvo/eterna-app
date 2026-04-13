import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { cn } from '@bem-react/classname'
import type { WithClassName } from '@/types/withClassName'
import { Logo, Button } from '#components/UI'

import './Footer.scss'

const cnFooter = cn('Footer')

export type FooterProps = WithClassName

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <footer className={cnFooter({}, [className])}>
      <Logo />

      <Button fullWidth variant='gray' size="xl">
        {t('home.footer.cta')}
      </Button>

      <div className={cnFooter('links')}>
        <div className={cnFooter('item')}>
          <Link to="/privacy" className={cnFooter('link')}>
            {t('home.footer.links.privacy')}
          </Link>
        </div>

        <div className={cnFooter('item')}>
          <Link to="/billing" className={cnFooter('link')}>
            {t('home.footer.links.billing')}
          </Link>
        </div>

        <div className={cnFooter('item')}>
          <Link to="/terms" className={cnFooter('link')}>
            {t('home.footer.links.terms')}
          </Link>
        </div>

        <div className={cnFooter('item')}>
          <Link to="/money-back" className={cnFooter('link')}>
            {t('home.footer.links.moneyBack')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
