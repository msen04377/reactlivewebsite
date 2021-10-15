import React from 'react';
import sale from '../../assets/img/sale.jpg'
// import styles from './wallet.module.css'

const Sale = () => {
    return (
        <div class="card col-12 col-sm-12 col-md-12">
            <div className="container">
                <div id="carouselExampleIndicators" class="carousel slide py-4" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={sale} class={"d-block w-100"} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={sale} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={sale} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sale;