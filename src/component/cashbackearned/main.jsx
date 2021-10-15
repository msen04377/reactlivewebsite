import React, { useEffect, useState } from "react";
import CashBackEarned from "./cashback_earned";
import styles from './main.module.css'
import cashbg from '../../../src/assets/img/Mask Group 48.svg'


const MainCash = () => {

    return (
        <div class="card col-12 col-sm-12 col-md-12">
            <div className="container-fluid">
                <div className="col-12 col-sm-12 col-md-12 ">
                    <div className="container d-flex justify-content-end py-2">
                        <p className={styles.CashBackEarned}>Cashback Earned</p>
                        <img src={cashbg} alt="" className={styles.CashBackEarned__img}/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6">
                            <CashBackEarned />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <CashBackEarned />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6">
                            <CashBackEarned />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <CashBackEarned />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6">
                            <CashBackEarned />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <CashBackEarned />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-12 col-md-12">
                    <div className="row">
                        <button className={styles.btn__view}><span>View All</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCash;