import{ab as _e,S as J,i as Q,s as W,l as U,f as b,x,W as L,X as P,a as v,d as c,b as r,a7 as N,ac as R,r as O,u as T,w as C,H as g,Q as A,j as X,m as K,o as Y,v as Z,A as he,e as n,k as S,c as u,n as B,J as M,I as D}from"./vendor-2196fcfc.js";import{l as fe,s as ve}from"./linear-a465d416.js";import{S as me}from"./index-726b6ef0.js";function z(a,{delay:e=0,duration:t=400,easing:l=_e}={}){const s=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:l,css:i=>`opacity: ${i*s}`}}function $(a,e,t){const l=a.slice();return l[7]=e[t],l}function ee(a,e,t){const l=a.slice();return l[7]=e[t],l}function te(a){let e,t,l,s,i,d,j;return{c(){e=L("ellipse"),this.h()},l(h){e=P(h,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,class:!0}),v(e).forEach(c),this.h()},h(){r(e,"cx",t=a[5](a[7].cx)),r(e,"cy",l=a[5](a[7].cy)),r(e,"rx",s=a[5](a[7].rx)),r(e,"ry",i=a[5](a[7].ry)),r(e,"fill","white"),r(e,"class","svelte-e1irf5")},m(h,y){b(h,e,y),j=!0},p(h,y){(!j||y&44&&t!==(t=h[5](h[7].cx)))&&r(e,"cx",t),(!j||y&44&&l!==(l=h[5](h[7].cy)))&&r(e,"cy",l),(!j||y&44&&s!==(s=h[5](h[7].rx)))&&r(e,"rx",s),(!j||y&44&&i!==(i=h[5](h[7].ry)))&&r(e,"ry",i)},i(h){j||(N(()=>{d||(d=R(e,z,{},!0)),d.run(1)}),j=!0)},o(h){d||(d=R(e,z,{},!1)),d.run(0),j=!1},d(h){h&&c(e),h&&d&&d.end()}}}function se(a){let e,t,l=a[7].rx>0&&te(a);return{c(){l&&l.c(),e=U()},l(s){l&&l.l(s),e=U()},m(s,i){l&&l.m(s,i),b(s,e,i),t=!0},p(s,i){s[7].rx>0?l?(l.p(s,i),i&12&&x(l,1)):(l=te(s),l.c(),x(l,1),l.m(e.parentNode,e)):l&&(O(),T(l,1,1,()=>{l=null}),C())},i(s){t||(x(l),t=!0)},o(s){T(l),t=!1},d(s){l&&l.d(s),s&&c(e)}}}function le(a){let e,t,l,s,i,d,j;return{c(){e=L("ellipse"),this.h()},l(h){e=P(h,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0}),v(e).forEach(c),this.h()},h(){r(e,"class","circle-overlay svelte-e1irf5"),r(e,"cx",t=a[5](a[7].cx)),r(e,"cy",l=a[5](a[7].cy)),r(e,"rx",s=a[5](a[7].rx)),r(e,"ry",i=a[5](a[7].ry)),r(e,"fill","none"),r(e,"stroke-width","20")},m(h,y){b(h,e,y),j=!0},p(h,y){(!j||y&44&&t!==(t=h[5](h[7].cx)))&&r(e,"cx",t),(!j||y&44&&l!==(l=h[5](h[7].cy)))&&r(e,"cy",l),(!j||y&44&&s!==(s=h[5](h[7].rx)))&&r(e,"rx",s),(!j||y&44&&i!==(i=h[5](h[7].ry)))&&r(e,"ry",i)},i(h){j||(N(()=>{d||(d=R(e,z,{},!0)),d.run(1)}),j=!0)},o(h){d||(d=R(e,z,{},!1)),d.run(0),j=!1},d(h){h&&c(e),h&&d&&d.end()}}}function ie(a){let e,t,l=a[7].rx>0&&le(a);return{c(){l&&l.c(),e=U()},l(s){l&&l.l(s),e=U()},m(s,i){l&&l.m(s,i),b(s,e,i),t=!0},p(s,i){s[7].rx>0?l?(l.p(s,i),i&12&&x(l,1)):(l=le(s),l.c(),x(l,1),l.m(e.parentNode,e)):l&&(O(),T(l,1,1,()=>{l=null}),C())},i(s){t||(x(l),t=!0)},o(s){T(l),t=!1},d(s){l&&l.d(s),s&&c(e)}}}function ge(a){let e,t,l,s,i,d,j,h,y,E,k,f,p,o=a[3][a[2]],_=[];for(let m=0;m<o.length;m+=1)_[m]=se(ee(a,o,m));const F=m=>T(_[m],1,1,()=>{_[m]=null});let w=a[3][a[2]],V=[];for(let m=0;m<w.length;m+=1)V[m]=ie($(a,w,m));const ue=m=>T(V[m],1,1,()=>{V[m]=null});return{c(){e=L("svg"),t=L("g"),l=L("image"),d=L("mask"),j=L("rect");for(let m=0;m<_.length;m+=1)_[m].c();for(let m=0;m<V.length;m+=1)V[m].c();this.h()},l(m){e=P(m,"svg",{viewBox:!0,xmlns:!0,"xml:space":!0,class:!0});var G=v(e);t=P(G,"g",{mask:!0});var I=v(t);l=P(I,"image",{href:!0,x:!0,y:!0,height:!0,width:!0}),v(l).forEach(c),I.forEach(c),d=P(G,"mask",{id:!0});var q=v(d);j=P(q,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,"fill-opacity":!0}),v(j).forEach(c);for(let H=0;H<_.length;H+=1)_[H].l(q);q.forEach(c);for(let H=0;H<V.length;H+=1)V[H].l(G);G.forEach(c),this.h()},h(){r(l,"href",s=`${a[6]?"/":"/LegadoOlimpico2/"}assets/img/${a[1]}`),r(l,"x","0"),r(l,"y","0"),r(l,"height","100%"),r(l,"width","100%"),r(t,"mask",i=`url(#mask-${a[0]})`),r(j,"x","0"),r(j,"y","0"),r(j,"width",h=a[4][1]),r(j,"height",y=a[4][1]),r(j,"fill","white"),r(j,"fill-opacity",.1),r(d,"id",E=`mask-${a[0]}`),r(e,"viewBox",f="0 0 "+a[4][1]+" "+a[4][1]),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"xml:space","preserve"),r(e,"class","mobile-svg svelte-e1irf5")},m(m,G){b(m,e,G),g(e,t),g(t,l),g(e,d),g(d,j);for(let I=0;I<_.length;I+=1)_[I].m(d,null);for(let I=0;I<V.length;I+=1)V[I].m(e,null);p=!0},p(m,[G]){if((!p||G&2&&s!==(s=`${m[6]?"/":"/LegadoOlimpico2/"}assets/img/${m[1]}`))&&r(l,"href",s),(!p||G&1&&i!==(i=`url(#mask-${m[0]})`))&&r(t,"mask",i),(!p||G&16&&h!==(h=m[4][1]))&&r(j,"width",h),(!p||G&16&&y!==(y=m[4][1]))&&r(j,"height",y),G&44){o=m[3][m[2]];let I;for(I=0;I<o.length;I+=1){const q=ee(m,o,I);_[I]?(_[I].p(q,G),x(_[I],1)):(_[I]=se(q),_[I].c(),x(_[I],1),_[I].m(d,null))}for(O(),I=o.length;I<_.length;I+=1)F(I);C()}if((!p||G&1&&E!==(E=`mask-${m[0]}`))&&r(d,"id",E),G&44){w=m[3][m[2]];let I;for(I=0;I<w.length;I+=1){const q=$(m,w,I);V[I]?(V[I].p(q,G),x(V[I],1)):(V[I]=ie(q),V[I].c(),x(V[I],1),V[I].m(e,null))}for(O(),I=w.length;I<V.length;I+=1)ue(I);C()}(!p||G&16&&f!==(f="0 0 "+m[4][1]+" "+m[4][1]))&&r(e,"viewBox",f)},i(m){if(!p){for(let G=0;G<o.length;G+=1)x(_[G]);N(()=>{k||(k=R(d,z,{},!0)),k.run(1)});for(let G=0;G<w.length;G+=1)x(V[G]);p=!0}},o(m){_=_.filter(Boolean);for(let G=0;G<_.length;G+=1)T(_[G]);k||(k=R(d,z,{},!1)),k.run(0),V=V.filter(Boolean);for(let G=0;G<V.length;G+=1)T(V[G]);p=!1},d(m){m&&c(e),A(_,m),m&&k&&k.end(),A(V,m)}}}function de(a,e,t){let l,{name:s="mask-name"}=e,{imgPath:i=""}=e,{selected:d=""}=e,{positions:j=[]}=e,{imageRange:h=[0,1]}=e;const y=!1;return a.$$set=E=>{"name"in E&&t(0,s=E.name),"imgPath"in E&&t(1,i=E.imgPath),"selected"in E&&t(2,d=E.selected),"positions"in E&&t(3,j=E.positions),"imageRange"in E&&t(4,h=E.imageRange)},a.$$.update=()=>{a.$$.dirty&16&&t(5,l=fe().domain([0,1]).range(h))},[s,i,d,j,h,l,y]}class pe extends J{constructor(e){super();Q(this,e,de,ge,W,{name:0,imgPath:1,selected:2,positions:3,imageRange:4})}}function re(a,e,t){const l=a.slice();return l[12]=e[t],l[14]=t,l}function be(a){let e,t=a[12].text+"";return{c(){e=n("div"),this.h()},l(l){e=u(l,"DIV",{class:!0});var s=v(e);s.forEach(c),this.h()},h(){r(e,"class","step-text svelte-1anhvj6")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[12].text+"")&&(e.innerHTML=t)},d(l){l&&c(e)}}}function je(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/tezca-explorable.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function ke(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/vila_dos_atletas.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ie(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/transolimpica.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ee(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/transoeste.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function ye(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/transcarioca.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Me(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/terminal_deodoro.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function De(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/teleferico_providencia.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ge(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/sistema_vlt.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ve(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/sistema_brt.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function xe(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/sambodromo.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Fe(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/riocentro.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function we(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/rede_hoteleira.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Te(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/praca_maua.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function qe(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/piscinoes.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function He(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/pequena_africa.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Le(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/parque_rita_lee.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Pe(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/parque_madureira.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Re(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/parque_deodoro.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Se(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/novas_vias.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Be(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/museu_do_amanh\xE3.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function ze(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/museu_de_arte_do_rio.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ue(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/marina_da_gloria.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Oe(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/largo_da_prainha.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ce(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/GET_jose_mauro_de_vasconcellos.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ne(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/GET_emiliano_galdino.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ae(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/GEO_isabel_salgado.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Je(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/entorno_do_engenhao.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Qe(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/edificio_a_noite.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function We(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/duplicacao_do_joa.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Xe(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/derrubada_da_perimetral.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ke(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/cor.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ye(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/campo_de_golfe.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function Ze(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/terminal_intermodal_gentileza.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function $e(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/boulevard_olimpico.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function et(a){let e,t,l;return{c(){e=n("div"),t=n("img"),this.h()},l(s){e=u(s,"DIV",{class:!0});var i=v(e);t=u(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(c),this.h()},h(){r(t,"class","photo_logo svelte-1anhvj6"),M(t.src,l="assets/img/avenida_rio_branco.png")||r(t,"src",l),r(t,"alt","Foto"),r(e,"class","image-container svelte-1anhvj6")},m(s,i){b(s,e,i),g(e,t)},p:D,d(s){s&&c(e)}}}function ae(a){let e,t=a[12].title+"";return{c(){e=n("div"),this.h()},l(l){e=u(l,"DIV",{class:!0});var s=v(e);s.forEach(c),this.h()},h(){r(e,"class","step-title svelte-1anhvj6")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[12].title+"")&&(e.innerHTML=t)},d(l){l&&c(e)}}}function ce(a){let e,t=a[12].background_text+"";return{c(){e=n("div"),this.h()},l(l){e=u(l,"DIV",{class:!0});var s=v(e);s.forEach(c),this.h()},h(){r(e,"class","step-background svelte-1anhvj6")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[12].background_text+"")&&(e.innerHTML=t)},d(l){l&&c(e)}}}function oe(a){let e,t=a[12].description+"";return{c(){e=n("div"),this.h()},l(l){e=u(l,"DIV",{class:!0});var s=v(e);s.forEach(c),this.h()},h(){r(e,"class","step-description svelte-1anhvj6")},m(l,s){b(l,e,s),e.innerHTML=t},p(l,s){s&8&&t!==(t=l[12].description+"")&&(e.innerHTML=t)},d(l){l&&c(e)}}}function ne(a){let e,t,l,s,i,d,j;function h(o,_){return o[12].text=="avenida_rio_branco"?et:o[12].text=="boulevard_olimpico"?$e:o[12].text=="terminal_intermodal_gentileza"?Ze:o[12].text=="campo_de_golfe"?Ye:o[12].text=="cor"?Ke:o[12].text=="derrubada_da_perimetral"?Xe:o[12].text=="duplicacao_do_joa"?We:o[12].text=="edificio_a_noite"?Qe:o[12].text=="entorno_do_engenhao"?Je:o[12].text=="GEO_isabel_salgado"?Ae:o[12].text=="GET_emiliano_galdino"?Ne:o[12].text=="GET_jose_mauro_de_vasconcellos"?Ce:o[12].text=="largo_da_prainha"?Oe:o[12].text=="marina_da_gloria"?Ue:o[12].text=="museu_de_arte_do_rio"?ze:o[12].text=="museu_do_amanh\xE3"?Be:o[12].text=="novas_vias"?Se:o[12].text=="parque_deodoro"?Re:o[12].text=="parque_madureira"?Pe:o[12].text=="parque_rita_lee"?Le:o[12].text=="pequena_africa"?He:o[12].text=="piscinoes"?qe:o[12].text=="praca_maua"?Te:o[12].text=="rede_hoteleira"?we:o[12].text=="riocentro"?Fe:o[12].text=="sambodromo"?xe:o[12].text=="sistema_brt"?Ve:o[12].text=="sistema_vlt"?Ge:o[12].text=="teleferico_providencia"?De:o[12].text=="terminal_deodoro"?Me:o[12].text=="transcarioca"?ye:o[12].text=="transoeste"?Ee:o[12].text=="transolimpica"?Ie:o[12].text=="vila_dos_atletas"?ke:o[12].text=="foto14"?je:be}let y=h(a),E=y(a),k=a[12].title&&ae(a),f=a[12].background_text&&ce(a),p=a[12].description&&oe(a);return{c(){e=n("div"),E.c(),t=S(),k&&k.c(),l=S(),s=n("div"),f&&f.c(),i=S(),p&&p.c(),d=S(),this.h()},l(o){e=u(o,"DIV",{class:!0});var _=v(e);E.l(_),t=B(_),k&&k.l(_),l=B(_),s=u(_,"DIV",{class:!0});var F=v(s);f&&f.l(F),i=B(F),p&&p.l(F),F.forEach(c),d=B(_),_.forEach(c),this.h()},h(){r(s,"class","step-wrapper svelte-1anhvj6"),r(e,"class",j="step step-"+a[0]+" svelte-1anhvj6")},m(o,_){b(o,e,_),E.m(e,null),g(e,t),k&&k.m(e,null),g(e,l),g(e,s),f&&f.m(s,null),g(s,i),p&&p.m(s,null),g(e,d)},p(o,_){y===(y=h(o))&&E?E.p(o,_):(E.d(1),E=y(o),E&&(E.c(),E.m(e,t))),o[12].title?k?k.p(o,_):(k=ae(o),k.c(),k.m(e,l)):k&&(k.d(1),k=null),o[12].background_text?f?f.p(o,_):(f=ce(o),f.c(),f.m(s,i)):f&&(f.d(1),f=null),o[12].description?p?p.p(o,_):(p=oe(o),p.c(),p.m(s,null)):p&&(p.d(1),p=null),_&1&&j!==(j="step step-"+o[0]+" svelte-1anhvj6")&&r(e,"class",j)},d(o){o&&c(e),E.d(),k&&k.d(),f&&f.d(),p&&p.d()}}}function tt(a){let e,t,l,s=(a[0]=="reformasurbanas"?"":a[0])+"",i,d,j,h,y;d=new pe({props:{name:a[1],selected:a[6].id,imgPath:a[2],positions:a[4],imageRange:a[5]}});let E=a[3],k=[];for(let f=0;f<E.length;f+=1)k[f]=ne(re(a,E,f));return{c(){e=n("div"),t=n("figure"),l=n("h3"),i=S(),X(d.$$.fragment),j=S(),h=n("div");for(let f=0;f<k.length;f+=1)k[f].c();this.h()},l(f){e=u(f,"DIV",{id:!0,class:!0});var p=v(e);t=u(p,"FIGURE",{class:!0});var o=v(t);l=u(o,"H3",{class:!0});var _=v(l);_.forEach(c),i=B(o),K(d.$$.fragment,o),o.forEach(c),j=B(p),h=u(p,"DIV",{class:!0});var F=v(h);for(let w=0;w<k.length;w+=1)k[w].l(F);F.forEach(c),p.forEach(c),this.h()},h(){r(l,"class","svelte-1anhvj6"),r(t,"class","svelte-1anhvj6"),r(h,"class","scroll-area svelte-1anhvj6"),r(e,"id","scrolly"),r(e,"class","svelte-1anhvj6")},m(f,p){b(f,e,p),g(e,t),g(t,l),l.innerHTML=s,g(t,i),Y(d,t,null),g(e,j),g(e,h);for(let o=0;o<k.length;o+=1)k[o].m(h,null);y=!0},p(f,p){(!y||p&1)&&s!==(s=(f[0]=="reformasurbanas"?"":f[0])+"")&&(l.innerHTML=s);const o={};if(p&2&&(o.name=f[1]),p&64&&(o.selected=f[6].id),p&4&&(o.imgPath=f[2]),p&16&&(o.positions=f[4]),p&32&&(o.imageRange=f[5]),d.$set(o),p&9){E=f[3];let _;for(_=0;_<E.length;_+=1){const F=re(f,E,_);k[_]?k[_].p(F,p):(k[_]=ne(F),k[_].c(),k[_].m(h,null))}for(;_<k.length;_+=1)k[_].d(1);k.length=E.length}},i(f){y||(x(d.$$.fragment,f),y=!0)},o(f){T(d.$$.fragment,f),y=!1},d(f){f&&c(e),Z(d),A(k,f)}}}function st(a){let e,t;return e=new me({props:{id:"gods-iconography-"+a[0],fullBleed:!0,$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){X(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,s){Y(e,l,s),t=!0},p(l,[s]){const i={};s&1&&(i.id="gods-iconography-"+l[0]),s&32895&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(x(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function lt(a,e,t){const l=!1;let{title:s="Tezcatlipoca"}=e,{name:i="mask-name"}=e,{source:d="illustration source"}=e,{sourceUrl:j=void 0}=e,{imgPath:h=""}=e,{selected:y=""}=e,{steps:E=[]}=e,{positions:k=[]}=e,{imageRange:f=[0,1]}=e,p=E[0];const o=_=>{t(7,y=_.index),t(6,p=E[_.index])};return he(()=>{ve().setup({step:`div .step-${s}`,offset:.5}).onStepEnter(o)}),a.$$set=_=>{"title"in _&&t(0,s=_.title),"name"in _&&t(1,i=_.name),"source"in _&&t(9,d=_.source),"sourceUrl"in _&&t(10,j=_.sourceUrl),"imgPath"in _&&t(2,h=_.imgPath),"selected"in _&&t(7,y=_.selected),"steps"in _&&t(3,E=_.steps),"positions"in _&&t(4,k=_.positions),"imageRange"in _&&t(5,f=_.imageRange)},[s,i,h,E,k,f,p,y,l,d,j]}class ct extends J{constructor(e){super();Q(this,e,lt,st,W,{ssr:8,title:0,name:1,source:9,sourceUrl:10,imgPath:2,selected:7,steps:3,positions:4,imageRange:5})}get ssr(){return this.$$.ctx[8]}}const ot={sistema_brt:[{cx:.5,cy:.5,rx:.49,ry:.49}],transoeste:[{cx:.27,cy:.5,rx:.25,ry:.49}],transcarioca:[{cx:.5,cy:.58,rx:.45,ry:.2}],transolimpica:[{cx:.6,cy:.67,rx:.4,ry:.14}],parque_rita_lee:[{cx:.5,cy:.6,rx:.15,ry:.15}],GET_emiliano_galdino:[{cx:.27,cy:.065,rx:.1,ry:.1}]},nt={terminal_gentileza:[{cx:.37,cy:.4,rx:.2,ry:.15}],sistema_vlt:[{cx:.75,cy:.65,rx:.15,ry:.2}],boulevard_olimpico:[{cx:.5,cy:.26,rx:.3295,ry:.17}],museu_do_amanh\u00E3:[{cx:.84,cy:.58,rx:.13,ry:.13}],museu_de_arte_do_rio:[{cx:.6,cy:.58,rx:.11,ry:.11}],centro_de_operacoes_rio:[{cx:.33,cy:.58,rx:.11,ry:.11}],avenida_rio_branco:[{cx:.5,cy:.653,rx:.485,ry:.285}],edificio_a_noite:[{cx:.5,cy:.653,rx:.485,ry:.285}],praca_maua:[{cx:.75,cy:.62,rx:.25,ry:.2}],marina_da_gloria:[{cx:.5,cy:.653,rx:.485,ry:.285}],sambodramo:[{cx:.5,cy:.653,rx:.485,ry:.285}],entorno_do_engenhao:[{cx:.5,cy:.653,rx:.485,ry:.285}],parque_madureira:[{cx:.5,cy:.653,rx:.485,ry:.285}]};export{ct as S,ot as a,nt as t};
