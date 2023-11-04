import styles from './Favoritos.module.css';

import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id="1" titulo="Um componente no espaço" capa="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png" />
            </section>
        </>
    )
}

export default Favoritos;