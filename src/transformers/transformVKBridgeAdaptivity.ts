import type { UseAdaptivity } from '@vkontakte/vk-bridge-react'
import {
  type AdaptivityProps,
  SizeType,
  ViewWidth,
  getViewHeightByViewportHeight,
  getViewWidthByViewportWidth
} from '@vkontakte/vkui'

/**
 * Требуется конвертировать данные из VK Bridge в те, что принимает AdaptivityProvider из VKUI.
 */
export const transformVKBridgeAdaptivity = ({
  type,
  viewportWidth,
  viewportHeight
}: UseAdaptivity): AdaptivityProps => {
  switch (type) {
    case 'adaptive':
      return {
        viewWidth: getViewWidthByViewportWidth(viewportWidth),
        viewHeight: getViewHeightByViewportHeight(viewportHeight)
      }
    case 'force_mobile':
    case 'force_mobile_compact':
      return {
        viewWidth: ViewWidth.MOBILE,
        sizeX: SizeType.COMPACT,
        sizeY:
          type === 'force_mobile_compact' ? SizeType.COMPACT : SizeType.REGULAR
      }
    default:
      return {}
  }
}
