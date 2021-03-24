const AUTH_STORAGE_KEY = 'user'
const USER_EMAIL = 'demo@myunisoft.fr'
const USER_PASSWORD = `bXl1bmlzb2Z0` // encoded password using .btoa

export const getUser = () =>
  window.localStorage.getItem(AUTH_STORAGE_KEY)
    ? JSON.parse(window.localStorage.getItem(AUTH_STORAGE_KEY))
    : {}

const setUser = (user) =>
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))

export const decodePassword = () => {
  return typeof window !== undefined && window.atob(USER_PASSWORD)
}

export const handleLogin = (
  { email, password },
  setWrongCredentials,
  navigateFn
) => {
  if (password === decodePassword() && email === USER_EMAIL) {
    navigateFn && navigateFn()

    return setUser({
      email: USER_EMAIL,
      password: USER_PASSWORD,
    })
  } else {
    setWrongCredentials(true)
  }
  return false
}

export const logOut = () => {
  window.localStorage.removeItem(AUTH_STORAGE_KEY)
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!(user.email && user.password)
}
