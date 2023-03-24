import React from 'react'

/*import { useState } from 'react'


export default function produits() {
    const[produits , setProduits] = useState ;
    fetch ('https://fakestoreapi.com/products/1')
    .then (res => res.json())
    .then ( response => setProduits(response))

    .catch (err => console.log(err))*/
    export default function Produits(props){

 var Produits = [
    {titre :'Veste' , prix:'6.900 DA' , image:'https://images.unsplash.com/photo-1613733539615-77260d01dfd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'} ,
    {titre :'T-shirt' , prix:'2.500 DA' , image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} ,
    {titre : 'Bague en Or' , prix:'10.000 DA' , image:'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'},
    {titre :'ColLier' , prix:'3.000 DA ' , image:'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'} ,
    {titre :'Montre' , prix:'20.000 DA ' , image:'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'} ,
    {titre : 'Jean' , prix:'5.000 DA ' , image:'https://images.unsplash.com/photo-1511105612320-2e62a04dd044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    ]

    return (
       <div className="titre">

          {Produits.map(produits => {
              return (
                <div className= "fit">
                    <img src={produits.image} alt=""/>
                     <h4> {produits.titre}</h4>  
                     <span>{produits.prix}</span> 
                     <input class="button" type="button" value="Add To Cart" />
          
                     </div>
                     )

                 })
                     }
                     </div>
            )
                    }