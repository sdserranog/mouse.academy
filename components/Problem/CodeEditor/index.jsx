import React from 'react'
import styles from './code-editor.module.css'

import editorOptions from './editorOptions'
import Editor from '@monaco-editor/react'

const CodeEditor = () => {
  return (
    <div className={styles.container}>
      <Editor
        theme="vs-dark"
        defaultLanguage="javascript"
        options={editorOptions}
        defaultValue="function hello() {\n\talert('Hello world!');\n}"
      />
    </div>
  )
}

export default CodeEditor
