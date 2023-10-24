import {
  AdaptivityProvider,
  ConfigProvider,
  usePlatform,
} from '@vkontakte/vkui'
import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import vkBridge from '@vkontakte/vk-bridge'
import { useAdaptivity, useAppearance } from '@vkontakte/vk-bridge-react'
import { FC, lazy } from 'preact/compat'
import { Provider } from 'react-redux'
import { router } from './routes'
import Suspense from './components/UI/Suspense'
import { transformVKBridgeAdaptivity } from './transformers/transformVKBridgeAdaptivity'
import store from './store'

const NotFound = lazy(() => import('./components/UI/NotFound'))
const App = lazy(() => import('./App.tsx'))

vkBridge.send('VKWebAppInit')

const NotFoundCorrect: FC = () => {
  const platform = usePlatform()
  const vkBridgeAppearance = useAppearance() || undefined

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      isWebView={vkBridge.isWebView()}
      platform={platform}
    >
      <NotFound />
    </ConfigProvider>
  )
}

const AppWrapper = () => {
  const platform = usePlatform()
  const vkBridgeAdaptivityProps = transformVKBridgeAdaptivity(useAdaptivity())
  const vkBridgeAppearance = useAppearance() || undefined

  return (
    <AdaptivityProvider {...vkBridgeAdaptivityProps}>
      <RouterProvider router={router} notFound={<NotFoundCorrect />}>
        <Suspense id="app" mode="screen">
          <ConfigProvider
            appearance={vkBridgeAppearance}
            platform={platform}
            isWebView={vkBridge.isWebView()}
          >
            <Provider store={store}>
              <App />
            </Provider>
          </ConfigProvider>
        </Suspense>
      </RouterProvider>
    </AdaptivityProvider>
  )
}

export default AppWrapper
