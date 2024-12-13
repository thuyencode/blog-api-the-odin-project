import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import type { ReactElement } from 'react'
import Footer from './footer'
import Header from './header'

export const Layout = (): ReactElement => (
  <>
    <Header />

    <div className='flex flex-1 max-md:items-center'>
      <Outlet />
    </div>

    <Footer />

    <TanStackRouterDevtools />
    <ReactQueryDevtools />
  </>
)
