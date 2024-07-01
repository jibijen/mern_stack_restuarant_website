import React from 'react'
import {data} from '../restAPI.json'
const Menu = () => {
  return (
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Grilled Salmon with Lemon Butter Sauce,Risotto Primavera,Steak Frites..and many more,Each of these popular dishes offers a unique culinary experience, showcasing a variety of flavors and ingredients to cater to different preferences and tastes. Whether you're in the mood for seafood, vegetarian fare, or hearty meat dishes, there's something for everyone to enjoy on the menu.</p>
            </div>
            <div className="dishes_container">
                  {
                      data[0].dishes.map(element => {
                          return (
                              <div className="card" key={element.id}>
                                  <img src={element.image} alt={element.title} />
                                  <h3>{element.title}</h3>
                                  <button>{element.category}</button>
                              </div>
                          )
                      })
                  }  
            </div>
        </div>
      </section>
    
  )
}

export default Menu