import React from "react"
import {useDispatch} from "react-redux"
import style from "./style.module.css"
import {
    setAmalgama,
    setAmalgamaCoast,
    setButtonCoast,
    setMkv,
    setMpog,
    showInfoToggle
} from "../store/mainReducer";






export const InputData = () => {


    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        let data = {
            height: +form["height"].value,
            width: +form["width"].value,
            kol: +form["kol"].value,
            isAmalgama: form["isAmalgama"].checked,
            lightType: form["select"].value,
            btnType: form["btnType"].value
        }


        dispatch(setMkv(data))
        dispatch(setMpog(data))
        dispatch(setAmalgama(data))
        dispatch(setAmalgamaCoast(data))
        dispatch(showInfoToggle(true))

        switch(data.btnType) {
            case "sensorBtn":
                return dispatch(setButtonCoast(550))
            case "mehanicBtn":
                return dispatch(setButtonCoast(45))
            default:
                return dispatch(setButtonCoast(0))
        }

    }

    return(
        <div className={style.leftSide}>

            <form onSubmit={handleSubmit}>
                <input className={style.inp} type="number" name="height" placeholder="Высота"/>
                <input className={style.inp} type="number" name="width" placeholder="Ширина"/>
                <input className={style.inp} type="number" name="kol" placeholder="Кол-во"/>

                <div className={style.isAmalg}>
                    <label className={style.label} htmlFor="isAmalgama">Снятие Амальгамы: </label>
                    <input type="checkbox" name="isAmalgama"/>

                </div>

                <div>
                    <label className={style.label} htmlFor="select">Свечение:</label>
                    <select name="select" className={style.select}>
                        <option value="hot">Тёплый</option>
                        <option value="middle">Нейтральный</option>
                        <option value="cold" >Холодный</option>
                    </select>

                </div>

                <div className={style.selectBtnType}>
                    <div>
                        <input type="radio" value="sensorBtn" name="btnType"/>
                        <label htmlFor="sensorBtn">Сенсорная кнопка</label>
                    </div>
                    <div>
                        <input type="radio" value="mehanicBtn" name="btnType"/>
                        <label htmlFor="mehanicBtn">Механическая кнопка</label>
                    </div>
                    <div>
                        <input type="radio" value="noBtn" name="btnType"/>
                        <label htmlFor="noBtn">Без Кнопки</label>
                    </div>

                </div>
                <button type="submit" className={style.getBtn}>Считаем!</button>
            </form>

        </div>
    )
}