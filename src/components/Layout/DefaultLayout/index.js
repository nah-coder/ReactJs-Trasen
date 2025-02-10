import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

export default function DefaultLayout({children}) {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  )
}
