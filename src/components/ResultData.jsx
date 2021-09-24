import React from "react"
import style from "./style.module.css"
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {ShowInfo} from "./ShowInfo"
import {showInfoToggle} from "../store/mainReducer"


export const ResultData = () => {

    const dispatch = useDispatch()

    const mkv = useSelector(state => state.mainReducer.mkv)
    const mpog = useSelector(state => state.mainReducer.mpog)
    const coastAmalgama = useSelector(state => state.mainReducer.coastAmalgama)
    const profileCoast = useSelector(state => state.mainReducer.profileCoast)
    const showInfo = useSelector(state => state.mainReducer.showInfo)
    const btnTypeCoast = useSelector(state => state.mainReducer.btnTypeCoast)
    const coastLED = useSelector(state => state.mainReducer.coastLED)
    const powerBlockType = useSelector(state => state.mainReducer.powerBlockType)
    const coastLips = useSelector(state => state.mainReducer.coastLips)

    const openInfo = () => {
        dispatch(showInfoToggle(true))
    }




    let summ = (mkv * 514) + (mpog * 29) + (mkv * coastAmalgama) + (mpog * coastLED)
               + (mpog * profileCoast) + btnTypeCoast + powerBlockType + coastLips





    return(
        <div className={style.rightSide}>
            <div className={style.results}>м.кв: {mkv.toFixed(2)}</div>
            <div className={style.results}>м.пог: {mpog.toFixed(2)}</div>
            <div className={style.summ}>Сумма: {summ.toFixed(2) }</div>
            <button onClick={() => openInfo()}>Детальнее</button>
            {showInfo ? <ShowInfo/> : <div> </div>}
        </div>
    )
}