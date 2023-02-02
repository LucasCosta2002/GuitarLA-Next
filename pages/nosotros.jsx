import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

function Nosotros() {
    return (
        <Layout
            title={"Nosotros"}
            description={"Sobre Nosotros. GuitarLA, blog de musica, venta de guitarras y más"}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image alt="Imagen nosotros" src="/img/nosotros.jpg" width={1000} height={800}/>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio beatae, mollitia nostrum commodi molestias quod obcaecati, ullam accusamus, ipsum eos quas. Quia quibusdam provident saepe porro laboriosam enim? Quas, laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit illum molestias alias, quod nam vitae aut nemo deleniti perspiciatis, nostrum ab reprehenderit dolore illo necessitatibus! Accusantium soluta sapiente laudantium.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio beatae, mollitia nostrum commodi molestias quod obcaecati, ullam accusamus, ipsum eos quas. Quia quibusdam provident saepe porro laboriosam enim? Quas, laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div> 
                </div>
            </main>
            
        </Layout>
    )
}

export default Nosotros