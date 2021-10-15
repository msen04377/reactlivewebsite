import React, { useEffect, useState } from "react";
import vendor from '../../assets/img/1.jpg'
import vendor_Img from '../../assets/img/vendor.svg'
import Card_Img from '../../assets/img/card-payment.svg'
import electronic from '../../assets/img/camera.svg'
import food from '../../assets/img/hamburger.svg'
import cloth from '../../assets/img/jacket.svg'
import travel from '../../assets/img/air-freight.svg'
import fitness from '../../assets/img/barbell.svg'
import medical from '../../assets/img/first-aid-kit.svg'
import Vendors from "./vendors";
import styles from './vendor_main.module.css'

const VendorMain = () => {

    return (
        <div class="card col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="">
                <div className="col-12 col-md-12 py-4">
                    <div className="row">
                        <div>
                            <img src={vendor_Img} alt="" height={35} width={35} className={styles.vendor_Img__style} />
                        </div>
                        <div class={styles.div}>
                            <div class={styles.left}><span>Pay</span></div>
                            <div class={styles.right}><span>Recharge</span></div>
                        </div>
                        <div>
                            <img src={Card_Img} alt="" height={35} width={35} className={styles.card_Img__style} />
                        </div>
                    </div>

                </div>
                <div className="col-md-12 mt-3">
                    <div className={styles.search_container}>
                        <input type="text" name="search" placeholder="Search Vendors" className={styles.search_input} />
                        <a href="#" className={styles.search_btn}>
                            <i class="fas fa-search"></i>
                        </a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12">
                    <div className="mt-5">
                        <p className="align-items-center">
                            <span className={styles.vendor__category}>Select vendor category</span>
                        </p>
                    </div>
                    <div className="row d-flex flex-column py-3">
                        <div className=" row py-3 py-sm-0">
                            <div className="col-4 col-sm-4 col-md-4">
                                <img src={electronic} alt="" width={45} height={45} className={styles.camera} /> <br />
                                <span className={styles.camera__text}>Electronic</span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <img src={food} alt="" width={45} height={45} className={styles.camera} /> <br />
                                <span className={styles.camera__text}>Food & Snacks</span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <img src={cloth} alt="" width={45} height={45} className={styles.camera} /> <br />
                                <span className={styles.camera__text}>Clothing</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4">
                                <img src={travel} alt="" width={45} height={45} className={styles.camera} /> <br />
                                <span className={styles.camera__text}>Travel & Tour</span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <img src={fitness} alt="" width={45} height={45} className={styles.camera} /> <br />
                                <span className={styles.camera__text}>Fitness</span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <img src={medical} alt="" width={45} height={45} className={styles.camera} /> <br />
                                <span className={styles.camera__text}>Medical</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                </div>
                <div className="col-12 col-md-12">
                    <div className="align-items-center">
                        <p className={styles.vendor__header}>Pay.Star Vendors Near Me</p>
                    </div>
                    <div className="row py-2">
                        <div className="col-12 col-sm-6 col-md-6 py-3 py-sm-0">
                            <Vendors />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <Vendors />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 py-3 py-sm-0">
                            <Vendors />
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <Vendors />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-sm-6 col-md-6 py-3 py-sm-0">
                            <Vendors />
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <Vendors />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-6 col-md-6 py-3 py-sm-0">
                            <Vendors />
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <Vendors />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorMain;