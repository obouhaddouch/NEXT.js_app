
import { server } from '../config'

import Image from 'next/image'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  
  return (
    <div>
      

      <ArticleList articles={articles} />
       

    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }

}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)

//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }

// }
