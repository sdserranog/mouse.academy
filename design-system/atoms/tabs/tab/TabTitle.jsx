import React from 'react'
import styles from './tabTitle.module.css'

const Tab = ({ title, setSelectedTab, index, active }) => {
  const onClick = () => {
    setSelectedTab(index)
  }

  return (
    <li
      role="button"
      tabIndex="0"
      className={`${styles.container} ${
        active === index ? styles.selected : ''
      }`}
      onClick={onClick}
    >
      {title}
    </li>
  )
}

export default Tab
