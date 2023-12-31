import { PanelHeaderWithBack } from '@components'
import { ResponseLogin } from '@diary-spo/types'
import {
  Icon28DoorArrowLeftOutline,
  Icon28ErrorCircleOutline
} from '@vkontakte/icons'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import {
  Button,
  FormItem,
  FormLayout,
  FormStatus,
  Group,
  Input,
  Panel
} from '@vkontakte/vkui'
import Hashes from 'jshashes'
import { ChangeEvent, FC } from 'preact/compat'
import { useEffect, useState } from 'preact/hooks'
import { useSnackbar } from '../hooks'
import makeRequest from '../methods/server/makeRequest'
import { VIEW_SCHEDULE } from '../routes'
import { loginPattern } from '../types'

const LoginForm: FC<{ id: string }> = ({ id }) => {
  const routeNavigator = useRouteNavigator()

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isDataInvalid, setIsDataInvalid] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [snackbar, showSnackbar] = useSnackbar()

  const createErrorSnackbar = () =>
    showSnackbar({
      icon: (
        <Icon28ErrorCircleOutline fill='var(--vkui--color_icon_negative)' />
      ),
      subtitle: 'Попробуйте заного или сообщите об ошибке',
      title: 'Ошибка при попытке авторизации'
    })

  useEffect(() => {
    const storageToken = localStorage.getItem('token')
    setIsLoading(true)
    const getUserCookie = async () => {
      if (!storageToken) {
        await routeNavigator.replace('/')
        setIsLoading(false)
        showSnackbar({
          icon: (
            <Icon28ErrorCircleOutline fill='var(--vkui--color_icon_negative)' />
          ),
          subtitle: 'Заполни форму и войди в дневник',
          title: 'О вас нет данных, ты кто такой?'
        })
      }
    }

    getUserCookie()
  }, [])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    const setStateAction = {
      login: setLogin,
      password: setPassword
    }[name]
    setIsDataInvalid(false)

    setStateAction?.(value)
  }

  const handleLogin = async () => {
    if (!loginPattern.test(login)) {
      setIsDataInvalid(true)
      return
    }

    const passwordHashed = new Hashes.SHA256().b64(password)
    const response = await makeRequest<Response & ResponseLogin>(
      '/login/',
      'POST',
      JSON.stringify({
        login,
        password: passwordHashed,
        isHash: true
      })
    )

    console.log(response)

    try {
      setIsLoading(true)

      if (response === 401) {
        setIsLoading(false)
        setIsDataInvalid(true)
        throw new Error('401')
      }

      if (typeof response === 'number') {
        showSnackbar({
          icon: (
            <Icon28ErrorCircleOutline fill='var(--vkui--color_icon_negative)' />
          ),
          title: 'Ошибка при попытке сделать запрос',
          subtitle:
            'Попробуйте обновить страницу или обновите куки в настройках'
        })
        throw new Error('500')
      }

      const dataResp = response as ResponseLogin
      if (!String(dataResp.token)) {
        createErrorSnackbar()
      }

      saveData(dataResp)

      showSnackbar({
        title: 'Вхожу',
        subtitle: 'Подождите немного'
      })

      await routeNavigator.replace(`/${VIEW_SCHEDULE}`)
    } catch (e) {
      setIsLoading(false)
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  const isLoginEmpty = login === ''
  const isPasswordEmpty = password === ''
  const isPasswordValid = password && !isPasswordEmpty

  const loginTopText = isLoginEmpty
    ? 'Логин'
    : loginPattern.test(login)
      ? 'Логин введён'
      : 'Введите корректный логин'
  const passwordTopText =
    password === ''
      ? 'Пароль'
      : isPasswordValid
        ? 'Пароль введён'
        : 'Введите корректный пароль'

  return (
    <Panel nav={id}>
      <PanelHeaderWithBack title='Авторизация' />
      <Group>
        {isDataInvalid && (
          <FormStatus header='Некорректные данные' mode='error'>
            Проверьте правильность логина и пароля
          </FormStatus>
        )}
        <FormLayout>
          {/*//@ts-ignore типы React не совсем совместимы с Preact*/}
          <FormItem
            required
            htmlFor='userLogin'
            top='Логин'
            status={
              isLoginEmpty
                ? 'default'
                : loginPattern.test(login)
                  ? 'valid'
                  : 'error'
            }
            bottom={isLoginEmpty || loginTopText}
            bottomId='login-type'
          >
            <Input
              //@ts-ignore типы React не совсем совместимы с Preact
              required
              aria-labelledby='login-type'
              id='userLogin'
              type='text'
              name='login'
              placeholder='Введите логин'
              value={login}
              onChange={onChange}
            />
          </FormItem>
          {/*//@ts-ignore типы React не совсем совместимы с Preact*/}
          <FormItem
            top='Пароль'
            htmlFor='pass'
            status={
              isPasswordEmpty ? 'default' : isPasswordValid ? 'valid' : 'error'
            }
            bottom={isPasswordEmpty || passwordTopText}
          >
            <Input
              //@ts-ignore типы React не совсем совместимы с Preact
              name='password'
              id='pass'
              type='password'
              placeholder='Введите пароль'
              onChange={onChange}
            />
          </FormItem>
          {/*//@ts-ignore типы React не совсем совместимы с Preact*/}
          <FormItem>
            <Button
              size='l'
              stretched
              onClick={() => handleLogin()}
              disabled={
                !password || !login || !loginPattern.test(login) || isLoading
              }
              before={<Icon28DoorArrowLeftOutline />}
            >
              {isLoading ? 'Пытаюсь войти...' : 'Войти'}
            </Button>
          </FormItem>
        </FormLayout>
        {snackbar}
      </Group>
    </Panel>
  )
}

const saveData = (basePath: ResponseLogin) => {
  const userId = String(basePath.id)
  const token = basePath.token
  const name = `${String(basePath.lastName)} ${String(
    basePath.firstName
  )} ${String(basePath.middleName)}`
  const org = String(basePath.organization?.abbreviation)
  const city = String(basePath.organization?.addressSettlement)
  // @ts-expect-error ошибка в типах
  const group = String(basePath?.groupName)

  localStorage.setItem('id', userId)
  localStorage.setItem('token', token)

  const userData = {
    name,
    org,
    city,
    group
  }

  localStorage.setItem('data', JSON.stringify(userData))
}

export default LoginForm
