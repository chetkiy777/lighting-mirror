import React from "react"
import style from "./style.module.css"
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export const ResultData = () => {

    const mkv = useSelector(state => state.mainReducer.mkv)
    const mpog = useSelector(state => state.mainReducer.mpog)
    const coast = useSelector(state => state.mainReducer.coast)
    const coastLightType = useSelector(state => state.mainReducer.coastLightType)
    const profileCoast = useSelector(state => state.mainReducer.profileCoast)
    const showInfo = useSelector(state => state.mainReducer.showInfo)





    let summ = (mkv * 470) + (mpog * 20) + coast + coastLightType + (mpog * profileCoast)





    return(
        <div className={style.rightSide}>
            <div className={style.results}>м.кв: {mkv.toFixed(2)}</div>
            <div className={style.results}>м.пог: {mpog.toFixed(2)}</div>
            <div className={style.summ}>Сумма: {summ.toFixed(2) }</div>
            {showInfo ? <NavLink  to="/showInfo">Дeтальнее</NavLink> : <div> </div>}
        </div>
    )
}