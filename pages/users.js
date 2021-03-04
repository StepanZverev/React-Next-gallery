import PageContainer from '../components/PageContainer';
import User from '../components/User';

import classes from '../styles/UsersPage.module.scss';

const UsersPage = ({ users }) => {
    return (
        <section className={classes.UsersPage}>
            <PageContainer title="Пользователи">
                <div className={classes.count}>{users.length} пользователей</div>
                <div className={classes.list}>
                    {users.map(user => {
                        return (
                            <User
                                key={user.id}
                                user={user}
                            />
                        )
                    })}
                </div>
            </PageContainer>
        </section>
    )
}

export default UsersPage

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    return {
        props: { users },
    };
};