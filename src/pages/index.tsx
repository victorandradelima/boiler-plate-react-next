import Head from 'next/head'
import Image from 'next/image'
import { Container, SvgImage } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Victor Lima</title>
      </Head>
      <main>
        <Image src="/images/logo.gif" alt="Logo" width="100%" height="100%" />
        <h1>Site em desenvolvimento, aguarde mais um pouco.</h1>
        <SvgImage>
          <Image
            src="/images/roulette.svg"
            alt="SVG Test"
            width="100%"
            height="100%"
          />
        </SvgImage>
      </main>
    </Container>
  )
}

export default Home
