function Dn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Sc(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Ye={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zi={duration:.5,overwrite:!1,delay:0},po,Re,oe,rn=1e8,Yt=1/rn,no=Math.PI*2,Ef=no/4,wf=0,bc=Math.sqrt,Af=Math.cos,Cf=Math.sin,de=function(t){return typeof t=="string"},le=function(t){return typeof t=="function"},Nn=function(t){return typeof t=="number"},Ar=function(t){return typeof t>"u"},An=function(t){return typeof t=="object"},qe=function(t){return t!==!1},mo=function(){return typeof window<"u"},_r=function(t){return le(t)||de(t)},Tc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,io=/(?:-?\.?\d|\.)+/gi,go=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ja=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_o=/[+-]=-?[.\d]+/,Ec=/[^,'"\[\]\s]+/gi,Rf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ne,sn,so,xo,$e={},Mr={},wc,Ac=function(t){return(Mr=Si(t,$e))&&Le},Cr=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Sr=function(t,e){return!e&&console.warn(t)},Cc=function(t,e){return t&&($e[t]=e)&&Mr&&(Mr[t]=e)||$e},Vs=function(){return 0},Pf={suppressEvents:!0,isStart:!0,kill:!1},xr={suppressEvents:!0,kill:!1},Lf={suppressEvents:!0},vo={},Zn=[],ro={},Rc,We={},$a={},mc=30,vr=[],yo="",Mo=function(t){var e=t[0],n,i;if(An(e)||le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=vr.length;i--&&!vr[i].targetTest(e););n=vr[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new To(t[i],n)))||t.splice(i,1);return t},Jn=function(t){return t._gsap||Mo(an(t))[0]._gsap},So=function(t,e,n){return(n=t[e])&&le(n)?t[e]():Ar(n)&&t.getAttribute&&t.getAttribute(e)||n},Oe=function(t,e){return(t=t.split(",")).forEach(e)||t},ce=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Ti=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},If=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},br=function(){var t=Zn.length,e=Zn.slice(0),n,i;for(ro={},Zn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pc=function(t,e,n,i){Zn.length&&!Re&&br(),t.render(e,n,i||Re&&e<0&&(t._initted||t._startAt)),Zn.length&&!Re&&br()},Lc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ec).length<2?e:de(t)?t.trim():t},Ic=function(t){return t},ln=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Df=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Si=function(t,e){for(var n in e)t[n]=e[n];return t},gc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=An(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Tr=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Bs=function(t){var e=t.parent||ne,n=t.keyframes?Df(Pe(t.keyframes)):ln;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Uf=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Dc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Rr=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},$n=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},vi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Nf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ao=function(t,e,n,i){return t._startAt&&(Re?t._startAt.revert(xr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Of=function s(t){return!t||t._ts&&s(t.parent)},_c=function(t){return t._repeat?Ji(t._tTime,t=t.duration()+t._rDelay)*t:0},Ji=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Er=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Pr=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||Yt)||0))},Lr=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Pr(t),n._dirty||vi(n,t)),t},Uc=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Er(t.rawTime(),e),(!e._dur||Ws(0,e.totalDuration(),n)-e._tTime>Yt)&&e.render(n,!0)),vi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Yt}},wn=function(t,e,n,i){return e.parent&&$n(e),e._start=Se((Nn(n)?n:n||t!==ne?nn(t,n,e):t._time)+e._delay),e._end=Se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Dc(t,e,"_first","_last",t._sort?"_start":0),oo(e)||(t._recent=e),i||Uc(t,e),t._ts<0&&Lr(t,t._tTime),t},Nc=function(t,e){return($e.ScrollTrigger||Cr("scrollTrigger",e))&&$e.ScrollTrigger.create(e,t)},Oc=function(t,e,n,i,r){if(Ao(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Re&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Rc!==Xe.frame)return Zn.push(t),t._lazy=[r,i],1},Ff=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},oo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Bf=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Ff(t)&&!(!t._initted&&oo(t))||(t._ts<0||t._dp._ts<0)&&!oo(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Ws(0,t._tDur,e),h=Ji(l,o),t._yoyo&&h&1&&(a=1-a),h!==Ji(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Re||i||t._zTime===Yt||!e&&t._zTime){if(!t._initted&&Oc(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Yt:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ao(t,e,n,!0),t._onUpdate&&!n&&on(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&on(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&$n(t,1),!n&&!Re&&(on(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},zf=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},$i=function(t,e,n,i){var r=t._repeat,a=Se(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Se(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Lr(t,t._tTime=t._tDur*o),t.parent&&Pr(t),n||vi(t.parent,t),t},xc=function(t){return t instanceof Ce?vi(t):$i(t,t._dur)},kf={_start:0,endTime:Vs,totalDuration:Vs},nn=function s(t,e,n){var i=t.labels,r=t._recent||kf,a=t.duration()>=rn?r.endTime(!1):t._dur,o,l,c;return de(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Pe(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},zs=function(t,e,n){var i=Nn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;a.immediateRender=qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new ue(e[0],a,e[r+1])},Kn=function(t,e){return t||t===0?e(t):e},Ws=function(t,e,n){return n<t?t:n>e?e:n},be=function(t,e){return!de(t)||!(e=Rf.exec(t))?"":e[1]},Vf=function(t,e,n){return Kn(n,function(i){return Ws(t,e,i)})},lo=[].slice,Fc=function(t,e){return t&&An(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&An(t[0]))&&!t.nodeType&&t!==sn},Hf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return de(i)&&!e||Fc(i,1)?(r=n).push.apply(r,an(i)):n.push(i)})||n},an=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):de(t)&&!n&&(so||!Ki())?lo.call((e||xo).querySelectorAll(t),0):Pe(t)?Hf(t,n):Fc(t)?lo.call(t,0):t?[t]:[]},co=function(t){return t=an(t)[0]||Sr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return an(e,n.querySelectorAll?n:n===t?Sr("Invalid scope")||xo.createElement("div"):t)}},Bc=function(t){return t.sort(function(){return .5-Math.random()})},zc=function(t){if(le(t))return t;var e=An(t)?t:{each:t},n=yi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return de(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,m,_){var g=(_||e).length,p=a[g],d,y,x,S,C,E,w,L,v;if(!p){if(v=e.grid==="auto"?0:(e.grid||[1,rn])[1],!v){for(w=-rn;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v--}for(p=a[g]=[],d=l?Math.min(v,g)*h-.5:i%v,y=v===rn?0:l?g*u/v-.5:i/v|0,w=0,L=rn,E=0;E<g;E++)x=E%v-d,S=y-(E/v|0),p[E]=C=c?Math.abs(c==="y"?S:x):bc(x*x+S*S),C>w&&(w=C),C<L&&(L=C);i==="random"&&Bc(p),p.max=w-L,p.min=L,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=be(e.amount||e.each)||0,n=n&&g<0?Zc(n):n}return g=(p[f]-p.min)/p.max||0,Se(p.b+(n?n(g):g)*p.v)+p.u}},ho=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Se(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Nn(n)?0:be(n))}},kc=function(t,e){var n=Pe(t),i,r;return!n&&An(t)&&(i=n=t.radius||rn,t.values?(t=an(t.values),(r=!Nn(t[0]))&&(i*=i)):t=ho(t.increment)),Kn(e,n?le(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=rn,h=0,u=t.length,f,m;u--;)r?(f=t[u].x-o,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,r||h===a||Nn(a)?h:h+be(a)}:ho(t))},Vc=function(t,e,n,i){return Kn(Pe(t)?!e:n===!0?!!(n=0):!i,function(){return Pe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Gf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Wf=function(t,e){return function(n){return t(parseFloat(n))+(e||be(n))}},Xf=function(t,e,n){return Gc(t,e,0,1,n)},Hc=function(t,e,n){return Kn(n,function(i){return t[~~e(i)]})},qf=function s(t,e,n){var i=e-t;return Pe(t)?Hc(t,s(0,t.length),e):Kn(n,function(r){return(i+(r-t)%i)%i+t})},Yf=function s(t,e,n){var i=e-t,r=i*2;return Pe(t)?Hc(t,s(0,t.length-1),e):Kn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Qi=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?Ec:io),n+=t.substr(e,i-e)+Vc(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Gc=function(t,e,n,i,r){var a=e-t,o=i-n;return Kn(r,function(l){return n+((l-t)/a*o||0)})},Zf=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=de(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Pe(t)&&!Pe(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Si(Pe(t)?[]:{},t));if(!h){for(l in e)Eo.call(o,t,l,"get",e[l]);r=function(_){return Po(_,o)||(a?t.p:t)}}}return Kn(n,r)},vc=function(t,e,n){var i=t.labels,r=rn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},on=function(t,e,n){var i=t.vars,r=i[e],a=oe,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Zn.length&&br(),o&&(oe=o),h=l?r.apply(c,l):r.call(c),oe=a,h},Os=function(t){return $n(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Re),t.progress()<1&&on(t,"onInterrupt"),t},Yi,Wc=[],Xc=function(t){if(mo()&&t){t=!t.name&&t.default||t;var e=t.name,n=le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Vs,render:Po,add:Eo,kill:hd,modifier:cd,rawVars:0},a={targetTest:0,get:0,getSetter:Ir,aliases:{},register:0};if(Ki(),t!==i){if(We[e])return;ln(i,ln(Tr(t,r),a)),Si(i.prototype,Si(r,Tr(t,a))),We[i.prop=e]=i,t.targetTest&&(vr.push(i),vo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Cc(e,i),t.register&&t.register(Le,i,Fe)}else t&&Wc.push(t)},qt=255,Fs={aqua:[0,qt,qt],lime:[0,qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qt],navy:[0,0,128],white:[qt,qt,qt],olive:[128,128,0],yellow:[qt,qt,0],orange:[qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qt,0,0],pink:[qt,192,203],cyan:[0,qt,qt],transparent:[qt,qt,qt,0]},Ka=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*qt+.5|0},qc=function(t,e,n){var i=t?Nn(t)?[t>>16,t>>8&qt,t&qt]:0:Fs.black,r,a,o,l,c,h,u,f,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Fs[t])i=Fs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&qt,i&qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&qt,t&qt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(io),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ka(l+1/3,r,a),i[1]=Ka(l,r,a),i[2]=Ka(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(go),n&&i.length<4&&(i[3]=1),i}else i=t.match(io)||Fs.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/qt,a=i[1]/qt,o=i[2]/qt,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===r?(a-o)/m+(a<o?6:0):u===a?(o-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Yc=function(t){var e=[],n=[],i=-1;return t.split(Un).forEach(function(r){var a=r.match(bi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},yc=function(t,e,n){var i="",r=(t+i).match(Un),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=qc(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Yc(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Un,"1").split(bi),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Un),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},Un=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Fs)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Jf=/hsl[a]?\(/,bo=function(t){var e=t.join(" "),n;if(Un.lastIndex=0,Un.test(e))return n=Jf.test(e),t[1]=yc(t[1],n),t[0]=yc(t[0],n,Yc(t[1])),!0},Hs,Xe=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,m,_=function g(p){var d=s()-i,y=p===!0,x,S,C,E;if(d>t&&(n+=d-e),i+=d,C=i-n,x=C-a,(x>0||y)&&(E=++u.frame,f=C-u.time*1e3,u.time=C=C/1e3,a+=x+(x>=r?4:r-x),S=1),y||(l=c(g)),S)for(m=0;m<o.length;m++)o[m](C,f,E,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){wc&&(!so&&mo()&&(sn=so=window,xo=sn.document||{},$e.gsap=Le,(sn.gsapVersions||(sn.gsapVersions=[])).push(Le.version),Ac(Mr||sn.GreenSockGlobals||!sn.gsap&&sn||{}),h=sn.requestAnimationFrame,Wc.forEach(Xc)),l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Hs=1,_(2))},sleep:function(){(h?sn.cancelAnimationFrame:clearTimeout)(l),Hs=0,c=Vs},lagSmoothing:function(p,d){t=p||1/0,e=Math.min(d||33,t)},fps:function(p){r=1e3/(p||240),a=u.time*1e3+r},add:function(p,d,y){var x=d?function(S,C,E,w){p(S,C,E,w),u.remove(x)}:p;return u.remove(p),o[y?"unshift":"push"](x),Ki(),x},remove:function(p,d){~(d=o.indexOf(p))&&o.splice(d,1)&&m>=d&&m--},_listeners:o},u})(),Ki=function(){return!Hs&&Xe.wake()},Ht={},$f=/^[\d.\-M][\d.\-,\s]/,Kf=/["']/g,Qf=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Kf,"").trim():+c,i=l.substr(o+1).trim();return e},jf=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},td=function(t){var e=(t+"").split("("),n=Ht[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Qf(e[1])]:jf(t).split(",").map(Lc)):Ht._CE&&$f.test(t)?Ht._CE("",t):n},Zc=function(t){return function(e){return 1-t(1-e)}},Jc=function s(t,e){for(var n=t._first,i;n;)n instanceof Ce?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},yi=function(t,e){return t&&(le(t)?t:Ht[t]||td(t))||e},Ei=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Oe(t,function(o){Ht[o]=$e[o]=r,Ht[a=o.toLowerCase()]=n;for(var l in r)Ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ht[o+"."+l]=r[l]}),r},$c=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Qa=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/no*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Cf((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:$c(o);return r=no/r,l.config=function(c,h){return s(t,c,h)},l},ja=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:$c(n);return i.config=function(r){return s(t,r)},i};Oe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ei(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;Ei("Elastic",Qa("in"),Qa("out"),Qa());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Ei("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ei("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ei("Circ",function(s){return-(bc(1-s*s)-1)});Ei("Sine",function(s){return s===1?1:-Af(s*Ef)+1});Ei("Back",ja("in"),ja("out"),ja());Ht.SteppedEase=Ht.steps=$e.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Yt;return function(o){return((i*Ws(0,a,o)|0)+r)*n}}};Zi.ease=Ht["quad.out"];Oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return yo+=s+","+s+"Params,"});var To=function(t,e){this.id=wf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:So,this.set=e?e.getSetter:Ir},Gs=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,$i(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),Hs||Xe.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,$i(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ki(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Lr(this,n),!r._dp||r.parent||Uc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Yt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_c(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_c(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ji(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Yt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Er(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Yt?0:this._rts,this.totalTime(Ws(-Math.abs(this._delay),this._tDur,i),!0),Pr(this),Nf(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ki(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Yt&&(this._tTime-=Yt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Er(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Lf);var i=Re;return Re=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Re=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(nn(this,n),qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Yt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Yt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Yt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=le(n)?n:Ic,o=function(){var c=i.then;i.then=null,le(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Os(this)},s})();ln(Gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Yt,_prom:0,_ps:!1,_rts:1});var Ce=(function(s){Sc(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qe(n.sortChildren),ne&&wn(n.parent||ne,Dn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Nc(Dn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return zs(0,arguments,this),this},e.from=function(i,r,a){return zs(1,arguments,this),this},e.fromTo=function(i,r,a,o){return zs(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Bs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ue(i,r,nn(this,a),1),this},e.call=function(i,r,a){return wn(this,ue.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ue(i,a,nn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Bs(a).immediateRender=qe(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Bs(o).immediateRender=qe(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Se(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,m,_,g,p,d,y,x,S,C,E,w;if(this!==ne&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,S=this._start,x=this._ts,d=!x,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=Se(h%p),h===l?(g=this._repeat,f=c):(g=~~(h/p),g&&g===h/p&&(f=c,g--),f>c&&(f=c)),C=Ji(this._tTime,p),!o&&this._tTime&&C!==g&&this._tTime-C*p-this._dur<=0&&(C=g),E&&g&1&&(f=c-f,w=1),g!==C&&!this._lock){var L=E&&C&1,v=L===(E&&g&1);if(g<C&&(L=!L),o=L?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Se(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Jc(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=zf(this,Se(o),Se(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!g&&(on(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!d){y=0,_&&(h+=this._zTime=-Yt);break}}m=_}else{m=this._last;for(var T=i<0?i:f;m;){if(_=m._prev,(m._act||T<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,r,a||Re&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!d){y=0,_&&(h+=this._zTime=T?-Yt:Yt);break}}m=_}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-Yt)._zTime=f>=o?1:-1,this._ts))return this._start=S,Pr(this),this.render(i,r,a);this._onUpdate&&!r&&on(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&$n(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(on(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Nn(r)||(r=nn(this,r,i)),!(i instanceof Gs)){if(Pe(i))return i.forEach(function(o){return a.add(o,r)}),this;if(de(i))return this.addLabel(i,r);if(le(i))i=ue.delayedCall(0,i);else return this}return this!==i?wn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-rn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ue?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return de(i)?this.removeLabel(i):le(i)?this.killTweensOf(i):(Rr(this,i),i===this._recent&&(this._recent=this._last),vi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(Xe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=nn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=ue.delayedCall(0,r||Vs,a);return o.data="isPause",this._hasPause=1,wn(this,o,nn(this,i))},e.removePause=function(i){var r=this._first;for(i=nn(this,i);r;)r._start===i&&r.data==="isPause"&&$n(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Yn!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=an(i),l=this._first,c=Nn(r),h;l;)l instanceof ue?If(l._targets,o)&&(c?(!Yn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=nn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,_=ue.to(a,ln({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Yt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&$i(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,ln({startAt:{time:nn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),vc(this,nn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),vc(this,nn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Yt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return vi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vi(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=rn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;$i(a,a===ne&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ne._ts&&(Pc(ne,Er(i,ne)),Rc=Xe.frame),Xe.frame>=mc){mc+=Ye.autoSleep||120;var r=ne._first;if((!r||!r._ts)&&Ye.autoSleep&&Xe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Xe.sleep()}}},t})(Gs);ln(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var ed=function(t,e,n,i,r,a,o){var l=new Fe(this._pt,t,e,0,1,Ro,null,r),c=0,h=0,u,f,m,_,g,p,d,y;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Qi(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),f=n.match(Ja)||[];u=Ja.exec(i);)_=u[0],g=i.substring(c,u.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Ti(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=Ja.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(_o.test(i)||d)&&(l.e=0),this._pt=l,l},Eo=function(t,e,n,i,r,a,o,l,c,h){le(i)&&(i=i(r||0,t,a));var u=t[e],f=n!=="get"?n:le(u)?c?t[e.indexOf("set")||!le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=le(u)?c?ad:jc:Co,_;if(de(i)&&(~i.indexOf("random(")&&(i=Qi(i)),i.charAt(1)==="="&&(_=Ti(f,i)+(be(f)||0),(_||_===0)&&(i=_))),!h||f!==i||uo)return!isNaN(f*i)&&i!==""?(_=new Fe(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?ld:th,0,m),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Cr(e,i),ed.call(this,t,e,f,i,m,l||Ye.stringFilter,c))},nd=function(t,e,n,i,r){if(le(t)&&(t=ks(t,r,e,n,i)),!An(t)||t.style&&t.nodeType||Pe(t)||Tc(t))return de(t)?ks(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=ks(t[o],r,e,n,i);return a},wo=function(t,e,n,i,r,a){var o,l,c,h;if(We[t]&&(o=new We[t]).init(r,o.rawVars?e[t]:nd(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Fe(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Yi))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Yn,uo,Ao=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,_=i.keyframes,g=i.autoRevert,p=t._dur,d=t._startAt,y=t._targets,x=t.parent,S=x&&x.data==="nested"?x.vars.targets:y,C=t._overwrite==="auto"&&!po,E=t.timeline,w,L,v,T,U,H,Y,R,I,F,B,X,q;if(E&&(!_||!r)&&(r="none"),t._ease=yi(r,Zi.ease),t._yEase=m?Zc(yi(m===!0?r:m,Zi.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(R=y[0]?Jn(y[0]).harness:0,X=R&&i[R.prop],w=Tr(i,vo),d&&(d._zTime<0&&d.progress(1),e<0&&f&&o&&!g?d.render(-1,!0):d.revert(f&&p?xr:Pf),d._lazy=0),a){if($n(t._startAt=ue.set(y,ln({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&qe(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re||!o&&!g)&&t._startAt.revert(xr),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!d){if(e&&(o=!1),v=ln({overwrite:!1,data:"isFromStart",lazy:o&&!d&&qe(l),immediateRender:o,stagger:0,parent:x},w),X&&(v[R.prop]=X),$n(t._startAt=ue.set(y,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re?t._startAt.revert(xr):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,Yt,Yt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&qe(l)||l&&!p,L=0;L<y.length;L++){if(U=y[L],Y=U._gsap||Mo(y)[L]._gsap,t._ptLookup[L]=F={},ro[Y.id]&&Zn.length&&br(),B=S===y?L:S.indexOf(U),R&&(I=new R).init(U,X||w,t,B,S)!==!1&&(t._pt=T=new Fe(t._pt,U,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(J){F[J]=T}),I.priority&&(H=1)),!R||X)for(v in w)We[v]&&(I=wo(v,w,t,B,U,S))?I.priority&&(H=1):F[v]=T=Eo.call(t,U,v,"get",w[v],B,S,0,i.stringFilter);t._op&&t._op[L]&&t.kill(U,t._op[L]),C&&t._pt&&(Yn=t,ne.killTweensOf(U,F,t.globalTime(e)),q=!t.parent,Yn=0),t._pt&&l&&(ro[Y.id]=1)}H&&Lo(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,_&&e<=0&&E.render(rn,!0,!0)},id=function(t,e,n,i,r,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return uo=1,t.vars[e]="+=0",Ao(t,o),uo=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=ce(n)+be(h.e)),h.b&&(h.b=c.s+be(h.b))},sd=function(t,e){var n=t[0]?Jn(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=Si({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},rd=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Pe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},ks=function(t,e,n,i,r){return le(t)?t.call(e,n,i,r):de(t)&&~t.indexOf("random(")?Qi(t):t},Kc=yo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qc={};Oe(Kc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Qc[s]=1});var ue=(function(s){Sc(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Bs(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,y=i.parent||ne,x=(Pe(n)||Tc(n)?Nn(n[0]):"length"in i)?[n]:an(n),S,C,E,w,L,v,T,U;if(o._targets=x.length?Mo(x):Sr("GSAP target "+n+" not found. https://greensock.com",!Ye.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||f||_r(c)||_r(h)){if(i=o.vars,S=o.timeline=new Ce({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),S.kill(),S.parent=S._dp=Dn(o),S._start=0,f||_r(c)||_r(h)){if(w=x.length,T=f&&zc(f),An(f))for(L in f)~Kc.indexOf(L)&&(U||(U={}),U[L]=f[L]);for(C=0;C<w;C++)E=Tr(i,Qc),E.stagger=0,d&&(E.yoyoEase=d),U&&Si(E,U),v=x[C],E.duration=+ks(c,Dn(o),C,v,x),E.delay=(+ks(h,Dn(o),C,v,x)||0)-o._delay,!f&&w===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),S.to(v,E,T?T(C,v,x):0),S._ease=Ht.none;S.duration()?c=h=0:o.timeline=0}else if(_){Bs(ln(S.vars.defaults,{ease:"none"})),S._ease=yi(_.ease||i.ease||"none");var H=0,Y,R,I;if(Pe(_))_.forEach(function(F){return S.to(x,F,">")}),S.duration();else{E={};for(L in _)L==="ease"||L==="easeEach"||rd(L,_[L],E,_.easeEach);for(L in E)for(Y=E[L].sort(function(F,B){return F.t-B.t}),H=0,C=0;C<Y.length;C++)R=Y[C],I={ease:R.e,duration:(R.t-(C?Y[C-1].t:0))/100*c},I[L]=R.v,S.to(x,I,H),H+=I.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return m===!0&&!po&&(Yn=Dn(o),ne.killTweensOf(x),Yn=0),wn(y,Dn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Se(y._time)&&qe(u)&&Of(Dn(o))&&y.data!=="nested")&&(o._tTime=-Yt,o.render(Math.max(0,-h)||0)),p&&Nc(Dn(o),p),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Yt&&!h?l:i<Yt?0:i,f,m,_,g,p,d,y,x,S;if(!c)Bf(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(f=Se(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===u/g&&(f=c,_--),f>c&&(f=c)),d=this._yoyo&&_&1,d&&(S=this._yEase,f=c-f),p=Ji(this._tTime,g),f===o&&!a&&this._initted)return this._tTime=u,this;_!==p&&(x&&this._yEase&&Jc(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(Se(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Oc(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!r&&!_&&(on(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;x&&x.render(i<0?i:!f&&d?-Yt:x._dur*x._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ao(this,i,r,a),on(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&on(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ao(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&$n(this,1),!r&&!(h&&!o)&&(u||o||d)&&(on(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o){Hs||Xe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ao(this,l),c=this._ease(l/this._dur),id(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Lr(this,0),this.parent||Dc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Os(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Yn&&Yn.vars.overwrite!==!0)._first||Os(this),this.parent&&a!==this.timeline.totalDuration()&&$i(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?an(i):o,c=this._ptLookup,h=this._pt,u,f,m,_,g,p,d;if((!r||r==="all")&&Uf(o,l))return r==="all"&&(this._pt=0),Os(this);for(u=this._op=this._op||[],r!=="all"&&(de(r)&&(g={},Oe(r,function(y){return g[y]=1}),r=g),r=sd(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],r==="all"?(u[d]=r,_=f,m={}):(m=u[d]=u[d]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Rr(this,p,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&h&&Os(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return zs(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return zs(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return ne.killTweensOf(i,r,a)},t})(Gs);ln(ue.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Oe("staggerTo,staggerFrom,staggerFromTo",function(s){ue[s]=function(){var t=new Ce,e=lo.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Co=function(t,e,n){return t[e]=n},jc=function(t,e,n){return t[e](n)},ad=function(t,e,n,i){return t[e](i.fp,n)},od=function(t,e,n){return t.setAttribute(e,n)},Ir=function(t,e){return le(t[e])?jc:Ar(t[e])&&t.setAttribute?od:Co},th=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ld=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ro=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Po=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},cd=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},hd=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Rr(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ud=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lo=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Fe=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||th,this.d=l||this,this.set=c||Co,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ud,this.m=n,this.mt=r,this.tween=i},s})();Oe(yo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return vo[s]=1});$e.TweenMax=$e.TweenLite=ue;$e.TimelineLite=$e.TimelineMax=Ce;ne=new Ce({sortChildren:!1,defaults:Zi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ye.stringFilter=bo;var Mi=[],yr={},fd=[],Mc=0,dd=0,to=function(t){return(yr[t]||fd).map(function(e){return e()})},fo=function(){var t=Date.now(),e=[];t-Mc>2&&(to("matchMediaInit"),Mi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=sn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),to("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Mc=t,to("matchMedia"))},eh=(function(){function s(e,n){this.selector=n&&co(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dd++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){le(n)&&(r=i,i=n,n=le);var a=this,o=function(){var c=oe,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=co(r)),oe=a,u=i.apply(a,arguments),le(u)&&a._r.push(u),oe=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===le?o(a):n?a[n]=o:o},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ue&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ue)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=Mi.length;o--;)Mi[o].id===this.id&&Mi.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),pd=(function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){An(n)||(n={matches:n});var a=new eh(0,r||this.scope),o=a.conditions={},l,c,h;oe&&!a.selector&&(a.selector=oe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=sn.matchMedia(n[c]),l&&(Mi.indexOf(a)<0&&Mi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(fo):l.addEventListener("change",fo)));return h&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),wr={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Xc(i)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return ne.getTweensOf(t,e)},getProperty:function(t,e,n,i){de(t)&&(t=an(t)[0]);var r=Jn(t||{}).get,a=n?Ic:Lc;return n==="native"&&(n=""),t&&(e?a((We[e]&&We[e].get||r)(t,e,n,i)):function(o,l,c){return a((We[o]&&We[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=an(t),t.length>1){var i=t.map(function(h){return Le.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=We[e],o=Jn(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Yi._pt=0,u.init(t,n?h+n:h,Yi,0,[t]),u.render(1,u),Yi._pt&&Po(1,Yi)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Le.to(t,Si((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=yi(t.ease,Zi.ease)),gc(Zi,t||{})},config:function(t){return gc(Ye,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!We[o]&&!$e[o]&&Sr(e+" effect requires "+o+" plugin.")}),$a[e]=function(o,l,c){return n(an(o),ln(l||{},r),c)},a&&(Ce.prototype[e]=function(o,l,c){return this.add($a[e](o,An(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ht[t]=yi(e)},parseEase:function(t,e){return arguments.length?yi(t,e):Ht},getById:function(t){return ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ce(t),i,r;for(n.smoothChildTiming=qe(t.smoothChildTiming),ne.remove(n),n._dp=0,n._time=n._tTime=ne._time,i=ne._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ue&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=r;return wn(ne,n,0),n},context:function(t,e){return t?new eh(t,e):oe},matchMedia:function(t){return new pd(t)},matchMediaRefresh:function(){return Mi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||fo()},addEventListener:function(t,e){var n=yr[t]||(yr[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=yr[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:qf,wrapYoyo:Yf,distribute:zc,random:Vc,snap:kc,normalize:Xf,getUnit:be,clamp:Vf,splitColor:qc,toArray:an,selector:co,mapRange:Gc,pipe:Gf,unitize:Wf,interpolate:Zf,shuffle:Bc},install:Ac,effects:$a,ticker:Xe,updateRoot:Ce.updateRoot,plugins:We,globalTimeline:ne,core:{PropTween:Fe,globals:Cc,Tween:ue,Timeline:Ce,Animation:Gs,getCache:Jn,_removeLinkedListItem:Rr,reverting:function(){return Re},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return po=t}}};Oe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return wr[s]=ue[s]});Xe.add(Ce.updateRoot);Yi=wr.to({},{duration:0});var md=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},gd=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=md(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},eo=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(de(r)&&(l={},Oe(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}gd(o,r)}}}},Le=wr.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Re?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},eo("roundProps",ho),eo("modifiers"),eo("snap",kc))||wr;ue.version=Ce.version=Le.version="3.12.2";wc=1;mo()&&Ki();var _d=Ht.Power0,xd=Ht.Power1,vd=Ht.Power2,yd=Ht.Power3,Md=Ht.Power4,Sd=Ht.Linear,bd=Ht.Quad,Td=Ht.Cubic,Ed=Ht.Quart,wd=Ht.Quint,Ad=Ht.Strong,Cd=Ht.Elastic,Rd=Ht.Back,Pd=Ht.SteppedEase,Ld=Ht.Bounce,Id=Ht.Sine,Dd=Ht.Expo,Ud=Ht.Circ;var nh,Qn,ts,Bo,Ri,Nd,ih,zo,Od=function(){return typeof window<"u"},Fn={},Ci=180/Math.PI,es=Math.PI/180,ji=Math.atan2,sh=1e8,ko=/([A-Z])/g,Fd=/(left|right|width|margin|padding|x)/i,Bd=/[\s,\(]\S/,Cn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Vd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},uh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},fh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Hd=function(t,e,n){return t.style[e]=n},Gd=function(t,e,n){return t.style.setProperty(e,n)},Wd=function(t,e,n){return t._gsap[e]=n},Xd=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},qd=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Yd=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},ie="transform",pn=ie+"Origin",Zd=function s(t,e){var n=this,i=this.target,r=i.style;if(t in Fn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Cn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=On(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:On(i,t);else return Cn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ie)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,e,"")),t=ie}(r||e)&&this.props.push(t,e,r[t])},dh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Jd=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(ko,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=zo(),(!r||!r.isStart)&&!n[ie]&&(dh(n),i.uncache=1)}},ph=function(t,e){var n={target:t,props:[],revert:Jd,save:Zd};return t._gsap||Le.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},mh,No=function(t,e){var n=Qn.createElementNS?Qn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Qn.createElement(t);return n.style?n:Qn.createElement(t)},Rn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ko,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ns(e)||e,1)||""},rh="O,Moz,ms,Ms,Webkit".split(","),ns=function(t,e,n){var i=e||Ri,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(rh[a]+t in r););return a<0?null:(a===3?"ms":a>=0?rh[a]:"")+t},Oo=function(){Od()&&window.document&&(nh=window,Qn=nh.document,ts=Qn.documentElement,Ri=No("div")||{style:{}},Nd=No("div"),ie=ns(ie),pn=ie+"Origin",Ri.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mh=!!ns("perspective"),zo=Le.core.reverting,Bo=1)},Io=function s(t){var e=No("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(ts.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ts.removeChild(e),this.style.cssText=r,a},ah=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},gh=function(t){var e;try{e=t.getBBox()}catch{e=Io.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Io||(e=Io.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ah(t,["x","cx","x1"])||0,y:+ah(t,["y","cy","y1"])||0,width:0,height:0}:e},_h=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gh(t))},qs=function(t,e){if(e){var n=t.style;e in Fn&&e!==pn&&(e=ie),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(ko,"-$1").toLowerCase())):n.removeAttribute(e)}},jn=function(t,e,n,i,r,a){var o=new Fe(t._pt,e,n,0,1,a?fh:uh);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},oh={deg:1,rad:1,turn:1},$d={grid:1,flex:1},ti=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ri.style,l=Fd.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",m=i==="%",_,g,p,d;return i===a||!r||oh[i]||oh[a]?r:(a!=="px"&&!f&&(r=s(t,e,n,"px")),d=t.getCTM&&_h(t),(m||a==="%")&&(Fn[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[l?"width":"height"]:t[h],ce(m?r/_*u:r/100*_)):(o[l?"width":"height"]=u+(f?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Qn||!g.appendChild)&&(g=Qn.body),p=g._gsap,p&&m&&p.width&&l&&p.time===Xe.time&&!p.uncache?ce(r/p.width*u):((m||a==="%")&&!$d[Rn(g,"display")]&&(o.position=Rn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ri),_=Ri[h],g.removeChild(Ri),o.position="absolute",l&&m&&(p=Jn(g),p.time=Xe.time,p.width=g[h]),ce(f?_*r/u:_&&r?u/_*r:0))))},On=function(t,e,n,i){var r;return Bo||Oo(),e in Cn&&e!=="transform"&&(e=Cn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Fn[e]&&e!=="transform"?(r=Zs(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ur(Rn(t,pn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Dr[e]&&Dr[e](t,e,n)||Rn(t,e)||So(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ti(t,e,r,n)+n:r},Kd=function(t,e,n,i){if(!n||n==="none"){var r=ns(e,t,1),a=r&&Rn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Rn(t,"borderTopColor"))}var o=new Fe(this._pt,t.style,e,0,1,Ro),l=0,c=0,h,u,f,m,_,g,p,d,y,x,S,C;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Rn(t,e)||i,t.style[e]=n),h=[n,i],bo(h),n=h[0],i=h[1],f=n.match(bi)||[],C=i.match(bi)||[],C.length){for(;u=bi.exec(i);)p=u[0],y=i.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(m=parseFloat(g)||0,S=g.substr((m+"").length),p.charAt(1)==="="&&(p=Ti(m,p)+S),d=parseFloat(p),x=p.substr((d+"").length),l=bi.lastIndex-x.length,x||(x=x||Ye.units[e]||S,l===i.length&&(i+=x,o.e+=x)),S!==x&&(m=ti(t,e,g,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:d-m,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?fh:uh;return _o.test(i)&&(o.e=0),this._pt=o,o},lh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qd=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=lh[n]||n,e[1]=lh[i]||i,e.join(" ")},jd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Fn[o]&&(l=1,o=o==="transformOrigin"?pn:ie),qs(n,o);l&&(qs(n,ie),a&&(a.svg&&n.removeAttribute("transform"),Zs(n,1),a.uncache=1,dh(i)))}},Dr={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Fe(t._pt,e,n,0,0,jd);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Ys=[1,0,0,1,0,0],xh={},vh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ch=function(t){var e=Rn(t,ie);return vh(e)?Ys:e.substr(7).match(go).map(ce)},Vo=function(t,e){var n=t._gsap||Jn(t),i=t.style,r=ch(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ys:r):(r===Ys&&!t.offsetParent&&t!==ts&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,ts.appendChild(t)),r=ch(t),l?i.display=l:qs(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ts.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Fo=function(t,e,n,i,r,a){var o=t._gsap,l=r||Vo(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,m=l[0],_=l[1],g=l[2],p=l[3],d=l[4],y=l[5],x=e.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,E,w,L,v;n?l!==Ys&&(w=m*p-_*g)&&(L=S*(p/w)+C*(-g/w)+(g*y-p*d)/w,v=S*(-_/w)+C*(m/w)-(m*y-_*d)/w,S=L,C=v):(E=gh(t),S=E.x+(~x[0].indexOf("%")?S/100*E.width:S),C=E.y+(~(x[1]||x[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&o.smooth?(d=S-c,y=C-h,o.xOffset=u+(d*m+y*g)-d,o.yOffset=f+(d*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=C,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[pn]="0px 0px",a&&(jn(a,o,"xOrigin",c,S),jn(a,o,"yOrigin",h,C),jn(a,o,"xOffset",u,o.xOffset),jn(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+C)},Zs=function(t,e){var n=t._gsap||new To(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Rn(t,pn)||"0",h,u,f,m,_,g,p,d,y,x,S,C,E,w,L,v,T,U,H,Y,R,I,F,B,X,q,J,$,at,W,Z,it;return h=u=f=g=p=d=y=x=S=0,m=_=1,n.svg=!!(t.getCTM&&_h(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ie]!=="none"?l[ie]:"")),i.scale=i.rotate=i.translate="none"),w=Vo(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Fo(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,E=n.yOrigin||0,w!==Ys&&(U=w[0],H=w[1],Y=w[2],R=w[3],h=I=w[4],u=F=w[5],w.length===6?(m=Math.sqrt(U*U+H*H),_=Math.sqrt(R*R+Y*Y),g=U||H?ji(H,U)*Ci:0,y=Y||R?ji(Y,R)*Ci+g:0,y&&(_*=Math.abs(Math.cos(y*es))),n.svg&&(h-=C-(C*U+E*Y),u-=E-(C*H+E*R))):(it=w[6],W=w[7],J=w[8],$=w[9],at=w[10],Z=w[11],h=w[12],u=w[13],f=w[14],L=ji(it,at),p=L*Ci,L&&(v=Math.cos(-L),T=Math.sin(-L),B=I*v+J*T,X=F*v+$*T,q=it*v+at*T,J=I*-T+J*v,$=F*-T+$*v,at=it*-T+at*v,Z=W*-T+Z*v,I=B,F=X,it=q),L=ji(-Y,at),d=L*Ci,L&&(v=Math.cos(-L),T=Math.sin(-L),B=U*v-J*T,X=H*v-$*T,q=Y*v-at*T,Z=R*T+Z*v,U=B,H=X,Y=q),L=ji(H,U),g=L*Ci,L&&(v=Math.cos(L),T=Math.sin(L),B=U*v+H*T,X=I*v+F*T,H=H*v-U*T,F=F*v-I*T,U=B,I=X),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,d=180-d),m=ce(Math.sqrt(U*U+H*H+Y*Y)),_=ce(Math.sqrt(F*F+it*it)),L=ji(I,F),y=Math.abs(L)>2e-4?L*Ci:0,S=Z?1/(Z<0?-Z:Z):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!vh(Rn(t,ie)),B&&t.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ce(m),n.scaleY=ce(_),n.rotation=ce(g)+o,n.rotationX=ce(p)+o,n.rotationY=ce(d)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[pn]=Ur(c)),n.xOffset=n.yOffset=0,n.force3D=Ye.force3D,n.renderTransform=n.svg?ep:mh?yh:tp,n.uncache=0,n},Ur=function(t){return(t=t.split(" "))[0]+" "+t[1]},Do=function(t,e,n){var i=be(e);return ce(parseFloat(e)+parseFloat(ti(t,"x",n+"px",i)))+i},tp=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yh(t,e)},wi="0deg",Xs="0px",Ai=") ",yh=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,d=n.force3D,y=n.target,x=n.zOrigin,S="",C=d==="auto"&&t&&t!==1||d===!0;if(x&&(u!==wi||h!==wi)){var E=parseFloat(h)*es,w=Math.sin(E),L=Math.cos(E),v;E=parseFloat(u)*es,v=Math.cos(E),a=Do(y,a,w*v*-x),o=Do(y,o,-Math.sin(E)*-x),l=Do(y,l,L*v*-x+x)}p!==Xs&&(S+="perspective("+p+Ai),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(C||a!==Xs||o!==Xs||l!==Xs)&&(S+=l!==Xs||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ai),c!==wi&&(S+="rotate("+c+Ai),h!==wi&&(S+="rotateY("+h+Ai),u!==wi&&(S+="rotateX("+u+Ai),(f!==wi||m!==wi)&&(S+="skew("+f+", "+m+Ai),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ai),y.style[ie]=S||"translate(0, 0)"},ep=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,d=n.yOffset,y=n.forceCSS,x=parseFloat(a),S=parseFloat(o),C,E,w,L,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=es,c*=es,C=Math.cos(l)*u,E=Math.sin(l)*u,w=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(h*=es,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,L*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),C*=v,E*=v)),C=ce(C),E=ce(E),w=ce(w),L=ce(L)):(C=u,L=f,E=w=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=ti(m,"x",a,"px"),S=ti(m,"y",o,"px")),(_||g||p||d)&&(x=ce(x+_-(_*C+g*w)+p),S=ce(S+g-(_*E+g*L)+d)),(i||r)&&(v=m.getBBox(),x=ce(x+i/100*v.width),S=ce(S+r/100*v.height)),v="matrix("+C+","+E+","+w+","+L+","+x+","+S+")",m.setAttribute("transform",v),y&&(m.style[ie]=v)},np=function(t,e,n,i,r){var a=360,o=de(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ci:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*sh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*sh)%a-~~(c/a)*a)),t._pt=f=new Fe(t._pt,e,n,i,c,zd),f.e=h,f.u="deg",t._props.push(n),f},hh=function(t,e){for(var n in e)t[n]=e[n];return t},ip=function(t,e,n){var i=hh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ie]=e,o=Zs(n,1),qs(n,ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ie],a[ie]=e,o=Zs(n,1),a[ie]=c);for(l in Fn)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(m=be(c),_=be(h),u=m!==_?ti(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new Fe(t._pt,o,l,u,f-u,Uo),t._pt.u=_||0,t._props.push(l));hh(o,i)};Oe("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Dr[t>1?"border"+s:s]=function(o,l,c,h,u){var f,m;if(arguments.length<4)return f=a.map(function(_){return On(o,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},a.forEach(function(_,g){return m[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,m,u)}});var Ho={name:"css",register:Oo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,m,_,g,p,d,y,x,S,C,E,w,L;Bo||Oo(),this.styles=this.styles||ph(t),L=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(We[g]&&wo(g,e,n,i,t,r)))){if(m=typeof h,_=Dr[g],m==="function"&&(h=h.call(n,i,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Qi(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Un.lastIndex=0,Un.test(c)||(p=be(c),d=be(h)),d?p!==d&&(c=ti(t,g,c,d)+d):p&&(h+=p),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),L.push(g,0,o[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],de(c)&&~c.indexOf("random(")&&(c=Qi(c)),be(c+"")||(c+=Ye.units[g]||be(On(t,g))||""),(c+"").charAt(1)==="="&&(c=On(t,g))):c=On(t,g),f=parseFloat(c),y=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in Cn&&(g==="autoAlpha"&&(f===1&&On(t,"visibility")==="hidden"&&u&&(f=0),L.push("visibility",0,o.visibility),jn(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Cn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Fn,x){if(this.styles.save(g),S||(C=t._gsap,C.renderTransform&&!e.parseTransform||Zs(t,e.parseTransform),E=e.smoothOrigin!==!1&&C.smooth,S=this._pt=new Fe(this._pt,o,ie,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new Fe(this._pt,C,"scaleY",C.scaleY,(y?Ti(C.scaleY,y+u):u)-C.scaleY||0,Uo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(pn,0,o[pn]),h=Qd(h),C.svg?Fo(t,h,0,E,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==C.zOrigin&&jn(this,C,"zOrigin",C.zOrigin,d),jn(this,o,g,Ur(c),Ur(h)));continue}else if(g==="svgOrigin"){Fo(t,h,1,E,0,this);continue}else if(g in xh){np(this,C,g,f,y?Ti(f,y+h):h);continue}else if(g==="smoothOrigin"){jn(this,C,"smooth",C.smooth,h);continue}else if(g==="force3D"){C[g]=h;continue}else if(g==="transform"){ip(this,h,t);continue}}else g in o||(g=ns(g)||g);if(x||(u||u===0)&&(f||f===0)&&!Bd.test(h)&&g in o)p=(c+"").substr((f+"").length),u||(u=0),d=be(h)||(g in Ye.units?Ye.units[g]:p),p!==d&&(f=ti(t,g,c,d)),this._pt=new Fe(this._pt,x?C:o,g,f,(y?Ti(f,y+u):u)-f,!x&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?Vd:Uo),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=kd);else if(g in o)Kd.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){Cr(g,h);continue}x||(g in o?L.push(g,0,o[g]):L.push(g,1,c||t[g])),a.push(g)}}w&&Lo(this)},render:function(t,e){if(e.tween._time||!zo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:On,aliases:Cn,getSetter:function(t,e,n){var i=Cn[e];return i&&i.indexOf(",")<0&&(e=i),e in Fn&&e!==pn&&(t._gsap.x||On(t,"x"))?n&&ih===n?e==="scale"?Xd:Wd:(ih=n||{})&&(e==="scale"?qd:Yd):t.style&&!Ar(t.style[e])?Hd:~e.indexOf("-")?Gd:Ir(t,e)},core:{_removeProperty:qs,_getMatrix:Vo}};Le.utils.checkPrefix=ns;Le.core.getStyleSaver=ph;(function(s,t,e,n){var i=Oe(s+","+t+","+e,function(r){Fn[r]=1});Oe(t,function(r){Ye.units[r]="deg",xh[r]=1}),Cn[i[13]]=s+","+t,Oe(n,function(r){var a=r.split(":");Cn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ye.units[s]="px"});Le.registerPlugin(Ho);var Go=Le.registerPlugin(Ho)||Le,Cv=Go.core.Tween;var sp=0,Mh=1,rp=2;var $u=1,ap=2,Gn=3,ui=0,Ze=1,xn=2;var Ln=0,Ss=1,ha=2,Sh=3,bh=4,op=5,Ni=100,lp=101,cp=102,Th=103,Eh=104,hp=200,up=201,fp=202,dp=203,Ml=204,Sl=205,pp=206,mp=207,gp=208,_p=209,xp=210,vp=211,yp=212,Mp=213,Sp=214,bp=0,Tp=1,Ep=2,ua=3,wp=4,Ap=5,Cp=6,Rp=7,Ku=0,Pp=1,Lp=2,ci=0,Ip=1,Dp=2,Up=3,ec=4,Np=5,Op=6;var Qu=300,ws=301,As=302,bl=303,Tl=304,Oa=306,El=1e3,vn=1001,wl=1002,ke=1003,wh=1004;var Wo=1005;var hn=1006,Fp=1007;var nr=1008;var hi=1009,Bp=1010,zp=1011,nc=1012,ju=1013,ai=1014,oi=1015,Mn=1016,tf=1017,ef=1018,Bi=1020,kp=1021,yn=1023,Vp=1024,Hp=1025,zi=1026,Cs=1027,Gp=1028,nf=1029,Wp=1030,sf=1031,rf=1033,Xo=33776,qo=33777,Yo=33778,Zo=33779,Ah=35840,Ch=35841,Rh=35842,Ph=35843,af=36196,Lh=37492,Ih=37496,Dh=37808,Uh=37809,Nh=37810,Oh=37811,Fh=37812,Bh=37813,zh=37814,kh=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,Jo=36492,Yh=36494,Zh=36495,Xp=36283,Jh=36284,$h=36285,Kh=36286;var fa=2300,da=2301,$o=2302,Qh=2400,jh=2401,tu=2402;var of=3e3,ki=3001,qp=3200,Yp=3201,Zp=0,Jp=1,un="",Te="srgb",qn="srgb-linear",ic="display-p3",Fa="display-p3-linear",pa="linear",Kt="srgb",ma="rec709",ga="p3";var is=7680;var eu=519,$p=512,Kp=513,Qp=514,lf=515,jp=516,tm=517,em=518,nm=519,nu=35044;var iu="300 es",Al=1035,Xn=2e3,_a=2001,fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=1234567,bs=Math.PI/180,ir=180/Math.PI;function Is(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ve(s,t,e){return Math.max(t,Math.min(e,s))}function sc(s,t){return(s%t+t)%t}function im(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function sm(s,t,e){return s!==t?(e-s)/(t-s):0}function js(s,t,e){return(1-e)*s+e*t}function rm(s,t,e,n){return js(s,t,1-Math.exp(-e*n))}function am(s,t=1){return t-Math.abs(sc(s,t*2)-t)}function om(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function lm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function cm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function hm(s,t){return s+Math.random()*(t-s)}function um(s){return s*(.5-Math.random())}function fm(s){s!==void 0&&(su=s);let t=su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dm(s){return s*bs}function pm(s){return s*ir}function Cl(s){return(s&s-1)===0&&s!==0}function mm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gm(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var dr={DEG2RAD:bs,RAD2DEG:ir,generateUUID:Is,clamp:Ve,euclideanModulo:sc,mapLinear:im,inverseLerp:sm,lerp:js,damp:rm,pingpong:am,smoothstep:om,smootherstep:lm,randInt:cm,randFloat:hm,randFloatSpread:um,seededRandom:fm,degToRad:dm,radToDeg:pm,isPowerOfTwo:Cl,ceilPowerOfTwo:mm,floorPowerOfTwo:xa,setQuaternionFromProperEuler:gm,normalize:Be,denormalize:vs},Ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],g=i[0],p=i[3],d=i[6],y=i[1],x=i[4],S=i[7],C=i[2],E=i[5],w=i[8];return r[0]=a*g+o*y+l*C,r[3]=a*p+o*x+l*E,r[6]=a*d+o*S+l*w,r[1]=c*g+h*y+u*C,r[4]=c*p+h*x+u*E,r[7]=c*d+h*S+u*w,r[2]=f*g+m*y+_*C,r[5]=f*p+m*x+_*E,r[8]=f*d+m*S+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,_=e*u+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new kt;function cf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _m(){let s=va("canvas");return s.style.display="block",s}var ru={};function tr(s){s in ru||(ru[s]=!0,console.warn(s))}var au=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ou=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nr={[qn]:{transfer:pa,primaries:ma,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:Kt,primaries:ma,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Fa]:{transfer:pa,primaries:ga,toReference:s=>s.applyMatrix3(ou),fromReference:s=>s.applyMatrix3(au)},[ic]:{transfer:Kt,primaries:ga,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ou),fromReference:s=>s.applyMatrix3(au).convertLinearToSRGB()}},xm=new Set([qn,Fa]),Xt={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!xm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Nr[t].toReference,i=Nr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Nr[s].primaries},getTransfer:function(s){return s===un?pa:Nr[s].transfer}};function Ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ss,ya=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=va("canvas")),ss.width=t.width,ss.height=t.height;let n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ts(e[n]/255)*255):e[n]=Ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vm=0,Ma=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Is(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jo(i[a].image)):r.push(jo(i[a]))}else r=jo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ym=0,Sn=class s extends fi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=vn,i=vn,r=hn,a=nr,o=yn,l=hi,c=s.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Is(),this.name="",this.source=new Ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ki?Te:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case El:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case El:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?ki:of}set encoding(t){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ki?Te:un}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Qu;Sn.DEFAULT_ANISOTROPY=1;var Ee=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,S=(m+1)/2,C=(d+1)/2,E=(h+f)/4,w=(u+g)/4,L=(_+p)/4;return x>S&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=w/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=E/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=L/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ki?Te:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ma(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sa=class extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var di=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==m||h!==_){let p=1-o,d=l*f+c*m+h*_+u*g,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let C=Math.sqrt(x),E=Math.atan2(C,d*y);p=Math.sin(p*E)/C,o=Math.sin(o*E)/C}let S=o*y;if(l=l*p+f*S,c=c*p+m*S,h=h*p+_*S,u=u*p+g*S,p===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*m-c*f,t[e+1]=l*_+h*f+c*u-o*m,t[e+2]=c*_+h*m+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new D,lu=new di,Vi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Fr.subVectors(this.max,Js),rs.subVectors(t.a,Js),as.subVectors(t.b,Js),os.subVectors(t.c,Js),ei.subVectors(as,rs),ni.subVectors(os,as),Pi.subVectors(rs,os);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Pi.z,Pi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Pi.z,0,-Pi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Pi.y,Pi.x,0];return!el(e,rs,as,os,Fr)||(e=[1,0,0,0,1,0,0,0,1],!el(e,rs,as,os,Fr))?!1:(Br.crossVectors(ei,ni),e=[Br.x,Br.y,Br.z],el(e,rs,as,os,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,Or=new Vi,rs=new D,as=new D,os=new D,ei=new D,ni=new D,Pi=new D,Js=new D,Fr=new D,Br=new D,Li=new D;function el(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Li.fromArray(s,r);let o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Mm=new Vi,$s=new D,nl=new D,Hi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(nl)),this.expandByPoint($s.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new D,il=new D,zr=new D,ii=new D,sl=new D,kr=new D,rl=new D,sr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){il.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(il);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=ii.dot(this.direction),l=-ii.dot(zr),c=ii.lengthSq(),h=Math.abs(1-a*a),u,f,m,_;if(h>0)if(u=a*l-o,f=a*o-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(il).addScaledVector(zr,f),m}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,r){sl.subVectors(e,t),kr.subVectors(n,t),rl.crossVectors(sl,kr);let a=this.direction.dot(rl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,t);let l=o*this.direction.dot(kr.crossVectors(ii,kr));if(l<0)return null;let c=o*this.direction.dot(sl.cross(ii));if(c<0||l+c>a)return null;let h=-o*ii.dot(rl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,m,_,g,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,m,_,g,p)}set(t,e,n,i,r,a,o,l,c,h,u,f,m,_,g,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sm,t,bm)}lookAt(t,e,n){let i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),si.crossVectors(n,Ke),si.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),si.crossVectors(n,Ke)),si.normalize(),Vr.crossVectors(Ke,si),i[0]=si.x,i[4]=Vr.x,i[8]=Ke.x,i[1]=si.y,i[5]=Vr.y,i[9]=Ke.y,i[2]=si.z,i[6]=Vr.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],d=n[14],y=n[3],x=n[7],S=n[11],C=n[15],E=i[0],w=i[4],L=i[8],v=i[12],T=i[1],U=i[5],H=i[9],Y=i[13],R=i[2],I=i[6],F=i[10],B=i[14],X=i[3],q=i[7],J=i[11],$=i[15];return r[0]=a*E+o*T+l*R+c*X,r[4]=a*w+o*U+l*I+c*q,r[8]=a*L+o*H+l*F+c*J,r[12]=a*v+o*Y+l*B+c*$,r[1]=h*E+u*T+f*R+m*X,r[5]=h*w+u*U+f*I+m*q,r[9]=h*L+u*H+f*F+m*J,r[13]=h*v+u*Y+f*B+m*$,r[2]=_*E+g*T+p*R+d*X,r[6]=_*w+g*U+p*I+d*q,r[10]=_*L+g*H+p*F+d*J,r[14]=_*v+g*Y+p*B+d*$,r[3]=y*E+x*T+S*R+C*X,r[7]=y*w+x*U+S*I+C*q,r[11]=y*L+x*H+S*F+C*J,r[15]=y*v+x*Y+S*B+C*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],_=t[3],g=t[7],p=t[11],d=t[15];return _*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*m-n*l*m)+g*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],_=t[12],g=t[13],p=t[14],d=t[15],y=u*p*c-g*f*c+g*l*m-o*p*m-u*l*d+o*f*d,x=_*f*c-h*p*c-_*l*m+a*p*m+h*l*d-a*f*d,S=h*g*c-_*u*c+_*o*m-a*g*m-h*o*d+a*u*d,C=_*u*l-h*g*l-_*o*f+a*g*f+h*o*p-a*u*p,E=e*y+n*x+i*S+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=y*w,t[1]=(g*f*r-u*p*r-g*i*m+n*p*m+u*i*d-n*f*d)*w,t[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*d+n*l*d)*w,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*m-n*l*m)*w,t[4]=x*w,t[5]=(h*p*r-_*f*r+_*i*m-e*p*m-h*i*d+e*f*d)*w,t[6]=(_*l*r-a*p*r-_*i*c+e*p*c+a*i*d-e*l*d)*w,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*m+e*l*m)*w,t[8]=S*w,t[9]=(_*u*r-h*g*r-_*n*m+e*g*m+h*n*d-e*u*d)*w,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*d+e*o*d)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*w,t[12]=C*w,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*p+e*u*p)*w,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,_=r*u,g=a*h,p=a*u,d=o*u,y=l*c,x=l*h,S=l*u,C=n.x,E=n.y,w=n.z;return i[0]=(1-(g+d))*C,i[1]=(m+S)*C,i[2]=(_-x)*C,i[3]=0,i[4]=(m-S)*E,i[5]=(1-(f+d))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(_+x)*w,i[9]=(p-y)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ls.set(i[0],i[1],i[2]).length(),a=ls.set(i[4],i[5],i[6]).length(),o=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);let c=1/r,h=1/a,u=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Xn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(o===Xn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_a)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Xn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,m=(n+i)*h,_,g;if(o===Xn)_=(a+r)*u,g=-2*u;else if(o===_a)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new D,gn=new Me,Sm=new D(0,0,0),bm=new D(1,1,1),si=new D,Vr=new D,Ke=new D,cu=new Me,hu=new di,ba=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ba.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tm=0,uu=new D,cs=new di,kn=new Me,Hr=new D,Ks=new D,Em=new D,wm=new di,fu=new D(1,0,0),du=new D(0,1,0),pu=new D(0,0,1),Am={type:"added"},Cm={type:"removed"},je=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new ba,n=new di,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new kt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return uu.copy(t).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ks,Hr,this.up):kn.lookAt(Hr,Ks,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(kn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Am)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cm)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Em),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};je.DEFAULT_UP=new D(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new D,Vn=new D,al=new D,Hn=new D,hs=new D,us=new D,mu=new D,ol=new D,ll=new D,cl=new D,Gr=!1,Fi=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){_n.subVectors(i,e),Vn.subVectors(n,e),al.subVectors(t,e);let a=_n.dot(_n),o=_n.dot(Vn),l=_n.dot(al),c=Vn.dot(Vn),h=Vn.dot(al),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,i,r,a,o,l){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Vn.subVectors(t,e),_n.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),_n.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;hs.subVectors(i,n),us.subVectors(r,n),ol.subVectors(t,n);let l=hs.dot(ol),c=us.dot(ol);if(l<=0&&c<=0)return e.copy(n);ll.subVectors(t,i);let h=hs.dot(ll),u=us.dot(ll);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(hs,a);cl.subVectors(t,r);let m=hs.dot(cl),_=us.dot(cl);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(us,o);let p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return mu.subVectors(r,i),o=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(mu,o);let d=1/(p+g+f);return a=g*d,o=f*d,e.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=sc(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=Qo(t.r),this.g=Qo(t.g),this.b=Qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Xt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ve(De.r*255,0,255))*65536+Math.round(Ve(De.g*255,0,255))*256+Math.round(Ve(De.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(De.copy(this),e);let n=De.r,i=De.g,r=De.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Te){Xt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,i=De.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Wr);let n=js(ri.h,Wr.h,e),i=js(ri.s,Wr.s,e),r=js(ri.l,Wr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new It;It.NAMES=hf;var Rm=0,pi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Ss,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bn=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new D,Xr=new Ct,fn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nu&&(t.usage=this.usage),t}};var Ea=class extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wa=class extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Pm=0,cn=new Me,ul=new je,fs=new D,Qe=new Vi,Qs=new Vi,ye=new D,pe=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cf(t)?wa:Ea)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Qe.min,Qs.min),Qe.expandByPoint(ye),ye.addVectors(Qe.max,Qs.max),Qe.expandByPoint(ye)):(Qe.expandByPoint(Qs.min),Qe.expandByPoint(Qs.max))}Qe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),ye.add(fs)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new D,h[T]=new D;let u=new D,f=new D,m=new D,_=new Ct,g=new Ct,p=new Ct,d=new D,y=new D;function x(T,U,H){u.fromArray(i,T*3),f.fromArray(i,U*3),m.fromArray(i,H*3),_.fromArray(a,T*2),g.fromArray(a,U*2),p.fromArray(a,H*2),f.sub(u),m.sub(u),g.sub(_),p.sub(_);let Y=1/(g.x*p.y-p.x*g.y);isFinite(Y)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(Y),y.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(Y),c[T].add(d),c[U].add(d),c[H].add(d),h[T].add(y),h[U].add(y),h[H].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,U=S.length;T<U;++T){let H=S[T],Y=H.start,R=H.count;for(let I=Y,F=Y+R;I<F;I+=3)x(n[I+0],n[I+1],n[I+2])}let C=new D,E=new D,w=new D,L=new D;function v(T){w.fromArray(r,T*3),L.copy(w);let U=c[T];C.copy(U),C.sub(w.multiplyScalar(w.dot(U))).normalize(),E.crossVectors(L,U);let Y=E.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=Y}for(let T=0,U=S.length;T<U;++T){let H=S[T],Y=H.start,R=H.count;for(let I=Y,F=Y+R;I<F;I+=3)v(n[I+0]),v(n[I+1]),v(n[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gu=new Me,Ii=new sr,qr=new Hi,_u=new D,ds=new D,ps=new D,ms=new D,fl=new D,Yr=new D,Zr=new Ct,Jr=new Ct,$r=new Ct,xu=new D,vu=new D,yu=new D,Kr=new D,Qr=new D,we=class extends je{constructor(t=new pe,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fl.fromBufferAttribute(u,t),a?Yr.addScaledVector(fl,h):Yr.addScaledVector(fl.sub(e),h))}e.add(Yr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(qr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(qr,_u)===null||Ii.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(gu.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let p=f[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,C=x;S<C;S+=3){let E=o.getX(S),w=o.getX(S+1),L=o.getX(S+2);i=jr(this,d,t,n,c,h,u,E,w,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){let y=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);i=jr(this,a,t,n,c,h,u,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let p=f[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,C=x;S<C;S+=3){let E=S,w=S+1,L=S+2;i=jr(this,d,t,n,c,h,u,E,w,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){let y=p,x=p+1,S=p+2;i=jr(this,a,t,n,c,h,u,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Lm(s,t,e,n,i,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ui,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:s}}function jr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ds),s.getVertexPosition(l,ps),s.getVertexPosition(c,ms);let h=Lm(s,t,e,n,ds,ps,ms,Kr);if(h){i&&(Zr.fromBufferAttribute(i,o),Jr.fromBufferAttribute(i,l),$r.fromBufferAttribute(i,c),h.uv=Fi.getInterpolation(Kr,ds,ps,ms,Zr,Jr,$r,new Ct)),r&&(Zr.fromBufferAttribute(r,o),Jr.fromBufferAttribute(r,l),$r.fromBufferAttribute(r,c),h.uv1=Fi.getInterpolation(Kr,ds,ps,ms,Zr,Jr,$r,new Ct),h.uv2=h.uv1),a&&(xu.fromBufferAttribute(a,o),vu.fromBufferAttribute(a,l),yu.fromBufferAttribute(a,c),h.normal=Fi.getInterpolation(Kr,ds,ps,ms,xu,vu,yu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Fi.getNormal(ds,ps,ms,u.normal),h.face=u}return h}var Gi=class s extends pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function _(g,p,d,y,x,S,C,E,w,L,v){let T=S/w,U=C/L,H=S/2,Y=C/2,R=E/2,I=w+1,F=L+1,B=0,X=0,q=new D;for(let J=0;J<F;J++){let $=J*U-Y;for(let at=0;at<I;at++){let W=at*T-H;q[g]=W*y,q[p]=$*x,q[d]=R,c.push(q.x,q.y,q.z),q[g]=0,q[p]=0,q[d]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(at/w),u.push(1-J/L),B+=1}}for(let J=0;J<L;J++)for(let $=0;$<w;$++){let at=f+$+I*J,W=f+$+I*(J+1),Z=f+($+1)+I*(J+1),it=f+($+1)+I*J;l.push(at,W,it),l.push(W,Z,it),X+=6}o.addGroup(m,X,v),m+=X,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){let t={};for(let e=0;e<s.length;e++){let n=Rs(s[e]);for(let i in n)t[i]=n[i]}return t}function Im(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uf(s){return s.getRenderTarget()===null?s.outputColorSpace:Xt.workingColorSpace}var mi={clone:Rs,merge:ze},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Aa=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},He=class extends Aa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,_s=1,Ll=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new He(gs,_s,t,e);i.layers=this.layers,this.add(i);let r=new He(gs,_s,t,e);r.layers=this.layers,this.add(r);let a=new He(gs,_s,t,e);a.layers=this.layers,this.add(a);let o=new He(gs,_s,t,e);o.layers=this.layers,this.add(o);let l=new He(gs,_s,t,e);l.layers=this.layers,this.add(l);let c=new He(gs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ca=class extends Sn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Il=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ki?Te:un),this.texture=new Ca(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gi(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Ln});r.uniforms.tEquirect.value=e;let a=new we(i,r),o=e.minFilter;return e.minFilter===nr&&(e.minFilter=hn),new Ll(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},dl=new D,Nm=new D,Om=new kt,Wn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dl.subVectors(n,e).cross(Nm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Om.getNormalMatrix(t),i=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new Hi,ta=new D,Ra=class{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],_=i[9],g=i[10],p=i[11],d=i[12],y=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-r,f-c,p-m,S-d).normalize(),n[1].setComponents(l+r,f+c,p+m,S+d).normalize(),n[2].setComponents(l+a,f+h,p+_,S+y).normalize(),n[3].setComponents(l-a,f-h,p-_,S-y).normalize(),n[4].setComponents(l-o,f-u,p-g,S-x).normalize(),e===Xn)n[5].setComponents(l+o,f+u,p+g,S+x).normalize();else if(e===_a)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ta.x=i.normal.x>0?t.max.x:t.min.x,ta.y=i.normal.y>0?t.max.y:t.min.y,ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ff(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fm(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,m=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&_.length===0&&s.bufferSubData(u,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){let d=_[g];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var rr=class s extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,m=[],_=[],g=[],p=[];for(let d=0;d<h;d++){let y=d*f-a;for(let x=0;x<c;x++){let S=x*u-r;_.push(S,-y,0),g.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let x=y+c*d,S=y+c*(d+1),C=y+1+c*(d+1),E=y+1+c*d;m.push(x,S,E),m.push(S,C,E)}this.setIndex(m),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(g,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Km=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,og=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,X_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Bm,alphahash_pars_fragment:zm,alphamap_fragment:km,alphamap_pars_fragment:Vm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:Zm,beginnormal_vertex:Jm,bsdfs:$m,iridescence_fragment:Km,bumpmap_pars_fragment:Qm,clipping_planes_fragment:jm,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:eg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:ag,common:og,cube_uv_reflection_fragment:lg,defaultnormal_vertex:cg,displacementmap_pars_vertex:hg,displacementmap_vertex:ug,emissivemap_fragment:fg,emissivemap_pars_fragment:dg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:_g,envmap_pars_fragment:xg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Lg,envmap_vertex:yg,fog_vertex:Mg,fog_pars_vertex:Sg,fog_fragment:bg,fog_pars_fragment:Tg,gradientmap_pars_fragment:Eg,lightmap_fragment:wg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Pg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ug,lights_phong_pars_fragment:Ng,lights_physical_fragment:Og,lights_physical_pars_fragment:Fg,lights_fragment_begin:Bg,lights_fragment_maps:zg,lights_fragment_end:kg,logdepthbuf_fragment:Vg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Wg,map_fragment:Xg,map_pars_fragment:qg,map_particle_fragment:Yg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:$g,morphcolor_vertex:Kg,morphnormal_vertex:Qg,morphtarget_pars_vertex:jg,morphtarget_vertex:t_,normal_fragment_begin:e_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:f_,premultiplied_alpha_fragment:d_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:__,roughnessmap_pars_fragment:x_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:b_,skinning_pars_vertex:T_,skinning_vertex:E_,skinnormal_vertex:w_,specularmap_fragment:A_,specularmap_pars_fragment:C_,tonemapping_fragment:R_,tonemapping_pars_fragment:P_,transmission_fragment:L_,transmission_pars_fragment:I_,uv_pars_fragment:D_,uv_pars_vertex:U_,uv_vertex:N_,worldpos_vertex:O_,background_vert:F_,background_frag:B_,backgroundCube_vert:z_,backgroundCube_frag:k_,cube_vert:V_,cube_frag:H_,depth_vert:G_,depth_frag:W_,distanceRGBA_vert:X_,distanceRGBA_frag:q_,equirect_vert:Y_,equirect_frag:Z_,linedashed_vert:J_,linedashed_frag:$_,meshbasic_vert:K_,meshbasic_frag:Q_,meshlambert_vert:j_,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:f0,shadow_vert:d0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},rt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Pn={basic:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ze([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ze([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ze([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ze([rt.points,rt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ze([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ze([rt.common,rt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ze([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ze([rt.sprite,rt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:ze([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:ze([rt.lights,rt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Pn.physical={uniforms:ze([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var ea={r:0,b:0,g:0};function _0(s,t,e,n,i,r,a){let o=new It(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(p,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Oa)?(h===void 0&&(h=new we(new Gi(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:Rs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Kt,(u!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new we(new rr(2,2),new me({name:"BackgroundMaterial",uniforms:Rs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){p.getRGB(ea,uf(s)),n.buffers.color.setClear(ea.r,ea.g,ea.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function x0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(R,I,F,B,X){let q=!1;if(a){let J=g(B,F,I);c!==J&&(c=J,m(c.object)),q=d(R,B,F,X),q&&y(R,B,F,X)}else{let J=I.wireframe===!0;(c.geometry!==B.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=B.id,c.program=F.id,c.wireframe=J,q=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,L(R,I,F,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function g(R,I,F){let B=F.wireframe===!0,X=o[R.id];X===void 0&&(X={},o[R.id]=X);let q=X[I.id];q===void 0&&(q={},X[I.id]=q);let J=q[B];return J===void 0&&(J=p(f()),q[B]=J),J}function p(R){let I=[],F=[],B=[];for(let X=0;X<i;X++)I[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:B,object:R,attributes:{},index:null}}function d(R,I,F,B){let X=c.attributes,q=I.attributes,J=0,$=F.getAttributes();for(let at in $)if($[at].location>=0){let Z=X[at],it=q[at];if(it===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),Z===void 0||Z.attribute!==it||it&&Z.data!==it.data)return!0;J++}return c.attributesNum!==J||c.index!==B}function y(R,I,F,B){let X={},q=I.attributes,J=0,$=F.getAttributes();for(let at in $)if($[at].location>=0){let Z=q[at];Z===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));let it={};it.attribute=Z,Z&&Z.data&&(it.data=Z.data),X[at]=it,J++}c.attributes=X,c.attributesNum=J,c.index=B}function x(){let R=c.newAttributes;for(let I=0,F=R.length;I<F;I++)R[I]=0}function S(R){C(R,0)}function C(R,I){let F=c.newAttributes,B=c.enabledAttributes,X=c.attributeDivisors;F[R]=1,B[R]===0&&(s.enableVertexAttribArray(R),B[R]=1),X[R]!==I&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,I),X[R]=I)}function E(){let R=c.newAttributes,I=c.enabledAttributes;for(let F=0,B=I.length;F<B;F++)I[F]!==R[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function w(R,I,F,B,X,q,J){J===!0?s.vertexAttribIPointer(R,I,F,X,q):s.vertexAttribPointer(R,I,F,B,X,q)}function L(R,I,F,B){if(n.isWebGL2===!1&&(R.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=B.attributes,q=F.getAttributes(),J=I.defaultAttributeValues;for(let $ in q){let at=q[$];if(at.location>=0){let W=X[$];if(W===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){let Z=W.normalized,it=W.itemSize,pt=e.get(W);if(pt===void 0)continue;let mt=pt.buffer,wt=pt.type,nt=pt.bytesPerElement,K=n.isWebGL2===!0&&(wt===s.INT||wt===s.UNSIGNED_INT||W.gpuType===ju);if(W.isInterleavedBufferAttribute){let ht=W.data,N=ht.stride,Qt=W.offset;if(ht.isInstancedInterleavedBuffer){for(let vt=0;vt<at.locationSize;vt++)C(at.location+vt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let vt=0;vt<at.locationSize;vt++)S(at.location+vt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let vt=0;vt<at.locationSize;vt++)w(at.location+vt,it/at.locationSize,wt,Z,N*nt,(Qt+it/at.locationSize*vt)*nt,K)}else{if(W.isInstancedBufferAttribute){for(let ht=0;ht<at.locationSize;ht++)C(at.location+ht,W.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ht=0;ht<at.locationSize;ht++)S(at.location+ht);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let ht=0;ht<at.locationSize;ht++)w(at.location+ht,it/at.locationSize,wt,Z,it*nt,it/at.locationSize*ht*nt,K)}}else if(J!==void 0){let Z=J[$];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(at.location,Z);break;case 3:s.vertexAttrib3fv(at.location,Z);break;case 4:s.vertexAttrib4fv(at.location,Z);break;default:s.vertexAttrib1fv(at.location,Z)}}}}E()}function v(){H();for(let R in o){let I=o[R];for(let F in I){let B=I[F];for(let X in B)_(B[X].object),delete B[X];delete I[F]}delete o[R]}}function T(R){if(o[R.id]===void 0)return;let I=o[R.id];for(let F in I){let B=I[F];for(let X in B)_(B[X].object),delete B[X];delete I[F]}delete o[R.id]}function U(R){for(let I in o){let F=o[I];if(F[R.id]===void 0)continue;let B=F[R.id];for(let X in B)_(B[X].object),delete B[X];delete F[R.id]}}function H(){Y(),h=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:Y,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:S,disableUnusedAttributes:E}}function v0(s,t,e,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,_;if(i)m=s,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function y0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=a||t.has("OES_texture_float"),C=x&&S,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:E}}function M0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Wn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,x=y*4,S=d.clippingState||null;l.value=S,S=h(_,f,x,m);for(let C=0;C!==x;++C)S[C]=e[C];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,_){let g=u!==null?u.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let d=m+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,S=m;x!==g;++x,S+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function S0(s){let t=new WeakMap;function e(a,o){return o===bl?a.mapping=ws:o===Tl&&(a.mapping=As),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===bl||o===Tl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Il(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ar=class extends Aa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,Mu=[.125,.215,.35,.446,.526,.582],Oi=20,pl=new ar,Su=new It,ml=null,gl=0,_l=0,Ui=(1+Math.sqrt(5))/2,xs=1/Ui,bu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ui,xs),new D(0,Ui,-xs),new D(xs,0,Ui),new D(-xs,0,Ui),new D(Ui,xs,0),new D(-Ui,xs,0)],Pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,_l),t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Mn,format:yn,colorSpace:qn,depthBuffer:!1},i=Tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(r)),this._blurMaterial=T0(r,t,e)}return i}_compileMaterial(t){let e=new we(this._lodPlanes[0],t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,n,i){let o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Su),h.toneMapping=ci,h.autoClear=!1;let m=new bn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),_=new we(new Gi,m),g=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Su),g=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;na(i,y*x,d>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ws||t.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;na(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=bu[(i-1)%bu.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new we(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Oi-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);let d=[],y=0;for(let w=0;w<Oi;++w){let L=w/g,v=Math.exp(-L*L/2);d.push(v),w===0?y+=v:w<p&&(y+=2*v)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;let S=this._sizeLods[i],C=3*S*(i>x-ys?i-x+ys:0),E=4*(this._cubeSize-S);na(e,C,E,3*S,2*S),l.setRenderTarget(e),l.render(u,pl)}};function b0(s){let t=[],e=[],n=[],i=s,r=s-ys+1+Mu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ys?l=Mu[a-s+ys-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,d=1,y=new Float32Array(g*_*m),x=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let E=0;E<m;E++){let w=E%3*2/3-1,L=E>2?0:-1,v=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(v,g*_*E),x.set(f,p*_*E);let T=[E,E,E,E,E,E];S.set(T,d*_*E)}let C=new pe;C.setAttribute("position",new fn(y,g)),C.setAttribute("uv",new fn(x,p)),C.setAttribute("faceIndex",new fn(S,d)),t.push(C),i>ys&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tu(s,t,e){let n=new Ge(s,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function T0(s,t,e){let n=new Float32Array(Oi),i=new D(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Eu(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function wu(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===bl||l===Tl,h=l===ws||l===As;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Pa(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Pa(s));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function w0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function A0(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)t.remove(g[p])}f.removeEventListener("dispose",a),delete i[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],s.ARRAY_BUFFER);let m=u.morphAttributes;for(let _ in m){let g=m[_];for(let p=0,d=g.length;p<d;p++)t.update(g[p],s.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,_=u.attributes.position,g=0;if(m!==null){let y=m.array;g=m.version;for(let x=0,S=y.length;x<S;x+=3){let C=y[x+0],E=y[x+1],w=y[x+2];f.push(C,E,E,w,w,C)}}else if(_!==void 0){let y=_.array;g=_.version;for(let x=0,S=y.length/3-1;x<S;x+=3){let C=x+0,E=x+1,w=x+2;f.push(C,E,E,w,w,C)}}else return;let p=new(cf(f)?wa:Ea)(f,1);p.version=g;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function C0(s,t,e,n){let i=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,_){s.drawElements(r,_,o,m*l),e.update(_,r,1)}function u(m,_,g){if(g===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,o,m*l,g),e.update(_,r,g)}function f(m,_,g){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,o,m,0,g);let d=0;for(let y=0;y<g;y++)d+=_[y];e.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function R0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function P0(s,t){return s[0]-t[0]}function L0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function I0(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,a=new Ee,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==_){let R=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],L=0;y===!0&&(L=1),x===!0&&(L=2),S===!0&&(L=3);let v=h.attributes.position.count*L,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let U=new Float32Array(v*T*4*_),H=new Sa(U,v,T,_);H.type=oi,H.needsUpdate=!0;let Y=L*4;for(let I=0;I<_;I++){let F=C[I],B=E[I],X=w[I],q=v*T*4*I;for(let J=0;J<F.count;J++){let $=J*Y;y===!0&&(a.fromBufferAttribute(F,J),U[q+$+0]=a.x,U[q+$+1]=a.y,U[q+$+2]=a.z,U[q+$+3]=0),x===!0&&(a.fromBufferAttribute(B,J),U[q+$+4]=a.x,U[q+$+5]=a.y,U[q+$+6]=a.z,U[q+$+7]=0),S===!0&&(a.fromBufferAttribute(X,J),U[q+$+8]=a.x,U[q+$+9]=a.y,U[q+$+10]=a.z,U[q+$+11]=X.itemSize===4?a.w:1)}}g={count:_,texture:H,size:new Ct(v,T)},r.set(h,g),h.addEventListener("dispose",R)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",d),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{let m=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<m;x++){let S=_[x];S[0]=x,S[1]=f[x]}_.sort(L0);for(let x=0;x<8;x++)x<m&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(P0);let g=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let S=o[x],C=S[0],E=S[1];C!==Number.MAX_SAFE_INTEGER&&E?(g&&h.getAttribute("morphTarget"+x)!==g[C]&&h.setAttribute("morphTarget"+x,g[C]),p&&h.getAttribute("morphNormal"+x)!==p[C]&&h.setAttribute("morphNormal"+x,p[C]),i[x]=E,d+=E):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function D0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var La=class extends Sn{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:zi,h!==zi&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=ai),n===void 0&&h===Cs&&(n=Bi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},df=new Sn,pf=new La(1,1);pf.compareFunction=lf;var mf=new Sa,gf=new Pl,_f=new Ca,Au=[],Cu=[],Ru=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function Ds(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Au[i];if(r===void 0&&(r=new Float32Array(i),Au[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ba(s,t){let e=Cu[t];e===void 0&&(e=new Int32Array(t),Cu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function U0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function N0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function O0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function F0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function B0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Lu.set(n),s.uniformMatrix2fv(this.addr,!1,Lu),_e(e,n)}}function z0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Pu.set(n),s.uniformMatrix3fv(this.addr,!1,Pu),_e(e,n)}}function k0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ru.set(n),s.uniformMatrix4fv(this.addr,!1,Ru),_e(e,n)}}function V0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function G0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function W0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function X0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function J0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?pf:df;e.setTexture2D(t||r,i)}function $0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gf,i)}function K0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_f,i)}function Q0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mf,i)}function j0(s){switch(s){case 5126:return U0;case 35664:return N0;case 35665:return O0;case 35666:return F0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return V0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return Q0}}function tx(s,t){s.uniform1fv(this.addr,t)}function ex(s,t){let e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function nx(s,t){let e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function ix(s,t){let e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function sx(s,t){let e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function rx(s,t){let e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ax(s,t){let e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ox(s,t){s.uniform1iv(this.addr,t)}function lx(s,t){s.uniform2iv(this.addr,t)}function cx(s,t){s.uniform3iv(this.addr,t)}function hx(s,t){s.uniform4iv(this.addr,t)}function ux(s,t){s.uniform1uiv(this.addr,t)}function fx(s,t){s.uniform2uiv(this.addr,t)}function dx(s,t){s.uniform3uiv(this.addr,t)}function px(s,t){s.uniform4uiv(this.addr,t)}function mx(s,t,e){let n=this.cache,i=t.length,r=Ba(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||df,r[a])}function gx(s,t,e){let n=this.cache,i=t.length,r=Ba(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gf,r[a])}function _x(s,t,e){let n=this.cache,i=t.length,r=Ba(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_f,r[a])}function xx(s,t,e){let n=this.cache,i=t.length,r=Ba(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||mf,r[a])}function vx(s){switch(s){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ax;case 5124:case 35670:return ox;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return fx;case 36295:return dx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return xx}}var Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j0(e.type)}},Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vx(e.type)}},Nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},xl=/(\w+)(\])?(\[|\.)?/g;function Iu(s,t){s.seq.push(t),s.map[t.id]=t}function yx(s,t,e){let n=s.name,i=n.length;for(xl.lastIndex=0;;){let r=xl.exec(n),a=xl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Iu(e,c===void 0?new Dl(o,s,t):new Ul(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Nl(o),Iu(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);yx(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Du(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Mx=37297,Sx=0;function bx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Tx(s){let t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(s),n;switch(t===e?n="":t===ga&&e===ma?n="LinearDisplayP3ToLinearSRGB":t===ma&&e===ga&&(n="LinearSRGBToLinearDisplayP3"),s){case qn:case Fa:return[n,"LinearTransferOETF"];case Te:case ic:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Uu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+bx(s.getShaderSource(t),a)}else return i}function Ex(s,t){let e=Tx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wx(s,t){let e;switch(t){case Ip:e="Linear";break;case Dp:e="Reinhard";break;case Up:e="OptimizedCineon";break;case ec:e="ACESFilmic";break;case Op:e="AgX";break;case Np:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ax(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function Cx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ms).join(`
`)}function Rx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Px(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ms(s){return s!==""}function Nu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(Lx,Dx)}var Ix=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dx(s,t){let e=Ut[t];if(e===void 0){let n=Ix.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}var Ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(s){return s.replace(Ux,Nx)}function Nx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ox(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ap?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case As:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function zx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ku:t="ENVMAP_BLENDING_MULTIPLY";break;case Pp:t="ENVMAP_BLENDING_MIX";break;case Lp:t="ENVMAP_BLENDING_ADD";break}return t}function kx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ox(e),c=Fx(e),h=Bx(e),u=zx(e),f=kx(e),m=e.isWebGL2?"":Ax(e),_=Cx(e),g=Rx(r),p=i.createProgram(),d,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),y.length>0&&(y+=`
`)):(d=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),y=[m,Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ci?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Ex("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Ol(a),a=Nu(a,e),a=Ou(a,e),o=Ol(o),o=Nu(o,e),o=Ou(o,e),a=Fu(a),o=Fu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let S=x+d+a,C=x+y+o,E=Du(i,i.VERTEX_SHADER,S),w=Du(i,i.FRAGMENT_SHADER,C);i.attachShader(p,E),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function L(H){if(s.debug.checkShaderErrors){let Y=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(E).trim(),I=i.getShaderInfoLog(w).trim(),F=!0,B=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,E,w);else{let X=Uu(i,E,"vertex"),q=Uu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+X+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(R===""||I==="")&&(B=!1);B&&(H.diagnostics={runnable:F,programLog:Y,vertexShader:{log:R,prefix:d},fragmentShader:{log:I,prefix:y}})}i.deleteShader(E),i.deleteShader(w),v=new Es(i,p),T=Px(i,p)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(p,Mx)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=w,this}var Hx=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bl(t),e.set(t,n)),n}},Bl=class{constructor(t){this.id=Hx++,this.code=t,this.usedTimes=0}};function Gx(s,t,e,n,i,r,a){let o=new Ta,l=new Fl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function p(v,T,U,H,Y){let R=H.fog,I=Y.geometry,F=v.isMeshStandardMaterial?H.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||F),X=B&&B.mapping===Oa?B.image.height:null,q=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=J!==void 0?J.length:0,at=0;I.morphAttributes.position!==void 0&&(at=1),I.morphAttributes.normal!==void 0&&(at=2),I.morphAttributes.color!==void 0&&(at=3);let W,Z,it,pt;if(q){let Ue=Pn[q];W=Ue.vertexShader,Z=Ue.fragmentShader}else W=v.vertexShader,Z=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),pt=l.getFragmentShaderID(v);let mt=s.getRenderTarget(),wt=Y.isInstancedMesh===!0,nt=Y.isBatchedMesh===!0,K=!!v.map,ht=!!v.matcap,N=!!B,Qt=!!v.aoMap,vt=!!v.lightMap,Rt=!!v.bumpMap,gt=!!v.normalMap,te=!!v.displacementMap,Nt=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,k=v.anisotropy>0,tt=v.clearcoat>0,j=v.iridescence>0,et=v.sheen>0,_t=v.transmission>0,ct=k&&!!v.anisotropyMap,ft=tt&&!!v.clearcoatMap,bt=tt&&!!v.clearcoatNormalMap,Ot=tt&&!!v.clearcoatRoughnessMap,Q=j&&!!v.iridescenceMap,Wt=j&&!!v.iridescenceThicknessMap,Vt=et&&!!v.sheenColorMap,At=et&&!!v.sheenRoughnessMap,yt=!!v.specularMap,dt=!!v.specularColorMap,Dt=!!v.specularIntensityMap,Gt=_t&&!!v.transmissionMap,re=_t&&!!v.thicknessMap,Bt=!!v.gradientMap,st=!!v.alphaMap,P=v.alphaTest>0,ot=!!v.alphaHash,lt=!!v.extensions,Tt=!!I.attributes.uv1,Mt=!!I.attributes.uv2,Zt=!!I.attributes.uv3,Jt=ci;return v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Jt=s.toneMapping),{isWebGL2:h,shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:Z,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:pt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:nt,instancing:wt,instancingColor:wt&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:qn,map:K,matcap:ht,envMap:N,envMapMode:N&&B.mapping,envMapCubeUVHeight:X,aoMap:Qt,lightMap:vt,bumpMap:Rt,normalMap:gt,displacementMap:f&&te,emissiveMap:Nt,normalMapObjectSpace:gt&&v.normalMapType===Jp,normalMapTangentSpace:gt&&v.normalMapType===Zp,metalnessMap:A,roughnessMap:M,anisotropy:k,anisotropyMap:ct,clearcoat:tt,clearcoatMap:ft,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ot,iridescence:j,iridescenceMap:Q,iridescenceThicknessMap:Wt,sheen:et,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:yt,specularColorMap:dt,specularIntensityMap:Dt,transmission:_t,transmissionMap:Gt,thicknessMap:re,gradientMap:Bt,opaque:v.transparent===!1&&v.blending===Ss,alphaMap:st,alphaTest:P,alphaHash:ot,combine:v.combine,mapUv:K&&g(v.map.channel),aoMapUv:Qt&&g(v.aoMap.channel),lightMapUv:vt&&g(v.lightMap.channel),bumpMapUv:Rt&&g(v.bumpMap.channel),normalMapUv:gt&&g(v.normalMap.channel),displacementMapUv:te&&g(v.displacementMap.channel),emissiveMapUv:Nt&&g(v.emissiveMap.channel),metalnessMapUv:A&&g(v.metalnessMap.channel),roughnessMapUv:M&&g(v.roughnessMap.channel),anisotropyMapUv:ct&&g(v.anisotropyMap.channel),clearcoatMapUv:ft&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:bt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(v.sheenRoughnessMap.channel),specularMapUv:yt&&g(v.specularMap.channel),specularColorMapUv:dt&&g(v.specularColorMap.channel),specularIntensityMapUv:Dt&&g(v.specularIntensityMap.channel),transmissionMapUv:Gt&&g(v.transmissionMap.channel),thicknessMapUv:re&&g(v.thicknessMap.channel),alphaMapUv:st&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(gt||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Tt,vertexUv2s:Mt,vertexUv3s:Zt,pointsUvs:Y.isPoints===!0&&!!I.attributes.uv&&(K||st),fog:!!R,useFog:v.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:at,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:K&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===Kt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xn,flipSided:v.side===Ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:lt&&v.extensions.derivatives===!0,extensionFragDepth:lt&&v.extensions.fragDepth===!0,extensionDrawBuffers:lt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(T,v),x(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function S(v){let T=_[v.type],U;if(T){let H=Pn[T];U=mi.clone(H.uniforms)}else U=v.uniforms;return U}function C(v,T){let U;for(let H=0,Y=c.length;H<Y;H++){let R=c[H];if(R.cacheKey===T){U=R,++U.usedTimes;break}}return U===void 0&&(U=new Vx(s,T,v,r),c.push(U)),U}function E(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:L}}function Wx(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Xx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ku(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,m,_,g,p){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=p),t++,d}function o(u,f,m,_,g,p){let d=a(u,f,m,_,g,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(u,f,m,_,g,p){let d=a(u,f,m,_,g,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Xx),n.length>1&&n.sort(f||zu),i.length>1&&i.sort(f||zu)}function h(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function qx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new ku,s.set(n,[a])):i>=r.length?(a=new ku,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Yx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new It};break;case"SpotLight":e={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Zx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Jx=0;function $x(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Kx(s,t){let e=new Yx,n=Zx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,a=new Me,o=new Me;function l(h,u){let f=0,m=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,p=0,d=0,y=0,x=0,S=0,C=0,E=0,w=0,L=0,v=0;h.sort($x);let T=u===!0?Math.PI:1;for(let H=0,Y=h.length;H<Y;H++){let R=h[H],I=R.color,F=R.intensity,B=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=I.r*F*T,m+=I.g*F*T,_+=I.b*F*T;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],F);v++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){let J=R.shadow,$=n.get(R);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=R.shadow.matrix,S++}i.directional[g]=q,g++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(I).multiplyScalar(F*T),q.distance=B,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[d]=q;let J=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,J.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[d]=J.matrix,R.castShadow){let $=n.get(R);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.spotShadow[d]=$,i.spotShadowMap[d]=X,E++}d++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(I).multiplyScalar(F),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=q,y++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*T),q.distance=R.distance,q.decay=R.decay,R.castShadow){let J=R.shadow,$=n.get(R);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=R.shadow.matrix,C++}i.point[p]=q,p++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(F*T),q.groundColor.copy(R.groundColor).multiplyScalar(F*T),i.hemi[x]=q,x++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;let U=i.hash;(U.directionalLength!==g||U.pointLength!==p||U.spotLength!==d||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==S||U.numPointShadows!==C||U.numSpotShadows!==E||U.numSpotMaps!==w||U.numLightProbes!==v)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=y,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=v,U.directionalLength=g,U.pointLength=p,U.spotLength=d,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=S,U.numPointShadows=C,U.numSpotShadows=E,U.numSpotMaps=w,U.numLightProbes=v,i.version=Jx++)}function c(h,u){let f=0,m=0,_=0,g=0,p=0,d=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let S=h[y];if(S.isDirectionalLight){let C=i.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(S.isSpotLight){let C=i.spot[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),_++}else if(S.isRectAreaLight){let C=i.rectArea[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let C=i.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let C=i.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function Vu(s,t){let e=new Kx(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qx(s,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Vu(s,t),e.set(r,[l])):a>=o.length?(l=new Vu(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var zl=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kl=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ev(s,t,e){let n=new Ra,i=new Ct,r=new Ct,a=new Ee,o=new zl({depthPacking:Yp}),l=new kl,c={},h=e.maxTextureSize,u={[ui]:Ze,[Ze]:ui,[xn]:xn},f=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:jx,fragmentShader:tv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new pe;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new we(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let d=this.type;this.render=function(E,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let v=s.getRenderTarget(),T=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Ln),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=d!==Gn&&this.type===Gn,R=d===Gn&&this.type!==Gn;for(let I=0,F=E.length;I<F;I++){let B=E[I],X=B.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let q=X.getFrameExtents();if(i.multiply(q),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,X.mapSize.y=r.y)),X.map===null||Y===!0||R===!0){let $=this.type!==Gn?{minFilter:ke,magFilter:ke}:{};X.map!==null&&X.map.dispose(),X.map=new Ge(i.x,i.y,$),X.map.texture.name=B.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let J=X.getViewportCount();for(let $=0;$<J;$++){let at=X.getViewport($);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),H.viewport(a),X.updateMatrices(B,$),n=X.getFrustum(),S(w,L,X.camera,B,this.type)}X.isPointLightShadow!==!0&&this.type===Gn&&y(X,L),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(v,T,U)};function y(E,w){let L=t.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ge(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,L,f,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,L,m,g,null)}function x(E,w,L,v){let T=null,U=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)T=U;else if(T=L.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=T.uuid,Y=w.uuid,R=c[H];R===void 0&&(R={},c[H]=R);let I=R[Y];I===void 0&&(I=T.clone(),R[Y]=I,w.addEventListener("dispose",C)),T=I}if(T.visible=w.visible,T.wireframe=w.wireframe,v===Gn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let H=s.properties.get(T);H.light=L}return T}function S(E,w,L,v,T){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),R=E.material;if(Array.isArray(R)){let I=Y.groups;for(let F=0,B=I.length;F<B;F++){let X=I[F],q=R[X.materialIndex];if(q&&q.visible){let J=x(E,q,v,T);E.onBeforeShadow(s,E,w,L,Y,J,X),s.renderBufferDirect(L,null,Y,J,E,X),E.onAfterShadow(s,E,w,L,Y,J,X)}}}else if(R.visible){let I=x(E,R,v,T);E.onBeforeShadow(s,E,w,L,Y,I,null),s.renderBufferDirect(L,null,Y,I,E,null),E.onAfterShadow(s,E,w,L,Y,I,null)}}let H=E.children;for(let Y=0,R=H.length;Y<R;Y++)S(H[Y],w,L,v,T)}function C(E){E.target.removeEventListener("dispose",C);for(let L in c){let v=c[L],T=E.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function nv(s,t,e){let n=e.isWebGL2;function i(){let P=!1,ot=new Ee,lt=null,Tt=new Ee(0,0,0,0);return{setMask:function(Mt){lt!==Mt&&!P&&(s.colorMask(Mt,Mt,Mt,Mt),lt=Mt)},setLocked:function(Mt){P=Mt},setClear:function(Mt,Zt,Jt,xe,Ue){Ue===!0&&(Mt*=xe,Zt*=xe,Jt*=xe),ot.set(Mt,Zt,Jt,xe),Tt.equals(ot)===!1&&(s.clearColor(Mt,Zt,Jt,xe),Tt.copy(ot))},reset:function(){P=!1,lt=null,Tt.set(-1,0,0,0)}}}function r(){let P=!1,ot=null,lt=null,Tt=null;return{setTest:function(Mt){Mt?nt(s.DEPTH_TEST):K(s.DEPTH_TEST)},setMask:function(Mt){ot!==Mt&&!P&&(s.depthMask(Mt),ot=Mt)},setFunc:function(Mt){if(lt!==Mt){switch(Mt){case bp:s.depthFunc(s.NEVER);break;case Tp:s.depthFunc(s.ALWAYS);break;case Ep:s.depthFunc(s.LESS);break;case ua:s.depthFunc(s.LEQUAL);break;case wp:s.depthFunc(s.EQUAL);break;case Ap:s.depthFunc(s.GEQUAL);break;case Cp:s.depthFunc(s.GREATER);break;case Rp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=Mt}},setLocked:function(Mt){P=Mt},setClear:function(Mt){Tt!==Mt&&(s.clearDepth(Mt),Tt=Mt)},reset:function(){P=!1,ot=null,lt=null,Tt=null}}}function a(){let P=!1,ot=null,lt=null,Tt=null,Mt=null,Zt=null,Jt=null,xe=null,Ue=null;return{setTest:function($t){P||($t?nt(s.STENCIL_TEST):K(s.STENCIL_TEST))},setMask:function($t){ot!==$t&&!P&&(s.stencilMask($t),ot=$t)},setFunc:function($t,Ne,En){(lt!==$t||Tt!==Ne||Mt!==En)&&(s.stencilFunc($t,Ne,En),lt=$t,Tt=Ne,Mt=En)},setOp:function($t,Ne,En){(Zt!==$t||Jt!==Ne||xe!==En)&&(s.stencilOp($t,Ne,En),Zt=$t,Jt=Ne,xe=En)},setLocked:function($t){P=$t},setClear:function($t){Ue!==$t&&(s.clearStencil($t),Ue=$t)},reset:function(){P=!1,ot=null,lt=null,Tt=null,Mt=null,Zt=null,Jt=null,xe=null,Ue=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},m={},_=new WeakMap,g=[],p=null,d=!1,y=null,x=null,S=null,C=null,E=null,w=null,L=null,v=new It(0,0,0),T=0,U=!1,H=null,Y=null,R=null,I=null,F=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,q=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=q>=2);let $=null,at={},W=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),it=new Ee().fromArray(W),pt=new Ee().fromArray(Z);function mt(P,ot,lt,Tt){let Mt=new Uint8Array(4),Zt=s.createTexture();s.bindTexture(P,Zt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<lt;Jt++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ot,0,s.RGBA,1,1,Tt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(ot+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return Zt}let wt={};wt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(wt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),nt(s.DEPTH_TEST),l.setFunc(ua),Nt(!1),A(Mh),nt(s.CULL_FACE),gt(Ln);function nt(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function K(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function ht(P,ot){return m[P]!==ot?(s.bindFramebuffer(P,ot),m[P]=ot,n&&(P===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ot),P===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ot)),!0):!1}function N(P,ot){let lt=g,Tt=!1;if(P)if(lt=_.get(ot),lt===void 0&&(lt=[],_.set(ot,lt)),P.isWebGLMultipleRenderTargets){let Mt=P.texture;if(lt.length!==Mt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let Zt=0,Jt=Mt.length;Zt<Jt;Zt++)lt[Zt]=s.COLOR_ATTACHMENT0+Zt;lt.length=Mt.length,Tt=!0}}else lt[0]!==s.COLOR_ATTACHMENT0&&(lt[0]=s.COLOR_ATTACHMENT0,Tt=!0);else lt[0]!==s.BACK&&(lt[0]=s.BACK,Tt=!0);Tt&&(e.isWebGL2?s.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Qt(P){return p!==P?(s.useProgram(P),p=P,!0):!1}let vt={[Ni]:s.FUNC_ADD,[lp]:s.FUNC_SUBTRACT,[cp]:s.FUNC_REVERSE_SUBTRACT};if(n)vt[Th]=s.MIN,vt[Eh]=s.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(vt[Th]=P.MIN_EXT,vt[Eh]=P.MAX_EXT)}let Rt={[hp]:s.ZERO,[up]:s.ONE,[fp]:s.SRC_COLOR,[Ml]:s.SRC_ALPHA,[xp]:s.SRC_ALPHA_SATURATE,[gp]:s.DST_COLOR,[pp]:s.DST_ALPHA,[dp]:s.ONE_MINUS_SRC_COLOR,[Sl]:s.ONE_MINUS_SRC_ALPHA,[_p]:s.ONE_MINUS_DST_COLOR,[mp]:s.ONE_MINUS_DST_ALPHA,[vp]:s.CONSTANT_COLOR,[yp]:s.ONE_MINUS_CONSTANT_COLOR,[Mp]:s.CONSTANT_ALPHA,[Sp]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(P,ot,lt,Tt,Mt,Zt,Jt,xe,Ue,$t){if(P===Ln){d===!0&&(K(s.BLEND),d=!1);return}if(d===!1&&(nt(s.BLEND),d=!0),P!==op){if(P!==y||$t!==U){if((x!==Ni||E!==Ni)&&(s.blendEquation(s.FUNC_ADD),x=Ni,E=Ni),$t)switch(P){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ha:s.blendFunc(s.ONE,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ha:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,w=null,L=null,v.set(0,0,0),T=0,y=P,U=$t}return}Mt=Mt||ot,Zt=Zt||lt,Jt=Jt||Tt,(ot!==x||Mt!==E)&&(s.blendEquationSeparate(vt[ot],vt[Mt]),x=ot,E=Mt),(lt!==S||Tt!==C||Zt!==w||Jt!==L)&&(s.blendFuncSeparate(Rt[lt],Rt[Tt],Rt[Zt],Rt[Jt]),S=lt,C=Tt,w=Zt,L=Jt),(xe.equals(v)===!1||Ue!==T)&&(s.blendColor(xe.r,xe.g,xe.b,Ue),v.copy(xe),T=Ue),y=P,U=!1}function te(P,ot){P.side===xn?K(s.CULL_FACE):nt(s.CULL_FACE);let lt=P.side===Ze;ot&&(lt=!lt),Nt(lt),P.blending===Ss&&P.transparent===!1?gt(Ln):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Tt=P.stencilWrite;c.setTest(Tt),Tt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):K(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){H!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),H=P)}function A(P){P!==sp?(nt(s.CULL_FACE),P!==Y&&(P===Mh?s.cullFace(s.BACK):P===rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):K(s.CULL_FACE),Y=P}function M(P){P!==R&&(X&&s.lineWidth(P),R=P)}function k(P,ot,lt){P?(nt(s.POLYGON_OFFSET_FILL),(I!==ot||F!==lt)&&(s.polygonOffset(ot,lt),I=ot,F=lt)):K(s.POLYGON_OFFSET_FILL)}function tt(P){P?nt(s.SCISSOR_TEST):K(s.SCISSOR_TEST)}function j(P){P===void 0&&(P=s.TEXTURE0+B-1),$!==P&&(s.activeTexture(P),$=P)}function et(P,ot,lt){lt===void 0&&($===null?lt=s.TEXTURE0+B-1:lt=$);let Tt=at[lt];Tt===void 0&&(Tt={type:void 0,texture:void 0},at[lt]=Tt),(Tt.type!==P||Tt.texture!==ot)&&($!==lt&&(s.activeTexture(lt),$=lt),s.bindTexture(P,ot||wt[P]),Tt.type=P,Tt.texture=ot)}function _t(){let P=at[$];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(P){it.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function Gt(P){pt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),pt.copy(P))}function re(P,ot){let lt=u.get(ot);lt===void 0&&(lt=new WeakMap,u.set(ot,lt));let Tt=lt.get(P);Tt===void 0&&(Tt=s.getUniformBlockIndex(ot,P.name),lt.set(P,Tt))}function Bt(P,ot){let Tt=u.get(ot).get(P);h.get(ot)!==Tt&&(s.uniformBlockBinding(ot,Tt,P.__bindingPointIndex),h.set(ot,Tt))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},$=null,at={},m={},_=new WeakMap,g=[],p=null,d=!1,y=null,x=null,S=null,C=null,E=null,w=null,L=null,v=new It(0,0,0),T=0,U=!1,H=null,Y=null,R=null,I=null,F=null,it.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:nt,disable:K,bindFramebuffer:ht,drawBuffers:N,useProgram:Qt,setBlending:gt,setMaterial:te,setFlipSided:Nt,setCullFace:A,setLineWidth:M,setPolygonOffset:k,setScissorTest:tt,activeTexture:j,bindTexture:et,unbindTexture:_t,compressedTexImage2D:ct,compressedTexImage3D:ft,texImage2D:yt,texImage3D:dt,updateUBOMapping:re,uniformBlockBinding:Bt,texStorage2D:Vt,texStorage3D:At,texSubImage2D:bt,texSubImage3D:Ot,compressedTexSubImage2D:Q,compressedTexSubImage3D:Wt,scissor:Dt,viewport:Gt,reset:st}}function iv(s,t,e,n,i,r,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return m?new OffscreenCanvas(A,M):va("canvas")}function g(A,M,k,tt){let j=1;if((A.width>tt||A.height>tt)&&(j=tt/Math.max(A.width,A.height)),j<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let et=M?xa:Math.floor,_t=et(j*A.width),ct=et(j*A.height);u===void 0&&(u=_(_t,ct));let ft=k?_(_t,ct):u;return ft.width=_t,ft.height=ct,ft.getContext("2d").drawImage(A,0,0,_t,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_t+"x"+ct+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Cl(A.width)&&Cl(A.height)}function d(A){return o?!1:A.wrapS!==vn||A.wrapT!==vn||A.minFilter!==ke&&A.minFilter!==hn}function y(A,M){return A.generateMipmaps&&M&&A.minFilter!==ke&&A.minFilter!==hn}function x(A){s.generateMipmap(A)}function S(A,M,k,tt,j=!1){if(o===!1)return M;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=M;if(M===s.RED&&(k===s.FLOAT&&(et=s.R32F),k===s.HALF_FLOAT&&(et=s.R16F),k===s.UNSIGNED_BYTE&&(et=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.R8UI),k===s.UNSIGNED_SHORT&&(et=s.R16UI),k===s.UNSIGNED_INT&&(et=s.R32UI),k===s.BYTE&&(et=s.R8I),k===s.SHORT&&(et=s.R16I),k===s.INT&&(et=s.R32I)),M===s.RG&&(k===s.FLOAT&&(et=s.RG32F),k===s.HALF_FLOAT&&(et=s.RG16F),k===s.UNSIGNED_BYTE&&(et=s.RG8)),M===s.RGBA){let _t=j?pa:Xt.getTransfer(tt);k===s.FLOAT&&(et=s.RGBA32F),k===s.HALF_FLOAT&&(et=s.RGBA16F),k===s.UNSIGNED_BYTE&&(et=_t===Kt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function C(A,M,k){return y(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==ke&&A.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){return A===ke||A===wh||A===Wo?s.NEAREST:s.LINEAR}function w(A){let M=A.target;M.removeEventListener("dispose",w),v(M),M.isVideoTexture&&h.delete(M)}function L(A){let M=A.target;M.removeEventListener("dispose",L),U(M)}function v(A){let M=n.get(A);if(M.__webglInit===void 0)return;let k=A.source,tt=f.get(k);if(tt){let j=tt[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(A),Object.keys(tt).length===0&&f.delete(k)}n.remove(A)}function T(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let k=A.source,tt=f.get(k);delete tt[M.__cacheKey],a.memory.textures--}function U(A){let M=A.texture,k=n.get(A),tt=n.get(M);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(k.__webglFramebuffer[j]))for(let et=0;et<k.__webglFramebuffer[j].length;et++)s.deleteFramebuffer(k.__webglFramebuffer[j][et]);else s.deleteFramebuffer(k.__webglFramebuffer[j]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[j])}else{if(Array.isArray(k.__webglFramebuffer))for(let j=0;j<k.__webglFramebuffer.length;j++)s.deleteFramebuffer(k.__webglFramebuffer[j]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let j=0;j<k.__webglColorRenderbuffer.length;j++)k.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[j]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let j=0,et=M.length;j<et;j++){let _t=n.get(M[j]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(M[j])}n.remove(M),n.remove(A)}let H=0;function Y(){H=0}function R(){let A=H;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),H+=1,A}function I(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function F(A,M){let k=n.get(A);if(A.isVideoTexture&&te(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(k,A,M);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function B(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){it(k,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function X(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){it(k,A,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function q(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){pt(k,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let J={[El]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[wl]:s.MIRRORED_REPEAT},$={[ke]:s.NEAREST,[wh]:s.NEAREST_MIPMAP_NEAREST,[Wo]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[Fp]:s.LINEAR_MIPMAP_NEAREST,[nr]:s.LINEAR_MIPMAP_LINEAR},at={[$p]:s.NEVER,[nm]:s.ALWAYS,[Kp]:s.LESS,[lf]:s.LEQUAL,[Qp]:s.EQUAL,[em]:s.GEQUAL,[jp]:s.GREATER,[tm]:s.NOTEQUAL};function W(A,M,k){if(k?(s.texParameteri(A,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,J[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,$[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,$[M.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==vn||M.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,E(M.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==ke&&M.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ke||M.minFilter!==Wo&&M.minFilter!==nr||M.type===oi&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Mn&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));let tt=M.source,j=f.get(tt);j===void 0&&(j={},f.set(tt,j));let et=I(M);if(et!==A.__cacheKey){j[et]===void 0&&(j[et]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[et].usedTimes++;let _t=j[A.__cacheKey];_t!==void 0&&(j[A.__cacheKey].usedTimes--,_t.usedTimes===0&&T(M)),A.__cacheKey=et,A.__webglTexture=j[et].texture}return k}function it(A,M,k){let tt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=s.TEXTURE_3D);let j=Z(A,M),et=M.source;e.bindTexture(tt,A.__webglTexture,s.TEXTURE0+k);let _t=n.get(et);if(et.version!==_t.__version||j===!0){e.activeTexture(s.TEXTURE0+k);let ct=Xt.getPrimaries(Xt.workingColorSpace),ft=M.colorSpace===un?null:Xt.getPrimaries(M.colorSpace),bt=M.colorSpace===un||ct===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Ot=d(M)&&p(M.image)===!1,Q=g(M.image,Ot,!1,i.maxTextureSize);Q=Nt(M,Q);let Wt=p(Q)||o,Vt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),yt=S(M.internalFormat,Vt,At,M.colorSpace,M.isVideoTexture);W(tt,M,Wt);let dt,Dt=M.mipmaps,Gt=o&&M.isVideoTexture!==!0&&yt!==af,re=_t.__version===void 0||j===!0,Bt=C(M,Q,Wt);if(M.isDepthTexture)yt=s.DEPTH_COMPONENT,o?M.type===oi?yt=s.DEPTH_COMPONENT32F:M.type===ai?yt=s.DEPTH_COMPONENT24:M.type===Bi?yt=s.DEPTH24_STENCIL8:yt=s.DEPTH_COMPONENT16:M.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zi&&yt===s.DEPTH_COMPONENT&&M.type!==nc&&M.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ai,At=r.convert(M.type)),M.format===Cs&&yt===s.DEPTH_COMPONENT&&(yt=s.DEPTH_STENCIL,M.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Bi,At=r.convert(M.type))),re&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,yt,Q.width,Q.height,0,Vt,At,null));else if(M.isDataTexture)if(Dt.length>0&&Wt){Gt&&re&&e.texStorage2D(s.TEXTURE_2D,Bt,yt,Dt[0].width,Dt[0].height);for(let st=0,P=Dt.length;st<P;st++)dt=Dt[st],Gt?e.texSubImage2D(s.TEXTURE_2D,st,0,0,dt.width,dt.height,Vt,At,dt.data):e.texImage2D(s.TEXTURE_2D,st,yt,dt.width,dt.height,0,Vt,At,dt.data);M.generateMipmaps=!1}else Gt?(re&&e.texStorage2D(s.TEXTURE_2D,Bt,yt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,Vt,At,Q.data)):e.texImage2D(s.TEXTURE_2D,0,yt,Q.width,Q.height,0,Vt,At,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,yt,Dt[0].width,Dt[0].height,Q.depth);for(let st=0,P=Dt.length;st<P;st++)dt=Dt[st],M.format!==yn?Vt!==null?Gt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,Q.depth,Vt,dt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,yt,dt.width,dt.height,Q.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,Q.depth,Vt,At,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,yt,dt.width,dt.height,Q.depth,0,Vt,At,dt.data)}else{Gt&&re&&e.texStorage2D(s.TEXTURE_2D,Bt,yt,Dt[0].width,Dt[0].height);for(let st=0,P=Dt.length;st<P;st++)dt=Dt[st],M.format!==yn?Vt!==null?Gt?e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,dt.width,dt.height,Vt,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(s.TEXTURE_2D,st,0,0,dt.width,dt.height,Vt,At,dt.data):e.texImage2D(s.TEXTURE_2D,st,yt,dt.width,dt.height,0,Vt,At,dt.data)}else if(M.isDataArrayTexture)Gt?(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,yt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Vt,At,Q.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,Vt,At,Q.data);else if(M.isData3DTexture)Gt?(re&&e.texStorage3D(s.TEXTURE_3D,Bt,yt,Q.width,Q.height,Q.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Vt,At,Q.data)):e.texImage3D(s.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,Vt,At,Q.data);else if(M.isFramebufferTexture){if(re)if(Gt)e.texStorage2D(s.TEXTURE_2D,Bt,yt,Q.width,Q.height);else{let st=Q.width,P=Q.height;for(let ot=0;ot<Bt;ot++)e.texImage2D(s.TEXTURE_2D,ot,yt,st,P,0,Vt,At,null),st>>=1,P>>=1}}else if(Dt.length>0&&Wt){Gt&&re&&e.texStorage2D(s.TEXTURE_2D,Bt,yt,Dt[0].width,Dt[0].height);for(let st=0,P=Dt.length;st<P;st++)dt=Dt[st],Gt?e.texSubImage2D(s.TEXTURE_2D,st,0,0,Vt,At,dt):e.texImage2D(s.TEXTURE_2D,st,yt,Vt,At,dt);M.generateMipmaps=!1}else Gt?(re&&e.texStorage2D(s.TEXTURE_2D,Bt,yt,Q.width,Q.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,At,Q)):e.texImage2D(s.TEXTURE_2D,0,yt,Vt,At,Q);y(M,Wt)&&x(tt),_t.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pt(A,M,k){if(M.image.length!==6)return;let tt=Z(A,M),j=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);let et=n.get(j);if(j.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);let _t=Xt.getPrimaries(Xt.workingColorSpace),ct=M.colorSpace===un?null:Xt.getPrimaries(M.colorSpace),ft=M.colorSpace===un||_t===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let bt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ot=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let st=0;st<6;st++)!bt&&!Ot?Q[st]=g(M.image[st],!1,!0,i.maxCubemapSize):Q[st]=Ot?M.image[st].image:M.image[st],Q[st]=Nt(M,Q[st]);let Wt=Q[0],Vt=p(Wt)||o,At=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),dt=S(M.internalFormat,At,yt,M.colorSpace),Dt=o&&M.isVideoTexture!==!0,Gt=et.__version===void 0||tt===!0,re=C(M,Wt,Vt);W(s.TEXTURE_CUBE_MAP,M,Vt);let Bt;if(bt){Dt&&Gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,re,dt,Wt.width,Wt.height);for(let st=0;st<6;st++){Bt=Q[st].mipmaps;for(let P=0;P<Bt.length;P++){let ot=Bt[P];M.format!==yn?At!==null?Dt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,0,0,ot.width,ot.height,At,yt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P,dt,ot.width,ot.height,0,At,yt,ot.data)}}}else{Bt=M.mipmaps,Dt&&Gt&&(Bt.length>0&&re++,e.texStorage2D(s.TEXTURE_CUBE_MAP,re,dt,Q[0].width,Q[0].height));for(let st=0;st<6;st++)if(Ot){Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Q[st].width,Q[st].height,At,yt,Q[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,dt,Q[st].width,Q[st].height,0,At,yt,Q[st].data);for(let P=0;P<Bt.length;P++){let lt=Bt[P].image[st].image;Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,lt.width,lt.height,At,yt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,dt,lt.width,lt.height,0,At,yt,lt.data)}}else{Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,At,yt,Q[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,dt,At,yt,Q[st]);for(let P=0;P<Bt.length;P++){let ot=Bt[P];Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,0,0,At,yt,ot.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,P+1,dt,At,yt,ot.image[st])}}}y(M,Vt)&&x(s.TEXTURE_CUBE_MAP),et.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,k,tt,j,et){let _t=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),ft=S(k.internalFormat,_t,ct,k.colorSpace);if(!n.get(M).__hasExternalTextures){let Ot=Math.max(1,M.width>>et),Q=Math.max(1,M.height>>et);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,et,ft,Ot,Q,M.depth,0,_t,ct,null):e.texImage2D(j,et,ft,Ot,Q,0,_t,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),gt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,j,n.get(k).__webglTexture,0,Rt(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,j,n.get(k).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(A,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let tt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||gt(M)){let j=M.depthTexture;j&&j.isDepthTexture&&(j.type===oi?tt=s.DEPTH_COMPONENT32F:j.type===ai&&(tt=s.DEPTH_COMPONENT24));let et=Rt(M);gt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,tt,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,tt,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){let tt=Rt(M);k&&gt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):gt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let tt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0;j<tt.length;j++){let et=tt[j],_t=r.convert(et.format,et.colorSpace),ct=r.convert(et.type),ft=S(et.internalFormat,_t,ct,et.colorSpace),bt=Rt(M);k&&gt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,ft,M.width,M.height):gt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);let tt=n.get(M.depthTexture).__webglTexture,j=Rt(M);if(M.depthTexture.format===zi)gt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Cs)gt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function K(A){let M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");nt(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=s.createRenderbuffer(),wt(M.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),wt(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(A,M,k){let tt=n.get(A);M!==void 0&&mt(tt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&K(A)}function N(A){let M=A.texture,k=n.get(A),tt=n.get(M);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=M.version,a.memory.textures++);let j=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,_t=p(A)||o;if(j){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let ft=0;ft<M.mipmaps.length;ft++)k.__webglFramebuffer[ct][ft]=s.createFramebuffer()}else k.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)k.__webglFramebuffer[ct]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(et)if(i.drawBuffers){let ct=A.texture;for(let ft=0,bt=ct.length;ft<bt;ft++){let Ot=n.get(ct[ft]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&gt(A)===!1){let ct=et?M:[M];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ft=0;ft<ct.length;ft++){let bt=ct[ft];k.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ft]);let Ot=r.convert(bt.format,bt.colorSpace),Q=r.convert(bt.type),Wt=S(bt.internalFormat,Ot,Q,bt.colorSpace,A.isXRRenderTarget===!0),Vt=Rt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Wt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,k.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),wt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),W(s.TEXTURE_CUBE_MAP,M,_t);for(let ct=0;ct<6;ct++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)mt(k.__webglFramebuffer[ct][ft],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else mt(k.__webglFramebuffer[ct],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(M,_t)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ct=A.texture;for(let ft=0,bt=ct.length;ft<bt;ft++){let Ot=ct[ft],Q=n.get(Ot);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),W(s.TEXTURE_2D,Ot,_t),mt(k.__webglFramebuffer,A,Ot,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),y(Ot,_t)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ct=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,tt.__webglTexture),W(ct,M,_t),o&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)mt(k.__webglFramebuffer[ft],A,M,s.COLOR_ATTACHMENT0,ct,ft);else mt(k.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,ct,0);y(M,_t)&&x(ct),e.unbindTexture()}A.depthBuffer&&K(A)}function Qt(A){let M=p(A)||o,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,j=k.length;tt<j;tt++){let et=k[tt];if(y(et,M)){let _t=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(et).__webglTexture;e.bindTexture(_t,ct),x(_t),e.unbindTexture()}}}function vt(A){if(o&&A.samples>0&&gt(A)===!1){let M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,tt=A.height,j=s.COLOR_BUFFER_BIT,et=[],_t=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(A),ft=A.isWebGLMultipleRenderTargets===!0;if(ft)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){et.push(s.COLOR_ATTACHMENT0+bt),A.depthBuffer&&et.push(_t);let Ot=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ot===!1&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ft&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_t]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_t])),ft){let Q=n.get(M[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,k,tt,0,0,k,tt,j,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]);let Ot=n.get(M[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Rt(A){return Math.min(i.maxSamples,A.samples)}function gt(A){let M=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function te(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Nt(A,M){let k=A.colorSpace,tt=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Al||k!==qn&&k!==un&&(Xt.getTransfer(k)===Kt?o===!1?t.has("EXT_sRGB")===!0&&tt===yn?(A.format=Al,A.minFilter=hn,A.generateMipmaps=!1):M=ya.sRGBToLinear(M):(tt!==yn||j!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=R,this.resetTextureUnits=Y,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=ht,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=gt}function sv(s,t,e){let n=e.isWebGL2;function i(r,a=un){let o,l=Xt.getTransfer(a);if(r===hi)return s.UNSIGNED_BYTE;if(r===tf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ef)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Bp)return s.BYTE;if(r===zp)return s.SHORT;if(r===nc)return s.UNSIGNED_SHORT;if(r===ju)return s.INT;if(r===ai)return s.UNSIGNED_INT;if(r===oi)return s.FLOAT;if(r===Mn)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===kp)return s.ALPHA;if(r===yn)return s.RGBA;if(r===Vp)return s.LUMINANCE;if(r===Hp)return s.LUMINANCE_ALPHA;if(r===zi)return s.DEPTH_COMPONENT;if(r===Cs)return s.DEPTH_STENCIL;if(r===Al)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Gp)return s.RED;if(r===nf)return s.RED_INTEGER;if(r===Wp)return s.RG;if(r===sf)return s.RG_INTEGER;if(r===rf)return s.RGBA_INTEGER;if(r===Xo||r===qo||r===Yo||r===Zo)if(l===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ah||r===Ch||r===Rh||r===Ph)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lh||r===Ih)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Lh)return l===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ih)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dh||r===Uh||r===Nh||r===Oh||r===Fh||r===Bh||r===zh||r===kh||r===Vh||r===Hh||r===Gh||r===Wh||r===Xh||r===qh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Dh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Oh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qh)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jo||r===Yh||r===Zh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Jo)return l===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xp||r===Jh||r===$h||r===Kh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Jh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$h)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bi?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Vl=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},li=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},rv={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hl=class extends fi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null,g=e.getContextAttributes(),p=null,d=null,y=[],x=[],S=new Ct,C=null,E=new He;E.layers.enable(1),E.viewport=new Ee;let w=new He;w.layers.enable(2),w.viewport=new Ee;let L=[E,w],v=new Vl;v.layers.enable(1),v.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=y[W];return Z===void 0&&(Z=new er,y[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=y[W];return Z===void 0&&(Z=new er,y[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=y[W];return Z===void 0&&(Z=new er,y[W]=Z),Z.getHandSpace()};function H(W){let Z=x.indexOf(W.inputSource);if(Z===-1)return;let it=y[Z];it!==void 0&&(it.update(W.inputSource,W.frame,c||a),it.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",R);for(let W=0;W<y.length;W++){let Z=x[W];Z!==null&&(x[W]=null,y[W].disconnect(Z))}T=null,U=null,t.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Ge(m.framebufferWidth,m.framebufferHeight,{format:yn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,it=null,pt=null;g.depth&&(pt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?Cs:zi,it=g.stencil?Bi:ai);let mt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(mt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Ge(f.textureWidth,f.textureHeight,{format:yn,type:hi,depthTexture:new La(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let wt=t.properties.get(d);wt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(W){for(let Z=0;Z<W.removed.length;Z++){let it=W.removed[Z],pt=x.indexOf(it);pt>=0&&(x[pt]=null,y[pt].disconnect(it))}for(let Z=0;Z<W.added.length;Z++){let it=W.added[Z],pt=x.indexOf(it);if(pt===-1){for(let wt=0;wt<y.length;wt++)if(wt>=x.length){x.push(it),pt=wt;break}else if(x[wt]===null){x[wt]=it,pt=wt;break}if(pt===-1)break}let mt=y[pt];mt&&mt.connect(it)}}let I=new D,F=new D;function B(W,Z,it){I.setFromMatrixPosition(Z.matrixWorld),F.setFromMatrixPosition(it.matrixWorld);let pt=I.distanceTo(F),mt=Z.projectionMatrix.elements,wt=it.projectionMatrix.elements,nt=mt[14]/(mt[10]-1),K=mt[14]/(mt[10]+1),ht=(mt[9]+1)/mt[5],N=(mt[9]-1)/mt[5],Qt=(mt[8]-1)/mt[0],vt=(wt[8]+1)/wt[0],Rt=nt*Qt,gt=nt*vt,te=pt/(-Qt+vt),Nt=te*-Qt;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Nt),W.translateZ(te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let A=nt+te,M=K+te,k=Rt-Nt,tt=gt+(pt-Nt),j=ht*K/M*A,et=N*K/M*A;W.projectionMatrix.makePerspective(k,tt,j,et,A,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.near=w.near=E.near=W.near,v.far=w.far=E.far=W.far,(T!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,U=v.far);let Z=W.parent,it=v.cameras;X(v,Z);for(let pt=0;pt<it.length;pt++)X(it[pt],Z);it.length===2?B(v,E,w):v.projectionMatrix.copy(E.projectionMatrix),q(W,v,Z)};function q(W,Z,it){it===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(it.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ir*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let J=null;function $(W,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){let it=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let pt=!1;it.length!==v.cameras.length&&(v.cameras.length=0,pt=!0);for(let mt=0;mt<it.length;mt++){let wt=it[mt],nt=null;if(m!==null)nt=m.getViewport(wt);else{let ht=u.getViewSubImage(f,wt);nt=ht.viewport,mt===0&&(t.setRenderTargetTextures(d,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(d))}let K=L[mt];K===void 0&&(K=new He,K.layers.enable(mt),K.viewport=new Ee,L[mt]=K),K.matrix.fromArray(wt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(wt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(nt.x,nt.y,nt.width,nt.height),mt===0&&(v.matrix.copy(K.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pt===!0&&v.cameras.push(K)}}for(let it=0;it<y.length;it++){let pt=x[it],mt=y[it];pt!==null&&mt!==void 0&&mt.update(pt,Z,c||a)}J&&J(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let at=new ff;at.setAnimationLoop($),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}};function av(s,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,uf(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ze&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ze&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ze&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){let y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ov(s,t,e,n){let i={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=i[y.id];S===void 0&&(_(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",p));let C=x.program;n.updateUBOMapping(y,C);let E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let x=u();y.__bindingPointIndex=x;let S=s.createBuffer(),C=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],S=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,w=S.length;E<w;E++){let L=Array.isArray(S[E])?S[E]:[S[E]];for(let v=0,T=L.length;v<T;v++){let U=L[v];if(m(U,E,v,C)===!0){let H=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value],R=0;for(let I=0;I<Y.length;I++){let F=Y[I],B=g(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,H+R,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,R),R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,x,S,C){let E=y.value,w=x+"_"+S;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{let L=C[w];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return C[w]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function _(y){let x=y.uniforms,S=0,C=16;for(let w=0,L=x.length;w<L;w++){let v=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,U=v.length;T<U;T++){let H=v[T],Y=Array.isArray(H.value)?H.value:[H.value];for(let R=0,I=Y.length;R<I;R++){let F=Y[R],B=g(F),X=S%C;X!==0&&C-X<B.boundary&&(S+=C-X),H.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=B.storage}}}let E=S%C;return E>0&&(S+=C-E),y.__size=S,y.__cache={},this}function g(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){let x=y.target;x.removeEventListener("dispose",p);let S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}var or=class{constructor(t={}){let{canvas:e=_m(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;let x=this,S=!1,C=0,E=0,w=null,L=-1,v=null,T=new Ee,U=new Ee,H=null,Y=new It(0),R=0,I=e.width,F=e.height,B=1,X=null,q=null,J=new Ee(0,0,I,F),$=new Ee(0,0,I,F),at=!1,W=new Ra,Z=!1,it=!1,pt=null,mt=new Me,wt=new Ct,nt=new D,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return w===null?B:1}let N=n;function Qt(b,O){for(let V=0;V<b.length;V++){let G=b[V],z=e.getContext(G,O);if(z!==null)return z}return null}try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),N=Qt(O,b),N===null)throw Qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let vt,Rt,gt,te,Nt,A,M,k,tt,j,et,_t,ct,ft,bt,Ot,Q,Wt,Vt,At,yt,dt,Dt,Gt;function re(){vt=new w0(N),Rt=new y0(N,vt,t),vt.init(Rt),dt=new sv(N,vt,Rt),gt=new nv(N,vt,Rt),te=new R0(N),Nt=new Wx,A=new iv(N,vt,gt,Nt,Rt,dt,te),M=new S0(x),k=new E0(x),tt=new Fm(N,Rt),Dt=new x0(N,vt,tt,Rt),j=new A0(N,tt,te,Dt),et=new D0(N,j,tt,te),Vt=new I0(N,Rt,A),Ot=new M0(Nt),_t=new Gx(x,M,k,vt,Rt,Dt,Ot),ct=new av(x,Nt),ft=new qx,bt=new Qx(vt,Rt),Wt=new _0(x,M,k,gt,et,f,l),Q=new ev(x,et,Rt),Gt=new ov(N,te,Rt,gt),At=new v0(N,vt,te,Rt),yt=new C0(N,vt,te,Rt),te.programs=_t.programs,x.capabilities=Rt,x.extensions=vt,x.properties=Nt,x.renderLists=ft,x.shadowMap=Q,x.state=gt,x.info=te}re();let Bt=new Hl(x,N);this.xr=Bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(I,F,!1))},this.getSize=function(b){return b.set(I,F)},this.setSize=function(b,O,V=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=b,F=O,e.width=Math.floor(b*B),e.height=Math.floor(O*B),V===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(I*B,F*B).floor()},this.setDrawingBufferSize=function(b,O,V){I=b,F=O,B=V,e.width=Math.floor(b*V),e.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,O,V,G){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,V,G),gt.viewport(T.copy(J).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,O,V,G){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,O,V,G),gt.scissor(U.copy($).multiplyScalar(B).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){gt.setScissorTest(at=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(b=!0,O=!0,V=!0){let G=0;if(b){let z=!1;if(w!==null){let ut=w.texture.format;z=ut===rf||ut===sf||ut===nf}if(z){let ut=w.texture.type,xt=ut===hi||ut===ai||ut===nc||ut===Bi||ut===tf||ut===ef,St=Wt.getClearColor(),Et=Wt.getClearAlpha(),Ft=St.r,Pt=St.g,Lt=St.b;xt?(m[0]=Ft,m[1]=Pt,m[2]=Lt,m[3]=Et,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Ft,_[1]=Pt,_[2]=Lt,_[3]=Et,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ft.dispose(),bt.dispose(),Nt.dispose(),M.dispose(),k.dispose(),et.dispose(),Dt.dispose(),Gt.dispose(),_t.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Ue),Bt.removeEventListener("sessionend",$t),pt&&(pt.dispose(),pt=null),Ne.stop()};function st(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=te.autoReset,O=Q.enabled,V=Q.autoUpdate,G=Q.needsUpdate,z=Q.type;re(),te.autoReset=b,Q.enabled=O,Q.autoUpdate=V,Q.needsUpdate=G,Q.type=z}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){let O=b.target;O.removeEventListener("dispose",lt),Tt(O)}function Tt(b){Mt(b),Nt.remove(b)}function Mt(b){let O=Nt.get(b).programs;O!==void 0&&(O.forEach(function(V){_t.releaseProgram(V)}),b.isShaderMaterial&&_t.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,G,z,ut){O===null&&(O=K);let xt=z.isMesh&&z.matrixWorld.determinant()<0,St=Mf(b,O,V,G,z);gt.setMaterial(G,xt);let Et=V.index,Ft=1;if(G.wireframe===!0){if(Et=j.getWireframeAttribute(V),Et===void 0)return;Ft=2}let Pt=V.drawRange,Lt=V.attributes.position,he=Pt.start*Ft,Je=(Pt.start+Pt.count)*Ft;ut!==null&&(he=Math.max(he,ut.start*Ft),Je=Math.min(Je,(ut.start+ut.count)*Ft)),Et!==null?(he=Math.max(he,0),Je=Math.min(Je,Et.count)):Lt!=null&&(he=Math.max(he,0),Je=Math.min(Je,Lt.count));let ve=Je-he;if(ve<0||ve===1/0)return;Dt.setup(z,G,St,V,Et);let In,ee=At;if(Et!==null&&(In=tt.get(Et),ee=yt,ee.setIndex(In)),z.isMesh)G.wireframe===!0?(gt.setLineWidth(G.wireframeLinewidth*ht()),ee.setMode(N.LINES)):ee.setMode(N.TRIANGLES);else if(z.isLine){let zt=G.linewidth;zt===void 0&&(zt=1),gt.setLineWidth(zt*ht()),z.isLineSegments?ee.setMode(N.LINES):z.isLineLoop?ee.setMode(N.LINE_LOOP):ee.setMode(N.LINE_STRIP)}else z.isPoints?ee.setMode(N.POINTS):z.isSprite&&ee.setMode(N.TRIANGLES);if(z.isBatchedMesh)ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ee.renderInstances(he,ve,z.count);else if(V.isInstancedBufferGeometry){let zt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xa=Math.min(V.instanceCount,zt);ee.renderInstances(he,ve,Xa)}else ee.render(he,ve)};function Zt(b,O,V){b.transparent===!0&&b.side===xn&&b.forceSinglePass===!1?(b.side=Ze,b.needsUpdate=!0,gr(b,O,V),b.side=ui,b.needsUpdate=!0,gr(b,O,V),b.side=xn):gr(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),p=bt.get(V),p.init(),y.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(x._useLegacyLights);let G=new Set;return b.traverse(function(z){let ut=z.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){let St=ut[xt];Zt(St,V,z),G.add(St)}else Zt(ut,V,z),G.add(ut)}),y.pop(),p=null,G},this.compileAsync=function(b,O,V=null){let G=this.compile(b,O,V);return new Promise(z=>{function ut(){if(G.forEach(function(xt){Nt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){z(b);return}setTimeout(ut,10)}vt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Jt=null;function xe(b){Jt&&Jt(b)}function Ue(){Ne.stop()}function $t(){Ne.start()}let Ne=new ff;Ne.setAnimationLoop(xe),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(b){Jt=b,Bt.setAnimationLoop(b),b===null?Ne.stop():Ne.start()},Bt.addEventListener("sessionstart",Ue),Bt.addEventListener("sessionend",$t),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(O),O=Bt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,w),p=bt.get(b,y.length),p.init(),y.push(p),mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(mt),it=this.localClippingEnabled,Z=Ot.init(this.clippingPlanes,it),g=ft.get(b,d.length),g.init(),d.push(g),En(b,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,q),this.info.render.frame++,Z===!0&&Ot.beginShadows();let V=p.state.shadowsArray;if(Q.render(V,b,O),Z===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Wt.render(g,b),p.setupLights(x._useLegacyLights),O.isArrayCamera){let G=O.cameras;for(let z=0,ut=G.length;z<ut;z++){let xt=G[z];cc(g,b,xt,xt.viewport)}}else cc(g,b,O);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(x,b,O),Dt.resetDefaultState(),L=-1,v=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function En(b,O,V,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){G&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(mt);let xt=et.update(b),St=b.material;St.visible&&g.push(b,xt,St,V,nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){let xt=et.update(b),St=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),nt.copy(xt.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(mt)),Array.isArray(St)){let Et=xt.groups;for(let Ft=0,Pt=Et.length;Ft<Pt;Ft++){let Lt=Et[Ft],he=St[Lt.materialIndex];he&&he.visible&&g.push(b,xt,he,V,nt.z,Lt)}}else St.visible&&g.push(b,xt,St,V,nt.z,null)}}let ut=b.children;for(let xt=0,St=ut.length;xt<St;xt++)En(ut[xt],O,V,G)}function cc(b,O,V,G){let z=b.opaque,ut=b.transmissive,xt=b.transparent;p.setupLightsView(V),Z===!0&&Ot.setGlobalState(x.clippingPlanes,V),ut.length>0&&yf(z,ut,O,V),G&&gt.viewport(T.copy(G)),z.length>0&&mr(z,O,V),ut.length>0&&mr(ut,O,V),xt.length>0&&mr(xt,O,V),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function yf(b,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let ut=Rt.isWebGL2;pt===null&&(pt=new Ge(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?Mn:hi,minFilter:nr,samples:ut?4:0})),x.getDrawingBufferSize(wt),ut?pt.setSize(wt.x,wt.y):pt.setSize(xa(wt.x),xa(wt.y));let xt=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(Y),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let St=x.toneMapping;x.toneMapping=ci,mr(b,V,G),A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt);let Et=!1;for(let Ft=0,Pt=O.length;Ft<Pt;Ft++){let Lt=O[Ft],he=Lt.object,Je=Lt.geometry,ve=Lt.material,In=Lt.group;if(ve.side===xn&&he.layers.test(G.layers)){let ee=ve.side;ve.side=Ze,ve.needsUpdate=!0,hc(he,V,G,Je,ve,In),ve.side=ee,ve.needsUpdate=!0,Et=!0}}Et===!0&&(A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt)),x.setRenderTarget(xt),x.setClearColor(Y,R),x.toneMapping=St}function mr(b,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ut=b.length;z<ut;z++){let xt=b[z],St=xt.object,Et=xt.geometry,Ft=G===null?xt.material:G,Pt=xt.group;St.layers.test(V.layers)&&hc(St,O,V,Et,Ft,Pt)}}function hc(b,O,V,G,z,ut){b.onBeforeRender(x,O,V,G,z,ut),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(x,O,V,G,b,ut),z.transparent===!0&&z.side===xn&&z.forceSinglePass===!1?(z.side=Ze,z.needsUpdate=!0,x.renderBufferDirect(V,O,G,z,b,ut),z.side=ui,z.needsUpdate=!0,x.renderBufferDirect(V,O,G,z,b,ut),z.side=xn):x.renderBufferDirect(V,O,G,z,b,ut),b.onAfterRender(x,O,V,G,z,ut)}function gr(b,O,V){O.isScene!==!0&&(O=K);let G=Nt.get(b),z=p.state.lights,ut=p.state.shadowsArray,xt=z.state.version,St=_t.getParameters(b,z.state,ut,O,V),Et=_t.getProgramCacheKey(St),Ft=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?k:M).get(b.envMap||G.environment),Ft===void 0&&(b.addEventListener("dispose",lt),Ft=new Map,G.programs=Ft);let Pt=Ft.get(Et);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===xt)return fc(b,St),Pt}else St.uniforms=_t.getUniforms(b),b.onBuild(V,St,x),b.onBeforeCompile(St,x),Pt=_t.acquireProgram(St,Et),Ft.set(Et,Pt),G.uniforms=St.uniforms;let Lt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=Ot.uniform),fc(b,St),G.needsLights=bf(b),G.lightsStateVersion=xt,G.needsLights&&(Lt.ambientLightColor.value=z.state.ambient,Lt.lightProbe.value=z.state.probe,Lt.directionalLights.value=z.state.directional,Lt.directionalLightShadows.value=z.state.directionalShadow,Lt.spotLights.value=z.state.spot,Lt.spotLightShadows.value=z.state.spotShadow,Lt.rectAreaLights.value=z.state.rectArea,Lt.ltc_1.value=z.state.rectAreaLTC1,Lt.ltc_2.value=z.state.rectAreaLTC2,Lt.pointLights.value=z.state.point,Lt.pointLightShadows.value=z.state.pointShadow,Lt.hemisphereLights.value=z.state.hemi,Lt.directionalShadowMap.value=z.state.directionalShadowMap,Lt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Lt.spotShadowMap.value=z.state.spotShadowMap,Lt.spotLightMatrix.value=z.state.spotLightMatrix,Lt.spotLightMap.value=z.state.spotLightMap,Lt.pointShadowMap.value=z.state.pointShadowMap,Lt.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function uc(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Es.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function fc(b,O){let V=Nt.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Mf(b,O,V,G,z){O.isScene!==!0&&(O=K),A.resetTextureUnits();let ut=O.fog,xt=G.isMeshStandardMaterial?O.environment:null,St=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qn,Et=(G.isMeshStandardMaterial?k:M).get(G.envMap||xt),Ft=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Je=!!V.morphAttributes.color,ve=ci;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ve=x.toneMapping);let In=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=In!==void 0?In.length:0,zt=Nt.get(G),Xa=p.state.lights;if(Z===!0&&(it===!0||b!==v)){let en=b===v&&G.id===L;Ot.setState(G,b,en)}let ae=!1;G.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Xa.state.version||zt.outputColorSpace!==St||z.isBatchedMesh&&zt.batching===!1||!z.isBatchedMesh&&zt.batching===!0||z.isInstancedMesh&&zt.instancing===!1||!z.isInstancedMesh&&zt.instancing===!0||z.isSkinnedMesh&&zt.skinning===!1||!z.isSkinnedMesh&&zt.skinning===!0||z.isInstancedMesh&&zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&zt.instancingColor===!1&&z.instanceColor!==null||zt.envMap!==Et||G.fog===!0&&zt.fog!==ut||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Ot.numPlanes||zt.numIntersection!==Ot.numIntersection)||zt.vertexAlphas!==Ft||zt.vertexTangents!==Pt||zt.morphTargets!==Lt||zt.morphNormals!==he||zt.morphColors!==Je||zt.toneMapping!==ve||Rt.isWebGL2===!0&&zt.morphTargetsCount!==ee)&&(ae=!0):(ae=!0,zt.__version=G.version);let _i=zt.currentProgram;ae===!0&&(_i=gr(G,O,z));let dc=!1,Ns=!1,qa=!1,Ae=_i.getUniforms(),xi=zt.uniforms;if(gt.useProgram(_i.program)&&(dc=!0,Ns=!0,qa=!0),G.id!==L&&(L=G.id,Ns=!0),dc||v!==b){Ae.setValue(N,"projectionMatrix",b.projectionMatrix),Ae.setValue(N,"viewMatrix",b.matrixWorldInverse);let en=Ae.map.cameraPosition;en!==void 0&&en.setValue(N,nt.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&Ae.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Ns=!0,qa=!0)}if(z.isSkinnedMesh){Ae.setOptional(N,z,"bindMatrix"),Ae.setOptional(N,z,"bindMatrixInverse");let en=z.skeleton;en&&(Rt.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ae.setValue(N,"boneTexture",en.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ae.setOptional(N,z,"batchingTexture"),Ae.setValue(N,"batchingTexture",z._matricesTexture,A));let Ya=V.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0&&Rt.isWebGL2===!0)&&Vt.update(z,V,_i),(Ns||zt.receiveShadow!==z.receiveShadow)&&(zt.receiveShadow=z.receiveShadow,Ae.setValue(N,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(xi.envMap.value=Et,xi.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),Ns&&(Ae.setValue(N,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&Sf(xi,qa),ut&&G.fog===!0&&ct.refreshFogUniforms(xi,ut),ct.refreshMaterialUniforms(xi,G,B,F,pt),Es.upload(N,uc(zt),xi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Es.upload(N,uc(zt),xi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(N,"center",z.center),Ae.setValue(N,"modelViewMatrix",z.modelViewMatrix),Ae.setValue(N,"normalMatrix",z.normalMatrix),Ae.setValue(N,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let en=G.uniformsGroups;for(let Za=0,Tf=en.length;Za<Tf;Za++)if(Rt.isWebGL2){let pc=en[Za];Gt.update(pc,_i),Gt.bind(pc,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Sf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function bf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,O,V){Nt.get(b.texture).__webglTexture=O,Nt.get(b.depthTexture).__webglTexture=V;let G=Nt.get(b);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){let V=Nt.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){w=b,C=O,E=V;let G=!0,z=null,ut=!1,xt=!1;if(b){let Et=Nt.get(b);Et.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(N.FRAMEBUFFER,null),G=!1):Et.__webglFramebuffer===void 0?A.setupRenderTarget(b):Et.__hasExternalTextures&&A.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);let Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(xt=!0);let Pt=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[O])?z=Pt[O][V]:z=Pt[O],ut=!0):Rt.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?z=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[V]:z=Pt,T.copy(b.viewport),U.copy(b.scissor),H=b.scissorTest}else T.copy(J).multiplyScalar(B).floor(),U.copy($).multiplyScalar(B).floor(),H=at;if(gt.bindFramebuffer(N.FRAMEBUFFER,z)&&Rt.drawBuffers&&G&&gt.drawBuffers(b,z),gt.viewport(T),gt.scissor(U),gt.setScissorTest(H),ut){let Et=Nt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,V)}else if(xt){let Et=Nt.get(b.texture),Ft=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,V||0,Ft)}L=-1},this.readRenderTargetPixels=function(b,O,V,G,z,ut,xt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){gt.bindFramebuffer(N.FRAMEBUFFER,St);try{let Et=b.texture,Ft=Et.format,Pt=Et.type;if(Ft!==yn&&dt.convert(Ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Lt=Pt===Mn&&(vt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Pt!==hi&&dt.convert(Pt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===oi&&(Rt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&V>=0&&V<=b.height-z&&N.readPixels(O,V,G,z,dt.convert(Ft),dt.convert(Pt),ut)}finally{let Et=w!==null?Nt.get(w).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(b,O,V=0){let G=Math.pow(2,-V),z=Math.floor(O.image.width*G),ut=Math.floor(O.image.height*G);A.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,b.x,b.y,z,ut),gt.unbindTexture()},this.copyTextureToTexture=function(b,O,V,G=0){let z=O.image.width,ut=O.image.height,xt=dt.convert(V.format),St=dt.convert(V.type);A.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,b.x,b.y,z,ut,xt,St,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,xt,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,G,b.x,b.y,xt,St,O.image),G===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V,G,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ut=b.max.x-b.min.x+1,xt=b.max.y-b.min.y+1,St=b.max.z-b.min.z+1,Et=dt.convert(G.format),Ft=dt.convert(G.type),Pt;if(G.isData3DTexture)A.setTexture3D(G,0),Pt=N.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)A.setTexture2DArray(G,0),Pt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let Lt=N.getParameter(N.UNPACK_ROW_LENGTH),he=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Je=N.getParameter(N.UNPACK_SKIP_PIXELS),ve=N.getParameter(N.UNPACK_SKIP_ROWS),In=N.getParameter(N.UNPACK_SKIP_IMAGES),ee=V.isCompressedTexture?V.mipmaps[z]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ee.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(Pt,z,O.x,O.y,O.z,ut,xt,St,Et,Ft,ee.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pt,z,O.x,O.y,O.z,ut,xt,St,Et,ee.data)):N.texSubImage3D(Pt,z,O.x,O.y,O.z,ut,xt,St,Et,Ft,ee),N.pixelStorei(N.UNPACK_ROW_LENGTH,Lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),N.pixelStorei(N.UNPACK_SKIP_ROWS,ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,In),z===0&&G.generateMipmaps&&N.generateMipmap(Pt),gt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){C=0,E=0,w=null,gt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ic?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===Fa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?ki:of}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ki?Te:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Gl=class extends or{};Gl.prototype.isWebGL1Renderer=!0;var Ia=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Wi=class extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hu=new D,Gu=new D,Wu=new Me,vl=new sr,ia=new Hi,lr=class extends je{constructor(t=new pe,e=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Hu.fromBufferAttribute(e,i-1),Gu.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Hu.distanceTo(Gu);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Wu.copy(i).invert(),vl.copy(t.ray).applyMatrix4(Wu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,u=new D,f=new D,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){let d=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let x=d,S=y-1;x<S;x+=m){let C=_.getX(x),E=_.getX(x+1);if(c.fromBufferAttribute(p,C),h.fromBufferAttribute(p,E),vl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let x=d,S=y-1;x<S;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),vl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(f);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Xu=new D,qu=new D,cr=class extends lr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Xu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xu.distanceTo(qu);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hr=class extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yu=new Me,Wl=new sr,sa=new Hi,ra=new D,Da=class extends je{constructor(t=new pe,e=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;Yu.copy(i).invert(),Wl.copy(t.ray).applyMatrix4(Yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,g=m;_<g;_++){let p=c.getX(_);ra.fromBufferAttribute(u,p),Zu(ra,p,l,i,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m;_<g;_++)ra.fromBufferAttribute(u,_),Zu(ra,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zu(s,t,e,n,i,r,a){let o=Wl.distanceSqToPoint(s);if(o<e){let l=new D;Wl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Ua=class s extends pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],m=[],_=0,g=[],p=n/2,d=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(m,2));function y(){let S=new D,C=new D,E=0,w=(e-t)/n;for(let L=0;L<=r;L++){let v=[],T=L/r,U=T*(e-t)+t;for(let H=0;H<=i;H++){let Y=H/i,R=Y*l+o,I=Math.sin(R),F=Math.cos(R);C.x=U*I,C.y=-T*n+p,C.z=U*F,u.push(C.x,C.y,C.z),S.set(I,w,F).normalize(),f.push(S.x,S.y,S.z),m.push(Y,1-T),v.push(_++)}g.push(v)}for(let L=0;L<i;L++)for(let v=0;v<r;v++){let T=g[v][L],U=g[v+1][L],H=g[v+1][L+1],Y=g[v][L+1];h.push(T,U,Y),h.push(U,H,Y),E+=6}c.addGroup(d,E,0),d+=E}function x(S){let C=_,E=new Ct,w=new D,L=0,v=S===!0?t:e,T=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),_++;let U=_;for(let H=0;H<=i;H++){let R=H/i*l+o,I=Math.cos(R),F=Math.sin(R);w.x=v*F,w.y=p*T,w.z=v*I,u.push(w.x,w.y,w.z),f.push(0,T,0),E.x=I*.5+.5,E.y=F*.5*T+.5,m.push(E.x,E.y),_++}for(let H=0;H<i;H++){let Y=C+H,R=U+H;S===!0?h.push(R,R+1,Y):h.push(R+1,R,Y),L+=3}c.addGroup(d,L,S===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var aa=new D,oa=new D,yl=new D,la=new Fi,Na=class extends pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(bs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:g,b:p,c:d}=la;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),la.getNormal(yl),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let x=(y+1)%3,S=u[y],C=u[x],E=la[h[y]],w=la[h[x]],L=`${S}_${C}`,v=`${C}_${S}`;v in f&&f[v]?(yl.dot(f[v].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(w.x,w.y,w.z)),f[v]=null):L in f||(f[L]={index0:c[y],index1:c[x],normal:yl.clone()})}}for(let _ in f)if(f[_]){let{index0:g,index1:p}=f[_];aa.fromBufferAttribute(o,g),oa.fromBufferAttribute(o,p),m.push(aa.x,aa.y,aa.z),m.push(oa.x,oa.y,oa.z)}this.setAttribute("position",new se(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ur=class s extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,m=[],_=[],g=[],p=[];for(let d=0;d<=n;d++){let y=[],x=d/n,S=0;d===0&&a===0?S=.5/e:d===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+x*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),p.push(E+S,1-x),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let x=h[d][y+1],S=h[d][y],C=h[d+1][y],E=h[d+1][y+1];(d!==0||a>0)&&m.push(x,S,E),(d!==n-1||l<Math.PI)&&m.push(S,C,E)}this.setIndex(m),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(g,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ca(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ps=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends Ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case jh:r=t,o=2*e-n;break;case tu:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:a=t,l=2*n-e;break;case tu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-e)/(i-e),g=_*_,p=g*_,d=-f*p+2*f*g-f*_,y=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-m)*p+(1.5+m)*g+.5*_,S=m*p-m*g;for(let C=0;C!==o;++C)r[C]=d*a[h+C]+y*a[c+C]+x*a[l+C]+S*a[u+C];return r}},ql=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Yl=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fa:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case $o:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&lv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$o,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,m=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=da;var Xi=class extends Tn{};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=fa;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Tn{};Zl.prototype.ValueTypeName="color";var Jl=class extends Tn{};Jl.prototype.ValueTypeName="number";var $l=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)di.slerpFlat(r,0,a,c-o,a,c,l);return r}},fr=class extends Tn{InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.DefaultInterpolation=da;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Tn{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=fa;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends Tn{};Kl.prototype.ValueTypeName="vector";var Ql=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},cv=new Ql,jl=class{constructor(t){this.manager=t!==void 0?t:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ju(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ju();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ju(){return(typeof performance>"u"?Date:performance).now()}var ac="\\[\\]\\.:\\/",hv=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",uv="[^"+ac.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",oc),dv=/(WCOD+)?/.source.replace("WCOD",uv),pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),gv=new RegExp("^"+fv+dv+pv+mv+"$"),_v=["material","materials","bones","map"],tc=class{constructor(t,e,n){let i=n||jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},jt=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(t){let e=gv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);_v.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=tc;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var za={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vv=new ar(-1,1,1,-1,0,1),lc=class extends pe{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},yv=new lc,gi=class{constructor(t){this._mesh=new we(yv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ka=class extends tn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mi.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var pr=class extends tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Va=class extends tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ha=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ka(za),this.copyPass.material.blending=Ln,this.clock=new Ls}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pr!==void 0&&(a instanceof pr?n=!0:a instanceof Va&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ga=class extends tn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new It}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var xf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Us=class s extends tn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new It(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,a,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ge(r,a,{type:Mn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new Ge(r,a,{type:Mn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=xf;this.highPassUniforms=mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=za;this.copyUniforms=mi.clone(h.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ha,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new It,this.oldClearAlpha=1,this.basic=new bn,this.fsQuad=new gi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Us.BlurDirectionX=new Ct(1,0);Us.BlurDirectionY=new Ct(0,1);var vf={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};var Wa=class extends tn{constructor(t=.5,e=!1){super();let n=vf;this.uniforms=mi.clone(n.uniforms),this.material=new me({name:n.name,uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.uniforms.intensity.value=t,this.uniforms.grayscale.value=e,this.fsQuad=new gi(this.material)}render(t,e,n,i){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=i,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var dn=[{title:"\u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u09AE\u09BE\u09A8\u09C7 \u0995\u09C0?",duration:11,shape:"point",text:"\u098F\u0995\u099F\u09BF \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8 \u09A0\u09BF\u0995 \u0995\u09B0\u09C7 \u09AC\u09B2\u09A4\u09C7 \u0995\u09DF\u099F\u09BF \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09B2\u09BE\u0997\u09C7? \u09B8\u09C7\u0987 \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u0987 \u0993\u0987 \u09B8\u09CD\u09A5\u09BE\u09A8\u09C7\u09B0 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE\u0964 \u09B6\u09C1\u09A7\u09C1 \u098F\u0995\u099F\u09BF \u09AC\u09BF\u09A8\u09CD\u09A6\u09C1\u09A4\u09C7 \u099A\u09B2\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09A6\u09BF\u0995 \u09A8\u09C7\u0987\u0964",formula:"\u09AC\u09BF\u09A8\u09CD\u09A6\u09C1 \u2192 \u09E6\u099F\u09BF \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09A6\u09BF\u0995 \u2192 0D",note:"\u201C\u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8\u201D \u09AE\u09BE\u09A8\u09C7: \u0985\u09A8\u09CD\u09AF \u09A6\u09BF\u0995\u0997\u09C1\u09B2\u09CB \u09AE\u09BF\u09B2\u09BF\u09DF\u09C7 \u09AF\u09C7 \u09A6\u09BF\u0995\u099F\u09BF \u09AC\u09BE\u09A8\u09BE\u09A8\u09CB \u09AF\u09BE\u09DF \u09A8\u09BE\u0964"},{title:"\u09E7D \u2014 \u098F\u0995\u099F\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09AF\u09A5\u09C7\u09B7\u09CD\u099F",duration:12,shape:"line",text:"\u09B8\u09CB\u099C\u09BE \u09AA\u09A5\u09C7 \u0995\u09CB\u09A5\u09BE\u09DF \u0986\u099B\u09CB? \u09B6\u09C1\u09B0\u09C1\u09B0 \u099C\u09BE\u09DF\u0997\u09BE \u09A5\u09C7\u0995\u09C7 \u0995\u09A4 \u09A6\u09C2\u09B0\u09C7, \u09B6\u09C1\u09A7\u09C1 \u09B8\u09C7\u099F\u09BF \u09AC\u09B2\u09B2\u09C7\u0987 \u09B9\u09DF\u0964 \u09B2\u09BE\u09B2 \u09B0\u09C7\u0996\u09BE\u09DF P-\u098F\u09B0 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8 \u099C\u09BE\u09A8\u09BE\u09A4\u09C7 x = 3 \u09AF\u09A5\u09C7\u09B7\u09CD\u099F\u0964",formula:"P = (3) \xB7 \u098F\u0995\u099F\u09BF \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u0999\u09CD\u0995: x",note:"\u098F\u0995\u0987 \u09B0\u09C7\u0996\u09BE\u09DF \u09B8\u09BE\u09AE\u09A8\u09C7 \u0993 \u09AA\u09C7\u099B\u09A8\u09C7 \u099A\u09B2\u09BE \u09A6\u09C1\u099F\u09BF \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u09A8\u09DF\u0964"},{title:"\u09E8D \u2014 \u09A6\u09C8\u09B0\u09CD\u0998\u09CD\u09AF \u0993 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A5",duration:14,shape:"plane",text:"\u0995\u09BE\u0997\u099C\u09C7\u09B0 \u0993\u09AA\u09B0 \u098F\u0995\u099F\u09BF \u09AC\u09BF\u09A8\u09CD\u09A6\u09C1 \u0996\u09C1\u0981\u099C\u09A4\u09C7 \u09A1\u09BE\u09A8\u09C7 \u0995\u09A4 \u09A6\u09C2\u09B0 \u098F\u09AC\u0982 \u0993\u09AA\u09B0\u09C7 \u0995\u09A4 \u09A6\u09C2\u09B0\u2014\u09A6\u09C1\u099F\u09BF\u0987 \u099C\u09BE\u09A8\u09A4\u09C7 \u09B9\u09DF\u0964 X \u0993 Y \u09AE\u09BF\u09B2\u09C7 \u09AA\u09C1\u09B0\u09CB \u09B8\u09AE\u09A4\u09B2\u099F\u09BF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u0964",formula:"P = (3, 2) \xB7 \u09A6\u09C1\u099F\u09BF \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u0999\u09CD\u0995: x, y",note:"\u098F\u0996\u09BE\u09A8\u09C7 X \u27C2 Y\u0964 \u0995\u09CB\u09A3\u09C7\u09B0 \u099B\u09CB\u099F \u09AC\u09B0\u09CD\u0997\u099F\u09BF \u09EF\u09E6\xB0 \u09AC\u09CB\u099D\u09BE\u09DF\u0964"},{title:"\u09E9D \u2014 \u098F\u09AC\u09BE\u09B0 \u0989\u099A\u09CD\u099A\u09A4\u09BE\u0993 \u09A6\u09B0\u0995\u09BE\u09B0",duration:15,shape:"cube",text:"\u0998\u09B0\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u098F\u0995\u099F\u09BF \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8 \u09AC\u09B2\u09A4\u09C7 \u09A6\u09C8\u09B0\u09CD\u0998\u09CD\u09AF, \u09AA\u09CD\u09B0\u09B8\u09CD\u09A5 \u0993 \u0989\u099A\u09CD\u099A\u09A4\u09BE \u09B2\u09BE\u0997\u09C7\u0964 \u0998\u09A8\u0995\u09C7\u09B0 P \u09AC\u09BF\u09A8\u09CD\u09A6\u09C1\u099F\u09BF \u0996\u09C1\u0981\u099C\u09A4\u09C7 \u098F\u09AC\u09BE\u09B0 \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u0964",formula:"P = (3, 2, 2) \xB7 \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u0999\u09CD\u0995: x, y, z",note:"\u099A\u09BF\u09A4\u09CD\u09B0\u09C7 X = \u09A6\u09C8\u09B0\u09CD\u0998\u09CD\u09AF, Y = \u09AA\u09CD\u09B0\u09B8\u09CD\u09A5, Z = \u0989\u099A\u09CD\u099A\u09A4\u09BE\u0964 \u0985\u0995\u09CD\u09B7\u09C7\u09B0 \u09A8\u09BE\u09AE \u09AC\u09A6\u09B2\u09BE\u09B2\u09C7\u0993 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u09AC\u09A6\u09B2\u09BE\u09DF \u09A8\u09BE\u0964"},{title:"\u09A4\u09BF\u09A8\u099F\u09BF \u0985\u0995\u09CD\u09B7\u0987 \u09AA\u09B0\u09B8\u09CD\u09AA\u09B0 \u09B2\u09AE\u09CD\u09AC",duration:12,shape:"angles",text:"X\u2013Y, Y\u2013Z \u098F\u09AC\u0982 Z\u2013X: \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u099C\u09CB\u09DC\u09BE\u09B0 \u0986\u09B8\u09B2 \u0995\u09CB\u09A3 \u09EF\u09E6\xB0\u0964 \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09A6\u09BF\u0995 \u09AE\u09BF\u09B2\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u098F\u0987 3D \u09B8\u09CD\u09A5\u09BE\u09A8 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u099B\u09C7\u0964",formula:"\u2220(X, Y) = \u2220(Y, Z) = \u2220(Z, X) = 90\xB0",note:"\u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09A8\u09C7 \u09A6\u09C3\u09B6\u09CD\u09AF\u099F\u09BF \u098F\u0995\u099F\u09BF 2D \u09AA\u09CD\u09B0\u0995\u09CD\u09B7\u09C7\u09AA\u09A3\u0964 \u09A4\u09BE\u0987 \u099A\u09CB\u0996\u09C7 \u0995\u09CB\u09A3 \u0986\u09B2\u09BE\u09A6\u09BE \u09B2\u09BE\u0997\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7; \u09AA\u09BE\u09B6\u09C7\u09B0 \u09AE\u09BE\u09A8\u0997\u09C1\u09B2\u09CB 3D \u0995\u09CB\u09A3\u0964"},{title:"\u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09A6\u09BF\u0995 \u0996\u09C1\u0981\u099C\u09BF",duration:16,shape:"candidate",text:"\u09B9\u09B2\u09C1\u09A6 \u09B0\u09C7\u0996\u09BE W-\u0995\u09C7 \u0998\u09C1\u09B0\u09BF\u09DF\u09C7 \u09A6\u09C7\u0996\u09BF\u0964 \u098F\u0995\u099F\u09BF \u0995\u09CB\u09A3 \u09EF\u09E6\xB0-\u098F\u09B0 \u0995\u09BE\u099B\u09BE\u0995\u09BE\u099B\u09BF \u09B9\u09B2\u09C7\u0993 \u0985\u09A8\u09CD\u09AF \u0995\u09CB\u09A3\u0997\u09C1\u09B2\u09CB \u09AC\u09A6\u09B2\u09BE\u09DF\u0964 \u09A4\u09BF\u09A8\u099F\u09BF\u09B0 \u09B8\u0999\u09CD\u0997\u09C7\u0987 \u098F\u0995\u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u09B9\u099A\u09CD\u099B\u09C7 \u0995\u09BF?",formula:"\u09B2\u0995\u09CD\u09B7\u09CD\u09AF: \u2220(W, X) = \u2220(W, Y) = \u2220(W, Z) = 90\xB0",note:"\u098F\u099F\u09BF \u0989\u09A6\u09BE\u09B9\u09B0\u09A3 \u09A6\u09C7\u0996\u09BE\u09A8\u09CB\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE\u0964 \u09B6\u09C1\u09A7\u09C1 \u0998\u09CB\u09B0\u09BE\u09A8\u09CB \u09AC\u09BE \u0985\u09CD\u09AF\u09BE\u09A8\u09BF\u09AE\u09C7\u09B6\u09A8 \u09A6\u09BF\u09DF\u09C7 \u0985\u09B8\u09AE\u09CD\u09AD\u09AC\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AE\u09BE\u09A3 \u09B9\u09DF \u09A8\u09BE\u0964"},{title:"X \u0993 Y-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u0995\u09B0\u09B2\u09C7\u2026",duration:13,shape:"overlap",text:"W-\u0995\u09C7 X \u0993 Y \u09A6\u09C1\u099F\u09BF\u09B0 \u09B8\u0999\u09CD\u0997\u09C7\u0987 \u09B2\u09AE\u09CD\u09AC \u0995\u09B0\u09B2\u09BE\u09AE\u0964 \u098F\u09AC\u09BE\u09B0 \u09B8\u09C7\u099F\u09BF Z-\u098F\u09B0 \u09A6\u09BF\u0995\u09C7\u0987 \u099A\u09B2\u09C7 \u098F\u09B8\u09C7\u099B\u09C7\u0964 \u09B9\u09B2\u09C1\u09A6 \u0993 \u09A8\u09C0\u09B2 \u098F\u0995\u0987 \u09A6\u09BF\u0995\u09C7\u2014\u098F\u0995\u099F\u09BF \u09A8\u09A4\u09C1\u09A8 \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u0985\u0995\u09CD\u09B7 \u09B9\u09B2\u09CB \u09A8\u09BE\u0964",formula:"W = (0, 0, 1) \u2192 X: 90\xB0 \xB7 Y: 90\xB0 \xB7 Z: 0\xB0",note:"\u0989\u09B2\u09CD\u099F\u09CB \u09A6\u09BF\u0995\u09C7 \u09A8\u09BF\u09B2\u09C7\u0993 \u09B8\u09C7\u099F\u09BF \u098F\u0995\u0987 Z \u0985\u0995\u09CD\u09B7: Z-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09A4\u0996\u09A8 \u09E7\u09EE\u09E6\xB0, \u09EF\u09E6\xB0 \u09A8\u09DF\u0964"},{title:"\u0995\u09C7\u09A8 \u09B8\u09AE\u09CD\u09AD\u09AC \u09A8\u09DF? \u099B\u09CB\u099F\u09CD\u099F \u0997\u09A3\u09BF\u09A4",duration:20,shape:"proof",text:"3D-\u09A4\u09C7 \u09A8\u09A4\u09C1\u09A8 \u09A6\u09BF\u0995\u09C7\u09B0 \u09AD\u09C7\u0995\u09CD\u099F\u09B0 \u09A7\u09B0\u09BF W = (a, b, c)\u0964 \u09B2\u09AE\u09CD\u09AC \u09A6\u09C1\u099F\u09BF \u09AD\u09C7\u0995\u09CD\u099F\u09B0\u09C7\u09B0 \u09A1\u099F \u09AA\u09CD\u09B0\u09CB\u09A1\u09BE\u0995\u09CD\u099F \u09B6\u09C2\u09A8\u09CD\u09AF\u0964 \u09A4\u09BE\u0987 \u09A4\u09BF\u09A8\u099F\u09BF \u09B6\u09B0\u09CD\u09A4 \u098F\u0995\u09B8\u0999\u09CD\u0997\u09C7 \u09A6\u09BF\u09B2\u09C7:",formula:`X-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u2192 a = 0
Y-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u2192 b = 0
Z-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u2192 c = 0
\u09A4\u09BE\u0987 W = (0, 0, 0)`,note:"\u09B6\u09C2\u09A8\u09CD\u09AF \u09AD\u09C7\u0995\u09CD\u099F\u09B0\u09C7\u09B0 \u09A6\u09C8\u09B0\u09CD\u0998\u09CD\u09AF \u09E6; \u0995\u09CB\u09A8\u09CB \u09A6\u09BF\u0995 \u09A8\u09C7\u0987\u0964 \u09AB\u09B2\u09C7 \u09B8\u09C7\u099F\u09BF \u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u0985\u0995\u09CD\u09B7 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964 \u098F\u0987 \u09AF\u09C1\u0995\u09CD\u09A4\u09BF \u098F\u0987 3D \u09B8\u09CD\u09A5\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u0964"},{title:"\u09A4\u09BE\u09B9\u09B2\u09C7 \u09EAD \u0997\u09A3\u09BF\u09A4 \u0995\u09BF \u0985\u09B8\u09AE\u09CD\u09AD\u09AC?",duration:15,shape:"four",text:"\u09A8\u09BE\u0964 \u099A\u09BE\u09B0 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE\u09B0 \u0997\u09A3\u09BF\u09A4\u09C7 \u099A\u09BE\u09B0\u099F\u09BF \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u0999\u09CD\u0995 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09AF\u09BE\u09DF: x, y, z, w\u0964 \u09B8\u09C7\u0996\u09BE\u09A8\u09C7 \u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u0985\u0995\u09CD\u09B7\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09B2\u09BE\u09A6\u09BE \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u0999\u09CD\u0995 \u09B0\u09DF\u09C7\u099B\u09C7\u0964",formula:"4D: (x, y, z, w) \xB7 \u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u098F\u0995\u0995 \u0985\u0995\u09CD\u09B7: (0, 0, 0, 1)",note:"\u098F\u0987 3D \u09A6\u09C3\u09B6\u09CD\u09AF\u09C7 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u0985\u0995\u09CD\u09B7 \u09A6\u09C7\u0996\u09BE\u09A4\u09C7 \u09A8\u09BE \u09AA\u09BE\u09B0\u09BE \u09A6\u09BF\u09DF\u09C7 \u09AC\u09BE\u09B8\u09CD\u09A4\u09AC \u09AE\u09B9\u09BE\u09AC\u09BF\u09B6\u09CD\u09AC\u09C7 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u0986\u099B\u09C7 \u0995\u09BF \u09A8\u09BE, \u09A4\u09BE \u09AA\u09CD\u09B0\u09AE\u09BE\u09A3 \u09B9\u09DF \u09A8\u09BE\u0964"},{title:"\u09B8\u09AE\u09DF: \u201C\u0995\u09CB\u09A5\u09BE\u09DF\u201D-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u201C\u0995\u0996\u09A8\u201D",duration:16,shape:"time",text:"\u098F\u0995\u0987 \u099C\u09BE\u09DF\u0997\u09BE\u09DF \u09A6\u09C1\u099F\u09BF \u0998\u099F\u09A8\u09BE \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u0986\u09B2\u09BE\u09A6\u09BE \u09B8\u09AE\u09DF\u09C7\u0964 \u0998\u099F\u09A8\u09BE\u099F\u09BF \u099A\u09BF\u09B9\u09CD\u09A8\u09BF\u09A4 \u0995\u09B0\u09A4\u09C7 \u099C\u09BE\u09DF\u0997\u09BE\u09B0 \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u0999\u09CD\u0995\u09C7\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B8\u09AE\u09DF\u0993 \u09B2\u09BF\u0996\u09BF\u0964",formula:`\u0998\u099F\u09A8\u09BE A: (3, 2, 2, t = 0 s)
\u0998\u099F\u09A8\u09BE B: (3, 2, 2, t = 5 s)`,note:"\u0986\u09AA\u09C7\u0995\u09CD\u09B7\u09BF\u0995\u09A4\u09BE\u09B0 spacetime-\u098F \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u09CD\u09A5\u09BE\u09A8\u09BF\u0995 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u0993 \u098F\u0995\u099F\u09BF \u09B8\u09AE\u09DF\u09C7\u09B0 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u09A5\u09BE\u0995\u09C7\u0964 \u09B8\u09AE\u09DF\u0995\u09C7 \u09A8\u09A4\u09C1\u09A8 \u09B8\u09CD\u09A5\u09BE\u09A8\u09BF\u0995 \u09B0\u09C7\u0996\u09BE \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u0986\u0981\u0995\u099B\u09BF \u09A8\u09BE\u0964"}];function uy(){let s=nt=>document.getElementById(nt),t=s("canvas-container"),e=new Ia;e.background=new It(198160);let n=new He(44,1,.1,100),i=new D(2,2,2),r=new or({antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<600?1:1.5)),r.toneMapping=ec,t.appendChild(r.domElement);let a=new Ha(r);a.addPass(new Ga(e,n)),a.addPass(new Us(new Ct(1,1),.65,.35,.3)),a.addPass(new Wa(.065,!1));let o=new Da(new pe().setAttribute("position",new se(Array.from({length:1800},()=>(Math.random()-.5)*70),3)),new hr({size:.025,color:6715806,transparent:!0,opacity:.3}));e.add(o);let l=new we(new ur(.085,16,16),new bn({color:16777215}));e.add(l);let c=new we(new ur(.13,20,20),new bn({color:16777215}));e.add(c);let h=new D(0,1,0),u=[new D(1,0,0),h.clone(),new D(0,0,1)],f=[16733557,5434016,6333951];function m(nt,K=.023){let ht=new Ua(K,K,1,10);ht.translate(0,.5,0);let N=new we(ht,new bn({color:nt}));return N.scale.y=6,e.add(N),N}let _=f.map((nt,K)=>{let ht=m(nt);return ht.quaternion.setFromUnitVectors(h,u[K]),ht}),g=m(16762715,.042),p=new D(1,1,1).normalize();function d(nt,K,ht=1){let N=new lr(new pe().setFromPoints(nt.map(Qt=>new D(...Qt))),new Wi({color:K,transparent:!0,opacity:ht}));return e.add(N),N}let y=new we(new rr(4,4),new bn({color:4508082,transparent:!0,opacity:.13,side:xn,depthWrite:!1}));y.position.set(2,2,0),e.add(y);let x=new li;for(let nt=0;nt<=4;nt++)for(let K of[[[nt,0,0],[nt,4,0]],[[0,nt,0],[4,nt,0]]]){let ht=d(K,6610366,.4);e.remove(ht),x.add(ht)}e.add(x);let S=new cr(new Na(new Gi(4,4,4)),new Wi({color:10271999,transparent:!0,opacity:.7}));S.position.set(2,2,2),e.add(S);let C=[d([[.7,0,0],[.7,.7,0],[0,.7,0]],16248259),d([[0,.7,0],[0,.7,.7],[0,0,.7]],16248259),d([[.7,0,0],[.7,0,.7],[0,0,.7]],16248259)],E=new cr(new pe,new Wi({color:16771238,transparent:!0,opacity:.8}));e.add(E);function w(nt){let{x:K,y:ht,z:N}=nt;E.geometry.dispose(),E.geometry=new pe().setFromPoints([new D(0,0,0),new D(K,0,0),new D(K,0,0),new D(K,ht,0),new D(K,ht,0),new D(K,ht,N)])}let L=[["label-x",new D(6.3,0,0)],["label-y",new D(0,6.3,0)],["label-z",new D(0,0,6.3)],["label-origin",new D(-.2,-.2,0)],["label-point",c.position],["label-w",new D]],v=null,T=null,U=!1,H=!0,Y=!1,R=-1,I=null,F={value:0},B="point",X=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function q(){try{let nt=window.AudioContext||window.webkitAudioContext;if(!nt)return;v=new nt,v.resume().catch(()=>{});let K=v.createOscillator(),ht=v.createGain();K.frequency.value=48,ht.gain.value=.045,K.connect(ht),ht.connect(v.destination),K.start(),T={osc:K,gain:ht}}catch(nt){console.warn("Audio unavailable; continuing visually.",nt)}}function J(){T&&(T.gain.gain.setTargetAtTime(0,v.currentTime,.2),T.osc.stop(v.currentTime+1),T=null)}function $(){T&&T.gain.gain.setTargetAtTime(Y||s("sound-btn").getAttribute("aria-pressed")==="true"?0:.045,v.currentTime,.1)}function at(nt){let K=t.clientWidth/t.clientHeight<1.25;return nt==="line"?{x:3,y:.8,z:K?15:11}:nt==="plane"?{x:2,y:2,z:K?17:12}:{x:K?13:11,y:K?10:8,z:K?16:13}}function W(nt){if(I&&I.kill(),nt>=dn.length){Z();return}R=Math.max(0,nt);let K=dn[R];B=K.shape,document.body.classList.toggle("proof-step",B==="proof"),F.value=0,Y=!1,s("pause-btn").textContent="\u09AC\u09BF\u09B0\u09A4\u09BF",s("pause-btn").setAttribute("aria-pressed","false"),$(),s("lesson-panel").hidden=!1,s("terminal-screen").hidden=!0,s("step-title").textContent=K.title,s("subtitle-text").textContent=K.text,s("formula").textContent=K.formula,s("lesson-note").textContent=K.note,s("step-count").textContent=`${R+1} / ${dn.length}`,s("prev-btn").disabled=R===0,s("next-btn").textContent=R===dn.length-1?"\u09B8\u09BE\u09B0\u09BE\u0982\u09B6":"\u09AA\u09B0\u09C7\u09B0 \u09A7\u09BE\u09AA \u2192",s("pause-btn").disabled=!1,s("next-btn").disabled=!1,s("lesson-controls").hidden=!1,s("lesson-progress").setAttribute("aria-valuenow",String(R+1)),s("lesson-panel").scrollTop=0;let ht=B==="point"?0:B==="line"?1:B==="plane"?2:3;if(_.forEach((N,Qt)=>{N.visible=Qt<ht,N.scale.y=6,s(`label-${"xyz"[Qt]}`).hidden=!N.visible}),y.visible=x.visible=B==="plane",S.visible=["cube","angles","four","time"].includes(B),g.visible=["candidate","overlap"].includes(B),C.forEach((N,Qt)=>{N.visible=ht>=2&&(Qt===0||B==="angles")}),c.visible=["line","plane","cube","time"].includes(B),c.position.set(3,ht>=2?2:0,ht>=3?2:0),w(c.position),E.visible=c.visible,s("label-point").hidden=!c.visible,s("label-point").textContent=B==="time"?"A \xB7 t = 0 s":"P",s("label-w").hidden=!g.visible,s("label-origin").hidden=B==="point",s("angle-readout").hidden=!["angles","candidate","overlap"].includes(B),s("proof-explanation").hidden=B!=="proof",s("coordinate-four").hidden=B!=="four",i.set(2,ht<2?0:2,ht<3?0:2),n.up.set(0,ht<3?1:0,ht<3?0:1),B==="overlap"&&p.set(0,0,1),B==="candidate"&&p.set(1,1,1).normalize(),g.quaternion.setFromUnitVectors(h,p),B==="angles"&&(s("angle-values").textContent="X\u2013Y: 90\xB0   Y\u2013Z: 90\xB0   Z\u2013X: 90\xB0"),s("angle-caption").textContent=B==="angles"?"\u09AA\u09B0\u09B8\u09CD\u09AA\u09B0 \u09B2\u09AE\u09CD\u09AC \u09A4\u09BF\u09A8\u099F\u09BF \u0985\u0995\u09CD\u09B7":"W-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u0986\u09B8\u09B2 3D \u0995\u09CB\u09A3",I=Go.timeline({onComplete:()=>W(R+1)}),I.to(n.position,{...at(B),duration:X?0:1.7,ease:"sine.inOut"},0),ht>0&&R<=3&&!X){let N=_[ht-1];N.scale.y=1e-4,I.to(N.scale,{y:6,duration:1.7,ease:"power2.out"},0)}I.to(F,{value:K.duration,duration:K.duration,ease:"none"},0)}function Z(){J(),R=dn.length,s("lesson-panel").hidden=!0,s("terminal-screen").hidden=!1,s("angle-readout").hidden=!0,s("step-count").textContent="\u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3",s("pause-btn").disabled=s("next-btn").disabled=!0,s("prev-btn").disabled=!1,s("progress-fill").style.width="100%",s("lesson-progress").setAttribute("aria-valuenow",String(dn.length))}s("start-btn").addEventListener("click",()=>{U||(U=!0,q(),s("start-screen").hidden=!0,s("lesson-hud").hidden=!1,s("label-origin").hidden=!1,document.body.classList.add("immersive"),W(0))}),s("prev-btn").addEventListener("click",()=>W(R-1)),s("next-btn").addEventListener("click",()=>W(R+1)),s("pause-btn").addEventListener("click",()=>{Y=!Y,I.paused(Y),s("pause-btn").textContent=Y?"\u099A\u09BE\u09B2\u09BF\u09DF\u09C7 \u09AF\u09BE\u0993":"\u09AC\u09BF\u09B0\u09A4\u09BF",s("pause-btn").setAttribute("aria-pressed",String(Y)),$()}),s("sound-btn").addEventListener("click",()=>{let nt=s("sound-btn").getAttribute("aria-pressed")!=="true";s("sound-btn").setAttribute("aria-pressed",String(nt)),s("sound-btn").textContent=nt?"\u09B8\u09BE\u0989\u09A8\u09CD\u09A1 \u09AC\u09A8\u09CD\u09A7":"\u09B8\u09BE\u0989\u09A8\u09CD\u09A1 \u099A\u09BE\u09B2\u09C1",$()}),s("replay-btn").addEventListener("click",()=>{q(),W(0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&I&&R<dn.length&&!Y&&s("pause-btn").click()}),r.domElement.addEventListener("webglcontextlost",nt=>{nt.preventDefault(),H=!1,I&&I.kill(),J(),window.simulationUI.failed(new Error("Graphics context lost. Reload to try again."))});function it(){let nt=t.clientWidth,K=t.clientHeight;if(r.setSize(nt,K),a.setSize(nt,K),n.aspect=nt/K,n.updateProjectionMatrix(),I&&R<dn.length){let ht=Y,N=F.value;W(Math.min(R,dn.length-1)),I.seek(N,!1),ht&&s("pause-btn").click()}else n.position.set(11,8,13)}window.addEventListener("resize",it),it(),_.forEach(nt=>{nt.visible=!1});for(let nt of[y,x,S,g,c,E,...C])nt.visible=!1;let pt=new D,mt=new Ls;function wt(){if(!H)return;requestAnimationFrame(wt);let nt=Math.min(mt.getDelta(),.1);if(!Y&&!X&&(o.rotation.y+=nt*.025),B==="candidate"&&!X){let K=F.value*.5;p.set(Math.cos(K),.5+Math.sin(K*.7),Math.sin(K)).normalize()}if(g.visible){g.quaternion.setFromUnitVectors(h,p),L[5][1].copy(p).multiplyScalar(5.2);let K=u.map(ht=>dr.radToDeg(Math.acos(dr.clamp(p.dot(ht),-1,1))));s("angle-values").textContent=`X: ${K[0].toFixed(1)}\xB0   Y: ${K[1].toFixed(1)}\xB0   Z: ${K[2].toFixed(1)}\xB0`}B==="time"&&(s("label-point").textContent=F.value<8?"A \xB7 t = 0 s":"B \xB7 t = 5 s"),R>=0&&R<dn.length&&(s("progress-fill").style.width=`${(R+F.value/dn[R].duration)/dn.length*100}%`),n.lookAt(i),n.updateMatrixWorld();for(let[K,ht]of L){let N=s(K);if(N.hidden)continue;pt.copy(ht).project(n);let Qt=(pt.x*.5+.5)*t.clientWidth,vt=(-pt.y*.5+.5)*t.clientHeight;N.style.left=`${dr.clamp(Qt,52,t.clientWidth-52)}px`,N.style.top=`${dr.clamp(vt,20,t.clientHeight-20)}px`}try{a.render(nt)}catch(K){H=!1,I&&I.kill(),J(),window.simulationUI.failed(K)}}wt(),window.simulationUI.ready()}export{dn as LESSON_STEPS,uy as initializeSimulation};
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
