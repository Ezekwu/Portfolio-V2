// src/routes/__root.tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => <Outlet />
  ,
})
