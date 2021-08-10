import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastMessagejQuery from "react-toastr/lib/components/ToastMessage/ToastMessagejQuery";

 
 class Home extends Component{
      notify = (name) => toast(`Item added to cart`);
    handleClick = (id,name)=>{
        this.props.addToCart(id); 
        this.notify(name);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
              
               
                <div className="card" key={item.id}>

            <ToastContainer
                toastMessageFactory={React.createFactory(ToastMessagejQuery)}
                className="toast-bottom-right" // You can change this for position of notification box
                ref={ref => {
                  this.bottomContainer = ref;
                }}
              />
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light green" onClick={()=>{this.handleClick(item.id, item.name)}}><i className="material-icons">shopping_cart</i></span>
 
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price:&#8358; {item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">All Products</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)