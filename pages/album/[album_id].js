import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/PageContainer';
import Popup from '../../components/Popup';
import classes from '../../styles/AlbumPage.module.scss';


const AlbumPage = ({ photos, albumInfo }) => {
    const [initPhotoIndex, setInitPhotoIndex] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [author, setAuthor] = useState(null);

    useEffect(async () => {
        if (albumInfo) {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${albumInfo.userId}`);
            const user = await response.json();
            setAuthor(user)
        }
    }, [albumInfo])

    return (
        <section className={classes.AlbumPage}>
            <PageContainer
                title={albumInfo.title}
                suptitle="Альбом"
                subtitle={author ? "Автор: " + author.name : null}
                subtitleLinkTo={author ? `/user/${author.id}` : null}
            >
                <div className={classes.count}>{photos.length} фотографий</div>
                <div className={classes.list}>
                    {photos.map((photo, index) => {
                        return (
                            <img
                                className={classes.photo}
                                key={photo.id}
                                src={photo.thumbnailUrl}
                                onClick={() => {
                                    setInitPhotoIndex(index);
                                    setIsPopupVisible(true);
                                }}
                            />
                        )
                    })}
                </div>
                <Popup
                    photos={photos}
                    initPhotoIndex={initPhotoIndex}
                    visible={isPopupVisible}
                    onClose={() => setIsPopupVisible(false)}
                />
            </PageContainer>
        </section>
    )
}

export default AlbumPage

export async function getServerSideProps({ params }) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.album_id}`);
    const photos = await response.json();
    response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.album_id}`);
    const albumInfo = await response.json();
    return {
        props: { photos, albumInfo },
    };
};