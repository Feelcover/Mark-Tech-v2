import Header from '@/components/Header/Header'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <><Header/>{children}</>
  )
}

export default Layout
