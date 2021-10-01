import { Typography } from 'design-system/atoms/typography'
import React from 'react'
import styles from './tabTitle.module.css'

const Tab = ({ title, setSelectedTab, index, active }) => {
  const onClick = () => {
    setSelectedTab(index)
  }

  return (
    <a
      aria-controls={title}
      role="tab"
      className={`${styles.container} ${
        active === index ? styles.selected : ''
      }`}
      onClick={onClick}
    >
      <Typography>{title}</Typography>
    </a>
  )
}

export default Tab
