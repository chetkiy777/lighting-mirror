import React from 'react'
import style from './style.module.css'
import {useSelector, useDispatch} from "react-redux";
import {showInfoToggle} from "../store/mainReducer"

export const ShowInfo = () => {

    const dispatch = useDispatch()

    const mkv = useSelector(state => state.mainReducer.mkv)
    const mpog = useSelector(state => state.mainReducer.mpog)
    const coastAmalgama = useSelector(state => state.mainReducer.coastAmalgama)
    const coastLED = useSelector(state => state.mainReducer.coastLED)
    const profileCoast = useSelector(state => state.mainReducer.profileCoast)
    const btnTypeCoast = useSelector(state => state.mainReducer.btnTypeCoast)
    const powerBlockType = useSelector(state => state.mainReducer.powerBlockType)
    const coastLips = useSelector(state => state.mainReducer.coastLips)

    const close = () => {
        dispatch(showInfoToggle(false))
    }



    return(
        <div className={style.showInfoBlock}>
            <div className="resItem">Зеркало с полировкой: {((mkv * 514) + (mpog * 29)).toFixed(2)} </div>
            <div className="resItem">Профиль: {(mpog * profileCoast).toFixed(2)} </div>
            <div className="resItem">Лента светодиодная: {(mpog * coastLED).toFixed(2)} </div>
            <div className="resItem">Снятие амальгамы: {(mkv * coastAmalgama).toFixed(2)} </div>
            <div className="resItem">Кнопка: {btnTypeCoast.toFixed(2)} </div>
            <div className="resItem">Блок питания: {powerBlockType} </div>
            <div className="resItem">Крепление: {coastLips} </div>

            <button onClick={() => close()}>закрыть</button>
        </div>
    )
}

