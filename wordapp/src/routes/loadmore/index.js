import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Header,Footer,Content} from "../../public"

import {connect} from "react-redux"
import { ListView } from 'antd-mobile';
import qs from "qs"

//css 模块化以后，也需要通过 对象的方式使用
    

class ListPage extends Component {
  constructor(props){
    super(props)
    //创建一个DataSource 的实例
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows([]),
      PageIndex:1
    }
    //ListView 需要的数据格式 必须通过DataSource实例包装
  }
  render(){
    const {listData} = this.props
    const dataSource = this.state.dataSource.cloneWithRows(listData) //把列表数据进行包装
    console.log(listData,dataSource);

    return <div>
     <ListView
      className="list-wrap"
      dataSource={dataSource}
      renderRow={(rowData,sIndex,rowIndex)=><div className="item">
        <img src={rowData.SmallPic} alt=""/>
        <p> {rowData.CommodityName}  {rowIndex}</p>
         </div>}
      onEndReached={()=>this.loadMore()}
      /> 
    </div>
  }
  loadMore(){
    console.log("到底了")
    this.getProductData(true)
  }
  getProductData(more){
        if(more){
          this.state.PageIndex++ //改变state页面不会更新
        }else{
          this.state.PageIndex = 1
        }
        fetch("/yiguo/ProductOpt/GetProductLists",{
          method:"post",
          headers:{
            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
          },
          body:qs.stringify({
              KeyWord:"",
              CatCode:"",
              PageIndex:this.state.PageIndex,
              PageSize:20,
              Sort:""
          }),
          credentials: "include" //携带cookie
        }).then(res=>res.json()).then(data=>{
          console.log(data)
          this.props.dispatch({type:"PRODUCT_LIST_DATA",payload:{
            listData:data.RspData.data,
            more
          }})
        })
        // 
  }
  componentDidMount(){
    this.getProductData()
  }
 
}

//redux   连接store
function mapStateToProps(state){
  return {
    listData:state.listData
  }
}
export default connect(mapStateToProps)(ListPage)
