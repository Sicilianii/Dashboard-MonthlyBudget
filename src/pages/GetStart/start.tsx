import {FC} from 'react';
import styles from './start.module.scss';
import {Link} from "react-router-dom";

const Start: FC = () => {
    return (
        <>
            <div className={styles.header}>Hello! Get Started!</div>
            <Link to={'/login'}>Login</Link>
        </>
    );
};

export default Start;