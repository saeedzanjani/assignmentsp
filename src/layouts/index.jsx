import React from 'react'
import Header from './header'

const Layout = ({children}) => {
  return (
    <div style={{maxWidth: '100vw', overflowX: 'hidden'}}>
        <Header />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout
