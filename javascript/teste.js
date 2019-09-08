{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.a9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.P"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.P"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.P(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={J:function J(){},
M:function(a){var u=v.mangledGlobalNames[a]
if(typeof u==="string")return u
u="minified:"+a
return u},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.H(a)
if(typeof u!=="string")throw H.e(H.a2(a))
return u},
K:function(a){return H.Z(a)+H.O(H.a6(a),0,null)},
Z:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.Q(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.c||!1){r=C.b(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.a.n(t,0)===36){if(1>n)H.S(P.L(1,m))
if(n>n)H.S(P.L(n,m))
t=t.substring(1,n)}return H.M(t)},
a3:function(a,b){var u,t="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a(b,t,null)
u=J.U(a)
if(b<0||b>=u)return new P.u(u,b,t,"Index out of range")
return P.L(b,t)},
a2:function(a){return new P.a(a,null,null)},
e:function(a){var u
if(a==null)a=new P.C()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.T})
u.name=""}else u.toString=H.T
return u},
T:function(){return J.H(this.dartException)},
S:function(a){throw H.e(a)},
a8:function(a){throw H.e(new P.q(a))},
a9:function(a){throw H.e(new P.r(a))},
a6:function(a){if(a==null)return
return a.$ti},
d:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.M(a[0].name)+H.O(a,1,b)
if(typeof a=="function")return H.M(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.c(a)
return H.c(b[b.length-a-1])}if('func' in a)return H.a0(a,b)
if('futureOr' in a)return"FutureOr<"+H.d("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
a0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=[]
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p=C.a.m(p+o,a0[a0.length-q-1])
n=u[q]
if(n!=null&&n!==P.b)p+=" extends "+H.d(n,a0)}p+=">"}else{p=""
t=null}m=!!a.v?"void":H.d(a.ret,a0)
if("args" in a){l=a.args
for(k=l.length,j="",i="",h=0;h<k;++h,i=b){g=l[h]
j=j+i+H.d(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(k=f.length,i="",h=0;h<k;++h,i=b){g=f[h]
j=j+i+H.d(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(k=H.a4(e),d=k.length,i="",h=0;h<d;++h,i=b){c=k[h]
j=j+i+H.d(e[c],a0)+(" "+H.c(c))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+m},
O:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.l("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.d(p,c)}return"<"+u.h(0)+">"},
p:function p(){},
a4:function(a){return J.Y(a?Object.keys(a):[])},
a7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
Y:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.x.prototype
return J.w.prototype}if(typeof a=="string")return J.h.prototype
if(a==null)return J.y.prototype
if(typeof a=="boolean")return J.v.prototype
if(a.constructor==Array)return J.f.prototype
return a},
a5:function(a){if(typeof a=="string")return J.h.prototype
if(a==null)return a
if(a.constructor==Array)return J.f.prototype
return a},
U:function(a){return J.a5(a).gi(a)},
H:function(a){return J.Q(a).h(a)},
j:function j(){},
v:function v(){},
y:function y(){},
f:function f(){},
I:function I(){},
o:function o(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
z:function z(){},
x:function x(){},
w:function w(){},
h:function h(){}},P={
W:function(a){if(a instanceof H.p)return a.h(0)
return"Instance of '"+H.K(a)+"'"},
a_:function(a,b,c){var u=new J.o(b,b.length)
if(!u.l())return a
if(c.length===0){do a+=H.c(u.d)
while(u.l())}else{a+=H.c(u.d)
for(;u.l();)a=a+c+H.c(u.d)}return a},
N:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.H(a)
if(typeof a==="string")return JSON.stringify(a)
return P.W(a)},
V:function(a,b,c){return new P.a(a,b,c)},
L:function(a,b){return new P.D(a,b,"Value not in range")},
G:function(a){H.a7(H.c(a))},
m:function m(){},
F:function F(){},
t:function t(){},
C:function C(){},
a:function a(a,b,c){this.b=a
this.c=b
this.d=c},
D:function D(a,b,c){this.b=a
this.c=b
this.d=c},
u:function u(a,b,c,d){var _=this
_.f=a
_.b=b
_.c=c
_.d=d},
q:function q(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
A:function A(){},
B:function B(){},
i:function i(){},
b:function b(){},
k:function k(){},
l:function l(a){this.a=a},
X:function(a,b,c){var u,t
if(P.a1(a))return b+"..."+c
u=new P.l(b)
$.E.push(a)
try{t=u
t.a=P.a_(t.a,a,", ")}finally{$.E.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
a1:function(a){var u,t
for(u=$.E.length,t=0;t<u;++t)if(a===$.E[t])return!0
return!1}},F={
R:function(){P.G("Teste.")
P.G("Po\xe7\xe3o")
P.G(1)
P.G("Teste inimigo")}}
var w=[C,H,J,P,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.J.prototype={}
J.j.prototype={
h:function(a){return"Instance of '"+H.K(a)+"'"}}
J.v.prototype={
h:function(a){return String(a)},
$im:1}
J.y.prototype={
h:function(a){return"null"}}
J.f.prototype={
h:function(a){return P.X(a,"[","]")},
gi:function(a){return a.length}}
J.I.prototype={}
J.o.prototype={
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.a8(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.z.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$ii:1}
J.x.prototype={$in:1}
J.w.prototype={}
J.h.prototype={
n:function(a,b){if(b>=a.length)throw H.e(H.a3(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.e(P.V(b,null,null))
return a+b},
h:function(a){return a},
gi:function(a){return a.length},
$ik:1}
H.p.prototype={
gp:function(){return this},
$C:"$1",
$R:1,
$D:null}
P.m.prototype={
h:function(a){return this?"true":"false"}}
P.F.prototype={}
P.t.prototype={}
P.C.prototype={
h:function(a){return"Throw of null."}}
P.a.prototype={
gk:function(){return"Invalid argument"},
gj:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gk()+o+u
s=q.gj()
r=P.N(q.b)
return t+s+": "+r}}
P.D.prototype={
gk:function(){return"RangeError"},
gj:function(){return""}}
P.u.prototype={
gk:function(){return"RangeError"},
gj:function(){if(this.b<0)return": index must not be negative"
var u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+u},
gi:function(a){return this.f}}
P.q.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.N(u)+"."}}
P.r.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.n.prototype={}
P.A.prototype={}
P.B.prototype={
h:function(a){return"null"}}
P.i.prototype={}
P.b.prototype={constructor:P.b,$ib:1,
h:function(a){return"Instance of '"+H.K(this)+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.l.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}};(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.b,null)
t(P.b,[H.J,J.j,J.o,H.p,P.m,P.i,P.t,P.A,P.B,P.k,P.l])
t(J.j,[J.v,J.y,J.f,J.z,J.h])
u(J.I,J.f)
t(J.z,[J.x,J.w])
t(P.i,[P.F,P.n])
t(P.t,[P.C,P.a,P.q,P.r])
t(P.a,[P.D,P.u])})();(function constants(){C.c=J.j.prototype
C.a=J.h.prototype
C.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}})()
var v={mangledGlobalNames:{n:"int",F:"double",i:"num",k:"String",m:"bool",B:"Null",A:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[]};(function staticFields(){$.E=[]})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.R,[])
else F.R([])})})()
//# sourceMappingURL=teste.js.map
