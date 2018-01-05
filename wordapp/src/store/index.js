import {createStore,applyMiddleware} from "redux"
import reduxPromise from "redux-promise"

const reducer=(state={listData:[],userName:"jingjing"},action)=>{
  switch(action.type){
    case "PRODUCT_LIST_DATA":
    //state.listData = 获取到的数据
    var newState = JSON.parse(JSON.stringify(state))
    if( action.payload.more){ //判断如果是更多数据，就用concat 连接 老数据和新数据
      newState.listData = newState.listData.concat(newState.listData)
    }else{
      //不是更多，就直接用新数据 替换 老数据
      newState.listData = action.payload.listData
    }
    
    return newState

    
    default :
    return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxPromise))
export default store