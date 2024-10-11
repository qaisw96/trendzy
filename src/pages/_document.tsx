import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Trendzy - Discover the latest trends in fashion.'
        />
        <meta name='keywords' content='fashion, ecommerce, trends, clothing' />
        <meta name='author' content='Trendzy' />
        <link rel='icon' href='/favicon.ico' />
        <title>Trendzy - Fashion for Everyone</title>
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
