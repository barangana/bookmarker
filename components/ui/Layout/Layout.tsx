import Head from 'next/head'
import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'bookmarker',
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Your personal digital library.' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
