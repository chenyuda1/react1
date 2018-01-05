// 
import React, { Component } from 'react'
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import Swiper from "swiper"
import qs from "qs"
import "../one/one.css";
import { Tabs, Radio,Progress  } from 'antd';
const TabPane = Tabs.TabPane;
class DelPage extends Component {

    state = {
        listData: []
    }
    render() {
        // ${crowdfundingId}
        const listData = this.state.listData
      

        return <div className="swiper-container" ref="swiper-container" className="res">
            <div className="swiper-wrapper">
                {
                    listData.map((ele, index) => {
                    
                        return <div className="swiper-slide" key={index}>
                            <img src={"http://images.laozihaojia.com" + ele} />
                        </div>

                    })
                }
            </div>
        </div>
    }
    getQueryData(key) {
        var query = window.location.href.split("?");
        var value = ""
        if (query) {
            query.forEach(ele => {
                var queryArr = ele.split("=")
                if (queryArr[0] == key) {
                    value = queryArr[1]
                }
            })
            return value
        }
    }
    componentDidMount() {
        var crowdfundingId = this.getQueryData("crowdfundingId")

        fetch(`api/v2/crowdfunding/view.do?channel=0&_=1510914610822&crowdfundingId=${crowdfundingId}`
        ).then(res => res.json()).then(data => {
          
            this.setState({
                listData: data.crowdfunding.imgs

            })
        })
    }

    componentDidUpdate() {
        this.getQueryData()
        this.mySwiper || (this.mySwiper = new Swiper(".res", { loop: true, pagination: '.swiper-pagination' }))

    }


}

class Pic extends Component {

    state = {
        msgData: []

    }
    render() {
        var msgData = this.state.msgData
        return <div dangerouslySetInnerHTML={{ __html: this.state.msgData }}>

        </div>
    }
    getQueryData(key) {
        var query = window.location.href.split("?");
        var value = ""

        if (query) {
            query.forEach(ele => {
                var queryArr = ele.split("=")

                if (queryArr[0] == key) {

                    value = queryArr[1]
                }
            })

            return value

        }



    }


    getClassData() {

        var crowdfundingId = this.getQueryData("crowdfundingId")
        fetch(`api/crowdfunding/detail.do?`, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charsert=UTF-8"
            },
            body: qs.stringify({
                crowdfundingId: crowdfundingId
            }),
            credentials: "include"//携带cookie
        }).then(res => res.json()).then(data => {

            this.setState({
                msgData: data.detailContent

            })
        })
    }
    componentDidMount() {
        this.getClassData()

    }

}
class Nameo extends Component {
    state = {
        smallData: [],
        eleData: [],
        allpinData:[],
        pinData:[],
       
    }
    render() {
        const smallData = this.state.smallData
        const eleData = this.state.eleData
      
        const pinData = this.state.pinData
      
        {if(pinData.length>=2){
            var pind=pinData.length
    
         
            pinData.length=2
           
        }else if(pinData.length==0){
            
            var pind=pinData.length
            
        }}
      {
   var date2=String(smallData.sendTime)

  date2=date2.replace(/(年|月)/g,'/')
  var a=date2
  a=a.replace(/日/g,'')
 
 
         var date3=Date.parse(new Date(a))
          var date=Date.parse(new Date())
     var alldate=(date3-date)/1000/60/60/24
      
        // smallData.sendTime
        if(alldate<=0){
            alldate=0
        
        }else{
            alldate=parseInt(alldate)
       
        }
       
      
      }
      
        return <div className="small">
            <div className="title">{smallData.title}</div>
            <div className="int">{smallData.introduction}</div>
            <div className="money">已下定<span className="money2">{smallData.money}</span>元</div>
            <div className="form">
                <div className="GEZI">
                    <p className="tag-money">¥{smallData.targetMoney}</p>
                    起定量
                </div>
                <div className="GEZI">
                    <p className="tag-money">{smallData.finish}%</p>
                    完成率
                </div>
                <div className="GEZI">
                    <p className="tag-money">{smallData.support}</p>
                    下定人数
                </div>
                <div className="GEZI">
                    <p className="tag-money">{alldate}</p>
                    剩余时间
                </div>
               
            </div>
            <div className="bigge">
                已选择
                <span className="gezi">¥{smallData.min}<span className="ji">{">"}</span></span>
            </div>
            <div className="bigge">
                发货时间
                <span className="ji">{smallData.sendTime}</span>
            </div>

            <div className="bigege">
               <div className="bige">品牌</div>
               <div className="jii">
               <p className=""> {eleData.brandName} </p>
               <p className="">始于 {eleData.since}年 </p>
               </div>
                </div>

            <div className="pis">评论({pind})</div>
            <div>
                
                {pinData.map((ele,index)=>{
                    return <div key={index}>
                        <div className="pinlun">
                        <div className="alld">
                            <div className="headUrl"><img src={ele.headUrl}/></div>
                            <div className="nickname">{ele.nickName}</div>
                            <div className="praise">{ele.praise}<span>X</span></div>
                        </div>
                        <div className="comment">{ele.comment}</div>
                        <div className="comment">{ele.createTime}</div>
                    </div>
                    </div>
                  
                })}
                
            </div>
       
        </div>
    }
    getQueryData(key) {
        var query = window.location.href.split("?");
        var value = ""

        if (query) {
            query.forEach(ele => {
                var queryArr = ele.split("=")

                if (queryArr[0] == key) {

                    value = queryArr[1]
                }
            })

            return value

        }



    }


    getCnaData() {

        var crowdfundingId = this.getQueryData("crowdfundingId")
        fetch(`api/v2/crowdfunding/view.do?channel=0&_=1510914610822&crowdfundingId=${crowdfundingId}`
        ).then(res => res.json()).then(data => {

            this.setState({
                smallData: data.crowdfunding

            })
        })
    }
    getCnData() {
        var crowdfundingId = this.getQueryData("crowdfundingId")
        fetch(`api/v2/crowdfunding/view.do?channel=0&_=1510914610822&crowdfundingId=${crowdfundingId}`
        ).then(res => res.json()).then(data => {
           
            this.setState({
                eleData: data.crowdfunding.brand

            })
        })
    }
    getPinData() {
       
                var crowdfundingId = this.getQueryData("crowdfundingId")
                fetch(`api/v2/crowdfunding/view.do?channel=0&_=1510914610822&crowdfundingId=${crowdfundingId}`
                ).then(res => res.json()).then(data => {
                  
                    this.setState({
                      
                       pinData: data.commentsList
                     
        
                    })
                })
            }
    componentDidMount() {
        this.getCnaData()
        this.getCnData()
        this.getPinData()

    }

}


class Pic2 extends Component{
    state = {
        msgData: []
    }
    render() {
        var msgData = this.state.msgData
        return <div dangerouslySetInnerHTML={{ __html: this.state.msgData }}>
        </div>
    }
    getQueryData(key) {
        var query = window.location.href.split("?");
        var value = ""
        if (query) {
            query.forEach(ele => {
                var queryArr = ele.split("=")
                if (queryArr[0] == key) {
                    value = queryArr[1]
                }
            })
            return value
        }
    }
    getClassData() {
        
                var crowdfundingId = this.getQueryData("crowdfundingId")
                fetch(`api/crowdfunding/paramter.do`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charsert=UTF-8"
                    },
                    body: qs.stringify({
                        crowdfundingId: crowdfundingId
                    }),
                    credentials: "include"//携带cookie
                }).then(res => res.json()).then(data => {
                 
                    this.setState({
                        msgData: data.paramterContent      
                    })
                })
            }
            componentDidMount() {
                this.getClassData()       
            }       
}

class Pic3 extends Component{
    state = {
        msgData: [],
        imData:[]
    }
    render() {
        var msgData = this.state.msgData
        return <div className="noder">
         {msgData.map((ele,index)=>{
               console.log("http://images.laozihaojia.com"+ele.progressImgs)
            return <div key={index}>
            
                <em className="point"></em>
                <div>{ele.progressTimeStr}</div>
                <div>{ele.progressTitle}</div>
                <div>{ele.progressDesc}</div>
                {
                    ele.progressImgs.map((pic,index)=>{
                        return <div key={index} className="pick">
                        <img src={"http://images.laozihaojia.com"+pic}/>
                        </div>
                    })
                }
            </div  >
         })}
        </div>
    }
    getQueryData(key) {
        var query = window.location.href.split("?");
        var value = ""
        if (query) {
            query.forEach(ele => {
                var queryArr = ele.split("=")
                if (queryArr[0] == key) {
                    value = queryArr[1]
                }
            })
            return value
        }
    }
    getClassData() {
                var crowdfundingId = this.getQueryData("crowdfundingId")
                fetch(`api/crowdfunding/progress.do`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charsert=UTF-8"
                    },
                    body: qs.stringify({
                        crowdfundingId: crowdfundingId
                    }),
                    credentials: "include"//携带cookie
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    this.setState({
                        msgData: data.progressList,
                        imDatad:data.progressList.progressImgs
                    })
                })
            }
            componentDidMount() {
                this.getClassData() 
            }       
}
class Tie extends Component{
    state = {
        firstData: []   
    } 
    render(){
        const firstData = this.state.firstData
        return      <div className="ov" id="fix"><div className="cont" >
          
            <div className="swiper-container" ref="swiper-containerl" >
	<div className="swiper-wrapper">
    {firstData.map((ele,index)=>{
        console.log(ele.price)
        return<div className="swiper-slide" key={index} id="silder">		
      <div className="filx1" >
                <img src={"http://images.laozihaojia.com"+ele.commodityBanner} className="list"/>
                </div>  
                 <div className="filx2">
                    <p className="title">{ele.commodityName}</p>
                    <p className="pri"><a className="red">￥</a>{ele.price}</p>                  
                <span className="jiao"></span>         
            </div>   
        </div>
    })   }
	</div>
    </div>
</div> 
</div>           
    }              
    componentDidMount() {
       
        fetch("api/recommend/list.do").then(res => res.json()).then(data => {
           
            this.setState({
                firstData:data.commoditys
            })
        })
    }
    componentDidUpdate() {
        this.mySwiper || (this.mySwiper = new Swiper(".swiper-container", {pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true}))     
        }

}

class Tits extends Component{
    state = {
        titData: []   
    } 
    render(){
        const titData = this.state. titData
        return <div className="big">
          <div className="au">
            {
                titData.map((ele,index)=>{
                    return <div key={index}>
                     <Link to={"/del/"+"?"+"crowdfundingId="+ele.crowdfundingId+"?"}  className="auo" >
                    <img src={"http://images.laozihaojia.com"+ele.mainImg}/>
                   
               
                    </Link>
                    <div className="sell">
                          <strong className="l">  {ele.title}</strong>
                          <strong className="o">  ¥{ele.min}起</strong>
                      </div>
                      <div className="baifen">
                          <Progress percent={ele.finish} status="exception"  className="bas"/> 
                     </div>
                      <div className="selle">
                      <div className="f">
                           <span className="support"> {ele.support}已定制</span><span>已下定{ele.money}元</span> </div>
                       <strong className="i">  已完成{ele.finish}%</strong>
                       </div>
                        
                          </div>
                })
            }
              </div> 
            </div>

    }              
 getProductData() {    
        fetch("api/recommend/list.do").then(res => res.json()).then(data => {
           console.log(data)
            this.setState({
                titData:data.crowdfundings
            })
        })
    }
    componentDidMount() {
      this.getProductData()

}

}



class DeliPage extends Component {

    render() {
        const TabPane = Tabs.TabPane;
        
        function callback(key) {
        
        }
        return (
            <div>
                <DelPage />
                <Nameo />
                <div>

                    <div className="pp">上拉查看详情</div>
                    <p className="p"></p>
                </div>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="商品详情" key="1" style={{float:"right"}}><Pic/></TabPane>
                        <TabPane tab="项目参数" key="2"className="spans"><Pic2/></TabPane>
                        <TabPane tab="进展" key="3"className="spans"><Pic3/></TabPane>
                     </Tabs>

                {/* <Login></Login> */}
                <div>

                    <div className="pp">推荐</div>
                    <p className="p"></p>
                </div>
                <Tie/>
                <Tits/>
            </div>
        )
    }

}


export default DeliPage