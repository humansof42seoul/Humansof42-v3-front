import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Interview from '../../components/Interview'

type Post = {
  id: number
  title: string
  content: string
}

const InterviewList: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul>
      {posts.map((post: Post) => (
        <Interview
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        ></Interview>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND + '/api/post')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default InterviewList
