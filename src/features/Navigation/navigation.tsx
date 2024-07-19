import {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from './navigation.module.scss';

const Navigation: FC = () => {
    return (
        <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className={styles.navigationItem}>
                <NavLink to={'/login'}>Login</NavLink>
            </li>

            <li className={styles.navigationItem}>
                <NavLink to={'/dashboard'}>
                    <svg fill="#000000" width="36px" height="36px" viewBox="0 0 36 36" version="1.1"
                         preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34,30H2a1,1,0,0,0,0,2H34a1,1,0,0,0,0-2Z"></path>
                        <path d="M16,5a1,1,0,0,0-1-1H7A1,1,0,0,0,6,5V28H16ZM14,26H8V6h6Z"></path>
                        <path d="M30,13a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V28H30ZM28,26H22V14h6Z"></path>
                        <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                    </svg>
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;