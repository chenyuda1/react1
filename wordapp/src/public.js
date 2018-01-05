import React, { Component } from 'react'
import"./public.css"
import { Link } from 'react-router';
import Swiper from "swiper"
import { Progress } from 'antd';
import "swiper/dist/css/swiper.min.css";
import "./routes/one/one.css"
class Header extends Component {
  static defaultProps={
      headerData:[
          {name:"推荐",lis:"/"}, {name:"古法美食",lis:"/two"}, {name:"独家设计",lis:"/three"}, {name:"百年技艺",lis:"/four"}, {name:"文化体验",lis:"/five"}
      ]
  }  
    render(){
        return <div className="header">
            <ul>
                {
                    this.props.headerData.map((ele,index)=><li key={index}>
                     <Link   activeClassName="active" to={ele.lis}> 
                        {ele.name}
                       
                        </Link> 
                        </li>
                    )
                }
            </ul>
        </div>
    }
}
    class Body extends Component{
        state={
            msgData:[]
        }
        render(){
            const msgData=this.state.msgData
            console.log(msgData)
            return <div>
                <div>产品</div>
        {
            msgData.map((ele,index)=>{
                return   <div className="big" key={index}>
                <div className="au">
                    <div className="auo">
                    <img src={"http://images.laozihaojia.com"+ele.mainImg} id={ele.crowdfundingId}/>
                    <div className="tit">{ele.brandName}<span>·</span>始于{ele.since}年</div>
                    <div className="finish">{ele.stateName}</div>
                    </div>
                    <div  className="sell">
                        <strong className="l">  {ele.title}</strong>
                        <strong className="o">  ¥{ele.min}起</strong>
                        </div>
                    <div className="baifen">
                        {/* <Progress percent={ele.finish} status="exception"  /> */}
                    </div>
                    <div className="selle">
                    <div className="f">
                        <span className="support"> {ele.support}已定制</span><span>已下定{ele.money}元</span> </div>
                        <strong className="i">  已完成{ele.finish}%</strong>
                    </div>
                   
                    
                </div>
            
            </div>
            })
        
        }
            </div>
        }
        getPorductData(){
            fetch("api/v2/crowdfunding/list.do?banner=0&pageNum=2&tagId=0&pageIndex=1").then(res=>res.json()).then(data=>{
            
                this.setState({
                    msgData:data.crowdfunding
                    
                })
            })
        }
        componentDidMount(){
            this.getPorductData()
        
        }
    }



class Content extends Component {
render(){
    return<div>{this.props.children}</div>
}


}
class Footer extends Component {
    render(){
        return
    }


}

class Login extends Component{
    handelClick(){
        var input=document.getElementById("phonename")
        var obtn=document.getElementsByClassName("btn")
        console.log(input)
        var shouji=/^(13|15|18)\d{9}$/
        console.log(input.value)
        if(input.value.match(shouji)){obtn.style.background="red"}else{alert(0)}
     }
     tend(){
        var input=document.getElementById("phonename")
        var obtn=document.getElementsByClassName("btn")
        var shouji=/^(13|15|18)\d{9}$/
        if(input.value.match(shouji)){}else{alert(0)}  
     }
    render (){
    return <div className="login">
        <div className="loo">登录</div>
        <div className="phone">
        <input placeholder="请输入手机号"  id="phonename" />
        <button className="btn" onClick={this.handelClick }>下一步</button>
        
        </div>
        <div className="wx">
           <div className="img" ></div>
           <div className="sm">微信登录</div>
           

        </div>

    </div>
    }

   
}
class Tie extends Component{
    state = {
        firstData: []
       
    } 
    render(){
        const firstData = this.state.firstData

        console.log(firstData)

        return     <div className="swiper-container" ref="swiper-container">
	<div className="swiper-wrapper">
    {firstData.map((ele,index)=>{
        return<div className="swiper-slide" key={index} id="silder">
			<div className="all"> 
                <div className="filx1">
                <img src={"http://images.laozihaojia.com"+ele.commodityImg} className="list"/>
                </div>
                <div className="filx2">
                    <p className="title">{ele.commodityTitle}</p>
                    <p>￥{ele.commodityPrice}</p>
                    <div className="buy">{ele.sellCount}人购买</div>
                    <span></span>
                </div>
            
            </div>
       
        </div>
    })
           
            }

	</div>
</div>
           
            
               
    }
    
    componentDidMount() {
        fetch("/api/crowdfunding/home.do?=1510646626170").then(res => res.json()).then(data => {
            console.log(data)
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
        console.log("创建swiper")
        }
  
}
 
export { Header, Footer, Content ,Login,Tie,Body}