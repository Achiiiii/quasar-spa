import{i as c}from"./QBtn.8b173f5c.js";import{Q as n}from"./QPage.8c01c537.js";import{d as l,af as i,ae as m,r as a,I as u,J as f,K as p,P as d,N as x,ag as _,f as g}from"./index.8f5c9d50.js";const Q=l({__name:"NextPage",setup(h){const e=i(),s=m(),t=a(e.params.text),o=a(e.params.color),r=()=>{s.push({name:"IndexPage"})};return(B,k)=>(u(),f(n,{class:"flex flex:col items-center"},{default:p(()=>[d("h1",{class:_(`f:${o.value}`)},x(t.value),3),g(c,{color:"red","icon-right":"send",label:"Back",onClick:r})]),_:1}))}});export{Q as default};