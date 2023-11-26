import {
  AdaptivityProvider,
  ConfigProvider,
  usePlatform,
} from '@vkontakte/vkui'
import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import vkBridge from '@vkontakte/vk-bridge'
import { useAdaptivity, useAppearance } from '@vkontakte/vk-bridge-react'
import { lazy } from 'preact/compat'
import { router } from './routes'
import { Suspense } from '@components'
import { transformVKBridgeAdaptivity } from './transformers/transformVKBridgeAdaptivity'

const App = lazy(() => import('./App'))
const NotFoundCorrect = lazy(() => import('./views/NotFound'))

vkBridge.send('VKWebAppInit')

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
            <App />
          </ConfigProvider>
        </Suspense>
      </RouterProvider>
    </AdaptivityProvider>
  )
}

export default AppWrapper
