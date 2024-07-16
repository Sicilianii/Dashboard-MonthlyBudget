import {FC} from 'react';
import styles from './login.module.scss'
import {Link} from "react-router-dom";

const Login: FC = () => {
    return (
        <>
            <div className={styles.item}>Login Page</div>
            <Link to={'/dashboard'}>Dashboard</Link>
        </>
    );
}

export default Login;