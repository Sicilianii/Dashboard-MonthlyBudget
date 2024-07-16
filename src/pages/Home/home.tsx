import {FC} from 'react';
import style from './home.module.scss';
import {Link} from "react-router-dom";

const Home: FC = () => {
    return (
        <>
            <div className={style.item}>Home Page</div>
            <Link to={'/login'}>Login</Link>
        </>
    );
}

export default Home;