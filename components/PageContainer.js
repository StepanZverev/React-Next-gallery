import classes from '../styles/PageContainer.module.scss';
import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image';


const PageContainer = ({ title, suptitle, subtitle, children, subtitleLinkTo }) => {
    const router = useRouter();

    return (
        <div className={classes.PageContainer}>
            <div className={classes.container}>
                <div className={classes.header}>
                    {router.asPath !== "/" ?
                        < nav className={classes.nav}>
                            <span className={classes.backlink} onClick={() => router.back()}>Назад</span>
                            <Link className={classes.link} href="/">
                                Главная
                            </Link>
                        </nav>
                        :
                        null
                    }
                    {suptitle &&
                        <div className={classes.suptitle}>
                            {suptitle}
                        </div>
                    }
                    {title &&
                        <h2 className={classes.title}>
                            {title}
                        </h2>
                    }
                    {subtitle &&
                        <div className={classes.subtitle}>
                            {!!subtitleLinkTo ?
                                <Link
                                    href={subtitleLinkTo}
                                >
                                    {subtitle}
                                </Link>
                                :
                                subtitle
                            }
                        </div>
                    }
                </div>
                {children}
            </div>
            <a className={classes.git} target="_blank" href="https://github.com/StepanZverev">
                <Image
                    src={"/git.svg"}
                    alt="git"
                    width={20}
                    height={20}
                />
            </a>
        </div >
    )
}

export default PageContainer