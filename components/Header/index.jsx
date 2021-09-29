import React from 'react'
import Logo from 'design-system/atoms/brand'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
      </div>
    </header>
  )
}

export default Header
