
import React, { Component } from 'react'
import { Header, Content, Login} from "../../public"
import Swiper from "swiper"


import Bodyo from "./ListView"
import "swiper/dist/css/swiper.min.css";
import "./one.css";


class SupHeader extends Component {
    state = {
        listData: []
    }
    render() {
        const listData = this.state.listData
       
        return <div className="swiper-container" ref="swiper-container" className="res">
            <div className="swiper-wrapper">
                {
                    listData.map((ele, index) => {
                        
                      return  <div className="swiper-slide" key={index}>
                            <img src={"http://images.laozihaojia.com" + ele.img} />
                       </div>
                       
                    })
                }
            </div>
            <div className="swiper-pagination"></div>
           
        </div>
    }
    componentDidMount() {
        fetch("/api/crowdfunding/home.do?=1510646626170").then(res => res.json()).then(data => {
         
            this.setState({
                listData: data.banner
            })
        })
    }
    componentDidUpdate() {
        this.mySwiper || (this.mySwiper = new Swiper(".res", { loop: true ,pagination:'.swiper-pagination'}))
       
    }
}


 class Tie extends Component{
    state = {
        firstData: []   
    } 
    render(){
        const firstData = this.state.firstData
     

        return      <div className="ov"><div className="cont" >
          
             <div className="shop"><span className="nic"></span>返厂商品</div>  <div className="swiper-container" ref="swiper-containerl" >
	<div className="swiper-wrapper">
    {firstData.map((ele,index)=>{
        return<div className="swiper-slide" key={index} id="silder">
			
      <div className="filx1">
                <img src={"http://images.laozihaojia.com"+ele.commodityImg} className="list"/>
                </div>  
                 <div className="filx2">
                    <p className="title">{ele.commodityTitle}</p>
                    <p className="pri"><a className="red">￥</a>{ele.commodityPrice}</p>
                    <div className="buy">{ele.sellCount}人购买
                     
                </div> 
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
        fetch("/api/crowdfunding/home.do?=1510646626170").then(res => res.json()).then(data => {
           
            this.setState({
                firstData:data.encoreTagCommoditys.encoreCommoditys   
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

class Tit extends Component{
    state = {
        twoData: []   
    } 
    render(){
        const twoData = this.state.twoData
        console.log(twoData)
        return   <div className="ov">
        <div className="cont" > 
            <div className="shopp">
                <span className="nic"></span>热销商品</div>  
                <div className="swiper-container" ref="swiper-container" className="good">
            <div className="swiper-wrapper" id="ogood">
                {
                   twoData.map((ele, index) => {
                        
                      return  <div className="swiper-slide" key={index} className="ogoods">
                            <img src={"http://images.laozihaojia.com" + ele.flowImg}  className="ii"/>
                       </div>
                       
                    })
                }
            </div>
      </div>  
</div> 
</div>
          
    }  
    componentDidMount() {
        fetch("/api/crowdfunding/home.do?=1510646626170").then(res => res.json()).then(data => {
            console.log(data)
            this.setState({
               twoData:data.recommendFlows
                
            })
        })
    }
    componentDidUpdate() {
        this.mySwiper || (this.mySwiper = new Swiper(".good", {pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true}))
     
        }

}


// class Body extends Component{
//     state={
//         msgData:[]
//     }
//     render(){
//         const msgData=this.state.msgData
//         console.log(msgData)
//         return <div>
//             <div>产品</div>
//        {
//         msgData.map((ele,index)=>{
//             return   <div className="big" key={index}>
//             <div className="au">
//                 <img src={"http://images.laozihaojia.com"+ele.mainImg}/>
//                 <div className="tit">{ele.brandName}<span>·</span>始于{ele.since}年</div>
//                 <div  className="sell">
//                     <strong className="l">  {ele.title}</strong>
//                     <strong className="o">  ¥{ele.min}起</strong>
//                     </div>
//                 <div className="baifen">
//                     <Progress percent={ele.finish} status="exception" />
//                 </div>
//                 <div className="sell">
//                 <div className="f">
//                     <span className="support"> {ele.support}已定制</span><span>已下定{ele.money}元</span> </div>
//                     <strong className="i">  已完成{ele.finish}%</strong>
//                 </div>
//                 <div className="comlist">
//                     <div>123实打实</div>
//                     <div>13啊撒大声地撒撒旦是
                        
//                     </div>
//                 </div>
//             </div>
           
//         </div>
//         })
       
//     }
//         </div>
//     }
//     getPorductData(){
//         fetch("api/v2/crowdfunding/list.do?banner=0&pageNum=2&tagId=0&pageIndex=1").then(res=>res.json()).then(data=>{
           
//             this.setState({
//                 msgData:data.crowdfunding
                
//             })
//         })
//     }
//     componentDidMount(){
//         this.getPorductData()
       
//     }
// }







class HeaderPage extends Component {

    render() {
        return (
            <div>
                <Header />
                <SupHeader />
                <Content>
                  
                    <Tie/>
                   <Tit/> 
                   <Bodyo/>
               
                </Content>
               
               
              
                
                {/* <Login></Login> */}
            </div>
        )
    }

}

export default HeaderPage