import Layout from "@/components/layout"
import Post from "@/components/post";
import styles from '../styles/grid.module.css'

function Blog({posts}) {

    return (
        <Layout
            title={"Blog"}
            description={"Blog GuitarLA, blog de musica, venta de guitarras y más"}
        >
            <main className="contenedor">
                <h1 className="heading">Blog</h1>

                <div className={styles.grid}>
                    {posts?.map(post =>(
                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>
            </main>
            
        </Layout>
    )
}

export default Blog

// metodo estatico
export async function getStaticProps(){ //Consulta api de strapi, la exportamos con props y la leemos en el componoente de Tienda.
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const {data: posts} = await respuesta.json()
    return {props:{
        posts
    }}
}