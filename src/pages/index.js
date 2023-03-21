import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Search } from '@/components/forms/search'
import { JbCards } from '@/components/cards/jbcards'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_layout}>
        <section className={styles.heading}>
         <h1 className={styles.title}>Find a <span className={styles.titleColor}>graduate/internship </span><br /> job around you</h1>
         <p className={styles.subtitle}>Thousands of entry-level and internship roles for students across different sectors</p>
         <Search />
       </section>

       <section className={styles.jobs}>
          <div className={styles.sidebar}>
            <h2>Resources</h2>
            <p>Career resources to help you on your journey</p>
          </div>
          <div>
            <h2>Latest Opportunities</h2>
            <JbCards />
          </div>
        </section>
      </main>
    </>
  )
}
