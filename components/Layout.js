import Head from 'next/head'
import Script from 'next/script'
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
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css'
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Script src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'></Script>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'GoGig Insurance | Guardify Insurance Group LLC',
  description: "Business owner's #1 choice for insurance",
  keywords: 'GoGig Insurance, risk management, term life quote, business owner',
}
