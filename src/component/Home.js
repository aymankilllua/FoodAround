import React, { Component } from 'react'
import "../component/style.css"
import {landpage , country} from "../data"
import chef from "./img/landingpage/Frame.png"





export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            index:1
        }
    }

    change = (id) =>{
        this.setState({
            index:id
        })
        console.log(this.state.index)
    } 

    

    
    
    render() {
        let food = country[this.state.index].topfood;
        return (
            <div>
            <div className="container-fluid p-0 home">
                <div className="row">
                   <div className="col-12 img p-0">
                       <div className="row">
                           <div className="col-4 bg-danger header1"><img className="chef ml-2"  src={chef} alt="img" />  <h4 className="text-light text-center pt-2 ml-2">Food Around</h4></div>
                           <div id="food" className="col-4 bg-danger header2"><h4 className="text-light text-center pt-2">See more <i className="fas fa-arrow-right fa-xs"></i></h4></div>
                       </div>
                       {country.map((img , index) => {
                         return (
                         <div className='dish'>
                         <img className="dishs" key={index} src={img.dish} alt="img" />
                         </div>
                         )
                       })}
                   </div>
                   <div className="col-12 flag">
                       {landpage.map((flag,index)=>{
                           return<img className="flagimg" key={index} src={flag.img} alt="img" />
                       })}
                   </div>
                   <div className="col-12 headertxt d-flex align-item-center">
                       <h1 className="text-center">Food Around <br/> The World</h1>
                   </div>
                </div>
            </div>

            <div className="container-fluid page2  ">
               <div className="row">
                   <div className="col-md-3 col-sm-12 menu">
                       <div className="row">
                           <div id="home" style={{cursor:"pointer"}} className="col-6 mt-2 bg-danger"><h4 className="text-light d-inline">food Around</h4></div>
                           <div className="col-6 mt-2"><h5 className="text-light text-right"><i style={{cursor:"pointer"}} className="fas fa-times-circle close text-light"></i></h5></div>

                           {country.map((count,index)=>{
                               return(
                                <div className="col-12 mt-5">
                                <div   className="list">
                                    <h3 onClick={()=>this.change(count.id)}>{count.name}</h3>
                                    <img src={count.flagimg} alt="country" />
                                   </div>
                                </div>
                               )
                           })}

                       </div>
                   </div>

                   <div className="col-12 itembody p-0 bg-dark">
                       <img src={country[this.state.index].dish} alt="img" />
                     <div className='row'>
                         <div className="col-md-3 col-sm-12" style={{position:"relative"}}>
                             <div className="listoffood">
                                 <div className="row">
                                 <h4 className="col-6 text-left text-light p-4">Top Food</h4>
                                 <h4 className="col-6 text-right text-light  p-4"><i className="fas fa-align-right icon"></i></h4>
                                 </div>
                                 {food.map((top,i) => {
                                     return(
                                         <div className="text mt-3">
                                          <h6 className="p-3">{top}</h6>
                                          </div>   
                                     )
                                 })}
                                 <div className="style"/>
                             </div>
                         </div>
                        <div className="col-md-9 col-sm-12" style={{position:"relative"}}>
                        <div className="namecountry">
                                     <div className="countryname mt-5">
                                     <h1 className="p-5">{country[this.state.index].name}</h1>
                                     <p>{country[this.state.index].description}</p>
                                     </div>
                             </div>
                        </div>
                     </div>
                   </div>
               </div>
            </div>


            </div>
        )
    }
}









