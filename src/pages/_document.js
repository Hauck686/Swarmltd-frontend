import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#29484D' />

          {/* Primary SEO Meta */}
          <meta
            name='title'
            content='swarmltd | Trusted Investment, Loan & Savings Company'
          />
          <meta
            name='description'
            content='swarmltd is a reliable financial platform offering secure investments, flexible loan options, and smart savings plans. Build wealth confidently with transparent services and expert financial support.'
          />
          <meta
            name='keywords'
            content='swarmltd, investment company, savings platform, loan services, financial planning, secure investment, personal finance, wealth growth, lending solutions, high-yield savings'
          />
          <meta name='author' content='swarmltd Finance' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.smartpocket.com/' />
          <meta
            property='og:title'
            content='swarmltd | Trusted Investment, Loan & Savings Company'
          />
          <meta
            property='og:description'
            content='Invest, save, and borrow smarter with swarmltd. Transparent, secure, and customer-focused financial services for your growth.'
          />
          <meta
            property='og:image'
            content='https://i.postimg.cc/7YFyGKJ9/swarmltd.jpg'
          />

          {/* Twitter Meta */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:url' content='https://www.swarmltd.com/' />
          <meta
            name='twitter:title'
            content='swarmltd | Trusted Investment, Loan & Savings Company'
          />
          <meta
            name='twitter:description'
            content='Empowering your financial journey with secure investments, flexible loans, and smart savings plans.'
          />
          <meta
            name='twitter:image'
            content='https://i.postimg.cc/7YFyGKJ9/swarmltd.jpg'
          />

          {/* Favicon */}
          <link rel='icon' href='https://i.postimg.cc/7YFyGKJ9/swarmltd.jpg' />

          {/* Google Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
            rel='stylesheet'
          />

          {/* Structured Data / Schema */}
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FinancialService',
                name: 'swarmltd',
                url: 'https://www.swarmltd.com',
                logo: 'https://i.postimg.cc/7YFyGKJ9/swarmltd.jpg',
                description:
                  'swarmltd provides secure investment, flexible loan, and savings services designed to help individuals and businesses grow wealth confidently.',
                sameAs: [
                  'https://facebook.com/smartpocket',
                  'https://twitter.com/smartpocket',
                  'https://instagram.com/smartpocket'
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
