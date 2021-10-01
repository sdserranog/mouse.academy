import React from 'react'
import styles from './typography.module.css'

export function Typography({ type = 'body', color, children, className, id }) {
  switch (type) {
    case 'title':
      return (
        <h1 id={id} className={getClassName('h1', className)}>
          {children}
        </h1>
      )
    case 'subtitle':
      return (
        <h2 id={id} className={getClassName('h2', className)}>
          {children}
        </h2>
      )
    case 'subtitle2':
      return (
        <h3 id={id} className={getClassName('h3', className)}>
          {children}
        </h3>
      )
    case 'body':
      return (
        <span id={id} className={getClassName('body', className)}>
          {children}
        </span>
      )
    case 'caption':
      return (
        <span id={id} className={getClassName('caption', className)}>
          {children}
        </span>
      )
    case 'tiny':
      return (
        <span id={id} className={getClassName('tiny', className)}>
          {children}
        </span>
      )
  }

  function getClassName(element, className) {
    return `${styles.typography} ${styles[`text-${element}`]} ${
      color ? styles[`text-${color}`] : ''
    } ${className}`
  }
}
