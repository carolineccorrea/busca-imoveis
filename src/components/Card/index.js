import React, { Component } from 'react';


class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
          nutri: []
        };
      }

    componentDidMount(){
        let url = 'https://my-json-server.typicode.com/eduardobvale/demo/rentals';
        fetch(url)
        .then((r)=>r.json())
        .then((json)=>{
          let state = this.state;
          state.nutri = json;
          this.setState(state);
          console.log(json);
        })
    
    }      
      
    render() {
        return (
          <div>

            <div className="container">
      {this.state.nutri.map((item)=>{
        return(
          <article key={item.id}> 
            <div className="card" style={{maxWidth:'320px'}}>
            <img className="card-img-top" src={item.image} alt=""/>
        
            <div className="card-block">
        
              <h3 className="card-title">{item.title}</h3>
              <h5 className="" style={{color:'green'}}>${item.value}</h5>
              <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a href="/#" className="btn btn-outline-info">Contatar anunciante</a>
            </div>
          </div>
          </article> 
          );
       })}
      
      </div>
          </div>
        );
    }
}


export default Card;