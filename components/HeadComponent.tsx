import Head from 'next/head'

type Props = {
  title: string
}

export default function HeadComponent({ title }: Props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta
          name="google-site-verification"
          content="Ols7zJrCKLAGMVJ_pXMmkeDaBzvff1ABN198urjsvDU"
        />
        <meta property="og:title" content="Humans of 42" />
        <meta property="og:url" content="humansof42.com" />
        <meta property="og:type" content="website" />
        <title>{title} | Humans of 42</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        />
      </Head>
    </>
  )
}
