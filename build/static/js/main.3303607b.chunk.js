(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"Statistics_list__3oKT7",total:"Statistics_total__2pGqP",positive:"Statistics_positive__3ESZ5","move-background":"Statistics_move-background__3noLx"}},,,function(t,e,n){t.exports={title:"Section_title__2S6oE","move-background":"Section_move-background__3P-dh"}},,function(t,e,n){t.exports={container:"Container_container__3RIox"}},function(t,e,n){t.exports={button:"Buttons_button__3zj_6"}},function(t,e,n){t.exports={message:"Notification_message__eciZi","move-background":"Notification_move-background__QaG_Y"}},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),r=(n(14),n(3)),o=n(7),u=n.n(o),b=n(0),l=function(t){var e=t.children;return Object(b.jsx)("div",{className:u.a.container,children:e})},j=n(8),d=n.n(j);var f=function(t){var e=t.stateName,n=t.func;return Object(b.jsx)("div",{children:e.map((function(t){return Object(b.jsx)("button",{onClick:n,type:"button",className:d.a.button,name:t,children:t},t)}))})},_=n(2),h=n.n(_);function m(t){for(var e=[],n=0,c=Object.entries(t);n<c.length;n++){var a=c[n],s=a[0],i=a[1];e.push(Object(b.jsxs)("li",{className:h.a.list,children:[s,": ",i]},s))}return e}var v=function(t){var e=t.stateName,n=t.func1,c=t.func2;return Object(b.jsxs)("div",{children:[Object(b.jsx)("ul",{children:m(e)}),n>0&&Object(b.jsxs)("p",{className:h.a.total,children:["Total: ",n]}),n>0&&Object(b.jsxs)("p",{className:h.a.positive,children:["Positive feedback: ",c,"%"]})]})},x=n(5),O=n.n(x),g=function(t){var e=t.title,n=t.children;return Object(b.jsxs)("section",{className:O.a.section,children:[Object(b.jsx)("h2",{className:O.a.title,children:e}),n]})},k=n(9),p=n.n(k),N=function(t){var e=t.message;return Object(b.jsx)("h3",{className:p.a.message,children:e})};n(16);var S=function(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),o=i[0],u=i[1],j=Object(c.useState)(0),d=Object(r.a)(j,2),_=d[0],h=d[1],m=function(){return n+o+_},x=m();return Object(b.jsxs)(l,{children:[Object(b.jsx)(g,{title:"Please leave your feedback",children:Object(b.jsx)(f,{stateName:["good","neutral","bad"],func:function(t){switch(t.target.name){case"good":a((function(t){return Number(t)+1}));break;case"neutral":u((function(t){return Number(t)+1}));break;case"bad":h((function(t){return Number(t)+1}));break;default:return}}})}),Object(b.jsxs)(g,{title:"Statistics",children:[0===x&&Object(b.jsx)(N,{message:"No feedback given"}),x>0&&Object(b.jsx)(v,{stateName:{good:n,neutral:o,bad:_},func1:m(),func2:Math.round(n/x*100)})]})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.3303607b.chunk.js.map