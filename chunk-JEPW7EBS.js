import{e as I,r as A}from"./chunk-H7WK2XAN.js";import{$ as v,Hb as k}from"./chunk-FPYYIRIP.js";import{Cd as y,Dd as b,Jd as s,Nd as _,Yd as d,_d as m,f as S,g as p,le as l,oe as h}from"./chunk-FPS4SKZN.js";var g=S(_(),1);function P(e){function a(r){return!(r.ownVisible&&!d)}e=e.filter(a);for(let r=0;r<e.length;r++){let t=e[r];Array.isArray(t.nav)&&(t.nav=t.nav.filter(a),P(t.nav))}return e}function F(){return p(this,null,function*(){if(m)return;function e(t){t.forEach(o=>{l.push(o)}),v.emit("WEB_FINISH"),window.__FINISHED__=!0}let a=P(l);if(l.splice(0,l.length),!d)return e(a);if(window.localStorage.getItem(s.s_url)!==y.datetime){let t=[s.token,s.isDark,s.authCode,s.location],o=window.localStorage.length;for(let i=0;i<o;i++){let n=window.localStorage.key(i);t.includes(n)||window.localStorage.removeItem(n)}window.localStorage.setItem(s.s_url,y.datetime),g.default.removeItem(s.website),e(a),d&&setTimeout(()=>{v.emit("NOTIFICATION",{type:"success",title:h("_buildSuccess"),content:y.datetime,config:{nzDuration:0}})},1e3);return}try{let t=(yield g.default.getItem(s.website))||a;e(t)}catch{e(a)}})}function u(e){return e=e||l,m?k({content:JSON.stringify(e),path:b}):g.default.setItem(s.website,e)}function T(e){e||=l;let{id:a}=I(),{oneIndex:r,twoIndex:t}=A(a),o=!e[r].nav[t].collapsed;return e[r].nav[t].collapsed=o,e[r].nav[t].nav.map(i=>(i.collapsed=o,i)),m||u(e),o}function H(e,a=!1){return p(this,null,function*(){let r=!1;function t(o){for(let i=0;i<o.length;i++){let n=o[i];Array.isArray(n.nav)&&(n.nav=n.nav.filter(f=>f.name&&e.includes(a?f.rId:f.id)?(r=!0,!1):!0),t(n.nav))}}if(t(l),r){yield u(l);let{q:o}=I();o&&!m&&v.emit("WEB_REFRESH")}return r})}function R(e,a){let r=Object.keys(a),t=!1;function o(i){for(let n=0;n<i.length;n++){let f=i[n];if(f.name&&f.id===e){t=!0;for(let c of r)f[c]=a[c]}Array.isArray(f.nav)&&o(f.nav)}}return o(l),u(l),t}function j(e,a){let r=Object.keys(a),t=!1;function o(i){for(let n=0;n<i.length;n++){let f=i[n];if(f.title&&f.id===e){t=!0;for(let c of r)f[c]=a[c]}Array.isArray(f.nav)&&!f.nav[0]?.name&&o(f.nav)}}return o(l),u(l),t}function q(e,a=!1){return p(this,null,function*(){let r=!1;function t(o){for(let i=0;i<o.length;i++){let n=o[i];if(Array.isArray(n.nav)){if(t(n.nav),n.nav[0]?.name)break;n.nav=n.nav.filter(f=>f.title&&e.includes(a?f.rId:f.id)?(r=!0,!1):!0)}}}return e.forEach(o=>{l.forEach((i,n)=>{i.id===o&&(r=!0,l.splice(n,1))})}),t(l),r&&(yield u(l)),r})}function z(e,a){let r=!1;function t(o){for(let i=0;i<o.length;i++){let n=o[i];n.title&&n.id===e&&(r=!0,n.nav.unshift(a)),Array.isArray(n.nav)&&t(n.nav)}}return t(l),u(l),r}export{F as a,u as b,T as c,H as d,R as e,j as f,q as g,z as h};
