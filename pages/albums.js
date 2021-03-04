import Album from '../components/Album';
import PageContainer from '../components/PageContainer';
import classes from '../styles/AlbumsPage.module.scss';

const AlbumsPage = ({ albums }) => {
    return (
        <section className={classes.AlbumsPage}>
            <PageContainer title="Альбомы">
                <div className={classes.count}>{albums.length} альбомов</div>
                <div className={classes.list}>
                    {albums.map(album => {
                        return (
                            <Album
                                key={album.id}
                                id={album.id}
                                title={album.title}
                            />
                        )
                    })}
                </div>
            </PageContainer>
        </section>
    )
}

export default AlbumsPage

export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const albums = await response.json();
    return {
        props: { albums },
    };
};