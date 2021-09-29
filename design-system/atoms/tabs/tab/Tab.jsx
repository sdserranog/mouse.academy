import React from 'react'
import styles from './tab.module.css'

const Tab = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Tab
