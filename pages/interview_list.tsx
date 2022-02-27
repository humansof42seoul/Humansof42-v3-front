import { GetStaticProps, NextPage } from "next"
import Interview from "../components/Interview";

type Post = {
    title: string
    content: string
}

const InterviewList: NextPage = ({posts}) => {
    console.log(process.env.NEXT_PUBLIC_APP_BACKEND)
    return (
        <ul>
            {posts.map((post: Post) => (
                <Interview key={post.title} title={post.title} content={post.content}></Interview> 
            ))}
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async() => {
    const res = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND + '/api/post')
    const posts = await res.json()
    
    return {
        props : {
            posts
        }
    }
}

export default InterviewList