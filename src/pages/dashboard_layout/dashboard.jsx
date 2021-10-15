import React from 'react'
import CashBackEarned from '../../component/cashbackearned/cashback_earned';
import MainCash from '../../component/cashbackearned/main';
import Sale from '../../component/sale/sale';
import SideBarHead from '../../component/sidebar/sidebar';
import MainTranscation from '../../component/transcation/main_transcation';
import VendorMain from '../../component/vendors/vendor_main';
import { useEffect, useState } from "react";
import Wallet from '../../component/wallet/wallet';
import styles from './dashboard.module.css'

const Dashboard = () => {
    return (
        <div>
            <div><SideBarHead /></div>
            <div className="">
                <div className={styles.content}>
                    <div className="col-12 col-sm-12 col-md-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-8">
                                    <div className={styles.main__vendor}>
                                        <VendorMain />
                                    </div>
                                </div>
                                <div className="row col-12 col-sm-12 col-md-4">
                                    <div className={styles.main__sale__wallet}>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12">
                                                <Sale />      
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 mt-3">
                                                <Wallet />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 py-3">
                                    <MainCash />
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className={styles.dashboard__tranc}>
                                        <div className="col-12 col-sm-12 col-md-12">
                                            <MainTranscation />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;