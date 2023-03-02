import { lStorage } from '@/utils'
import { fetchUpdateToken } from '@/api'

const TOKEN_CODE = 'access_token'
const DURATION = 6 * 60 * 60

export function getToken() {
  return lStorage.get(TOKEN_CODE)
}

export function setToken(token) {
  lStorage.set(TOKEN_CODE, token, DURATION)
}

export function removeToken() {
  lStorage.remove(TOKEN_CODE)
}

export async function refreshAccessToken() {
  const tokenItem = lStorage.getItem(TOKEN_CODE)
  if (!tokenItem) {
    return
  }
  try {
    const res = await fetchUpdateToken()
    setToken(res.data.token)
  } catch (error) {
    console.error(error)
  }
}
