import React from 'react';
import styles from './sidebar.module.css'
import Header from '../header/header';
import share from '../../assets/img/share.svg'
import user from '../../assets/img/user.svg'
import exchange from '../../assets/img/exchange.svg'
import balancesheet from '../../assets/img/balancesheet.svg'
import warning from '../../assets/img/warning.svg'
import dashboard from '../../assets/img/dashboard.svg'
import cashbg from '../../assets/img/Mask Group 48.svg'
import {
    HashRouter as Router,
    Redirect,
    Route,
    Link,
    RouteComponentProps,
    Switch,
} from "react-router-dom";
import VendorMain from '../vendors/vendor_main';
import Sale from '../sale/sale';
import Wallet from '../wallet/wallet';




const SideBarHead = () => {
    return (
        <div>
            <div><Header /></div>
            <div className={styles.sidebar__objects}>
                <nav className="navbar ml-0 p-0">
                    <div className="col-lg-2 p-0">
                        <div className={styles.hover__link}>
                            <ul class="navbar-nav mt-5">
                                <li class="nav-item active mt-5 py-3">
                                    <a class="nav-link text-dark d-flex ml-3" href="#">
                                        <span><img src={dashboard} alt="" width={15} height={15} /></span>
                                        <small className="font-weight-bold mt-1 ml-4">Dashboard</small>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark d-flex ml-3" href="#">
                                        <span><img src={exchange} alt="" width={15} height={15} /></span>
                                        <small className="font-weight-bold mt-1 ml-4">Transaction History</small>
                                    </a>
                                </li>
                                <li class="nav-item py-3">
                                    <a class="nav-link text-dark d-flex ml-3" href="#">
                                        <span><img src={balancesheet} alt="" width={15} height={15} /></span>
                                        <small className="font-weight-bold mt-1 ml-4">Balance Sheet</small>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark d-flex ml-3" href="#">
                                        <span><img src={cashbg} alt="" width={15} height={15} /></span>
                                        <small className="font-weight-bold mt-1 ml-4">CashBack Earned</small>
                                    </a>
                                </li>
                                <li class="nav-item py-3">
                                    <a class="nav-link text-dark d-flex ml-3" href="#">
                                        <span><img src={user} alt="" width={15} height={15} /></span>
                                        <small className="font-weight-bold ml-4">My Profile</small>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark d-flex ml-3" href="#">
                                        <span><img src={share} alt="" width={15} height={15} /></span>
                                        <small className="font-weight-bold ml-4">Refer & Earned</small>
                                    </a>
                                </li>
                                <li class="nav-item py-3">
                                    <a class="nav-link text-dark d-flex ml-3" href="#">
                                        <span><img src={warning} alt="" width={15} height={15} /></span>
                                        <small className="font-weight-bold ml-4">Report</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SideBarHead;