import{s as I,n as L}from"../chunks/scheduler.z_orFn6o.js";import{S,i as T,e as h,s as j,k as P,c as g,a as k,m as q,f as b,d as u,n as w,o as $,g as C,h as v,p as D,q as x,u as y,w as H,v as E}from"../chunks/index.V5aEd_Od.js";import{e as M}from"../chunks/each.CX63SMNn.js";import{L as V}from"../chunks/LineDecoration.DyYl2SAM.js";import{P as B,p as N}from"../chunks/ProjectCard.Cdat9rqF.js";function O(c,t,s){const r=c.slice();return r[0]=t[s],r}function z(c){let t,s;return t=new B({props:{project:c[0]}}),{c(){P(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,m){D(t,r,m),s=!0},p:L,i(r){s||(x(t.$$.fragment,r),s=!0)},o(r){y(t.$$.fragment,r),s=!1},d(r){E(t,r)}}}function A(c){let t,s,r='<h2 class="section-label">Projects</h2>',m,i,f,o,p,_=M(N),n=[];for(let e=0;e<_.length;e+=1)n[e]=z(O(c,_,e));return o=new V({props:{class:"absolute transform rotate-2"}}),{c(){t=h("section"),s=h("div"),s.innerHTML=r,m=j(),i=h("div");for(let e=0;e<n.length;e+=1)n[e].c();f=j(),P(o.$$.fragment),this.h()},l(e){t=g(e,"SECTION",{class:!0});var a=k(t);s=g(a,"DIV",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-1ncki73"&&(s.innerHTML=r),m=b(a),i=g(a,"DIV",{class:!0});var l=k(i);for(let d=0;d<n.length;d+=1)n[d].l(l);l.forEach(u),a.forEach(u),f=b(e),w(o.$$.fragment,e),this.h()},h(){$(s,"class","flex gap-4 items-center"),$(i,"class","grid grid-cols-1 md:grid-cols-2 gap-4"),$(t,"class","home-section text-stone-700 space-y-1 md:space-y-4")},m(e,a){C(e,t,a),v(t,s),v(t,m),v(t,i);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(i,null);C(e,f,a),D(o,e,a),p=!0},p:L,i(e){if(!p){for(let a=0;a<_.length;a+=1)x(n[a]);x(o.$$.fragment,e),p=!0}},o(e){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)y(n[a]);y(o.$$.fragment,e),p=!1},d(e){e&&(u(t),u(f)),H(n,e),E(o,e)}}}class R extends S{constructor(t){super(),T(this,t,null,A,I,{})}}export{R as component};
