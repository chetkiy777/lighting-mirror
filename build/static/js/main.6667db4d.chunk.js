(this.webpackJsonplightmir=this.webpackJsonplightmir||[]).push([[0],{15:function(e,t,a){e.exports={leftSide:"style_leftSide__dbdHf",wrapper:"style_wrapper__2aHBA",rightSide:"style_rightSide__3Y6E1"}},32:function(e,t,a){"use strict";a.r(t);a(0);var c=a(13),n=a.n(c),s=a(15),i=a.n(s),r=a(3),l=a(4),o=a.n(l),d=a(5),j="SET_MKV",u="SET_MPOG",b="SET_AMALGAMA",m="SET_AMALGAMA_COAST",O="SET_LIGHT_TYPE_COAST",h="SET_SHOW_INFO",p="SET_BUTTON_COAST",y="SET_POWER_BLOCK",_="SET_LIPS_COAST",x="SET_INSTALL_COAST",f="SET_LED_COAST",g={data:{height:0,width:0,kol:0,isAmalgama:!1},mkv:0,mpog:0,coastAmalgama:0,profileCoast:95,showInfo:!1,btnTypeCoast:0,coastLED:0,powerBlockType:0,coastLips:0,installCoast:0},v=function(e){return{type:p,btnTypeCoast:e}},T=function(e){return{type:h,showInfo:e}},w=function(e){return{type:y,payload:e}},N=function(e){return{type:_,payload:e}},A=function(e){return{type:f,payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{mkv:t.data.height/1e3*(t.data.width/1e3)*t.data.kol});case u:return Object(d.a)(Object(d.a)({},e),{},{mpog:(t.data.height/1e3+t.data.width/1e3)*t.data.kol*2});case b:return Object(d.a)(Object(d.a)({},e),{},{isAmalgama:t.data.isAmalgama});case m:return Object(d.a)(Object(d.a)({},e),{},{coastAmalgama:t.payload});case O:return Object(d.a)(Object(d.a)({},e),{},{coastLightType:e.coastLightType*e.mpog});case h:return Object(d.a)(Object(d.a)({},e),{},{showInfo:t.showInfo});case p:return Object(d.a)(Object(d.a)({},e),{},{btnTypeCoast:t.btnTypeCoast});case y:return Object(d.a)(Object(d.a)({},e),{},{powerBlockType:t.payload});case _:return Object(d.a)(Object(d.a)({},e),{},{coastLips:t.payload});case x:return Object(d.a)(Object(d.a)({},e),{},{installCoast:t.payload});case f:return Object(d.a)(Object(d.a)({},e),{},{coastLED:t.payload});default:return e}},k=a(1),B=function(){Object(r.c)((function(e){return e.mainReducer.data.isAmalgama}));var e=Object(r.b)(),t=function(t){t&&e({type:m,payload:205})};return Object(k.jsx)("div",{className:o.a.leftSide,children:Object(k.jsxs)("form",{onSubmit:function(a){a.preventDefault();var c,n,s=a.currentTarget,i={height:+s.height.value,width:+s.width.value,kol:+s.kol.value,isAmalgama:s.isAmalgama.checked,lightType:s.select.value,btnType:s.btnType.value,lips:s.select.value,ledType:s.howManyLamps.value};switch(e(A("bright"===i.ledType?165:85)),"mini"===(c=i.lips)?e(N(56)):"middle"!==c&&"large"!==c||e(N(100)),(n=(i.height/1e3+i.width/1e3)*i.kol*2)>2&&n<0?e(w(265)):n>2&&n<3?e(w(290)):n>3&&n<4?e(w(370)):n>3&&n<5?e(w(450)):n>5&&n<7?e(w(715)):n>7&&n<11&&e(w(900)),e(function(e){return{type:j,data:e}}(i)),e(function(e){return{type:u,data:e}}(i)),e(function(e){return{type:b,data:e}}(i)),e({type:x,payload:550}),t(i.isAmalgama),i.btnType){case"sensorBtn":return e(v(550));case"mehanicBtn":return e(v(45));default:return e(v(0))}},children:[Object(k.jsx)("input",{className:o.a.inp,type:"number",name:"height",placeholder:"\u0412\u044b\u0441\u043e\u0442\u0430"}),Object(k.jsx)("input",{className:o.a.inp,type:"number",name:"width",placeholder:"\u0428\u0438\u0440\u0438\u043d\u0430"}),Object(k.jsx)("input",{className:o.a.inp,type:"number",name:"kol",placeholder:"\u041a\u043e\u043b-\u0432\u043e"}),Object(k.jsx)("div",{className:o.a.isAmalg,children:Object(k.jsxs)("label",{className:o.a.label,htmlFor:"isAmalgama",children:["\u0421\u043d\u044f\u0442\u0438\u0435 \u0410\u043c\u0430\u043b\u044c\u0433\u0430\u043c\u044b:",Object(k.jsx)("input",{type:"checkbox",name:"isAmalgama"})]})}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{className:o.a.lips,children:Object(k.jsxs)("label",{className:o.a.label,htmlFor:"select",children:["\u041b\u0418\u041f\u042b (\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f):",Object(k.jsxs)("select",{name:"select",className:o.a.select,children:[Object(k.jsx)("option",{value:"mini",children:"100 * 100 (2\u0448\u0442)"}),Object(k.jsx)("option",{value:"middle",children:"150 * 90 (2\u0448\u0442)"}),Object(k.jsx)("option",{value:"large",children:"250 * 100 (2\u0448\u0442)"})]})]})}),Object(k.jsxs)("div",{className:o.a.selectBtnType,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"radio",value:"sensorBtn",name:"btnType"}),Object(k.jsx)("label",{htmlFor:"sensorBtn",children:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"radio",value:"mehanicBtn",name:"btnType"}),Object(k.jsx)("label",{htmlFor:"mehanicBtn",children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"radio",value:"noBtn",name:"btnType"}),Object(k.jsx)("label",{htmlFor:"noBtn",children:"\u0411\u0435\u0437 \u041a\u043d\u043e\u043f\u043a\u0438"})]}),Object(k.jsxs)("div",{className:o.a.kindLed,children:[Object(k.jsx)("span",{children:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0438\u043e\u0434\u043e\u0432 \u043d\u0430 \u043b\u0435\u043d\u0442\u0435? : "}),Object(k.jsxs)("label",{children:["120 \u0434\u0438\u043e\u0434\u043e\u0432",Object(k.jsx)("input",{type:"radio",name:"howManyLamps",value:"low"})]}),Object(k.jsxs)("label",{children:["204 \u0434\u0438\u043e\u0434\u0430",Object(k.jsx)("input",{type:"radio",name:"howManyLamps",value:"bright"})]})]})]}),Object(k.jsx)("button",{type:"submit",className:o.a.getBtn,children:"\u0421\u0447\u0438\u0442\u0430\u0435\u043c!"})]})})},I=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainReducer.mkv})),a=Object(r.c)((function(e){return e.mainReducer.mpog})),c=Object(r.c)((function(e){return e.mainReducer.coastAmalgama})),n=Object(r.c)((function(e){return e.mainReducer.coastLED})),s=Object(r.c)((function(e){return e.mainReducer.profileCoast})),i=Object(r.c)((function(e){return e.mainReducer.btnTypeCoast})),l=Object(r.c)((function(e){return e.mainReducer.powerBlockType})),d=Object(r.c)((function(e){return e.mainReducer.coastLips})),j=Object(r.c)((function(e){return e.mainReducer.installCoast}));return Object(k.jsxs)("div",{className:o.a.showInfoBlock,children:[Object(k.jsxs)("div",{className:"resItem",children:["\u0417\u0435\u0440\u043a\u0430\u043b\u043e \u0441 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u043e\u0439: ",(514*t+29*a).toFixed(2)," "]}),Object(k.jsxs)("div",{className:"resItem",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c: ",(a*s).toFixed(2)," "]}),Object(k.jsxs)("div",{className:"resItem",children:["\u041b\u0435\u043d\u0442\u0430 \u0441\u0432\u0435\u0442\u043e\u0434\u0438\u043e\u0434\u043d\u0430\u044f: ",(a*n).toFixed(2)," "]}),Object(k.jsxs)("div",{className:"resItem",children:["\u0421\u043d\u044f\u0442\u0438\u0435 \u0430\u043c\u0430\u043b\u044c\u0433\u0430\u043c\u044b: ",(t*c).toFixed(2)," "]}),Object(k.jsxs)("div",{className:"resItem",children:["\u041a\u043d\u043e\u043f\u043a\u0430: ",i.toFixed(2)," "]}),Object(k.jsxs)("div",{className:"resItem",children:["\u0411\u043b\u043e\u043a \u043f\u0438\u0442\u0430\u043d\u0438\u044f: ",l," "]}),Object(k.jsxs)("div",{className:"resItem",children:["\u041a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435: ",d," "]}),Object(k.jsxs)("div",{className:"resItem",children:["\u0421\u0431\u043e\u0440\u043a\u0430: ",j," "]}),Object(k.jsx)("button",{onClick:function(){e(T(!1))},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})},C=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainReducer.mkv})),a=Object(r.c)((function(e){return e.mainReducer.mpog})),c=Object(r.c)((function(e){return e.mainReducer.coastAmalgama})),n=Object(r.c)((function(e){return e.mainReducer.profileCoast})),s=Object(r.c)((function(e){return e.mainReducer.showInfo})),i=Object(r.c)((function(e){return e.mainReducer.btnTypeCoast})),l=Object(r.c)((function(e){return e.mainReducer.coastLED})),d=Object(r.c)((function(e){return e.mainReducer.powerBlockType})),j=Object(r.c)((function(e){return e.mainReducer.coastLips})),u=Object(r.c)((function(e){return e.mainReducer.installCoast})),b=514*t+29*a+t*c+a*l+a*n+i+d+j+u;return Object(k.jsxs)("div",{className:o.a.rightSide,children:[Object(k.jsxs)("div",{className:o.a.results,children:["\u043c.\u043a\u0432: ",t.toFixed(2)]}),Object(k.jsxs)("div",{className:o.a.results,children:["\u043c.\u043f\u043e\u0433: ",a.toFixed(2)]}),Object(k.jsxs)("div",{className:o.a.summ,children:["\u0421\u0443\u043c\u043c\u0430: ",b.toFixed(2)]}),Object(k.jsx)("button",{onClick:function(){e(T(!0))},children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0435\u0435"}),s?Object(k.jsx)(I,{}):Object(k.jsx)("div",{children:" "})]})},L=a.p+"static/media/logo.65c945ae.png",E=function(){return Object(k.jsx)("div",{className:o.a.header,children:Object(k.jsxs)("span",{className:o.a.logo,children:[Object(k.jsx)("img",{src:L}),Object(k.jsx)("a",{href:"https://dekor.ua",children:" www.dekor.ua "})]})})},R=a(21),F=a(6),M=function(e){return Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:i.a.wrapper,children:[Object(k.jsx)(E,{}),Object(k.jsx)("div",{className:i.a.leftSide,children:Object(k.jsx)(B,{})}),Object(k.jsx)("div",{className:i.a.rightSide,children:Object(k.jsx)(C,{})}),Object(k.jsx)(F.a,{path:"/showInfo",render:function(){return Object(k.jsx)(I,{})}})]})})},D=a(20),G=Object(D.a)({mainReducer:S}),H=Object(D.b)(G);n.a.render(Object(k.jsx)(r.a,{store:H,children:Object(k.jsx)(M,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={getBtn:"style_getBtn__2wsCY",results:"style_results__2u9Tc",rightSide:"style_rightSide__1fqCM",inp:"style_inp__1k_jF",summ:"style_summ__28m6E",isAmalg:"style_isAmalg__2YIBz",select:"style_select__2Xaht",label:"style_label__2_FT7",selectBtnType:"style_selectBtnType__2Oioy",showInfo:"style_showInfo__2KFcy",logo:"style_logo__3jEMh",header:"style_header__Wj1w4",showInfoBlock:"style_showInfoBlock__M5x42",lips:"style_lips__3wnwa",kindLed:"style_kindLed__2NfI_"}}},[[32,1,2]]]);
//# sourceMappingURL=main.6667db4d.chunk.js.map