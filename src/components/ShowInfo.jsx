import React from 'react'
import style from './style.module.css'
import {useSelector} from "react-redux";

export const ShowInfo = () => {

    const mkv = useSelector(state => state.mainReducer.mkv)
    const mpog = useSelector(state => state.mainReducer.mpog)
    const coast = useSelector(state => state.mainReducer.coast)
    const coastLightType = useSelector(state => state.mainReducer.coastLightType)
    const profileCoast = useSelector(state => state.mainReducer.profileCoast)
    const btnTypeCoast = useSelector(state => state.mainReducer.btnTypeCoast)


    return(
        <div className={style.showInfoBlock}>
            <div className="resItem">Зеркало с полировкой: {(mkv * 410).toFixed(2)} </div>
            <div className="resItem">Профиль: {(mpog * profileCoast).toFixed(2)} </div>
            <div className="resItem">Лента светодиодная: {(mpog * coastLightType).toFixed(2)} </div>
            <div className="resItem">Снятие амальгамы: {(mkv * coast).toFixed(2)} </div>
            <div className="resItem">Кнопка: {btnTypeCoast.toFixed(2)} </div>
            <div className="resItem">Блок питания: </div>
            <a href="https://chetkiy777.github.io/build/">закрыть</a>
        </div>
    )
}

