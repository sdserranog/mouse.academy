import Head from 'next/head'
import getAllCategories from 'services/categories/getAllCategories'
import getAllProblems from 'services/problems/getAllProblems'
import styles from '../styles/Home.module.css'

export default function Home({ categories, problems }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mouse Academy</title>
        <meta name="description" content="Mouse Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {categories.map(({ name, id }) => (
          <span key={id}>{name}</span>
        ))}
        {problems.map(({ title, id, slug }) => (
          <a key={id} href={`problem/${slug}`}>
            {title}
          </a>
        ))}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const categories = await getAllCategories()
    const problems = await getAllProblems()
    return {
      props: {
        categories,
        problems,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}
