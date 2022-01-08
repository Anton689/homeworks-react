import React from 'react'
import Header from './Header'
import {HashRouter} from 'react-router-dom';
import {RouteComp} from './RouteComp';


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <RouteComp/>

            </HashRouter>
        </div>
    )
}

export default HW5
