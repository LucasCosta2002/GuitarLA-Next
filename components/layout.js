import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

function Layout({children, title = '', description = ''}) { //diseño que se va a imprimir en todas las paginas, como el header y footer
    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name="description" content={`${description}`} />
            </Head>
            <Header/>
            {children}
            <Footer/> 
        </>
    )
}

export default Layout