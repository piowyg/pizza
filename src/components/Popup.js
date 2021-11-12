import React from 'react';
import { Link } from 'react-router-dom';

const Popup = (props) => {


      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h2>{props.text}</h2>
          <button className="close" onClick={() => props.closePopup()}><img src="/close.png" alt="close"/></button>
          <img className="pogchamp" src="/pogchamp.png" alt="pogu"/>
          <section>
              <div className="continue_shoping" onClick={() => props.closePopup()}>
                    Kontynuuj zakupy
              </div>
              <div>
                  <Link to="/order"> Przejdź do koszyka </Link>
              </div>
          </section>
          </div>
        </div>
      );
    }

  export default Popup;