import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import classes from '../styles/Album.module.scss';

const Album = ({ id, title }) => {

    const [albumCoverUrl, setAlbumCoverUrl] = useState(null);
    const [albumSize, setAlbumSize] = useState(null);

    useEffect(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        const albumPhotos = await response.json();
        setAlbumCoverUrl(albumPhotos[0].thumbnailUrl);
        setAlbumSize(albumPhotos.length);
    }, [])

    return (
        <Link href={`/album/${id}`}>
            <div className={classes.Album}>
                <div className={classes.title}>{title}</div>
                <img
                    className={classes.cover}
                    src={albumCoverUrl || "https://infosaba.com/assets/Template/images/no_image_found.jpeg?ui_ver=2.1.2.11"} alt={title}
                />
                {albumSize &&
                    <div className={classes.size}>
                        {albumSize}
                    </div>
                }
            </div>
        </Link>
    )
}

export default Album