import React, {Fragment} from 'react'
import MetaData from './layout/MetaData'

const Home = () => {
    return (
        <Fragment>
            <MetaData title={'Buy Best Products Online'} />
            <div className="container container-fluid"> 
                <h1 id="products_heading">Latest Products</h1>
            </div>
        </Fragment>
    )
}

export default Home
