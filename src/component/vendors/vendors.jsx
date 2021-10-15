import React, { useEffect, useState } from "react";
import vendor from '../../assets/img/1.jpg'
import vendor_Img from '../../assets/img/vendor.svg'
import styles from './vendors.module.css'

const Vendors = () => {

    return (
        <div class="card shadow bg-white rounded col-12 col-md-12 col-lg-12">
            <div className="row mt-2">
                <div className="col-3 col-sm-3 col-md-3">
                    <img src={vendor} alt="" height={45} width={45} class={styles.vendor__passport} />
                </div>
                <div className="col-5 col-sm-5 col-md-5 d-flex">
                    <div className={styles.title}>
                        <p className={styles.vendor__title}>Sky Sports Shop</p>
                        <div class="text-left">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                        <div className={styles.cashback}>
                            <p class="text-left">10%  Cashback</p>
                            <p class="text-right ml-3">0.5 kms away</p>
                        </div>
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-1">
                    <span className={styles.pipe}>|</span>
                </div>
                <div className="col-2 col-sm-2 col-md-2">
                    <img src={vendor_Img} alt="" height={35} width={35} className={styles.vendor_Img__style} />
                </div>
            </div>
        </div>
    )
}

export default Vendors;