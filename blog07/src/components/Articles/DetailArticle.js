import React, { Component } from 'react'
import data from "./data";

const fct=(nom)=>{
const article=data.find((item)=>{
   
    return item.title===nom;
    
});
return article;
}
export default class DetailArticle extends Component {
    render() { 
        const  name = this.props.match.params.name;
             const article=fct(name);
    return (
<div className="col-sm-4 mb-4" style={{}}>
              <div
                className="card "
                style={{
                  width: "200%",
                  marginLeft:"50%",
                  marginTop:"10%",
                  borderRadius: "13px",
                  boxShadow: "5px 10px #888888",
                  color: "black",
                  textAlign:"left"
                }}
              >
                <img src={article.photo} className="card-img-top" alt="" style={{width:"1220px",height:"600px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.body}</p>
                  
                </div>
              </div>
            </div>


      
        
    )}
}
