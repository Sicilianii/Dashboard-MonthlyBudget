import {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from './navigation.module.scss';


const Navigation: FC = () => {
    return (
        <nav className={styles.navigation} id='navigation'>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending-link' : isActive ? 'active-link' : ''} to={'/'}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7891 6.64066L7.75156 0.606289L7.34687 0.201602C7.25467 0.110003 7.12997 0.0585938 7 0.0585938C6.87003 0.0585938 6.74533 0.110003 6.65312 0.201602L0.210937 6.64066C0.116454 6.73478 0.0417828 6.84687 -0.0086694 6.97031C-0.0591216 7.09376 -0.0843322 7.22606 -0.0828133 7.35941C-0.0765633 7.90941 0.381249 8.34848 0.931249 8.34848H1.59531V13.4375H12.4047V8.34848H13.0828C13.35 8.34848 13.6016 8.24379 13.7906 8.05473C13.8837 7.96193 13.9575 7.85159 14.0076 7.73009C14.0578 7.6086 14.0833 7.47836 14.0828 7.34691C14.0828 7.08129 13.9781 6.82973 13.7891 6.64066ZM7.875 12.3125H6.125V9.12504H7.875V12.3125ZM11.2797 7.22348V12.3125H8.875V8.75004C8.875 8.40473 8.59531 8.12504 8.25 8.12504H5.75C5.40469 8.12504 5.125 8.40473 5.125 8.75004V12.3125H2.72031V7.22348H1.22031L7.00156 1.44691L7.3625 1.80785L12.7812 7.22348H11.2797Z"/>
                </svg>
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending-link' : isActive ? 'active-link' : ''} to={'/dashboard'}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 7.84422H6.90626V2.25047C6.90626 2.18172 6.85001 2.12547 6.78126 2.12547H6.37501C5.55423 2.12413 4.74128 2.28509 3.98294 2.5991C3.2246 2.91311 2.53583 3.37397 1.95626 3.95516C1.38549 4.52416 0.930713 5.19864 0.617197 5.9411C0.290955 6.71116 0.123548 7.53916 0.125009 8.37547C0.123665 9.19626 0.284628 10.0092 0.598638 10.7675C0.912647 11.5259 1.3735 12.2147 1.9547 12.7942C2.52813 13.3677 3.19688 13.8192 3.94063 14.1333C4.71069 14.4595 5.53869 14.6269 6.37501 14.6255C7.19579 14.6268 8.00874 14.4659 8.76708 14.1518C9.52542 13.8378 10.2142 13.377 10.7938 12.7958C11.3672 12.2224 11.8188 11.5536 12.1328 10.8098C12.4591 10.0398 12.6265 9.21179 12.625 8.37547V7.96922C12.625 7.90047 12.5688 7.84422 12.5 7.84422ZM10.0266 12.0598C9.54274 12.5399 8.96894 12.9198 8.33805 13.1777C7.70716 13.4357 7.03158 13.5666 6.35001 13.563C4.97345 13.5567 3.6797 13.0177 2.70626 12.0442C1.72657 11.0645 1.18751 9.76141 1.18751 8.37547C1.18751 6.98954 1.72657 5.68641 2.70626 4.70672C3.55938 3.8536 4.65782 3.33329 5.84376 3.21454V8.90672H11.5359C11.4156 10.0989 10.8906 11.2036 10.0266 12.0598ZM13.875 6.97547L13.8344 6.53485C13.7016 5.09579 13.0625 3.73797 12.0344 2.71297C11.0055 1.68609 9.65051 1.05058 8.20313 0.9161L7.76095 0.875475C7.68751 0.869225 7.62501 0.925475 7.62501 0.998912V7.00047C7.62501 7.06922 7.68126 7.12547 7.75001 7.12547L13.75 7.10985C13.8234 7.10985 13.8813 7.04735 13.875 6.97547ZM8.68438 6.0661V2.05672C9.66866 2.26274 10.5719 2.75019 11.2844 3.45985C11.9984 4.17235 12.4875 5.0786 12.6906 6.05516L8.68438 6.0661Z"/>
                </svg>
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending-link' : isActive ? 'active-link' : ''} to={'/login'}>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8781 9.1863C11.487 8.79489 11.03 8.47543 10.5281 8.24255C11.2359 7.66912 11.6875 6.79412 11.6875 5.81287C11.6875 4.08162 10.2437 2.6613 8.51248 2.68787C6.80779 2.71443 5.43435 4.10349 5.43435 5.81287C5.43435 6.79412 5.88748 7.66912 6.59373 8.24255C6.09171 8.47526 5.6347 8.79474 5.24373 9.1863C4.3906 10.041 3.90623 11.1691 3.87498 12.3722C3.87456 12.3889 3.87749 12.4055 3.88358 12.421C3.88968 12.4366 3.89882 12.4507 3.91047 12.4627C3.92212 12.4746 3.93604 12.4841 3.95141 12.4906C3.96678 12.497 3.9833 12.5004 3.99998 12.5004H4.87498C4.94217 12.5004 4.99842 12.4472 4.99998 12.3801C5.02967 11.4738 5.39685 10.6254 6.04217 9.98162C6.37238 9.64964 6.76517 9.38646 7.19778 9.2073C7.63039 9.02814 8.09424 8.93656 8.56248 8.93787C9.51404 8.93787 10.4094 9.30818 11.0828 9.98162C11.7265 10.6254 12.0937 11.4738 12.125 12.3801C12.1265 12.4472 12.1828 12.5004 12.25 12.5004H13.125C13.1417 12.5004 13.1582 12.497 13.1735 12.4906C13.1889 12.4841 13.2028 12.4746 13.2145 12.4627C13.2261 12.4507 13.2353 12.4366 13.2414 12.421C13.2475 12.4055 13.2504 12.3889 13.25 12.3722C13.2187 11.1691 12.7344 10.041 11.8781 9.1863ZM8.56248 7.81287C8.0281 7.81287 7.52498 7.60505 7.14842 7.22693C6.95944 7.03944 6.81016 6.8158 6.70949 6.56937C6.60882 6.32293 6.55882 6.05874 6.56248 5.79255C6.56717 5.28005 6.77185 4.78474 7.12967 4.41755C7.50467 4.03318 8.00623 3.81912 8.54217 3.81287C9.07185 3.80818 9.58592 4.01443 9.96404 4.38474C10.3515 4.76443 10.564 5.27224 10.564 5.81287C10.564 6.34724 10.3562 6.8488 9.9781 7.22693C9.79259 7.41333 9.57196 7.56109 9.32897 7.66167C9.08598 7.76224 8.82546 7.81363 8.56248 7.81287ZM4.64842 6.22537C4.63435 6.08943 4.62654 5.95193 4.62654 5.81287C4.62654 5.56443 4.64998 5.32224 4.69373 5.0863C4.70467 5.03005 4.67498 4.97224 4.62342 4.9488C4.41092 4.85349 4.2156 4.72224 4.04685 4.55662C3.84801 4.36382 3.69154 4.13168 3.58742 3.87503C3.48331 3.61837 3.43384 3.34283 3.44217 3.06599C3.45623 2.56443 3.65779 2.08787 4.00935 1.72849C4.39529 1.33318 4.91404 1.11755 5.4656 1.1238C5.96404 1.12849 6.44529 1.32068 6.80935 1.6613C6.93279 1.77693 7.03904 1.90505 7.1281 2.04255C7.15935 2.09099 7.22029 2.1113 7.27342 2.09255C7.54842 1.99724 7.83904 1.93005 8.13748 1.8988C8.22498 1.88943 8.27498 1.79568 8.23592 1.71755C7.7281 0.712866 6.6906 0.0191166 5.4906 0.000366621C3.75779 -0.0261959 2.31404 1.39412 2.31404 3.1238C2.31404 4.10505 2.7656 4.98005 3.47342 5.55349C2.97654 5.78318 2.51873 6.10037 2.12185 6.49724C1.2656 7.35193 0.781228 8.48005 0.749978 9.68474C0.749561 9.70142 0.752486 9.71801 0.758581 9.73354C0.764676 9.74907 0.773817 9.76322 0.785466 9.77516C0.797115 9.7871 0.811037 9.79659 0.82641 9.80306C0.841783 9.80954 0.858296 9.81287 0.874978 9.81287H1.75154C1.81873 9.81287 1.87498 9.75974 1.87654 9.69255C1.90623 8.7863 2.27342 7.93787 2.91873 7.29412C3.3781 6.83474 3.9406 6.51599 4.55467 6.3613C4.6156 6.34568 4.65623 6.28787 4.64842 6.22537Z"/>
                </svg>
            </NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending-link' : isActive ? 'active-link' : ''} to={'/'}>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.02656 10C3.05781 10 3.08906 9.99687 3.12031 9.99219L5.74844 9.53125C5.77969 9.525 5.80938 9.51094 5.83125 9.4875L12.4547 2.86406C12.4692 2.84961 12.4807 2.83244 12.4885 2.81354C12.4963 2.79463 12.5004 2.77437 12.5004 2.75391C12.5004 2.73344 12.4963 2.71318 12.4885 2.69428C12.4807 2.67538 12.4692 2.65821 12.4547 2.64375L9.85781 0.0453125C9.82812 0.015625 9.78906 0 9.74687 0C9.70469 0 9.66563 0.015625 9.63594 0.0453125L3.0125 6.66875C2.98906 6.69219 2.975 6.72031 2.96875 6.75156L2.50781 9.37969C2.49261 9.46339 2.49804 9.54954 2.52364 9.63067C2.54923 9.71181 2.59421 9.78548 2.65469 9.84531C2.75781 9.94531 2.8875 10 3.02656 10ZM4.07969 7.275L9.74687 1.60938L10.8922 2.75469L5.225 8.42031L3.83594 8.66562L4.07969 7.275ZM12.75 11.3125H1.25C0.973437 11.3125 0.75 11.5359 0.75 11.8125V12.375C0.75 12.4438 0.80625 12.5 0.875 12.5H13.125C13.1938 12.5 13.25 12.4438 13.25 12.375V11.8125C13.25 11.5359 13.0266 11.3125 12.75 11.3125Z"/>
                </svg>
            </NavLink>
        </nav>
    );
};

export default Navigation;