import React, { useEffect, useState } from "react";
import styles from './cashback_earned.module.css';

const CashBackEarned = () => {

    return (
        <div class="card col-12 col-md-12 shadow p-4 mb-5 bg-white rounded">
            <div class="">
                <div className={styles.cash__card}>
                    <div class="text-left">
                            <p>Cashback Earned</p>
                            <small class="align-item-center">15 Aug,2018|09:00am</small>
                    </div>
                    <div class="text-right">
                        <p class="text-success"> ₹50</p>
                        <small>Cashback Earned</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashBackEarned;