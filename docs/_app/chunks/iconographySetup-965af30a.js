import{a9 as de,S as X,i as Y,s as Z,l as H,f as p,x as w,T as S,U as R,a as h,d as c,b as r,a5 as K,aa as N,r as U,u as P,w as B,W as ve,H as m,M as Q,j as $,m as ee,o as te,v as le,A as pe,e as n,k as z,c as u,n as A,L as C,t as J,g as W,I,J as y}from"./vendor-535ad2fb.js";import{l as be,s as ke}from"./linear-a465d416.js";import{S as qe}from"./index-a7dc1fed.js";function j(a,{delay:e=0,duration:t=400,easing:s=de}={}){const l=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:s,css:i=>`opacity: ${i*l}`}}function se(a,e,t){const s=a.slice();return s[8]=e[t],s}function ie(a,e,t){const s=a.slice();return s[8]=e[t],s}function re(a){let e,t,s,l,i,g,d;return{c(){e=S("ellipse"),this.h()},l(_){e=R(_,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,class:!0}),h(e).forEach(c),this.h()},h(){r(e,"cx",t=a[5](a[8].cx)),r(e,"cy",s=a[5](a[8].cy)),r(e,"rx",l=a[5](a[8].rx)),r(e,"ry",i=a[5](a[8].ry)),r(e,"fill","white"),r(e,"class","svelte-1xamoy9")},m(_,f){p(_,e,f),d=!0},p(_,f){(!d||f&44&&t!==(t=_[5](_[8].cx)))&&r(e,"cx",t),(!d||f&44&&s!==(s=_[5](_[8].cy)))&&r(e,"cy",s),(!d||f&44&&l!==(l=_[5](_[8].rx)))&&r(e,"rx",l),(!d||f&44&&i!==(i=_[5](_[8].ry)))&&r(e,"ry",i)},i(_){d||(K(()=>{g||(g=N(e,j,{},!0)),g.run(1)}),d=!0)},o(_){g||(g=N(e,j,{},!1)),g.run(0),d=!1},d(_){_&&c(e),_&&g&&g.end()}}}function ae(a){let e,t,s=a[8].rx>0&&re(a);return{c(){s&&s.c(),e=H()},l(l){s&&s.l(l),e=H()},m(l,i){s&&s.m(l,i),p(l,e,i),t=!0},p(l,i){l[8].rx>0?s?(s.p(l,i),i&12&&w(s,1)):(s=re(l),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(U(),P(s,1,1,()=>{s=null}),B())},i(l){t||(w(s),t=!0)},o(l){P(s),t=!1},d(l){s&&s.d(l),l&&c(e)}}}function ce(a){let e,t,s,l,i,g,d;return{c(){e=S("ellipse"),this.h()},l(_){e=R(_,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0}),h(e).forEach(c),this.h()},h(){r(e,"class","circle-overlay svelte-1xamoy9"),r(e,"cx",t=a[5](a[8].cx)),r(e,"cy",s=a[5](a[8].cy)),r(e,"rx",l=a[5](a[8].rx)),r(e,"ry",i=a[5](a[8].ry)),r(e,"fill","none"),r(e,"stroke-width","20")},m(_,f){p(_,e,f),d=!0},p(_,f){(!d||f&44&&t!==(t=_[5](_[8].cx)))&&r(e,"cx",t),(!d||f&44&&s!==(s=_[5](_[8].cy)))&&r(e,"cy",s),(!d||f&44&&l!==(l=_[5](_[8].rx)))&&r(e,"rx",l),(!d||f&44&&i!==(i=_[5](_[8].ry)))&&r(e,"ry",i)},i(_){d||(K(()=>{g||(g=N(e,j,{},!0)),g.run(1)}),d=!0)},o(_){g||(g=N(e,j,{},!1)),g.run(0),d=!1},d(_){_&&c(e),_&&g&&g.end()}}}function oe(a){let e,t,s=a[8].rx>0&&ce(a);return{c(){s&&s.c(),e=H()},l(l){s&&s.l(l),e=H()},m(l,i){s&&s.m(l,i),p(l,e,i),t=!0},p(l,i){l[8].rx>0?s?(s.p(l,i),i&12&&w(s,1)):(s=ce(l),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(U(),P(s,1,1,()=>{s=null}),B())},i(l){t||(w(s),t=!0)},o(l){P(s),t=!1},d(l){s&&s.d(l),l&&c(e)}}}function Ie(a){let e,t,s,l,i,g,d,_,f,E,b,q,D,G,o,x=a[3][a[2]],V=[];for(let v=0;v<x.length;v+=1)V[v]=ae(ie(a,x,v));const me=v=>P(V[v],1,1,()=>{V[v]=null});let L=a[3][a[2]],F=[];for(let v=0;v<L.length;v+=1)F[v]=oe(se(a,L,v));const ge=v=>P(F[v],1,1,()=>{F[v]=null});return{c(){e=S("svg"),t=S("g"),s=S("image"),g=S("image"),_=S("mask"),f=S("rect");for(let v=0;v<V.length;v+=1)V[v].c();for(let v=0;v<F.length;v+=1)F[v].c();this.h()},l(v){e=R(v,"svg",{viewBox:!0,xmlns:!0,"xml:space":!0,class:!0});var M=h(e);t=R(M,"g",{mask:!0});var k=h(t);s=R(k,"image",{href:!0,x:!0,y:!0,height:!0,width:!0}),h(s).forEach(c),k.forEach(c),g=R(M,"image",{style:!0,href:!0,x:!0,y:!0,height:!0,width:!0}),h(g).forEach(c),_=R(M,"mask",{id:!0});var T=h(_);f=R(T,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,"fill-opacity":!0}),h(f).forEach(c);for(let O=0;O<V.length;O+=1)V[O].l(T);T.forEach(c);for(let O=0;O<F.length;O+=1)F[O].l(M);M.forEach(c),this.h()},h(){r(s,"href",l=`${a[6]?"/":"/LegadoOlimpico2/"}assets/img/${a[1]}`),r(s,"x","0"),r(s,"y","0"),r(s,"height","100%"),r(s,"width","100%"),r(t,"mask",i=`url(#mask-${a[0]})`),ve(g,"z-index","1000"),r(g,"href",d=`${a[6]?"/":"/LegadoOlimpico2/"}assets/img/${a[1]=="geral_01.png"?"north_01.png":a[1]=="geral_02.png"?"north_02.png":"north_03.png"}`),r(g,"x","200"),r(g,"y","200"),r(g,"height","10%"),r(g,"width","10%"),r(f,"x","0"),r(f,"y","0"),r(f,"width",E=a[4][1]),r(f,"height",b=a[4][1]),r(f,"fill","white"),r(f,"fill-opacity",.1),r(_,"id",q=`mask-${a[0]}`),r(e,"viewBox",G="0 0 "+a[4][1]+" "+a[4][1]),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"xml:space","preserve"),r(e,"class","svg svelte-1xamoy9")},m(v,M){p(v,e,M),m(e,t),m(t,s),m(e,g),m(e,_),m(_,f);for(let k=0;k<V.length;k+=1)V[k].m(_,null);for(let k=0;k<F.length;k+=1)F[k].m(e,null);o=!0},p(v,[M]){if((!o||M&2&&l!==(l=`${v[6]?"/":"/LegadoOlimpico2/"}assets/img/${v[1]}`))&&r(s,"href",l),(!o||M&1&&i!==(i=`url(#mask-${v[0]})`))&&r(t,"mask",i),(!o||M&2&&d!==(d=`${v[6]?"/":"/LegadoOlimpico2/"}assets/img/${v[1]=="geral_01.png"?"north_01.png":v[1]=="geral_02.png"?"north_02.png":"north_03.png"}`))&&r(g,"href",d),(!o||M&16&&E!==(E=v[4][1]))&&r(f,"width",E),(!o||M&16&&b!==(b=v[4][1]))&&r(f,"height",b),M&44){x=v[3][v[2]];let k;for(k=0;k<x.length;k+=1){const T=ie(v,x,k);V[k]?(V[k].p(T,M),w(V[k],1)):(V[k]=ae(T),V[k].c(),w(V[k],1),V[k].m(_,null))}for(U(),k=x.length;k<V.length;k+=1)me(k);B()}if((!o||M&1&&q!==(q=`mask-${v[0]}`))&&r(_,"id",q),M&44){L=v[3][v[2]];let k;for(k=0;k<L.length;k+=1){const T=se(v,L,k);F[k]?(F[k].p(T,M),w(F[k],1)):(F[k]=oe(T),F[k].c(),w(F[k],1),F[k].m(e,null))}for(U(),k=L.length;k<F.length;k+=1)ge(k);B()}(!o||M&16&&G!==(G="0 0 "+v[4][1]+" "+v[4][1]))&&r(e,"viewBox",G)},i(v){if(!o){for(let M=0;M<x.length;M+=1)w(V[M]);K(()=>{D||(D=N(_,j,{},!0)),D.run(1)});for(let M=0;M<L.length;M+=1)w(F[M]);o=!0}},o(v){V=V.filter(Boolean);for(let M=0;M<V.length;M+=1)P(V[M]);D||(D=N(_,j,{},!1)),D.run(0),F=F.filter(Boolean);for(let M=0;M<F.length;M+=1)P(F[M]);o=!1},d(v){v&&c(e),Q(V,v),v&&D&&D.end(),Q(F,v)}}}function Ee(a,e,t){let s,{name:l="mask-name"}=e,{imgPath:i=""}=e,{selected:g=""}=e,{iconPath:d=""}=e,{positions:_=[]}=e,{imageRange:f=[0,1]}=e;const E=!1;return a.$$set=b=>{"name"in b&&t(0,l=b.name),"imgPath"in b&&t(1,i=b.imgPath),"selected"in b&&t(2,g=b.selected),"iconPath"in b&&t(7,d=b.iconPath),"positions"in b&&t(3,_=b.positions),"imageRange"in b&&t(4,f=b.imageRange)},a.$$.update=()=>{a.$$.dirty&16&&t(5,s=be().domain([0,1]).range(f))},[l,i,g,_,f,s,E,d]}class ye extends X{constructor(e){super();Y(this,e,Ee,Ie,Z,{name:0,imgPath:1,selected:2,iconPath:7,positions:3,imageRange:4})}}function ne(a,e,t){const s=a.slice();return s[12]=e[t],s[14]=t,s}function De(a){let e,t=a[12].text+"";return{c(){e=n("div"),this.h()},l(s){e=u(s,"DIV",{class:!0});var l=h(e);l.forEach(c),this.h()},h(){r(e,"class","step-text svelte-49qltp")},m(s,l){p(s,e,l),e.innerHTML=t},p(s,l){l&8&&t!==(t=s[12].text+"")&&(e.innerHTML=t)},d(s){s&&c(e)}}}function Me(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/tezca-explorable.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ve(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/vila_dos_atletas.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function xe(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/transolimpica.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ge(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/transoeste.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Fe(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/transcarioca.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function we(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/terminal_deodoro.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Pe(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/teleferico_providencia.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Te(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/sistema_vlt.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Se(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/sistema_brt.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Re(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/sambodromo.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Le(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/riocentro.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Oe(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/rede_hoteleira.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function ze(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/praca_maua.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ae(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/piscinoes.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function He(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/pequena_africa.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ne(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/parque_rita_lee.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function je(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/parque_madureira.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ue(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/parque_deodoro.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Be(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/novas_vias.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ce(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/museu_do_amanh\xE3.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Je(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/museu_de_arte_do_rio.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function We(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/marina_da_gloria.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ke(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/largo_da_prainha.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Qe(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/GET_jose_mauro_de_vasconcellos.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Xe(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/parque.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ye(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/GET_emiliano_galdino.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function Ze(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/GEO_isabel_salgado.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function $e(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/entorno_do_engenhao.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function et(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/edificio_a_noite.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function tt(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/duplicacao_do_joa.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function lt(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/derrubada_da_perimetral.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function st(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/cor.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function it(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/campo_de_golfe.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function rt(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0,id:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/terminal_intermodal_gentileza.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp"),r(e,"id","terminal_intermodal_gentileza")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function at(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/boulevard_olimpico.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function ct(a){let e,t,s;return{c(){e=n("div"),t=n("img"),this.h()},l(l){e=u(l,"DIV",{class:!0});var i=h(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-49qltp"),y(t.src,s="assets/img/avenida_rio_branco.png")||r(t,"src",s),r(t,"alt","Foto"),r(e,"class","image-container svelte-49qltp")},m(l,i){p(l,e,i),m(e,t)},p:I,d(l){l&&c(e)}}}function ue(a){let e,t=a[12].title+"";return{c(){e=n("div"),this.h()},l(s){e=u(s,"DIV",{class:!0});var l=h(e);l.forEach(c),this.h()},h(){r(e,"class","step-title svelte-49qltp")},m(s,l){p(s,e,l),e.innerHTML=t},p(s,l){l&8&&t!==(t=s[12].title+"")&&(e.innerHTML=t)},d(s){s&&c(e)}}}function _e(a){let e;function t(i,g){return i[12].background_text==="transporte"?ut:i[12].background_text==="educa\xE7\xE3o"?nt:ot}let s=t(a),l=s(a);return{c(){l.c(),e=H()},l(i){l.l(i),e=H()},m(i,g){l.m(i,g),p(i,e,g)},p(i,g){s===(s=t(i))&&l?l.p(i,g):(l.d(1),l=s(i),l&&(l.c(),l.m(e.parentNode,e)))},d(i){l.d(i),i&&c(e)}}}function ot(a){let e,t=a[12].background_text+"";return{c(){e=n("div"),this.h()},l(s){e=u(s,"DIV",{class:!0});var l=h(e);l.forEach(c),this.h()},h(){r(e,"class","step-background svelte-49qltp"),C(e,"transporte",a[12].background_text==="transporte"),C(e,"reformasurbanas",a[12].background_text==="reformas urbanas")},m(s,l){p(s,e,l),e.innerHTML=t},p(s,l){l&8&&t!==(t=s[12].background_text+"")&&(e.innerHTML=t),l&8&&C(e,"transporte",s[12].background_text==="transporte"),l&8&&C(e,"reformasurbanas",s[12].background_text==="reformas urbanas")},d(s){s&&c(e)}}}function nt(a){let e,t,s,l,i,g;return{c(){e=n("div"),t=n("span"),s=J("EDUCA"),l=z(),i=n("span"),g=J("\xC7\xC3O"),this.h()},l(d){e=u(d,"DIV",{class:!0});var _=h(e);t=u(_,"SPAN",{class:!0});var f=h(t);s=W(f,"EDUCA"),f.forEach(c),l=A(_),i=u(_,"SPAN",{class:!0});var E=h(i);g=W(E,"\xC7\xC3O"),E.forEach(c),_.forEach(c),this.h()},h(){r(t,"class","part1 svelte-49qltp"),r(i,"class","part2 svelte-49qltp"),r(e,"class","step-background educacao svelte-49qltp")},m(d,_){p(d,e,_),m(e,t),m(t,s),m(e,l),m(e,i),m(i,g)},p:I,d(d){d&&c(e)}}}function ut(a){let e,t,s,l,i,g;return{c(){e=n("div"),t=n("span"),s=J("TRANS"),l=z(),i=n("span"),g=J("PORTE"),this.h()},l(d){e=u(d,"DIV",{class:!0});var _=h(e);t=u(_,"SPAN",{class:!0});var f=h(t);s=W(f,"TRANS"),f.forEach(c),l=A(_),i=u(_,"SPAN",{class:!0});var E=h(i);g=W(E,"PORTE"),E.forEach(c),_.forEach(c),this.h()},h(){r(t,"class","part1 svelte-49qltp"),r(i,"class","part2 svelte-49qltp"),r(e,"class","step-background transporte svelte-49qltp")},m(d,_){p(d,e,_),m(e,t),m(t,s),m(e,l),m(e,i),m(i,g)},p:I,d(d){d&&c(e)}}}function fe(a){let e,t=a[12].description+"";return{c(){e=n("div"),this.h()},l(s){e=u(s,"DIV",{class:!0});var l=h(e);l.forEach(c),this.h()},h(){r(e,"class","step-description svelte-49qltp")},m(s,l){p(s,e,l),e.innerHTML=t},p(s,l){l&8&&t!==(t=s[12].description+"")&&(e.innerHTML=t)},d(s){s&&c(e)}}}function he(a){let e,t,s,l,i,g,d,_;function f(o,x){return o[12].text=="avenida_rio_branco"?ct:o[12].text=="boulevard_olimpico"?at:o[12].text=="terminal_intermodal_gentileza"?rt:o[12].text=="campo_de_golfe"?it:o[12].text=="cor"?st:o[12].text=="derrubada_da_perimetral"?lt:o[12].text=="duplicacao_do_joa"?tt:o[12].text=="edificio_a_noite"?et:o[12].text=="entorno_do_engenhao"?$e:o[12].text=="GEO_isabel_salgado"?Ze:o[12].text=="GET_emiliano_galdino"?Ye:o[12].text=="parque"?Xe:o[12].text=="GET_jose_mauro_de_vasconcellos"?Qe:o[12].text=="largo_da_prainha"?Ke:o[12].text=="marina_da_gloria"?We:o[12].text=="museu_de_arte_do_rio"?Je:o[12].text=="museu_do_amanh\xE3"?Ce:o[12].text=="novas_vias"?Be:o[12].text=="parque_deodoro"?Ue:o[12].text=="parque_madureira"?je:o[12].text=="parque_rita_lee"?Ne:o[12].text=="pequena_africa"?He:o[12].text=="piscinoes"?Ae:o[12].text=="praca_maua"?ze:o[12].text=="rede_hoteleira"?Oe:o[12].text=="riocentro"?Le:o[12].text=="sambodromo"?Re:o[12].text=="sistema_brt"?Se:o[12].text=="sistema_vlt"?Te:o[12].text=="teleferico_providencia"?Pe:o[12].text=="terminal_deodoro"?we:o[12].text=="transcarioca"?Fe:o[12].text=="transoeste"?Ge:o[12].text=="transolimpica"?xe:o[12].text=="vila_dos_atletas"?Ve:o[12].text=="foto14"?Me:De}let E=f(a),b=E(a),q=a[12].title&&ue(a),D=a[12].background_text&&_e(a),G=a[12].description&&fe(a);return{c(){e=n("div"),b.c(),t=z(),q&&q.c(),s=z(),l=n("div"),D&&D.c(),i=z(),G&&G.c(),g=z(),this.h()},l(o){e=u(o,"DIV",{class:!0,id:!0});var x=h(e);b.l(x),t=A(x),q&&q.l(x),s=A(x),l=u(x,"DIV",{class:!0});var V=h(l);D&&D.l(V),i=A(V),G&&G.l(V),V.forEach(c),g=A(x),x.forEach(c),this.h()},h(){r(l,"class","step-wrapper svelte-49qltp"),r(e,"class",d="step step-"+a[0]+" svelte-49qltp"),r(e,"id",_="id-"+a[14])},m(o,x){p(o,e,x),b.m(e,null),m(e,t),q&&q.m(e,null),m(e,s),m(e,l),D&&D.m(l,null),m(l,i),G&&G.m(l,null),m(e,g)},p(o,x){E===(E=f(o))&&b?b.p(o,x):(b.d(1),b=E(o),b&&(b.c(),b.m(e,t))),o[12].title?q?q.p(o,x):(q=ue(o),q.c(),q.m(e,s)):q&&(q.d(1),q=null),o[12].background_text?D?D.p(o,x):(D=_e(o),D.c(),D.m(l,i)):D&&(D.d(1),D=null),o[12].description?G?G.p(o,x):(G=fe(o),G.c(),G.m(l,null)):G&&(G.d(1),G=null),x&1&&d!==(d="step step-"+o[0]+" svelte-49qltp")&&r(e,"class",d)},d(o){o&&c(e),b.d(),q&&q.d(),D&&D.d(),G&&G.d()}}}function _t(a){let e,t,s,l,i,g;s=new ye({props:{name:a[1],selected:a[6].id,imgPath:a[2],positions:a[4],imageRange:a[5]}});let d=a[3],_=[];for(let f=0;f<d.length;f+=1)_[f]=he(ne(a,d,f));return{c(){e=n("div"),t=n("figure"),$(s.$$.fragment),l=z(),i=n("div");for(let f=0;f<_.length;f+=1)_[f].c();this.h()},l(f){e=u(f,"DIV",{id:!0,class:!0});var E=h(e);t=u(E,"FIGURE",{class:!0});var b=h(t);ee(s.$$.fragment,b),b.forEach(c),l=A(E),i=u(E,"DIV",{class:!0});var q=h(i);for(let D=0;D<_.length;D+=1)_[D].l(q);q.forEach(c),E.forEach(c),this.h()},h(){r(t,"class","svelte-49qltp"),r(i,"class","scroll-area svelte-49qltp"),r(e,"id","scrolly"),r(e,"class","svelte-49qltp")},m(f,E){p(f,e,E),m(e,t),te(s,t,null),m(e,l),m(e,i);for(let b=0;b<_.length;b+=1)_[b].m(i,null);g=!0},p(f,E){const b={};if(E&2&&(b.name=f[1]),E&64&&(b.selected=f[6].id),E&4&&(b.imgPath=f[2]),E&16&&(b.positions=f[4]),E&32&&(b.imageRange=f[5]),s.$set(b),E&9){d=f[3];let q;for(q=0;q<d.length;q+=1){const D=ne(f,d,q);_[q]?_[q].p(D,E):(_[q]=he(D),_[q].c(),_[q].m(i,null))}for(;q<_.length;q+=1)_[q].d(1);_.length=d.length}},i(f){g||(w(s.$$.fragment,f),g=!0)},o(f){P(s.$$.fragment,f),g=!1},d(f){f&&c(e),le(s),Q(_,f)}}}function ft(a){let e,t;return e=new qe({props:{id:"gods-iconography-"+a[0],fullBleed:!0,$$slots:{default:[_t]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,l){te(e,s,l),t=!0},p(s,[l]){const i={};l&1&&(i.id="gods-iconography-"+s[0]),l&32895&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){le(e,s)}}}function ht(a,e,t){const s=!1;let{title:l="Tezcatlipoca"}=e,{name:i="mask-name"}=e,{source:g="illustration source"}=e,{sourceUrl:d=void 0}=e,{imgPath:_=""}=e,{selected:f=""}=e,{steps:E=[]}=e,{positions:b=[]}=e,{imageRange:q=[0,1]}=e,D=E[0];const G=o=>{t(7,f=o.index),t(6,D=E[o.index])};return pe(()=>{ke().setup({step:`div .step-${l}`,offset:.5}).onStepEnter(G)}),a.$$set=o=>{"title"in o&&t(0,l=o.title),"name"in o&&t(1,i=o.name),"source"in o&&t(9,g=o.source),"sourceUrl"in o&&t(10,d=o.sourceUrl),"imgPath"in o&&t(2,_=o.imgPath),"selected"in o&&t(7,f=o.selected),"steps"in o&&t(3,E=o.steps),"positions"in o&&t(4,b=o.positions),"imageRange"in o&&t(5,q=o.imageRange)},[l,i,_,E,b,q,D,f,s,g,d]}class vt extends X{constructor(e){super();Y(this,e,ht,ft,Z,{ssr:8,title:0,name:1,source:9,sourceUrl:10,imgPath:2,selected:7,steps:3,positions:4,imageRange:5})}get ssr(){return this.$$.ctx[8]}}const pt={mapa_02:[{cx:.5,cy:.5,rx:.5,ry:.5}],parque_rita_lee:[{cx:.45,cy:.55,rx:.15,ry:.15}],GET_emiliano_galdino:[{cx:.145,cy:.1,rx:.1,ry:.1},{cx:.46,cy:.175,rx:.1,ry:.1},{cx:.64,cy:.3,rx:.1,ry:.1},{cx:.6,cy:.68,rx:.1,ry:.1}],parque:[{cx:.85,cy:.33,rx:.15,ry:.15}]},bt={terminal_gentileza:[{cx:.725,cy:.6,rx:.1,ry:.1}],sistema_brt:[{cx:.5,cy:.5,rx:.5,ry:.5}],sistema_vlt:[{cx:.725,cy:.7,rx:.1,ry:.12}],transoeste:[{cx:.2,cy:.4,rx:.2,ry:.3}],transcarioca:[{cx:.55,cy:.51,rx:.4,ry:.15}],transolimpica:[{cx:.35,cy:.38,rx:.3,ry:.1}]},kt={mapa_01:[{cx:.5,cy:.5,rx:.5,ry:.5}],museu_do_amanh\u00E3:[{cx:.84,cy:.58,rx:.13,ry:.13}],museu_de_arte_do_rio:[{cx:.6,cy:.58,rx:.11,ry:.11}],centro_de_operacoes_rio:[{cx:.33,cy:.58,rx:.11,ry:.11}],praca_maua:[{cx:.75,cy:.62,rx:.25,ry:.2}]};export{vt as S,kt as a,pt as b,bt as t};
