import React, { useEffect, useState } from "react";
import vendor from '../../assets/img/1.jpg'
import vendor_Img from '../../assets/img/vendor.svg'
import styles from './vendors.module.css'

const Vendors = () => {

    return (
        <div class="card shadow bg-white rounded col-12 col-md-12 col-lg-12">
            <div className="row mt-2">

                <img src={vendor} alt="" height={45} width={45} class={styles.vendor__passport} />


                <div className={styles.title}>
                    <p className={styles.vendor__title}>Sky Sports Shop</p>
                    <div class="text-left">
                        <div className={styles.star}>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                    <div className={styles.cashback}>
                        <p class="text-left">10%  Cashback</p>
                        <p class="text-right ml-3">0.5 kms away</p>
                    </div>
                </div>


                <span className={styles.pipe}>|</span>


                <img src={vendor_Img} alt="" height={35} width={35} className={styles.vendor_Img__style} />

            </div>
        </div>
    )
}

export default Vendors;