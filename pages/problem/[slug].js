import React from 'react'
import Head from 'next/head'
import styles from './problem.module.css'

import getAllProblems from 'services/problems/getAllProblems'
import getProblemBySlug from 'services/problems/getProblemBySlug'

import Tabs from 'design-system/atoms/tabs'
import Tab from 'design-system/atoms/tabs/tab/Tab'

import Description from 'components/Problem/Description'
import CodeEditor from 'components/Problem/CodeEditor'
import Card from 'components/Problem/Card'

const Problem = ({ problem }) => {
  return (
    <>
      <Head>
        <title>Mouse Academy</title>
        <meta name="description" content="Mouse Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <Tabs>
            <Tab title="Descripción">
              <Description description={problem.description} />
            </Tab>
            <Tab title="Solución">
              <CodeEditor readOnly={true} />
            </Tab>
            <Tab title="Explicación">
              <Description description={problem.description} />
            </Tab>
          </Tabs>
        </div>
        <div className={styles['code-editor']}>
          <Card
            title="Solución"
            buttonTitle="Testear"
            buttonOnClick={() => {
              console.log('Testear')
            }}
          >
            <CodeEditor defaultCode={problem.defaultCode} />
          </Card>
        </div>
        <div className={styles.tests}>
          <Card title="Tests">
            <CodeEditor defaultCode={problem.defaultTest} />
          </Card>
        </div>
      </main>
    </>
  )
}

export default Problem

export async function getStaticPaths() {
  try {
    const problems = await getAllProblems()

    // Get paths
    const paths = problems.map(({ slug }) => ({
      params: { slug },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const problem = await getProblemBySlug(slug)
    return {
      props: {
        problem,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
