(this.webpackJsonplightmir=this.webpackJsonplightmir||[]).push([[0],{15:function(e,t,c){e.exports={wrapper:"style_wrapper__2aHBA",leftSide:"style_leftSide__dbdHf",rightSide:"style_rightSide__3Y6E1"}},32:function(e,t,c){"use strict";c.r(t);c(0);var a=c(13),n=c.n(a),s=c(15),i=c.n(s),r=c(3),l=c(4),o=c.n(l),j=c(6),d="SET_MKV",u="SET_MPOG",m="SET_AMALGAMA",b="SET_AMALGAMA_COAST",h="SET_LIGHT_TYPE_COAST",O="SET_SHOW_INFO",p="SET_BUTTON_COAST",x="SET_POWER_BLOCK",_="SET_LIPS_COAST",f={data:{height:0,width:0,kol:0,isAmalgama:!1,lightType:"hot"},mkv:0,mpog:0,coastAmalgama:0,profileCoast:95,showInfo:!1,btnTypeCoast:0,coastLED:85,powerBlockType:0,coastLips:0},y=function(e){return{type:p,btnTypeCoast:e}},g=function(e){return{type:O,showInfo:e}},v=function(e){return{type:x,payload:e}},T=function(e){return{type:_,payload:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{mkv:t.data.height/1e3*(t.data.width/1e3)*t.data.kol});case u:return Object(j.a)(Object(j.a)({},e),{},{mpog:(t.data.height/1e3+t.data.width/1e3)*t.data.kol*2});case m:return Object(j.a)(Object(j.a)({},e),{},{isAmalgama:t.data.isAmalgama});case b:return Object(j.a)(Object(j.a)({},e),{},{coastAmalgama:t.data.isAmalgama?e.coastAmalgama=205*e.mkv:e.coastAmalgama=0});case h:return Object(j.a)(Object(j.a)({},e),{},{coastLightType:e.coastLightType*e.mpog});case O:return Object(j.a)(Object(j.a)({},e),{},{showInfo:t.showInfo});case p:return Object(j.a)(Object(j.a)({},e),{},{btnTypeCoast:t.btnTypeCoast});case x:return Object(j.a)(Object(j.a)({},e),{},{powerBlockType:t.payload});case _:return Object(j.a)(Object(j.a)({},e),{},{coastLips:t.payload});default:return e}},A=c(1),N=function(){var e=Object(r.c)((function(e){return e.mainReducer.data.isAmalgama})),t=Object(r.b)();return Object(A.jsx)("div",{className:o.a.leftSide,children:Object(A.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c,a,n=e.currentTarget,s={height:+n.height.value,width:+n.width.value,kol:+n.kol.value,isAmalgama:n.isAmalgama.checked,lightType:n.select.value,btnType:n.btnType.value,lips:n.select.value};switch("mini"===(c=s.lips)?t(T(56)):"middle"!==c&&"large"!==c||t(T(100)),(a=(s.height/1e3+s.width/1e3)*s.kol*2)>2&&a<0?t(v(265)):a>2&&a<3?t(v(290)):a>3&&a<4?t(v(370)):a>3&&a<10&&t(v(450)),t(function(e){return{type:d,data:e}}(s)),t(function(e){return{type:u,data:e}}(s)),t(function(e){return{type:m,data:e}}(s)),t(function(e){return{type:b,data:e}}(s)),t(g(!0)),s.btnType){case"sensorBtn":return t(y(550));case"mehanicBtn":return t(y(45));default:return t(y(0))}},children:[Object(A.jsx)("input",{className:o.a.inp,type:"number",name:"height",placeholder:"\u0412\u044b\u0441\u043e\u0442\u0430"}),Object(A.jsx)("input",{className:o.a.inp,type:"number",name:"width",placeholder:"\u0428\u0438\u0440\u0438\u043d\u0430"}),Object(A.jsx)("input",{className:o.a.inp,type:"number",name:"kol",placeholder:"\u041a\u043e\u043b-\u0432\u043e"}),Object(A.jsx)("div",{className:o.a.isAmalg,children:Object(A.jsxs)("label",{className:o.a.label,htmlFor:"isAmalgama",children:["\u0421\u043d\u044f\u0442\u0438\u0435 \u0410\u043c\u0430\u043b\u044c\u0433\u0430\u043c\u044b:",Object(A.jsx)("input",{type:"checkbox",name:"isAmalgama"})]})}),e?Object(A.jsx)("input",{placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0438\u0445 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}):"",Object(A.jsx)("div",{className:o.a.lips,children:Object(A.jsxs)("label",{className:o.a.label,htmlFor:"select",children:["\u041b\u0418\u041f\u042b (\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f):",Object(A.jsxs)("select",{name:"select",className:o.a.select,children:[Object(A.jsx)("option",{value:"mini",children:"100 * 100 (2\u0448\u0442)"}),Object(A.jsx)("option",{value:"middle",children:"100 * 100 (2\u0448\u0442)"}),Object(A.jsx)("option",{value:"large",children:"100 * 100 (2\u0448\u0442)"})]})]})}),Object(A.jsxs)("div",{className:o.a.selectBtnType,children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"radio",value:"sensorBtn",name:"btnType"}),Object(A.jsx)("label",{htmlFor:"sensorBtn",children:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"radio",value:"mehanicBtn",name:"btnType"}),Object(A.jsx)("label",{htmlFor:"mehanicBtn",children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"radio",value:"noBtn",name:"btnType"}),Object(A.jsx)("label",{htmlFor:"noBtn",children:"\u0411\u0435\u0437 \u041a\u043d\u043e\u043f\u043a\u0438"})]})]}),Object(A.jsx)("button",{type:"submit",className:o.a.getBtn,children:"\u0421\u0447\u0438\u0442\u0430\u0435\u043c!"})]})})},k=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainReducer.mkv})),c=Object(r.c)((function(e){return e.mainReducer.mpog})),a=Object(r.c)((function(e){return e.mainReducer.coastAmalgama})),n=Object(r.c)((function(e){return e.mainReducer.coastLED})),s=Object(r.c)((function(e){return e.mainReducer.profileCoast})),i=Object(r.c)((function(e){return e.mainReducer.btnTypeCoast})),l=Object(r.c)((function(e){return e.mainReducer.powerBlockType})),j=Object(r.c)((function(e){return e.mainReducer.coastLips}));return Object(A.jsxs)("div",{className:o.a.showInfoBlock,children:[Object(A.jsxs)("div",{className:"resItem",children:["\u0417\u0435\u0440\u043a\u0430\u043b\u043e \u0441 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u043e\u0439: ",(514*t+29*c).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c: ",(c*s).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041b\u0435\u043d\u0442\u0430 \u0441\u0432\u0435\u0442\u043e\u0434\u0438\u043e\u0434\u043d\u0430\u044f: ",(c*n).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u0421\u043d\u044f\u0442\u0438\u0435 \u0430\u043c\u0430\u043b\u044c\u0433\u0430\u043c\u044b: ",(t*a).toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041a\u043d\u043e\u043f\u043a\u0430: ",i.toFixed(2)," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u0411\u043b\u043e\u043a \u043f\u0438\u0442\u0430\u043d\u0438\u044f: ",l," "]}),Object(A.jsxs)("div",{className:"resItem",children:["\u041a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435: ",j," "]}),Object(A.jsx)("button",{onClick:function(){e(g(!1))},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})},B=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainReducer.mkv})),c=Object(r.c)((function(e){return e.mainReducer.mpog})),a=Object(r.c)((function(e){return e.mainReducer.coastAmalgama})),n=Object(r.c)((function(e){return e.mainReducer.profileCoast})),s=Object(r.c)((function(e){return e.mainReducer.showInfo})),i=Object(r.c)((function(e){return e.mainReducer.btnTypeCoast})),l=Object(r.c)((function(e){return e.mainReducer.coastLED})),j=Object(r.c)((function(e){return e.mainReducer.powerBlockType})),d=Object(r.c)((function(e){return e.mainReducer.coastLips})),u=514*t+29*c+t*a+c*l+c*n+i+j+d;return Object(A.jsxs)("div",{className:o.a.rightSide,children:[Object(A.jsxs)("div",{className:o.a.results,children:["\u043c.\u043a\u0432: ",t.toFixed(2)]}),Object(A.jsxs)("div",{className:o.a.results,children:["\u043c.\u043f\u043e\u0433: ",c.toFixed(2)]}),Object(A.jsxs)("div",{className:o.a.summ,children:["\u0421\u0443\u043c\u043c\u0430: ",u.toFixed(2)]}),Object(A.jsx)("button",{onClick:function(){e(g(!0))},children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0435\u0435"}),s?Object(A.jsx)(k,{}):Object(A.jsx)("div",{children:" "})]})},S=c.p+"static/media/logo.65c945ae.png",I=function(){return Object(A.jsx)("div",{className:o.a.header,children:Object(A.jsxs)("span",{className:o.a.logo,children:[Object(A.jsx)("img",{src:S}),Object(A.jsx)("a",{href:"https://dekor.ua",children:" www.dekor.ua "})]})})},R=c(18),C=c(5),E=function(e){return Object(A.jsx)(R.a,{children:Object(A.jsxs)("div",{className:i.a.wrapper,children:[Object(A.jsx)(I,{}),Object(A.jsx)("div",{className:i.a.leftSide,children:Object(A.jsx)(N,{})}),Object(A.jsx)("div",{className:i.a.rightSide,children:Object(A.jsx)(B,{})}),Object(A.jsx)(C.a,{path:"/showInfo",render:function(){return Object(A.jsx)(k,{})}})]})})},F=c(21),L=Object(F.a)({mainReducer:w}),M=Object(F.b)(L);n.a.render(Object(A.jsx)(r.a,{store:M,children:Object(A.jsx)(E,{})}),document.getElementById("root"))},4:function(e,t,c){e.exports={getBtn:"style_getBtn__2wsCY",results:"style_results__2u9Tc",rightSide:"style_rightSide__1fqCM",inp:"style_inp__1k_jF",summ:"style_summ__28m6E",isAmalg:"style_isAmalg__2YIBz",select:"style_select__2Xaht",label:"style_label__2_FT7",selectBtnType:"style_selectBtnType__2Oioy",showInfo:"style_showInfo__2KFcy",logo:"style_logo__3jEMh",header:"style_header__Wj1w4",showInfoBlock:"style_showInfoBlock__M5x42",lips:"style_lips__3wnwa"}}},[[32,1,2]]]);
//# sourceMappingURL=main.9d9cd39f.chunk.js.map