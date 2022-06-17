import ArticleItem from './ArticleItem'
import ArticleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        

        <div className={ArticleStyles.grid}>

            {articles.map((article) => (
                <ArticleItem article={article} />
            ))}

        </div>

    )
}



export default ArticleList