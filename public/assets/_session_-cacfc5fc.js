import{L as o,C as i,R as a,g as u}from"./index-9b0cab61.js";import{a as c,u as d,c as s,P as g,S as l}from"./index-329f7601.js";function h(){const{store:r,setStore:n}=a,e=c(),t=()=>!e.session||e.session==="index"||!u(e.session);return t()?d()("/",{replace:!0}):n("sessionId",e.session??"index"),s(l,{get when(){return!t()},get children(){return[s(g,{get children(){return r.sessionSettings.title}}),s(o,{get children(){return s(i,{})}})]}})}export{h as default};
