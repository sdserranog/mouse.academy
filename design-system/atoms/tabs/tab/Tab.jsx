import React from 'react'
import styles from './tab.module.css'

const Tab = ({ children }) => {
  return <article className={styles.container}>{children}</article>
}

export default Tab
