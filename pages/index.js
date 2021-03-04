import classes from '../styles/Index.module.scss';
import Link from 'next/link';
import PageContainer from '../components/PageContainer';

const Index = () => {
    return (
        <section className={classes.Index}>
            <PageContainer>
                <h1 className={classes.title}>Главная</h1>
                <Link href="/users"><a className={classes.link}>Пользователи</a></Link>
                <Link href="/albums"><a className={classes.link}>Альбомы</a></Link>
            </PageContainer>
        </section>
    )
}

export default Index;