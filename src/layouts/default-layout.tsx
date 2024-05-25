import { Outlet } from 'react-router-dom'
import { LayoutDefault } from './default-layout.styles'

export function DefaultLayout() {
  return (
    <LayoutDefault>
      <Outlet />
    </LayoutDefault>
  )
}
