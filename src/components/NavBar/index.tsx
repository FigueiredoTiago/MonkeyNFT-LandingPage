import styles from './styles.module.css';

const index = () => {
  return (
    <header className={styles.navbar_header}>

        <a className={styles.logo} href="/">MONKEYNFT</a>


        <nav>
            <ul className={styles.navbar}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Marketplace</a></li>
                <li><a href="/">Creators</a></li>
                <li><a href="/">Resource</a></li>
                
            </ul>


            <a href='#' className={styles.button}>Connect Wallet</a>
        </nav>


    </header>
  )
}

export default index