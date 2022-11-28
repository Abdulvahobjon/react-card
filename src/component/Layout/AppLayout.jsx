import React from 'react'

function AppLayout({children}) {
  return (
    <>
    {/* <Header /> */}
    <main>
        {children}
    </main>
    {/* <Footer /> */}
    </>
  )
}

export default AppLayout