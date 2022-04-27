import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

export default function Navigation() {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>
                </div>
                {/* <h1>The navigation bar</h1> */}
            </div>
            <Outlet />
        </Fragment>
    )
};