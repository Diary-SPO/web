import { Icon28ErrorCircleOutline } from '@vkontakte/icons'
import { Snackbar } from '@vkontakte/vkui'
import { ReactNode } from 'preact/compat'
import { useCallback, useState } from 'preact/hooks'

/**
 * Функция 'useRateLimitExceeded' обрабатывает случай превышения лимита запросов.
 * Устанавливает Snackbar для сообщения об ошибке о превышении лимита запросов.
 * При вызове функции handleRateLimitExceeded устанавливает Snackbar с соответствующим сообщением и иконкой.
 * Возвращает состояние rateSnackbar и функцию handleRateLimitExceeded для управления Snackbar'ом.
 */

const useRateLimitExceeded = (): [ReactNode | null, () => void] => {
  const [rateSnackbar, setRateSnackbar] = useState<ReactNode | null>(null)

  const handleRateLimitExceeded = useCallback(() => {
    setRateSnackbar(
      <Snackbar
        layout='vertical'
        onClose={() => setRateSnackbar(null)}
        before={
          <Icon28ErrorCircleOutline fill='var(--vkui--color_icon_negative)' />
        }
        subtitle='Вы временно заблокированы. Если вы считаете, что это ошибка, то сообщите нам'
      >
        Слишком частые запросы
      </Snackbar>
    )
  }, [])

  return [rateSnackbar, handleRateLimitExceeded]
}

export default useRateLimitExceeded
