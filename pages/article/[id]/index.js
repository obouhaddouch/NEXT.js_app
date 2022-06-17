import { server } from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { useRouter } from 'next/router'
import styles from '../../../styles/oneArticle.module.css'

function article({ article }) {

    return <>

        <Meta title={article.title} />

        <div className={styles.container}>

            <h1> {article.title} </h1>
            <p> {article.body} </p>

            <br />
            <div>

                <Link href='/'> Go Back </Link>

            </div>
            

        </div>



    </>

}


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async (context) => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default article


// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false,
//     }
// }

// export default article