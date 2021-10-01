import React from 'react'
import classNames from 'classnames'

import { Typography } from 'design-system/atoms/typography'

import styles from './button.module.css'

export function Button({
  className,
  onClick,
  children,
  type = 'medium',
  color = 'primary',
}) {
  return (
    <button
      className={classNames(styles.btn, styles[type], styles[color], className)}
      onClick={onClick}
    >
      <Typography>{children}</Typography>
    </button>
  )
}
