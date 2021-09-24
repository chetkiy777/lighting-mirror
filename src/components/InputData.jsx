import React from "react"
import {useDispatch, useSelector} from "react-redux"
import style from "./style.module.css"
import {
    setAmalgama,
    setAmalgamaCoast,
    setButtonCoast,
    setMkv,
    setMpog,
    setPowerBlock,
    setLipsCoast,
    setInstallCoast,
    setLedCoast
} from "../store/mainReducer";


export const InputData = () => {


    const isImage = useSelector(state => state.mainReducer.data.isAmalgama)
    const dispatch = useDispatch()

    const choicePowerBlock = (mpog) => {
        if (mpog > 2 && mpog < 0 ) {
            dispatch(setPowerBlock(265))
        } else if (mpog > 2 && mpog < 3 ) {
            dispatch(setPowerBlock(290))
        } else if (mpog > 3 && mpog < 4 ) {
            dispatch(setPowerBlock(370))
        } else if (mpog > 3 && mpog < 5 ) {
            dispatch(setPowerBlock(450))
        } else if (mpog > 5 && mpog < 7 ) {
            dispatch(setPowerBlock(715))
        } else if (mpog > 7 && mpog < 11 ) {
            dispatch(setPowerBlock(900))
        }
    }

    const choiceLips = (value) => {
        if (value === "mini") {
            dispatch(setLipsCoast(56))
        } else if (value === "middle" || value === "large") {
            dispatch(setLipsCoast(100))
        }
    }

    const setCoastAmalgama = (isAmalgama) => {
        if (isAmalgama) {
            dispatch(setAmalgamaCoast(205))
        }
    }

    const choiceLedType = (ledType) => {
        if (ledType === 'bright') {
            dispatch(setLedCoast(165))
        } else (dispatch(setLedCoast(85)))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        let data = {
            height: +form["height"].value,
            width: +form["width"].value,
            kol: +form["kol"].value,
            isAmalgama: form["isAmalgama"].checked,
            lightType: form["select"].value,
            btnType: form["btnType"].value,
            lips: form["select"].value,
            ledType: form["howManyLamps"].value
        }

        choiceLedType(data.ledType)

        choiceLips(data.lips)

        const mpogLocal = ((((data.height/1000) + (data.width/1000))*data.kol)*2)
        choicePowerBlock(mpogLocal)

        dispatch(setMkv(data))
        dispatch(setMpog(data))
        dispatch(setAmalgama(data))
        dispatch(setInstallCoast(550))

        setCoastAmalgama(data.isAmalgama)

        switch (data.btnType) {
            case "sensorBtn":
                return dispatch(setButtonCoast(550))
            case "mehanicBtn":
                return dispatch(setButtonCoast(45))
            default:
                return dispatch(setButtonCoast(0))
        }


    }

    return (
        <div className={style.leftSide}>

            <form onSubmit={handleSubmit}>
                <input className={style.inp} type="number" name="height" placeholder="Высота"/>
                <input className={style.inp} type="number" name="width" placeholder="Ширина"/>
                <input className={style.inp} type="number" name="kol" placeholder="Кол-во"/>

                <div className={style.isAmalg}>
                    <label className={style.label} htmlFor="isAmalgama">Снятие Амальгамы:
                        <input type="checkbox" name="isAmalgama"/>
                    </label>
                </div>

                {isImage ? <input placeholder='введите номер картинки их каталога'/> : ''

                }

                <div className={style.lips}>
                    <label className={style.label} htmlFor="select">ЛИПЫ (крепления):
                    <select name="select" className={style.select}>
                        <option value="mini" >100 * 100 (2шт)</option>
                        <option value="middle" >150 * 90 (2шт)</option>
                        <option value="large" >250 * 100 (2шт)</option>
                    </select>
                    </label>
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
                    <div className={style.kindLed}>
                        <span>Сколько диодов на ленте? : </span>
                        <label>120 диодов<input type='radio' name='howManyLamps' value='low'/></label>
                        <label>204 диода<input type='radio' name='howManyLamps' value='bright'/></label>
                    </div>

                </div>
                <button type="submit" className={style.getBtn}>Считаем!</button>
            </form>

        </div>

    )
}