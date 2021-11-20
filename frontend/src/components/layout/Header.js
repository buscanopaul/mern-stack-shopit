import React, { Fragment, Link } from 'react'

import '../../App.css'

const Header = () => {
    return (
        <Fragment>
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <img src="/images/shopit_logo.png" />
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                fdsafasd
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">aasd</span>


                    <div className="ml-4 dropdown d-inline">
                   
                        <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
                      

                        </div>


                    </div>
            </div>
        </nav>
    </Fragment>
    )
}

export default Header
