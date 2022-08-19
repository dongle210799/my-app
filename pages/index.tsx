import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DongLV App</title>
        <meta name="description" content="This is My App Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='text-red-700 text-2xl'>
          <a href="/sign-in">login </a>
        </div>
      </main>
    </div>
  )
}
