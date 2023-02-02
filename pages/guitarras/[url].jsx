import { useState } from "react";
import Image from "next/image";
import Layout from '../../components/layout'
import styles from '../../styles/guitarras.module.css'

function Producto({guitarra, agregarCarrito}) {

    const [cantidad, setCantidad] = useState(0)
    const {nombre, descripcion, imagen, precio} = guitarra[0].attributes;

    const handleSubmit = e =>{
        e.preventDefault();

        if (cantidad < 1) {
            alert("Cantidad Invalida")
            return;
        }

        // construir obj para almacnearla en LS
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // pasar info al context(_app) que lo hace disponible en todas las paginas 
        agregarCarrito(guitarraSeleccionada)
    }

    return (

        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} alt={`imagen guitarra ${nombre}`} width={600} height={400} />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form 
                        className={styles.formulario}
                        onSubmit={handleSubmit}    
                    >
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select
                            id="cantidad"
                            onChange={e => setCantidad(+e.target.value)}
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="3">2</option>
                            <option value="4">3</option>
                            <option value="5">4</option>
                        </select>

                        <input
                            type="submit"
                            value="Agregar al Carrito"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Producto

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url ?? 'no-url'
        }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const {data: guitarra} = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}