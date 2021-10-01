import { Button } from 'design-system/atoms/button'
import { Typography } from 'design-system/atoms/typography'
import React from 'react'
import styles from './card.module.css'

const Card = ({ title, buttonTitle, buttonOnClick, children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Typography>{title}</Typography>
        {buttonTitle && (
          <Button type="small" onClick={buttonOnClick}>
            {buttonTitle}
          </Button>
        )}
      </div>
      {children}
    </section>
  )
}

export default Card
