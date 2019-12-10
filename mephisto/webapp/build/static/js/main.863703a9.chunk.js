(this["webpackJsonpmephisto-web"]=this["webpackJsonpmephisto-web"]||[]).push([[0],{45:function(e,a,t){e.exports=t(85)},50:function(e,a,t){},51:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),s=t.n(r),c=(t(50),t(51),t(19)),i=t(87),o=t(12),m=function(e){var a=e.children,t=e.heading,n=e.badge;return l.a.createElement(i.a,{elevation:o.a.THREE,className:"widget"},l.a.createElement("h4",{className:"bp3-heading",style:{marginBottom:15}},void 0!==n&&l.a.createElement("span",{className:"bp3-tag bp3-large bp3-minimal bp3-round step-badge"},n),t),a)},u=t(13),p=t(35),d=t(40);var E=t(3),b=t.n(E),g=t(20),v=t(88),h=t(10),N=t(1),f=function(){var e,a,t=l.a.useState(0),n=Object(c.a)(t,2),r=(n[0],n[1],l.a.useState(1)),s=Object(c.a)(r,2),o=s[0],E=(s[1],l.a.useState(!1)),f=Object(c.a)(E,2),y=f[0],w=f[1],O=Object(g.b)({url:"requesters",params:"test"}),x=Object(c.a)(O,2),R=x[0],k=R.data,S=R.loading,q=R.error,T=x[1];return l.a.createElement(m,{badge:"Step 1",heading:l.a.createElement("span",null,"Prepare it")},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bullet"},l.a.createElement("div",{className:"bp3-text-large bp3-running-text bp3-text-muted"},q?l.a.createElement("span",null,l.a.createElement(u.a,{icon:"warning-sign",color:p.a.RED3})," Something went wrong."," ",l.a.createElement("a",{onClick:function(){return T()}},l.a.createElement("strong",null,"Try again"))):S?l.a.createElement("div",{className:"bp3-skeleton bp3-text"},"\xa0 "):0===k.requesters.length?l.a.createElement("span",null,l.a.createElement(u.a,{icon:"warning-sign",color:p.a.ORANGE3}),"  ","You have no accounts set up."," ",l.a.createElement("a",null,l.a.createElement("strong",null,"Configure"))):l.a.createElement("span",null,l.a.createElement(u.a,{icon:"people"})," You have"," ",l.a.createElement("a",{onClick:function(){return w(!0)}},l.a.createElement("strong",null,k.requesters.length," requester accounts"))," ","set up")),l.a.createElement(v.a,{icon:"people",onClose:function(){return w(!1)},title:"Requester accounts",autoFocus:!0,canEscapeKeyClose:!0,enforceFocus:!0,hasBackdrop:!0,isOpen:y,position:h.a.BOTTOM,size:v.a.SIZE_STANDARD,usePortal:!0},l.a.createElement("div",{className:N.a.DRAWER_BODY,style:{backgroundColor:p.a.LIGHT_GRAY4}},l.a.createElement("div",{className:N.a.DIALOG_BODY},k&&l.a.createElement("div",null,k.requesters.map((function(e){return l.a.createElement("div",{key:e.requester_id,style:{marginBottom:12}},l.a.createElement(i.a,{interactive:!0},l.a.createElement(u.a,{icon:e.registered?"tick-circle":"issue",color:e.registered?p.a.GREEN4:p.a.GRAY4,title:"Registered?"}),l.a.createElement("span",{style:{margin:"0 15px"},className:"bp3-tag bp3-large bp3-minimal bp3-round step-badge"},e.provider_type),l.a.createElement("h4",{style:{display:"inline",marginRight:4},className:b()("bp3-heading",{"bp3-text-muted":!e.registered})},e.requester_name)," ",!e.registered&&l.a.createElement("span",null,"\u2014 This account still needs to be registered.")))})),l.a.createElement("div",{style:{marginTop:15}},l.a.createElement(d.a,{disabled:!0,icon:"new-person"},"(TODO) Add a new requester account..."))))))),l.a.createElement("div",{className:"bullet"},l.a.createElement("div",{className:"bp3-text-large bp3-running-text bp3-text-muted"},l.a.createElement(u.a,{icon:1===o?"layer":"layers"})," You have"," ",l.a.createElement("strong",null,o," task"," ",(e="template",1===o?e:a||e+"s")),"  ","available to use"))))},y=function(){return l.a.createElement(m,{badge:"Step 2",heading:l.a.createElement("span",null,"Launch it")},l.a.createElement("div",null,l.a.createElement("div",{className:"bp3-non-ideal-state"},l.a.createElement("div",{className:"bp3-non-ideal-state-visual",style:{fontSize:20}},l.a.createElement("span",{className:"bp3-icon bp3-icon-clean"})),l.a.createElement("div",null,"You have no tasks running."),l.a.createElement("button",{className:"bp3-button "},"Launch a task"))))},w=function(){return l.a.createElement(m,{badge:"Step 3",heading:l.a.createElement("span",null,"Review it")},l.a.createElement("div",null,l.a.createElement("div",{className:"bp3-non-ideal-state"},l.a.createElement("div",{className:"bp3-non-ideal-state-visual",style:{fontSize:20}},l.a.createElement("span",{className:"bp3-icon bp3-icon-inbox-search"})),l.a.createElement("div",null,"You have no work to review."))))},O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"above-the-fold"}),l.a.createElement("header",null,l.a.createElement("h1",{className:"bp3-heading"},"mephisto"),l.a.createElement("em",{className:"bp3-italics bp3-text-large bp3-text-disabled",style:{position:"relative",top:-8}},"crowdsourcing without the tears")),l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement(y,null),l.a.createElement(w,null)))},x=(t(83),t(84),t(16)),R=t.n(x).a.create({baseURL:"http://localhost:5000/api/v1/"});R.interceptors.request.use((function(e){return console.log(e),e.delayed?new Promise((function(a){return setTimeout((function(){return a(e)}),!0===e.delayed?600:!1===e.delayed?0:e.delayed)})):e})),Object(g.a)({axios:R});s.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.863703a9.chunk.js.map