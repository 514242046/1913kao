import State from './state'
export default (prevState=State, action)=>{
    let newData = JSON.parse(JSON.stringify(prevState))
    let {type,params}=action
    switch (type) {
        case 'CHANGE_TOKEN_MODAL':
            newData.tokenModal = params
            break;
    
        default:
            break;
    }
    return newData
}