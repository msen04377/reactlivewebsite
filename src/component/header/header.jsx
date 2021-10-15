import React from 'react';
import vendor from '../../assets/img/1.jpg'
import bell from '../../assets/img/bell.svg'
import styles from '../header/header.module.css'
import LoginBg from '../../assets/img/login_layout.png'
import Dashboard from '../../pages/dashboard_layout/dashboard';


const Header = () => {
    return (
        <div className={styles.header__nav}>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top shadow p-3 mb-5 bg-white rounded">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-dark"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <img src={LoginBg} alt="" width={35} height={35} className="rounded-circle mr-3" />
                    <span className="text-dark">My Wallet</span>
                </a>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    {/* <div className={styles.header__nav_list}> */}
                    <ul class="navbar-nav ml-auto mr-3">
                        <li class="nav-item active">
                            <a class="nav-link text-dark" href="#">
                                <span className={styles.header__nav_list}><small className="font-weight-bold">Rs 1500.00 </small><br /> <small>Wallet Balance</small></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span className={styles.header__nav_list}>
                                    <span>|</span>
                                    <img src={bell} alt="" width={30} height={30} className="mx-3 mt-2 text-dark" />
                                    <span>|</span>
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">
                                <span className={styles.header__nav_list}><small className="font-weight-bold">Akash Batista </small><br /> <small>dummy@email.com</small></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span><img src={vendor} alt="" height={45} width={45} class="rounded-circle ml-2" /></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <div class="dropdown">
                                    <span className={styles.header__nav_list}>
                                        <p type="button" class="dropdown-toggle text-dark mt-2" data-toggle="dropdown"></p>
                                        <div class="dropdown-menu">
                                            <a onClick={logout} class="dropdown-item" href="#">logout</a>
                                        </div>
                                    </span>
                                </div>
                            </a>
                        </li>


                        <li class="nav-item dropdown d-sm-block d-md-none">
                            <div className={styles.header__nav_list}>
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
                                </a>
                                <div class="dropdown-menu" aria-labelledby="smallerscreenmenu">
                                    <a  class="dropdown-item" href="#">Dashboard</a>
                                    <a class="dropdown-item" href="#">Transcation History</a>
                                    <a class="dropdown-item" href="#">Balance Sheet</a>
                                    <a class="dropdown-item" href="#">Cashback Earned</a>
                                    <a class="dropdown-item" href="#">My Profile</a>
                                    <a class="dropdown-item" href="#">Refer & Earned</a>
                                    <a class="dropdown-item" href="#">Report</a>
                                    <a onClick={logout} class="dropdown-item bg-dark text-white" href="#">logout</a>

                                </div>
                            </div>
                        </li>


                    </ul>
                    {/* </div> */}
                </div>
            </nav>


            <div id="body-wrapper" class="row">
                <div id="my-sidebar-wrapper" class="ms-expanded d-none d-md-block">
                    <nav id="my-sidebar">
                        <div id="menu" class="ms-menu">
                            <div class="ms-container ms-expanded">
                                <ul class="list-group">

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

const logout = () => {
    localStorage.clear();
    window.location.reload();
}


export default Header