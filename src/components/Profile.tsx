import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/66537139?s=460&u=6ff21e4ad147c832984e854002734b0a2e39b4cb&v=4" alt="Carlos Eduardo"/>
      <div>
        <strong>Carlos Eduardo</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
          </p>
      </div>
    </div>
  )
}