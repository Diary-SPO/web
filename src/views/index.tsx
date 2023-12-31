import { lazy } from 'preact/compat'

const Contacts = lazy(() => import('./Contacts'))
const Schedule = lazy(() => import('./Schedule'))
const Marks = lazy(() => import('./Marks'))
const Settings = lazy(() => import('./Settings'))
const LoginForm = lazy(() => import('./LoginForm'))
const Attestation = lazy(() => import('./Attestation'))
const Notifications = lazy(() => import('./Notifications'))

export {
  Contacts,
  Marks,
  Schedule,
  Settings,
  LoginForm,
  Attestation,
  Notifications
}
