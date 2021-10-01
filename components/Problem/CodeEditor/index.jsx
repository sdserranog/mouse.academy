import React from 'react'
import styles from './code-editor.module.css'

import editorOptions from './editorOptions'
import Editor from '@monaco-editor/react'

const CodeEditor = ({ defaultCode, readOnly = false }) => {
  const options = { ...editorOptions, readOnly: readOnly }
  return (
    <div className={styles.container}>
      <Editor
        theme="vs-dark"
        defaultLanguage="javascript"
        options={options}
        defaultValue={defaultCode}
      />
    </div>
  )
}

export default CodeEditor
