import Guitarra from "@/components/guitarra"
import Layout from "@/components/layout"
import styles from '../styles/grid.module.css'

function Tienda({guitarras}) {
    
    return (
        <Layout
            title={"Tienda Virtual"}
            description={"Tienda GuitarLA, venta de guitarras y más"}
        >
            <main className="contenedor">
                <h2 className="heading">Nuestra Colección</h2>

                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export default Tienda

// metodo dinamico - utilizado para no tener que actualizar las cosas nuevas a mano, obtener informacion actualizada siempre
export async function getServerSideProps(){ 
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data: guitarras} = await respuesta.json()
    return {props:{
        guitarras
    }}
}

// metodo estatico
// export async function getStaticProps(){ //Consulta api de strapi, la exportamos con props y la leemos en el componoente de Tienda.
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//     const {data: guitarras} = await respuesta.json()
//     return {props:{
//         guitarras
//     }}
// }