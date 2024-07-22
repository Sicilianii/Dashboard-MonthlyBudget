import {FC} from 'react';
import {Outlet} from "react-router-dom";
import styles from './rootLayout.module.scss';
import Navigation from "../../features/Navigation/navigation.tsx";

const RootLayout: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;