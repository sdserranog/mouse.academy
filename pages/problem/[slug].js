import React from 'react'
import getAllProblems from 'services/problems/getAllProblems'
import getProblemBySlug from 'services/problems/getProblemBySlug'
import Description from 'components/Problem/Description'

const Problem = ({ problem }) => {
  return <Description description={problem.description} />
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
