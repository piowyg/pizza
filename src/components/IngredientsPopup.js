import React from 'react';

const IngredientsPopup = (props) => {


      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{props.text}</h1>
          <button className="close" onClick={() => props.closePopup()}><img src="/close.png" alt="close"/></button>
          <ul className="additional_ingredients">
              {
                  props.list.map((product, index) => (
                      <li className="ingredients" key={product.id}>
                          <label className="ingredient_label">
                              <input type="checkbox" checked={props.truthTable[index] || false} onChange={() => props.checkedFunction(index)}/>
                               <div> {product.name} </div>
                            </label>
                          </li>
                  ))
              }
          </ul>
          </div>
        </div>
      );
    }

  export default IngredientsPopup;