import React,{Component} from 'react'
import  {withRouter} from 'react-router-dom'
import {Menu} from 'antd'
let navData=[
  {name:'首页',path:'/admin/home'},
  {name:'设置',path:'/setting'},
  {name:'用户管理',
   path:'/user',
   children:[
     {name:'用户列表',path:'/user/list'},
     {name:'用户删除',
      path:'/user/del',
      children:[
        {name:'用户列表1',path:'/user/list'},
        {name:'用户删除2',path:'/user/del',
        children:[
          {name:'用户列表',path:'/user/list'},
          {name:'用户删除',path:'/user/del'},
        ]
      },
      ]
    }
   ]
  },
]
const {SubMenu} = Menu

class CustomNav extends Component{
  jump=(path)=>{
    this.props.history.push(path)
  }
  renderItem=(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        // 多级
        return(
          <SubMenu title={item.name}>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return <Menu.Item onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
      }
      
    }) 
  }
  render(){
    console.log(this,'自定义导航')
    return(

      <div className='login'>
        <Menu  style={{ width: 256 }} mode="vertical">
          {this.renderItem(navData)}
        {/* <Menu.Item >首页</Menu.Item>
        <Menu.Item >设置</Menu.Item>
        <SubMenu title='用户管理'>
          <Menu.Item key="5">用户列表</Menu.Item>
          <Menu.Item key="5">用户删除</Menu.Item>
        </SubMenu>
        <SubMenu title='权限管理'>
          <Menu.Item key="5">权限列表</Menu.Item>
          <Menu.Item key="5">权限删除</Menu.Item>
        </SubMenu> */}
          {/* {navData.map((item,index)=>{
            if(item.children){
              //有二级
              return(
                  <SubMenu>
                    
                  </SubMenu>
              )
            }else{
              return(
                <Menu.Item >{item.name}</Menu.Item>
              )
            }
          })} */}
        </Menu>
      </div>

    )
  }
}
export default  withRouter(CustomNav)