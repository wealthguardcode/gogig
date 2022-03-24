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
        {/* <link rel='stylesheet' href='https://rsms.me/inter/inter.css' /> */}
      </Head>
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'GoGig Insurance | Guardify Insurance Group LLC',
  description: "Business owner's #1 choice for insurance",
  keywords: 'GoGig Insurance, risk management, term life quote, business owner',
}
