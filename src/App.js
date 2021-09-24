import React from 'react'
import style from './style.module.css'
import {InputData} from "./components/InputData";
import {ResultData} from "./components/ResultData";
import {Header} from "./components/Header";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {ShowInfo} from "./components/ShowInfo";

const App = (props) => {
  return (
      <HashRouter>
        <div className={style.wrapper}>

            <Header/>
            <div className={style.leftSide}><InputData/></div>
            <div className={style.rightSide}><ResultData/></div>

            <Route path="/showInfo" render={() => <ShowInfo/>}  />
        </div>

      </HashRouter>
  )
}

export default App;
