import React from 'react'
import Link from 'next/link';
import classes from '../../styles/UserPage.module.scss';
import PageContainer from '../../components/PageContainer';
import Album from '../../components/Album';


const UserPage = ({ user, albums }) => {
    return (
        <section className={classes.UserPage}>
            <PageContainer
                suptitle="Пользователь"
                title={user.name}
                subtitle={user.email}
            >
                <h3 className={classes.list_title}>
                    Альбомы пользователя
                </h3>
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

export default UserPage

export async function getServerSideProps({ params }) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.user_id}`);
    const user = await response.json();
    response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.user_id}`);
    const albums = await response.json();
    return {
        props: { albums, user },
    };
};