import styles from '../styles/curso.module.css'


function Curso({curso}) {
    const {contenido, imagen, titulo} = curso.attributes;

    console.log(curso);
    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>{`
                .curso{
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data[0]?.attributes?.url})
                }
            `}</style>
            <div className={`${styles.grid} contenedor`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>
  )
}

export default Curso