import React, { Component } from 'react'
import {country} from "../data"


export default class veiwlist extends Component {
    render() {
        return (
            <div>
                 {country.map((count,index) => {
                const food = count.topfood
                
                return(<div>
                    <h1>{count.name } {count.id}</h1>
                      <img src={count.flagimg} alt="img"/>
                      <img src={count.dish} alt="img"/>
                     <p className="text-secondary">{count.description}</p>
                    <ul style={{listStyle:"number"}}>
                    {food.map(items=>{
                    return <li>{items}</li>
                    })}
                    </ul>
                    </div>
                )
            })}
            </div>
        )
    }
}
