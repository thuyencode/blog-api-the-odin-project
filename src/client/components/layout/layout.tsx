import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import type { ReactElement } from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

export const Layout = (): ReactElement => (
  <>
    <Header />

    <Sidebar />

    <div className='mx-2 flex flex-1 items-center justify-center'>
      <Outlet />
    </div>

    <Footer />

    <TanStackRouterDevtools />
  </>
)
