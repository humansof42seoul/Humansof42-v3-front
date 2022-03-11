import type { NextPage } from 'next'
import Member from '../components/Member'
import styles from '../styles/Home.module.css'
import HeadComponent from '../components/HeadComponent'

const About: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <HeadComponent title="About" />
        <main className={styles.main}>
          <h1 className={styles.title}>About</h1>
        </main>
        <div className="members-container">
          <Member
            name="yeji"
            role="interviewer"
            gitId="yechoi42"
            imgLocation="/yechoi.jpeg"
          />
          <Member
            name="dog"
            role="interviewer"
            gitId="yechoi42"
            imgLocation="/dog.jpeg"
          />
          <Member
            name="yeji"
            role="interviewer"
            gitId="yechoi42"
            imgLocation="/yechoi.jpeg"
          />
          <Member
            name="yeji"
            role="interviewer"
            gitId="yechoi42"
            imgLocation="/yechoi.jpeg"
          />
        </div>
      </div>
      <style jsx>{`
        .members-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default About
