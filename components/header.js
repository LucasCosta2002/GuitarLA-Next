import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/header.module.css'

function Header() {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={"/"}>
                    <Image src="/img/logo.svg" alt="imagen logo GuitarLA" width={300} height={40}/>
                </Link>
                <nav className={styles.navegacion}>
                    <Link className={`${styles.enlace} ${router.pathname === '/' ? styles.active : ''}`} href={"/"}>Inicio</Link>
                    <Link className={`${styles.enlace} ${router.pathname === '/nosotros' ? styles.active : ''}`} href={"/nosotros"}>Nosotros</Link>
                    <Link className={`${styles.enlace} ${router.pathname === '/tienda' ? styles.active : ''}`} href={"/tienda"}>Tienda</Link>
                    <Link className={`${styles.enlace} ${router.pathname === '/blog' ? styles.active : ''}`} href={"/blog"}>Blog</Link>
                    <Link href="/carrito" className={styles.enlace}>
                        <Image src="/img/carrito.png" alt="imagen carrito" width={30} height={25} />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header