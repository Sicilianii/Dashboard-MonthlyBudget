import {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './navigation.module.scss';

const Navigation: FC = () => {
    return (
        <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to={'/'}>Home</Link></li>
            <li className={styles.navigationItem}><Link to={'/login'}>Login</Link></li>
            <li className={styles.navigationItem}><Link to={'/dashboard'}>Dashboard</Link></li>
        </ul>
    );
};

export default Navigation;