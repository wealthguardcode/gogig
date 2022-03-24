import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </Head>
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Guardify Insurance Group LLC',
  description: 'BUSINESS OWNERS #1 CHOICE FOR INSURANCE',
  keywords: 'Insurance,',
}
