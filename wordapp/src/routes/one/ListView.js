// 
import React, { Component } from 'react'
import { Link } from 'react-router';
import {connect} from "react-redux"
  import{ListView} from "antd-mobile"

import qs from "qs"
import { Progress } from 'antd';
import "../one/one.css";

class Bodyo extends Component{

    constructor(props){
       
        super(props)
       
     const ds =new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    
     this.state={
        msgData:[],
            dataSource:ds.cloneWithRows([]),
            pageIndex:1,
                
        }
    }
    render(){
        const {msgData}=this.state
        
           const dataSource=this.state.dataSource.cloneWithRows(msgData)
        
    console.log(dataSource)
   
       return <div>
       <div className="shop"><span className="nic"></span>特别定制</div> 
        <ListView 
       className="list-wrap"
       dataSource={ dataSource} 
       useBodyScroll={true}
       renderRow={(rowDate,sIndexm,rowIndex)=>
       <div className="big">
          <div className="au">
            
               <Link to={"/del/"+"?"+"crowdfundingId="+rowDate.crowdfundingId+"?"}  className="auo" >
             <img src={"http://images.laozihaojia.com"+rowDate.mainImg} data-id={rowDate.crowdfundingId} />
             <div className="tit">{rowDate.brandName}<span>·</span>始于{rowDate.since}年</div>
             <div className="finish">{rowDate.stateName}</div>
             </Link>
             <div className="sell">
                   <strong className="l">  {rowDate.title}</strong>
                   <strong className="o">  ¥{rowDate.min}起</strong>
               </div>
               <div className="baifen">
                   <Progress percent={rowDate.finish} status="exception"  className="bas"/> 
              </div>
               <div className="selle">
               <div className="f">
                    <span className="support"> {rowDate.support}已定制</span><span>已下定{rowDate.money}元</span> </div>
                <strong className="i">  已完成{rowDate.finish}%</strong>
                </div>
                <div className="comlist">
                    <div>123实打实</div>
                    <div>13啊撒大声地撒撒旦是
                    </div>    
                   </div>
                </div>
            </div>

       }
       onEndReached={()=>this.loadMore()}
       />
       </div>
    }
     loadMore(){
         console.log("div")
         this.getPorductData(true)
     }
   
    getPorductData(more){
        if(more){
            this.state.pageIndex++
        }else{this.state.pageIndex=1}
        fetch(`api/v2/crowdfunding/list.do?`,{
            method:"post",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded; charsert=UTF-8"
            },
            body:qs.stringify({
                pageIndex:this.state.pageIndex,
                pageNum:2,
                tagId:0,
                _:1510820662173,
            }),
            credentials:"include"//携带cookie
        }).then(res=>res.json()).then(data=>{
           const msgData =more?this.state.msgData.concat(data.crowdfunding):data.crowdfunding
            this.setState({
                msgData:msgData
            })
        })
    }
    componentDidMount(){
        this.getPorductData()
       
    }
  
}
    

export default Bodyo