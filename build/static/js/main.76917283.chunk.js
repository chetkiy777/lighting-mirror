(this.webpackJsonplightmir=this.webpackJsonplightmir||[]).push([[0],{15:function(e,t,c){e.exports={leftSide:"style_leftSide__dbdHf",wrapper:"style_wrapper__2aHBA",rightSide:"style_rightSide__3Y6E1"}},32:function(e,t,c){"use strict";c.r(t);c(0);var a=c(13),n=c.n(a),s=c(15),i=c.n(s),r=c(3),l=c(4),o=c.n(l),j=c(6),d="SET_MKV",u="SET_MPOG",b="SET_AMALGAMA",m="SET_AMALGAMA_COAST",h="SET_LIGHT_TYPE_COAST",O="SET_SHOW_INFO",p="SET_BUTTON_COAST",_="SET_POWER_BLOCK",x="SET_LIPS_COAST",y="SET_INSTALL_COAST",f={data:{height:0,width:0,kol:0,isAmalgama:!1,lightType:"hot"},mkv:0,mpog:0,coastAmalgama:0,profileCoast:95,showInfo:!1,btnTypeCoast:0,coastLED:85,powerBlockType:0,coastLips:0,installCoast:0},g=function(e){return{type:p,btnTypeCoast:e}},v=function(e){return{type:O,showInfo:e}},T=function(e){return{type:_,payload:e}},w=function(e){return{type:x,payload:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{mkv:t.data.height/1e3*(t.data.width/1e3)*t.data.kol});case u:return Object(j.a)(Object(j.a)({},e),{},{mpog:(t.data.height/1e3+t.data.width/1e3)*t.data.kol*2});case b:return Object(j.a)(Object(j.a)({},e),{},{isAmalgama:t.data.isAmalgama});case m:return Object(j.a)(Object(j.a)({},e),{},{coastAmalgama:t.payload});case h:return Object(j.a)(Object(j.a)({},e),{},{coastLightType:e.coastLightType*e.mpog});case O:return Object(j.a)(Object(j.a)({},e),{},{showInfo:t.showInfo});case p:return Object(j.a)(Object(j.a)({},e),{},{btnTypeCoast:t.btnTypeCoast});case _:return Object(j.a)(Object(j.a)({},e),{},{powerBlockType:t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{coastLips:t.payload});case y:return Object(j.a)(Object(j.a)({},e),{},{installCoast:t.payload});default:return e}},A=c(1),S=function(){var e=Object(r.c)((function(e){return e.mainReducer.data.isAmalgama})),t=Object(r.b)(),c=function(e){e&&t({type:m,payload:205})};return Object(A.jsx)("div",{className:o.a.leftSide,children:Object(A.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a,n,s=e.currentTarget,i={height:+s.height.value,width:+s.width.value,kol:+s.kol.value,isAmalgama:s.isAmalgama.checked,lightType:s.select.value,btnType:s.btnType.value,lips:s.select.value};switch("mini"===(a=i.lips)?t(w(56)):"middle"!==a&&"large"!==a||t(w(100)),(n=(i.height/1e3+i.width/1e3)*i.kol*2)>2&&n<0?t(T(265)):n>2&&n<3?t(T(290)):n>3&&n<4?t(T(370)):n>3&&n<10&&t(T(450)),t(function(e){return{type:d,data:e}}(i)),t(function(e){return{type:u,data:e}}(i)),t(function(e){return{type:b,data:e}}(i)),t({type:y,payload:550}),c(i.isAmalgama),i.btnType){case"sensorBtn":return t(g(550));case"mehanicBtn":return t(g(45));default:return t(g(0))}},children:[Object(A.jsx)("input",{className:o.a.inp,type:"number",name:"height",placeholder:"\u0412\u044b\u0441\u043e\u0442\u0430"}),Object(A.jsx)("input",{className:o.a.inp,type:"number",name:"width",placeholder:"\u0428\u0438\u0440\u0438\u043d\u0430"}),Object(A.jsx)("input",{className:o.a.inp,type:"number",name:"kol",placeholder:"\u041a\u043e\u043b-\u0432\u043e"}),Object(A.jsx)("div",{className:o.a.isAmalg,children:Object(A.jsxs)("label",{className:o.a.label,htmlFor:"isAmalgama",children:["\u0421\u043d\u044f\u0442\u0438\u0435 \u0410\u043c\u0430\u043b\u044c\u0433\u0430\u043c\u044b:",Object(A.jsx)("input",{type:"checkbox",name:"isAmalgama"})]})}),e?Object(A.jsx)("input",{placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0438\u0445 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}):"",Object(A.jsx)("div",{className:o.a.lips,children:Object(A.jsxs)("label",{className:o.a.label,htmlFor:"select",children:["\u041b\u0418\u041f\u042b (\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f):",Object(A.jsxs)("select",{name:"select",className:o.a.select,children:[Object(A.jsx)("option",{value:"mini",children:"100 * 100 (2\u0448\u0442)"}),Object(A.jsx)("option",{value:"middle",children:"150 * 90 (2\u0448\u0442)"}),Object(A.jsx)("option",{value:"large",children:"250 * 100 (2\u0448\u0442)"})]})]})}),Object(A.jsxs)("div",{className:o.a.selectBtnType,children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"radio",value:"sensorBtn",name:"btnType"}),Object(A.jsx)("label",{htmlFor:"sensorBtn",children:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"radio",value:"mehanicBtn",name:"btnType"}),Object(A.jsx)("label",{htmlFor:"mehanicBtn",children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"radio",value:"noBtn",name:"btnType"}),Object(A.jsx)("label",{htmlFor:"noBtn",children:"\u0411\u0435\u0437 \u041a\u043d\u043e\u043f\u043a\u0438"})]})]}),Object(A.jsx)("button",{type:"submit",className:o.a.getBtn,children:"\u0421\u0447\u0438\u0442\u0430\u0435\u043c!"})]})})},k=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainReducer.mkv})),c=Object(r.c)((function(e){return e.mainReducer.mpog})),a=Object(r.c)((function(e){return e.mainReducer.coastAmalgama})),n=Object(r.c)((function(e){return e.mainReducer.coastLED})),s=Object(r.c)((function(e){return e.mainReducer.profileCoast})),i=Object(r.c)((function(e){return e.mainReducer.btnTypeCoast})),l=Object(r.c)((function(e){return e.mainReducer.powerBlockType})),j=Object(r.c)((function(e){return e.mainReducer.coastLips})),d=Object(r.c)((function(e){return e.mainReducer.installCoast}));return Object(A.jsxs)("div",{className:o.a.showInfoBlock,children:[Object(A.jsxs)("div",{className:"resItem",children:["\u0417\u0435\u0440\u043a\u0430\u043b\u043e \u0441 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u043e\u0439: ",(514*t+29*c).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c: ",(c*s).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041b\u0435\u043d\u0442\u0430 \u0441\u0432\u0435\u0442\u043e\u0434\u0438\u043e\u0434\u043d\u0430\u044f: ",(c*n).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u0421\u043d\u044f\u0442\u0438\u0435 \u0430\u043c\u0430\u043b\u044c\u0433\u0430\u043c\u044b: ",(t*a).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041a\u043d\u043e\u043f\u043a\u0430: ",i.toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u0411\u043b\u043e\u043a \u043f\u0438\u0442\u0430\u043d\u0438\u044f: ",l," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435: ",j," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u0421\u0431\u043e\u0440\u043a\u0430: ",d," "]}),Object(A.jsx)("button",{onClick:function(){e(v(!1))},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})},B=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainReducer.mkv})),c=Object(r.c)((function(e){return e.mainReducer.mpog})),a=Object(r.c)((function(e){return e.mainReducer.coastAmalgama})),n=Object(r.c)((function(e){return e.mainReducer.profileCoast})),s=Object(r.c)((function(e){return e.mainReducer.showInfo})),i=Object(r.c)((function(e){return e.mainReducer.btnTypeCoast})),l=Object(r.c)((function(e){return e.mainReducer.coastLED})),j=Object(r.c)((function(e){return e.mainReducer.powerBlockType})),d=Object(r.c)((function(e){return e.mainReducer.coastLips})),u=Object(r.c)((function(e){return e.mainReducer.installCoast})),b=514*t+29*c+t*a+c*l+c*n+i+j+d+u;return Object(A.jsxs)("div",{className:o.a.rightSide,children:[Object(A.jsxs)("div",{className:o.a.results,children:["\u043c.\u043a\u0432: ",t.toFixed(2)]}),Object(A.jsxs)("div",{className:o.a.results,children:["\u043c.\u043f\u043e\u0433: ",c.toFixed(2)]}),Object(A.jsxs)("div",{className:o.a.summ,children:["\u0421\u0443\u043c\u043c\u0430: ",b.toFixed(2)]}),Object(A.jsx)("button",{onClick:function(){e(v(!0))},children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0435\u0435"}),s?Object(A.jsx)(k,{}):Object(A.jsx)("div",{children:" "})]})},I=c.p+"static/media/logo.65c945ae.png",C=function(){return Object(A.jsx)("div",{className:o.a.header,children:Object(A.jsxs)("span",{className:o.a.logo,children:[Object(A.jsx)("img",{src:I}),Object(A.jsx)("a",{href:"https://dekor.ua",children:" www.dekor.ua "})]})})},R=c(21),E=c(5),F=function(e){return Object(A.jsx)(R.a,{children:Object(A.jsxs)("div",{className:i.a.wrapper,children:[Object(A.jsx)(C,{}),Object(A.jsx)("div",{className:i.a.leftSide,children:Object(A.jsx)(S,{})}),Object(A.jsx)("div",{className:i.a.rightSide,children:Object(A.jsx)(B,{})}),Object(A.jsx)(E.a,{path:"/showInfo",render:function(){return Object(A.jsx)(k,{})}})]})})},L=c(20),M=Object(L.a)({mainReducer:N}),D=Object(L.b)(M);n.a.render(Object(A.jsx)(r.a,{store:D,children:Object(A.jsx)(F,{})}),document.getElementById("root"))},4:function(e,t,c){e.exports={getBtn:"style_getBtn__2wsCY",results:"style_results__2u9Tc",rightSide:"style_rightSide__1fqCM",inp:"style_inp__1k_jF",summ:"style_summ__28m6E",isAmalg:"style_isAmalg__2YIBz",select:"style_select__2Xaht",label:"style_label__2_FT7",selectBtnType:"style_selectBtnType__2Oioy",showInfo:"style_showInfo__2KFcy",logo:"style_logo__3jEMh",header:"style_header__Wj1w4",showInfoBlock:"style_showInfoBlock__M5x42",lips:"style_lips__3wnwa"}}},[[32,1,2]]]);
//# sourceMappingURL=main.76917283.chunk.js.map