import React, { useEffect, useState } from "react";
import vendor from '../../assets/img/1.jpg'
import transcation from '../../assets/img/Group -6.svg'
import vendor_Img from '../../assets/img/vendor.svg'
import Transcation from "./transcation";
import styles from './main_transcation.module.css'

const MainTranscation = () => {

    return (
        <div class="card col-12 col-md-12">
            <div className="view overlay">
                <div className="row py-2">
                    <div className="container d-flex justify-content-end">
                        <p className={styles.CashBackEarned}>Cashback Earned</p>
                        {/* <img src={} alt="" className={styles.CashBackEarned__img}/> */}
                    </div>
                </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-12">
                            <Transcation />
                        </div>
                        <div className="col-12 col-sm-6 col-md-12">
                            <Transcation />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-12">
                            <Transcation />
                        </div>
                        <div className="col-12 col-sm-6 col-md-12">
                            <Transcation />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-12">
                            <Transcation />
                        </div>
                        <div className="col-12 col-sm-6 col-md-12">
                            <Transcation />
                        </div>
                    </div>
                <div className="row py-3">
                    <div className={styles.btn__view}>
                        <button className="text-white border-0 px-5 py-2"><span>
                            view all    
                        </span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTranscation;