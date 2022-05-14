import styles from '../styles/404.module.css'
import Link from 'next/link'

export default function FourOhFour() {
    return <>
        <div className={styles.main}>
            <div className={styles.fof}>
                <h1>Page not found - 404</h1>
                <Link href="/">
                    <a>
                        Go back home
                    </a>
                </Link>
            </div>
        </div>

    </>
}