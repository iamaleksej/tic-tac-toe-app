import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCountWin } from '../../actions';
import './popup.sass';

const Popup = () => {
   const dispatch = useDispatch()
   const [visible, setVisible] = useState(true)
   const [countWin, setCountWin] = useState(4)

   const popupBtnClickHandler = () => {
      dispatch(actionCountWin(countWin))
      setVisible(false)
   }

   console.log(countWin)
   return (
      <>
         {(visible) ? (
            <div className="popup">
               <label className="popup__item popup__text">Сколько подряд X/O до победы?</label>
               <input type="number" className="popup__item popup__number"
                  onChange={(event) => setCountWin(Number(event.target.value))}></input>
               <button className="popup__item popup__btn"
                  onClick={popupBtnClickHandler}>OK</button>
            </div>
         ) : ''}

      </>
   )
}

export default Popup;
