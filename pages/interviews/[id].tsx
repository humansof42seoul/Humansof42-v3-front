import { NextPage } from "next";

const InterviewEnd: NextPage = (
    
) => {
    return (
        <>
        <p>hoho</p>
        </>
    )
}

// export const getStaticPaths = async () => {
//     // Return a list of possible value for id
//   }

// export function getAllPostIds() {
//     const fs = require('fs');
//     const fileNames = fs.readdirSync(postsDirectory)

// return fileNames.map(fileName => {
//     return {
//     params: {
//         id: fileName.replace(/\.md$/, '')
//     }
//     }
// })
// }

// export const getStaticProps: GetStaticProps = async ({params}) => {
//     const res = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND + '/api/post')
//     const post = await res.json()
  
//     return {
//       props: {
//         post,
//       },
//     }

export default InterviewEnd