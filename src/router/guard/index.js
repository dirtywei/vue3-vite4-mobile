import { createPageTitleGuard } from './page-title-guard'
import { createPermissionGuard } from './permission-guard'

export function setupRouterGuard(router) {
  createPermissionGuard(router)
  createPageTitleGuard(router)
}
