import headerStyles from '../styles/Header.module.css'

function Header() {
  return (
    <div>

        <h1 className={headerStyles.title} >
            <span>Programming</span>  Languages
        </h1>
        {/* <p className={headerStyles.description} >
            Keep up to date with latest web dev news
        </p> */}

    </div>
  )
}

export default Header