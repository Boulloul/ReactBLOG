import React, { Component } from 'react'
import data from "./data";
export default class Articles extends Component {

    render() {
      
        
          return data.map((item, key) => (
            <div key={key} className="col-sm-4 mb-4 " style={{paddingLeft:"150px",paddingTop:"2%" ,display:"inline-block"}}>
              <div
                className="card "
                style={{
                  width: "19rem",
                  borderRadius: "13px",
                  boxShadow: "5px 10px #888888",
                  color: "black",
                  textAlign:"left"
                }}
              >
                <img src={item.photo} className="card-img-top" alt="" style={{width:"300px",height:"200px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body.substring(0,95).concat(" ...")}</p>
                  <a href={`/article/${item.title}`} class="btn btn-primary">Learn more</a>
                </div>
              </div>
            </div>
          ));
            
        
    }
}
