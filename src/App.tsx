import { cn } from '@bem-react/classname'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthLayout } from '#components'
import { Billing } from '#screens/Billing'
import { CreateNewPassword } from '#screens/CreateNewPassword'
import { ForgotPassword } from '#screens/ForgotPassword'
import { Home } from '#screens/Home'
import { MoneyBack } from '#screens/MoneyBack'
import { Privacy } from '#screens/Privacy'
import { SignIn } from '#screens/SignIn'
import { Terms } from '#screens/Terms'

import './App.scss'

const cnApp = cn('App')

export const App = () => (
  <div className={cnApp()}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/money-back" element={<MoneyBack />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="sign-in" replace />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-new-password" element={<CreateNewPassword />} />
      </Route>
    </Routes>
  </div>
)
