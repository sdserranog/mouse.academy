import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from 'components/SyntaxHighLighter'
import styles from './description.module.css'

function Description({ description }) {
  return (
    <ReactMarkdown className={styles.container} components={CodeBlock}>
      {description}
    </ReactMarkdown>
  )
}

export default Description
