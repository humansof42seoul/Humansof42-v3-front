import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import HeadComponent from '../components/HeadComponent'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title="About" />
      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
      </main>
    </div>
  )
}

export default About
