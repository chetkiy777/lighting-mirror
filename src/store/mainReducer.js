const SET_MKV = 'SET_MKV'
const SET_MPOG = 'SET_MPOG'
const SET_AMALGAMA = 'SET_AMALGAMA'
const SET_AMALGAMA_COAST = 'SET_AMALGAMA_COAST'
const SET_LIGHT_TYPE_COAST = 'SET_LIGHT_TYPE_COAST'
const SET_SHOW_INFO = 'SET_SHOW_INFO'
const SET_BUTTON_COAST = 'SET_BUTTON_COAST'
const SET_POWER_BLOCK = 'SET_POWER_BLOCK'
const SET_LIPS_COAST = 'SET_LIPS_COAST'
const SET_INSTALL_COAST = 'SET_INSTALL_COAST'
const SET_LED_COAST = 'SET_LED_COAST'




let initialState = {
    data: {
        height: 0,
        width: 0,
        kol: 0,
        isAmalgama: false
    },
    mkv: 0,
    mpog: 0,
    coastAmalgama: 0,
    profileCoast: 95,
    showInfo: false,
    btnTypeCoast: 0,
    coastLED: 0,
    powerBlockType: 0,
    coastLips: 0,
    installCoast: 0
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MKV:
            return {...state, mkv: ((action.data.height/1000) * (action.data.width/1000))*action.data.kol }
        case SET_MPOG:
            return {...state, mpog: (((action.data.height/1000) + (action.data.width/1000))*action.data.kol)*2}
        case SET_AMALGAMA:
            return {...state, isAmalgama: action.data.isAmalgama }
        case SET_AMALGAMA_COAST:
            return {...state, coastAmalgama: action.payload}
        case SET_LIGHT_TYPE_COAST:
            return {...state, coastLightType: state.coastLightType * state.mpog}
        case SET_SHOW_INFO:
            return {...state, showInfo: action.showInfo}
        case SET_BUTTON_COAST:
            return {...state, btnTypeCoast: action.btnTypeCoast}
        case SET_POWER_BLOCK:
            return {...state, powerBlockType: action.payload}
        case SET_LIPS_COAST:
            return {...state, coastLips: action.payload}
        case SET_INSTALL_COAST:
            return {...state, installCoast: action.payload}
        case SET_LED_COAST:
            return {...state, coastLED: action.payload}

        default: return state
    }
}

export const setMkv = (data) => ({type: SET_MKV, data})

export const setMpog = (data) => ({type: SET_MPOG, data})

export const setAmalgama = (data) => ({type: SET_AMALGAMA, data})

export const setAmalgamaCoast = (payload)   => ({type: SET_AMALGAMA_COAST, payload})

export const setButtonCoast = (btnTypeCoast) => ({type: SET_BUTTON_COAST, btnTypeCoast})

export const showInfoToggle = (showInfo) => ({type: SET_SHOW_INFO, showInfo})

export const setPowerBlock = (payload) => ({type: SET_POWER_BLOCK, payload})

export const setLipsCoast = (payload) => ({type: SET_LIPS_COAST, payload})

export const setInstallCoast = (payload) => ({type: SET_INSTALL_COAST, payload})

export const setLedCoast = (payload) => ({type: SET_LED_COAST, payload})








export default mainReducer