function Un(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ac(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var $e={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ki={duration:.5,overwrite:!1,delay:0},xo,De,ue,hn=1e8,te=1/hn,ao=Math.PI*2,Pf=ao/4,Lf=0,Cc=Math.sqrt,If=Math.cos,Df=Math.sin,ve=function(t){return typeof t=="string"},fe=function(t){return typeof t=="function"},On=function(t){return typeof t=="number"},Pr=function(t){return typeof t>"u"},Cn=function(t){return typeof t=="object"},Je=function(t){return t!==!1},vo=function(){return typeof window<"u"},yr=function(t){return fe(t)||ve(t)},Rc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ue=Array.isArray,oo=/(?:-?\.?\d|\.)+/gi,yo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ja=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mo=/[+-]=-?[.\d]+/,Pc=/[^,'"\[\]\s]+/gi,Uf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oe,cn,lo,So,tn={},Tr={},Lc,Ic=function(t){return(Tr=Ei(t,tn))&&Ne},Lr=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Er=function(t,e){return!e&&console.warn(t)},Dc=function(t,e){return t&&(tn[t]=e)&&Tr&&(Tr[t]=e)||tn},Xs=function(){return 0},Nf={suppressEvents:!0,isStart:!0,kill:!1},Mr={suppressEvents:!0,kill:!1},Of={suppressEvents:!0},bo={},$n=[],co={},Uc,Ye={},to={},yc=30,Sr=[],To="",Eo=function(t){var e=t[0],n,i;if(Cn(e)||fe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Sr.length;i--&&!Sr[i].targetTest(e););n=Sr[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Co(t[i],n)))||t.splice(i,1);return t},Kn=function(t){return t._gsap||Eo(un(t))[0]._gsap},wo=function(t,e,n){return(n=t[e])&&fe(n)?t[e]():Pr(n)&&t.getAttribute&&t.getAttribute(e)||n},ze=function(t,e){return(t=t.split(",")).forEach(e)||t},de=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},Ai=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ff=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},wr=function(){var t=$n.length,e=$n.slice(0),n,i;for(co={},$n.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nc=function(t,e,n,i){$n.length&&!De&&wr(),t.render(e,n,i||De&&e<0&&(t._initted||t._startAt)),$n.length&&!De&&wr()},Oc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Pc).length<2?e:ve(t)?t.trim():t},Fc=function(t){return t},dn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Bf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ei=function(t,e){for(var n in e)t[n]=e[n];return t},Mc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Cn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ar=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Hs=function(t){var e=t.parent||oe,n=t.keyframes?Bf(Ue(t.keyframes)):dn;if(Je(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},zf=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ir=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Si=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},kf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ho=function(t,e,n,i){return t._startAt&&(De?t._startAt.revert(Mr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Vf=function s(t){return!t||t._ts&&s(t.parent)},Sc=function(t){return t._repeat?Qi(t._tTime,t=t.duration()+t._rDelay)*t:0},Qi=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Cr=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Dr=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},Ur=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Dr(t),n._dirty||Si(n,t)),t},zc=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Cr(t.rawTime(),e),(!e._dur||Zs(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Si(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},An=function(t,e,n,i){return e.parent&&Qn(e),e._start=Ae((On(n)?n:n||t!==oe?ln(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bc(t,e,"_first","_last",t._sort?"_start":0),uo(e)||(t._recent=e),i||zc(t,e),t._ts<0&&Ur(t,t._tTime),t},kc=function(t,e){return(tn.ScrollTrigger||Lr("scrollTrigger",e))&&tn.ScrollTrigger.create(e,t)},Vc=function(t,e,n,i,r){if(Lo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!De&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Uc!==Ze.frame)return $n.push(t),t._lazy=[r,i],1},Hf=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},uo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gf=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Hf(t)&&!(!t._initted&&uo(t))||(t._ts<0||t._dp._ts<0)&&!uo(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Zs(0,t._tDur,e),h=Qi(l,a),t._yoyo&&h&1&&(o=1-o),h!==Qi(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||De||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&Vc(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ho(t,e,n,!0),t._onUpdate&&!n&&fn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Qn(t,1),!n&&!De&&(fn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Wf=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ji=function(t,e,n,i){var r=t._repeat,o=Ae(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ae(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Ur(t,t._tTime=t._tDur*a),t.parent&&Dr(t),n||Si(t.parent,t),t},bc=function(t){return t instanceof Ie?Si(t):ji(t,t._dur)},Xf={_start:0,endTime:Xs,totalDuration:Xs},ln=function s(t,e,n){var i=t.labels,r=t._recent||Xf,o=t.duration()>=hn?r.endTime(!1):t._dur,a,l,c;return ve(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ue(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Gs=function(t,e,n){var i=On(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Je(l.vars.inherit)&&l.parent;o.immediateRender=Je(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new ge(e[0],o,e[r+1])},jn=function(t,e){return t||t===0?e(t):e},Zs=function(t,e,n){return n<t?t:n>e?e:n},Ce=function(t,e){return!ve(t)||!(e=Uf.exec(t))?"":e[1]},qf=function(t,e,n){return jn(n,function(i){return Zs(t,e,i)})},fo=[].slice,Hc=function(t,e){return t&&Cn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Cn(t[0]))&&!t.nodeType&&t!==cn},Yf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ve(i)&&!e||Hc(i,1)?(r=n).push.apply(r,un(i)):n.push(i)})||n},un=function(t,e,n){return ue&&!e&&ue.selector?ue.selector(t):ve(t)&&!n&&(lo||!ts())?fo.call((e||So).querySelectorAll(t),0):Ue(t)?Yf(t,n):Hc(t)?fo.call(t,0):t?[t]:[]},po=function(t){return t=un(t)[0]||Er("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return un(e,n.querySelectorAll?n:n===t?Er("Invalid scope")||So.createElement("div"):t)}},Gc=function(t){return t.sort(function(){return .5-Math.random()})},Wc=function(t){if(fe(t))return t;var e=Cn(t)?t:{each:t},n=bi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return ve(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,p,_){var g=(_||e).length,m=o[g],d,y,x,S,C,T,w,L,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,hn])[1],!v){for(w=-hn;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v--}for(m=o[g]=[],d=l?Math.min(v,g)*h-.5:i%v,y=v===hn?0:l?g*u/v-.5:i/v|0,w=0,L=hn,T=0;T<g;T++)x=T%v-d,S=y-(T/v|0),m[T]=C=c?Math.abs(c==="y"?S:x):Cc(x*x+S*S),C>w&&(w=C),C<L&&(L=C);i==="random"&&Gc(m),m.max=w-L,m.min=L,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ce(e.amount||e.each)||0,n=n&&g<0?jc(n):n}return g=(m[f]-m.min)/m.max||0,Ae(m.b+(n?n(g):g)*m.v)+m.u}},mo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(On(n)?0:Ce(n))}},Xc=function(t,e){var n=Ue(t),i,r;return!n&&Cn(t)&&(i=n=t.radius||hn,t.values?(t=un(t.values),(r=!On(t[0]))&&(i*=i)):t=mo(t.increment)),jn(e,n?fe(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=hn,h=0,u=t.length,f,p;u--;)r?(f=t[u].x-a,p=t[u].y-l,f=f*f+p*p):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,r||h===o||On(o)?h:h+Ce(o)}:mo(t))},qc=function(t,e,n,i){return jn(Ue(t)?!e:n===!0?!!(n=0):!i,function(){return Ue(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Zf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Jf=function(t,e){return function(n){return t(parseFloat(n))+(e||Ce(n))}},$f=function(t,e,n){return Zc(t,e,0,1,n)},Yc=function(t,e,n){return jn(n,function(i){return t[~~e(i)]})},Kf=function s(t,e,n){var i=e-t;return Ue(t)?Yc(t,s(0,t.length),e):jn(n,function(r){return(i+(r-t)%i)%i+t})},Qf=function s(t,e,n){var i=e-t,r=i*2;return Ue(t)?Yc(t,s(0,t.length-1),e):jn(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},es=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Pc:oo),n+=t.substr(e,i-e)+qc(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Zc=function(t,e,n,i,r){var o=e-t,a=i-n;return jn(r,function(l){return n+((l-t)/o*a||0)})},jf=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var o=ve(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ue(t)&&!Ue(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Ei(Ue(t)?[]:{},t));if(!h){for(l in e)Ro.call(a,t,l,"get",e[l]);r=function(_){return Uo(_,a)||(o?t.p:t)}}}return jn(n,r)},Tc=function(t,e,n){var i=t.labels,r=hn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},fn=function(t,e,n){var i=t.vars,r=i[e],o=ue,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&$n.length&&wr(),a&&(ue=a),h=l?r.apply(c,l):r.call(c),ue=o,h},ks=function(t){return Qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!De),t.progress()<1&&fn(t,"onInterrupt"),t},$i,Jc=[],$c=function(t){if(vo()&&t){t=!t.name&&t.default||t;var e=t.name,n=fe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Xs,render:Uo,add:Ro,kill:md,modifier:pd,rawVars:0},o={targetTest:0,get:0,getSetter:Nr,aliases:{},register:0};if(ts(),t!==i){if(Ye[e])return;dn(i,dn(Ar(t,r),o)),Ei(i.prototype,Ei(r,Ar(t,o))),Ye[i.prop=e]=i,t.targetTest&&(Sr.push(i),bo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Dc(e,i),t.register&&t.register(Ne,i,ke)}else t&&Jc.push(t)},jt=255,Vs={aqua:[0,jt,jt],lime:[0,jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jt],navy:[0,0,128],white:[jt,jt,jt],olive:[128,128,0],yellow:[jt,jt,0],orange:[jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jt,0,0],pink:[jt,192,203],cyan:[0,jt,jt],transparent:[jt,jt,jt,0]},eo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*jt+.5|0},Kc=function(t,e,n){var i=t?On(t)?[t>>16,t>>8&jt,t&jt]:0:Vs.black,r,o,a,l,c,h,u,f,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vs[t])i=Vs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&jt,i&jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&jt,t&jt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(oo),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=eo(l+1/3,r,o),i[1]=eo(l,r,o),i[2]=eo(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(yo),n&&i.length<4&&(i[3]=1),i}else i=t.match(oo)||Vs.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/jt,o=i[1]/jt,a=i[2]/jt,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(p=u-f,c=h>.5?p/(2-u-f):p/(u+f),l=u===r?(o-a)/p+(o<a?6:0):u===o?(a-r)/p+2:(r-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qc=function(t){var e=[],n=[],i=-1;return t.split(Nn).forEach(function(r){var o=r.match(wi)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Ec=function(t,e,n){var i="",r=(t+i).match(Nn),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=Kc(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Qc(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Nn,"1").split(wi),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Nn),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Nn=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vs)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),td=/hsl[a]?\(/,Ao=function(t){var e=t.join(" "),n;if(Nn.lastIndex=0,Nn.test(e))return n=td.test(e),t[1]=Ec(t[1],n),t[0]=Ec(t[0],n,Qc(t[1])),!0},qs,Ze=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,p,_=function g(m){var d=s()-i,y=m===!0,x,S,C,T;if(d>t&&(n+=d-e),i+=d,C=i-n,x=C-o,(x>0||y)&&(T=++u.frame,f=C-u.time*1e3,u.time=C=C/1e3,o+=x+(x>=r?4:r-x),S=1),y||(l=c(g)),S)for(p=0;p<a.length;p++)a[p](C,f,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Lc&&(!lo&&vo()&&(cn=lo=window,So=cn.document||{},tn.gsap=Ne,(cn.gsapVersions||(cn.gsapVersions=[])).push(Ne.version),Ic(Tr||cn.GreenSockGlobals||!cn.gsap&&cn||{}),h=cn.requestAnimationFrame,Jc.forEach($c)),l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},qs=1,_(2))},sleep:function(){(h?cn.cancelAnimationFrame:clearTimeout)(l),qs=0,c=Xs},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,d,y){var x=d?function(S,C,T,w){m(S,C,T,w),u.remove(x)}:m;return u.remove(m),a[y?"unshift":"push"](x),ts(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},u})(),ts=function(){return!qs&&Ze.wake()},Xt={},ed=/^[\d.\-M][\d.\-,\s]/,nd=/["']/g,id=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(nd,"").trim():+c,i=l.substr(a+1).trim();return e},sd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},rd=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[id(e[1])]:sd(t).split(",").map(Oc)):Xt._CE&&ed.test(t)?Xt._CE("",t):n},jc=function(t){return function(e){return 1-t(1-e)}},th=function s(t,e){for(var n=t._first,i;n;)n instanceof Ie?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},bi=function(t,e){return t&&(fe(t)?t:Xt[t]||rd(t))||e},Ci=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return ze(t,function(a){Xt[a]=tn[a]=r,Xt[o=a.toLowerCase()]=n;for(var l in r)Xt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[a+"."+l]=r[l]}),r},eh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},no=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ao*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Df((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:eh(a);return r=ao/r,l.config=function(c,h){return s(t,c,h)},l},io=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:eh(n);return i.config=function(r){return s(t,r)},i};ze("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ci(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;Ci("Elastic",no("in"),no("out"),no());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ci("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ci("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ci("Circ",function(s){return-(Cc(1-s*s)-1)});Ci("Sine",function(s){return s===1?1:-If(s*Pf)+1});Ci("Back",io("in"),io("out"),io());Xt.SteppedEase=Xt.steps=tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-te;return function(a){return((i*Zs(0,o,a)|0)+r)*n}}};Ki.ease=Xt["quad.out"];ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return To+=s+","+s+"Params,"});var Co=function(t,e){this.id=Lf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:wo,this.set=e?e.getSetter:Nr},Ys=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ji(this,+e.duration,1,1),this.data=e.data,ue&&(this._ctx=ue,ue.data.push(this)),qs||Ze.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ji(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ts(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ur(this,n),!r._dp||r.parent||zc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Nc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Qi(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Cr(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(Zs(-Math.abs(this._delay),this._tDur,i),!0),Dr(this),kf(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cr(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Of);var i=De;return De=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),De=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ln(this,n),Je(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Je(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-te)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=fe(n)?n:Fc,a=function(){var c=i.then;i.then=null,fe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ks(this)},s})();dn(Ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var Ie=(function(s){Ac(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Je(n.sortChildren),oe&&An(n.parent||oe,Un(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&kc(Un(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Gs(0,arguments,this),this},e.from=function(i,r,o){return Gs(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Gs(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Hs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ge(i,r,ln(this,o),1),this},e.call=function(i,r,o){return An(this,ge.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ge(i,o,ln(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Hs(o).immediateRender=Je(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Hs(a).immediateRender=Je(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ae(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,p,_,g,m,d,y,x,S,C,T,w;if(this!==oe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,S=this._start,x=this._ts,d=!x,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Ae(h%m),h===l?(g=this._repeat,f=c):(g=~~(h/m),g&&g===h/m&&(f=c,g--),f>c&&(f=c)),C=Qi(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),T&&g&1&&(f=c-f,w=1),g!==C&&!this._lock){var L=T&&C&1,v=L===(T&&g&1);if(g<C&&(L=!L),a=L?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Ae(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;th(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Wf(this,Ae(a),Ae(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!g&&(fn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,o),f!==this._time||!this._ts&&!d){y=0,_&&(h+=this._zTime=-te);break}}p=_}else{p=this._last;for(var E=i<0?i:f;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,r,o||De&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){y=0,_&&(h+=this._zTime=E?-te:te);break}}p=_}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-te)._zTime=f>=a?1:-1,this._ts))return this._start=S,Dr(this),this.render(i,r,o);this._onUpdate&&!r&&fn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Qn(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(fn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(On(r)||(r=ln(this,r,i)),!(i instanceof Ys)){if(Ue(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ve(i))return this.addLabel(i,r);if(fe(i))i=ge.delayedCall(0,i);else return this}return this!==i?An(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-hn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ge?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return ve(i)?this.removeLabel(i):fe(i)?this.killTweensOf(i):(Ir(this,i),i===this._recent&&(this._recent=this._last),Si(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(Ze.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=ln(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=ge.delayedCall(0,r||Xs,o);return a.data="isPause",this._hasPause=1,An(this,a,ln(this,i))},e.removePause=function(i){var r=this._first;for(i=ln(this,i);r;)r._start===i&&r.data==="isPause"&&Qn(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Jn!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=un(i),l=this._first,c=On(r),h;l;)l instanceof ge?Ff(l._targets,a)&&(c?(!Jn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=ln(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,p,_=ge.to(o,dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||te,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&ji(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,dn({startAt:{time:ln(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Tc(this,ln(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Tc(this,ln(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Si(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Si(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=hn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,An(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ji(o,o===oe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(oe._ts&&(Nc(oe,Cr(i,oe)),Uc=Ze.frame),Ze.frame>=yc){yc+=$e.autoSleep||120;var r=oe._first;if((!r||!r._ts)&&$e.autoSleep&&Ze._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ze.sleep()}}},t})(Ys);dn(Ie.prototype,{_lock:0,_hasPause:0,_forcing:0});var ad=function(t,e,n,i,r,o,a){var l=new ke(this._pt,t,e,0,1,Do,null,r),c=0,h=0,u,f,p,_,g,m,d,y;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=es(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(ja)||[];u=ja.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ai(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=ja.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Mo.test(i)||d)&&(l.e=0),this._pt=l,l},Ro=function(t,e,n,i,r,o,a,l,c,h){fe(i)&&(i=i(r||0,t,o));var u=t[e],f=n!=="get"?n:fe(u)?c?t[e.indexOf("set")||!fe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=fe(u)?c?ud:sh:Io,_;if(ve(i)&&(~i.indexOf("random(")&&(i=es(i)),i.charAt(1)==="="&&(_=Ai(f,i)+(Ce(f)||0),(_||_===0)&&(i=_))),!h||f!==i||go)return!isNaN(f*i)&&i!==""?(_=new ke(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?dd:rh,0,p),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Lr(e,i),ad.call(this,t,e,f,i,p,l||$e.stringFilter,c))},od=function(t,e,n,i,r){if(fe(t)&&(t=Ws(t,r,e,n,i)),!Cn(t)||t.style&&t.nodeType||Ue(t)||Rc(t))return ve(t)?Ws(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ws(t[a],r,e,n,i);return o},Po=function(t,e,n,i,r,o){var a,l,c,h;if(Ye[t]&&(a=new Ye[t]).init(r,a.rawVars?e[t]:od(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new ke(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==$i))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Jn,go,Lo=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,d=t._startAt,y=t._targets,x=t.parent,S=x&&x.data==="nested"?x.vars.targets:y,C=t._overwrite==="auto"&&!xo,T=t.timeline,w,L,v,E,N,G,$,R,U,B,Z,q,Y;if(T&&(!_||!r)&&(r="none"),t._ease=bi(r,Ki.ease),t._yEase=p?jc(bi(p===!0?r:p,Ki.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!T&&!!i.runBackwards,!T||_&&!i.stagger){if(R=y[0]?Kn(y[0]).harness:0,q=R&&i[R.prop],w=Ar(i,bo),d&&(d._zTime<0&&d.progress(1),e<0&&f&&a&&!g?d.render(-1,!0):d.revert(f&&m?Mr:Nf),d._lazy=0),o){if(Qn(t._startAt=ge.set(y,dn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Je(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De||!a&&!g)&&t._startAt.revert(Mr),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(a=!1),v=dn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Je(l),immediateRender:a,stagger:0,parent:x},w),q&&(v[R.prop]=q),Qn(t._startAt=ge.set(y,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De?t._startAt.revert(Mr):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Je(l)||l&&!m,L=0;L<y.length;L++){if(N=y[L],$=N._gsap||Eo(y)[L]._gsap,t._ptLookup[L]=B={},co[$.id]&&$n.length&&wr(),Z=S===y?L:S.indexOf(N),R&&(U=new R).init(N,q||w,t,Z,S)!==!1&&(t._pt=E=new ke(t._pt,N,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(K){B[K]=E}),U.priority&&(G=1)),!R||q)for(v in w)Ye[v]&&(U=Po(v,w,t,Z,N,S))?U.priority&&(G=1):B[v]=E=Ro.call(t,N,v,"get",w[v],Z,S,0,i.stringFilter);t._op&&t._op[L]&&t.kill(N,t._op[L]),C&&t._pt&&(Jn=t,oe.killTweensOf(N,B,t.globalTime(e)),Y=!t.parent,Jn=0),t._pt&&l&&(co[$.id]=1)}G&&No(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,_&&e<=0&&T.render(hn,!0,!0)},ld=function(t,e,n,i,r,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return go=1,t.vars[e]="+=0",Lo(t,a),go=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,h.e&&(h.e=de(n)+Ce(h.e)),h.b&&(h.b=c.s+Ce(h.b))},cd=function(t,e){var n=t[0]?Kn(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Ei({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},hd=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Ue(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ws=function(t,e,n,i,r){return fe(t)?t.call(e,n,i,r):ve(t)&&~t.indexOf("random(")?es(t):t},nh=To+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ih={};ze(nh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ih[s]=1});var ge=(function(s){Ac(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Hs(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,y=i.parent||oe,x=(Ue(n)||Rc(n)?On(n[0]):"length"in i)?[n]:un(n),S,C,T,w,L,v,E,N;if(a._targets=x.length?Eo(x):Er("GSAP target "+n+" not found. https://greensock.com",!$e.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||yr(c)||yr(h)){if(i=a.vars,S=a.timeline=new Ie({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),S.kill(),S.parent=S._dp=Un(a),S._start=0,f||yr(c)||yr(h)){if(w=x.length,E=f&&Wc(f),Cn(f))for(L in f)~nh.indexOf(L)&&(N||(N={}),N[L]=f[L]);for(C=0;C<w;C++)T=Ar(i,ih),T.stagger=0,d&&(T.yoyoEase=d),N&&Ei(T,N),v=x[C],T.duration=+Ws(c,Un(a),C,v,x),T.delay=(+Ws(h,Un(a),C,v,x)||0)-a._delay,!f&&w===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),S.to(v,T,E?E(C,v,x):0),S._ease=Xt.none;S.duration()?c=h=0:a.timeline=0}else if(_){Hs(dn(S.vars.defaults,{ease:"none"})),S._ease=bi(_.ease||i.ease||"none");var G=0,$,R,U;if(Ue(_))_.forEach(function(B){return S.to(x,B,">")}),S.duration();else{T={};for(L in _)L==="ease"||L==="easeEach"||hd(L,_[L],T,_.easeEach);for(L in T)for($=T[L].sort(function(B,Z){return B.t-Z.t}),G=0,C=0;C<$.length;C++)R=$[C],U={ease:R.e,duration:(R.t-(C?$[C-1].t:0))/100*c},U[L]=R.v,S.to(x,U,G),G+=U.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return p===!0&&!xo&&(Jn=Un(a),oe.killTweensOf(x),Jn=0),An(y,Un(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===Ae(y._time)&&Je(u)&&Vf(Un(a))&&y.data!=="nested")&&(a._tTime=-te,a.render(Math.max(0,-h)||0)),m&&kc(Un(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-te&&!h?l:i<te?0:i,f,p,_,g,m,d,y,x,S;if(!c)Gf(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(f=Ae(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===u/g&&(f=c,_--),f>c&&(f=c)),d=this._yoyo&&_&1,d&&(S=this._yEase,f=c-f),m=Qi(this._tTime,g),f===a&&!o&&this._initted)return this._tTime=u,this;_!==m&&(x&&this._yEase&&th(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render(Ae(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Vc(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!r&&!_&&(fn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;x&&x.render(i<0?i:!f&&d?-te:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ho(this,i,r,o),fn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&fn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ho(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Qn(this,1),!r&&!(h&&!a)&&(u||a||d)&&(fn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a){qs||Ze.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Lo(this,l),c=this._ease(l/this._dur),ld(this,i,r,o,a,c,l)?this.resetTo(i,r,o,a):(Ur(this,0),this.parent||Bc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ks(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Jn&&Jn.vars.overwrite!==!0)._first||ks(this),this.parent&&o!==this.timeline.totalDuration()&&ji(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?un(i):a,c=this._ptLookup,h=this._pt,u,f,p,_,g,m,d;if((!r||r==="all")&&zf(a,l))return r==="all"&&(this._pt=0),ks(this);for(u=this._op=this._op||[],r!=="all"&&(ve(r)&&(g={},ze(r,function(y){return g[y]=1}),r=g),r=cd(a,r)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],r==="all"?(u[d]=r,_=f,p={}):(p=u[d]=u[d]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ir(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&ks(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Gs(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Gs(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return oe.killTweensOf(i,r,o)},t})(Ys);dn(ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ze("staggerTo,staggerFrom,staggerFromTo",function(s){ge[s]=function(){var t=new Ie,e=fo.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Io=function(t,e,n){return t[e]=n},sh=function(t,e,n){return t[e](n)},ud=function(t,e,n,i){return t[e](i.fp,n)},fd=function(t,e,n){return t.setAttribute(e,n)},Nr=function(t,e){return fe(t[e])?sh:Pr(t[e])&&t.setAttribute?fd:Io},rh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},dd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Do=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Uo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},pd=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},md=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ir(this,e,"_pt"):e.dep||(n=1),e=i;return!n},gd=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},No=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},ke=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||rh,this.d=l||this,this.set=c||Io,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=gd,this.m=n,this.mt=r,this.tween=i},s})();ze(To+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return bo[s]=1});tn.TweenMax=tn.TweenLite=ge;tn.TimelineLite=tn.TimelineMax=Ie;oe=new Ie({sortChildren:!1,defaults:Ki,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$e.stringFilter=Ao;var Ti=[],br={},_d=[],wc=0,xd=0,so=function(t){return(br[t]||_d).map(function(e){return e()})},_o=function(){var t=Date.now(),e=[];t-wc>2&&(so("matchMediaInit"),Ti.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=cn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),so("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),wc=t,so("matchMedia"))},ah=(function(){function s(e,n){this.selector=n&&po(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xd++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){fe(n)&&(r=i,i=n,n=fe);var o=this,a=function(){var c=ue,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=po(r)),ue=o,u=i.apply(o,arguments),fe(u)&&o._r.push(u),ue=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===fe?a(o):n?o[n]=a:a},t.ignore=function(n){var i=ue;ue=null,n(this),ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ge)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=Ti.length;a--;)Ti[a].id===this.id&&Ti.splice(a,1)},t.revert=function(n){this.kill(n||{})},s})(),vd=(function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){Cn(n)||(n={matches:n});var o=new ah(0,r||this.scope),a=o.conditions={},l,c,h;ue&&!o.selector&&(o.selector=ue.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=cn.matchMedia(n[c]),l&&(Ti.indexOf(o)<0&&Ti.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(_o):l.addEventListener("change",_o)));return h&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Rr={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return $c(i)})},timeline:function(t){return new Ie(t)},getTweensOf:function(t,e){return oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){ve(t)&&(t=un(t)[0]);var r=Kn(t||{}).get,o=n?Fc:Oc;return n==="native"&&(n=""),t&&(e?o((Ye[e]&&Ye[e].get||r)(t,e,n,i)):function(a,l,c){return o((Ye[a]&&Ye[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=un(t),t.length>1){var i=t.map(function(h){return Ne.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=Ye[e],a=Kn(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;$i._pt=0,u.init(t,n?h+n:h,$i,0,[t]),u.render(1,u),$i._pt&&Uo(1,$i)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Ne.to(t,Ei((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=bi(t.ease,Ki.ease)),Mc(Ki,t||{})},config:function(t){return Mc($e,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ye[a]&&!tn[a]&&Er(e+" effect requires "+a+" plugin.")}),to[e]=function(a,l,c){return n(un(a),dn(l||{},r),c)},o&&(Ie.prototype[e]=function(a,l,c){return this.add(to[e](a,Cn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=bi(e)},parseEase:function(t,e){return arguments.length?bi(t,e):Xt},getById:function(t){return oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ie(t),i,r;for(n.smoothChildTiming=Je(t.smoothChildTiming),oe.remove(n),n._dp=0,n._time=n._tTime=oe._time,i=oe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ge&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=r;return An(oe,n,0),n},context:function(t,e){return t?new ah(t,e):ue},matchMedia:function(t){return new vd(t)},matchMediaRefresh:function(){return Ti.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||_o()},addEventListener:function(t,e){var n=br[t]||(br[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=br[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Kf,wrapYoyo:Qf,distribute:Wc,random:qc,snap:Xc,normalize:$f,getUnit:Ce,clamp:qf,splitColor:Kc,toArray:un,selector:po,mapRange:Zc,pipe:Zf,unitize:Jf,interpolate:jf,shuffle:Gc},install:Ic,effects:to,ticker:Ze,updateRoot:Ie.updateRoot,plugins:Ye,globalTimeline:oe,core:{PropTween:ke,globals:Dc,Tween:ge,Timeline:Ie,Animation:Ys,getCache:Kn,_removeLinkedListItem:Ir,reverting:function(){return De},context:function(t){return t&&ue&&(ue.data.push(t),t._ctx=ue),ue},suppressOverwrites:function(t){return xo=t}}};ze("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Rr[s]=ge[s]});Ze.add(Ie.updateRoot);$i=Rr.to({},{duration:0});var yd=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Md=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=yd(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ro=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(ve(r)&&(l={},ze(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Md(a,r)}}}},Ne=Rr.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)De?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ro("roundProps",mo),ro("modifiers"),ro("snap",Xc))||Rr;ge.version=Ie.version=Ne.version="3.12.2";Lc=1;vo()&&ts();var Sd=Xt.Power0,bd=Xt.Power1,Td=Xt.Power2,Ed=Xt.Power3,wd=Xt.Power4,Ad=Xt.Linear,Cd=Xt.Quad,Rd=Xt.Cubic,Pd=Xt.Quart,Ld=Xt.Quint,Id=Xt.Strong,Dd=Xt.Elastic,Ud=Xt.Back,Nd=Xt.SteppedEase,Od=Xt.Bounce,Fd=Xt.Sine,Bd=Xt.Expo,zd=Xt.Circ;var oh,ti,is,Ho,Ii,kd,lh,Go,Vd=function(){return typeof window<"u"},Bn={},Li=180/Math.PI,ss=Math.PI/180,ns=Math.atan2,ch=1e8,Wo=/([A-Z])/g,Hd=/(left|right|width|margin|padding|x)/i,Gd=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Xd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},gh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},_h=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Yd=function(t,e,n){return t.style[e]=n},Zd=function(t,e,n){return t.style.setProperty(e,n)},Jd=function(t,e,n){return t._gsap[e]=n},$d=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Kd=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Qd=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},le="transform",xn=le+"Origin",jd=function s(t,e){var n=this,i=this.target,r=i.style;if(t in Bn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Rn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Fn(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Fn(i,t);else return Rn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(le)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xn,e,"")),t=le}(r||e)&&this.props.push(t,e,r[t])},xh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},tp=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Wo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Go(),(!r||!r.isStart)&&!n[le]&&(xh(n),i.uncache=1)}},vh=function(t,e){var n={target:t,props:[],revert:tp,save:jd};return t._gsap||Ne.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},yh,zo=function(t,e){var n=ti.createElementNS?ti.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ti.createElement(t);return n.style?n:ti.createElement(t)},Pn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,rs(e)||e,1)||""},hh="O,Moz,ms,Ms,Webkit".split(","),rs=function(t,e,n){var i=e||Ii,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(hh[o]+t in r););return o<0?null:(o===3?"ms":o>=0?hh[o]:"")+t},ko=function(){Vd()&&window.document&&(oh=window,ti=oh.document,is=ti.documentElement,Ii=zo("div")||{style:{}},kd=zo("div"),le=rs(le),xn=le+"Origin",Ii.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yh=!!rs("perspective"),Go=Ne.core.reverting,Ho=1)},Oo=function s(t){var e=zo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(is.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),is.removeChild(e),this.style.cssText=r,o},uh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Mh=function(t){var e;try{e=t.getBBox()}catch{e=Oo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Oo||(e=Oo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+uh(t,["x","cx","x1"])||0,y:+uh(t,["y","cy","y1"])||0,width:0,height:0}:e},Sh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Mh(t))},$s=function(t,e){if(e){var n=t.style;e in Bn&&e!==xn&&(e=le),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Wo,"-$1").toLowerCase())):n.removeAttribute(e)}},ei=function(t,e,n,i,r,o){var a=new ke(t._pt,e,n,0,1,o?_h:gh);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},fh={deg:1,rad:1,turn:1},ep={grid:1,flex:1},ni=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ii.style,l=Hd.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",p=i==="%",_,g,m,d;return i===o||!r||fh[i]||fh[o]?r:(o!=="px"&&!f&&(r=s(t,e,n,"px")),d=t.getCTM&&Sh(t),(p||o==="%")&&(Bn[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[l?"width":"height"]:t[h],de(p?r/_*u:r/100*_)):(a[l?"width":"height"]=u+(f?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ti||!g.appendChild)&&(g=ti.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Ze.time&&!m.uncache?de(r/m.width*u):((p||o==="%")&&!ep[Pn(g,"display")]&&(a.position=Pn(t,"position")),g===t&&(a.position="static"),g.appendChild(Ii),_=Ii[h],g.removeChild(Ii),a.position="absolute",l&&p&&(m=Kn(g),m.time=Ze.time,m.width=g[h]),de(f?_*r/u:_&&r?u/_*r:0))))},Fn=function(t,e,n,i){var r;return Ho||ko(),e in Rn&&e!=="transform"&&(e=Rn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bn[e]&&e!=="transform"?(r=Qs(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Fr(Pn(t,xn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Or[e]&&Or[e](t,e,n)||Pn(t,e)||wo(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ni(t,e,r,n)+n:r},np=function(t,e,n,i){if(!n||n==="none"){var r=rs(e,t,1),o=r&&Pn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Pn(t,"borderTopColor"))}var a=new ke(this._pt,t.style,e,0,1,Do),l=0,c=0,h,u,f,p,_,g,m,d,y,x,S,C;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Pn(t,e)||i,t.style[e]=n),h=[n,i],Ao(h),n=h[0],i=h[1],f=n.match(wi)||[],C=i.match(wi)||[],C.length){for(;u=wi.exec(i);)m=u[0],y=i.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ai(p,m)+S),d=parseFloat(m),x=m.substr((d+"").length),l=wi.lastIndex-x.length,x||(x=x||$e.units[e]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(p=ni(t,e,g,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:p,c:d-p,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?_h:gh;return Mo.test(i)&&(a.e=0),this._pt=a,a},dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ip=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=dh[n]||n,e[1]=dh[i]||i,e.join(" ")},sp=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Bn[a]&&(l=1,a=a==="transformOrigin"?xn:le),$s(n,a);l&&($s(n,le),o&&(o.svg&&n.removeAttribute("transform"),Qs(n,1),o.uncache=1,xh(i)))}},Or={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new ke(t._pt,e,n,0,0,sp);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ks=[1,0,0,1,0,0],bh={},Th=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ph=function(t){var e=Pn(t,le);return Th(e)?Ks:e.substr(7).match(yo).map(de)},Xo=function(t,e){var n=t._gsap||Kn(t),i=t.style,r=ph(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ks:r):(r===Ks&&!t.offsetParent&&t!==is&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,is.appendChild(t)),r=ph(t),l?i.display=l:$s(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):is.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vo=function(t,e,n,i,r,o){var a=t._gsap,l=r||Xo(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],y=l[5],x=e.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,w,L,v;n?l!==Ks&&(w=p*m-_*g)&&(L=S*(m/w)+C*(-g/w)+(g*y-m*d)/w,v=S*(-_/w)+C*(p/w)-(p*y-_*d)/w,S=L,C=v):(T=Mh(t),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&a.smooth?(d=S-c,y=C-h,a.xOffset=u+(d*p+y*g)-d,a.yOffset=f+(d*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[xn]="0px 0px",o&&(ei(o,a,"xOrigin",c,S),ei(o,a,"yOrigin",h,C),ei(o,a,"xOffset",u,a.xOffset),ei(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+C)},Qs=function(t,e){var n=t._gsap||new Co(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Pn(t,xn)||"0",h,u,f,p,_,g,m,d,y,x,S,C,T,w,L,v,E,N,G,$,R,U,B,Z,q,Y,K,Q,rt,X,J,st;return h=u=f=g=m=d=y=x=S=0,p=_=1,n.svg=!!(t.getCTM&&Sh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[le]!=="none"?l[le]:"")),i.scale=i.rotate=i.translate="none"),w=Xo(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Vo(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,T=n.yOrigin||0,w!==Ks&&(N=w[0],G=w[1],$=w[2],R=w[3],h=U=w[4],u=B=w[5],w.length===6?(p=Math.sqrt(N*N+G*G),_=Math.sqrt(R*R+$*$),g=N||G?ns(G,N)*Li:0,y=$||R?ns($,R)*Li+g:0,y&&(_*=Math.abs(Math.cos(y*ss))),n.svg&&(h-=C-(C*N+T*$),u-=T-(C*G+T*R))):(st=w[6],X=w[7],K=w[8],Q=w[9],rt=w[10],J=w[11],h=w[12],u=w[13],f=w[14],L=ns(st,rt),m=L*Li,L&&(v=Math.cos(-L),E=Math.sin(-L),Z=U*v+K*E,q=B*v+Q*E,Y=st*v+rt*E,K=U*-E+K*v,Q=B*-E+Q*v,rt=st*-E+rt*v,J=X*-E+J*v,U=Z,B=q,st=Y),L=ns(-$,rt),d=L*Li,L&&(v=Math.cos(-L),E=Math.sin(-L),Z=N*v-K*E,q=G*v-Q*E,Y=$*v-rt*E,J=R*E+J*v,N=Z,G=q,$=Y),L=ns(G,N),g=L*Li,L&&(v=Math.cos(L),E=Math.sin(L),Z=N*v+G*E,q=U*v+B*E,G=G*v-N*E,B=B*v-U*E,N=Z,U=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=de(Math.sqrt(N*N+G*G+$*$)),_=de(Math.sqrt(B*B+st*st)),L=ns(U,B),y=Math.abs(L)>2e-4?L*Li:0,S=J?1/(J<0?-J:J):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Th(Pn(t,le)),Z&&t.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(p*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=de(p),n.scaleY=de(_),n.rotation=de(g)+a,n.rotationX=de(m)+a,n.rotationY=de(d)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[xn]=Fr(c)),n.xOffset=n.yOffset=0,n.force3D=$e.force3D,n.renderTransform=n.svg?ap:yh?Eh:rp,n.uncache=0,n},Fr=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fo=function(t,e,n){var i=Ce(e);return de(parseFloat(e)+parseFloat(ni(t,"x",n+"px",i)))+i},rp=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Eh(t,e)},Ri="0deg",Js="0px",Pi=") ",Eh=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,y=n.target,x=n.zOrigin,S="",C=d==="auto"&&t&&t!==1||d===!0;if(x&&(u!==Ri||h!==Ri)){var T=parseFloat(h)*ss,w=Math.sin(T),L=Math.cos(T),v;T=parseFloat(u)*ss,v=Math.cos(T),o=Fo(y,o,w*v*-x),a=Fo(y,a,-Math.sin(T)*-x),l=Fo(y,l,L*v*-x+x)}m!==Js&&(S+="perspective("+m+Pi),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(C||o!==Js||a!==Js||l!==Js)&&(S+=l!==Js||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pi),c!==Ri&&(S+="rotate("+c+Pi),h!==Ri&&(S+="rotateY("+h+Pi),u!==Ri&&(S+="rotateX("+u+Pi),(f!==Ri||p!==Ri)&&(S+="skew("+f+", "+p+Pi),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Pi),y.style[le]=S||"translate(0, 0)"},ap=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,y=n.forceCSS,x=parseFloat(o),S=parseFloat(a),C,T,w,L,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ss,c*=ss,C=Math.cos(l)*u,T=Math.sin(l)*u,w=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(h*=ss,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,L*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),C*=v,T*=v)),C=de(C),T=de(T),w=de(w),L=de(L)):(C=u,L=f,T=w=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=ni(p,"x",o,"px"),S=ni(p,"y",a,"px")),(_||g||m||d)&&(x=de(x+_-(_*C+g*w)+m),S=de(S+g-(_*T+g*L)+d)),(i||r)&&(v=p.getBBox(),x=de(x+i/100*v.width),S=de(S+r/100*v.height)),v="matrix("+C+","+T+","+w+","+L+","+x+","+S+")",p.setAttribute("transform",v),y&&(p.style[le]=v)},op=function(t,e,n,i,r){var o=360,a=ve(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Li:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*ch)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*ch)%o-~~(c/o)*o)),t._pt=f=new ke(t._pt,e,n,i,c,Wd),f.e=h,f.u="deg",t._props.push(n),f},mh=function(t,e){for(var n in e)t[n]=e[n];return t},lp=function(t,e,n){var i=mh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[le]=e,a=Qs(n,1),$s(n,le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[le],o[le]=e,a=Qs(n,1),o[le]=c);for(l in Bn)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(p=Ce(c),_=Ce(h),u=p!==_?ni(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new ke(t._pt,a,l,u,f-u,Bo),t._pt.u=_||0,t._props.push(l));mh(a,i)};ze("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Or[t>1?"border"+s:s]=function(a,l,c,h,u){var f,p;if(arguments.length<4)return f=o.map(function(_){return Fn(a,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,u)}});var qo={name:"css",register:ko,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,p,_,g,m,d,y,x,S,C,T,w,L;Ho||ko(),this.styles=this.styles||vh(t),L=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Ye[g]&&Po(g,e,n,i,t,r)))){if(p=typeof h,_=Or[g],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=es(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Nn.lastIndex=0,Nn.test(c)||(m=Ce(c),d=Ce(h)),d?m!==d&&(c=ni(t,g,c,d)+d):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),L.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],ve(c)&&~c.indexOf("random(")&&(c=es(c)),Ce(c+"")||(c+=$e.units[g]||Ce(Fn(t,g))||""),(c+"").charAt(1)==="="&&(c=Fn(t,g))):c=Fn(t,g),f=parseFloat(c),y=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in Rn&&(g==="autoAlpha"&&(f===1&&Fn(t,"visibility")==="hidden"&&u&&(f=0),L.push("visibility",0,a.visibility),ei(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Rn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Bn,x){if(this.styles.save(g),S||(C=t._gsap,C.renderTransform&&!e.parseTransform||Qs(t,e.parseTransform),T=e.smoothOrigin!==!1&&C.smooth,S=this._pt=new ke(this._pt,a,le,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new ke(this._pt,C,"scaleY",C.scaleY,(y?Ai(C.scaleY,y+u):u)-C.scaleY||0,Bo),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(xn,0,a[xn]),h=ip(h),C.svg?Vo(t,h,0,T,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==C.zOrigin&&ei(this,C,"zOrigin",C.zOrigin,d),ei(this,a,g,Fr(c),Fr(h)));continue}else if(g==="svgOrigin"){Vo(t,h,1,T,0,this);continue}else if(g in bh){op(this,C,g,f,y?Ai(f,y+h):h);continue}else if(g==="smoothOrigin"){ei(this,C,"smooth",C.smooth,h);continue}else if(g==="force3D"){C[g]=h;continue}else if(g==="transform"){lp(this,h,t);continue}}else g in a||(g=rs(g)||g);if(x||(u||u===0)&&(f||f===0)&&!Gd.test(h)&&g in a)m=(c+"").substr((f+"").length),u||(u=0),d=Ce(h)||(g in $e.units?$e.units[g]:m),m!==d&&(f=ni(t,g,c,d)),this._pt=new ke(this._pt,x?C:a,g,f,(y?Ai(f,y+u):u)-f,!x&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?qd:Bo),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Xd);else if(g in a)np.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){Lr(g,h);continue}x||(g in a?L.push(g,0,a[g]):L.push(g,1,c||t[g])),o.push(g)}}w&&No(this)},render:function(t,e){if(e.tween._time||!Go())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Fn,aliases:Rn,getSetter:function(t,e,n){var i=Rn[e];return i&&i.indexOf(",")<0&&(e=i),e in Bn&&e!==xn&&(t._gsap.x||Fn(t,"x"))?n&&lh===n?e==="scale"?$d:Jd:(lh=n||{})&&(e==="scale"?Kd:Qd):t.style&&!Pr(t.style[e])?Yd:~e.indexOf("-")?Zd:Nr(t,e)},core:{_removeProperty:$s,_getMatrix:Xo}};Ne.utils.checkPrefix=rs;Ne.core.getStyleSaver=vh;(function(s,t,e,n){var i=ze(s+","+t+","+e,function(r){Bn[r]=1});ze(t,function(r){$e.units[r]="deg",bh[r]=1}),Rn[i[13]]=s+","+t,ze(n,function(r){var o=r.split(":");Rn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){$e.units[s]="px"});Ne.registerPlugin(qo);var Yo=Ne.registerPlugin(qo)||Ne,Ov=Yo.core.Tween;var cp=0,wh=1,hp=2;var ef=1,up=2,Wn=3,fi=0,Qe=1,sn=2;var In=0,Es=1,da=2,Ah=3,Ch=4,fp=5,Bi=100,dp=101,pp=102,Rh=103,Ph=104,mp=200,gp=201,_p=202,xp=203,El=204,wl=205,vp=206,yp=207,Mp=208,Sp=209,bp=210,Tp=211,Ep=212,wp=213,Ap=214,Cp=0,Rp=1,Pp=2,pa=3,Lp=4,Ip=5,Dp=6,Up=7,nf=0,Np=1,Op=2,hi=0,Fp=1,Bp=2,zp=3,rc=4,kp=5,Vp=6;var sf=300,Rs=301,Ps=302,Al=303,Cl=304,za=306,Rl=1e3,Sn=1001,Pl=1002,Ge=1003,Lh=1004;var Zo=1005;var mn=1006,Hp=1007;var ar=1008;var ui=1009,Gp=1010,Wp=1011,ac=1012,rf=1013,li=1014,ci=1015,Tn=1016,af=1017,of=1018,Vi=1020,Xp=1021,bn=1023,qp=1024,Yp=1025,Hi=1026,Ls=1027,Zp=1028,lf=1029,Jp=1030,cf=1031,hf=1033,Jo=33776,$o=33777,Ko=33778,Qo=33779,Ih=35840,Dh=35841,Uh=35842,Nh=35843,uf=36196,Oh=37492,Fh=37496,Bh=37808,zh=37809,kh=37810,Vh=37811,Hh=37812,Gh=37813,Wh=37814,Xh=37815,qh=37816,Yh=37817,Zh=37818,Jh=37819,$h=37820,Kh=37821,jo=36492,Qh=36494,jh=36495,$p=36283,tu=36284,eu=36285,nu=36286;var ma=2300,ga=2301,tl=2302,iu=2400,su=2401,ru=2402;var ff=3e3,Gi=3001,Kp=3200,Qp=3201,jp=0,tm=1,gn="",Re="srgb",Zn="srgb-linear",oc="display-p3",ka="display-p3-linear",_a="linear",ie="srgb",xa="rec709",va="p3";var as=7680;var au=519,em=512,nm=513,im=514,df=515,sm=516,rm=517,am=518,om=519,ou=35044;var lu="300 es",Ll=1035,qn=2e3,ya=2001,di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=1234567,ws=Math.PI/180,or=180/Math.PI;function Os(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function lc(s,t){return(s%t+t)%t}function lm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function cm(s,t,e){return s!==t?(e-s)/(t-s):0}function ir(s,t,e){return(1-e)*s+e*t}function hm(s,t,e,n){return ir(s,t,1-Math.exp(-e*n))}function um(s,t=1){return t-Math.abs(lc(s,t*2)-t)}function fm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function dm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function pm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function mm(s,t){return s+Math.random()*(t-s)}function gm(s){return s*(.5-Math.random())}function _m(s){s!==void 0&&(cu=s);let t=cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xm(s){return s*ws}function vm(s){return s*or}function Il(s){return(s&s-1)===0&&s!==0}function ym(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ma(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ss(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var cc={DEG2RAD:ws,RAD2DEG:or,generateUUID:Os,clamp:We,euclideanModulo:lc,mapLinear:lm,inverseLerp:cm,lerp:ir,damp:hm,pingpong:um,smoothstep:fm,smootherstep:dm,randInt:pm,randFloat:mm,randFloatSpread:gm,seededRandom:_m,degToRad:xm,radToDeg:vm,isPowerOfTwo:Il,ceilPowerOfTwo:ym,floorPowerOfTwo:Ma,setQuaternionFromProperEuler:Mm,normalize:Ve,denormalize:Ss},Dt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],y=i[1],x=i[4],S=i[7],C=i[2],T=i[5],w=i[8];return r[0]=o*g+a*y+l*C,r[3]=o*m+a*x+l*T,r[6]=o*d+a*S+l*w,r[1]=c*g+h*y+u*C,r[4]=c*m+h*x+u*T,r[7]=c*d+h*S+u*w,r[2]=f*g+p*y+_*C,r[5]=f*m+p*x+_*T,r[8]=f*d+p*S+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,_=e*u+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},el=new Gt;function pf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sm(){let s=Sa("canvas");return s.style.display="block",s}var hu={};function sr(s){s in hu||(hu[s]=!0,console.warn(s))}var uu=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fu=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Zn]:{transfer:_a,primaries:xa,toReference:s=>s,fromReference:s=>s},[Re]:{transfer:ie,primaries:xa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ka]:{transfer:_a,primaries:va,toReference:s=>s.applyMatrix3(fu),fromReference:s=>s.applyMatrix3(uu)},[oc]:{transfer:ie,primaries:va,toReference:s=>s.convertSRGBToLinear().applyMatrix3(fu),fromReference:s=>s.applyMatrix3(uu).convertLinearToSRGB()}},bm=new Set([Zn,ka]),Qt={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Br[t].toReference,i=Br[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Br[s].primaries},getTransfer:function(s){return s===gn?_a:Br[s].transfer}};function As(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function nl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var os,ba=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Sa("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(As(e[n]/255)*255):e[n]=As(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tm=0,Ta=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Os(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(il(i[o].image)):r.push(il(i[o]))}else r=il(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function il(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ba.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Em=0,En=class s extends di{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Sn,i=Sn,r=mn,o=ar,a=bn,l=ui,c=s.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Os(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Gi?Re:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rl:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rl:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?Gi:ff}set encoding(t){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gi?Re:gn}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=sf;En.DEFAULT_ANISOTROPY=1;var Pe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,S=(p+1)/2,C=(d+1)/2,T=(h+f)/4,w=(u+g)/4,L=(_+m)/4;return x>S&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=w/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=L/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gi?Re:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends Dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ea=class extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=class extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==p||h!==_){let m=1-a,d=l*f+c*p+h*_+u*g,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,d*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let S=a*y;if(l=l*m+f*S,c=c*m+p*S,h=h*m+_*S,u=u*m+g*S,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*p-c*f,t[e+1]=l*_+h*f+c*u-a*p,t[e+2]=c*_+h*p+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new D,du=new pi,Wi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),kr.subVectors(this.max,js),ls.subVectors(t.a,js),cs.subVectors(t.b,js),hs.subVectors(t.c,js),ii.subVectors(cs,ls),si.subVectors(hs,cs),Di.subVectors(ls,hs);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Di.z,Di.y,ii.z,0,-ii.x,si.z,0,-si.x,Di.z,0,-Di.x,-ii.y,ii.x,0,-si.y,si.x,0,-Di.y,Di.x,0];return!rl(e,ls,cs,hs,kr)||(e=[1,0,0,0,1,0,0,0,1],!rl(e,ls,cs,hs,kr))?!1:(Vr.crossVectors(ii,si),e=[Vr.x,Vr.y,Vr.z],rl(e,ls,cs,hs,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},zn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,zr=new Wi,ls=new D,cs=new D,hs=new D,ii=new D,si=new D,Di=new D,js=new D,kr=new D,Vr=new D,Ui=new D;function rl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ui.fromArray(s,r);let a=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wm=new Wi,tr=new D,al=new D,Xi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(al)),this.expandByPoint(tr.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new D,ol=new D,Hr=new D,ri=new D,ll=new D,Gr=new D,cl=new D,lr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ol.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(ol);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=ri.dot(this.direction),l=-ri.dot(Hr),c=ri.lengthSq(),h=Math.abs(1-o*o),u,f,p,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ol).addScaledVector(Hr,f),p}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,r){ll.subVectors(e,t),Gr.subVectors(n,t),cl.crossVectors(ll,Gr);let o=this.direction.dot(cl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let l=a*this.direction.dot(Gr.crossVectors(ri,Gr));if(l<0)return null;let c=a*this.direction.dot(ll.cross(ri));if(c<0||l+c>o)return null;let h=-a*ri.dot(cl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,p,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,p,_,g,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,p,_,g,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Am,t,Cm)}lookAt(t,e,n){let i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ai.crossVectors(n,en),ai.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ai.crossVectors(n,en)),ai.normalize(),Wr.crossVectors(en,ai),i[0]=ai.x,i[4]=Wr.x,i[8]=en.x,i[1]=ai.y,i[5]=Wr.y,i[9]=en.y,i[2]=ai.z,i[6]=Wr.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],y=n[3],x=n[7],S=n[11],C=n[15],T=i[0],w=i[4],L=i[8],v=i[12],E=i[1],N=i[5],G=i[9],$=i[13],R=i[2],U=i[6],B=i[10],Z=i[14],q=i[3],Y=i[7],K=i[11],Q=i[15];return r[0]=o*T+a*E+l*R+c*q,r[4]=o*w+a*N+l*U+c*Y,r[8]=o*L+a*G+l*B+c*K,r[12]=o*v+a*$+l*Z+c*Q,r[1]=h*T+u*E+f*R+p*q,r[5]=h*w+u*N+f*U+p*Y,r[9]=h*L+u*G+f*B+p*K,r[13]=h*v+u*$+f*Z+p*Q,r[2]=_*T+g*E+m*R+d*q,r[6]=_*w+g*N+m*U+d*Y,r[10]=_*L+g*G+m*B+d*K,r[14]=_*v+g*$+m*Z+d*Q,r[3]=y*T+x*E+S*R+C*q,r[7]=y*w+x*N+S*U+C*Y,r[11]=y*L+x*G+S*B+C*K,r[15]=y*v+x*$+S*Z+C*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*p-n*l*p)+g*(+e*l*p-e*c*f+r*o*f-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],y=u*m*c-g*f*c+g*l*p-a*m*p-u*l*d+a*f*d,x=_*f*c-h*m*c-_*l*p+o*m*p+h*l*d-o*f*d,S=h*g*c-_*u*c+_*a*p-o*g*p-h*a*d+o*u*d,C=_*u*l-h*g*l-_*a*f+o*g*f+h*a*m-o*u*m,T=e*y+n*x+i*S+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=y*w,t[1]=(g*f*r-u*m*r-g*i*p+n*m*p+u*i*d-n*f*d)*w,t[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*d+n*l*d)*w,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*p-n*l*p)*w,t[4]=x*w,t[5]=(h*m*r-_*f*r+_*i*p-e*m*p-h*i*d+e*f*d)*w,t[6]=(_*l*r-o*m*r-_*i*c+e*m*c+o*i*d-e*l*d)*w,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*p+e*l*p)*w,t[8]=S*w,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*d-e*u*d)*w,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*d+e*a*d)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*w,t[12]=C*w,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*w,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,_=r*u,g=o*h,m=o*u,d=a*u,y=l*c,x=l*h,S=l*u,C=n.x,T=n.y,w=n.z;return i[0]=(1-(g+d))*C,i[1]=(p+S)*C,i[2]=(_-x)*C,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(f+d))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(_+x)*w,i[9]=(m-y)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=us.set(i[0],i[1],i[2]).length(),o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(a===qn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ya)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=qn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,p=(n+i)*h,_,g;if(a===qn)_=(o+r)*u,g=-2*u;else if(a===ya)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new D,yn=new we,Am=new D(0,0,0),Cm=new D(1,1,1),ai=new D,Wr=new D,en=new D,pu=new we,mu=new pi,wa=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wa.DEFAULT_ORDER="XYZ";var Aa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rm=0,gu=new D,fs=new pi,Vn=new we,Xr=new D,er=new D,Pm=new D,Lm=new pi,_u=new D(1,0,0),xu=new D(0,1,0),vu=new D(0,0,1),Im={type:"added"},Dm={type:"removed"},rn=class s extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new wa,n=new pi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Gt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(er,Xr,this.up):Vn.lookAt(Xr,er,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Vn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dm)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};rn.DEFAULT_UP=new D(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new D,Hn=new D,hl=new D,Gn=new D,ds=new D,ps=new D,yu=new D,ul=new D,fl=new D,dl=new D,qr=!1,ki=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mn.subVectors(i,e),Hn.subVectors(n,e),hl.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Hn),l=Mn.dot(hl),c=Hn.dot(Hn),h=Hn.dot(hl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(t,e,n,i,r,o,a,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),Hn.subVectors(t,e),Mn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Mn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ds.subVectors(i,n),ps.subVectors(r,n),ul.subVectors(t,n);let l=ds.dot(ul),c=ps.dot(ul);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,i);let h=ds.dot(fl),u=ps.dot(fl);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);dl.subVectors(t,r);let p=ds.dot(dl),_=ps.dot(dl);if(_>=0&&p<=_)return e.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ps,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return yu.subVectors(r,i),a=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(yu,a);let d=1/(m+g+f);return o=g*d,a=f*d,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function pl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=lc(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pl(o,r,t+1/3),this.g=pl(o,r,t),this.b=pl(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=nl(t.r),this.g=nl(t.g),this.b=nl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Qt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(We(Fe.r*255,0,255))*65536+Math.round(We(Fe.g*255,0,255))*256+Math.round(We(Fe.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Fe.copy(this),e);let n=Fe.r,i=Fe.g,r=Fe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Re){Qt.fromWorkingColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,i=Fe.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Yr);let n=ir(oi.h,Yr.h,e),i=ir(oi.s,Yr.s,e),r=ir(oi.l,Yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new zt;zt.NAMES=mf;var Um=0,mi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Es,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=wl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gi=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new D,Zr=new Dt,_n=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ou,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ou&&(t.usage=this.usage),t}};var Ca=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ra=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Nm=0,pn=new we,ml=new rn,ms=new D,nn=new Wi,nr=new Wi,Ee=new D,ye=class s extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?Ra:Ca)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(nn.min,nr.min),nn.expandByPoint(Ee),Ee.addVectors(nn.max,nr.max),nn.expandByPoint(Ee)):(nn.expandByPoint(nr.min),nn.expandByPoint(nr.max))}nn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Ee.add(ms)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new D,h[E]=new D;let u=new D,f=new D,p=new D,_=new Dt,g=new Dt,m=new Dt,d=new D,y=new D;function x(E,N,G){u.fromArray(i,E*3),f.fromArray(i,N*3),p.fromArray(i,G*3),_.fromArray(o,E*2),g.fromArray(o,N*2),m.fromArray(o,G*2),f.sub(u),p.sub(u),g.sub(_),m.sub(_);let $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar($),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar($),c[E].add(d),c[N].add(d),c[G].add(d),h[E].add(y),h[N].add(y),h[G].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,N=S.length;E<N;++E){let G=S[E],$=G.start,R=G.count;for(let U=$,B=$+R;U<B;U+=3)x(n[U+0],n[U+1],n[U+2])}let C=new D,T=new D,w=new D,L=new D;function v(E){w.fromArray(r,E*3),L.copy(w);let N=c[E];C.copy(N),C.sub(w.multiplyScalar(w.dot(N))).normalize(),T.crossVectors(L,N);let $=T.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=$}for(let E=0,N=S.length;E<N;++E){let G=S[E],$=G.start,R=G.count;for(let U=$,B=$+R;U<B;U+=3)v(n[U+0]),v(n[U+1]),v(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new _n(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mu=new we,Ni=new lr,Jr=new Xi,Su=new D,gs=new D,_s=new D,xs=new D,gl=new D,$r=new D,Kr=new Dt,Qr=new Dt,jr=new Dt,bu=new D,Tu=new D,Eu=new D,ta=new D,ea=new D,Ke=class extends rn{constructor(t=new ye,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(gl.fromBufferAttribute(u,t),o?$r.addScaledVector(gl,h):$r.addScaledVector(gl.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Jr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Jr,Su)===null||Ni.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,C=x;S<C;S+=3){let T=a.getX(S),w=a.getX(S+1),L=a.getX(S+2);i=na(this,d,t,n,c,h,u,T,w,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let y=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=na(this,o,t,n,c,h,u,y,x,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,C=x;S<C;S+=3){let T=S,w=S+1,L=S+2;i=na(this,d,t,n,c,h,u,T,w,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let y=m,x=m+1,S=m+2;i=na(this,o,t,n,c,h,u,y,x,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Om(s,t,e,n,i,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===fi,a),l===null)return null;ea.copy(a),ea.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:s}}function na(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,gs),s.getVertexPosition(l,_s),s.getVertexPosition(c,xs);let h=Om(s,t,e,n,gs,_s,xs,ta);if(h){i&&(Kr.fromBufferAttribute(i,a),Qr.fromBufferAttribute(i,l),jr.fromBufferAttribute(i,c),h.uv=ki.getInterpolation(ta,gs,_s,xs,Kr,Qr,jr,new Dt)),r&&(Kr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,l),jr.fromBufferAttribute(r,c),h.uv1=ki.getInterpolation(ta,gs,_s,xs,Kr,Qr,jr,new Dt),h.uv2=h.uv1),o&&(bu.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,l),Eu.fromBufferAttribute(o,c),h.normal=ki.getInterpolation(ta,gs,_s,xs,bu,Tu,Eu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};ki.getNormal(gs,_s,xs,u.normal),h.face=u}return h}var _i=class s extends ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function _(g,m,d,y,x,S,C,T,w,L,v){let E=S/w,N=C/L,G=S/2,$=C/2,R=T/2,U=w+1,B=L+1,Z=0,q=0,Y=new D;for(let K=0;K<B;K++){let Q=K*N-$;for(let rt=0;rt<U;rt++){let X=rt*E-G;Y[g]=X*y,Y[m]=Q*x,Y[d]=R,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[d]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(rt/w),u.push(1-K/L),Z+=1}}for(let K=0;K<L;K++)for(let Q=0;Q<w;Q++){let rt=f+Q+U*K,X=f+Q+U*(K+1),J=f+(Q+1)+U*(K+1),st=f+(Q+1)+U*K;l.push(rt,X,st),l.push(X,J,st),q+=6}a.addGroup(p,q,v),p+=q,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(s){let t={};for(let e=0;e<s.length;e++){let n=Is(s[e]);for(let i in n)t[i]=n[i]}return t}function Fm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gf(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}var xi={clone:Is,merge:He},Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pa=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xe=class extends Pa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,ys=1,Nl=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xe(vs,ys,t,e);i.layers=this.layers,this.add(i);let r=new Xe(vs,ys,t,e);r.layers=this.layers,this.add(r);let o=new Xe(vs,ys,t,e);o.layers=this.layers,this.add(o);let a=new Xe(vs,ys,t,e);a.layers=this.layers,this.add(a);let l=new Xe(vs,ys,t,e);l.layers=this.layers,this.add(l);let c=new Xe(vs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},La=class extends En{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ol=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Gi?Re:gn),this.texture=new La(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _i(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:In});r.uniforms.tEquirect.value=e;let o=new Ke(i,r),a=e.minFilter;return e.minFilter===ar&&(e.minFilter=mn),new Nl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},_l=new D,km=new D,Vm=new Gt,Xn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=_l.subVectors(n,e).cross(km.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vm.getNormalMatrix(t),i=this.coplanarPoint(_l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Xi,ia=new D,Ia=class{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],_=i[9],g=i[10],m=i[11],d=i[12],y=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-r,f-c,m-p,S-d).normalize(),n[1].setComponents(l+r,f+c,m+p,S+d).normalize(),n[2].setComponents(l+o,f+h,m+_,S+y).normalize(),n[3].setComponents(l-o,f-h,m-_,S-y).normalize(),n[4].setComponents(l-a,f-u,m-g,S-x).normalize(),e===qn)n[5].setComponents(l+a,f+u,m+g,S+x).normalize();else if(e===ya)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ia.x=i.normal.x>0?t.max.x:t.min.x,ia.y=i.normal.y>0?t.max.y:t.min.y,ia.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _f(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hm(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,p=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&_.length===0&&s.bufferSubData(u,0,f),_.length!==0){for(let g=0,m=_.length;g<m;g++){let d=_[g];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var qi=class s extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){let y=d*f-o;for(let x=0;x<c;x++){let S=x*u-r;_.push(S,-y,0),g.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){let x=y+c*d,S=y+c*(d+1),C=y+1+c*(d+1),T=y+1+c*d;p.push(x,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(g,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
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
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`
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
}`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
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
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Hg=`struct PhysicalMaterial {
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
}`,Gg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jg=`#if defined( USE_POINTS_UV )
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
#endif`,t_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
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
#endif`,s_=`#ifdef USE_MORPHTARGETS
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
#endif`,r_=`#ifdef USE_MORPHTARGETS
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
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u_=`#ifdef USE_NORMALMAP
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
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A_=`float getShadowMask() {
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
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G_=`uniform sampler2D t2D;
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`#include <common>
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
}`,J_=`#if DEPTH_PACKING == 3200
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
}`,$_=`#define DISTANCE
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
}`,K_=`#define DISTANCE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,a0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,f0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,_0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,v0=`uniform vec3 color;
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
}`,y0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:Zm,aomap_fragment:Jm,aomap_pars_fragment:$m,batching_pars_vertex:Km,batching_vertex:Qm,begin_vertex:jm,beginnormal_vertex:tg,bsdfs:eg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:ag,clipping_planes_vertex:og,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:hg,color_vertex:ug,common:fg,cube_uv_reflection_fragment:dg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:xg,colorspace_fragment:vg,colorspace_pars_fragment:yg,envmap_fragment:Mg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:bg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Og,envmap_vertex:Eg,fog_vertex:wg,fog_pars_vertex:Ag,fog_fragment:Cg,fog_pars_fragment:Rg,gradientmap_pars_fragment:Pg,lightmap_fragment:Lg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ug,lights_pars_begin:Ng,lights_toon_fragment:Fg,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:kg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:$g,map_pars_fragment:Kg,map_particle_fragment:Qg,map_particle_pars_fragment:jg,metalnessmap_fragment:t_,metalnessmap_pars_fragment:e_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:s_,morphtarget_vertex:r_,normal_fragment_begin:a_,normal_fragment_maps:o_,normal_pars_fragment:l_,normal_pars_vertex:c_,normal_vertex:h_,normalmap_pars_fragment:u_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,opaque_fragment:g_,packing:__,premultiplied_alpha_fragment:x_,project_vertex:v_,dithering_fragment:y_,dithering_pars_fragment:M_,roughnessmap_fragment:S_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:T_,shadowmap_pars_vertex:E_,shadowmap_vertex:w_,shadowmask_pars_fragment:A_,skinbase_vertex:C_,skinning_pars_vertex:R_,skinning_vertex:P_,skinnormal_vertex:L_,specularmap_fragment:I_,specularmap_pars_fragment:D_,tonemapping_fragment:U_,tonemapping_pars_fragment:N_,transmission_fragment:O_,transmission_pars_fragment:F_,uv_pars_fragment:B_,uv_pars_vertex:z_,uv_vertex:k_,worldpos_vertex:V_,background_vert:H_,background_frag:G_,backgroundCube_vert:W_,backgroundCube_frag:X_,cube_vert:q_,cube_frag:Y_,depth_vert:Z_,depth_frag:J_,distanceRGBA_vert:$_,distanceRGBA_frag:K_,equirect_vert:Q_,equirect_frag:j_,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:a0,meshmatcap_frag:o0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:f0,meshphysical_frag:d0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:_0,shadow_vert:x0,shadow_frag:v0,sprite_vert:y0,sprite_frag:M0},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Ln={basic:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:He([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:He([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:He([at.points,at.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:He([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:He([at.common,at.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:He([at.sprite,at.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:He([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:He([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ln.physical={uniforms:He([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var sa={r:0,b:0,g:0};function S0(s,t,e,n,i,r,o){let a=new zt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function _(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===za)?(h===void 0&&(h=new Ke(new _i(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:Is(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ie,(u!==x||f!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ke(new qi(2,2),new Me({name:"BackgroundMaterial",uniforms:Is(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(sa,gf(s)),n.buffers.color.setClear(sa.r,sa.g,sa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function b0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(R,U,B,Z,q){let Y=!1;if(o){let K=g(Z,B,U);c!==K&&(c=K,p(c.object)),Y=d(R,Z,B,q),Y&&y(R,Z,B,q)}else{let K=U.wireframe===!0;(c.geometry!==Z.id||c.program!==B.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=B.id,c.wireframe=K,Y=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,L(R,U,B,Z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function g(R,U,B){let Z=B.wireframe===!0,q=a[R.id];q===void 0&&(q={},a[R.id]=q);let Y=q[U.id];Y===void 0&&(Y={},q[U.id]=Y);let K=Y[Z];return K===void 0&&(K=m(f()),Y[Z]=K),K}function m(R){let U=[],B=[],Z=[];for(let q=0;q<i;q++)U[q]=0,B[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:Z,object:R,attributes:{},index:null}}function d(R,U,B,Z){let q=c.attributes,Y=U.attributes,K=0,Q=B.getAttributes();for(let rt in Q)if(Q[rt].location>=0){let J=q[rt],st=Y[rt];if(st===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(st=R.instanceColor)),J===void 0||J.attribute!==st||st&&J.data!==st.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function y(R,U,B,Z){let q={},Y=U.attributes,K=0,Q=B.getAttributes();for(let rt in Q)if(Q[rt].location>=0){let J=Y[rt];J===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));let st={};st.attribute=J,J&&J.data&&(st.data=J.data),q[rt]=st,K++}c.attributes=q,c.attributesNum=K,c.index=Z}function x(){let R=c.newAttributes;for(let U=0,B=R.length;U<B;U++)R[U]=0}function S(R){C(R,0)}function C(R,U){let B=c.newAttributes,Z=c.enabledAttributes,q=c.attributeDivisors;B[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),q[R]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),q[R]=U)}function T(){let R=c.newAttributes,U=c.enabledAttributes;for(let B=0,Z=U.length;B<Z;B++)U[B]!==R[B]&&(s.disableVertexAttribArray(B),U[B]=0)}function w(R,U,B,Z,q,Y,K){K===!0?s.vertexAttribIPointer(R,U,B,q,Y):s.vertexAttribPointer(R,U,B,Z,q,Y)}function L(R,U,B,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let q=Z.attributes,Y=B.getAttributes(),K=U.defaultAttributeValues;for(let Q in Y){let rt=Y[Q];if(rt.location>=0){let X=q[Q];if(X===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){let J=X.normalized,st=X.itemSize,gt=e.get(X);if(gt===void 0)continue;let ct=gt.buffer,St=gt.type,Pt=gt.bytesPerElement,At=n.isWebGL2===!0&&(St===s.INT||St===s.UNSIGNED_INT||X.gpuType===rf);if(X.isInterleavedBufferAttribute){let Wt=X.data,z=Wt.stride,xe=X.offset;if(Wt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<rt.locationSize;Tt++)C(rt.location+Tt,Wt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let Tt=0;Tt<rt.locationSize;Tt++)S(rt.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let Tt=0;Tt<rt.locationSize;Tt++)w(rt.location+Tt,st/rt.locationSize,St,J,z*Pt,(xe+st/rt.locationSize*Tt)*Pt,At)}else{if(X.isInstancedBufferAttribute){for(let Wt=0;Wt<rt.locationSize;Wt++)C(rt.location+Wt,X.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Wt=0;Wt<rt.locationSize;Wt++)S(rt.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let Wt=0;Wt<rt.locationSize;Wt++)w(rt.location+Wt,st/rt.locationSize,St,J,st*Pt,st/rt.locationSize*Wt*Pt,At)}}else if(K!==void 0){let J=K[Q];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(rt.location,J);break;case 3:s.vertexAttrib3fv(rt.location,J);break;case 4:s.vertexAttrib4fv(rt.location,J);break;default:s.vertexAttrib1fv(rt.location,J)}}}}T()}function v(){G();for(let R in a){let U=a[R];for(let B in U){let Z=U[B];for(let q in Z)_(Z[q].object),delete Z[q];delete U[B]}delete a[R]}}function E(R){if(a[R.id]===void 0)return;let U=a[R.id];for(let B in U){let Z=U[B];for(let q in Z)_(Z[q].object),delete Z[q];delete U[B]}delete a[R.id]}function N(R){for(let U in a){let B=a[U];if(B[R.id]===void 0)continue;let Z=B[R.id];for(let q in Z)_(Z[q].object),delete Z[q];delete B[R.id]}}function G(){$(),h=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:$,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function T0(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,_;if(i)p=s,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function E0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||t.has("OES_texture_float"),C=x&&S,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}function w0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Xn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,S=d.clippingState||null;l.value=S,S=h(_,f,x,p);for(let C=0;C!==x;++C)S[C]=e[C];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let d=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==g;++x,S+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function A0(s){let t=new WeakMap;function e(o,a){return a===Al?o.mapping=Rs:a===Cl&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Al||a===Cl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ol(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var cr=class extends Pa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,wu=[.125,.215,.35,.446,.526,.582],zi=20,xl=new cr,Au=new zt,vl=null,yl=0,Ml=0,Fi=(1+Math.sqrt(5))/2,Ms=1/Fi,Cu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Fi,Ms),new D(0,Fi,-Ms),new D(Ms,0,Fi),new D(-Ms,0,Fi),new D(Fi,Ms,0),new D(-Fi,Ms,0)],Da=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,yl,Ml),t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Tn,format:bn,colorSpace:Zn,depthBuffer:!1},i=Ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(r)),this._blurMaterial=R0(r,t,e)}return i}_compileMaterial(t){let e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,n,i){let a=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Au),h.toneMapping=hi,h.autoClear=!1;let p=new gi({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),_=new Ke(new _i,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Au),g=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;ra(i,y*x,d>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Rs||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ra(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Cu[(i-1)%Cu.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ke(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let d=[],y=0;for(let w=0;w<zi;++w){let L=w/g,v=Math.exp(-L*L/2);d.push(v),w===0?y+=v:w<m&&(y+=2*v)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;let S=this._sizeLods[i],C=3*S*(i>x-bs?i-x+bs:0),T=4*(this._cubeSize-S);ra(e,C,T,3*S,2*S),l.setRenderTarget(e),l.render(u,xl)}};function C0(s){let t=[],e=[],n=[],i=s,r=s-bs+1+wu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-bs?l=wu[o-s+bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,y=new Float32Array(g*_*p),x=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let T=0;T<p;T++){let w=T%3*2/3-1,L=T>2?0:-1,v=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(v,g*_*T),x.set(f,m*_*T);let E=[T,T,T,T,T,T];S.set(E,d*_*T)}let C=new ye;C.setAttribute("position",new _n(y,g)),C.setAttribute("uv",new _n(x,m)),C.setAttribute("faceIndex",new _n(S,d)),t.push(C),i>bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ru(s,t,e){let n=new qe(s,t,e);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function R0(s,t,e){let n=new Float32Array(zi),i=new D(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Pu(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Lu(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function P0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Al||l===Cl,h=l===Rs||l===Ps;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Da(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Da(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function L0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I0(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let m=0,d=g.length;m<d;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,_=u.attributes.position,g=0;if(p!==null){let y=p.array;g=p.version;for(let x=0,S=y.length;x<S;x+=3){let C=y[x+0],T=y[x+1],w=y[x+2];f.push(C,T,T,w,w,C)}}else if(_!==void 0){let y=_.array;g=_.version;for(let x=0,S=y.length/3-1;x<S;x+=3){let C=x+0,T=x+1,w=x+2;f.push(C,T,T,w,w,C)}}else return;let m=new(pf(f)?Ra:Ca)(f,1);m.version=g;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function D0(s,t,e,n){let i=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,_){s.drawElements(r,_,a,p*l),e.update(_,r,1)}function u(p,_,g){if(g===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,_,a,p*l,g),e.update(_,r,g)}function f(p,_,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(r,_,0,a,p,0,g);let d=0;for(let y=0;y<g;y++)d+=_[y];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function U0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function N0(s,t){return s[0]-t[0]}function O0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function F0(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Pe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==_){let R=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],L=0;y===!0&&(L=1),x===!0&&(L=2),S===!0&&(L=3);let v=h.attributes.position.count*L,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let N=new Float32Array(v*E*4*_),G=new Ea(N,v,E,_);G.type=ci,G.needsUpdate=!0;let $=L*4;for(let U=0;U<_;U++){let B=C[U],Z=T[U],q=w[U],Y=v*E*4*U;for(let K=0;K<B.count;K++){let Q=K*$;y===!0&&(o.fromBufferAttribute(B,K),N[Y+Q+0]=o.x,N[Y+Q+1]=o.y,N[Y+Q+2]=o.z,N[Y+Q+3]=0),x===!0&&(o.fromBufferAttribute(Z,K),N[Y+Q+4]=o.x,N[Y+Q+5]=o.y,N[Y+Q+6]=o.z,N[Y+Q+7]=0),S===!0&&(o.fromBufferAttribute(q,K),N[Y+Q+8]=o.x,N[Y+Q+9]=o.y,N[Y+Q+10]=o.z,N[Y+Q+11]=q.itemSize===4?o.w:1)}}g={count:_,texture:G,size:new Dt(v,E)},r.set(h,g),h.addEventListener("dispose",R)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",d),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{let p=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==p){_=[];for(let x=0;x<p;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<p;x++){let S=_[x];S[0]=x,S[1]=f[x]}_.sort(O0);for(let x=0;x<8;x++)x<p&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(N0);let g=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let S=a[x],C=S[0],T=S[1];C!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+x)!==g[C]&&h.setAttribute("morphTarget"+x,g[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),i[x]=T,d+=T):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function B0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ua=class extends En{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Hi,h!==Hi&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=li),n===void 0&&h===Ls&&(n=Vi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xf=new En,vf=new Ua(1,1);vf.compareFunction=df;var yf=new Ea,Mf=new Ul,Sf=new La,Iu=[],Du=[],Uu=new Float32Array(16),Nu=new Float32Array(9),Ou=new Float32Array(4);function Fs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Iu[i];if(r===void 0&&(r=new Float32Array(i),Iu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Va(s,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function z0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function k0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function V0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function G0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Ou.set(n),s.uniformMatrix2fv(this.addr,!1,Ou),be(e,n)}}function W0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Nu.set(n),s.uniformMatrix3fv(this.addr,!1,Nu),be(e,n)}}function X0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Uu.set(n),s.uniformMatrix4fv(this.addr,!1,Uu),be(e,n)}}function q0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function Z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function J0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function $0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function K0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function Q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function tx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?vf:xf;e.setTexture2D(t||r,i)}function ex(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mf,i)}function nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Sf,i)}function ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yf,i)}function sx(s){switch(s){case 5126:return z0;case 35664:return k0;case 35665:return V0;case 35666:return H0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return K0;case 36295:return Q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(s,t){s.uniform1fv(this.addr,t)}function ax(s,t){let e=Fs(t,this.size,2);s.uniform2fv(this.addr,e)}function ox(s,t){let e=Fs(t,this.size,3);s.uniform3fv(this.addr,e)}function lx(s,t){let e=Fs(t,this.size,4);s.uniform4fv(this.addr,e)}function cx(s,t){let e=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hx(s,t){let e=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ux(s,t){let e=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function fx(s,t){s.uniform1iv(this.addr,t)}function dx(s,t){s.uniform2iv(this.addr,t)}function px(s,t){s.uniform3iv(this.addr,t)}function mx(s,t){s.uniform4iv(this.addr,t)}function gx(s,t){s.uniform1uiv(this.addr,t)}function _x(s,t){s.uniform2uiv(this.addr,t)}function xx(s,t){s.uniform3uiv(this.addr,t)}function vx(s,t){s.uniform4uiv(this.addr,t)}function yx(s,t,e){let n=this.cache,i=t.length,r=Va(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||xf,r[o])}function Mx(s,t,e){let n=this.cache,i=t.length,r=Va(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Mf,r[o])}function Sx(s,t,e){let n=this.cache,i=t.length,r=Va(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Sf,r[o])}function bx(s,t,e){let n=this.cache,i=t.length,r=Va(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||yf,r[o])}function Tx(s){switch(s){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}var Fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}},Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tx(e.type)}},zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function Fu(s,t){s.seq.push(t),s.map[t.id]=t}function Ex(s,t,e){let n=s.name,i=n.length;for(Sl.lastIndex=0;;){let r=Sl.exec(n),o=Sl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fu(e,c===void 0?new Fl(a,s,t):new Bl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new zl(a),Fu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Ex(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Bu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var wx=37297,Ax=0;function Cx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Rx(s){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s),n;switch(t===e?n="":t===va&&e===xa?n="LinearDisplayP3ToLinearSRGB":t===xa&&e===va&&(n="LinearSRGBToLinearDisplayP3"),s){case Zn:case ka:return[n,"LinearTransferOETF"];case Re:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function zu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Cx(s.getShaderSource(t),o)}else return i}function Px(s,t){let e=Rx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lx(s,t){let e;switch(t){case Fp:e="Linear";break;case Bp:e="Reinhard";break;case zp:e="OptimizedCineon";break;case rc:e="ACESFilmic";break;case Vp:e="AgX";break;case kp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ix(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Dx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function Ux(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ts(s){return s!==""}function ku(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(s){return s.replace(Ox,Bx)}var Fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bx(s,t){let e=kt[t];if(e===void 0){let n=Fx.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(s){return s.replace(zx,kx)}function kx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ef?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===up?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Ps:t="ENVMAP_TYPE_CUBE";break;case za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function Wx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nf:t="ENVMAP_BLENDING_MULTIPLY";break;case Np:t="ENVMAP_BLENDING_MIX";break;case Op:t="ENVMAP_BLENDING_ADD";break}return t}function Xx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Vx(e),c=Hx(e),h=Gx(e),u=Wx(e),f=Xx(e),p=e.isWebGL2?"":Ix(e),_=Dx(e),g=Ux(r),m=i.createProgram(),d,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),y.length>0&&(y+=`
`)):(d=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),y=[p,Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?kt.tonemapping_pars_fragment:"",e.toneMapping!==hi?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Px("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=kl(o),o=ku(o,e),o=Vu(o,e),a=kl(a),a=ku(a,e),a=Vu(a,e),o=Hu(o),a=Hu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let S=x+d+o,C=x+y+a,T=Bu(i,i.VERTEX_SHADER,S),w=Bu(i,i.FRAGMENT_SHADER,C);i.attachShader(m,T),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function L(G){if(s.debug.checkShaderErrors){let $=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(w).trim(),B=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,w);else{let q=zu(i,T,"vertex"),Y=zu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+q+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(R===""||U==="")&&(Z=!1);Z&&(G.diagnostics={runnable:B,programLog:$,vertexShader:{log:R,prefix:d},fragmentShader:{log:U,prefix:y}})}i.deleteShader(T),i.deleteShader(w),v=new Cs(i,m),E=Nx(i,m)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,wx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}var Yx=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Hl(t),e.set(t,n)),n}},Hl=class{constructor(t){this.id=Yx++,this.code=t,this.usedTimes=0}};function Zx(s,t,e,n,i,r,o){let a=new Aa,l=new Vl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function m(v,E,N,G,$){let R=G.fog,U=$.geometry,B=v.isMeshStandardMaterial?G.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||B),q=Z&&Z.mapping===za?Z.image.height:null,Y=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=K!==void 0?K.length:0,rt=0;U.morphAttributes.position!==void 0&&(rt=1),U.morphAttributes.normal!==void 0&&(rt=2),U.morphAttributes.color!==void 0&&(rt=3);let X,J,st,gt;if(Y){let ne=Ln[Y];X=ne.vertexShader,J=ne.fragmentShader}else X=v.vertexShader,J=v.fragmentShader,l.update(v),st=l.getVertexShaderID(v),gt=l.getFragmentShaderID(v);let ct=s.getRenderTarget(),St=$.isInstancedMesh===!0,Pt=$.isBatchedMesh===!0,At=!!v.map,Wt=!!v.matcap,z=!!Z,xe=!!v.aoMap,Tt=!!v.lightMap,Lt=!!v.bumpMap,_t=!!v.normalMap,Zt=!!v.displacementMap,Ut=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,k=v.anisotropy>0,tt=v.clearcoat>0,j=v.iridescence>0,et=v.sheen>0,xt=v.transmission>0,lt=k&&!!v.anisotropyMap,dt=tt&&!!v.clearcoatMap,wt=tt&&!!v.clearcoatNormalMap,I=tt&&!!v.clearcoatRoughnessMap,F=j&&!!v.iridescenceMap,ht=j&&!!v.iridescenceThicknessMap,yt=et&&!!v.sheenColorMap,pt=et&&!!v.sheenRoughnessMap,mt=!!v.specularMap,ut=!!v.specularColorMap,It=!!v.specularIntensityMap,qt=xt&&!!v.transmissionMap,se=xt&&!!v.thicknessMap,Ot=!!v.gradientMap,it=!!v.alphaMap,P=v.alphaTest>0,nt=!!v.alphaHash,ot=!!v.extensions,Et=!!U.attributes.uv1,Mt=!!U.attributes.uv2,Jt=!!U.attributes.uv3,Yt=hi;return v.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Yt=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:J,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Pt,instancing:St,instancingColor:St&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Zn,map:At,matcap:Wt,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:q,aoMap:xe,lightMap:Tt,bumpMap:Lt,normalMap:_t,displacementMap:f&&Zt,emissiveMap:Ut,normalMapObjectSpace:_t&&v.normalMapType===tm,normalMapTangentSpace:_t&&v.normalMapType===jp,metalnessMap:A,roughnessMap:M,anisotropy:k,anisotropyMap:lt,clearcoat:tt,clearcoatMap:dt,clearcoatNormalMap:wt,clearcoatRoughnessMap:I,iridescence:j,iridescenceMap:F,iridescenceThicknessMap:ht,sheen:et,sheenColorMap:yt,sheenRoughnessMap:pt,specularMap:mt,specularColorMap:ut,specularIntensityMap:It,transmission:xt,transmissionMap:qt,thicknessMap:se,gradientMap:Ot,opaque:v.transparent===!1&&v.blending===Es,alphaMap:it,alphaTest:P,alphaHash:nt,combine:v.combine,mapUv:At&&g(v.map.channel),aoMapUv:xe&&g(v.aoMap.channel),lightMapUv:Tt&&g(v.lightMap.channel),bumpMapUv:Lt&&g(v.bumpMap.channel),normalMapUv:_t&&g(v.normalMap.channel),displacementMapUv:Zt&&g(v.displacementMap.channel),emissiveMapUv:Ut&&g(v.emissiveMap.channel),metalnessMapUv:A&&g(v.metalnessMap.channel),roughnessMapUv:M&&g(v.roughnessMap.channel),anisotropyMapUv:lt&&g(v.anisotropyMap.channel),clearcoatMapUv:dt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:F&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(v.sheenRoughnessMap.channel),specularMapUv:mt&&g(v.specularMap.channel),specularColorMapUv:ut&&g(v.specularColorMap.channel),specularIntensityMapUv:It&&g(v.specularIntensityMap.channel),transmissionMapUv:qt&&g(v.transmissionMap.channel),thicknessMapUv:se&&g(v.thicknessMap.channel),alphaMapUv:it&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:Mt,vertexUv3s:Jt,pointsUvs:$.isPoints===!0&&!!U.attributes.uv&&(At||it),fog:!!R,useFog:v.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===Qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ot&&v.extensions.derivatives===!0,extensionFragDepth:ot&&v.extensions.fragDepth===!0,extensionDrawBuffers:ot&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(y(E,v),x(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){let E=_[v.type],N;if(E){let G=Ln[E];N=xi.clone(G.uniforms)}else N=v.uniforms;return N}function C(v,E){let N;for(let G=0,$=c.length;G<$;G++){let R=c[G];if(R.cacheKey===E){N=R,++N.usedTimes;break}}return N===void 0&&(N=new qx(s,E,v,r),c.push(N)),N}function T(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:L}}function Jx(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function $x(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,_,g,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function a(u,f,p,_,g,m){let d=o(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,_,g,m){let d=o(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||$x),n.length>1&&n.sort(f||Wu),i.length>1&&i.sort(f||Wu)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Kx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Xu,s.set(n,[o])):i>=r.length?(o=new Xu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Qx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function jx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var tv=0;function ev(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function nv(s,t){let e=new Qx,n=jx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,o=new we,a=new we;function l(h,u){let f=0,p=0,_=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,m=0,d=0,y=0,x=0,S=0,C=0,T=0,w=0,L=0,v=0;h.sort(ev);let E=u===!0?Math.PI:1;for(let G=0,$=h.length;G<$;G++){let R=h[G],U=R.color,B=R.intensity,Z=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=U.r*B*E,p+=U.g*B*E,_+=U.b*B*E;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],B);v++}else if(R.isDirectionalLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){let K=R.shadow,Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=R.shadow.matrix,S++}i.directional[g]=Y,g++}else if(R.isSpotLight){let Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(U).multiplyScalar(B*E),Y.distance=Z,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[d]=Y;let K=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,K.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[d]=K.matrix,R.castShadow){let Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[d]=Q,i.spotShadowMap[d]=q,T++}d++}else if(R.isRectAreaLight){let Y=e.get(R);Y.color.copy(U).multiplyScalar(B),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=Y,y++}else if(R.isPointLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity*E),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let K=R.shadow,Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=R.shadow.matrix,C++}i.point[m]=Y,m++}else if(R.isHemisphereLight){let Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(B*E),Y.groundColor.copy(R.groundColor).multiplyScalar(B*E),i.hemi[x]=Y,x++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;let N=i.hash;(N.directionalLength!==g||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==y||N.hemiLength!==x||N.numDirectionalShadows!==S||N.numPointShadows!==C||N.numSpotShadows!==T||N.numSpotMaps!==w||N.numLightProbes!==v)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=v,N.directionalLength=g,N.pointLength=m,N.spotLength=d,N.rectAreaLength=y,N.hemiLength=x,N.numDirectionalShadows=S,N.numPointShadows=C,N.numSpotShadows=T,N.numSpotMaps=w,N.numLightProbes=v,i.version=tv++)}function c(h,u){let f=0,p=0,_=0,g=0,m=0,d=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let S=h[y];if(S.isDirectionalLight){let C=i.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(S.isSpotLight){let C=i.spot[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),_++}else if(S.isRectAreaLight){let C=i.rectArea[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let C=i.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){let C=i.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function qu(s,t){let e=new nv(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function iv(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new qu(s,t),e.set(r,[l])):o>=a.length?(l=new qu(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Gl=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wl=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
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
}`;function av(s,t,e){let n=new Ia,i=new Dt,r=new Dt,o=new Pe,a=new Gl({depthPacking:Qp}),l=new Wl,c={},h=e.maxTextureSize,u={[fi]:Qe,[Qe]:fi,[sn]:sn},f=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new ye;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let d=this.type;this.render=function(T,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=s.getRenderTarget(),E=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),G=s.state;G.setBlending(In),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let $=d!==Wn&&this.type===Wn,R=d===Wn&&this.type!==Wn;for(let U=0,B=T.length;U<B;U++){let Z=T[U],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let Y=q.getFrameExtents();if(i.multiply(Y),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||$===!0||R===!0){let Q=this.type!==Wn?{minFilter:Ge,magFilter:Ge}:{};q.map!==null&&q.map.dispose(),q.map=new qe(i.x,i.y,Q),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let K=q.getViewportCount();for(let Q=0;Q<K;Q++){let rt=q.getViewport(Q);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),G.viewport(o),q.updateMatrices(Z,Q),n=q.getFrustum(),S(w,L,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Wn&&y(q,L),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(v,E,N)};function y(T,w){let L=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qe(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,L,f,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,L,p,g,null)}function x(T,w,L,v){let E=null,N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let G=E.uuid,$=w.uuid,R=c[G];R===void 0&&(R={},c[G]=R);let U=R[$];U===void 0&&(U=E.clone(),R[$]=U,w.addEventListener("dispose",C)),E=U}if(E.visible=w.visible,E.wireframe=w.wireframe,v===Wn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=s.properties.get(E);G.light=L}return E}function S(T,w,L,v,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let $=t.update(T),R=T.material;if(Array.isArray(R)){let U=$.groups;for(let B=0,Z=U.length;B<Z;B++){let q=U[B],Y=R[q.materialIndex];if(Y&&Y.visible){let K=x(T,Y,v,E);T.onBeforeShadow(s,T,w,L,$,K,q),s.renderBufferDirect(L,null,$,K,T,q),T.onAfterShadow(s,T,w,L,$,K,q)}}}else if(R.visible){let U=x(T,R,v,E);T.onBeforeShadow(s,T,w,L,$,U,null),s.renderBufferDirect(L,null,$,U,T,null),T.onAfterShadow(s,T,w,L,$,U,null)}}let G=T.children;for(let $=0,R=G.length;$<R;$++)S(G[$],w,L,v,E)}function C(T){T.target.removeEventListener("dispose",C);for(let L in c){let v=c[L],E=T.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function ov(s,t,e){let n=e.isWebGL2;function i(){let P=!1,nt=new Pe,ot=null,Et=new Pe(0,0,0,0);return{setMask:function(Mt){ot!==Mt&&!P&&(s.colorMask(Mt,Mt,Mt,Mt),ot=Mt)},setLocked:function(Mt){P=Mt},setClear:function(Mt,Jt,Yt,$t,ne){ne===!0&&(Mt*=$t,Jt*=$t,Yt*=$t),nt.set(Mt,Jt,Yt,$t),Et.equals(nt)===!1&&(s.clearColor(Mt,Jt,Yt,$t),Et.copy(nt))},reset:function(){P=!1,ot=null,Et.set(-1,0,0,0)}}}function r(){let P=!1,nt=null,ot=null,Et=null;return{setTest:function(Mt){Mt?Pt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(Mt){nt!==Mt&&!P&&(s.depthMask(Mt),nt=Mt)},setFunc:function(Mt){if(ot!==Mt){switch(Mt){case Cp:s.depthFunc(s.NEVER);break;case Rp:s.depthFunc(s.ALWAYS);break;case Pp:s.depthFunc(s.LESS);break;case pa:s.depthFunc(s.LEQUAL);break;case Lp:s.depthFunc(s.EQUAL);break;case Ip:s.depthFunc(s.GEQUAL);break;case Dp:s.depthFunc(s.GREATER);break;case Up:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=Mt}},setLocked:function(Mt){P=Mt},setClear:function(Mt){Et!==Mt&&(s.clearDepth(Mt),Et=Mt)},reset:function(){P=!1,nt=null,ot=null,Et=null}}}function o(){let P=!1,nt=null,ot=null,Et=null,Mt=null,Jt=null,Yt=null,$t=null,ne=null;return{setTest:function(Kt){P||(Kt?Pt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!P&&(s.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,vt,Ft){(ot!==Kt||Et!==vt||Mt!==Ft)&&(s.stencilFunc(Kt,vt,Ft),ot=Kt,Et=vt,Mt=Ft)},setOp:function(Kt,vt,Ft){(Jt!==Kt||Yt!==vt||$t!==Ft)&&(s.stencilOp(Kt,vt,Ft),Jt=Kt,Yt=vt,$t=Ft)},setLocked:function(Kt){P=Kt},setClear:function(Kt){ne!==Kt&&(s.clearStencil(Kt),ne=Kt)},reset:function(){P=!1,nt=null,ot=null,Et=null,Mt=null,Jt=null,Yt=null,$t=null,ne=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},_=new WeakMap,g=[],m=null,d=!1,y=null,x=null,S=null,C=null,T=null,w=null,L=null,v=new zt(0,0,0),E=0,N=!1,G=null,$=null,R=null,U=null,B=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=Y>=2);let Q=null,rt={},X=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),st=new Pe().fromArray(X),gt=new Pe().fromArray(J);function ct(P,nt,ot,Et){let Mt=new Uint8Array(4),Jt=s.createTexture();s.bindTexture(P,Jt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<ot;Yt++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(nt,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(nt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return Jt}let St={};St[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(St[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(s.DEPTH_TEST),l.setFunc(pa),Ut(!1),A(wh),Pt(s.CULL_FACE),_t(In);function Pt(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function At(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Wt(P,nt){return p[P]!==nt?(s.bindFramebuffer(P,nt),p[P]=nt,n&&(P===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=nt),P===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=nt)),!0):!1}function z(P,nt){let ot=g,Et=!1;if(P)if(ot=_.get(nt),ot===void 0&&(ot=[],_.set(nt,ot)),P.isWebGLMultipleRenderTargets){let Mt=P.texture;if(ot.length!==Mt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Jt=0,Yt=Mt.length;Jt<Yt;Jt++)ot[Jt]=s.COLOR_ATTACHMENT0+Jt;ot.length=Mt.length,Et=!0}}else ot[0]!==s.COLOR_ATTACHMENT0&&(ot[0]=s.COLOR_ATTACHMENT0,Et=!0);else ot[0]!==s.BACK&&(ot[0]=s.BACK,Et=!0);Et&&(e.isWebGL2?s.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function xe(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let Tt={[Bi]:s.FUNC_ADD,[dp]:s.FUNC_SUBTRACT,[pp]:s.FUNC_REVERSE_SUBTRACT};if(n)Tt[Rh]=s.MIN,Tt[Ph]=s.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Tt[Rh]=P.MIN_EXT,Tt[Ph]=P.MAX_EXT)}let Lt={[mp]:s.ZERO,[gp]:s.ONE,[_p]:s.SRC_COLOR,[El]:s.SRC_ALPHA,[bp]:s.SRC_ALPHA_SATURATE,[Mp]:s.DST_COLOR,[vp]:s.DST_ALPHA,[xp]:s.ONE_MINUS_SRC_COLOR,[wl]:s.ONE_MINUS_SRC_ALPHA,[Sp]:s.ONE_MINUS_DST_COLOR,[yp]:s.ONE_MINUS_DST_ALPHA,[Tp]:s.CONSTANT_COLOR,[Ep]:s.ONE_MINUS_CONSTANT_COLOR,[wp]:s.CONSTANT_ALPHA,[Ap]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(P,nt,ot,Et,Mt,Jt,Yt,$t,ne,Kt){if(P===In){d===!0&&(At(s.BLEND),d=!1);return}if(d===!1&&(Pt(s.BLEND),d=!0),P!==fp){if(P!==y||Kt!==N){if((x!==Bi||T!==Bi)&&(s.blendEquation(s.FUNC_ADD),x=Bi,T=Bi),Kt)switch(P){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case da:s.blendFunc(s.ONE,s.ONE);break;case Ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ch:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case da:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ch:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,w=null,L=null,v.set(0,0,0),E=0,y=P,N=Kt}return}Mt=Mt||nt,Jt=Jt||ot,Yt=Yt||Et,(nt!==x||Mt!==T)&&(s.blendEquationSeparate(Tt[nt],Tt[Mt]),x=nt,T=Mt),(ot!==S||Et!==C||Jt!==w||Yt!==L)&&(s.blendFuncSeparate(Lt[ot],Lt[Et],Lt[Jt],Lt[Yt]),S=ot,C=Et,w=Jt,L=Yt),($t.equals(v)===!1||ne!==E)&&(s.blendColor($t.r,$t.g,$t.b,ne),v.copy($t),E=ne),y=P,N=!1}function Zt(P,nt){P.side===sn?At(s.CULL_FACE):Pt(s.CULL_FACE);let ot=P.side===Qe;nt&&(ot=!ot),Ut(ot),P.blending===Es&&P.transparent===!1?_t(In):_t(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Et=P.stencilWrite;c.setTest(Et),Et&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(P){G!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),G=P)}function A(P){P!==cp?(Pt(s.CULL_FACE),P!==$&&(P===wh?s.cullFace(s.BACK):P===hp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),$=P}function M(P){P!==R&&(q&&s.lineWidth(P),R=P)}function k(P,nt,ot){P?(Pt(s.POLYGON_OFFSET_FILL),(U!==nt||B!==ot)&&(s.polygonOffset(nt,ot),U=nt,B=ot)):At(s.POLYGON_OFFSET_FILL)}function tt(P){P?Pt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function j(P){P===void 0&&(P=s.TEXTURE0+Z-1),Q!==P&&(s.activeTexture(P),Q=P)}function et(P,nt,ot){ot===void 0&&(Q===null?ot=s.TEXTURE0+Z-1:ot=Q);let Et=rt[ot];Et===void 0&&(Et={type:void 0,texture:void 0},rt[ot]=Et),(Et.type!==P||Et.texture!==nt)&&(Q!==ot&&(s.activeTexture(ot),Q=ot),s.bindTexture(P,nt||St[P]),Et.type=P,Et.texture=nt)}function xt(){let P=rt[Q];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function I(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(P){st.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),st.copy(P))}function qt(P){gt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),gt.copy(P))}function se(P,nt){let ot=u.get(nt);ot===void 0&&(ot=new WeakMap,u.set(nt,ot));let Et=ot.get(P);Et===void 0&&(Et=s.getUniformBlockIndex(nt,P.name),ot.set(P,Et))}function Ot(P,nt){let Et=u.get(nt).get(P);h.get(nt)!==Et&&(s.uniformBlockBinding(nt,Et,P.__bindingPointIndex),h.set(nt,Et))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,rt={},p={},_=new WeakMap,g=[],m=null,d=!1,y=null,x=null,S=null,C=null,T=null,w=null,L=null,v=new zt(0,0,0),E=0,N=!1,G=null,$=null,R=null,U=null,B=null,st.set(0,0,s.canvas.width,s.canvas.height),gt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:At,bindFramebuffer:Wt,drawBuffers:z,useProgram:xe,setBlending:_t,setMaterial:Zt,setFlipSided:Ut,setCullFace:A,setLineWidth:M,setPolygonOffset:k,setScissorTest:tt,activeTexture:j,bindTexture:et,unbindTexture:xt,compressedTexImage2D:lt,compressedTexImage3D:dt,texImage2D:mt,texImage3D:ut,updateUBOMapping:se,uniformBlockBinding:Ot,texStorage2D:yt,texStorage3D:pt,texSubImage2D:wt,texSubImage3D:I,compressedTexSubImage2D:F,compressedTexSubImage3D:ht,scissor:It,viewport:qt,reset:it}}function lv(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return p?new OffscreenCanvas(A,M):Sa("canvas")}function g(A,M,k,tt){let j=1;if((A.width>tt||A.height>tt)&&(j=tt/Math.max(A.width,A.height)),j<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let et=M?Ma:Math.floor,xt=et(j*A.width),lt=et(j*A.height);u===void 0&&(u=_(xt,lt));let dt=k?_(xt,lt):u;return dt.width=xt,dt.height=lt,dt.getContext("2d").drawImage(A,0,0,xt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xt+"x"+lt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Il(A.width)&&Il(A.height)}function d(A){return a?!1:A.wrapS!==Sn||A.wrapT!==Sn||A.minFilter!==Ge&&A.minFilter!==mn}function y(A,M){return A.generateMipmaps&&M&&A.minFilter!==Ge&&A.minFilter!==mn}function x(A){s.generateMipmap(A)}function S(A,M,k,tt,j=!1){if(a===!1)return M;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=M;if(M===s.RED&&(k===s.FLOAT&&(et=s.R32F),k===s.HALF_FLOAT&&(et=s.R16F),k===s.UNSIGNED_BYTE&&(et=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.R8UI),k===s.UNSIGNED_SHORT&&(et=s.R16UI),k===s.UNSIGNED_INT&&(et=s.R32UI),k===s.BYTE&&(et=s.R8I),k===s.SHORT&&(et=s.R16I),k===s.INT&&(et=s.R32I)),M===s.RG&&(k===s.FLOAT&&(et=s.RG32F),k===s.HALF_FLOAT&&(et=s.RG16F),k===s.UNSIGNED_BYTE&&(et=s.RG8)),M===s.RGBA){let xt=j?_a:Qt.getTransfer(tt);k===s.FLOAT&&(et=s.RGBA32F),k===s.HALF_FLOAT&&(et=s.RGBA16F),k===s.UNSIGNED_BYTE&&(et=xt===ie?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function C(A,M,k){return y(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){return A===Ge||A===Lh||A===Zo?s.NEAREST:s.LINEAR}function w(A){let M=A.target;M.removeEventListener("dispose",w),v(M),M.isVideoTexture&&h.delete(M)}function L(A){let M=A.target;M.removeEventListener("dispose",L),N(M)}function v(A){let M=n.get(A);if(M.__webglInit===void 0)return;let k=A.source,tt=f.get(k);if(tt){let j=tt[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(tt).length===0&&f.delete(k)}n.remove(A)}function E(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let k=A.source,tt=f.get(k);delete tt[M.__cacheKey],o.memory.textures--}function N(A){let M=A.texture,k=n.get(A),tt=n.get(M);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(k.__webglFramebuffer[j]))for(let et=0;et<k.__webglFramebuffer[j].length;et++)s.deleteFramebuffer(k.__webglFramebuffer[j][et]);else s.deleteFramebuffer(k.__webglFramebuffer[j]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[j])}else{if(Array.isArray(k.__webglFramebuffer))for(let j=0;j<k.__webglFramebuffer.length;j++)s.deleteFramebuffer(k.__webglFramebuffer[j]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let j=0;j<k.__webglColorRenderbuffer.length;j++)k.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[j]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let j=0,et=M.length;j<et;j++){let xt=n.get(M[j]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(M[j])}n.remove(M),n.remove(A)}let G=0;function $(){G=0}function R(){let A=G;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),G+=1,A}function U(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function B(A,M){let k=n.get(A);if(A.isVideoTexture&&Zt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(k,A,M);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function Z(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){st(k,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function q(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){st(k,A,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function Y(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){gt(k,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let K={[Rl]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[Pl]:s.MIRRORED_REPEAT},Q={[Ge]:s.NEAREST,[Lh]:s.NEAREST_MIPMAP_NEAREST,[Zo]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[Hp]:s.LINEAR_MIPMAP_NEAREST,[ar]:s.LINEAR_MIPMAP_LINEAR},rt={[em]:s.NEVER,[om]:s.ALWAYS,[nm]:s.LESS,[df]:s.LEQUAL,[im]:s.EQUAL,[am]:s.GEQUAL,[sm]:s.GREATER,[rm]:s.NOTEQUAL};function X(A,M,k){if(k?(s.texParameteri(A,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,K[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Q[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Q[M.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==Sn||M.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,T(M.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Ge&&M.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ge||M.minFilter!==Zo&&M.minFilter!==ar||M.type===ci&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Tn&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function J(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));let tt=M.source,j=f.get(tt);j===void 0&&(j={},f.set(tt,j));let et=U(M);if(et!==A.__cacheKey){j[et]===void 0&&(j[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[et].usedTimes++;let xt=j[A.__cacheKey];xt!==void 0&&(j[A.__cacheKey].usedTimes--,xt.usedTimes===0&&E(M)),A.__cacheKey=et,A.__webglTexture=j[et].texture}return k}function st(A,M,k){let tt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=s.TEXTURE_3D);let j=J(A,M),et=M.source;e.bindTexture(tt,A.__webglTexture,s.TEXTURE0+k);let xt=n.get(et);if(et.version!==xt.__version||j===!0){e.activeTexture(s.TEXTURE0+k);let lt=Qt.getPrimaries(Qt.workingColorSpace),dt=M.colorSpace===gn?null:Qt.getPrimaries(M.colorSpace),wt=M.colorSpace===gn||lt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let I=d(M)&&m(M.image)===!1,F=g(M.image,I,!1,i.maxTextureSize);F=Ut(M,F);let ht=m(F)||a,yt=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),mt=S(M.internalFormat,yt,pt,M.colorSpace,M.isVideoTexture);X(tt,M,ht);let ut,It=M.mipmaps,qt=a&&M.isVideoTexture!==!0&&mt!==uf,se=xt.__version===void 0||j===!0,Ot=C(M,F,ht);if(M.isDepthTexture)mt=s.DEPTH_COMPONENT,a?M.type===ci?mt=s.DEPTH_COMPONENT32F:M.type===li?mt=s.DEPTH_COMPONENT24:M.type===Vi?mt=s.DEPTH24_STENCIL8:mt=s.DEPTH_COMPONENT16:M.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Hi&&mt===s.DEPTH_COMPONENT&&M.type!==ac&&M.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=li,pt=r.convert(M.type)),M.format===Ls&&mt===s.DEPTH_COMPONENT&&(mt=s.DEPTH_STENCIL,M.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vi,pt=r.convert(M.type))),se&&(qt?e.texStorage2D(s.TEXTURE_2D,1,mt,F.width,F.height):e.texImage2D(s.TEXTURE_2D,0,mt,F.width,F.height,0,yt,pt,null));else if(M.isDataTexture)if(It.length>0&&ht){qt&&se&&e.texStorage2D(s.TEXTURE_2D,Ot,mt,It[0].width,It[0].height);for(let it=0,P=It.length;it<P;it++)ut=It[it],qt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ut.width,ut.height,yt,pt,ut.data):e.texImage2D(s.TEXTURE_2D,it,mt,ut.width,ut.height,0,yt,pt,ut.data);M.generateMipmaps=!1}else qt?(se&&e.texStorage2D(s.TEXTURE_2D,Ot,mt,F.width,F.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,F.width,F.height,yt,pt,F.data)):e.texImage2D(s.TEXTURE_2D,0,mt,F.width,F.height,0,yt,pt,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,mt,It[0].width,It[0].height,F.depth);for(let it=0,P=It.length;it<P;it++)ut=It[it],M.format!==bn?yt!==null?qt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,F.depth,yt,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,mt,ut.width,ut.height,F.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,F.depth,yt,pt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,mt,ut.width,ut.height,F.depth,0,yt,pt,ut.data)}else{qt&&se&&e.texStorage2D(s.TEXTURE_2D,Ot,mt,It[0].width,It[0].height);for(let it=0,P=It.length;it<P;it++)ut=It[it],M.format!==bn?yt!==null?qt?e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,ut.width,ut.height,yt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,it,mt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ut.width,ut.height,yt,pt,ut.data):e.texImage2D(s.TEXTURE_2D,it,mt,ut.width,ut.height,0,yt,pt,ut.data)}else if(M.isDataArrayTexture)qt?(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,mt,F.width,F.height,F.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,yt,pt,F.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,mt,F.width,F.height,F.depth,0,yt,pt,F.data);else if(M.isData3DTexture)qt?(se&&e.texStorage3D(s.TEXTURE_3D,Ot,mt,F.width,F.height,F.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,yt,pt,F.data)):e.texImage3D(s.TEXTURE_3D,0,mt,F.width,F.height,F.depth,0,yt,pt,F.data);else if(M.isFramebufferTexture){if(se)if(qt)e.texStorage2D(s.TEXTURE_2D,Ot,mt,F.width,F.height);else{let it=F.width,P=F.height;for(let nt=0;nt<Ot;nt++)e.texImage2D(s.TEXTURE_2D,nt,mt,it,P,0,yt,pt,null),it>>=1,P>>=1}}else if(It.length>0&&ht){qt&&se&&e.texStorage2D(s.TEXTURE_2D,Ot,mt,It[0].width,It[0].height);for(let it=0,P=It.length;it<P;it++)ut=It[it],qt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,yt,pt,ut):e.texImage2D(s.TEXTURE_2D,it,mt,yt,pt,ut);M.generateMipmaps=!1}else qt?(se&&e.texStorage2D(s.TEXTURE_2D,Ot,mt,F.width,F.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,pt,F)):e.texImage2D(s.TEXTURE_2D,0,mt,yt,pt,F);y(M,ht)&&x(tt),xt.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function gt(A,M,k){if(M.image.length!==6)return;let tt=J(A,M),j=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);let et=n.get(j);if(j.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);let xt=Qt.getPrimaries(Qt.workingColorSpace),lt=M.colorSpace===gn?null:Qt.getPrimaries(M.colorSpace),dt=M.colorSpace===gn||xt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let wt=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,F=[];for(let it=0;it<6;it++)!wt&&!I?F[it]=g(M.image[it],!1,!0,i.maxCubemapSize):F[it]=I?M.image[it].image:M.image[it],F[it]=Ut(M,F[it]);let ht=F[0],yt=m(ht)||a,pt=r.convert(M.format,M.colorSpace),mt=r.convert(M.type),ut=S(M.internalFormat,pt,mt,M.colorSpace),It=a&&M.isVideoTexture!==!0,qt=et.__version===void 0||tt===!0,se=C(M,ht,yt);X(s.TEXTURE_CUBE_MAP,M,yt);let Ot;if(wt){It&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,se,ut,ht.width,ht.height);for(let it=0;it<6;it++){Ot=F[it].mipmaps;for(let P=0;P<Ot.length;P++){let nt=Ot[P];M.format!==bn?pt!==null?It?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,0,0,nt.width,nt.height,pt,nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,ut,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,0,0,nt.width,nt.height,pt,mt,nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P,ut,nt.width,nt.height,0,pt,mt,nt.data)}}}else{Ot=M.mipmaps,It&&qt&&(Ot.length>0&&se++,e.texStorage2D(s.TEXTURE_CUBE_MAP,se,ut,F[0].width,F[0].height));for(let it=0;it<6;it++)if(I){It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,F[it].width,F[it].height,pt,mt,F[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ut,F[it].width,F[it].height,0,pt,mt,F[it].data);for(let P=0;P<Ot.length;P++){let ot=Ot[P].image[it].image;It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,0,0,ot.width,ot.height,pt,mt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,ut,ot.width,ot.height,0,pt,mt,ot.data)}}else{It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt,mt,F[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ut,pt,mt,F[it]);for(let P=0;P<Ot.length;P++){let nt=Ot[P];It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,0,0,pt,mt,nt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,P+1,ut,pt,mt,nt.image[it])}}}y(M,yt)&&x(s.TEXTURE_CUBE_MAP),et.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ct(A,M,k,tt,j,et){let xt=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),dt=S(k.internalFormat,xt,lt,k.colorSpace);if(!n.get(M).__hasExternalTextures){let I=Math.max(1,M.width>>et),F=Math.max(1,M.height>>et);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,et,dt,I,F,M.depth,0,xt,lt,null):e.texImage2D(j,et,dt,I,F,0,xt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),_t(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,j,n.get(k).__webglTexture,0,Lt(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,j,n.get(k).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(A,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let tt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||_t(M)){let j=M.depthTexture;j&&j.isDepthTexture&&(j.type===ci?tt=s.DEPTH_COMPONENT32F:j.type===li&&(tt=s.DEPTH_COMPONENT24));let et=Lt(M);_t(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,tt,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,tt,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){let tt=Lt(M);k&&_t(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):_t(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let tt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0;j<tt.length;j++){let et=tt[j],xt=r.convert(et.format,et.colorSpace),lt=r.convert(et.type),dt=S(et.internalFormat,xt,lt,et.colorSpace),wt=Lt(M);k&&_t(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,dt,M.width,M.height):_t(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,dt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,dt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);let tt=n.get(M.depthTexture).__webglTexture,j=Lt(M);if(M.depthTexture.format===Hi)_t(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Ls)_t(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function At(A){let M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=s.createRenderbuffer(),St(M.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),St(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(A,M,k){let tt=n.get(A);M!==void 0&&ct(tt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&At(A)}function z(A){let M=A.texture,k=n.get(A),tt=n.get(M);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=M.version,o.memory.textures++);let j=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,xt=m(A)||a;if(j){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let dt=0;dt<M.mipmaps.length;dt++)k.__webglFramebuffer[lt][dt]=s.createFramebuffer()}else k.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)k.__webglFramebuffer[lt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(et)if(i.drawBuffers){let lt=A.texture;for(let dt=0,wt=lt.length;dt<wt;dt++){let I=n.get(lt[dt]);I.__webglTexture===void 0&&(I.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&_t(A)===!1){let lt=et?M:[M];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<lt.length;dt++){let wt=lt[dt];k.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let I=r.convert(wt.format,wt.colorSpace),F=r.convert(wt.type),ht=S(wt.internalFormat,I,F,wt.colorSpace,A.isXRRenderTarget===!0),yt=Lt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),St(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),X(s.TEXTURE_CUBE_MAP,M,xt);for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)ct(k.__webglFramebuffer[lt][dt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else ct(k.__webglFramebuffer[lt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(M,xt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let lt=A.texture;for(let dt=0,wt=lt.length;dt<wt;dt++){let I=lt[dt],F=n.get(I);e.bindTexture(s.TEXTURE_2D,F.__webglTexture),X(s.TEXTURE_2D,I,xt),ct(k.__webglFramebuffer,A,I,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),y(I,xt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,tt.__webglTexture),X(lt,M,xt),a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)ct(k.__webglFramebuffer[dt],A,M,s.COLOR_ATTACHMENT0,lt,dt);else ct(k.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,lt,0);y(M,xt)&&x(lt),e.unbindTexture()}A.depthBuffer&&At(A)}function xe(A){let M=m(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,j=k.length;tt<j;tt++){let et=k[tt];if(y(et,M)){let xt=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(et).__webglTexture;e.bindTexture(xt,lt),x(xt),e.unbindTexture()}}}function Tt(A){if(a&&A.samples>0&&_t(A)===!1){let M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,tt=A.height,j=s.COLOR_BUFFER_BIT,et=[],xt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(A),dt=A.isWebGLMultipleRenderTargets===!0;if(dt)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){et.push(s.COLOR_ATTACHMENT0+wt),A.depthBuffer&&et.push(xt);let I=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(I===!1&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),dt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]),I===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),dt){let F=n.get(M[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,k,tt,0,0,k,tt,j,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[wt]);let I=n.get(M[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,I,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Lt(A){return Math.min(i.maxSamples,A.samples)}function _t(A){let M=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Zt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ut(A,M){let k=A.colorSpace,tt=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ll||k!==Zn&&k!==gn&&(Qt.getTransfer(k)===ie?a===!1?t.has("EXT_sRGB")===!0&&tt===bn?(A.format=Ll,A.minFilter=mn,A.generateMipmaps=!1):M=ba.sRGBToLinear(M):(tt!==bn||j!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=R,this.resetTextureUnits=$,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Wt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=_t}function cv(s,t,e){let n=e.isWebGL2;function i(r,o=gn){let a,l=Qt.getTransfer(o);if(r===ui)return s.UNSIGNED_BYTE;if(r===af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gp)return s.BYTE;if(r===Wp)return s.SHORT;if(r===ac)return s.UNSIGNED_SHORT;if(r===rf)return s.INT;if(r===li)return s.UNSIGNED_INT;if(r===ci)return s.FLOAT;if(r===Tn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xp)return s.ALPHA;if(r===bn)return s.RGBA;if(r===qp)return s.LUMINANCE;if(r===Yp)return s.LUMINANCE_ALPHA;if(r===Hi)return s.DEPTH_COMPONENT;if(r===Ls)return s.DEPTH_STENCIL;if(r===Ll)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Zp)return s.RED;if(r===lf)return s.RED_INTEGER;if(r===Jp)return s.RG;if(r===cf)return s.RG_INTEGER;if(r===hf)return s.RGBA_INTEGER;if(r===Jo||r===$o||r===Ko||r===Qo)if(l===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Jo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Jo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$o)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ih||r===Dh||r===Uh||r===Nh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ih)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oh||r===Fh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Oh)return l===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Fh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bh||r===zh||r===kh||r===Vh||r===Hh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh||r===Jh||r===$h||r===Kh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Bh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$h)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jo||r===Qh||r===jh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===jo)return l===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$p||r===tu||r===eu||r===nu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===tu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===eu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vi?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Xl=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},hv={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ql=class extends di{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null,g=e.getContextAttributes(),m=null,d=null,y=[],x=[],S=new Dt,C=null,T=new Xe;T.layers.enable(1),T.viewport=new Pe;let w=new Xe;w.layers.enable(2),w.viewport=new Pe;let L=[T,w],v=new Xl;v.layers.enable(1),v.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=y[X];return J===void 0&&(J=new rr,y[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=y[X];return J===void 0&&(J=new rr,y[X]=J),J.getGripSpace()},this.getHand=function(X){let J=y[X];return J===void 0&&(J=new rr,y[X]=J),J.getHandSpace()};function G(X){let J=x.indexOf(X.inputSource);if(J===-1)return;let st=y[J];st!==void 0&&(st.update(X.inputSource,X.frame,c||o),st.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",R);for(let X=0;X<y.length;X++){let J=x[X];J!==null&&(x[X]=null,y[X].disconnect(J))}E=null,N=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",$),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new qe(p.framebufferWidth,p.framebufferHeight,{format:bn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,st=null,gt=null;g.depth&&(gt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?Ls:Hi,st=g.stencil?Vi:li);let ct={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(ct),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new qe(f.textureWidth,f.textureHeight,{format:bn,type:ui,depthTexture:new Ua(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let St=t.properties.get(d);St.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(X){for(let J=0;J<X.removed.length;J++){let st=X.removed[J],gt=x.indexOf(st);gt>=0&&(x[gt]=null,y[gt].disconnect(st))}for(let J=0;J<X.added.length;J++){let st=X.added[J],gt=x.indexOf(st);if(gt===-1){for(let St=0;St<y.length;St++)if(St>=x.length){x.push(st),gt=St;break}else if(x[St]===null){x[St]=st,gt=St;break}if(gt===-1)break}let ct=y[gt];ct&&ct.connect(st)}}let U=new D,B=new D;function Z(X,J,st){U.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(st.matrixWorld);let gt=U.distanceTo(B),ct=J.projectionMatrix.elements,St=st.projectionMatrix.elements,Pt=ct[14]/(ct[10]-1),At=ct[14]/(ct[10]+1),Wt=(ct[9]+1)/ct[5],z=(ct[9]-1)/ct[5],xe=(ct[8]-1)/ct[0],Tt=(St[8]+1)/St[0],Lt=Pt*xe,_t=Pt*Tt,Zt=gt/(-xe+Tt),Ut=Zt*-xe;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(Zt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let A=Pt+Zt,M=At+Zt,k=Lt-Ut,tt=_t+(gt-Ut),j=Wt*At/M*A,et=z*At/M*A;X.projectionMatrix.makePerspective(k,tt,j,et,A,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=w.near=T.near=X.near,v.far=w.far=T.far=X.far,(E!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,N=v.far);let J=X.parent,st=v.cameras;q(v,J);for(let gt=0;gt<st.length;gt++)q(st[gt],J);st.length===2?Z(v,T,w):v.projectionMatrix.copy(T.projectionMatrix),Y(X,v,J)};function Y(X,J,st){st===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(st.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=or*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let K=null;function Q(X,J){if(h=J.getViewerPose(c||o),_=J,h!==null){let st=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let gt=!1;st.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let ct=0;ct<st.length;ct++){let St=st[ct],Pt=null;if(p!==null)Pt=p.getViewport(St);else{let Wt=u.getViewSubImage(f,St);Pt=Wt.viewport,ct===0&&(t.setRenderTargetTextures(d,Wt.colorTexture,f.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(d))}let At=L[ct];At===void 0&&(At=new Xe,At.layers.enable(ct),At.viewport=new Pe,L[ct]=At),At.matrix.fromArray(St.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(St.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ct===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(At)}}for(let st=0;st<y.length;st++){let gt=x[st],ct=y[st];gt!==null&&ct!==void 0&&ct.update(gt,J,c||o)}K&&K(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let rt=new _f;rt.setAnimationLoop(Q),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}};function uv(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,gf(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=t.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fv(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=i[y.id];S===void 0&&(_(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));let C=x.program;n.updateUBOMapping(y,C);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let S=s.createBuffer(),C=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],S=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,w=S.length;T<w;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,E=L.length;v<E;v++){let N=L[v];if(p(N,T,v,C)===!0){let G=N.__offset,$=Array.isArray(N.value)?N.value:[N.value],R=0;for(let U=0;U<$.length;U++){let B=$[U],Z=g(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,G+R,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,R),R+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,x,S,C){let T=y.value,w=x+"_"+S;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{let L=C[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function _(y){let x=y.uniforms,S=0,C=16;for(let w=0,L=x.length;w<L;w++){let v=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,N=v.length;E<N;E++){let G=v[E],$=Array.isArray(G.value)?G.value:[G.value];for(let R=0,U=$.length;R<U;R++){let B=$[R],Z=g(B),q=S%C;q!==0&&C-q<Z.boundary&&(S+=C-q),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Z.storage}}}let T=S%C;return T>0&&(S+=C-T),y.__size=S,y.__cache={},this}function g(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}var hr=class{constructor(t={}){let{canvas:e=Sm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,S=!1,C=0,T=0,w=null,L=-1,v=null,E=new Pe,N=new Pe,G=null,$=new zt(0),R=0,U=e.width,B=e.height,Z=1,q=null,Y=null,K=new Pe(0,0,U,B),Q=new Pe(0,0,U,B),rt=!1,X=new Ia,J=!1,st=!1,gt=null,ct=new we,St=new Dt,Pt=new D,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return w===null?Z:1}let z=n;function xe(b,O){for(let H=0;H<b.length;H++){let W=b[H],V=e.getContext(W,O);if(V!==null)return V}return null}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",nt,!1),z===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),z=xe(O,b),z===null)throw xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Tt,Lt,_t,Zt,Ut,A,M,k,tt,j,et,xt,lt,dt,wt,I,F,ht,yt,pt,mt,ut,It,qt;function se(){Tt=new L0(z),Lt=new E0(z,Tt,t),Tt.init(Lt),ut=new cv(z,Tt,Lt),_t=new ov(z,Tt,Lt),Zt=new U0(z),Ut=new Jx,A=new lv(z,Tt,_t,Ut,Lt,ut,Zt),M=new A0(x),k=new P0(x),tt=new Hm(z,Lt),It=new b0(z,Tt,tt,Lt),j=new I0(z,tt,Zt,It),et=new B0(z,j,tt,Zt),yt=new F0(z,Lt,A),I=new w0(Ut),xt=new Zx(x,M,k,Tt,Lt,It,I),lt=new uv(x,Ut),dt=new Kx,wt=new iv(Tt,Lt),ht=new S0(x,M,k,_t,et,f,l),F=new av(x,et,Lt),qt=new fv(z,Zt,Lt,_t),pt=new T0(z,Tt,Zt,Lt),mt=new D0(z,Tt,Zt,Lt),Zt.programs=xt.programs,x.capabilities=Lt,x.extensions=Tt,x.properties=Ut,x.renderLists=dt,x.shadowMap=F,x.state=_t,x.info=Zt}se();let Ot=new ql(x,z);this.xr=Ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=Tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(U,B,!1))},this.getSize=function(b){return b.set(U,B)},this.setSize=function(b,O,H=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,B=O,e.width=Math.floor(b*Z),e.height=Math.floor(O*Z),H===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(U*Z,B*Z).floor()},this.setDrawingBufferSize=function(b,O,H){U=b,B=O,Z=H,e.width=Math.floor(b*H),e.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,O,H,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,O,H,W),_t.viewport(E.copy(K).multiplyScalar(Z).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,O,H,W){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,O,H,W),_t.scissor(N.copy(Q).multiplyScalar(Z).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){_t.setScissorTest(rt=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(b=!0,O=!0,H=!0){let W=0;if(b){let V=!1;if(w!==null){let ft=w.texture.format;V=ft===hf||ft===cf||ft===lf}if(V){let ft=w.texture.type,bt=ft===ui||ft===li||ft===ac||ft===Vi||ft===af||ft===of,Ct=ht.getClearColor(),Rt=ht.getClearAlpha(),Vt=Ct.r,Nt=Ct.g,Bt=Ct.b;bt?(p[0]=Vt,p[1]=Nt,p[2]=Bt,p[3]=Rt,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Vt,_[1]=Nt,_[2]=Bt,_[3]=Rt,z.clearBufferiv(z.COLOR,0,_))}else W|=z.COLOR_BUFFER_BIT}O&&(W|=z.DEPTH_BUFFER_BIT),H&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),dt.dispose(),wt.dispose(),Ut.dispose(),M.dispose(),k.dispose(),et.dispose(),It.dispose(),qt.dispose(),xt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",ne),Ot.removeEventListener("sessionend",Kt),gt&&(gt.dispose(),gt=null),vt.stop()};function it(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=Zt.autoReset,O=F.enabled,H=F.autoUpdate,W=F.needsUpdate,V=F.type;se(),Zt.autoReset=b,F.enabled=O,F.autoUpdate=H,F.needsUpdate=W,F.type=V}function nt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){let O=b.target;O.removeEventListener("dispose",ot),Et(O)}function Et(b){Mt(b),Ut.remove(b)}function Mt(b){let O=Ut.get(b).programs;O!==void 0&&(O.forEach(function(H){xt.releaseProgram(H)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,W,V,ft){O===null&&(O=At);let bt=V.isMesh&&V.matrixWorld.determinant()<0,Ct=wf(b,O,H,W,V);_t.setMaterial(W,bt);let Rt=H.index,Vt=1;if(W.wireframe===!0){if(Rt=j.getWireframeAttribute(H),Rt===void 0)return;Vt=2}let Nt=H.drawRange,Bt=H.attributes.position,me=Nt.start*Vt,je=(Nt.start+Nt.count)*Vt;ft!==null&&(me=Math.max(me,ft.start*Vt),je=Math.min(je,(ft.start+ft.count)*Vt)),Rt!==null?(me=Math.max(me,0),je=Math.min(je,Rt.count)):Bt!=null&&(me=Math.max(me,0),je=Math.min(je,Bt.count));let Te=je-me;if(Te<0||Te===1/0)return;It.setup(V,W,Ct,H,Rt);let Dn,ae=pt;if(Rt!==null&&(Dn=tt.get(Rt),ae=mt,ae.setIndex(Dn)),V.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*Wt()),ae.setMode(z.LINES)):ae.setMode(z.TRIANGLES);else if(V.isLine){let Ht=W.linewidth;Ht===void 0&&(Ht=1),_t.setLineWidth(Ht*Wt()),V.isLineSegments?ae.setMode(z.LINES):V.isLineLoop?ae.setMode(z.LINE_LOOP):ae.setMode(z.LINE_STRIP)}else V.isPoints?ae.setMode(z.POINTS):V.isSprite&&ae.setMode(z.TRIANGLES);if(V.isBatchedMesh)ae.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ae.renderInstances(me,Te,V.count);else if(H.isInstancedBufferGeometry){let Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ja=Math.min(H.instanceCount,Ht);ae.renderInstances(me,Te,Ja)}else ae.render(me,Te)};function Jt(b,O,H){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=Qe,b.needsUpdate=!0,vr(b,O,H),b.side=fi,b.needsUpdate=!0,vr(b,O,H),b.side=sn):vr(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),m=wt.get(H),m.init(),y.push(m),H.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),b!==H&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);let W=new Set;return b.traverse(function(V){let ft=V.material;if(ft)if(Array.isArray(ft))for(let bt=0;bt<ft.length;bt++){let Ct=ft[bt];Jt(Ct,H,V),W.add(Ct)}else Jt(ft,H,V),W.add(ft)}),y.pop(),m=null,W},this.compileAsync=function(b,O,H=null){let W=this.compile(b,O,H);return new Promise(V=>{function ft(){if(W.forEach(function(bt){Ut.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){V(b);return}setTimeout(ft,10)}Tt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Yt=null;function $t(b){Yt&&Yt(b)}function ne(){vt.stop()}function Kt(){vt.start()}let vt=new _f;vt.setAnimationLoop($t),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(b){Yt=b,Ot.setAnimationLoop(b),b===null?vt.stop():vt.start()},Ot.addEventListener("sessionstart",ne),Ot.addEventListener("sessionend",Kt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(O),O=Ot.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,w),m=wt.get(b,y.length),m.init(),y.push(m),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(ct),st=this.localClippingEnabled,J=I.init(this.clippingPlanes,st),g=dt.get(b,d.length),g.init(),d.push(g),Ft(b,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(q,Y),this.info.render.frame++,J===!0&&I.beginShadows();let H=m.state.shadowsArray;if(F.render(H,b,O),J===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(g,b),m.setupLights(x._useLegacyLights),O.isArrayCamera){let W=O.cameras;for(let V=0,ft=W.length;V<ft;V++){let bt=W[V];pe(g,b,bt,bt.viewport)}}else pe(g,b,O);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(x,b,O),It.resetDefaultState(),L=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Ft(b,O,H,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){W&&Pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);let bt=et.update(b),Ct=b.material;Ct.visible&&g.push(b,bt,Ct,H,Pt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let bt=et.update(b),Ct=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(Ct)){let Rt=bt.groups;for(let Vt=0,Nt=Rt.length;Vt<Nt;Vt++){let Bt=Rt[Vt],me=Ct[Bt.materialIndex];me&&me.visible&&g.push(b,bt,me,H,Pt.z,Bt)}}else Ct.visible&&g.push(b,bt,Ct,H,Pt.z,null)}}let ft=b.children;for(let bt=0,Ct=ft.length;bt<Ct;bt++)Ft(ft[bt],O,H,W)}function pe(b,O,H,W){let V=b.opaque,ft=b.transmissive,bt=b.transparent;m.setupLightsView(H),J===!0&&I.setGlobalState(x.clippingPlanes,H),ft.length>0&&Be(V,ft,O,H),W&&_t.viewport(E.copy(W)),V.length>0&&Ji(V,O,H),ft.length>0&&Ji(ft,O,H),bt.length>0&&Ji(bt,O,H),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Be(b,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ft=Lt.isWebGL2;gt===null&&(gt=new qe(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Tn:ui,minFilter:ar,samples:ft?4:0})),x.getDrawingBufferSize(St),ft?gt.setSize(St.x,St.y):gt.setSize(Ma(St.x),Ma(St.y));let bt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor($),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let Ct=x.toneMapping;x.toneMapping=hi,Ji(b,H,W),A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt);let Rt=!1;for(let Vt=0,Nt=O.length;Vt<Nt;Vt++){let Bt=O[Vt],me=Bt.object,je=Bt.geometry,Te=Bt.material,Dn=Bt.group;if(Te.side===sn&&me.layers.test(W.layers)){let ae=Te.side;Te.side=Qe,Te.needsUpdate=!0,mc(me,H,W,je,Te,Dn),Te.side=ae,Te.needsUpdate=!0,Rt=!0}}Rt===!0&&(A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt)),x.setRenderTarget(bt),x.setClearColor($,R),x.toneMapping=Ct}function Ji(b,O,H){let W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ft=b.length;V<ft;V++){let bt=b[V],Ct=bt.object,Rt=bt.geometry,Vt=W===null?bt.material:W,Nt=bt.group;Ct.layers.test(H.layers)&&mc(Ct,O,H,Rt,Vt,Nt)}}function mc(b,O,H,W,V,ft){b.onBeforeRender(x,O,H,W,V,ft),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(x,O,H,W,b,ft),V.transparent===!0&&V.side===sn&&V.forceSinglePass===!1?(V.side=Qe,V.needsUpdate=!0,x.renderBufferDirect(H,O,W,V,b,ft),V.side=fi,V.needsUpdate=!0,x.renderBufferDirect(H,O,W,V,b,ft),V.side=sn):x.renderBufferDirect(H,O,W,V,b,ft),b.onAfterRender(x,O,H,W,V,ft)}function vr(b,O,H){O.isScene!==!0&&(O=At);let W=Ut.get(b),V=m.state.lights,ft=m.state.shadowsArray,bt=V.state.version,Ct=xt.getParameters(b,V.state,ft,O,H),Rt=xt.getProgramCacheKey(Ct),Vt=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?k:M).get(b.envMap||W.environment),Vt===void 0&&(b.addEventListener("dispose",ot),Vt=new Map,W.programs=Vt);let Nt=Vt.get(Rt);if(Nt!==void 0){if(W.currentProgram===Nt&&W.lightsStateVersion===bt)return _c(b,Ct),Nt}else Ct.uniforms=xt.getUniforms(b),b.onBuild(H,Ct,x),b.onBeforeCompile(Ct,x),Nt=xt.acquireProgram(Ct,Rt),Vt.set(Rt,Nt),W.uniforms=Ct.uniforms;let Bt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=I.uniform),_c(b,Ct),W.needsLights=Cf(b),W.lightsStateVersion=bt,W.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.directionalShadowMap.value=V.state.directionalShadowMap,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotShadowMap.value=V.state.spotShadowMap,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMap.value=V.state.pointShadowMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Nt,W.uniformsList=null,Nt}function gc(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Cs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function _c(b,O){let H=Ut.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function wf(b,O,H,W,V){O.isScene!==!0&&(O=At),A.resetTextureUnits();let ft=O.fog,bt=W.isMeshStandardMaterial?O.environment:null,Ct=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zn,Rt=(W.isMeshStandardMaterial?k:M).get(W.envMap||bt),Vt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!H.morphAttributes.position,me=!!H.morphAttributes.normal,je=!!H.morphAttributes.color,Te=hi;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Te=x.toneMapping);let Dn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=Dn!==void 0?Dn.length:0,Ht=Ut.get(W),Ja=m.state.lights;if(J===!0&&(st===!0||b!==v)){let on=b===v&&W.id===L;I.setState(W,b,on)}let he=!1;W.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ja.state.version||Ht.outputColorSpace!==Ct||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||Ht.envMap!==Rt||W.fog===!0&&Ht.fog!==ft||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==I.numPlanes||Ht.numIntersection!==I.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Nt||Ht.morphTargets!==Bt||Ht.morphNormals!==me||Ht.morphColors!==je||Ht.toneMapping!==Te||Lt.isWebGL2===!0&&Ht.morphTargetsCount!==ae)&&(he=!0):(he=!0,Ht.__version=W.version);let yi=Ht.currentProgram;he===!0&&(yi=vr(W,O,V));let xc=!1,zs=!1,$a=!1,Le=yi.getUniforms(),Mi=Ht.uniforms;if(_t.useProgram(yi.program)&&(xc=!0,zs=!0,$a=!0),W.id!==L&&(L=W.id,zs=!0),xc||v!==b){Le.setValue(z,"projectionMatrix",b.projectionMatrix),Le.setValue(z,"viewMatrix",b.matrixWorldInverse);let on=Le.map.cameraPosition;on!==void 0&&on.setValue(z,Pt.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&Le.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Le.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,zs=!0,$a=!0)}if(V.isSkinnedMesh){Le.setOptional(z,V,"bindMatrix"),Le.setOptional(z,V,"bindMatrixInverse");let on=V.skeleton;on&&(Lt.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Le.setValue(z,"boneTexture",on.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Le.setOptional(z,V,"batchingTexture"),Le.setValue(z,"batchingTexture",V._matricesTexture,A));let Ka=H.morphAttributes;if((Ka.position!==void 0||Ka.normal!==void 0||Ka.color!==void 0&&Lt.isWebGL2===!0)&&yt.update(V,H,yi),(zs||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,Le.setValue(z,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Mi.envMap.value=Rt,Mi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),zs&&(Le.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Af(Mi,$a),ft&&W.fog===!0&&lt.refreshFogUniforms(Mi,ft),lt.refreshMaterialUniforms(Mi,W,Z,B,gt),Cs.upload(z,gc(Ht),Mi,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cs.upload(z,gc(Ht),Mi,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Le.setValue(z,"center",V.center),Le.setValue(z,"modelViewMatrix",V.modelViewMatrix),Le.setValue(z,"normalMatrix",V.normalMatrix),Le.setValue(z,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let on=W.uniformsGroups;for(let Qa=0,Rf=on.length;Qa<Rf;Qa++)if(Lt.isWebGL2){let vc=on[Qa];qt.update(vc,yi),qt.bind(vc,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function Af(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Cf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,O,H){Ut.get(b.texture).__webglTexture=O,Ut.get(b.depthTexture).__webglTexture=H;let W=Ut.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){let H=Ut.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){w=b,C=O,T=H;let W=!0,V=null,ft=!1,bt=!1;if(b){let Rt=Ut.get(b);Rt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Rt.__webglFramebuffer===void 0?A.setupRenderTarget(b):Rt.__hasExternalTextures&&A.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);let Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(bt=!0);let Nt=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?V=Nt[O][H]:V=Nt[O],ft=!0):Lt.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?V=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[H]:V=Nt,E.copy(b.viewport),N.copy(b.scissor),G=b.scissorTest}else E.copy(K).multiplyScalar(Z).floor(),N.copy(Q).multiplyScalar(Z).floor(),G=rt;if(_t.bindFramebuffer(z.FRAMEBUFFER,V)&&Lt.drawBuffers&&W&&_t.drawBuffers(b,V),_t.viewport(E),_t.scissor(N),_t.setScissorTest(G),ft){let Rt=Ut.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Rt.__webglTexture,H)}else if(bt){let Rt=Ut.get(b.texture),Vt=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.__webglTexture,H||0,Vt)}L=-1},this.readRenderTargetPixels=function(b,O,H,W,V,ft,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){_t.bindFramebuffer(z.FRAMEBUFFER,Ct);try{let Rt=b.texture,Vt=Rt.format,Nt=Rt.type;if(Vt!==bn&&ut.convert(Vt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Bt=Nt===Tn&&(Tt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Nt!==ui&&ut.convert(Nt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===ci&&(Lt.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&H>=0&&H<=b.height-V&&z.readPixels(O,H,W,V,ut.convert(Vt),ut.convert(Nt),ft)}finally{let Rt=w!==null?Ut.get(w).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(b,O,H=0){let W=Math.pow(2,-H),V=Math.floor(O.image.width*W),ft=Math.floor(O.image.height*W);A.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,b.x,b.y,V,ft),_t.unbindTexture()},this.copyTextureToTexture=function(b,O,H,W=0){let V=O.image.width,ft=O.image.height,bt=ut.convert(H.format),Ct=ut.convert(H.type);A.setTexture2D(H,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,b.x,b.y,V,ft,bt,Ct,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,bt,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,b.x,b.y,bt,Ct,O.image),W===0&&H.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H,W,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ft=b.max.x-b.min.x+1,bt=b.max.y-b.min.y+1,Ct=b.max.z-b.min.z+1,Rt=ut.convert(W.format),Vt=ut.convert(W.type),Nt;if(W.isData3DTexture)A.setTexture3D(W,0),Nt=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Nt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let Bt=z.getParameter(z.UNPACK_ROW_LENGTH),me=z.getParameter(z.UNPACK_IMAGE_HEIGHT),je=z.getParameter(z.UNPACK_SKIP_PIXELS),Te=z.getParameter(z.UNPACK_SKIP_ROWS),Dn=z.getParameter(z.UNPACK_SKIP_IMAGES),ae=H.isCompressedTexture?H.mipmaps[V]:H.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(Nt,V,O.x,O.y,O.z,ft,bt,Ct,Rt,Vt,ae.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Nt,V,O.x,O.y,O.z,ft,bt,Ct,Rt,ae.data)):z.texSubImage3D(Nt,V,O.x,O.y,O.z,ft,bt,Ct,Rt,Vt,ae),z.pixelStorei(z.UNPACK_ROW_LENGTH,Bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,me),z.pixelStorei(z.UNPACK_SKIP_PIXELS,je),z.pixelStorei(z.UNPACK_SKIP_ROWS,Te),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Dn),V===0&&W.generateMipmaps&&z.generateMipmap(Nt),_t.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,_t.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===oc?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ka?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?Gi:ff}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Gi?Re:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Yl=class extends hr{};Yl.prototype.isWebGL1Renderer=!0;var Na=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var ur=class extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yu=new D,Zu=new D,Ju=new we,bl=new lr,aa=new Xi,fr=class extends rn{constructor(t=new ye,e=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Yu.fromBufferAttribute(e,i-1),Zu.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Yu.distanceTo(Zu);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;Ju.copy(i).invert(),bl.copy(t.ray).applyMatrix4(Ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,f=new D,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let d=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let x=d,S=y-1;x<S;x+=p){let C=_.getX(x),T=_.getX(x+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),bl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=d,S=y-1;x<S;x+=p){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),bl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},$u=new D,Ku=new D,Oa=class extends fr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)$u.fromBufferAttribute(e,i),Ku.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$u.distanceTo(Ku);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ds=class extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qu=new we,Zl=new lr,oa=new Xi,la=new D,dr=class extends rn{constructor(t=new ye,e=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;Qu.copy(i).invert(),Zl.copy(t.ray).applyMatrix4(Qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,g=p;_<g;_++){let m=c.getX(_);la.fromBufferAttribute(u,m),ju(la,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p;_<g;_++)la.fromBufferAttribute(u,_),ju(la,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ju(s,t,e,n,i,r,o){let a=Zl.distanceSqToPoint(s);if(a<e){let l=new D;Zl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var pr=class s extends ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],_=0,g=[],m=n/2,d=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(p,2));function y(){let S=new D,C=new D,T=0,w=(e-t)/n;for(let L=0;L<=r;L++){let v=[],E=L/r,N=E*(e-t)+t;for(let G=0;G<=i;G++){let $=G/i,R=$*l+a,U=Math.sin(R),B=Math.cos(R);C.x=N*U,C.y=-E*n+m,C.z=N*B,u.push(C.x,C.y,C.z),S.set(U,w,B).normalize(),f.push(S.x,S.y,S.z),p.push($,1-E),v.push(_++)}g.push(v)}for(let L=0;L<i;L++)for(let v=0;v<r;v++){let E=g[v][L],N=g[v+1][L],G=g[v+1][L+1],$=g[v][L+1];h.push(E,N,$),h.push(N,G,$),T+=6}c.addGroup(d,T,0),d+=T}function x(S){let C=_,T=new Dt,w=new D,L=0,v=S===!0?t:e,E=S===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),_++;let N=_;for(let G=0;G<=i;G++){let R=G/i*l+a,U=Math.cos(R),B=Math.sin(R);w.x=v*B,w.y=m*E,w.z=v*U,u.push(w.x,w.y,w.z),f.push(0,E,0),T.x=U*.5+.5,T.y=B*.5*E+.5,p.push(T.x,T.y),_++}for(let G=0;G<i;G++){let $=C+G,R=N+G;S===!0?h.push(R,R+1,$):h.push(R+1,R,$),L+=3}c.addGroup(d,L,S===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mr=class s extends pr{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ca=new D,ha=new D,Tl=new D,ua=new ki,Fa=class extends ye{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(ws*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:g,b:m,c:d}=ua;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),ua.getNormal(Tl),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let x=(y+1)%3,S=u[y],C=u[x],T=ua[h[y]],w=ua[h[x]],L=`${S}_${C}`,v=`${C}_${S}`;v in f&&f[v]?(Tl.dot(f[v].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(w.x,w.y,w.z)),f[v]=null):L in f||(f[L]={index0:c[y],index1:c[x],normal:Tl.clone()})}}for(let _ in f)if(f[_]){let{index0:g,index1:m}=f[_];ca.fromBufferAttribute(a,g),ha.fromBufferAttribute(a,m),p.push(ca.x,ca.y,ca.z),p.push(ha.x,ha.y,ha.z)}this.setAttribute("position",new ee(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Ba=class s extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,p=new D,_=new Dt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<i;g++){let m=g*(n+1);for(let d=0;d<n;d++){let y=d+m,x=y,S=y+n+1,C=y+n+2,T=y+1;a.push(x,S,T),a.push(S,C,T)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var gr=class s extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,f=new D,p=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){let y=[],x=d/n,S=0;d===0&&o===0?S=.5/e:d===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(T+S,1-x),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let x=h[d][y+1],S=h[d][y],C=h[d+1][y],T=h[d+1][y+1];(d!==0||o>0)&&p.push(x,S,T),(d!==n-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(g,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function fa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function dv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jl=class extends Us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case su:r=t,a=2*e-n;break;case ru:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case su:o=t,l=2*n-e;break;case ru:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,d=-f*m+2*f*g-f*_,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-p)*m+(1.5+p)*g+.5*_,S=p*m-p*g;for(let C=0;C!==a;++C)r[C]=d*o[h+C]+y*o[c+C]+x*o[l+C]+S*o[u+C];return r}},$l=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Kl=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fa(e,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fa(t.times,Array),values:fa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ma:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ga;var Yi=class extends wn{};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ma;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends wn{};Ql.prototype.ValueTypeName="color";var jl=class extends wn{};jl.prototype.ValueTypeName="number";var tc=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends wn{InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.DefaultInterpolation=ga;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends wn{};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ma;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends wn{};ec.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},pv=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function tf(){return(typeof performance>"u"?Date:performance).now()}var uc="\\[\\]\\.:\\/",mv=new RegExp("["+uc+"]","g"),fc="[^"+uc+"]",gv="[^"+uc.replace("\\.","")+"]",_v=/((?:WC+[\/:])*)/.source.replace("WC",fc),xv=/(WCOD+)?/.source.replace("WCOD",gv),vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),Mv=new RegExp("^"+_v+xv+vv+yv+"$"),Sv=["material","materials","bones","map"],sc=class{constructor(t,e,n){let i=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mv,"")}static parseTrackName(t){let e=Mv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=sc;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tv=new cr(-1,1,1,-1,0,1),dc=class extends ye{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}},Ev=new dc,vi=class{constructor(t){this._mesh=new Ke(Ev,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Tv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ga=class extends an{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xi.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xr=class extends an{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Wa=class extends an{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Xa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Dt);this._width=n.width,this._height=n.height,e=new qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ga(Ha),this.copyPass.material.blending=In,this.clock=new Ns}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xr!==void 0&&(o instanceof xr?n=!0:o instanceof Wa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qa=class extends an{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new zt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var bf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Bs=class s extends an{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Dt(t.x,t.y):new Dt(256,256),this.clearColor=new zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qe(r,o,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new qe(r,o,{type:Tn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new qe(r,o,{type:Tn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=bf;this.highPassUniforms=xi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Dt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ha;this.copyUniforms=xi.clone(h.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:da,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new zt,this.oldClearAlpha=1,this.basic=new gi,this.fsQuad=new vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Dt(.5,.5)},direction:{value:new Dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Bs.BlurDirectionX=new Dt(1,0);Bs.BlurDirectionY=new Dt(0,1);var Tf={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

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

		}`};var Ya=class extends an{constructor(t=.5,e=!1){super();let n=Tf;this.uniforms=xi.clone(n.uniforms),this.material=new Me({name:n.name,uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.uniforms.intensity.value=t,this.uniforms.grayscale.value=e,this.fsQuad=new vi(this.material)}render(t,e,n,i){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=i,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Za=125,pc=[{at:0,name:"THE POINT",title:"\u09B8\u09AC\u0995\u09BF\u099B\u09C1\u09B0 \u09B6\u09C1\u09B0\u09C1\u0964 \u098F\u0995\u099F\u09BF \u09AC\u09BF\u09A8\u09CD\u09A6\u09C1\u0964",subtitle:"\u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8 \u0986\u099B\u09C7\u0964 \u099A\u09B2\u09BE\u09B0 \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09A6\u09BF\u0995 \u098F\u0996\u09A8\u0993 \u09A8\u09C7\u0987\u0964"},{at:8,name:"ONE DIRECTION",title:"\u098F\u0995\u099F\u09BF \u09AA\u09A5\u0964 \u098F\u0995\u099F\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u0964",subtitle:"\u09B0\u09C7\u0996\u09BE\u09DF \u0995\u09CB\u09A5\u09BE\u09DF \u0986\u099B\u09CB, \u09B6\u09C1\u09A7\u09C1 x \u09AC\u09B2\u09B2\u09C7\u0987 \u09B9\u09DF\u0964"},{at:20,name:"THE PLANE",title:"\u0986\u09B0\u09C7\u0995\u099F\u09BF \u09A6\u09BF\u0995 \u0996\u09C1\u09B2\u09C7 \u0997\u09C7\u09B2\u0964",subtitle:"\u09A1\u09BE\u09A8\u09C7 \u0995\u09A4\u099F\u09BE, \u0993\u09AA\u09B0\u09C7 \u0995\u09A4\u099F\u09BE\u2014\u09A6\u09C1\u099F\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09AE\u09BF\u09B2\u09C7 \u098F\u0995\u099F\u09BF \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8\u0964"},{at:34,name:"THE VOLUME",title:"\u09B8\u09AE\u09A4\u09B2 \u09A5\u09C7\u0995\u09C7 \u0989\u09A0\u09C7 \u098F\u09B2\u09CB \u0989\u099A\u09CD\u099A\u09A4\u09BE\u0964",subtitle:"\u09A6\u09C8\u09B0\u09CD\u0998\u09CD\u09AF, \u09AA\u09CD\u09B0\u09B8\u09CD\u09A5, \u0989\u099A\u09CD\u099A\u09A4\u09BE\u0964 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u09AC\u09BE\u09B0 \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u0964"},{at:48,name:"RIGHT ANGLES",title:"\u09A4\u09BF\u09A8 \u09A6\u09BF\u0995\u0964 \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u09AE\u0995\u09CB\u09A3\u0964",subtitle:"\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u0985\u0995\u09CD\u09B7 \u0985\u09A8\u09CD\u09AF \u09A6\u09C1\u099F\u09BF\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09EF\u09E6\xB0 \u0995\u09CB\u09A3\u09C7\u0964"},{at:59,name:"THE FOURTH ATTEMPT",title:"\u099A\u09A4\u09C1\u09B0\u09CD\u09A5 \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u09A6\u09BF\u0995\u099F\u09BF \u0995\u09CB\u09A5\u09BE\u09DF?",subtitle:"\u09B9\u09B2\u09C1\u09A6 \u09B0\u09C7\u0996\u09BE \u0998\u09CB\u09B0\u09C7\u0964 \u09A4\u09BF\u09A8\u099F\u09BF \u0995\u09CB\u09A3\u0987 \u0995\u09BF \u098F\u0995\u09B8\u0999\u09CD\u0997\u09C7 \u09EF\u09E6\xB0 \u09B9\u09AC\u09C7?"},{at:73,name:"THE CONSTRAINT",title:"\u09A4\u09BF\u09A8\u099F\u09BF \u09B6\u09B0\u09CD\u09A4\u0964 \u0995\u09CD\u09B0\u09AE\u09C7 \u09B6\u09C2\u09A8\u09CD\u09AF\u0964",subtitle:"X, Y, Z\u2014\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u09B9\u0993\u09DF\u09BE\u09B0 \u09B6\u09B0\u09CD\u09A4\u099F\u09BF \u09A6\u09C7\u0996\u09BF\u0964"},{at:89,name:"BEYOND THE FRAME",title:"\u0997\u09A3\u09BF\u09A4\u09C7\u09B0 \u099C\u0997\u09CE \u098F\u0996\u09BE\u09A8\u09C7\u0987 \u09B6\u09C7\u09B7 \u09A8\u09DF\u0964",subtitle:"\u099A\u09BE\u09B0 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE\u09DF \u099A\u09BE\u09B0\u099F\u09BF \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u0999\u09CD\u0995\u0964 \u098F\u099F\u09BF \u09EAD \u0998\u09A8\u0995\u09C7\u09B0 \u098F\u0995\u099F\u09BF \u09E9D \u09AA\u09CD\u09B0\u0995\u09CD\u09B7\u09C7\u09AA\u09A3\u0964"},{at:104,name:"WHERE AND WHEN",title:"\u098F\u0995\u0987 \u09B8\u09CD\u09A5\u09BE\u09A8\u0964 \u09AD\u09BF\u09A8\u09CD\u09A8 \u09B8\u09AE\u09DF\u0964",subtitle:"\u0998\u099F\u09A8\u09BE \u099A\u09BF\u09B9\u09CD\u09A8\u09BF\u09A4 \u0995\u09B0\u09A4\u09C7 \u201C\u0995\u09CB\u09A5\u09BE\u09DF\u201D-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u201C\u0995\u0996\u09A8\u201D-\u0993 \u09B2\u09BE\u0997\u09C7\u0964"},{at:116,name:"AN OPEN QUESTION",title:"\u09A4\u09BF\u09A8\u099F\u09BF \u09A6\u09BF\u0995\u0964 \u0986\u09B0\u0993 \u09AC\u09DC \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u0964",subtitle:"\u098F\u0987 3D \u09B8\u09CD\u09A5\u09BE\u09A8\u09C7\u09B0 \u09B8\u09C0\u09AE\u09BE \u09A6\u09C7\u0996\u09B2\u09BE\u09AE\u2014\u09AE\u09B9\u09BE\u09AC\u09BF\u09B6\u09CD\u09AC\u09C7\u09B0 \u09B8\u09AC \u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09A8\u09BE\u09B0 \u09B8\u09C0\u09AE\u09BE \u09A8\u09DF\u0964"}],Ef=s=>Math.max(0,Math.min(1,s)),wv=s=>(s=Ef(s),s*s*(3-2*s)),ce=(s,t,e)=>wv((s-t)/(e-t));function Av(s){let t=Math.hypot(...s);return t<1e-8?null:s.map(e=>Math.acos(Math.max(-1,Math.min(1,e/t)))*180/Math.PI)}function Cv(s){let t=Math.cos(s),e=Math.sin(s),n=Math.cos(s*.6),i=Math.sin(s*.6);return Array.from({length:16},(r,o)=>{let a=o&1?1:-1,l=o&2?1:-1,c=o&4?1:-1,h=o&8?1:-1;[a,h]=[a*t-h*e,a*e+h*t],[l,h]=[l*n-h*i,l*i+h*n];let u=4/(4-h);return[a*u,l*u,c*u]})}function vy(){let s=I=>document.getElementById(I),t=s("canvas-container"),e=new Na;e.background=new zt(132364);let n=new Xe(42,1,.1,200),i=new hr({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<600?1.25:1.5)),i.toneMapping=rc,i.toneMappingExposure=1.05,t.appendChild(i.domElement);let r=new Xa(i);r.addPass(new qa(e,n));let o=new Bs(new Dt(1,1),.95,.45,.2);r.addPass(o),r.addPass(new Ya(.09,!1));let a=new Yn;e.add(a);let l=new D(0,1,0),c=[new D(1,0,0),l.clone(),new D(0,0,1)],h=[16739462,6352319,7318271],u=["#ff93a6","#85f4cf","#9cc6ff"],f=new dr(new ye().setAttribute("position",new ee(Array.from({length:3600},()=>(Math.random()-.5)*95),3)),new Ds({color:8492214,size:.025,transparent:!0,opacity:.4,depthWrite:!1}));e.add(f);function p(I,F,ht=1){let yt=new gi({color:F,transparent:!0,opacity:ht,depthWrite:ht===1}),pt=new Ke(I,yt);return a.add(pt),pt}let _=p(new gr(.07,24,24),16777215),g=p(new gr(.09,24,24),16772545);function m(I,F=.018){let ht=new pr(F,F,1,12);return ht.translate(0,.5,0),p(ht,I)}let d=h.map((I,F)=>{let ht=m(I);return ht.quaternion.setFromUnitVectors(l,c[F]),ht}),y=h.map((I,F)=>{let ht=p(new mr(.09,.25,16),I);return ht.quaternion.setFromUnitVectors(l,c[F]),ht});function x(I,F,ht=1,yt=!1){let pt=new ye().setFromPoints(I.map(It=>new D(...It))),mt=new ur({color:F,transparent:!0,opacity:ht,depthWrite:!1}),ut=yt?new Oa(pt,mt):new fr(pt,mt);return a.add(ut),ut}let S=new Yn;a.add(S);for(let I=0;I<=4;I++)for(let F of[[[I,0,0],[I,4,0]],[[0,I,0],[4,I,0]]]){let ht=x(F,5290397,.32);S.add(ht)}let C=p(new qi(4,4),3652016,.13);C.material.side=sn,C.position.set(2,2,0);let T=x([],10470655,.7,!0);T.geometry.dispose(),T.geometry=new Fa(new _i(4,4,4)),T.position.set(2,2,0);let w=p(new _i(4,4,4),4621767,.055);w.position.set(2,2,0);let L=m(16762218,.025),v=p(new mr(.11,.27,16),16762218),E=h.map(I=>m(I,.014)),N=x(Array.from({length:6},()=>[0,0,0]),16772545,.55,!0),G=N.geometry.attributes.position,$=[x([[.6,0,0],[.6,.6,0],[0,.6,0]],16772545),x([[0,.6,0],[0,.6,.6],[0,0,.6]],16772545),x([[.6,0,0],[.6,0,.6],[0,0,.6]],16772545)],R=Array.from({length:3},()=>{let I=p(new Ba(.96,1,80),9223423,0);return I.material.side=sn,I}),U=[];for(let I=0;I<16;I++)for(let F=0;F<4;F++){let ht=I^1<<F;I<ht&&U.push([I,ht])}let B=x(Array.from({length:64},()=>[0,0,0]),11329791,.85,!0),Z=B.geometry.attributes.position,q=new dr(new ye().setAttribute("position",new ee(new Float32Array(48),3)),new Ds({color:16770743,size:.07,transparent:!0}));a.add(q);let Y=[p(new qi(4,4),h[0],0),p(new qi(4,4),h[1],0)];Y[0].rotation.y=Math.PI/2,Y[0].position.set(0,2,2),Y[1].rotation.x=Math.PI/2,Y[1].position.set(0,0,2),Y.forEach(I=>{I.material.side=sn,I.material.depthWrite=!1});let K={time:0},Q=null,rt=!1,X=!1,J=!0,st=-1,gt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ct=null,St=null,Pt=[];function At(){try{let I=window.AudioContext||window.webkitAudioContext;if(!I)return;ct||(ct=new I),ct.resume().catch(()=>{}),St=ct.createGain(),St.gain.value=0,St.connect(ct.destination),St.gain.linearRampToValueAtTime(.22,ct.currentTime+2),Pt=[55,82.4069,110].map((F,ht)=>{let yt=ct.createOscillator(),pt=ct.createGain();return yt.type="sine",yt.frequency.value=F,pt.gain.value=ht===0?.32:.09,yt.connect(pt),pt.connect(St),yt.start(),{osc:yt,gain:pt}})}catch(I){console.warn("Audio unavailable; the film continues visually.",I)}}function Wt(){if(St){St.gain.cancelScheduledValues(ct.currentTime),St.gain.setTargetAtTime(0,ct.currentTime,.35);for(let I of Pt)I.osc.stop(ct.currentTime+2);Pt=[],St=null}}function z(I){if(!St||ct.state!=="running")return;let F=ct.createOscillator(),ht=ct.createGain();F.type="triangle",F.frequency.value=[220,277.18,329.63,440][I%4],ht.gain.value=0,ht.gain.linearRampToValueAtTime(.065,ct.currentTime+.09),ht.gain.exponentialRampToValueAtTime(1e-4,ct.currentTime+1.6),F.connect(ht),ht.connect(St),F.start(),F.stop(ct.currentTime+1.7)}let xe=[["label-x",new D(6.4,0,0)],["label-y",new D(0,6.4,0)],["label-z",new D(0,0,6.4)],["label-point",g.position],["label-w",new D],["angle-xy",new D(.85,.85,0)],["angle-yz",new D(0,.85,.85)],["angle-zx",new D(.85,0,.85)]],Tt=[s("component-a"),s("component-b"),s("component-c")],Lt=[[[1.7,.8,3.5],[5,2,9]],[[5,2,9],[4,1,11]],[[4,1,11],[2,2,13]],[[2,2,13],[11,9,12]],[[11,9,12],[9,7,11]],[[9,7,11],[10,7,13]],[[10,7,13],[8,5,10]],[[8,5,10],[7,4,10]],[[7,4,10],[10,7,12]],[[10,7,12],[12,8,16]]],_t=[[[0,0,0],[0,0,0]],[[0,0,0],[2,0,0]],[[2,0,0],[2,2,0]],[[2,2,0],[2,2,2]],[[2,2,2],[1.4,1.4,1.4]],[[1.4,1.4,1.4],[2,2,2]],[[2,2,2],[0,0,0]],[[0,0,0],[0,0,0]],[[0,0,0],[2,2,2]],[[2,2,2],[0,0,0]]],Zt=new D,Ut=new D,A=new D,M=new D;function k(I,F,ht){I.position.copy(F),A.copy(ht).sub(F);let yt=A.length();I.visible=yt>.005,I.scale.y=Math.max(1e-4,yt),yt>.005&&I.quaternion.setFromUnitVectors(l,A.normalize())}function tt(I,F){let ht=Cv(gt?.3:(I-89)*.16);B.visible=q.visible=F>0,B.material.opacity=F,q.material.opacity=F,U.forEach(([pt,mt],ut)=>{Z.setXYZ(ut*2,...ht[pt]),Z.setXYZ(ut*2+1,...ht[mt])}),ht.forEach((pt,mt)=>q.geometry.attributes.position.setXYZ(mt,...pt)),Z.needsUpdate=q.geometry.attributes.position.needsUpdate=!0,B.geometry.computeBoundingSphere(),q.geometry.computeBoundingSphere();let yt=1.55*ce(I,89,93);B.scale.setScalar(yt),q.scale.setScalar(yt)}function j(I){let F=pc.reduce((vt,Ft,pe)=>I>=Ft.at?pe:vt,0),ht=pc[F],yt=pc[F+1]?.at??Za,pt=I-ht.at,mt=(I-ht.at)/(yt-ht.at);st!==F&&(st=F,s("scene-name").textContent=ht.name,s("scene-number").textContent=`${String(F+1).padStart(2,"0")} / 10`,s("film-title").textContent=ht.title,s("film-subtitle").textContent=ht.subtitle,s("captions").classList.remove("reveal"),s("captions").offsetWidth,s("captions").classList.add("reveal"),z(F)),s("progress-fill").style.width=`${Ef(I/Za)*100}%`;let[ut,It]=Lt[F],[qt,se]=_t[F],Ot=gt?1:ce(I,ht.at,ht.at+3.2);Zt.fromArray(qt).lerp(Ut.fromArray(se),Ot),n.position.fromArray(ut).lerp(Ut.fromArray(It),Ot),!gt&&pt>3.2&&n.position.sub(Zt).applyAxisAngle(F<3?l:c[2],Math.sin(mt*Math.PI)*.055).add(Zt);let it=Math.max(1.17,1/n.aspect);n.position.sub(Zt).multiplyScalar(it).add(Zt);let P=ce(I,35,43);n.up.set(0,1-P,P).normalize(),n.lookAt(Zt),n.updateMatrixWorld();let nt=I<89?1:I<104?1-ce(I,89,92):I<116?ce(I,104,107):1-ce(I,116,120);_.visible=nt>.01,_.material.opacity=nt,_.scale.setScalar(I<8?.8+Math.sin(I*1.7)*.12:1);let ot=I>=73&&I<89?1-.2*ce(I,73,75):1,Et=[6*ce(I,8,12),6*ce(I,20,24),6*ce(I,34,39)].map(vt=>vt*ot);d.forEach((vt,Ft)=>{vt.visible=Et[Ft]>.01&&nt>.01,vt.scale.y=Math.max(Et[Ft],1e-4),vt.material.opacity=nt,y[Ft].visible=vt.visible,y[Ft].position.copy(c[Ft]).multiplyScalar(Et[Ft]),y[Ft].material.opacity=nt,xe[Ft][1].copy(c[Ft]).multiplyScalar(Et[Ft]+.35),s(`label-${"xyz"[Ft]}`).hidden=!vt.visible||I<[11,23,38][Ft]});let Mt=ce(I,21,26);C.visible=S.visible=I>=20&&I<59||I>=104&&I<116,C.position.set(2*Mt,2*Mt,0),C.scale.set(Mt,Mt,1),C.material.opacity=.13*nt,S.scale.set(Mt,Mt,1);let Jt=I<104?ce(I,35,42):1;T.visible=w.visible=I>=34&&I<59||I>=104&&I<116,T.scale.z=w.scale.z=Math.max(Jt,1e-4),T.position.z=w.position.z=Jt*2,T.material.opacity=.68*nt,w.material.opacity=.06*nt,g.visible=I>=11&&I<48||I>=104&&I<116,g.position.set(3*ce(I,11,16),I<34?2*ce(I,26,30):2,I<104?2*ce(I,41,45):2),s("label-point").hidden=!g.visible;let Yt=g.position.toArray().map(vt=>Number(vt.toFixed(1)));s("label-point").textContent=I<20?`x = ${Yt[0]}`:I<34?`(${Yt[0]}, ${Yt[1]})`:I<104?`(${Yt.join(", ")})`:I<109?"A \xB7 t = 0 s":"B \xB7 t = 5 s",N.visible=g.visible;let $t=g.position;[[0,0,0],[$t.x,0,0],[$t.x,0,0],[$t.x,$t.y,0],[$t.x,$t.y,0],[$t.x,$t.y,$t.z]].forEach((vt,Ft)=>G.setXYZ(Ft,...vt)),G.needsUpdate=!0,N.geometry.computeBoundingSphere(),$.forEach((vt,Ft)=>{vt.visible=I>=[22,48,48][Ft]&&I<73;let pe=F===4?Math.floor(pt/3.5)%3:0;vt.material.opacity=F===4&&pe!==Ft?.3:1,s(["angle-xy","angle-yz","angle-zx"][Ft]).hidden=!vt.visible||I<(Ft===0?22:48)}),L.visible=v.visible=I>=59&&I<86,s("label-w").hidden=!L.visible,s("angle-readout").hidden=I<59||I>=73,s("component-readout").hidden=I<73||I>=89,s("equation").hidden=![1,2,3,6,7,8].includes(F);let ne=new D;if(I>=59&&I<73){let vt=gt?.8:pt*.85;ne.set(Math.cos(vt),.45+Math.sin(vt*.7),Math.sin(vt)).normalize();let Ft=ce(I,67,70);ne.lerp(c[2],Ft).normalize().multiplyScalar(5.8);let pe=Av([ne.x,ne.y,ne.z]);s("angle-values").textContent=pe.map((Be,Ji)=>`${"XYZ"[Ji]} ${Be.toFixed(0)}\xB0`).join("   "),s("angle-label").textContent=I<70?"W-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09A4\u09BF\u09A8 \u0985\u0995\u09CD\u09B7\u09C7\u09B0 \u0995\u09CB\u09A3":"\u09EF\u09E6\xB0 \xB7 \u09EF\u09E6\xB0 \xB7 \u09E6\xB0 \u2014 W \u098F\u0996\u09A8 Z-\u098F\u09B0\u0987 \u09A6\u09BF\u0995",I>=70&&(s("film-title").textContent="\u09A6\u09C1\u099F\u09BF\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC\u0964 \u09A4\u09C3\u09A4\u09C0\u09DF\u099F\u09BF\u09B0\u0987 \u09AA\u09A5\u0964",s("film-subtitle").textContent="X \u0993 Y-\u098F\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u09B9\u09B2\u09C7 W, Z-\u098F\u09B0 \u09A6\u09BF\u0995\u09C7\u0987 \u098F\u09B8\u09C7 \u09AA\u09DC\u09C7\u0964 \u09A8\u09A4\u09C1\u09A8 \u09B8\u09CD\u09AC\u09BE\u09A7\u09C0\u09A8 \u0985\u0995\u09CD\u09B7 \u09B9\u09DF \u09A8\u09BE\u0964")}if(I>=73&&I<89){let vt=[3*(1-ce(I,75,78)),2*(1-ce(I,79,82)),2*(1-ce(I,83,86))];ne.fromArray(vt),Tt.forEach((pe,Be)=>{pe.textContent=`${"abc"[Be]} = ${vt[Be].toFixed(1)}`,pe.classList.toggle("locked",vt[Be]<.005),pe.style.color=u[Be]});let Ft=[new D(vt[0],0,0),new D(vt[0],vt[1],0),ne.clone()];E.forEach((pe,Be)=>k(pe,Be?Ft[Be-1]:new D,Ft[Be])),Y[0].material.opacity=I<79?.12*ce(I,74,75):0,Y[1].material.opacity=I>=79&&I<83?.12:0,s("equation").textContent=I<79?"W \u27C2 X  \u21D2  a = 0":I<83?"W \u27C2 Y  \u21D2  b = 0":I<86?"W \u27C2 Z  \u21D2  c = 0":"W = (0, 0, 0)",I>=86&&(s("film-title").textContent="\u09B8\u09AC \u0989\u09AA\u09BE\u0982\u09B6 \u09B6\u09C2\u09A8\u09CD\u09AF\u0964 \u0995\u09CB\u09A8\u09CB \u09A6\u09BF\u0995 \u09A8\u09C7\u0987\u0964",s("film-subtitle").textContent="\u09A4\u09BE\u0987 \u098F\u0987 3D \u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u09A4\u09BF\u09A8 \u0985\u0995\u09CD\u09B7\u09C7\u09B0 \u09B8\u0999\u09CD\u0997\u09C7 \u09B2\u09AE\u09CD\u09AC \u09A8\u09A4\u09C1\u09A8 \u0985\u09B6\u09C2\u09A8\u09CD\u09AF \u09AD\u09C7\u0995\u09CD\u099F\u09B0 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF \u09A8\u09BE\u0964")}else E.forEach(vt=>{vt.visible=!1}),Y.forEach(vt=>{vt.material.opacity=0});L.visible&&(k(L,new D,ne),v.visible=L.visible,v.position.copy(ne),v.quaternion.copy(L.quaternion),xe[4][1].copy(ne).multiplyScalar(.88)),F===1&&(s("equation").textContent="1D   \xB7   (x)"),F===2&&(s("equation").textContent="2D   \xB7   (x, y)"),F===3&&(s("equation").textContent="3D   \xB7   (x, y, z)"),F===7&&(s("equation").textContent="4D   \xB7   (x, y, z, w)"),F===8&&(s("equation").textContent="\u09B8\u09CD\u09A5\u09BE\u09A8 + \u09B8\u09AE\u09DF   \xB7   (x, y, z, t)");let Kt=I>=89&&I<104?.85*ce(I,89,92)*(1-ce(I,101,104)):I>=116?.32*ce(I,116,120):0;tt(I,Kt),R.forEach((vt,Ft)=>{let pe=I<8||I>=104&&I<116;if(vt.visible=pe,pe){let Be=((I<8?I:I-104)+Ft*.65)%2.2/2.2;vt.position.copy(I<8?_.position:g.position),vt.quaternion.copy(n.quaternion),vt.scale.setScalar(.2+Be*(I<8?1.8:1.1)),vt.material.opacity=(1-Be)*.3,vt.material.color.setHex(I>=109?16762218:9223423)}}),gt||(f.rotation.y=I*.009);for(let[vt,Ft]of xe){let pe=s(vt);pe.hidden||(M.copy(Ft).project(n),pe.style.left=`${cc.clamp((M.x*.5+.5)*t.clientWidth,36,t.clientWidth-36)}px`,pe.style.top=`${cc.clamp((-M.y*.5+.5)*t.clientHeight,t.clientHeight*.16,t.clientHeight*.72)}px`)}}function et(){X=!0,Wt(),s("end-screen").hidden=!1,s("cinema-hud").hidden=!0,s("captions").hidden=!0;for(let I of["equation","angle-readout","component-readout"])s(I).hidden=!0}function xt(){rt&&!X||(Q&&Q.kill(),rt=!0,X=!1,st=-1,K.time=0,s("start-screen").hidden=!0,s("end-screen").hidden=!0,s("cinema-hud").hidden=!1,s("captions").hidden=!1,At(),j(0),Q=Yo.timeline({data:"spatial-film",onComplete:et}),Q.to(K,{time:Za,duration:Za,ease:"none"}))}s("start-btn").addEventListener("click",xt),s("replay-btn").addEventListener("click",xt),document.addEventListener("visibilitychange",()=>{!Q||X||(Q.paused(document.hidden),St&&St.gain.setTargetAtTime(document.hidden?0:.22,ct.currentTime,.2))}),i.domElement.addEventListener("webglcontextlost",I=>{I.preventDefault(),J=!1,Q&&Q.kill(),Wt(),window.simulationUI.failed(new Error("Graphics context lost. Reload to try again."))});function lt(){let I=t.clientWidth,F=t.clientHeight;i.setSize(I,F),r.setSize(I,F),n.aspect=I/F,n.setViewOffset(I,F,0,F*.065,I,F),n.updateProjectionMatrix(),rt&&j(K.time)}window.addEventListener("resize",lt),lt(),j(0);let dt=new Ns;function wt(){if(!J)return;requestAnimationFrame(wt);let I=Math.min(dt.getDelta(),.1);rt&&j(K.time);try{r.render(I)}catch(F){J=!1,Q&&Q.kill(),Wt(),window.simulationUI.failed(F)}}wt(),window.simulationUI.ready()}export{Za as FILM_DURATION,pc as FILM_SCENES,Av as anglesToAxes,vy as initializeSimulation,Cv as projectTesseract};
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
