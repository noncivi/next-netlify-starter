import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>나만의 홈페이지</title>
        <meta name="description" content="간단한 Next.js 홈페이지 예제" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="안녕하세요, 새 홈페이지에 오신 것을 환영합니다!" />
        <p className="description">
          이 페이지는 Next.js와 Netlify를 사용하여 만들어졌습니다.
        </p>
        <ul>
          <li>빠른 시작</li>
          <li>쉬운 배포</li>
          <li>React 기반</li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
