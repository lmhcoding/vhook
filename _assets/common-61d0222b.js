let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{c as t,f as a,g as s,j as n,t as o,B as u,C as l,F as r}from"./common-db3bf608.js";import{u as p}from"./common-ca89c097.js";var d={setup(){const[e,a]=p("test","test",sessionStorage);return{state:e,value:t(e.value),update:a}}};const c=n("p",null,"将数据持久化到 sessionStorage 中",-1),m=n("p",null,"刷新页面能拿到存在 sessionStorage 中的状态",-1);d.render=function(e,t,p,d,i,v){return a(),s(r,null,[c,n("p",null,"sessionStorage中的值： "+o(d.state),1),m,u(n("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e)},null,512),[[l,d.value]]),n("button",{onClick:t[2]||(t[2]=e=>d.update(d.value))},"update"),n("button",{onClick:t[3]||(t[3]=e=>d.update())},"remove")],64)};export default d;