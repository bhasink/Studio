import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>

      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <title>SWA Studios</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        <link href="https://kit-pro.fontawesome.com/releases/v5.11.2/css/pro.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="../../style.css" />

      </Head>

      <Component {...pageProps} />

    </>
  )
}

export default MyApp
