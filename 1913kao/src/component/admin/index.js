import React,{Component} from 'react'
import './index.less'
import CustomNav from '../customNav'
import TokenModal from '../modal'
class Admin extends Component{
    render(){
        return(
            <div className='admin'>
                <TokenModal></TokenModal>
                <div className='admin-nav'>
                    <CustomNav></CustomNav>
                </div>
                <div className='admin-content'>
                    <div>
                        头部信息
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                    <div>
                        底部信息
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin