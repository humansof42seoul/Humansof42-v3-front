import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

type Post = {
  id: number
  title: string
  content: string
}

const InterviewEnd: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className="container">
        <h1>{post.title}</h1>
        <div>{post.content}</div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND + `/api/post/`)
  const posts = await res.json()
  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const res = await fetch(
    process.env.NEXT_PUBLIC_APP_BACKEND + `/api/post/${id}`
  )
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export default InterviewEnd
