import React from 'react'
import styles from './card.module.css'

const Card = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default Card
