import { getToken } from '@/utils'

export function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    const token = getToken()

    /** 没有token的情况 */
    if (token) {
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }
    /** 有token的情况 */
    if (to.path === '/login') return { path: '/' }

    return true
  })
}
