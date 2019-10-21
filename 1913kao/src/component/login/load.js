import React from 'react'
import Loadable from 'react-loadable'
import './loader.less'
const loadingComponent =()=>{
    return(
        <div className='test'>lodaing</div>
    )
}

export default Loadable ({
    loader:()=>import('./index'),
    loading:loadingComponent
})