
import Link from 'next/link'
import ArticleStyles from '../styles/Article.module.css'

function ArticleItem({article}) {
  return (
    <Link href={`/article/${article.id}`}>

        <a className={ArticleStyles.card} >
            <h3> {article.title} &rarr; </h3>
            <p> {article.excerpt} </p>
        </a>




    </Link>
  )
}

export default ArticleItem