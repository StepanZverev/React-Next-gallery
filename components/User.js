import Link from 'next/link'
import React from 'react'

import classes from '../styles/User.module.scss'

const User = ({ user }) => {
    return (
        <Link href={`/user/${user.id}`}>
            <div className={classes.User}>
                <div
                    className={classes.userpic}
                    style={{
                        background: "url(https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png) center center no-repeat",
                        backgroundSize: "cover"
                    }}
                >
                </div>
                <div className={classes.name}>
                    {user.name}
                </div>
                <div className={classes.email}>
                    {user.email}
                </div>
            </div>
        </Link>

    )
}


export default User