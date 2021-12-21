import{I as Ge}from"./index.c26bcc8d.js";import{F as Xe,u as _e}from"./provide.2e9c45db.js";import{R as Je}from"./index.b947dc5d.js";import{d as Ye,r as Ke,b as Ie,y as Qe,e as qe,f as xe,o as en,c as nn,a as Fe,w as Ne,i as Ee,p as Ve,n as Se,a1 as tn,H as rn,z as on}from"./vendor.8243c41e.js";import{q as sn,n as M,_ as un}from"./elevation.6f2b205f.js";import{a as ln}from"./components.d08fc2fc.js";var te=9e15,j=1e9,Ce="0123456789abcdef",fe="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",ae="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",be={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-te,maxE:te,crypto:!1},Be,W,N=!0,ce="[DecimalError] ",x=ce+"Invalid argument: ",Le=ce+"Precision limit exceeded",Pe=ce+"crypto unavailable",B=Math.floor,I=Math.pow,fn=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,an=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,cn=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,dn=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,R=1e7,w=7,hn=9007199254740991,mn=fe.length-1,Te=ae.length-1,h={name:"[object Decimal]"};h.absoluteValue=h.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),p(e)};h.ceil=function(){return p(new this.constructor(this),this.e+1,2)};h.comparedTo=h.cmp=function(e){var n,i,t,o,r=this,s=r.d,u=(e=new r.constructor(e)).d,f=r.s,l=e.s;if(!s||!u)return!f||!l?NaN:f!==l?f:s===u?0:!s^f<0?1:-1;if(!s[0]||!u[0])return s[0]?f:u[0]?-l:0;if(f!==l)return f;if(r.e!==e.e)return r.e>e.e^f<0?1:-1;for(t=s.length,o=u.length,n=0,i=t<o?t:o;n<i;++n)if(s[n]!==u[n])return s[n]>u[n]^f<0?1:-1;return t===o?0:t>o^f<0?1:-1};h.cosine=h.cos=function(){var e,n,i=this,t=i.constructor;return i.d?i.d[0]?(e=t.precision,n=t.rounding,t.precision=e+Math.max(i.e,i.sd())+w,t.rounding=1,i=gn(t,He(t,i)),t.precision=e,t.rounding=n,p(W==2||W==3?i.neg():i,e,n,!0)):new t(1):new t(NaN)};h.cubeRoot=h.cbrt=function(){var e,n,i,t,o,r,s,u,f,l,a=this,c=a.constructor;if(!a.isFinite()||a.isZero())return new c(a);for(N=!1,r=a.s*I(a.s*a,1/3),!r||Math.abs(r)==1/0?(i=F(a.d),e=a.e,(r=(e-i.length+1)%3)&&(i+=r==1||r==-2?"0":"00"),r=I(i,1/3),e=B((e+1)/3)-(e%3==(e<0?-1:2)),r==1/0?i="5e"+e:(i=r.toExponential(),i=i.slice(0,i.indexOf("e")+1)+e),t=new c(i),t.s=a.s):t=new c(r.toString()),s=(e=c.precision)+3;;)if(u=t,f=u.times(u).times(u),l=f.plus(a),t=C(l.plus(a).times(u),l.plus(f),s+2,1),F(u.d).slice(0,s)===(i=F(t.d)).slice(0,s))if(i=i.slice(s-3,s+1),i=="9999"||!o&&i=="4999"){if(!o&&(p(u,e+1,0),u.times(u).times(u).eq(a))){t=u;break}s+=4,o=1}else{(!+i||!+i.slice(1)&&i.charAt(0)=="5")&&(p(t,e+1,1),n=!t.times(t).times(t).eq(a));break}return N=!0,p(t,e,c.rounding,n)};h.decimalPlaces=h.dp=function(){var e,n=this.d,i=NaN;if(n){if(e=n.length-1,i=(e-B(this.e/w))*w,e=n[e],e)for(;e%10==0;e/=10)i--;i<0&&(i=0)}return i};h.dividedBy=h.div=function(e){return C(this,new this.constructor(e))};h.dividedToIntegerBy=h.divToInt=function(e){var n=this,i=n.constructor;return p(C(n,new i(e),0,1,1),i.precision,i.rounding)};h.equals=h.eq=function(e){return this.cmp(e)===0};h.floor=function(){return p(new this.constructor(this),this.e+1,3)};h.greaterThan=h.gt=function(e){return this.cmp(e)>0};h.greaterThanOrEqualTo=h.gte=function(e){var n=this.cmp(e);return n==1||n===0};h.hyperbolicCosine=h.cosh=function(){var e,n,i,t,o,r=this,s=r.constructor,u=new s(1);if(!r.isFinite())return new s(r.s?1/0:NaN);if(r.isZero())return u;i=s.precision,t=s.rounding,s.precision=i+Math.max(r.e,r.sd())+4,s.rounding=1,o=r.d.length,o<32?(e=Math.ceil(o/3),n=(1/ge(4,e)).toString()):(e=16,n="2.3283064365386962890625e-10"),r=re(s,1,r.times(n),new s(1),!0);for(var f,l=e,a=new s(8);l--;)f=r.times(r),r=u.minus(f.times(a.minus(f.times(a))));return p(r,s.precision=i,s.rounding=t,!0)};h.hyperbolicSine=h.sinh=function(){var e,n,i,t,o=this,r=o.constructor;if(!o.isFinite()||o.isZero())return new r(o);if(n=r.precision,i=r.rounding,r.precision=n+Math.max(o.e,o.sd())+4,r.rounding=1,t=o.d.length,t<3)o=re(r,2,o,o,!0);else{e=1.4*Math.sqrt(t),e=e>16?16:e|0,o=o.times(1/ge(5,e)),o=re(r,2,o,o,!0);for(var s,u=new r(5),f=new r(16),l=new r(20);e--;)s=o.times(o),o=o.times(u.plus(s.times(f.times(s).plus(l))))}return r.precision=n,r.rounding=i,p(o,n,i,!0)};h.hyperbolicTangent=h.tanh=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+7,t.rounding=1,C(i.sinh(),i.cosh(),t.precision=e,t.rounding=n)):new t(i.s)};h.inverseCosine=h.acos=function(){var e,n=this,i=n.constructor,t=n.abs().cmp(1),o=i.precision,r=i.rounding;return t!==-1?t===0?n.isNeg()?Z(i,o,r):new i(0):new i(NaN):n.isZero()?Z(i,o+4,r).times(.5):(i.precision=o+6,i.rounding=1,n=n.asin(),e=Z(i,o+4,r).times(.5),i.precision=o,i.rounding=r,e.minus(n))};h.inverseHyperbolicCosine=h.acosh=function(){var e,n,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(e=t.precision,n=t.rounding,t.precision=e+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,N=!1,i=i.times(i).minus(1).sqrt().plus(i),N=!0,t.precision=e,t.rounding=n,i.ln()):new t(i)};h.inverseHyperbolicSine=h.asinh=function(){var e,n,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,N=!1,i=i.times(i).plus(1).sqrt().plus(i),N=!0,t.precision=e,t.rounding=n,i.ln())};h.inverseHyperbolicTangent=h.atanh=function(){var e,n,i,t,o=this,r=o.constructor;return o.isFinite()?o.e>=0?new r(o.abs().eq(1)?o.s/0:o.isZero()?o:NaN):(e=r.precision,n=r.rounding,t=o.sd(),Math.max(t,e)<2*-o.e-1?p(new r(o),e,n,!0):(r.precision=i=t-o.e,o=C(o.plus(1),new r(1).minus(o),i+e,1),r.precision=e+4,r.rounding=1,o=o.ln(),r.precision=e,r.rounding=n,o.times(.5))):new r(NaN)};h.inverseSine=h.asin=function(){var e,n,i,t,o=this,r=o.constructor;return o.isZero()?new r(o):(n=o.abs().cmp(1),i=r.precision,t=r.rounding,n!==-1?n===0?(e=Z(r,i+4,t).times(.5),e.s=o.s,e):new r(NaN):(r.precision=i+6,r.rounding=1,o=o.div(new r(1).minus(o.times(o)).sqrt().plus(1)).atan(),r.precision=i,r.rounding=t,o.times(2)))};h.inverseTangent=h.atan=function(){var e,n,i,t,o,r,s,u,f,l=this,a=l.constructor,c=a.precision,d=a.rounding;if(l.isFinite()){if(l.isZero())return new a(l);if(l.abs().eq(1)&&c+4<=Te)return s=Z(a,c+4,d).times(.25),s.s=l.s,s}else{if(!l.s)return new a(NaN);if(c+4<=Te)return s=Z(a,c+4,d).times(.5),s.s=l.s,s}for(a.precision=u=c+10,a.rounding=1,i=Math.min(28,u/w+2|0),e=i;e;--e)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(N=!1,n=Math.ceil(u/w),t=1,f=l.times(l),s=new a(l),o=l;e!==-1;)if(o=o.times(f),r=s.minus(o.div(t+=2)),o=o.times(f),s=r.plus(o.div(t+=2)),s.d[n]!==void 0)for(e=n;s.d[e]===r.d[e]&&e--;);return i&&(s=s.times(2<<i-1)),N=!0,p(s,a.precision=c,a.rounding=d,!0)};h.isFinite=function(){return!!this.d};h.isInteger=h.isInt=function(){return!!this.d&&B(this.e/w)>this.d.length-2};h.isNaN=function(){return!this.s};h.isNegative=h.isNeg=function(){return this.s<0};h.isPositive=h.isPos=function(){return this.s>0};h.isZero=function(){return!!this.d&&this.d[0]===0};h.lessThan=h.lt=function(e){return this.cmp(e)<0};h.lessThanOrEqualTo=h.lte=function(e){return this.cmp(e)<1};h.logarithm=h.log=function(e){var n,i,t,o,r,s,u,f,l=this,a=l.constructor,c=a.precision,d=a.rounding,m=5;if(e==null)e=new a(10),n=!0;else{if(e=new a(e),i=e.d,e.s<0||!i||!i[0]||e.eq(1))return new a(NaN);n=e.eq(10)}if(i=l.d,l.s<0||!i||!i[0]||l.eq(1))return new a(i&&!i[0]?-1/0:l.s!=1?NaN:i?0:1/0);if(n)if(i.length>1)r=!0;else{for(o=i[0];o%10==0;)o/=10;r=o!==1}if(N=!1,u=c+m,s=G(l,u),t=n?me(a,u+10):G(e,u),f=C(s,t,u,1),le(f.d,o=c,d))do if(u+=10,s=G(l,u),t=n?me(a,u+10):G(e,u),f=C(s,t,u,1),!r){+F(f.d).slice(o+1,o+15)+1==1e14&&(f=p(f,c+1,0));break}while(le(f.d,o+=10,d));return N=!0,p(f,c,d)};h.minus=h.sub=function(e){var n,i,t,o,r,s,u,f,l,a,c,d,m=this,E=m.constructor;if(e=new E(e),!m.d||!e.d)return!m.s||!e.s?e=new E(NaN):m.d?e.s=-e.s:e=new E(e.d||m.s!==e.s?m:NaN),e;if(m.s!=e.s)return e.s=-e.s,m.plus(e);if(l=m.d,d=e.d,u=E.precision,f=E.rounding,!l[0]||!d[0]){if(d[0])e.s=-e.s;else if(l[0])e=new E(m);else return new E(f===3?-0:0);return N?p(e,u,f):e}if(i=B(e.e/w),a=B(m.e/w),l=l.slice(),r=a-i,r){for(c=r<0,c?(n=l,r=-r,s=d.length):(n=d,i=a,s=l.length),t=Math.max(Math.ceil(u/w),s)+2,r>t&&(r=t,n.length=1),n.reverse(),t=r;t--;)n.push(0);n.reverse()}else{for(t=l.length,s=d.length,c=t<s,c&&(s=t),t=0;t<s;t++)if(l[t]!=d[t]){c=l[t]<d[t];break}r=0}for(c&&(n=l,l=d,d=n,e.s=-e.s),s=l.length,t=d.length-s;t>0;--t)l[s++]=0;for(t=d.length;t>r;){if(l[--t]<d[t]){for(o=t;o&&l[--o]===0;)l[o]=R-1;--l[o],l[t]+=R}l[t]-=d[t]}for(;l[--s]===0;)l.pop();for(;l[0]===0;l.shift())--i;return l[0]?(e.d=l,e.e=he(l,i),N?p(e,u,f):e):new E(f===3?-0:0)};h.modulo=h.mod=function(e){var n,i=this,t=i.constructor;return e=new t(e),!i.d||!e.s||e.d&&!e.d[0]?new t(NaN):!e.d||i.d&&!i.d[0]?p(new t(i),t.precision,t.rounding):(N=!1,t.modulo==9?(n=C(i,e.abs(),0,3,1),n.s*=e.s):n=C(i,e,0,t.modulo,1),n=n.times(e),N=!0,i.minus(n))};h.naturalExponential=h.exp=function(){return ke(this)};h.naturalLogarithm=h.ln=function(){return G(this)};h.negated=h.neg=function(){var e=new this.constructor(this);return e.s=-e.s,p(e)};h.plus=h.add=function(e){var n,i,t,o,r,s,u,f,l,a,c=this,d=c.constructor;if(e=new d(e),!c.d||!e.d)return!c.s||!e.s?e=new d(NaN):c.d||(e=new d(e.d||c.s===e.s?c:NaN)),e;if(c.s!=e.s)return e.s=-e.s,c.minus(e);if(l=c.d,a=e.d,u=d.precision,f=d.rounding,!l[0]||!a[0])return a[0]||(e=new d(c)),N?p(e,u,f):e;if(r=B(c.e/w),t=B(e.e/w),l=l.slice(),o=r-t,o){for(o<0?(i=l,o=-o,s=a.length):(i=a,t=r,s=l.length),r=Math.ceil(u/w),s=r>s?r+1:s+1,o>s&&(o=s,i.length=1),i.reverse();o--;)i.push(0);i.reverse()}for(s=l.length,o=a.length,s-o<0&&(o=s,i=a,a=l,l=i),n=0;o;)n=(l[--o]=l[o]+a[o]+n)/R|0,l[o]%=R;for(n&&(l.unshift(n),++t),s=l.length;l[--s]==0;)l.pop();return e.d=l,e.e=he(l,t),N?p(e,u,f):e};h.precision=h.sd=function(e){var n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(x+e);return i.d?(n=Ae(i.d),e&&i.e+1>n&&(n=i.e+1)):n=NaN,n};h.round=function(){var e=this,n=e.constructor;return p(new n(e),e.e+1,n.rounding)};h.sine=h.sin=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+Math.max(i.e,i.sd())+w,t.rounding=1,i=wn(t,He(t,i)),t.precision=e,t.rounding=n,p(W>2?i.neg():i,e,n,!0)):new t(NaN)};h.squareRoot=h.sqrt=function(){var e,n,i,t,o,r,s=this,u=s.d,f=s.e,l=s.s,a=s.constructor;if(l!==1||!u||!u[0])return new a(!l||l<0&&(!u||u[0])?NaN:u?s:1/0);for(N=!1,l=Math.sqrt(+s),l==0||l==1/0?(n=F(u),(n.length+f)%2==0&&(n+="0"),l=Math.sqrt(n),f=B((f+1)/2)-(f<0||f%2),l==1/0?n="5e"+f:(n=l.toExponential(),n=n.slice(0,n.indexOf("e")+1)+f),t=new a(n)):t=new a(l.toString()),i=(f=a.precision)+3;;)if(r=t,t=r.plus(C(s,r,i+2,1)).times(.5),F(r.d).slice(0,i)===(n=F(t.d)).slice(0,i))if(n=n.slice(i-3,i+1),n=="9999"||!o&&n=="4999"){if(!o&&(p(r,f+1,0),r.times(r).eq(s))){t=r;break}i+=4,o=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(p(t,f+1,1),e=!t.times(t).eq(s));break}return N=!0,p(t,f,a.rounding,e)};h.tangent=h.tan=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+10,t.rounding=1,i=i.sin(),i.s=1,i=C(i,new t(1).minus(i.times(i)).sqrt(),e+10,0),t.precision=e,t.rounding=n,p(W==2||W==4?i.neg():i,e,n,!0)):new t(NaN)};h.times=h.mul=function(e){var n,i,t,o,r,s,u,f,l,a=this,c=a.constructor,d=a.d,m=(e=new c(e)).d;if(e.s*=a.s,!d||!d[0]||!m||!m[0])return new c(!e.s||d&&!d[0]&&!m||m&&!m[0]&&!d?NaN:!d||!m?e.s/0:e.s*0);for(i=B(a.e/w)+B(e.e/w),f=d.length,l=m.length,f<l&&(r=d,d=m,m=r,s=f,f=l,l=s),r=[],s=f+l,t=s;t--;)r.push(0);for(t=l;--t>=0;){for(n=0,o=f+t;o>t;)u=r[o]+m[t]*d[o-t-1]+n,r[o--]=u%R|0,n=u/R|0;r[o]=(r[o]+n)%R|0}for(;!r[--s];)r.pop();return n?++i:r.shift(),e.d=r,e.e=he(r,i),N?p(e,c.precision,c.rounding):e};h.toBinary=function(e,n){return Me(this,2,e,n)};h.toDecimalPlaces=h.toDP=function(e,n){var i=this,t=i.constructor;return i=new t(i),e===void 0?i:(P(e,0,j),n===void 0?n=t.rounding:P(n,0,8),p(i,e+i.e+1,n))};h.toExponential=function(e,n){var i,t=this,o=t.constructor;return e===void 0?i=$(t,!0):(P(e,0,j),n===void 0?n=o.rounding:P(n,0,8),t=p(new o(t),e+1,n),i=$(t,!0,e+1)),t.isNeg()&&!t.isZero()?"-"+i:i};h.toFixed=function(e,n){var i,t,o=this,r=o.constructor;return e===void 0?i=$(o):(P(e,0,j),n===void 0?n=r.rounding:P(n,0,8),t=p(new r(o),e+o.e+1,n),i=$(t,!1,e+t.e+1)),o.isNeg()&&!o.isZero()?"-"+i:i};h.toFraction=function(e){var n,i,t,o,r,s,u,f,l,a,c,d,m=this,E=m.d,v=m.constructor;if(!E)return new v(m);if(l=i=new v(1),t=f=new v(0),n=new v(t),r=n.e=Ae(E)-m.e-1,s=r%w,n.d[0]=I(10,s<0?w+s:s),e==null)e=r>0?n:l;else{if(u=new v(e),!u.isInt()||u.lt(l))throw Error(x+u);e=u.gt(n)?r>0?n:l:u}for(N=!1,u=new v(F(E)),a=v.precision,v.precision=r=E.length*w*2;c=C(u,n,0,1,1),o=i.plus(c.times(t)),o.cmp(e)!=1;)i=t,t=o,o=l,l=f.plus(c.times(o)),f=o,o=n,n=u.minus(c.times(o)),u=o;return o=C(e.minus(i),t,0,1,1),f=f.plus(o.times(l)),i=i.plus(o.times(t)),f.s=l.s=m.s,d=C(l,t,r,1).minus(m).abs().cmp(C(f,i,r,1).minus(m).abs())<1?[l,t]:[f,i],v.precision=a,N=!0,d};h.toHexadecimal=h.toHex=function(e,n){return Me(this,16,e,n)};h.toNearest=function(e,n){var i=this,t=i.constructor;if(i=new t(i),e==null){if(!i.d)return i;e=new t(1),n=t.rounding}else{if(e=new t(e),n===void 0?n=t.rounding:P(n,0,8),!i.d)return e.s?i:e;if(!e.d)return e.s&&(e.s=i.s),e}return e.d[0]?(N=!1,i=C(i,e,0,n,1).times(e),N=!0,p(i)):(e.s=i.s,i=e),i};h.toNumber=function(){return+this};h.toOctal=function(e,n){return Me(this,8,e,n)};h.toPower=h.pow=function(e){var n,i,t,o,r,s,u=this,f=u.constructor,l=+(e=new f(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new f(I(+u,l));if(u=new f(u),u.eq(1))return u;if(t=f.precision,r=f.rounding,e.eq(1))return p(u,t,r);if(n=B(e.e/w),n>=e.d.length-1&&(i=l<0?-l:l)<=hn)return o=Ue(f,u,i,t),e.s<0?new f(1).div(o):p(o,t,r);if(s=u.s,s<0){if(n<e.d.length-1)return new f(NaN);if((e.d[n]&1)==0&&(s=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=s,u}return i=I(+u,l),n=i==0||!isFinite(i)?B(l*(Math.log("0."+F(u.d))/Math.LN10+u.e+1)):new f(i+"").e,n>f.maxE+1||n<f.minE-1?new f(n>0?s/0:0):(N=!1,f.rounding=u.s=1,i=Math.min(12,(n+"").length),o=ke(e.times(G(u,t+i)),t),o.d&&(o=p(o,t+5,1),le(o.d,t,r)&&(n=t+10,o=p(ke(e.times(G(u,n+i)),n),n+5,1),+F(o.d).slice(t+1,t+15)+1==1e14&&(o=p(o,t+1,0)))),o.s=s,N=!0,f.rounding=r,p(o,t,r))};h.toPrecision=function(e,n){var i,t=this,o=t.constructor;return e===void 0?i=$(t,t.e<=o.toExpNeg||t.e>=o.toExpPos):(P(e,1,j),n===void 0?n=o.rounding:P(n,0,8),t=p(new o(t),e,n),i=$(t,e<=t.e||t.e<=o.toExpNeg,e)),t.isNeg()&&!t.isZero()?"-"+i:i};h.toSignificantDigits=h.toSD=function(e,n){var i=this,t=i.constructor;return e===void 0?(e=t.precision,n=t.rounding):(P(e,1,j),n===void 0?n=t.rounding:P(n,0,8)),p(new t(i),e,n)};h.toString=function(){var e=this,n=e.constructor,i=$(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+i:i};h.truncated=h.trunc=function(){return p(new this.constructor(this),this.e+1,1)};h.valueOf=h.toJSON=function(){var e=this,n=e.constructor,i=$(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+i:i};function F(e){var n,i,t,o=e.length-1,r="",s=e[0];if(o>0){for(r+=s,n=1;n<o;n++)t=e[n]+"",i=w-t.length,i&&(r+=y(i)),r+=t;s=e[n],t=s+"",i=w-t.length,i&&(r+=y(i))}else if(s===0)return"0";for(;s%10==0;)s/=10;return r+s}function P(e,n,i){if(e!==~~e||e<n||e>i)throw Error(x+e)}function le(e,n,i,t){var o,r,s,u;for(r=e[0];r>=10;r/=10)--n;return--n<0?(n+=w,o=0):(o=Math.ceil((n+1)/w),n%=w),r=I(10,w-n),u=e[o]%r|0,t==null?n<3?(n==0?u=u/100|0:n==1&&(u=u/10|0),s=i<4&&u==99999||i>3&&u==49999||u==5e4||u==0):s=(i<4&&u+1==r||i>3&&u+1==r/2)&&(e[o+1]/r/100|0)==I(10,n-2)-1||(u==r/2||u==0)&&(e[o+1]/r/100|0)==0:n<4?(n==0?u=u/1e3|0:n==1?u=u/100|0:n==2&&(u=u/10|0),s=(t||i<4)&&u==9999||!t&&i>3&&u==4999):s=((t||i<4)&&u+1==r||!t&&i>3&&u+1==r/2)&&(e[o+1]/r/1e3|0)==I(10,n-3)-1,s}function de(e,n,i){for(var t,o=[0],r,s=0,u=e.length;s<u;){for(r=o.length;r--;)o[r]*=n;for(o[0]+=Ce.indexOf(e.charAt(s++)),t=0;t<o.length;t++)o[t]>i-1&&(o[t+1]===void 0&&(o[t+1]=0),o[t+1]+=o[t]/i|0,o[t]%=i)}return o.reverse()}function gn(e,n){var i,t,o=n.d.length;o<32?(i=Math.ceil(o/3),t=(1/ge(4,i)).toString()):(i=16,t="2.3283064365386962890625e-10"),e.precision+=i,n=re(e,1,n.times(t),new e(1));for(var r=i;r--;){var s=n.times(n);n=s.times(s).minus(s).times(8).plus(1)}return e.precision-=i,n}var C=function(){function e(t,o,r){var s,u=0,f=t.length;for(t=t.slice();f--;)s=t[f]*o+u,t[f]=s%r|0,u=s/r|0;return u&&t.unshift(u),t}function n(t,o,r,s){var u,f;if(r!=s)f=r>s?1:-1;else for(u=f=0;u<r;u++)if(t[u]!=o[u]){f=t[u]>o[u]?1:-1;break}return f}function i(t,o,r,s){for(var u=0;r--;)t[r]-=u,u=t[r]<o[r]?1:0,t[r]=u*s+t[r]-o[r];for(;!t[0]&&t.length>1;)t.shift()}return function(t,o,r,s,u,f){var l,a,c,d,m,E,v,q,T,L,S,k,ee,z,ne,ie,_,oe,A,J,Y=t.constructor,H=t.s==o.s?1:-1,D=t.d,g=o.d;if(!D||!D[0]||!g||!g[0])return new Y(!t.s||!o.s||(D?g&&D[0]==g[0]:!g)?NaN:D&&D[0]==0||!g?H*0:H/0);for(f?(m=1,a=t.e-o.e):(f=R,m=w,a=B(t.e/m)-B(o.e/m)),A=g.length,_=D.length,T=new Y(H),L=T.d=[],c=0;g[c]==(D[c]||0);c++);if(g[c]>(D[c]||0)&&a--,r==null?(z=r=Y.precision,s=Y.rounding):u?z=r+(t.e-o.e)+1:z=r,z<0)L.push(1),E=!0;else{if(z=z/m+2|0,c=0,A==1){for(d=0,g=g[0],z++;(c<_||d)&&z--;c++)ne=d*f+(D[c]||0),L[c]=ne/g|0,d=ne%g|0;E=d||c<_}else{for(d=f/(g[0]+1)|0,d>1&&(g=e(g,d,f),D=e(D,d,f),A=g.length,_=D.length),ie=A,S=D.slice(0,A),k=S.length;k<A;)S[k++]=0;J=g.slice(),J.unshift(0),oe=g[0],g[1]>=f/2&&++oe;do d=0,l=n(g,S,A,k),l<0?(ee=S[0],A!=k&&(ee=ee*f+(S[1]||0)),d=ee/oe|0,d>1?(d>=f&&(d=f-1),v=e(g,d,f),q=v.length,k=S.length,l=n(v,S,q,k),l==1&&(d--,i(v,A<q?J:g,q,f))):(d==0&&(l=d=1),v=g.slice()),q=v.length,q<k&&v.unshift(0),i(S,v,k,f),l==-1&&(k=S.length,l=n(g,S,A,k),l<1&&(d++,i(S,A<k?J:g,k,f))),k=S.length):l===0&&(d++,S=[0]),L[c++]=d,l&&S[0]?S[k++]=D[ie]||0:(S=[D[ie]],k=1);while((ie++<_||S[0]!==void 0)&&z--);E=S[0]!==void 0}L[0]||L.shift()}if(m==1)T.e=a,Be=E;else{for(c=1,d=L[0];d>=10;d/=10)c++;T.e=c+a*m-1,p(T,u?r+T.e+1:r,s,E)}return T}}();function p(e,n,i,t){var o,r,s,u,f,l,a,c,d,m=e.constructor;e:if(n!=null){if(c=e.d,!c)return e;for(o=1,u=c[0];u>=10;u/=10)o++;if(r=n-o,r<0)r+=w,s=n,a=c[d=0],f=a/I(10,o-s-1)%10|0;else if(d=Math.ceil((r+1)/w),u=c.length,d>=u)if(t){for(;u++<=d;)c.push(0);a=f=0,o=1,r%=w,s=r-w+1}else break e;else{for(a=u=c[d],o=1;u>=10;u/=10)o++;r%=w,s=r-w+o,f=s<0?0:a/I(10,o-s-1)%10|0}if(t=t||n<0||c[d+1]!==void 0||(s<0?a:a%I(10,o-s-1)),l=i<4?(f||t)&&(i==0||i==(e.s<0?3:2)):f>5||f==5&&(i==4||t||i==6&&(r>0?s>0?a/I(10,o-s):0:c[d-1])%10&1||i==(e.s<0?8:7)),n<1||!c[0])return c.length=0,l?(n-=e.e+1,c[0]=I(10,(w-n%w)%w),e.e=-n||0):c[0]=e.e=0,e;if(r==0?(c.length=d,u=1,d--):(c.length=d+1,u=I(10,w-r),c[d]=s>0?(a/I(10,o-s)%I(10,s)|0)*u:0),l)for(;;)if(d==0){for(r=1,s=c[0];s>=10;s/=10)r++;for(s=c[0]+=u,u=1;s>=10;s/=10)u++;r!=u&&(e.e++,c[0]==R&&(c[0]=1));break}else{if(c[d]+=u,c[d]!=R)break;c[d--]=0,u=1}for(r=c.length;c[--r]===0;)c.pop()}return N&&(e.e>m.maxE?(e.d=null,e.e=NaN):e.e<m.minE&&(e.e=0,e.d=[0])),e}function $(e,n,i){if(!e.isFinite())return Re(e);var t,o=e.e,r=F(e.d),s=r.length;return n?(i&&(t=i-s)>0?r=r.charAt(0)+"."+r.slice(1)+y(t):s>1&&(r=r.charAt(0)+"."+r.slice(1)),r=r+(e.e<0?"e":"e+")+e.e):o<0?(r="0."+y(-o-1)+r,i&&(t=i-s)>0&&(r+=y(t))):o>=s?(r+=y(o+1-s),i&&(t=i-o-1)>0&&(r=r+"."+y(t))):((t=o+1)<s&&(r=r.slice(0,t)+"."+r.slice(t)),i&&(t=i-s)>0&&(o+1===s&&(r+="."),r+=y(t))),r}function he(e,n){var i=e[0];for(n*=w;i>=10;i/=10)n++;return n}function me(e,n,i){if(n>mn)throw N=!0,i&&(e.precision=i),Error(Le);return p(new e(fe),n,1,!0)}function Z(e,n,i){if(n>Te)throw Error(Le);return p(new e(ae),n,i,!0)}function Ae(e){var n=e.length-1,i=n*w+1;if(n=e[n],n){for(;n%10==0;n/=10)i--;for(n=e[0];n>=10;n/=10)i++}return i}function y(e){for(var n="";e--;)n+="0";return n}function Ue(e,n,i,t){var o,r=new e(1),s=Math.ceil(t/w+4);for(N=!1;;){if(i%2&&(r=r.times(n),$e(r.d,s)&&(o=!0)),i=B(i/2),i===0){i=r.d.length-1,o&&r.d[i]===0&&++r.d[i];break}n=n.times(n),$e(n.d,s)}return N=!0,r}function ze(e){return e.d[e.d.length-1]&1}function Oe(e,n,i){for(var t,o=new e(n[0]),r=0;++r<n.length;)if(t=new e(n[r]),t.s)o[i](t)&&(o=t);else{o=t;break}return o}function ke(e,n){var i,t,o,r,s,u,f,l=0,a=0,c=0,d=e.constructor,m=d.rounding,E=d.precision;if(!e.d||!e.d[0]||e.e>17)return new d(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(n==null?(N=!1,f=E):f=n,u=new d(.03125);e.e>-2;)e=e.times(u),c+=5;for(t=Math.log(I(2,c))/Math.LN10*2+5|0,f+=t,i=r=s=new d(1),d.precision=f;;){if(r=p(r.times(e),f,1),i=i.times(++a),u=s.plus(C(r,i,f,1)),F(u.d).slice(0,f)===F(s.d).slice(0,f)){for(o=c;o--;)s=p(s.times(s),f,1);if(n==null)if(l<3&&le(s.d,f-t,m,l))d.precision=f+=10,i=r=u=new d(1),a=0,l++;else return p(s,d.precision=E,m,N=!0);else return d.precision=E,s}s=u}}function G(e,n){var i,t,o,r,s,u,f,l,a,c,d,m=1,E=10,v=e,q=v.d,T=v.constructor,L=T.rounding,S=T.precision;if(v.s<0||!q||!q[0]||!v.e&&q[0]==1&&q.length==1)return new T(q&&!q[0]?-1/0:v.s!=1?NaN:q?0:v);if(n==null?(N=!1,a=S):a=n,T.precision=a+=E,i=F(q),t=i.charAt(0),Math.abs(r=v.e)<15e14){for(;t<7&&t!=1||t==1&&i.charAt(1)>3;)v=v.times(e),i=F(v.d),t=i.charAt(0),m++;r=v.e,t>1?(v=new T("0."+i),r++):v=new T(t+"."+i.slice(1))}else return l=me(T,a+2,S).times(r+""),v=G(new T(t+"."+i.slice(1)),a-E).plus(l),T.precision=S,n==null?p(v,S,L,N=!0):v;for(c=v,f=s=v=C(v.minus(1),v.plus(1),a,1),d=p(v.times(v),a,1),o=3;;){if(s=p(s.times(d),a,1),l=f.plus(C(s,new T(o),a,1)),F(l.d).slice(0,a)===F(f.d).slice(0,a))if(f=f.times(2),r!==0&&(f=f.plus(me(T,a+2,S).times(r+""))),f=C(f,new T(m),a,1),n==null)if(le(f.d,a-E,L,u))T.precision=a+=E,l=s=v=C(c.minus(1),c.plus(1),a,1),d=p(v.times(v),a,1),o=u=1;else return p(f,T.precision=S,L,N=!0);else return T.precision=S,f;f=l,o+=2}}function Re(e){return String(e.s*e.s/0)}function Ze(e,n){var i,t,o;for((i=n.indexOf("."))>-1&&(n=n.replace(".","")),(t=n.search(/e/i))>0?(i<0&&(i=t),i+=+n.slice(t+1),n=n.substring(0,t)):i<0&&(i=n.length),t=0;n.charCodeAt(t)===48;t++);for(o=n.length;n.charCodeAt(o-1)===48;--o);if(n=n.slice(t,o),n){if(o-=t,e.e=i=i-t-1,e.d=[],t=(i+1)%w,i<0&&(t+=w),t<o){for(t&&e.d.push(+n.slice(0,t)),o-=w;t<o;)e.d.push(+n.slice(t,t+=w));n=n.slice(t),t=w-n.length}else t-=o;for(;t--;)n+="0";e.d.push(+n),N&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function pn(e,n){var i,t,o,r,s,u,f,l,a;if(n==="Infinity"||n==="NaN")return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(an.test(n))i=16,n=n.toLowerCase();else if(fn.test(n))i=2;else if(cn.test(n))i=8;else throw Error(x+n);for(r=n.search(/p/i),r>0?(f=+n.slice(r+1),n=n.substring(2,r)):n=n.slice(2),r=n.indexOf("."),s=r>=0,t=e.constructor,s&&(n=n.replace(".",""),u=n.length,r=u-r,o=Ue(t,new t(i),r,r*2)),l=de(n,i,R),a=l.length-1,r=a;l[r]===0;--r)l.pop();return r<0?new t(e.s*0):(e.e=he(l,a),e.d=l,N=!1,s&&(e=C(e,o,u*4)),f&&(e=e.times(Math.abs(f)<54?I(2,f):X.pow(2,f))),N=!0,e)}function wn(e,n){var i,t=n.d.length;if(t<3)return re(e,2,n,n);i=1.4*Math.sqrt(t),i=i>16?16:i|0,n=n.times(1/ge(5,i)),n=re(e,2,n,n);for(var o,r=new e(5),s=new e(16),u=new e(20);i--;)o=n.times(n),n=n.times(r.plus(o.times(s.times(o).minus(u))));return n}function re(e,n,i,t,o){var r,s,u,f,l=e.precision,a=Math.ceil(l/w);for(N=!1,f=i.times(i),u=new e(t);;){if(s=C(u.times(f),new e(n++*n++),l,1),u=o?t.plus(s):t.minus(s),t=C(s.times(f),new e(n++*n++),l,1),s=u.plus(t),s.d[a]!==void 0){for(r=a;s.d[r]===u.d[r]&&r--;);if(r==-1)break}r=u,u=t,t=s,s=r}return N=!0,s.d.length=a+1,s}function ge(e,n){for(var i=e;--n;)i*=e;return i}function He(e,n){var i,t=n.s<0,o=Z(e,e.precision,1),r=o.times(.5);if(n=n.abs(),n.lte(r))return W=t?4:1,n;if(i=n.divToInt(o),i.isZero())W=t?3:2;else{if(n=n.minus(i.times(o)),n.lte(r))return W=ze(i)?t?2:3:t?4:1,n;W=ze(i)?t?1:4:t?3:2}return n.minus(o).abs()}function Me(e,n,i,t){var o,r,s,u,f,l,a,c,d,m=e.constructor,E=i!==void 0;if(E?(P(i,1,j),t===void 0?t=m.rounding:P(t,0,8)):(i=m.precision,t=m.rounding),!e.isFinite())a=Re(e);else{for(a=$(e),s=a.indexOf("."),E?(o=2,n==16?i=i*4-3:n==8&&(i=i*3-2)):o=n,s>=0&&(a=a.replace(".",""),d=new m(1),d.e=a.length-s,d.d=de($(d),10,o),d.e=d.d.length),c=de(a,10,o),r=f=c.length;c[--f]==0;)c.pop();if(!c[0])a=E?"0p+0":"0";else{if(s<0?r--:(e=new m(e),e.d=c,e.e=r,e=C(e,d,i,t,0,o),c=e.d,r=e.e,l=Be),s=c[i],u=o/2,l=l||c[i+1]!==void 0,l=t<4?(s!==void 0||l)&&(t===0||t===(e.s<0?3:2)):s>u||s===u&&(t===4||l||t===6&&c[i-1]&1||t===(e.s<0?8:7)),c.length=i,l)for(;++c[--i]>o-1;)c[i]=0,i||(++r,c.unshift(1));for(f=c.length;!c[f-1];--f);for(s=0,a="";s<f;s++)a+=Ce.charAt(c[s]);if(E){if(f>1)if(n==16||n==8){for(s=n==16?4:3,--f;f%s;f++)a+="0";for(c=de(a,o,n),f=c.length;!c[f-1];--f);for(s=1,a="1.";s<f;s++)a+=Ce.charAt(c[s])}else a=a.charAt(0)+"."+a.slice(1);a=a+(r<0?"p":"p+")+r}else if(r<0){for(;++r;)a="0"+a;a="0."+a}else if(++r>f)for(r-=f;r--;)a+="0";else r<f&&(a=a.slice(0,r)+"."+a.slice(r))}a=(n==16?"0x":n==2?"0b":n==8?"0o":"")+a}return e.s<0?"-"+a:a}function $e(e,n){if(e.length>n)return e.length=n,!0}function vn(e){return new this(e).abs()}function Nn(e){return new this(e).acos()}function En(e){return new this(e).acosh()}function Sn(e,n){return new this(e).plus(n)}function Cn(e){return new this(e).asin()}function bn(e){return new this(e).asinh()}function Tn(e){return new this(e).atan()}function kn(e){return new this(e).atanh()}function Mn(e,n){e=new this(e),n=new this(n);var i,t=this.precision,o=this.rounding,r=t+4;return!e.s||!n.s?i=new this(NaN):!e.d&&!n.d?(i=Z(this,r,1).times(n.s>0?.25:.75),i.s=e.s):!n.d||e.isZero()?(i=n.s<0?Z(this,t,o):new this(0),i.s=e.s):!e.d||n.isZero()?(i=Z(this,r,1).times(.5),i.s=e.s):n.s<0?(this.precision=r,this.rounding=1,i=this.atan(C(e,n,r,1)),n=Z(this,r,1),this.precision=t,this.rounding=o,i=e.s<0?i.minus(n):i.plus(n)):i=this.atan(C(e,n,r,1)),i}function Dn(e){return new this(e).cbrt()}function In(e){return p(e=new this(e),e.e+1,2)}function qn(e){if(!e||typeof e!="object")throw Error(ce+"Object expected");var n,i,t,o=e.defaults===!0,r=["precision",1,j,"rounding",0,8,"toExpNeg",-te,0,"toExpPos",0,te,"maxE",0,te,"minE",-te,0,"modulo",0,9];for(n=0;n<r.length;n+=3)if(i=r[n],o&&(this[i]=be[i]),(t=e[i])!==void 0)if(B(t)===t&&t>=r[n+1]&&t<=r[n+2])this[i]=t;else throw Error(x+i+": "+t);if(i="crypto",o&&(this[i]=be[i]),(t=e[i])!==void 0)if(t===!0||t===!1||t===0||t===1)if(t)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[i]=!0;else throw Error(Pe);else this[i]=!1;else throw Error(x+i+": "+t);return this}function Fn(e){return new this(e).cos()}function Vn(e){return new this(e).cosh()}function We(e){var n,i,t;function o(r){var s,u,f,l=this;if(!(l instanceof o))return new o(r);if(l.constructor=o,r instanceof o){l.s=r.s,N?!r.d||r.e>o.maxE?(l.e=NaN,l.d=null):r.e<o.minE?(l.e=0,l.d=[0]):(l.e=r.e,l.d=r.d.slice()):(l.e=r.e,l.d=r.d?r.d.slice():r.d);return}if(f=typeof r,f==="number"){if(r===0){l.s=1/r<0?-1:1,l.e=0,l.d=[0];return}if(r<0?(r=-r,l.s=-1):l.s=1,r===~~r&&r<1e7){for(s=0,u=r;u>=10;u/=10)s++;N?s>o.maxE?(l.e=NaN,l.d=null):s<o.minE?(l.e=0,l.d=[0]):(l.e=s,l.d=[r]):(l.e=s,l.d=[r]);return}else if(r*0!=0){r||(l.s=NaN),l.e=NaN,l.d=null;return}return Ze(l,r.toString())}else if(f!=="string")throw Error(x+r);return(u=r.charCodeAt(0))===45?(r=r.slice(1),l.s=-1):(u===43&&(r=r.slice(1)),l.s=1),dn.test(r)?Ze(l,r):pn(l,r)}if(o.prototype=h,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.EUCLID=9,o.config=o.set=qn,o.clone=We,o.isDecimal=Un,o.abs=vn,o.acos=Nn,o.acosh=En,o.add=Sn,o.asin=Cn,o.asinh=bn,o.atan=Tn,o.atanh=kn,o.atan2=Mn,o.cbrt=Dn,o.ceil=In,o.cos=Fn,o.cosh=Vn,o.div=Bn,o.exp=Ln,o.floor=Pn,o.hypot=An,o.ln=zn,o.log=On,o.log10=Zn,o.log2=Rn,o.max=Hn,o.min=$n,o.mod=Wn,o.mul=jn,o.pow=yn,o.random=Gn,o.round=Xn,o.sign=_n,o.sin=Jn,o.sinh=Yn,o.sqrt=Kn,o.sub=Qn,o.tan=xn,o.tanh=ei,o.trunc=ni,e===void 0&&(e={}),e&&e.defaults!==!0)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<t.length;)e.hasOwnProperty(i=t[n++])||(e[i]=this[i]);return o.config(e),o}function Bn(e,n){return new this(e).div(n)}function Ln(e){return new this(e).exp()}function Pn(e){return p(e=new this(e),e.e+1,3)}function An(){var e,n,i=new this(0);for(N=!1,e=0;e<arguments.length;)if(n=new this(arguments[e++]),n.d)i.d&&(i=i.plus(n.times(n)));else{if(n.s)return N=!0,new this(1/0);i=n}return N=!0,i.sqrt()}function Un(e){return e instanceof X||e&&e.name==="[object Decimal]"||!1}function zn(e){return new this(e).ln()}function On(e,n){return new this(e).log(n)}function Rn(e){return new this(e).log(2)}function Zn(e){return new this(e).log(10)}function Hn(){return Oe(this,arguments,"lt")}function $n(){return Oe(this,arguments,"gt")}function Wn(e,n){return new this(e).mod(n)}function jn(e,n){return new this(e).mul(n)}function yn(e,n){return new this(e).pow(n)}function Gn(e){var n,i,t,o,r=0,s=new this(1),u=[];if(e===void 0?e=this.precision:P(e,1,j),t=Math.ceil(e/w),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(t));r<t;)o=n[r],o>=429e7?n[r]=crypto.getRandomValues(new Uint32Array(1))[0]:u[r++]=o%1e7;else if(crypto.randomBytes){for(n=crypto.randomBytes(t*=4);r<t;)o=n[r]+(n[r+1]<<8)+(n[r+2]<<16)+((n[r+3]&127)<<24),o>=214e7?crypto.randomBytes(4).copy(n,r):(u.push(o%1e7),r+=4);r=t/4}else throw Error(Pe);else for(;r<t;)u[r++]=Math.random()*1e7|0;for(t=u[--r],e%=w,t&&e&&(o=I(10,w-e),u[r]=(t/o|0)*o);u[r]===0;r--)u.pop();if(r<0)i=0,u=[0];else{for(i=-1;u[0]===0;i-=w)u.shift();for(t=1,o=u[0];o>=10;o/=10)t++;t<w&&(i-=w-t)}return s.e=i,s.d=u,s}function Xn(e){return p(e=new this(e),e.e+1,this.rounding)}function _n(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function Jn(e){return new this(e).sin()}function Yn(e){return new this(e).sinh()}function Kn(e){return new this(e).sqrt()}function Qn(e,n){return new this(e).sub(n)}function xn(e){return new this(e).tan()}function ei(e){return new this(e).tanh()}function ni(e){return p(e=new this(e),e.e+1,1)}h[Symbol.for("nodejs.util.inspect.custom")]=h.toString;h[Symbol.toStringTag]="Decimal";var X=We(be);fe=new X(fe);ae=new X(ae);const ii={modelValue:{type:[String,Number],default:0},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},color:{type:String},inputWidth:{type:[String,Number]},inputTextSize:{type:[String,Number]},buttonSize:{type:[String,Number]},decimalLength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disableIncrement:{type:Boolean,default:!1},disableDecrement:{type:Boolean,default:!1},disableInput:{type:Boolean,default:!1},lazyChange:{type:Boolean,default:!1},incrementButton:{type:Boolean,default:!0},decrementButton:{type:Boolean,default:!0},press:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onInputChange","onLazyChange","onIncrement","onDecrement"]},rules:{type:Array},onBeforeChange:{type:Function},onChange:{type:Function},onIncrement:{type:Function},onDecrement:{type:Function},"onUpdate:modelValue":{type:Function}};const je=100,ye=600,ti=Ye({name:"VarCounter",components:{VarIcon:Ge,VarFormDetails:Xe},directives:{Ripple:Je},inheritAttrs:!1,props:ii,setup(e){const n=Ke("");let i,t,o,r;const{bindForm:s,form:u}=_e(),{errorMessage:f,validateWithTrigger:l,validate:a,resetValidation:c}=ln(),{readonly:d,disabled:m}=u!=null?u:{},E=()=>a(e.rules,e.modelValue),v=g=>{on(()=>{const{validateTrigger:b,rules:V,modelValue:O}=e;l(b,g,V,O)})},q=()=>{var b;const{min:g}=e;(b=e["onUpdate:modelValue"])==null||b.call(e,g!=null?M(g):0),c()},T={reset:q,validate:E,resetValidation:c},L=Ie(()=>{const{max:g,modelValue:b}=e;return g!=null&&M(b)>=M(g)}),S=Ie(()=>{const{min:g,modelValue:b}=e;return g!=null&&M(b)<=M(g)}),k=g=>{const{decimalLength:b,max:V,min:O}=e;let U=M(g);return V!=null&&U>M(V)&&(U=M(V)),O!=null&&U<M(O)&&(U=M(O)),g=String(U),b!=null&&(g=U.toFixed(M(b))),g},ee=g=>{const{lazyChange:b,onBeforeChange:V}=e,{value:O}=g.target,U=k(O);b?V==null||V(M(U),D):H(U),v("onInputChange")},z=()=>{const{disabled:g,readonly:b,disableDecrement:V,decrementButton:O,lazyChange:U,step:pe,modelValue:we,onDecrement:K,onBeforeChange:Q}=e;if((m==null?void 0:m.value)||(d==null?void 0:d.value)||g||b||V||!O||S.value)return;const ve=new X(M(we)).minus(new X(M(pe))).toString(),se=k(ve),ue=M(se);K==null||K(ue),U?Q==null||Q(ue,D):(H(se),v("onDecrement"))},ne=()=>{const{disabled:g,readonly:b,disableIncrement:V,incrementButton:O,lazyChange:U,step:pe,modelValue:we,onIncrement:K,onBeforeChange:Q}=e;if((m==null?void 0:m.value)||(d==null?void 0:d.value)||g||b||V||!O||L.value)return;const ve=new X(M(we)).plus(new X(M(pe))).toString(),se=k(ve),ue=M(se);K==null||K(ue),U?Q==null||Q(ue,D):(H(se),v("onIncrement"))},ie=()=>{const{press:g,lazyChange:b}=e;!g||b||(r=window.setTimeout(()=>{Y()},ye))},_=()=>{const{press:g,lazyChange:b}=e;!g||b||(o=window.setTimeout(()=>{J()},ye))},oe=()=>{t&&clearTimeout(t),r&&clearTimeout(r)},A=()=>{i&&clearTimeout(i),o&&clearTimeout(o)},J=()=>{i=window.setTimeout(()=>{ne(),J()},je)},Y=()=>{t=window.setTimeout(()=>{z(),Y()},je)},H=g=>{var V;n.value=g;const b=M(g);(V=e["onUpdate:modelValue"])==null||V.call(e,b)},D=g=>{H(k(String(g))),v("onLazyChange")};return s==null||s(T),Qe(()=>e.modelValue,g=>{var b;H(k(String(g))),(b=e.onChange)==null||b.call(e,M(g))}),H(k(String(e.modelValue))),{inputValue:n,errorMessage:f,formDisabled:m,formReadonly:d,isMax:L,isMin:S,validate:E,reset:q,resetValidation:c,handleChange:ee,decrement:z,increment:ne,pressDecrement:ie,pressIncrement:_,releaseDecrement:oe,releaseIncrement:A,toSizeUnit:sn,toNumber:M}}}),ri={class:"var-counter var--box"},oi=["inputmode","readonly","disabled"];function si(e,n,i,t,o,r){const s=qe("var-icon"),u=qe("var-form-details"),f=xe("ripple");return en(),nn("div",ri,[Fe("div",rn({class:["var-counter__controller var-elevation--2",[e.disabled||e.formDisabled?"var-counter--disabled":null,e.errorMessage?"var-counter--error":null]],style:{background:e.color?e.color:void 0}},e.$attrs),[Ne(Ee(s,{class:Ve(["var-counter__decrement-button",[e.decrementButton?null:"var-counter--hidden"]]),"var-counter-cover":"",name:"minus",style:Se({width:e.toSizeUnit(e.buttonSize),height:e.toSizeUnit(e.buttonSize)}),onClick:e.decrement,onTouchstart:e.pressDecrement,onTouchend:e.releaseDecrement,onTouchcancel:e.releaseDecrement},null,8,["class","style","onClick","onTouchstart","onTouchend","onTouchcancel"]),[[f,{disabled:!e.ripple||e.disabled||e.readonly||e.disableDecrement||!e.decrementButton||e.isMin}]]),Ne(Fe("input",{class:"var-counter__input",style:Se({width:e.toSizeUnit(e.inputWidth),fontSize:e.toSizeUnit(e.inputTextSize)}),inputmode:e.toNumber(e.decimalLength)===0?"numeric":"decimal",readonly:e.readonly||e.formReadonly,disabled:e.disabled||e.formDisabled||e.disableInput,"onUpdate:modelValue":n[0]||(n[0]=l=>e.inputValue=l),onChange:n[1]||(n[1]=(...l)=>e.handleChange&&e.handleChange(...l))},null,44,oi),[[tn,e.inputValue]]),Ne(Ee(s,{class:Ve(["var-counter__increment-button",[e.incrementButton?null:"var-counter--hidden"]]),"var-counter-cover":"",name:"plus",style:Se({width:e.toSizeUnit(e.buttonSize),height:e.toSizeUnit(e.buttonSize)}),onClick:e.increment,onTouchstart:e.pressIncrement,onTouchend:e.releaseIncrement,onTouchcancel:e.releaseIncrement},null,8,["class","style","onClick","onTouchstart","onTouchend","onTouchcancel"]),[[f,{disabled:!e.ripple||e.disabled||e.readonly||e.disableIncrement||!e.incrementButton||e.isMax}]])],16),Ee(u,{"error-message":e.errorMessage},null,8,["error-message"])])}var De=un(ti,[["render",si]]);De.install=function(e){e.component(De.name,De)};export{De as C};
