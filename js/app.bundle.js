(()=>{var gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vh=0,vl=1,Hh=2;var Tc=1,Gh=2,bn=3,Xn=0,De=1,tn=2,Gn=0,zi=1,yl=2,Ml=3,bl=4,Wh=5,oi=100,Xh=101,qh=102,Yh=103,$h=104,Zh=200,Jh=201,Kh=202,jh=203,Ao=204,Co=205,Qh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,ou=213,au=214,Ro=0,Po=1,Io=2,Gi=3,Lo=4,Do=5,Uo=6,No=7,Ac=0,lu=1,cu=2,Wn=0,hu=1,uu=2,du=3,fu=4,pu=5,mu=6,gu=7;var Cc=300,Wi=301,Xi=302,Fo=303,Oo=304,Cr=306,Bo=1e3,ci=1001,zo=1002,nn=1003,_u=1004;var Ps=1005;var dn=1006,Kr=1007;var hi=1008;var Tn=1009,Rc=1010,Pc=1011,gs=1012,Ga=1013,ui=1014,Sn=1015,Ms=1016,Wa=1017,Xa=1018,qi=1020,Ic=35902,Lc=1021,Dc=1022,en=1023,Uc=1024,Nc=1025,ki=1026,Yi=1027,Fc=1028,qa=1029,Oc=1030,Ya=1031;var $a=1033,er=33776,nr=33777,ir=33778,sr=33779,ko=35840,Vo=35841,Ho=35842,Go=35843,Wo=36196,Xo=37492,qo=37496,Yo=37808,$o=37809,Zo=37810,Jo=37811,Ko=37812,jo=37813,Qo=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,oa=37821,rr=36492,aa=36494,la=36495,Bc=36283,ca=36284,ha=36285,ua=36286;var or=2300,da=2301,jr=2302,Sl=2400,wl=2401,El=2402;var xu=3200,vu=3201;var yu=0,Mu=1,Vn="",Le="srgb",ji="srgb-linear",Rr="linear",ee="srgb";var Si=7680;var Tl=519,bu=512,Su=513,wu=514,zc=515,Eu=516,Tu=517,Au=518,Cu=519,Al=35044;var Cl="300 es",wn=2e3,ar=2001,An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=1234567,fs=Math.PI/180,_s=180/Math.PI;function Qi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function Za(n,t){return(n%t+t)%t}function Ru(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Pu(n,t,e){return n!==t?(e-n)/(t-n):0}function ps(n,t,e){return(1-e)*n+e*t}function Iu(n,t,e,i){return ps(n,t,1-Math.exp(-e*i))}function Lu(n,t=1){return t-Math.abs(Za(n,t*2)-t)}function Du(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Uu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Nu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Fu(n,t){return n+Math.random()*(t-n)}function Ou(n){return n*(.5-Math.random())}function Bu(n){n!==void 0&&(Rl=n);let t=Rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zu(n){return n*fs}function ku(n){return n*_s}function Vu(n){return(n&n-1)===0&&n!==0}function Hu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wu(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),d=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Te(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var kc={DEG2RAD:fs,RAD2DEG:_s,generateUUID:Qi,clamp:we,euclideanModulo:Za,mapLinear:Ru,inverseLerp:Pu,lerp:ps,damp:Iu,pingpong:Lu,smoothstep:Du,smootherstep:Uu,randInt:Nu,randFloat:Fu,randFloatSpread:Ou,seededRandom:Bu,degToRad:zu,radToDeg:ku,isPowerOfTwo:Vu,ceilPowerOfTwo:Hu,floorPowerOfTwo:Gu,setQuaternionFromProperEuler:Wu,normalize:Te,denormalize:Oi},Lt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],u=s[6],E=s[1],T=s[4],b=s[7],O=s[2],w=s[5],A=s[8];return r[0]=o*_+a*E+l*O,r[3]=o*p+a*T+l*w,r[6]=o*u+a*b+l*A,r[1]=c*_+h*E+f*O,r[4]=c*p+h*T+f*w,r[7]=c*u+h*b+f*A,r[2]=d*_+m*E+g*O,r[5]=d*p+m*T+g*w,r[8]=d*u+m*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*f+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qr=new Ft;function Vc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xu(){let n=lr("canvas");return n.style.display="block",n}var Pl={};function us(n){n in Pl||(Pl[n]=!0,console.warn(n))}function qu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Yu(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $u(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=En(n.r),n.g=En(n.g),n.b=En(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=Vi(n.r),n.g=Vi(n.g),n.b=Vi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vn?Rr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function En(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Il=[.64,.33,.3,.6,.15,.06],Ll=[.2126,.7152,.0722],Dl=[.3127,.329],Ul=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[ji]:{primaries:Il,whitePoint:Dl,transfer:Rr,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:Ll,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:Il,whitePoint:Dl,transfer:ee,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:Ll,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});var wi,fa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=lr("canvas")),wi.width=t.width,wi.height=t.height;let i=wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(En(e[i]/255)*255):e[i]=En(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zu=0,cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ju=0,Ve=class n extends An{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ci,s=ci,r=dn,o=hi,a=en,l=Tn,c=n.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Qi(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bo:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bo:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Cc;Ve.DEFAULT_ANISOTROPY=1;var de=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,b=(m+1)/2,O=(u+1)/2,w=(h+d)/4,A=(f+_)/4,P=(g+p)/4;return T>b&&T>O?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=A/i):b>O?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=P/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=A/r,s=P/r),this.set(i,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pa=class extends An{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ve(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new cr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends pa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},hr=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ma=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==m||h!==g){let p=1-a,u=l*d+c*m+h*g+f*_,E=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){let O=Math.sqrt(T),w=Math.atan2(O,u*E);p=Math.sin(p*w)/O,a=Math.sin(a*w)/O}let b=a*E;if(l=l*p+d*b,c=c*p+m*b,h=h*p+g*b,f=f*p+_*b,p===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*m-c*d,t[e+1]=l*g+h*d+c*f-a*m,t[e+2]=c*g+h*m+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=i+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new F,Fl=new rn,qn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Ls.subVectors(this.max,os),Ei.subVectors(t.a,os),Ti.subVectors(t.b,os),Ai.subVectors(t.c,os),Nn.subVectors(Ti,Ei),Fn.subVectors(Ai,Ti),Qn.subVectors(Ei,Ai);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!no(e,Ei,Ti,Ai,Ls)||(e=[1,0,0,0,1,0,0,0,1],!no(e,Ei,Ti,Ai,Ls))?!1:(Ds.crossVectors(Nn,Fn),e=[Ds.x,Ds.y,Ds.z],no(e,Ei,Ti,Ai,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_n=[new F,new F,new F,new F,new F,new F,new F,new F],Ke=new F,Is=new qn,Ei=new F,Ti=new F,Ai=new F,Nn=new F,Fn=new F,Qn=new F,os=new F,Ls=new F,Ds=new F,ti=new F;function no(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ti.fromArray(n,r);let a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=i.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ku=new qn,as=new F,io=new F,$i=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ku.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);let e=as.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(as,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(io)),this.expandByPoint(as.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new F,so=new F,Us=new F,On=new F,ro=new F,Ns=new F,oo=new F,di=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){so.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),On.copy(this.origin).sub(so);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Us),a=On.dot(this.direction),l=-On.dot(Us),c=On.lengthSq(),h=Math.abs(1-o*o),f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(so).addScaledVector(Us,d),m}intersectSphere(t,e){xn.subVectors(t.center,this.origin);let i=xn.dot(this.direction),s=xn.dot(xn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,i,s,r){ro.subVectors(e,t),Ns.subVectors(i,t),oo.crossVectors(ro,Ns);let o=this.direction.dot(oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);let l=a*this.direction.dot(Ns.crossVectors(On,Ns));if(l<0)return null;let c=a*this.direction.dot(ro.cross(On));if(c<0||l+c>o)return null;let h=-a*On.dot(oo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class n{constructor(t,e,i,s,r,o,a,l,c,h,f,d,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,d,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,h,f,d,m,g,_,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,m=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,m=l*f,g=c*h,_=c*f;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,m=l*f,g=c*h,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,m=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*f,e[8]=g*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+g,e[10]=d-_*f}else if(t.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=o*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Qu)}lookAt(t,e,i){let s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Bn.crossVectors(i,Oe),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Bn.crossVectors(i,Oe)),Bn.normalize(),Fs.crossVectors(Oe,Bn),s[0]=Bn.x,s[4]=Fs.x,s[8]=Oe.x,s[1]=Bn.y,s[5]=Fs.y,s[9]=Oe.y,s[2]=Bn.z,s[6]=Fs.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],E=i[3],T=i[7],b=i[11],O=i[15],w=s[0],A=s[4],P=s[8],M=s[12],v=s[1],C=s[5],$=s[9],z=s[13],q=s[2],Q=s[6],Y=s[10],st=s[14],R=s[3],I=s[7],W=s[11],H=s[15];return r[0]=o*w+a*v+l*q+c*R,r[4]=o*A+a*C+l*Q+c*I,r[8]=o*P+a*$+l*Y+c*W,r[12]=o*M+a*z+l*st+c*H,r[1]=h*w+f*v+d*q+m*R,r[5]=h*A+f*C+d*Q+m*I,r[9]=h*P+f*$+d*Y+m*W,r[13]=h*M+f*z+d*st+m*H,r[2]=g*w+_*v+p*q+u*R,r[6]=g*A+_*C+p*Q+u*I,r[10]=g*P+_*$+p*Y+u*W,r[14]=g*M+_*z+p*st+u*H,r[3]=E*w+T*v+b*q+O*R,r[7]=E*A+T*C+b*Q+O*I,r[11]=E*P+T*$+b*Y+O*W,r[15]=E*M+T*z+b*st+O*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+e*c*f-e*a*m-r*o*f+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-e*l*f+e*a*d+s*o*f-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],E=f*p*c-_*d*c+_*l*m-a*p*m-f*l*u+a*d*u,T=g*d*c-h*p*c-g*l*m+o*p*m+h*l*u-o*d*u,b=h*_*c-g*f*c+g*a*m-o*_*m-h*a*u+o*f*u,O=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,w=e*E+i*T+s*b+r*O;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=E*A,t[1]=(_*d*r-f*p*r-_*s*m+i*p*m+f*s*u-i*d*u)*A,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*u+i*l*u)*A,t[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*m-i*l*m)*A,t[4]=T*A,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*u+e*d*u)*A,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*u-e*l*u)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*m+e*l*m)*A,t[8]=b*A,t[9]=(g*f*r-h*_*r-g*i*m+e*_*m+h*i*u-e*f*u)*A,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*u+e*a*u)*A,t[11]=(h*a*r-o*f*r-h*i*c+e*f*c+o*i*m-e*a*m)*A,t[12]=O*A,t[13]=(h*_*s-g*f*s+g*i*d-e*_*d-h*i*p+e*f*p)*A,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*A,t[15]=(o*f*s-h*a*s+h*i*l-e*f*l-o*i*d+e*a*d)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,m=r*h,g=r*f,_=o*h,p=o*f,u=a*f,E=l*c,T=l*h,b=l*f,O=i.x,w=i.y,A=i.z;return s[0]=(1-(_+u))*O,s[1]=(m+b)*O,s[2]=(g-T)*O,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(d+u))*w,s[6]=(p+E)*w,s[7]=0,s[8]=(g+T)*A,s[9]=(p-E)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),a=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let c=1/r,h=1/o,f=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=f,je.elements[9]*=f,je.elements[10]*=f,e.setFromRotationMatrix(je),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),m,g;if(a===wn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ar)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wn){let l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(o-r),d=(e+t)*c,m=(i+s)*h,g,_;if(a===wn)g=(o+r)*f,_=-2*f;else if(a===ar)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ci=new F,je=new fe,ju=new F(0,0,0),Qu=new F(1,1,1),Bn=new F,Fs=new F,Oe=new F,Ol=new fe,Bl=new rn,Rn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},td=0,zl=new F,Ri=new rn,vn=new fe,Os=new F,ls=new F,ed=new F,nd=new rn,kl=new F(1,0,0),Vl=new F(0,1,0),Hl=new F(0,0,1),Gl={type:"added"},id={type:"removed"},Pi={type:"childadded",child:null},ao={type:"childremoved",child:null},Xe=class n extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Rn,i=new rn,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ft}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Os.copy(t):Os.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ls,Os,this.up):vn.lookAt(Os,ls,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(vn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new F(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new F,yn=new F,lo=new F,Mn=new F,Ii=new F,Li=new F,Wl=new F,co=new F,ho=new F,uo=new F,fo=new de,po=new de,mo=new de,ai=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qe.subVectors(s,e),yn.subVectors(i,e),lo.subVectors(t,e);let o=Qe.dot(Qe),a=Qe.dot(yn),l=Qe.dot(lo),c=yn.dot(yn),h=yn.dot(lo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fo,r.x),o.addScaledVector(po,r.y),o.addScaledVector(mo,r.z),o}static isFrontFacing(t,e,i,s){return Qe.subVectors(i,e),yn.subVectors(t,e),Qe.cross(yn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qe.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,i),Li.subVectors(r,i),co.subVectors(t,i);let l=Ii.dot(co),c=Li.dot(co);if(l<=0&&c<=0)return e.copy(i);ho.subVectors(t,s);let h=Ii.dot(ho),f=Li.dot(ho);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ii,o);uo.subVectors(t,r);let m=Ii.dot(uo),g=Li.dot(uo);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Li,a);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return Wl.subVectors(r,s),a=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(Wl,a);let u=1/(p+_+d);return o=_*u,a=d*u,e.copy(i).addScaledVector(Ii,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function go(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=Za(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=go(o,r,t+1/3),this.g=go(o,r,t),this.b=go(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let i=Hc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Yt.fromWorkingColorSpace(Se.copy(this),t),Math.round(we(Se.r*255,0,255))*65536+Math.round(we(Se.g*255,0,255))*256+Math.round(we(Se.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Se.copy(this),e);let i=Se.r,s=Se.g,r=Se.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Le){Yt.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,i=Se.g,s=Se.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Bs);let i=ps(zn.h,Bs.h,e),s=ps(zn.s,Bs.s,e),r=ps(zn.l,Bs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new Zt;Zt.NAMES=Hc;var sd=0,fi=class extends An{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Qi(),this.name="",this.blending=zi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Co,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==Co&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zi=class extends fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new F,zs=new Lt,Ue=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Al,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}};var ur=class extends Ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var dr=class extends Ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var sn=class extends Ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},rd=0,We=new fe,_o=new Xe,Di=new F,Be=new qn,cs=new qn,ve=new F,Pn=class n extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?dr:ur)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Be.min,cs.min),Be.expandByPoint(ve),ve.addVectors(Be.max,cs.max),Be.expandByPoint(ve)):(Be.expandByPoint(cs.min),Be.expandByPoint(cs.max))}Be.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(t,c),ve.add(Di)),s=Math.max(s,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;let c=new F,h=new F,f=new F,d=new Lt,m=new Lt,g=new Lt,_=new F,p=new F;function u(P,M,v){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,v),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),f.sub(c),m.sub(d),g.sub(d);let C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[M].add(_),a[v].add(_),l[P].add(p),l[M].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,M=E.length;P<M;++P){let v=E[P],C=v.start,$=v.count;for(let z=C,q=C+$;z<q;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let T=new F,b=new F,O=new F,w=new F;function A(P){O.fromBufferAttribute(s,P),w.copy(O);let M=a[P];T.copy(M),T.sub(O.multiplyScalar(O.dot(M))).normalize(),b.crossVectors(w,M);let C=b.dot(l[P])<0?-1:1;o.setXYZW(P,T.x,T.y,T.z,C)}for(let P=0,M=E.length;P<M;++P){let v=E[P],C=v.start,$=v.count;for(let z=C,q=C+$;z<q;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,f=new F;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new Ue(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=new fe,ei=new di,ks=new $i,ql=new F,Vs=new F,Hs=new F,Gs=new F,xo=new F,Ws=new F,Yl=new F,Xs=new F,ke=class extends Xe{constructor(t=new Pn,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(xo.fromBufferAttribute(f,t),o?Ws.addScaledVector(xo,h):Ws.addScaledVector(xo.sub(e),h))}e.add(Ws)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(ks.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ks,ql)===null||ei.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,O=T;b<O;b+=3){let w=a.getX(b),A=a.getX(b+1),P=a.getX(b+2);s=qs(this,u,t,i,c,h,f,w,A,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let E=a.getX(p),T=a.getX(p+1),b=a.getX(p+2);s=qs(this,o,t,i,c,h,f,E,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,O=T;b<O;b+=3){let w=b,A=b+1,P=b+2;s=qs(this,u,t,i,c,h,f,w,A,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let E=p,T=p+1,b=p+2;s=qs(this,o,t,i,c,h,f,E,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function od(n,t,e,i,s,r,o,a){let l;if(t.side===De?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Xn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Xs);return c<e.near||c>e.far?null:{distance:c,point:Xs.clone(),object:n}}function qs(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Vs),n.getVertexPosition(l,Hs),n.getVertexPosition(c,Gs);let h=od(n,t,e,i,Vs,Hs,Gs,Yl);if(h){let f=new F;ai.getBarycoord(Yl,Vs,Hs,Gs,f),s&&(h.uv=ai.getInterpolatedAttribute(s,a,l,c,f,new Lt)),r&&(h.uv1=ai.getInterpolatedAttribute(r,a,l,c,f,new Lt)),o&&(h.normal=ai.getInterpolatedAttribute(o,a,l,c,f,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};ai.getNormal(Vs,Hs,Gs,d.normal),h.face=d,h.barycoord=f}return h}var vs=class n extends Pn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(f,2));function g(_,p,u,E,T,b,O,w,A,P,M){let v=b/A,C=O/P,$=b/2,z=O/2,q=w/2,Q=A+1,Y=P+1,st=0,R=0,I=new F;for(let W=0;W<Y;W++){let H=W*C-z;for(let nt=0;nt<Q;nt++){let ot=nt*v-$;I[_]=ot*E,I[p]=H*T,I[u]=q,c.push(I.x,I.y,I.z),I[_]=0,I[p]=0,I[u]=w>0?1:-1,h.push(I.x,I.y,I.z),f.push(nt/A),f.push(1-W/P),st+=1}}for(let W=0;W<P;W++)for(let H=0;H<A;H++){let nt=d+H+Q*W,ot=d+H+Q*(W+1),G=d+(H+1)+Q*(W+1),J=d+(H+1)+Q*W;l.push(nt,ot,J),l.push(ot,G,J),R+=6}a.addGroup(m,R,M),m+=R,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ae(n){let t={};for(let e=0;e<n.length;e++){let i=Ji(n[e]);for(let s in i)t[s]=i[s]}return t}function ad(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var ld={clone:Ji,merge:Ae},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},fr=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new F,$l=new Lt,Zl=new Lt,Ce=class extends fr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,$l,Zl),e.subVectors(Zl,$l)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ui=-90,Ni=1,ga=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(Ui,Ni,t,e);s.layers=this.layers,this.add(s);let r=new Ce(Ui,Ni,t,e);r.layers=this.layers,this.add(r);let o=new Ce(Ui,Ni,t,e);o.layers=this.layers,this.add(o);let a=new Ce(Ui,Ni,t,e);a.layers=this.layers,this.add(a);let l=new Ce(Ui,Ni,t,e);l.layers=this.layers,this.add(l);let c=new Ce(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pr=class extends Ve{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vs(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:Gn});r.uniforms.tEquirect.value=e;let o=new ke(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=dn),new ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},vo=new F,ud=new F,dd=new Ft,ze=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=vo.subVectors(i,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(vo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||dd.getNormalMatrix(t),s=this.coplanarPoint(vo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new $i,Ys=new F,mr=class{constructor(t=new ze,e=new ze,i=new ze,s=new ze,r=new ze,o=new ze){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],E=s[13],T=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,p-m,b-u).normalize(),i[1].setComponents(l+r,d+c,p+m,b+u).normalize(),i[2].setComponents(l+o,d+h,p+g,b+E).normalize(),i[3].setComponents(l-o,d-h,p-g,b-E).normalize(),i[4].setComponents(l-a,d-f,p-_,b-T).normalize(),e===wn)i[5].setComponents(l+a,d+f,p+_,b+T).normalize();else if(e===ar)i[5].setComponents(a,f,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ys.x=s.normal.x>0?t.max.x:t.min.x,Ys.y=s.normal.y>0?t.max.y:t.min.y,Ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wc(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function fd(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Yn=class n extends Pn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let E=u*d-o;for(let T=0;T<c;T++){let b=T*f-r;g.push(b,-E,0),_.push(0,0,1),p.push(T/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let T=E+c*u,b=E+c*(u+1),O=E+1+c*(u+1),w=E+1+c*u;m.push(T,b,w),m.push(b,O,w)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
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
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,pf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wf=`#if defined( USE_POINTS_UV )
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
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bp=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Sp=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Rp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Pp=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Ip=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lp=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Dp=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Up=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Np=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Op=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Bp=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,zp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kp=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Vp=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Gp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Yp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,zt={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:xd,alphatest_pars_fragment:vd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:bd,batching_vertex:Sd,begin_vertex:wd,beginnormal_vertex:Ed,bsdfs:Td,iridescence_fragment:Ad,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:zd,displacementmap_pars_vertex:kd,displacementmap_vertex:Vd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:$d,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:af,envmap_vertex:Jd,fog_vertex:Kd,fog_pars_vertex:jd,fog_fragment:Qd,fog_pars_fragment:tf,gradientmap_pars_fragment:ef,lightmap_pars_fragment:nf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:rf,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:hf,lights_phong_pars_fragment:uf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:_f,logdepthbuf_pars_fragment:xf,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:yf,map_fragment:Mf,map_pars_fragment:bf,map_particle_fragment:Sf,map_particle_pars_fragment:wf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:Tf,morphinstance_vertex:Af,morphcolor_vertex:Cf,morphnormal_vertex:Rf,morphtarget_pars_vertex:Pf,morphtarget_vertex:If,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:Uf,normal_pars_vertex:Nf,normal_vertex:Ff,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Vf,opaque_fragment:Hf,packing:Gf,premultiplied_alpha_fragment:Wf,project_vertex:Xf,dithering_fragment:qf,dithering_pars_fragment:Yf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:Kf,shadowmap_vertex:jf,shadowmask_pars_fragment:Qf,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:op,tonemapping_pars_fragment:ap,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:xp,cube_frag:vp,depth_vert:yp,depth_frag:Mp,distanceRGBA_vert:bp,distanceRGBA_frag:Sp,equirect_vert:wp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:Ap,meshbasic_vert:Cp,meshbasic_frag:Rp,meshlambert_vert:Pp,meshlambert_frag:Ip,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:zp,meshtoon_vert:kp,meshtoon_frag:Vp,points_vert:Hp,points_frag:Gp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Yp},lt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},un={basic:{uniforms:Ae([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ae([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ae([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ae([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ae([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ae([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ae([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ae([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ae([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ae([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ae([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ae([lt.common,lt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ae([lt.lights,lt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};un.physical={uniforms:Ae([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var $s={r:0,b:0,g:0},ii=new Rn,$p=new fe;function Zp(n,t,e,i,s,r,o){let a=new Zt(0),l=r===!0?0:1,c,h,f=null,d=0,m=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?e:t).get(T)),T}function _(E){let T=!1,b=g(E);b===null?u(a,l):b&&b.isColor&&(u(b,1),T=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,T){let b=g(T);b&&(b.isCubeTexture||b.mapping===Cr)?(h===void 0&&(h=new ke(new vs(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ji(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(T.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(ii)),h.material.toneMapped=Yt.getTransfer(b.colorSpace)!==ee,(f!==b||d!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ke(new Yn(2,2),new fn({name:"BackgroundMaterial",uniforms:Ji(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(b.colorSpace)!==ee,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,T){E.getRGB($s,Gc(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),l=T,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:_,addToRenderList:p}}function Jp(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,C,$,z,q){let Q=!1,Y=f(z,$,C);r!==Y&&(r=Y,c(r.object)),Q=m(v,z,$,q),Q&&g(v,z,$,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,b(v,C,$,z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function f(v,C,$){let z=$.wireframe===!0,q=i[v.id];q===void 0&&(q={},i[v.id]=q);let Q=q[C.id];Q===void 0&&(Q={},q[C.id]=Q);let Y=Q[z];return Y===void 0&&(Y=d(l()),Q[z]=Y),Y}function d(v){let C=[],$=[],z=[];for(let q=0;q<e;q++)C[q]=0,$[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:$,attributeDivisors:z,object:v,attributes:{},index:null}}function m(v,C,$,z){let q=r.attributes,Q=C.attributes,Y=0,st=$.getAttributes();for(let R in st)if(st[R].location>=0){let W=q[R],H=Q[R];if(H===void 0&&(R==="instanceMatrix"&&v.instanceMatrix&&(H=v.instanceMatrix),R==="instanceColor"&&v.instanceColor&&(H=v.instanceColor)),W===void 0||W.attribute!==H||H&&W.data!==H.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(v,C,$,z){let q={},Q=C.attributes,Y=0,st=$.getAttributes();for(let R in st)if(st[R].location>=0){let W=Q[R];W===void 0&&(R==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),R==="instanceColor"&&v.instanceColor&&(W=v.instanceColor));let H={};H.attribute=W,W&&W.data&&(H.data=W.data),q[R]=H,Y++}r.attributes=q,r.attributesNum=Y,r.index=z}function _(){let v=r.newAttributes;for(let C=0,$=v.length;C<$;C++)v[C]=0}function p(v){u(v,0)}function u(v,C){let $=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;$[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),q[v]!==C&&(n.vertexAttribDivisor(v,C),q[v]=C)}function E(){let v=r.newAttributes,C=r.enabledAttributes;for(let $=0,z=C.length;$<z;$++)C[$]!==v[$]&&(n.disableVertexAttribArray($),C[$]=0)}function T(v,C,$,z,q,Q,Y){Y===!0?n.vertexAttribIPointer(v,C,$,q,Q):n.vertexAttribPointer(v,C,$,z,q,Q)}function b(v,C,$,z){_();let q=z.attributes,Q=$.getAttributes(),Y=C.defaultAttributeValues;for(let st in Q){let R=Q[st];if(R.location>=0){let I=q[st];if(I===void 0&&(st==="instanceMatrix"&&v.instanceMatrix&&(I=v.instanceMatrix),st==="instanceColor"&&v.instanceColor&&(I=v.instanceColor)),I!==void 0){let W=I.normalized,H=I.itemSize,nt=t.get(I);if(nt===void 0)continue;let ot=nt.buffer,G=nt.type,J=nt.bytesPerElement,at=G===n.INT||G===n.UNSIGNED_INT||I.gpuType===Ga;if(I.isInterleavedBufferAttribute){let et=I.data,pt=et.stride,vt=I.offset;if(et.isInstancedInterleavedBuffer){for(let yt=0;yt<R.locationSize;yt++)u(R.location+yt,et.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<R.locationSize;yt++)p(R.location+yt);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let yt=0;yt<R.locationSize;yt++)T(R.location+yt,H/R.locationSize,G,W,pt*J,(vt+H/R.locationSize*yt)*J,at)}else{if(I.isInstancedBufferAttribute){for(let et=0;et<R.locationSize;et++)u(R.location+et,I.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let et=0;et<R.locationSize;et++)p(R.location+et);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let et=0;et<R.locationSize;et++)T(R.location+et,H/R.locationSize,G,W,H*J,H/R.locationSize*et*J,at)}}else if(Y!==void 0){let W=Y[st];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(R.location,W);break;case 3:n.vertexAttrib3fv(R.location,W);break;case 4:n.vertexAttrib4fv(R.location,W);break;default:n.vertexAttrib1fv(R.location,W)}}}}E()}function O(){P();for(let v in i){let C=i[v];for(let $ in C){let z=C[$];for(let q in z)h(z[q].object),delete z[q];delete C[$]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;let C=i[v.id];for(let $ in C){let z=C[$];for(let q in z)h(z[q].object),delete z[q];delete C[$]}delete i[v.id]}function A(v){for(let C in i){let $=i[C];if($[v.id]===void 0)continue;let z=$[v.id];for(let q in z)h(z[q].object),delete z[q];delete $[v.id]}}function P(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function Kp(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,i,1)}function l(c,h,f,d){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==en&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Tn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Sn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:O,maxSamples:w}}function Qp(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ze,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:i,T=E*4,b=u.clippingState||null;l.value=b,b=h(g,d,T,m);for(let O=0;O!==T;++O)b[O]=e[O];u.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,m,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let u=m+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,b=m;T!==_;++T,b+=4)o.copy(f[T]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function tm(n){let t=new WeakMap;function e(o,a){return a===Fo?o.mapping=Wi:a===Oo&&(o.mapping=Xi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fo||a===Oo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _a(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var xa=class extends fr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bi=4,Jl=[.125,.215,.35,.446,.526,.582],li=20,yo=new xa,Kl=new Zt,Mo=null,bo=0,So=0,wo=!1,ri=(1+Math.sqrt(5))/2,Fi=1/ri,jl=[new F(-ri,Fi,0),new F(ri,Fi,0),new F(-Fi,0,ri),new F(Fi,0,ri),new F(0,ri,-Fi),new F(0,ri,Fi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],gr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Mo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,bo,So),this._renderer.xr.enabled=wo,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ms,format:en,colorSpace:ji,depthBuffer:!1},s=Ql(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=nm(r,t,e)}return s}_compileMaterial(t){let e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,yo)}_sceneToCubeUV(t,e,i,s){let a=new Ce(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Kl),h.toneMapping=Wn,h.autoClear=!1;let m=new Zi({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new ke(new vs,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Kl),_=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let T=this._cubeSize;Zs(s,E*T,u>2?T:0,T,T),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Zs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,yo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jl[(s-r-1)%jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ke(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);let u=[],E=0;for(let A=0;A<li;++A){let P=A/_,M=Math.exp(-P*P/2);u.push(M),A===0?E+=M:A<p&&(E+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;let b=this._sizeLods[s],O=3*b*(s>T-Bi?s-T+Bi:0),w=4*(this._cubeSize-b);Zs(e,O,w,3*b,2*b),l.setRenderTarget(e),l.render(f,yo)}};function em(n){let t=[],e=[],i=[],s=n,r=n-Bi+1+Jl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Bi?l=Jl[o-n+Bi-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,p=2,u=1,E=new Float32Array(_*g*m),T=new Float32Array(p*g*m),b=new Float32Array(u*g*m);for(let w=0;w<m;w++){let A=w%3*2/3-1,P=w>2?0:-1,M=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(M,_*g*w),T.set(d,p*g*w);let v=[w,w,w,w,w,w];b.set(v,u*g*w)}let O=new Pn;O.setAttribute("position",new Ue(E,_)),O.setAttribute("uv",new Ue(T,p)),O.setAttribute("faceIndex",new Ue(b,u)),t.push(O),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ql(n,t,e){let i=new Cn(n,t,e);return i.texture.mapping=Cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function nm(n,t,e){let i=new Float32Array(li),s=new F(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function tc(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ec(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function im(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fo||l===Oo,h=l===Wi||l===Xi;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gr(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new gr(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function sm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&us("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rm(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(f){let d=[],m=f.index,g=f.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let T=0,b=E.length;T<b;T+=3){let O=E[T+0],w=E[T+1],A=E[T+2];d.push(O,w,w,A,A,O)}}else if(g!==void 0){let E=g.array;_=g.version;for(let T=0,b=E.length/3-1;T<b;T+=3){let O=T+0,w=T+1,A=T+2;d.push(O,w,w,A,A,O)}}else return;let p=new(Vc(d)?dr:ur)(d,1);p.version=_;let u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function om(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),e.update(m,i,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,i,1)}function f(d,m,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let u=0;for(let E=0;E<g;E++)u+=m[E]*_[E];e.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function am(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lm(n,t,e){let i=new WeakMap,s=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],T=0;m===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let b=a.attributes.position.count*T,O=1;b>t.maxTextureSize&&(O=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*O*4*f),A=new hr(w,b,O,f);A.type=Sn,A.needsUpdate=!0;let P=T*4;for(let v=0;v<f;v++){let C=p[v],$=u[v],z=E[v],q=b*O*4*v;for(let Q=0;Q<C.count;Q++){let Y=Q*P;m===!0&&(s.fromBufferAttribute(C,Q),w[q+Y+0]=s.x,w[q+Y+1]=s.y,w[q+Y+2]=s.z,w[q+Y+3]=0),g===!0&&(s.fromBufferAttribute($,Q),w[q+Y+4]=s.x,w[q+Y+5]=s.y,w[q+Y+6]=s.z,w[q+Y+7]=0),_===!0&&(s.fromBufferAttribute(z,Q),w[q+Y+8]=s.x,w[q+Y+9]=s.y,w[q+Y+10]=s.z,w[q+Y+11]=z.itemSize===4?s.w:1)}}d={count:f,texture:A,size:new Lt(b,O)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function cm(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var _r=class extends Ve{constructor(t,e,i,s,r,o,a,l,c,h=ki){if(h!==ki&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ki&&(i=ui),i===void 0&&h===Yi&&(i=qi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xc=new Ve,nc=new _r(1,1),qc=new hr,Yc=new ma,$c=new pr,ic=[],sc=[],rc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function ts(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ic[s];if(r===void 0&&(r=new Float32Array(s),ic[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Pr(n,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function hm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function pm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;ac.set(i),n.uniformMatrix2fv(this.addr,!1,ac),ge(e,i)}}function mm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;oc.set(i),n.uniformMatrix3fv(this.addr,!1,oc),ge(e,i)}}function gm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;rc.set(i),n.uniformMatrix4fv(this.addr,!1,rc),ge(e,i)}}function _m(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function xm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function ym(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function Mm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function Sm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function wm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function Em(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=zc,r=nc):r=Xc,e.setTexture2D(t||r,s)}function Tm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yc,s)}function Am(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$c,s)}function Cm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qc,s)}function Rm(n){switch(n){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return vm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return bm;case 36295:return Sm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Cm}}function Pm(n,t){n.uniform1fv(this.addr,t)}function Im(n,t){let e=ts(t,this.size,2);n.uniform2fv(this.addr,e)}function Lm(n,t){let e=ts(t,this.size,3);n.uniform3fv(this.addr,e)}function Dm(n,t){let e=ts(t,this.size,4);n.uniform4fv(this.addr,e)}function Um(n,t){let e=ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Nm(n,t){let e=ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Fm(n,t){let e=ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Om(n,t){n.uniform1iv(this.addr,t)}function Bm(n,t){n.uniform2iv(this.addr,t)}function zm(n,t){n.uniform3iv(this.addr,t)}function km(n,t){n.uniform4iv(this.addr,t)}function Vm(n,t){n.uniform1uiv(this.addr,t)}function Hm(n,t){n.uniform2uiv(this.addr,t)}function Gm(n,t){n.uniform3uiv(this.addr,t)}function Wm(n,t){n.uniform4uiv(this.addr,t)}function Xm(n,t,e){let i=this.cache,s=t.length,r=Pr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xc,r[o])}function qm(n,t,e){let i=this.cache,s=t.length,r=Pr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yc,r[o])}function Ym(n,t,e){let i=this.cache,s=t.length,r=Pr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$c,r[o])}function $m(n,t,e){let i=this.cache,s=t.length,r=Pr(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qc,r[o])}function Zm(n){switch(n){case 5126:return Pm;case 35664:return Im;case 35665:return Lm;case 35666:return Dm;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Vm;case 36294:return Hm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}var va=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}},ya=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}},Ma=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Eo=/(\w+)(\])?(\[|\.)?/g;function lc(n,t){n.seq.push(t),n.map[t.id]=t}function Jm(n,t,e){let i=n.name,s=i.length;for(Eo.lastIndex=0;;){let r=Eo.exec(i),o=Eo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lc(e,c===void 0?new va(a,n,t):new ya(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Ma(a),lc(e,f)),e=f}}}var Hi=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jm(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function cc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Km=37297,jm=0;function Qm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var hc=new Ft;function tg(n){Yt._getMatrix(hc,Yt.workingColorSpace,n);let t=`mat3( ${hc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Rr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function uc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qm(n.getShaderSource(t),o)}else return s}function eg(n,t){let e=tg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ng(n,t){let e;switch(t){case hu:e="Linear";break;case uu:e="Reinhard";break;case du:e="Cineon";break;case fu:e="ACESFilmic";break;case mu:e="AgX";break;case gu:e="Neutral";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Js=new F;function ig(){Yt.getLuminanceCoefficients(Js);let n=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function rg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function og(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ds(n){return n!==""}function dc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(n){return n.replace(ag,cg)}var lg=new Map;function cg(n,t){let e=zt[t];if(e===void 0){let i=lg.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ba(e)}var hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(n){return n.replace(hg,ug)}function ug(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function mg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case lu:t="ENVMAP_BLENDING_MIX";break;case cu:t="ENVMAP_BLENDING_ADD";break}return t}function gg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _g(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dg(e),c=fg(e),h=pg(e),f=mg(e),d=gg(e),m=sg(e),g=rg(r),_=s.createProgram(),p,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),u.length>0&&(u+=`
`)):(p=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),u=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=ba(o),o=dc(o,e),o=fc(o,e),a=ba(a),a=dc(a,e),a=fc(a,e),o=pc(o),a=pc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let T=E+p+o,b=E+u+a,O=cc(s,s.VERTEX_SHADER,T),w=cc(s,s.FRAGMENT_SHADER,b);s.attachShader(_,O),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(O).trim(),q=s.getShaderInfoLog(w).trim(),Q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,w);else{let st=uc(s,O,"vertex"),R=uc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+$+`
`+st+`
`+R)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(z===""||q==="")&&(Y=!1);Y&&(C.diagnostics={runnable:Q,programLog:$,vertexShader:{log:z,prefix:p},fragmentShader:{log:q,prefix:u}})}s.deleteShader(O),s.deleteShader(w),P=new Hi(s,_),M=og(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Km)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=w,this}var xg=0,Sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wa(t),e.set(t,i)),i}},wa=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function vg(n,t,e,i,s,r,o){let a=new xs,l=new Sa,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,v,C,$,z){let q=$.fog,Q=z.geometry,Y=M.isMeshStandardMaterial?$.environment:null,st=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),R=st&&st.mapping===Cr?st.image.height:null,I=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let W=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,H=W!==void 0?W.length:0,nt=0;Q.morphAttributes.position!==void 0&&(nt=1),Q.morphAttributes.normal!==void 0&&(nt=2),Q.morphAttributes.color!==void 0&&(nt=3);let ot,G,J,at;if(I){let te=un[I];ot=te.vertexShader,G=te.fragmentShader}else ot=M.vertexShader,G=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),at=l.getFragmentShaderID(M);let et=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),vt=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,Jt=!!M.map,Ot=!!M.matcap,Qt=!!st,D=!!M.aoMap,Pe=!!M.lightMap,Gt=!!M.bumpMap,Wt=!!M.normalMap,Tt=!!M.displacementMap,oe=!!M.emissiveMap,At=!!M.metalnessMap,S=!!M.roughnessMap,x=M.anisotropy>0,B=M.clearcoat>0,K=M.dispersion>0,tt=M.iridescence>0,Z=M.sheen>0,wt=M.transmission>0,ht=x&&!!M.anisotropyMap,mt=B&&!!M.clearcoatMap,qt=B&&!!M.clearcoatNormalMap,it=B&&!!M.clearcoatRoughnessMap,gt=tt&&!!M.iridescenceMap,Ct=tt&&!!M.iridescenceThicknessMap,Pt=Z&&!!M.sheenColorMap,_t=Z&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,Bt=!!M.specularColorMap,se=!!M.specularIntensityMap,L=wt&&!!M.transmissionMap,ct=wt&&!!M.thicknessMap,X=!!M.gradientMap,j=!!M.alphaMap,ft=M.alphaTest>0,ut=!!M.alphaHash,Ut=!!M.extensions,ue=Wn;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ue=n.toneMapping);let Me={shaderID:I,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:G,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:yt,batchingColor:yt&&z._colorsTexture!==null,instancing:vt,instancingColor:vt&&z.instanceColor!==null,instancingMorph:vt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ji,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:Ot,envMap:Qt,envMapMode:Qt&&st.mapping,envMapCubeUVHeight:R,aoMap:D,lightMap:Pe,bumpMap:Gt,normalMap:Wt,displacementMap:d&&Tt,emissiveMap:oe,normalMapObjectSpace:Wt&&M.normalMapType===Mu,normalMapTangentSpace:Wt&&M.normalMapType===yu,metalnessMap:At,roughnessMap:S,anisotropy:x,anisotropyMap:ht,clearcoat:B,clearcoatMap:mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:it,dispersion:K,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:Z,sheenColorMap:Pt,sheenRoughnessMap:_t,specularMap:Xt,specularColorMap:Bt,specularIntensityMap:se,transmission:wt,transmissionMap:L,thicknessMap:ct,gradientMap:X,opaque:M.transparent===!1&&M.blending===zi&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:ft,alphaHash:ut,combine:M.combine,mapUv:Jt&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:Pe&&_(M.lightMap.channel),bumpMapUv:Gt&&_(M.bumpMap.channel),normalMapUv:Wt&&_(M.normalMap.channel),displacementMapUv:Tt&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:At&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:ht&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(M.sheenRoughnessMap.channel),specularMapUv:Xt&&_(M.specularMap.channel),specularColorMapUv:Bt&&_(M.specularColorMap.channel),specularIntensityMapUv:se&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Wt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Jt||j),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:pt,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:nt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===ee,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function u(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(E(v,M),T(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){let v=g[M.type],C;if(v){let $=un[v];C=ld.clone($.uniforms)}else C=M.uniforms;return C}function O(M,v){let C;for(let $=0,z=h.length;$<z;$++){let q=h[$];if(q.cacheKey===v){C=q,++C.usedTimes;break}}return C===void 0&&(C=new _g(n,v,M,r),h.push(C)),C}function w(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:O,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function yg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Mg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function gc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _c(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,d,m,g,_,p){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=p),t++,u}function a(f,d,m,g,_,p){let u=o(f,d,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,d,m,g,_,p){let u=o(f,d,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||Mg),i.length>1&&i.sort(d||gc),s.length>1&&s.sort(d||gc)}function h(){for(let f=t,d=n.length;f<d;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function bg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new _c,n.set(i,[o])):s>=r.length?(o=new _c,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Sg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Zt};break;case"SpotLight":e={position:new F,direction:new F,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function wg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Eg=0;function Tg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ag(n){let t=new Sg,e=wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new fe,o=new fe;function a(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,E=0,T=0,b=0,O=0,w=0,A=0;c.sort(Tg);for(let M=0,v=c.length;M<v;M++){let C=c[M],$=C.color,z=C.intensity,q=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=$.r*z,f+=$.g*z,d+=$.b*z;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],z);A++}else if(C.isDirectionalLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let st=C.shadow,R=e.get(C);R.shadowIntensity=st.intensity,R.shadowBias=st.bias,R.shadowNormalBias=st.normalBias,R.shadowRadius=st.radius,R.shadowMapSize=st.mapSize,i.directionalShadow[m]=R,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=C.shadow.matrix,E++}i.directional[m]=Y,m++}else if(C.isSpotLight){let Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy($).multiplyScalar(z),Y.distance=q,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[_]=Y;let st=C.shadow;if(C.map&&(i.spotLightMap[O]=C.map,O++,st.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[_]=st.matrix,C.castShadow){let R=e.get(C);R.shadowIntensity=st.intensity,R.shadowBias=st.bias,R.shadowNormalBias=st.normalBias,R.shadowRadius=st.radius,R.shadowMapSize=st.mapSize,i.spotShadow[_]=R,i.spotShadowMap[_]=Q,b++}_++}else if(C.isRectAreaLight){let Y=t.get(C);Y.color.copy($).multiplyScalar(z),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=Y,p++}else if(C.isPointLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let st=C.shadow,R=e.get(C);R.shadowIntensity=st.intensity,R.shadowBias=st.bias,R.shadowNormalBias=st.normalBias,R.shadowRadius=st.radius,R.shadowMapSize=st.mapSize,R.shadowCameraNear=st.camera.near,R.shadowCameraFar=st.camera.far,i.pointShadow[g]=R,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=Y,g++}else if(C.isHemisphereLight){let Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(z),Y.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[u]=Y,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==b||P.numSpotMaps!==O||P.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+O-w,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=b,P.numSpotMaps=O,P.numLightProbes=A,i.version=Eg++)}function l(c,h){let f=0,d=0,m=0,g=0,_=0,p=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){let T=c[u];if(T.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(T.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(T.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){let b=i.hemi[_];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function xc(n){let t=new Ag(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xc(n),t.set(s,[a])):r>=o.length?(a=new xc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ea=class extends fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ta=class extends fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`;function Ig(n,t,e){let i=new mr,s=new Lt,r=new Lt,o=new de,a=new Ea({depthPacking:vu}),l=new Ta,c={},h=e.maxTextureSize,f={[Xn]:De,[De]:Xn,[tn]:tn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Rg,fragmentShader:Pg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Pn;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ke(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let u=this.type;this.render=function(w,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let M=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Gn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let z=u!==bn&&this.type===bn,q=u===bn&&this.type!==bn;for(let Q=0,Y=w.length;Q<Y;Q++){let st=w[Q],R=st.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);let I=R.getFrameExtents();if(s.multiply(I),r.copy(R.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/I.x),s.x=r.x*I.x,R.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/I.y),s.y=r.y*I.y,R.mapSize.y=r.y)),R.map===null||z===!0||q===!0){let H=this.type!==bn?{minFilter:nn,magFilter:nn}:{};R.map!==null&&R.map.dispose(),R.map=new Cn(s.x,s.y,H),R.map.texture.name=st.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();let W=R.getViewportCount();for(let H=0;H<W;H++){let nt=R.getViewport(H);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),$.viewport(o),R.updateMatrices(st,H),i=R.getFrustum(),b(A,P,R.camera,st,this.type)}R.isPointLightShadow!==!0&&this.type===bn&&E(R,P),R.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(M,v,C)};function E(w,A){let P=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,P,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,P,m,_,null)}function T(w,A,P,M){let v=null,C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)v=C;else if(v=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let $=v.uuid,z=A.uuid,q=c[$];q===void 0&&(q={},c[$]=q);let Q=q[z];Q===void 0&&(Q=v.clone(),q[z]=Q,A.addEventListener("dispose",O)),v=Q}if(v.visible=A.visible,v.wireframe=A.wireframe,M===bn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:f[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let $=n.properties.get(v);$.light=P}return v}function b(w,A,P,M,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let z=t.update(w),q=w.material;if(Array.isArray(q)){let Q=z.groups;for(let Y=0,st=Q.length;Y<st;Y++){let R=Q[Y],I=q[R.materialIndex];if(I&&I.visible){let W=T(w,I,M,v);w.onBeforeShadow(n,w,A,P,z,W,R),n.renderBufferDirect(P,null,z,W,w,R),w.onAfterShadow(n,w,A,P,z,W,R)}}}else if(q.visible){let Q=T(w,q,M,v);w.onBeforeShadow(n,w,A,P,z,Q,null),n.renderBufferDirect(P,null,z,Q,w,null),w.onAfterShadow(n,w,A,P,z,Q,null)}}let $=w.children;for(let z=0,q=$.length;z<q;z++)b($[z],A,P,M,v)}function O(w){w.target.removeEventListener("dispose",O);for(let P in c){let M=c[P],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Lg={[Ro]:Po,[Io]:Uo,[Lo]:No,[Gi]:Do,[Po]:Ro,[Uo]:Io,[No]:Lo,[Do]:Gi};function Dg(n,t){function e(){let L=!1,ct=new de,X=null,j=new de(0,0,0,0);return{setMask:function(ft){X!==ft&&!L&&(n.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){L=ft},setClear:function(ft,ut,Ut,ue,Me){Me===!0&&(ft*=ue,ut*=ue,Ut*=ue),ct.set(ft,ut,Ut,ue),j.equals(ct)===!1&&(n.clearColor(ft,ut,Ut,ue),j.copy(ct))},reset:function(){L=!1,X=null,j.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,X=null,j=null,ft=null;return{setReversed:function(ut){if(ct!==ut){let Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let ue=ft;ft=null,this.setClear(ue)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?et(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ut){X!==ut&&!L&&(n.depthMask(ut),X=ut)},setFunc:function(ut){if(ct&&(ut=Lg[ut]),j!==ut){switch(ut){case Ro:n.depthFunc(n.NEVER);break;case Po:n.depthFunc(n.ALWAYS);break;case Io:n.depthFunc(n.LESS);break;case Gi:n.depthFunc(n.LEQUAL);break;case Lo:n.depthFunc(n.EQUAL);break;case Do:n.depthFunc(n.GEQUAL);break;case Uo:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ut}},setLocked:function(ut){L=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),n.clearDepth(ut),ft=ut)},reset:function(){L=!1,X=null,j=null,ft=null,ct=!1}}}function s(){let L=!1,ct=null,X=null,j=null,ft=null,ut=null,Ut=null,ue=null,Me=null;return{setTest:function(te){L||(te?et(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(te){ct!==te&&!L&&(n.stencilMask(te),ct=te)},setFunc:function(te,Ze,mn){(X!==te||j!==Ze||ft!==mn)&&(n.stencilFunc(te,Ze,mn),X=te,j=Ze,ft=mn)},setOp:function(te,Ze,mn){(ut!==te||Ut!==Ze||ue!==mn)&&(n.stencilOp(te,Ze,mn),ut=te,Ut=Ze,ue=mn)},setLocked:function(te){L=te},setClear:function(te){Me!==te&&(n.clearStencil(te),Me=te)},reset:function(){L=!1,ct=null,X=null,j=null,ft=null,ut=null,Ut=null,ue=null,Me=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,u=null,E=null,T=null,b=null,O=null,w=null,A=new Zt(0,0,0),P=0,M=!1,v=null,C=null,$=null,z=null,q=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,st=0,R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(R)[1]),Y=st>=1):R.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Y=st>=2);let I=null,W={},H=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),ot=new de().fromArray(H),G=new de().fromArray(nt);function J(L,ct,X,j){let ft=new Uint8Array(4),ut=n.createTexture();n.bindTexture(L,ut),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<X;Ut++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ct+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ut}let at={};at[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(Gi),Gt(!1),Wt(vl),et(n.CULL_FACE),D(Gn);function et(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function pt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function vt(L,ct){return f[L]!==ct?(n.bindFramebuffer(L,ct),f[L]=ct,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ct),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function yt(L,ct){let X=m,j=!1;if(L){X=d.get(ct),X===void 0&&(X=[],d.set(ct,X));let ft=L.textures;if(X.length!==ft.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Ut=ft.length;ut<Ut;ut++)X[ut]=n.COLOR_ATTACHMENT0+ut;X.length=ft.length,j=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,j=!0);j&&n.drawBuffers(X)}function Jt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Ot={[oi]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};Ot[Yh]=n.MIN,Ot[$h]=n.MAX;let Qt={[Zh]:n.ZERO,[Jh]:n.ONE,[Kh]:n.SRC_COLOR,[Ao]:n.SRC_ALPHA,[iu]:n.SRC_ALPHA_SATURATE,[eu]:n.DST_COLOR,[Qh]:n.DST_ALPHA,[jh]:n.ONE_MINUS_SRC_COLOR,[Co]:n.ONE_MINUS_SRC_ALPHA,[nu]:n.ONE_MINUS_DST_COLOR,[tu]:n.ONE_MINUS_DST_ALPHA,[su]:n.CONSTANT_COLOR,[ru]:n.ONE_MINUS_CONSTANT_COLOR,[ou]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function D(L,ct,X,j,ft,ut,Ut,ue,Me,te){if(L===Gn){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(et(n.BLEND),_=!0),L!==Wh){if(L!==p||te!==M){if((u!==oi||b!==oi)&&(n.blendEquation(n.FUNC_ADD),u=oi,b=oi),te)switch(L){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.ONE,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,T=null,O=null,w=null,A.set(0,0,0),P=0,p=L,M=te}return}ft=ft||ct,ut=ut||X,Ut=Ut||j,(ct!==u||ft!==b)&&(n.blendEquationSeparate(Ot[ct],Ot[ft]),u=ct,b=ft),(X!==E||j!==T||ut!==O||Ut!==w)&&(n.blendFuncSeparate(Qt[X],Qt[j],Qt[ut],Qt[Ut]),E=X,T=j,O=ut,w=Ut),(ue.equals(A)===!1||Me!==P)&&(n.blendColor(ue.r,ue.g,ue.b,Me),A.copy(ue),P=Me),p=L,M=!1}function Pe(L,ct){L.side===tn?pt(n.CULL_FACE):et(n.CULL_FACE);let X=L.side===De;ct&&(X=!X),Gt(X),L.blending===zi&&L.transparent===!1?D(Gn):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){v!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),v=L)}function Wt(L){L!==Vh?(et(n.CULL_FACE),L!==C&&(L===vl?n.cullFace(n.BACK):L===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),C=L}function Tt(L){L!==$&&(Y&&n.lineWidth(L),$=L)}function oe(L,ct,X){L?(et(n.POLYGON_OFFSET_FILL),(z!==ct||q!==X)&&(n.polygonOffset(ct,X),z=ct,q=X)):pt(n.POLYGON_OFFSET_FILL)}function At(L){L?et(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function S(L){L===void 0&&(L=n.TEXTURE0+Q-1),I!==L&&(n.activeTexture(L),I=L)}function x(L,ct,X){X===void 0&&(I===null?X=n.TEXTURE0+Q-1:X=I);let j=W[X];j===void 0&&(j={type:void 0,texture:void 0},W[X]=j),(j.type!==L||j.texture!==ct)&&(I!==X&&(n.activeTexture(X),I=X),n.bindTexture(L,ct||at[L]),j.type=L,j.texture=ct)}function B(){let L=W[I];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(L){ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function _t(L){G.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),G.copy(L))}function Xt(L,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let j=X.get(L);j===void 0&&(j=n.getUniformBlockIndex(ct,L.name),X.set(L,j))}function Bt(L,ct){let j=c.get(ct).get(L);l.get(ct)!==j&&(n.uniformBlockBinding(ct,j,L.__bindingPointIndex),l.set(ct,j))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},I=null,W={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,u=null,E=null,T=null,b=null,O=null,w=null,A=new Zt(0,0,0),P=0,M=!1,v=null,C=null,$=null,z=null,q=null,ot.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:pt,bindFramebuffer:vt,drawBuffers:yt,useProgram:Jt,setBlending:D,setMaterial:Pe,setFlipSided:Gt,setCullFace:Wt,setLineWidth:Tt,setPolygonOffset:oe,setScissorTest:At,activeTexture:S,bindTexture:x,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:Bt,texStorage2D:qt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Pt,viewport:_t,reset:se}}function vc(n,t,e,i){let s=Ug(i);switch(e){case Lc:return n*t;case Uc:return n*t;case Nc:return n*t*2;case Fc:return n*t/s.components*s.byteLength;case qa:return n*t/s.components*s.byteLength;case Oc:return n*t*2/s.components*s.byteLength;case Ya:return n*t*2/s.components*s.byteLength;case Dc:return n*t*3/s.components*s.byteLength;case en:return n*t*4/s.components*s.byteLength;case $a:return n*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Go:return Math.max(n,16)*Math.max(t,8)/4;case ko:case Ho:return Math.max(n,8)*Math.max(t,8)/2;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rr:case aa:case la:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bc:case ca:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ug(n){switch(n){case Tn:case Rc:return{byteLength:1,components:1};case gs:case Pc:case Ms:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case ui:case Ga:case Sn:return{byteLength:4,components:1};case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ng(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):lr("canvas")}function _(S,x,B){let K=1,tt=At(S);if((tt.width>B||tt.height>B)&&(K=B/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Z=Math.floor(K*tt.width),wt=Math.floor(K*tt.height);f===void 0&&(f=g(Z,wt));let ht=x?g(Z,wt):f;return ht.width=Z,ht.height=wt,ht.getContext("2d").drawImage(S,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+wt+")."),ht}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),S;return S}function p(S){return S.generateMipmaps}function u(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(S,x,B,K,tt=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=x;if(x===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),x===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){let wt=tt?Rr:Yt.getTransfer(K);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=wt===ee?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(S,x){let B;return S?x===null||x===ui||x===qi?B=n.DEPTH24_STENCIL8:x===Sn?B=n.DEPTH32F_STENCIL8:x===gs&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ui||x===qi?B=n.DEPTH_COMPONENT24:x===Sn?B=n.DEPTH_COMPONENT32F:x===gs&&(B=n.DEPTH_COMPONENT16),B}function O(S,x){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==nn&&S.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function w(S){let x=S.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&h.delete(x)}function A(S){let x=S.target;x.removeEventListener("dispose",A),v(x)}function P(S){let x=i.get(S);if(x.__webglInit===void 0)return;let B=S.source,K=d.get(B);if(K){let tt=K[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(S),Object.keys(K).length===0&&d.delete(B)}i.remove(S)}function M(S){let x=i.get(S);n.deleteTexture(x.__webglTexture);let B=S.source,K=d.get(B);delete K[x.__cacheKey],o.memory.textures--}function v(S){let x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let tt=0;tt<x.__webglFramebuffer[K].length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[K][tt]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=S.textures;for(let K=0,tt=B.length;K<tt;K++){let Z=i.get(B[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(S)}let C=0;function $(){C=0}function z(){let S=C;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),C+=1,S}function q(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function Q(S,x){let B=i.get(S);if(S.isVideoTexture&&Tt(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){let K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,S,x);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function Y(S,x){let B=i.get(S);if(S.version>0&&B.__version!==S.version){G(B,S,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function st(S,x){let B=i.get(S);if(S.version>0&&B.__version!==S.version){G(B,S,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function R(S,x){let B=i.get(S);if(S.version>0&&B.__version!==S.version){J(B,S,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}let I={[Bo]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},W={[nn]:n.NEAREST,[_u]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Kr]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},H={[bu]:n.NEVER,[Cu]:n.ALWAYS,[Su]:n.LESS,[zc]:n.LEQUAL,[wu]:n.EQUAL,[Au]:n.GEQUAL,[Eu]:n.GREATER,[Tu]:n.NOTEQUAL};function nt(S,x){if(x.type===Sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===Kr||x.magFilter===Ps||x.magFilter===hi||x.minFilter===dn||x.minFilter===Kr||x.minFilter===Ps||x.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,I[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,I[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,I[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,W[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,W[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,H[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===nn||x.minFilter!==Ps&&x.minFilter!==hi||x.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ot(S,x){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",w));let K=x.source,tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));let Z=q(x);if(Z!==S.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[Z].usedTimes++;let wt=tt[S.__cacheKey];wt!==void 0&&(tt[S.__cacheKey].usedTimes--,wt.usedTimes===0&&M(x)),S.__cacheKey=Z,S.__webglTexture=tt[Z].texture}return B}function G(S,x,B){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);let tt=ot(S,x),Z=x.source;e.bindTexture(K,S.__webglTexture,n.TEXTURE0+B);let wt=i.get(Z);if(Z.version!==wt.__version||tt===!0){e.activeTexture(n.TEXTURE0+B);let ht=Yt.getPrimaries(Yt.workingColorSpace),mt=x.colorSpace===Vn?null:Yt.getPrimaries(x.colorSpace),qt=x.colorSpace===Vn||ht===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let it=_(x.image,!1,s.maxTextureSize);it=oe(x,it);let gt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Pt=T(x.internalFormat,gt,Ct,x.colorSpace,x.isVideoTexture);nt(K,x);let _t,Xt=x.mipmaps,Bt=x.isVideoTexture!==!0,se=wt.__version===void 0||tt===!0,L=Z.dataReady,ct=O(x,it);if(x.isDepthTexture)Pt=b(x.format===Yi,x.type),se&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Pt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,gt,Ct,null));else if(x.isDataTexture)if(Xt.length>0){Bt&&se&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let X=0,j=Xt.length;X<j;X++)_t=Xt[X],Bt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,X,Pt,_t.width,_t.height,0,gt,Ct,_t.data);x.generateMipmaps=!1}else Bt?(se&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,it.width,it.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,gt,Ct,it.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,gt,Ct,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Pt,Xt[0].width,Xt[0].height,it.depth);for(let X=0,j=Xt.length;X<j;X++)if(_t=Xt[X],x.format!==en)if(gt!==null)if(Bt){if(L)if(x.layerUpdates.size>0){let ft=vc(_t.width,_t.height,x.format,x.type);for(let ut of x.layerUpdates){let Ut=_t.data.subarray(ut*ft/_t.data.BYTES_PER_ELEMENT,(ut+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ut,_t.width,_t.height,1,gt,Ut)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,it.depth,gt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Pt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,it.depth,gt,Ct,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Pt,_t.width,_t.height,it.depth,0,gt,Ct,_t.data)}else{Bt&&se&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let X=0,j=Xt.length;X<j;X++)_t=Xt[X],x.format!==en?gt!==null?Bt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,X,Pt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(x.isDataArrayTexture)if(Bt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Pt,it.width,it.height,it.depth),L)if(x.layerUpdates.size>0){let X=vc(it.width,it.height,x.format,x.type);for(let j of x.layerUpdates){let ft=it.data.subarray(j*X/it.data.BYTES_PER_ELEMENT,(j+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,gt,Ct,ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Ct,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,gt,Ct,it.data);else if(x.isData3DTexture)Bt?(se&&e.texStorage3D(n.TEXTURE_3D,ct,Pt,it.width,it.height,it.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Ct,it.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,gt,Ct,it.data);else if(x.isFramebufferTexture){if(se)if(Bt)e.texStorage2D(n.TEXTURE_2D,ct,Pt,it.width,it.height);else{let X=it.width,j=it.height;for(let ft=0;ft<ct;ft++)e.texImage2D(n.TEXTURE_2D,ft,Pt,X,j,0,gt,Ct,null),X>>=1,j>>=1}}else if(Xt.length>0){if(Bt&&se){let X=At(Xt[0]);e.texStorage2D(n.TEXTURE_2D,ct,Pt,X.width,X.height)}for(let X=0,j=Xt.length;X<j;X++)_t=Xt[X],Bt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,gt,Ct,_t):e.texImage2D(n.TEXTURE_2D,X,Pt,gt,Ct,_t);x.generateMipmaps=!1}else if(Bt){if(se){let X=At(it);e.texStorage2D(n.TEXTURE_2D,ct,Pt,X.width,X.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ct,it)}else e.texImage2D(n.TEXTURE_2D,0,Pt,gt,Ct,it);p(x)&&u(K),wt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function J(S,x,B){if(x.image.length!==6)return;let K=ot(S,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+B);let Z=i.get(tt);if(tt.version!==Z.__version||K===!0){e.activeTexture(n.TEXTURE0+B);let wt=Yt.getPrimaries(Yt.workingColorSpace),ht=x.colorSpace===Vn?null:Yt.getPrimaries(x.colorSpace),mt=x.colorSpace===Vn||wt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let qt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let j=0;j<6;j++)!qt&&!it?gt[j]=_(x.image[j],!0,s.maxCubemapSize):gt[j]=it?x.image[j].image:x.image[j],gt[j]=oe(x,gt[j]);let Ct=gt[0],Pt=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),Xt=T(x.internalFormat,Pt,_t,x.colorSpace),Bt=x.isVideoTexture!==!0,se=Z.__version===void 0||K===!0,L=tt.dataReady,ct=O(x,Ct);nt(n.TEXTURE_CUBE_MAP,x);let X;if(qt){Bt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Xt,Ct.width,Ct.height);for(let j=0;j<6;j++){X=gt[j].mipmaps;for(let ft=0;ft<X.length;ft++){let ut=X[ft];x.format!==en?Pt!==null?Bt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,ut.width,ut.height,Pt,_t,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,Xt,ut.width,ut.height,0,Pt,_t,ut.data)}}}else{if(X=x.mipmaps,Bt&&se){X.length>0&&ct++;let j=At(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Xt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,gt[j].width,gt[j].height,Pt,_t,gt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xt,gt[j].width,gt[j].height,0,Pt,_t,gt[j].data);for(let ft=0;ft<X.length;ft++){let Ut=X[ft].image[j].image;Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Ut.width,Ut.height,Pt,_t,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,Xt,Ut.width,Ut.height,0,Pt,_t,Ut.data)}}else{Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,_t,gt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xt,Pt,_t,gt[j]);for(let ft=0;ft<X.length;ft++){let ut=X[ft];Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Pt,_t,ut.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,Xt,Pt,_t,ut.image[j])}}}p(x)&&u(n.TEXTURE_CUBE_MAP),Z.__version=tt.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function at(S,x,B,K,tt,Z){let wt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),mt=T(B.internalFormat,wt,ht,B.colorSpace),qt=i.get(x),it=i.get(B);if(it.__renderTarget=x,!qt.__hasExternalTextures){let gt=Math.max(1,x.width>>Z),Ct=Math.max(1,x.height>>Z);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,mt,gt,Ct,x.depth,0,wt,ht,null):e.texImage2D(tt,Z,mt,gt,Ct,0,wt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),Wt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,tt,it.__webglTexture,0,Gt(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,tt,it.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(S,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){let K=x.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Z=b(x.stencilBuffer,tt),wt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Gt(x);Wt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Z,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,S)}else{let K=x.textures;for(let tt=0;tt<K.length;tt++){let Z=K[tt],wt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),mt=T(Z.internalFormat,wt,ht,Z.colorSpace),qt=Gt(x);B&&Wt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,mt,x.width,x.height):Wt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt,mt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,mt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);let tt=K.__webglTexture,Z=Gt(x);if(x.depthTexture.format===ki)Wt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Yi)Wt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function vt(S){let x=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let K=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=K}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pt(x.__webglFramebuffer,S)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),et(x.__webglDepthbuffer[K],S,!1);else{let tt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),et(x.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(S,x,B){let K=i.get(S);x!==void 0&&at(K.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&vt(S)}function Jt(S){let x=S.texture,B=i.get(S),K=i.get(x);S.addEventListener("dispose",A);let tt=S.textures,Z=S.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let mt=0;mt<x.mipmaps.length;mt++)B.__webglFramebuffer[ht][mt]=n.createFramebuffer()}else B.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)B.__webglFramebuffer[ht]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ht=0,mt=tt.length;ht<mt;ht++){let qt=i.get(tt[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Wt(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){let mt=tt[ht];B.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);let qt=r.convert(mt.format,mt.colorSpace),it=r.convert(mt.type),gt=T(mt.internalFormat,qt,it,mt.colorSpace,S.isXRRenderTarget===!0),Ct=Gt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,gt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),et(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),nt(n.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)at(B.__webglFramebuffer[ht][mt],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else at(B.__webglFramebuffer[ht],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(x)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,mt=tt.length;ht<mt;ht++){let qt=tt[ht],it=i.get(qt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),nt(n.TEXTURE_2D,qt),at(B.__webglFramebuffer,S,qt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),p(qt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ht=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),nt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)at(B.__webglFramebuffer[mt],S,x,n.COLOR_ATTACHMENT0,ht,mt);else at(B.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,ht,0);p(x)&&u(ht),e.unbindTexture()}S.depthBuffer&&vt(S)}function Ot(S){let x=S.textures;for(let B=0,K=x.length;B<K;B++){let tt=x[B];if(p(tt)){let Z=E(S),wt=i.get(tt).__webglTexture;e.bindTexture(Z,wt),u(Z),e.unbindTexture()}}}let Qt=[],D=[];function Pe(S){if(S.samples>0){if(Wt(S)===!1){let x=S.textures,B=S.width,K=S.height,tt=n.COLOR_BUFFER_BIT,Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(S),ht=x.length>1;if(ht)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);let qt=i.get(x[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,tt,n.NEAREST),l===!0&&(Qt.length=0,D.length=0,Qt.push(n.COLOR_ATTACHMENT0+mt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Qt.push(Z),D.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);let qt=i.get(x[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Gt(S){return Math.min(s.maxSamples,S.samples)}function Wt(S){let x=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function oe(S,x){let B=S.colorSpace,K=S.format,tt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==ji&&B!==Vn&&(Yt.getTransfer(B)===ee?(K!==en||tt!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function At(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=st,this.setTextureCube=R,this.rebindTextures=yt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Wt}function Fg(n,t){function e(i,s=Vn){let r,o=Yt.getTransfer(s);if(i===Tn)return n.UNSIGNED_BYTE;if(i===Wa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rc)return n.BYTE;if(i===Pc)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Ga)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Ms)return n.HALF_FLOAT;if(i===Lc)return n.ALPHA;if(i===Dc)return n.RGB;if(i===en)return n.RGBA;if(i===Uc)return n.LUMINANCE;if(i===Nc)return n.LUMINANCE_ALPHA;if(i===ki)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Fc)return n.RED;if(i===qa)return n.RED_INTEGER;if(i===Oc)return n.RG;if(i===Ya)return n.RG_INTEGER;if(i===$a)return n.RGBA_INTEGER;if(i===er||i===nr||i===ir||i===sr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ko||i===Vo||i===Ho||i===Go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===Xo||i===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wo||i===Xo)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yo||i===$o||i===Zo||i===Jo||i===Ko||i===jo||i===Qo||i===ta||i===ea||i===na||i===ia||i===sa||i===ra||i===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$o)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ko)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ta)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ea)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===na)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ia)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ra)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rr||i===aa||i===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===rr)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bc||i===ca||i===ha||i===ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===rr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Aa=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Hn=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ca=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new fn({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ra=class extends An{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null,_=new Ca,p=e.getContextAttributes(),u=null,E=null,T=[],b=[],O=new Lt,w=null,A=new Ce;A.viewport=new de;let P=new Ce;P.viewport=new de;let M=[A,P],v=new Aa,C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=T[G];return J===void 0&&(J=new ms,T[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=T[G];return J===void 0&&(J=new ms,T[G]=J),J.getGripSpace()},this.getHand=function(G){let J=T[G];return J===void 0&&(J=new ms,T[G]=J),J.getHandSpace()};function z(G){let J=b.indexOf(G.inputSource);if(J===-1)return;let at=T[J];at!==void 0&&(at.update(G.inputSource,G.frame,c||o),at.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Q);for(let G=0;G<T.length;G++){let J=b[G];J!==null&&(b[G]=null,T[G].disconnect(J))}C=null,$=null,_.reset(),t.setRenderTarget(u),m=null,d=null,f=null,s=null,E=null,ot.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Cn(m.framebufferWidth,m.framebufferHeight,{format:en,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,at=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?Yi:ki,at=p.stencil?qi:ui);let pt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Cn(d.textureWidth,d.textureHeight,{format:en,type:Tn,depthTexture:new _r(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(G){for(let J=0;J<G.removed.length;J++){let at=G.removed[J],et=b.indexOf(at);et>=0&&(b[et]=null,T[et].disconnect(at))}for(let J=0;J<G.added.length;J++){let at=G.added[J],et=b.indexOf(at);if(et===-1){for(let vt=0;vt<T.length;vt++)if(vt>=b.length){b.push(at),et=vt;break}else if(b[vt]===null){b[vt]=at,et=vt;break}if(et===-1)break}let pt=T[et];pt&&pt.connect(at)}}let Y=new F,st=new F;function R(G,J,at){Y.setFromMatrixPosition(J.matrixWorld),st.setFromMatrixPosition(at.matrixWorld);let et=Y.distanceTo(st),pt=J.projectionMatrix.elements,vt=at.projectionMatrix.elements,yt=pt[14]/(pt[10]-1),Jt=pt[14]/(pt[10]+1),Ot=(pt[9]+1)/pt[5],Qt=(pt[9]-1)/pt[5],D=(pt[8]-1)/pt[0],Pe=(vt[8]+1)/vt[0],Gt=yt*D,Wt=yt*Pe,Tt=et/(-D+Pe),oe=Tt*-D;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(oe),G.translateZ(Tt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),pt[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let At=yt+Tt,S=Jt+Tt,x=Gt-oe,B=Wt+(et-oe),K=Ot*Jt/S*At,tt=Qt*Jt/S*At;G.projectionMatrix.makePerspective(x,B,K,tt,At,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function I(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,at=G.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(at=_.depthFar)),v.near=P.near=A.near=J,v.far=P.far=A.far=at,(C!==v.near||$!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,$=v.far),A.layers.mask=G.layers.mask|2,P.layers.mask=G.layers.mask|4,v.layers.mask=A.layers.mask|P.layers.mask;let et=G.parent,pt=v.cameras;I(v,et);for(let vt=0;vt<pt.length;vt++)I(pt[vt],et);pt.length===2?R(v,A,P):v.projectionMatrix.copy(A.projectionMatrix),W(G,v,et)};function W(G,J,at){at===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(at.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=_s*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let H=null;function nt(G,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let at=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let et=!1;at.length!==v.cameras.length&&(v.cameras.length=0,et=!0);for(let vt=0;vt<at.length;vt++){let yt=at[vt],Jt=null;if(m!==null)Jt=m.getViewport(yt);else{let Qt=f.getViewSubImage(d,yt);Jt=Qt.viewport,vt===0&&(t.setRenderTargetTextures(E,Qt.colorTexture,d.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(E))}let Ot=M[vt];Ot===void 0&&(Ot=new Ce,Ot.layers.enable(vt),Ot.viewport=new de,M[vt]=Ot),Ot.matrix.fromArray(yt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(yt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),vt===0&&(v.matrix.copy(Ot.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),et===!0&&v.cameras.push(Ot)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let vt=f.getDepthInformation(at[0]);vt&&vt.isValid&&vt.texture&&_.init(t,vt,s.renderState)}}for(let at=0;at<T.length;at++){let et=b[at],pt=T[at];et!==null&&pt!==void 0&&pt.update(et,J,c||o)}H&&H(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let ot=new Wc;ot.setAnimationLoop(nt),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}},si=new Rn,kg=new fe;function Vg(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Gc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,T,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,E,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===De&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===De&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let E=t.get(u),T=E.envMap,b=E.envMapRotation;T&&(p.envMap.value=T,si.copy(b),si.x*=-1,si.y*=-1,si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),p.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(si)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=T*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===De&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hg(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){let b=T.program;i.uniformBlockBinding(E,b)}function c(E,T){let b=s[E.id];b===void 0&&(g(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",p));let O=T.program;i.updateUBOMapping(E,O);let w=t.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function h(E){let T=f();E.__bindingPointIndex=T;let b=n.createBuffer(),O=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,O,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let T=s[E.id],b=E.uniforms,O=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,A=b.length;w<A;w++){let P=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,v=P.length;M<v;M++){let C=P[M];if(m(C,w,M,O)===!0){let $=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],q=0;for(let Q=0;Q<z.length;Q++){let Y=z[Q],st=_(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,$+q,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,q),q+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,T,b,O){let w=E.value,A=T+"_"+b;if(O[A]===void 0)return typeof w=="number"||typeof w=="boolean"?O[A]=w:O[A]=w.clone(),!0;{let P=O[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return O[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){let T=E.uniforms,b=0,O=16;for(let A=0,P=T.length;A<P;A++){let M=Array.isArray(T[A])?T[A]:[T[A]];for(let v=0,C=M.length;v<C;v++){let $=M[v],z=Array.isArray($.value)?$.value:[$.value];for(let q=0,Q=z.length;q<Q;q++){let Y=z[q],st=_(Y),R=b%O,I=R%st.boundary,W=R+I;b+=I,W!==0&&O-W<st.storage&&(b+=O-W),$.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=st.storage}}}let w=b%O;return w>0&&(b+=O-w),E.__size=b,E.__cache={},this}function _(E){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function p(E){let T=E.target;T.removeEventListener("dispose",p);let b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var xr=class{constructor(t={}){let{canvas:e=Xu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,u=null,E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Wn,this.toneMappingExposure=1;let b=this,O=!1,w=0,A=0,P=null,M=-1,v=null,C=new de,$=new de,z=null,q=new Zt(0),Q=0,Y=e.width,st=e.height,R=1,I=null,W=null,H=new de(0,0,Y,st),nt=new de(0,0,Y,st),ot=!1,G=new mr,J=!1,at=!1,et=new fe,pt=new fe,vt=new F,yt=new de,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function Qt(){return P===null?R:1}let D=i;function Pe(y,U){return e.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){let U="webgl2";if(D=Pe(U,y),D===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Gt,Wt,Tt,oe,At,S,x,B,K,tt,Z,wt,ht,mt,qt,it,gt,Ct,Pt,_t,Xt,Bt,se,L;function ct(){Gt=new sm(D),Gt.init(),Bt=new Fg(D,Gt),Wt=new jp(D,Gt,t,Bt),Tt=new Dg(D,Gt),Wt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),oe=new am(D),At=new yg,S=new Ng(D,Gt,Tt,At,Wt,Bt,oe),x=new tm(b),B=new im(b),K=new fd(D),se=new Jp(D,K),tt=new rm(D,K,oe,se),Z=new cm(D,tt,K,oe),Pt=new lm(D,Wt,S),it=new Qp(At),wt=new vg(b,x,B,Gt,Wt,se,it),ht=new Vg(b,At),mt=new bg,qt=new Cg(Gt),Ct=new Zp(b,x,B,Tt,Z,m,l),gt=new Ig(b,Z,Wt),L=new Hg(D,oe,Wt,Tt),_t=new Kp(D,Gt,oe),Xt=new om(D,Gt,oe),oe.programs=wt.programs,b.capabilities=Wt,b.extensions=Gt,b.properties=At,b.renderLists=mt,b.shadowMap=gt,b.state=Tt,b.info=oe}ct();let X=new Ra(b,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(y){y!==void 0&&(R=y,this.setSize(Y,st,!1))},this.getSize=function(y){return y.set(Y,st)},this.setSize=function(y,U,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,st=U,e.width=Math.floor(y*R),e.height=Math.floor(U*R),k===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*R,st*R).floor()},this.setDrawingBufferSize=function(y,U,k){Y=y,st=U,R=k,e.width=Math.floor(y*k),e.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(H)},this.setViewport=function(y,U,k,V){y.isVector4?H.set(y.x,y.y,y.z,y.w):H.set(y,U,k,V),Tt.viewport(C.copy(H).multiplyScalar(R).round())},this.getScissor=function(y){return y.copy(nt)},this.setScissor=function(y,U,k,V){y.isVector4?nt.set(y.x,y.y,y.z,y.w):nt.set(y,U,k,V),Tt.scissor($.copy(nt).multiplyScalar(R).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(y){Tt.setScissorTest(ot=y)},this.setOpaqueSort=function(y){I=y},this.setTransparentSort=function(y){W=y},this.getClearColor=function(y){return y.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(y=!0,U=!0,k=!0){let V=0;if(y){let N=!1;if(P!==null){let rt=P.texture.format;N=rt===$a||rt===Ya||rt===qa}if(N){let rt=P.texture.type,dt=rt===Tn||rt===ui||rt===gs||rt===qi||rt===Wa||rt===Xa,Mt=Ct.getClearColor(),bt=Ct.getClearAlpha(),It=Mt.r,Nt=Mt.g,St=Mt.b;dt?(g[0]=It,g[1]=Nt,g[2]=St,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=It,_[1]=Nt,_[2]=St,_[3]=bt,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),qt.dispose(),At.dispose(),x.dispose(),B.dispose(),Z.dispose(),se.dispose(),L.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",ul),X.removeEventListener("sessionend",dl),jn.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let y=oe.autoReset,U=gt.enabled,k=gt.autoUpdate,V=gt.needsUpdate,N=gt.type;ct(),oe.autoReset=y,gt.enabled=U,gt.autoUpdate=k,gt.needsUpdate=V,gt.type=N}function ut(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ut(y){let U=y.target;U.removeEventListener("dispose",Ut),ue(U)}function ue(y){Me(y),At.remove(y)}function Me(y){let U=At.get(y).programs;U!==void 0&&(U.forEach(function(k){wt.releaseProgram(k)}),y.isShaderMaterial&&wt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,V,N,rt){U===null&&(U=Jt);let dt=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Bh(y,U,k,V,N);Tt.setMaterial(V,dt);let bt=k.index,It=1;if(V.wireframe===!0){if(bt=tt.getWireframeAttribute(k),bt===void 0)return;It=2}let Nt=k.drawRange,St=k.attributes.position,$t=Nt.start*It,re=(Nt.start+Nt.count)*It;rt!==null&&($t=Math.max($t,rt.start*It),re=Math.min(re,(rt.start+rt.count)*It)),bt!==null?($t=Math.max($t,0),re=Math.min(re,bt.count)):St!=null&&($t=Math.max($t,0),re=Math.min(re,St.count));let ae=re-$t;if(ae<0||ae===1/0)return;se.setup(N,V,Mt,k,bt);let Ie,Kt=_t;if(bt!==null&&(Ie=K.get(bt),Kt=Xt,Kt.setIndex(Ie)),N.isMesh)V.wireframe===!0?(Tt.setLineWidth(V.wireframeLinewidth*Qt()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(N.isLine){let Et=V.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*Qt()),N.isLineSegments?Kt.setMode(D.LINES):N.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else N.isPoints?Kt.setMode(D.POINTS):N.isSprite&&Kt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Et=N._multiDrawStarts,gn=N._multiDrawCounts,jt=N._multiDrawCount,Je=bt?K.get(bt).bytesPerElement:1,bi=At.get(V).currentProgram.getUniforms();for(let Fe=0;Fe<jt;Fe++)bi.setValue(D,"_gl_DrawID",Fe),Kt.render(Et[Fe]/Je,gn[Fe])}else if(N.isInstancedMesh)Kt.renderInstances($t,ae,N.count);else if(k.isInstancedBufferGeometry){let Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,gn=Math.min(k.instanceCount,Et);Kt.renderInstances($t,ae,gn)}else Kt.render($t,ae)};function te(y,U,k){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=De,y.needsUpdate=!0,Rs(y,U,k),y.side=Xn,y.needsUpdate=!0,Rs(y,U,k),y.side=tn):Rs(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),u=qt.get(k),u.init(U),T.push(u),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),y!==k&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let rt=N.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){let Mt=rt[dt];te(Mt,k,N),V.add(Mt)}else te(rt,k,N),V.add(rt)}),T.pop(),u=null,V},this.compileAsync=function(y,U,k=null){let V=this.compile(y,U,k);return new Promise(N=>{function rt(){if(V.forEach(function(dt){At.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){N(y);return}setTimeout(rt,10)}Gt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ze=null;function mn(y){Ze&&Ze(y)}function ul(){jn.stop()}function dl(){jn.start()}let jn=new Wc;jn.setAnimationLoop(mn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(y){Ze=y,X.setAnimationLoop(y),y===null?jn.stop():jn.start()},X.addEventListener("sessionstart",ul),X.addEventListener("sessionend",dl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,P),u=qt.get(y,T.length),u.init(U),T.push(u),pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(pt),at=this.localClippingEnabled,J=it.init(this.clippingPlanes,at),p=mt.get(y,E.length),p.init(),E.push(p),X.enabled===!0&&X.isPresenting===!0){let rt=b.xr.getDepthSensingMesh();rt!==null&&Jr(rt,U,-1/0,b.sortObjects)}Jr(y,U,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(I,W),Ot=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ot&&Ct.addToRenderList(p,y),this.info.render.frame++,J===!0&&it.beginShadows();let k=u.state.shadowsArray;gt.render(k,y,U),J===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){let rt=U.cameras;if(N.length>0)for(let dt=0,Mt=rt.length;dt<Mt;dt++){let bt=rt[dt];pl(V,N,y,bt)}Ot&&Ct.render(y);for(let dt=0,Mt=rt.length;dt<Mt;dt++){let bt=rt[dt];fl(p,y,bt,bt.viewport)}}else N.length>0&&pl(V,N,y,U),Ot&&Ct.render(y),fl(p,y,U);P!==null&&(S.updateMultisampleRenderTarget(P),S.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(b,y,U),se.resetDefaultState(),M=-1,v=null,T.pop(),T.length>0?(u=T[T.length-1],J===!0&&it.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Jr(y,U,k,V){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||G.intersectsSprite(y)){V&&yt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pt);let dt=Z.update(y),Mt=y.material;Mt.visible&&p.push(y,dt,Mt,k,yt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||G.intersectsObject(y))){let dt=Z.update(y),Mt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),yt.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),yt.copy(dt.boundingSphere.center)),yt.applyMatrix4(y.matrixWorld).applyMatrix4(pt)),Array.isArray(Mt)){let bt=dt.groups;for(let It=0,Nt=bt.length;It<Nt;It++){let St=bt[It],$t=Mt[St.materialIndex];$t&&$t.visible&&p.push(y,dt,$t,k,yt.z,St)}}else Mt.visible&&p.push(y,dt,Mt,k,yt.z,null)}}let rt=y.children;for(let dt=0,Mt=rt.length;dt<Mt;dt++)Jr(rt[dt],U,k,V)}function fl(y,U,k,V){let N=y.opaque,rt=y.transmissive,dt=y.transparent;u.setupLightsView(k),J===!0&&it.setGlobalState(b.clippingPlanes,k),V&&Tt.viewport(C.copy(V)),N.length>0&&Cs(N,U,k),rt.length>0&&Cs(rt,U,k),dt.length>0&&Cs(dt,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function pl(y,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new Cn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Ms:Tn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let rt=u.state.transmissionRenderTarget[V.id],dt=V.viewport||C;rt.setSize(dt.z,dt.w);let Mt=b.getRenderTarget();b.setRenderTarget(rt),b.getClearColor(q),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),Ot&&Ct.render(k);let bt=b.toneMapping;b.toneMapping=Wn;let It=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),J===!0&&it.setGlobalState(b.clippingPlanes,V),Cs(y,k,V),S.updateMultisampleRenderTarget(rt),S.updateRenderTargetMipmap(rt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let St=0,$t=U.length;St<$t;St++){let re=U[St],ae=re.object,Ie=re.geometry,Kt=re.material,Et=re.group;if(Kt.side===tn&&ae.layers.test(V.layers)){let gn=Kt.side;Kt.side=De,Kt.needsUpdate=!0,ml(ae,k,V,Ie,Kt,Et),Kt.side=gn,Kt.needsUpdate=!0,Nt=!0}}Nt===!0&&(S.updateMultisampleRenderTarget(rt),S.updateRenderTargetMipmap(rt))}b.setRenderTarget(Mt),b.setClearColor(q,Q),It!==void 0&&(V.viewport=It),b.toneMapping=bt}function Cs(y,U,k){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=y.length;N<rt;N++){let dt=y[N],Mt=dt.object,bt=dt.geometry,It=V===null?dt.material:V,Nt=dt.group;Mt.layers.test(k.layers)&&ml(Mt,U,k,bt,It,Nt)}}function ml(y,U,k,V,N,rt){y.onBeforeRender(b,U,k,V,N,rt),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(b,U,k,V,y,rt),N.transparent===!0&&N.side===tn&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,b.renderBufferDirect(k,U,V,N,y,rt),N.side=Xn,N.needsUpdate=!0,b.renderBufferDirect(k,U,V,N,y,rt),N.side=tn):b.renderBufferDirect(k,U,V,N,y,rt),y.onAfterRender(b,U,k,V,N,rt)}function Rs(y,U,k){U.isScene!==!0&&(U=Jt);let V=At.get(y),N=u.state.lights,rt=u.state.shadowsArray,dt=N.state.version,Mt=wt.getParameters(y,N.state,rt,U,k),bt=wt.getProgramCacheKey(Mt),It=V.programs;V.environment=y.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(y.isMeshStandardMaterial?B:x).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",Ut),It=new Map,V.programs=It);let Nt=It.get(bt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===dt)return _l(y,Mt),Nt}else Mt.uniforms=wt.getUniforms(y),y.onBeforeCompile(Mt,b),Nt=wt.acquireProgram(Mt,bt),It.set(bt,Nt),V.uniforms=Mt.uniforms;let St=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=it.uniform),_l(y,Mt),V.needsLights=kh(y),V.lightsStateVersion=dt,V.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function gl(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Hi.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function _l(y,U){let k=At.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Bh(y,U,k,V,N){U.isScene!==!0&&(U=Jt),S.resetTextureUnits();let rt=U.fog,dt=V.isMeshStandardMaterial?U.environment:null,Mt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ji,bt=(V.isMeshStandardMaterial?B:x).get(V.envMap||dt),It=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),St=!!k.morphAttributes.position,$t=!!k.morphAttributes.normal,re=!!k.morphAttributes.color,ae=Wn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=b.toneMapping);let Ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=Ie!==void 0?Ie.length:0,Et=At.get(V),gn=u.state.lights;if(J===!0&&(at===!0||y!==v)){let Ge=y===v&&V.id===M;it.setState(V,y,Ge)}let jt=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==gn.state.version||Et.outputColorSpace!==Mt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==bt||V.fog===!0&&Et.fog!==rt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==It||Et.vertexTangents!==Nt||Et.morphTargets!==St||Et.morphNormals!==$t||Et.morphColors!==re||Et.toneMapping!==ae||Et.morphTargetsCount!==Kt)&&(jt=!0):(jt=!0,Et.__version=V.version);let Je=Et.currentProgram;jt===!0&&(Je=Rs(V,U,N));let bi=!1,Fe=!1,ss=!1,le=Je.getUniforms(),hn=Et.uniforms;if(Tt.useProgram(Je.program)&&(bi=!0,Fe=!0,ss=!0),V.id!==M&&(M=V.id,Fe=!0),bi||v!==y){Tt.buffers.depth.getReversed()?(et.copy(y.projectionMatrix),Yu(et),$u(et),le.setValue(D,"projectionMatrix",et)):le.setValue(D,"projectionMatrix",y.projectionMatrix),le.setValue(D,"viewMatrix",y.matrixWorldInverse);let Dn=le.map.cameraPosition;Dn!==void 0&&Dn.setValue(D,vt.setFromMatrixPosition(y.matrixWorld)),Wt.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Fe=!0,ss=!0)}if(N.isSkinnedMesh){le.setOptional(D,N,"bindMatrix"),le.setOptional(D,N,"bindMatrixInverse");let Ge=N.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),le.setValue(D,"boneTexture",Ge.boneTexture,S))}N.isBatchedMesh&&(le.setOptional(D,N,"batchingTexture"),le.setValue(D,"batchingTexture",N._matricesTexture,S),le.setOptional(D,N,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",N._indirectTexture,S),le.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",N._colorsTexture,S));let rs=k.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Pt.update(N,k,Je),(Fe||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,le.setValue(D,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hn.envMap.value=bt,hn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Fe&&(le.setValue(D,"toneMappingExposure",b.toneMappingExposure),Et.needsLights&&zh(hn,ss),rt&&V.fog===!0&&ht.refreshFogUniforms(hn,rt),ht.refreshMaterialUniforms(hn,V,R,st,u.state.transmissionRenderTarget[y.id]),Hi.upload(D,gl(Et),hn,S)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hi.upload(D,gl(Et),hn,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(D,"center",N.center),le.setValue(D,"modelViewMatrix",N.modelViewMatrix),le.setValue(D,"normalMatrix",N.normalMatrix),le.setValue(D,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ge=V.uniformsGroups;for(let Dn=0,Un=Ge.length;Dn<Un;Dn++){let xl=Ge[Dn];L.update(xl,Je),L.bind(xl,Je)}}return Je}function zh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function kh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,U,k){At.get(y.texture).__webglTexture=U,At.get(y.depthTexture).__webglTexture=k;let V=At.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){let k=At.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,k=0){P=y,w=U,A=k;let V=!0,N=null,rt=!1,dt=!1;if(y){let bt=At.get(y);if(bt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(bt.__hasExternalTextures)S.rebindTextures(y,At.get(y.texture).__webglTexture,At.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let St=y.depthTexture;if(bt.__boundDepthTexture!==St){if(St!==null&&At.has(St)&&(y.width!==St.image.width||y.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}let It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);let Nt=At.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?N=Nt[U][k]:N=Nt[U],rt=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?N=At.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[k]:N=Nt,C.copy(y.viewport),$.copy(y.scissor),z=y.scissorTest}else C.copy(H).multiplyScalar(R).floor(),$.copy(nt).multiplyScalar(R).floor(),z=ot;if(Tt.bindFramebuffer(D.FRAMEBUFFER,N)&&V&&Tt.drawBuffers(y,N),Tt.viewport(C),Tt.scissor($),Tt.setScissorTest(z),rt){let bt=At.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,k)}else if(dt){let bt=At.get(y.texture),It=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,It)}M=-1},this.readRenderTargetPixels=function(y,U,k,V,N,rt,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Tt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{let bt=y.texture,It=bt.format,Nt=bt.type;if(!Wt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-V&&k>=0&&k<=y.height-N&&D.readPixels(U,k,V,N,Bt.convert(It),Bt.convert(Nt),rt)}finally{let bt=P!==null?At.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,V,N,rt,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){let bt=y.texture,It=bt.format,Nt=bt.type;if(!Wt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-V&&k>=0&&k<=y.height-N){Tt.bindFramebuffer(D.FRAMEBUFFER,Mt);let St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(U,k,V,N,Bt.convert(It),Bt.convert(Nt),0);let $t=P!==null?At.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,$t);let re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await qu(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(St),D.deleteSync(re),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,k=0){y.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);let V=Math.pow(2,-k),N=Math.floor(y.image.width*V),rt=Math.floor(y.image.height*V),dt=U!==null?U.x:0,Mt=U!==null?U.y:0;S.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,dt,Mt,N,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(y,U,k=null,V=null,N=0){y.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let rt,dt,Mt,bt,It,Nt,St,$t,re,ae=y.isCompressedTexture?y.mipmaps[N]:y.image;k!==null?(rt=k.max.x-k.min.x,dt=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,It=k.min.y,Nt=k.isBox3?k.min.z:0):(rt=ae.width,dt=ae.height,Mt=ae.depth||1,bt=0,It=0,Nt=0),V!==null?(St=V.x,$t=V.y,re=V.z):(St=0,$t=0,re=0);let Ie=Bt.convert(U.format),Kt=Bt.convert(U.type),Et;U.isData3DTexture?(S.setTexture3D(U,0),Et=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(S.setTexture2DArray(U,0),Et=D.TEXTURE_2D_ARRAY):(S.setTexture2D(U,0),Et=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let gn=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),bi=D.getParameter(D.UNPACK_SKIP_ROWS),Fe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,It),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt);let ss=y.isDataArrayTexture||y.isData3DTexture,le=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let hn=At.get(y),rs=At.get(U),Ge=At.get(hn.__renderTarget),Dn=At.get(rs.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Un=0;Un<Mt;Un++)ss&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(y).__webglTexture,N,Nt+Un),y.isDepthTexture?(le&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(U).__webglTexture,N,re+Un),D.blitFramebuffer(bt,It,rt,dt,St,$t,rt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):le?D.copyTexSubImage3D(Et,N,St,$t,re+Un,bt,It,rt,dt):D.copyTexSubImage2D(Et,N,St,$t,re+Un,bt,It,rt,dt);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else le?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Et,N,St,$t,re,rt,dt,Mt,Ie,Kt,ae.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,N,St,$t,re,rt,dt,Mt,Ie,ae.data):D.texSubImage3D(Et,N,St,$t,re,rt,dt,Mt,Ie,Kt,ae):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,St,$t,rt,dt,Ie,Kt,ae.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,St,$t,ae.width,ae.height,Ie,ae.data):D.texSubImage2D(D.TEXTURE_2D,N,St,$t,rt,dt,Ie,Kt,ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,gn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,bi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&D.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,k=null,V=null,N=0){return y.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,y=arguments[2],U=arguments[3],N=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,k,V,N)},this.initRenderTarget=function(y){At.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),Tt.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,Tt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var vr=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var yr=class extends fi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mr=new F,br=new F,yc=new fe,hs=new di,Ks=new $i,To=new F,Mc=new F,Pa=class extends Xe{constructor(t=new Pn,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Mr.fromBufferAttribute(e,s-1),br.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Mr.distanceTo(br);t.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;yc.copy(s).invert(),hs.copy(t.ray).applyMatrix4(yc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){let u=h.getX(_),E=h.getX(_+1),T=js(this,t,hs,l,u,E);T&&e.push(T)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(m),u=js(this,t,hs,l,_,p);u&&e.push(u)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){let u=js(this,t,hs,l,_,_+1);u&&e.push(u)}if(this.isLineLoop){let _=js(this,t,hs,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function js(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Mr.fromBufferAttribute(o,s),br.fromBufferAttribute(o,r),e.distanceSqToSegment(Mr,br,To,Mc)>i)return;To.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(To);if(!(l<t.near||l>t.far))return{distance:l,point:Mc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var bc=new F,Sc=new F,Ia=class extends Pa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)bc.fromBufferAttribute(e,s),Sc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bc.distanceTo(Sc);t.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sr=class extends Ve{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};function Qs(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Gg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},La=class extends Ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wl:r=t,a=2*e-i;break;case El:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:o=t,l=2*i-e;break;case El:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),_=g*g,p=_*g,u=-d*p+2*d*_-d*g,E=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-m)*p+(1.5+m)*_+.5*g,b=m*p-m*_;for(let O=0;O!==a;++O)r[O]=u*o[h+O]+E*o[c+O]+T*o[l+O]+b*o[f+O];return r}},Da=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Ua=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Gg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*i,d=f-i,m=f+i;for(let g=0;g!==i;++g){let _=e[f+g];if(_!==e[d+g]||_!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=da;var pi=class extends on{constructor(t,e,i){super(t,e,i)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=or;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends on{};Na.prototype.ValueTypeName="color";var Fa=class extends on{};Fa.prototype.ValueTypeName="number";var Oa=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends on{InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends on{constructor(t,e,i){super(t,e,i)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=or;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends on{};Ba.prototype.ValueTypeName="vector";var za=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Wg=new za,ka=class{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ka.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ka="\\[\\]\\.:\\/",Xg=new RegExp("["+Ka+"]","g"),ja="[^"+Ka+"]",qg="[^"+Ka.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",ja),$g=/(WCOD+)?/.source.replace("WCOD",qg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ja),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ja),Kg=new RegExp("^"+Yg+$g+Zg+Jg+"$"),jg=["material","materials","bones","map"],Va=class{constructor(t,e,i){let s=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){let e=Kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Va;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X_=new Float32Array(1);var wc=new fe,Er=class{constructor(t,e,i=0,s=1/0){this.ray=new di(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wc),this}intersectObject(t,e=!0,i=[]){return Ha(t,this,i,e),i.sort(Ec),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ha(t[s],this,i,e);return i.sort(Ec),i}};function Ec(n,t){return n.distance-t.distance}function Ha(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ha(r[o],t,e,!0)}}var ys=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var tr=new qn,Tr=class extends Ia{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new Pn;r.setIndex(new Ue(i,1)),r.setAttribute("position",new Ue(s,3)),super(r,new yr({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&tr.setFromObject(this.object),tr.isEmpty())return;let e=tr.min,i=tr.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ar=class extends An{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Zc={type:"change"},tl={type:"start"},Kc={type:"end"},Lr=new di,Jc=new ze,Qg=Math.cos(70*kc.DEG2RAD),_e=new F,Ne=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qa=1e-6,Dr=class extends Ar{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new rn,this._lastTargetPosition=new F,this._quat=new rn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new F,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new F,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e_.bind(this),this._onPointerDown=t_.bind(this),this._onPointerUp=n_.bind(this),this._onContextMenu=c_.bind(this),this._onMouseWheel=r_.bind(this),this._onKeyDown=o_.bind(this),this._onTouchStart=a_.bind(this),this._onTouchMove=l_.bind(this),this._onMouseDown=i_.bind(this),this._onMouseMove=s_.bind(this),this._interceptControlDown=h_.bind(this),this._interceptControlUp=u_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zc),this.update(),this.state=ne.NONE}update(t=null){let e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ne:i>Math.PI&&(i-=Ne),s<-Math.PI?s+=Ne:s>Math.PI&&(s-=Ne),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=_e.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lr.origin.copy(this.object.position),Lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lr.direction))<Qg?this.object.lookAt(this.target):(Jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lr.intersectPlane(Jc,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qa||this._lastTargetPosition.distanceToSquared(this.target)>Qa?(this.dispatchEvent(Zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function t_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function e_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function n_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kc),this.state=ne.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function i_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(tl)}function s_(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function r_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(tl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Kc))}function o_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function a_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(tl)}function l_(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function c_(n){this.enabled!==!1&&n.preventDefault()}function h_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var el=Math.PI/180,Ur=(n,t)=>Math.max(-t,Math.min(t,n));function jc(n,t,e){return[n.toFixed(2),t.toFixed(2),e.bendX,e.bendY,e.twist,e.waveAmp,e.waveCount].join("|")}function Qc(n,t,e){let i=new Yn(n,t,110,110);return d_(i,n,t,e),i}function d_(n,t,e,i){let s=n.attributes.position,r=Ur(i.bendX||0,175)*el,o=Ur(i.bendY||0,175)*el,a=Ur(i.twist||0,360)*el,l=Ur(i.waveAmp||0,60),c=i.waveCount||1,h=r!==0?t/r:0,f=o!==0?e/o:0;for(let d=0;d<s.count;d++){let m=s.getX(d),g=s.getY(d),_=0;if(l&&(_+=l*Math.sin(m/t*Math.PI*2*c)),f){let p=g/f;g=f*Math.sin(p),_+=f*(1-Math.cos(p))}if(h){let p=m/h;m=h*Math.sin(p),_+=h*(1-Math.cos(p))}if(a){let p=a*(g/e),u=Math.cos(p),E=Math.sin(p),T=m*u+_*E;_=-m*E+_*u,m=T}s.setXYZ(d,m,g,_)}return s.needsUpdate=!0,n.computeVertexNormals(),n}var f_=1;function Fr(n="e"){return n+f_+++"-"+Math.random().toString(36).slice(2,6)}function Ye(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var qe=new Map,p_=1;function Or(n){let t="a"+p_+++"-"+Math.random().toString(36).slice(2,6),e=new Image,i={id:t,src:n,img:e,thumb:null};return qe.set(t,i),e.onload=()=>{i.thumb=eh(e)},e.onerror=()=>{i.error=!0},e.src=n,t}function eh(n){try{let t=document.createElement("canvas"),e=72;t.width=e,t.height=e;let i=t.getContext("2d"),s=Math.max(e/n.width,e/n.height),r=n.width*s,o=n.height*s;return i.drawImage(n,(e-r)/2,(e-o)/2,r,o),t.toDataURL("image/png")}catch{return null}}function Br(n){return n&&n.assetId?qe.get(n.assetId):null}var xt={workspaces:[],activeId:null,ui:{tool:"move",theme:"light",grid:!0,autoRotate:!1}};function nh(){return xt.workspaces.find(n=>n.id===xt.activeId)||null}function zr(n="\u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F"){return{id:Fr("w"),name:n,w:1080,h:1350,duration:5,bg:{type:"color",color:"#ffffff",from:"#ffffff",to:"#e9e9ec",angle:135},elements:[]}}var ih=()=>({id:Fr("t"),type:"text",name:"\u0639\u0646\u0635\u0631",visible:!0,locked:!1,x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1,opacity:1,bendX:0,bendY:0,twist:0,waveAmp:0,waveCount:1.5,radius:12,border:0,borderColor:"#0b0b0c",shadow:!1,bg:"transparent"});function sh(n=1){return{...ih(),type:"text",name:"\u0646\u0635 "+n,text:"\u0627\u0643\u062A\u0628 \u0646\u0635\u0643 \u0647\u0646\u0627",font:"Cairo",fontSize:36,weight:700,italic:!1,spacing:0,lineHeight:1.25,align:"center",dir:"auto",color:"#141414",strokeW:0,strokeColor:"#ffffff",textBg:"transparent",radius:30}}function rh(n,t=1){return{...ih(),type:"image",name:"\u0635\u0648\u0631\u0629 "+t,assetId:n,aspect:"free",radius:14,bendX:30,bg:"transparent"}}var m_=(n,t)=>n&&n[0]==="_"?void 0:t;function In(n){return JSON.stringify({name:n.name,w:n.w,h:n.h,bg:n.bg,elements:n.elements},m_)}function th(n,t){let e=JSON.parse(t);n.name=e.name,n.w=e.w,n.h=e.h,n.bg=e.bg,n.elements=e.elements}var bs=new Map;function Nr(n){return bs.has(n.id)||bs.set(n.id,{u:[],r:[],pending:In(n)}),bs.get(n.id)}var ie={touch(n){Nr(n)},commit(n){let t=Nr(n),e=In(n);e!==t.pending&&(t.u.push(t.pending),t.u.length>50&&t.u.shift(),t.r.length=0,t.pending=e)},undo(n){let t=Nr(n);return t.u.length?(t.r.push(In(n)),th(n,t.u.pop()),t.pending=In(n),!0):!1},redo(n){let t=Nr(n);return t.r.length?(t.u.push(In(n)),th(n,t.r.pop()),t.pending=In(n),!0):!1},canUndo(n){let t=bs.get(n.id);return!!t&&t.u.length>0},canRedo(n){let t=bs.get(n.id);return!!t&&t.r.length>0}},nl="curve-studio.v1",il={save(){try{let n={};for(let e of xt.workspaces)for(let i of e.elements)i.assetId&&qe.has(i.assetId)&&(n[i.assetId]=qe.get(i.assetId).src);let t={v:1,activeId:xt.activeId,ui:{theme:xt.ui.theme},workspaces:xt.workspaces.map(e=>JSON.parse(In(e))),assets:n};return localStorage.setItem(nl,JSON.stringify(t)),!0}catch{return!1}},load(){try{let n=localStorage.getItem(nl);if(!n)return null;let t=JSON.parse(n);if(!t||!Array.isArray(t.workspaces)||!t.workspaces.length)return null;for(let[e,i]of Object.entries(t.assets||{}))if(typeof i=="string"&&i.startsWith("data:image")){let s=new Image,r={id:e,src:i,img:s,thumb:null};qe.set(e,r),s.onload=()=>{r.thumb=eh(s)},s.src=i}return xt.workspaces=t.workspaces,xt.activeId=t.activeId&&xt.workspaces.some(e=>e.id===t.activeId)?t.activeId:xt.workspaces[0].id,t.ui&&t.ui.theme&&(xt.ui.theme=t.ui.theme),t}catch{return null}},clear(){try{localStorage.removeItem(nl)}catch{}}};var Vr=22,oh=0;function ah(){oh++}function g_(n){return/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(n||"")}var __='"Cairo","Noto Sans Arabic","Segoe UI",Arial,sans-serif';function kr(n,t,e,i,s,r){r=Math.max(0,Math.min(r,Math.min(i,s)/2)),n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function lh(n){let t=Br(n),e=t&&t.img&&t.img.width?t.img.width/t.img.height:1;if(n.aspect&&n.aspect!=="free"){let[s,r]=n.aspect.split(":").map(Number);s&&r&&(e=s/r)}let i=76;return e>=1?{w:i,h:i/e}:{w:i*e,h:i}}function ch(n,t,e,i=Vr){let s=Br(n),r=Math.max(2,Math.round(t*i)),o=Math.max(2,Math.round(e*i)),a=Math.min(r,o),l=n.radius/100*a/2,c=n.border/100*a,h=Math.round(n.shadow?a*.13:2+c*.15),f=document.createElement("canvas");f.width=r+2*h,f.height=o+2*h;let d=f.getContext("2d");if(n.shadow){d.save();try{d.filter=`blur(${Math.round(a*.05)}px)`}catch{}d.fillStyle="rgba(0,0,0,0.32)",kr(d,h+a*.02,h+a*.045,r,o,l),d.fill(),d.restore()}c>.5&&(d.fillStyle=n.borderColor||"#0b0b0c",kr(d,h,h,r,o,l),d.fill());let m=h+c,g=h+c,_=r-2*c,p=o-2*c;if(d.save(),kr(d,m,g,_,p,Math.max(0,l-c)),d.clip(),n.bg&&n.bg!=="transparent"&&(d.fillStyle=n.bg,d.fillRect(m,g,_,p)),s&&s.img&&s.img.complete&&s.img.width){let u=Math.max(_/s.img.width,p/s.img.height),E=s.img.width*u,T=s.img.height*u;d.drawImage(s.img,m+(_-E)/2,g+(p-T)/2,E,T)}else d.fillStyle="rgba(125,125,130,.25)",d.fillRect(m,g,_,p);return d.restore(),{canvas:f,worldW:f.width/i,worldH:f.height/i}}function hh(n,t=Vr){let e=Math.max(4,Math.round(n.fontSize*t)),i=Math.round(n.fontSize*t*.32),s=Math.max(0,n.strokeW*t),r=String(n.text??"").split(`
`),o=n.dir==="auto"?g_(n.text)?"rtl":"ltr":n.dir,a=`${n.italic?"italic ":""}${n.weight} ${e}px "${n.font}", ${__}`,l=document.createElement("canvas").getContext("2d");l.font=a;try{l.letterSpacing=n.spacing*t+"px"}catch{}l.direction=o;let c=r.map(E=>l.measureText(E||" ").width),h=Math.max(8,...c),f=e*n.lineHeight,d=Math.ceil(h+2*i+2*s+8),m=Math.ceil(r.length*f+2*i+2*s+4),g=document.createElement("canvas");g.width=Math.min(d,4096),g.height=Math.min(m,4096);let _=g.getContext("2d");_.font=a;try{_.letterSpacing=n.spacing*t+"px"}catch{}if(_.direction=o,_.textBaseline="middle",n.textBg&&n.textBg!=="transparent"){_.fillStyle=n.textBg;let E=n.radius/100*Math.min(g.width,g.height)/2;kr(_,s,s,g.width-2*s,g.height-2*s,E),_.fill()}let p,u;return n.align==="center"?(p="center",u=g.width/2):n.align==="start"&&o==="rtl"||n.align==="end"&&o==="ltr"?(p="right",u=g.width-i-s):(p="left",u=i+s),_.textAlign=p,r.forEach((E,T)=>{let b=i+s+f*(T+.5);s>0&&(_.lineJoin="round",_.miterLimit=2,_.lineWidth=s*2,_.strokeStyle=n.strokeColor||"#fff",_.strokeText(E||" ",u,b)),_.fillStyle=n.color||"#141414",_.fillText(E||" ",u,b)}),x_(n),{canvas:g,worldW:g.width/t,worldH:g.height/t}}function x_(n){try{if(!document.fonts)return;let t=`${n.weight} 32px "${n.font}"`;document.fonts.check(t,n.text||"\u0623\u0628")||document.fonts.load(t,n.text||"\u0623\u0628\u062C\u062F").then(()=>ah()).catch(()=>{})}catch{}}function uh(n,t){if(n.type==="image"){let e=Br(n),i=e&&e.img&&e.img.width?e.img.width+"x"+e.img.height:"0";return JSON.stringify(["img",t,n.assetId,i,n.aspect,n.radius,n.border,n.borderColor,n.bg,n.shadow])}return JSON.stringify(["txt",t,oh,n.text,n.font,n.fontSize,n.weight,n.italic,n.spacing,n.lineHeight,n.align,n.dir,n.color,n.strokeW,n.strokeColor,n.textBg,n.radius])}function dh(n){return n?n.type==="transparent"?{css:"",transparent:!0}:n.type==="gradient"?{css:`linear-gradient(${n.angle||135}deg, ${n.from}, ${n.to})`,transparent:!1}:{css:n.color||"#ffffff",transparent:!1}:{css:"#ffffff",transparent:!1}}var fh=new Set(["x","y","z","rotX","rotY","rotZ","scale","opacity","bendX","bendY","twist","waveAmp"]);function Hr(n,t=5){return n.anim||(n.anim={in:0,out:t,speed:1,props:{}}),n.anim.props||(n.anim.props={}),n.anim}var ph=[["l","\u062E\u0637\u064A Linear"],["i","\u062F\u062E\u0648\u0644 \u0646\u0627\u0639\u0645 Ease In"],["o","\u062E\u0631\u0648\u062C \u0646\u0627\u0639\u0645 Ease Out"],["io","\u0646\u0627\u0639\u0645 \u062A\u0645\u0627\u0645\u0627\u064B Ease In-Out"],["h","\u062B\u0628\u0627\u062A Hold"],["b","\u0627\u0631\u062A\u062F\u0627\u062F Bounce"]];function v_(n,t){switch(t){case"i":return n*n*n;case"o":return 1-Math.pow(1-n,3);case"io":return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;case"h":return 0;case"b":return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375;default:return n}}function pn(n,t,e,i){let s=n.anim&&n.anim.props&&n.anim.props[t];if(!s||!s.k||!s.k.length)return n[t];let r=n.anim,o=e;r.speed&&r.speed!==1&&r.in!=null&&(o=r.in+(e-r.in)*r.speed);let a=s.k;if(o<=a[0].t)return a[0].v;let l=a[a.length-1];if(o>=l.t)return l.v;let c=0;for(;c<a.length-2&&!(a[c].t<=o&&o<a[c+1].t);)c++;let h=a[c],f=a[c+1],d=f.t-h.t||1e-6,m=v_((o-h.t)/d,f.e||h.e||"l");return h.v+(f.v-h.v)*m}function mh(n,t,e){if(!n.anim)return!0;let i=e?e.duration??5:5,s=n.anim.in??0,r=Math.min(n.anim.out??i,i);return t>=s-1e-6&&t<=r+1e-6}function Ss(n,t,e,i,s){let r=Hr(n),o=r.props[t]||(r.props[t]={k:[]}),a=.001,l=o.k.find(c=>Math.abs(c.t-e)<a);return l?(l.v=i,s&&(l.e=s)):(l={t:e,v:i,e:s||"io"},o.k.push(l),o.k.sort((c,h)=>c.t-h.t)),l}function gh(n,t,e){let i=0;for(let s of t){let r=n.anim?.props?.[s];if(!r)continue;let o=r.k.length;r.k=r.k.filter(a=>Math.abs(a.t-e)>.001),i+=o-r.k.length}return i}function _h(n,t,e,i){for(let s of t){let r=n.anim?.props?.[s];r&&(r.k.forEach(o=>{Math.abs(o.t-e)<.001&&(o.t=i)}),r.k.sort((o,a)=>o.t-a.t))}}var Ln=[{id:"pos",n:"\u0627\u0644\u0645\u0648\u0636\u0639",props:["x","y"]},{id:"scale",n:"\u0627\u0644\u062D\u062C\u0645",props:["scale"]},{id:"rot",n:"\u062F\u0648\u0631\u0627\u0646 Z",props:["rotZ"]},{id:"tilt",n:"\u0625\u0645\u0627\u0644\u0629 X/Y",props:["rotX","rotY"]},{id:"opac",n:"\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629",props:["opacity"]},{id:"bend",n:"\u0627\u0644\u0627\u0646\u062D\u0646\u0627\u0621",props:["bendX","bendY"]},{id:"twist",n:"\u0627\u0644\u062A\u0648\u0627\u0621 \u0648\u0645\u0648\u062C\u0629",props:["twist","waveAmp"]}];var Gr=class{constructor(t,e){this.canvas=t,this.container=e,this.renderer=new xr({canvas:t,antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.scene=new vr,this.camera=new Ce(35,1,.5,6e3),this.camera.position.set(0,0,210),this.controls=new Dr(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.85,this.controls.minDistance=30,this.controls.maxDistance=900,this.controls.screenSpacePanning=!0,this.controls.autoRotateSpeed=2.2,this.group=new Hn,this.scene.add(this.group),this.meshes=new Map,this.selectedId=null,this.helper=null,this.quality=1,this.stageW=1,this.stageH=1,this.time=0,this.raycaster=new Er,this._dark=!1}worldSizeOf(t){let e=100/Math.max(t.w,t.h);return{w:t.w*e,h:t.h*e}}resize(t,e){this.stageW=t,this.stageH=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}fit(t){let{w:e,h:i}=this.worldSizeOf(t),r=Math.max(i/2,e/(2*this.camera.aspect))/Math.tan(this.camera.fov/2*Math.PI/180)*1.22;this.camera.position.set(0,0,r),this.controls.target.set(0,0,0),this.controls.update()}setTheme(t){this._dark=t,this.helper&&this.helper.material.color.set(t?16777215:723724)}setSelection(t){if(this.selectedId=t,!t){this.helper&&(this.helper.visible=!1);return}let e=this.meshes.get(t);if(!e){this.helper&&(this.helper.visible=!1);return}this.helper?this.helper.setFromObject(e.mesh):(this.helper=new Tr(e.mesh,this._dark?16777215:723724),this.scene.add(this.helper)),this.helper.material.transparent=!0,this.helper.material.opacity=.9,this.helper.visible=!0}raycast(t,e,i){let s=this.canvas.getBoundingClientRect(),r=new Lt((e-s.left)/s.width*2-1,-((i-s.top)/s.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let o=[];for(let l of t.elements){if(!l.visible)continue;let c=this.meshes.get(l.id);c&&(c.mesh.userData.elId=l.id,o.push(c.mesh))}let a=this.raycaster.intersectObjects(o,!1);for(let l of a){let c=t.elements.find(h=>h.id===l.object.userData.elId);if(c&&!c.locked)return c}return null}planePoint(t,e,i=0){let s=this.canvas.getBoundingClientRect(),r=new Lt((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let o=new ze(new F(0,0,1),-i),a=new F;return this.raycaster.ray.intersectPlane(o,a)?a:null}_dispose(t){t.mesh.geometry.dispose(),t.mesh.material.map&&t.mesh.material.map.dispose(),t.mesh.material.dispose(),this.group.remove(t.mesh)}syncAll(t){if(!t)return;let e=new Set(t.elements.map(i=>i.id));for(let[i,s]of[...this.meshes])e.has(i)||(this._dispose(s),this.meshes.delete(i));t.elements.forEach((i,s)=>this.syncElement(t,i,s))}syncElement(t,e,i){let s=this.meshes.get(e.id);if(!s){let m=new ke(new Yn(1,1),new Zi({transparent:!0,alphaTest:.02,side:tn}));m.userData.elId=e.id,s={mesh:m,geoKey:"",texKey:"",w:1,h:1},this.meshes.set(e.id,s),this.group.add(m)}let r=this.time||0,o=m=>pn(e,m,r,t),a=uh(e,this.quality);if(s.texKey!==a){let m=Vr*this.quality,g=e.type==="image"?ch(e,...(()=>{let p=lh(e);return[p.w,p.h]})(),m):hh(e,m);s.mesh.material.map&&s.mesh.material.map.dispose();let _=new Sr(g.canvas);_.colorSpace=Le,_.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy?this.renderer.capabilities.getMaxAnisotropy():1),s.mesh.material.map=_,s.mesh.material.needsUpdate=!0,s.w=g.worldW,s.h=g.worldH,s.texKey=a}let l={bendX:o("bendX"),bendY:o("bendY"),twist:o("twist"),waveAmp:o("waveAmp"),waveCount:e.waveCount},c=jc(s.w,s.h,l);s.geoKey!==c&&(s.mesh.geometry.dispose(),s.mesh.geometry=Qc(s.w,s.h,l),s.geoKey=c);let h=s.mesh,d=(t.elements.length-1-i)*8;h.position.set(o("x"),o("y"),d+o("z")*10),h.rotation.set(o("rotX")*Math.PI/180,o("rotY")*Math.PI/180,o("rotZ")*Math.PI/180),h.scale.setScalar(Math.max(.03,o("scale"))),h.material.opacity=o("opacity"),h.visible=e.visible&&mh(e,r,t),h.renderOrder=i,this.selectedId===e.id&&this.helper&&this.helper.visible&&this.helper.setFromObject(h)}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}exportPNG(t){let e=this.quality;this.quality=Math.max(1.6,Math.min(2.6,Math.max(t.w,t.h)/1600)),this.syncAll(t);let i=this.renderer.getPixelRatio(),s=this.stageW,r=this.stageH,o=this.camera.aspect;this.renderer.setPixelRatio(1),this.renderer.setSize(t.w,t.h,!1),this.camera.aspect=t.w/t.h,this.camera.updateProjectionMatrix(),this.controls.update(),this.renderer.render(this.scene,this.camera);let a=document.createElement("canvas");a.width=t.w,a.height=t.h;let l=a.getContext("2d");if(t.bg.type==="color")l.fillStyle=t.bg.color,l.fillRect(0,0,t.w,t.h);else if(t.bg.type==="gradient"){let c=((t.bg.angle||135)-90)*Math.PI/180,h=t.w/2,f=t.h/2,d=Math.abs(t.w*Math.cos(c))+Math.abs(t.h*Math.sin(c)),m=l.createLinearGradient(h-Math.cos(c)*d/2,f-Math.sin(c)*d/2,h+Math.cos(c)*d/2,f+Math.sin(c)*d/2);m.addColorStop(0,t.bg.from),m.addColorStop(1,t.bg.to),l.fillStyle=m,l.fillRect(0,0,t.w,t.h)}return l.drawImage(this.renderer.domElement,0,0,t.w,t.h),this.quality=e,this.renderer.setPixelRatio(i),this.resize(s,r),this.camera.aspect=o,this.camera.updateProjectionMatrix(),this.syncAll(t),a.toDataURL("image/png")}};function y_(n,t=18,e=!1){return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n}</svg>`}var xh={logo:'<path d="M4 6c5.5-3 10.5 3 16 0v12c-5.5 3-10.5-3-16 0z"/><path d="M4 6v12M20 6v12"/>',plus:'<path d="M12 5v14M5 12h14"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15.5l-4.5-4.5L6 21.5"/>',type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',trash:'<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6"/>',eye:'<path d="M1 12s4-7.5 11-7.5S23 12 23 12s-4 7.5-11 7.5S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',eyeOff:'<path d="M2 12s4-7.5 11-7.5c2 0 3.8.7 5.3 1.7M22 12s-4 7.5-11 7.5c-2 0-3.8-.7-5.3-1.7M3 3l18 18"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',unlock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.9-.9"/>',undo:'<path d="M3 7v6h6M21 17a9 9 0 0 0-15-6.7L3 13"/>',redo:'<path d="M21 7v6h-6M3 17a9 9 0 0 1 15-6.7L21 13"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',help:'<circle cx="12" cy="12" r="9.5"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.6-3 4M12 17.5h.01"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',grip:'<circle cx="9" cy="6" r="1.3"/><circle cx="15" cy="6" r="1.3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.3"/>',close:'<path d="M18 6L6 18M6 6l12 12"/>',fit:'<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/>',rotate:'<path d="M23 4v6h-6M20.5 15a9 9 0 1 1-2.1-9.4L23 10"/>',move:'<path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',up:'<path d="M12 19V5M5 12l7-7 7 7"/>',down:'<path d="M12 5v14M19 12l-7 7-7-7"/>',copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',check:'<path d="M20 6L9 17l-5-5"/>',pen:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',board:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/>',orbit:'<circle cx="12" cy="12" r="3.5"/><path d="M20.6 8.6c1 3.6-2.4 8-8.6 10.6S1.4 20.9 2.7 17.3"/><path d="M23 4v6h-6"/>',layers:'<path d="M12 2l10 5.5L12 13 2 7.5z"/><path d="M2 12.5L12 18l10-5.5M2 17.5L12 23l10-5.5"/>',front:'<path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/>',back:'<path d="M3 12l9 5 9-5"/><path d="M12 2l9 5-9 5-9-5z"/>',dragfile:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',palette:'<circle cx="12" cy="12" r="9.5"/><circle cx="8.5" cy="10" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="15.5" cy="10" r="1.2"/><path d="M12 21.5c-2-1.5-1.5-4.5 1.5-4.5 1 0 2-.8 2-1.8"/>'};function Dt(n,t){return y_(xh[n]||xh.help,t)}var M_=1,es=()=>"pc"+M_++,vh=n=>typeof n=="number"?Math.round(n*100)/100:n,b_=(n,t,e)=>Math.max(t,Math.min(e,n)),S_=["Alexandria","Almarai","Amiri","Aref Ruqaa","Baloo Bhaijaan 2","Blaka","Cairo","Changa","El Messiri","Gulzar","IBM Plex Sans Arabic","Jomhuria","Katibeh","Lalezar","Lateef","Mada","Markazi Text","Marhey","Noto Kufi Arabic","Noto Naskh Arabic","Noto Sans Arabic","Qahiri","Rakkas","Readex Pro","Reem Kufi","Rubik","Scheherazade New","Tajawal","Vibes"],w_=["Abril Fatface","Anton","Archivo Black","Bebas Neue","Cinzel","Dancing Script","Great Vibes","Inter","Jost","Lobster","Merriweather","Montserrat","Oswald","Pacifico","Playfair Display","Poppins","Press Start 2P","Raleway","Righteous","Roboto","Space Mono"],yh=[{n:"\u0645\u0633\u0637\u062D",p:{bendX:0,bendY:0,twist:0,waveAmp:0}},{n:"\u0642\u0648\u0633",p:{bendX:65,bendY:0,twist:0,waveAmp:0}},{n:"\u0642\u0648\u0633 \u0639\u0645\u0648\u062F\u064A",p:{bendX:0,bendY:60,twist:0,waveAmp:0}},{n:"\u0646\u0635\u0641 \u0644\u0641\u0629",p:{bendX:150,bendY:0,twist:0,waveAmp:0}},{n:"\u0645\u0648\u062C\u0629",p:{bendX:0,bendY:0,twist:0,waveAmp:9}},{n:"\u0627\u0644\u062A\u0648\u0627\u0621",p:{bendX:0,bendY:0,twist:80,waveAmp:0}},{n:"\u0642\u0628\u0629",p:{bendX:38,bendY:38,twist:0,waveAmp:0}}],E_=[["free","\u062D\u0631 (\u0646\u0633\u0628\u0629 \u0627\u0644\u0635\u0648\u0631\u0629)"],["1:1","1:1 \u0645\u0631\u0628\u0639"],["4:5","4:5"],["3:4","3:4"],["9:16","9:16 \u0633\u062A\u0648\u0631\u064A"],["16:9","16:9 \u0639\u0631\u064A\u0636"],["9:19.5","9:19.5 \u0647\u0627\u062A\u0641"]];var an=(n,t)=>`<div class="row"><label>${n}</label><div class="ctl">${t}</div></div>`,xi=(n,t,e)=>`<details class="grp" ${t?"open":""}><summary>${n}</summary><div class="gin">${e}</div></details>`;function sl(n){let t=document.getElementById("panel"),e=n.ws(),i=e?e.elements.find(o=>o.id===n.selectedId):null;if(!i){t.innerHTML=`<div class="panel-empty">
      <div class="pe-ico">${Dt("sliders",26)}</div>
      <b>\u0644\u0627 \u064A\u0648\u062C\u062F \u0639\u0646\u0635\u0631 \u0645\u062D\u062F\u062F</b>
      <p>\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0639\u0646\u0635\u0631 \u0641\u064A \u0627\u0644\u0645\u0634\u0647\u062F \u0623\u0648 \u0639\u0644\u0649 \u0634\u0631\u064A\u0637\u0647 \u0641\u064A \u0627\u0644\u0623\u0633\u0641\u0644 \u0644\u0625\u0638\u0647\u0627\u0631 \u062E\u0635\u0627\u0626\u0635\u0647 \u0647\u0646\u0627.</p>
      <div class="pe-btns">
        <button class="btn" id="peAddImg">${Dt("image")} \u0623\u0636\u0641 \u0635\u0648\u0631\u0629</button>
        <button class="btn" id="peAddTxt">${Dt("type")} \u0623\u0636\u0641 \u0646\u0635</button>
      </div></div>`,t.querySelector("#peAddImg").onclick=()=>n.pickImages(),t.querySelector("#peAddTxt").onclick=()=>n.addText();return}let s=[],r=[];if(s.push(`
  <div class="elhead">
    <span class="elbadge">${i.type==="image"?Dt("image"):Dt("type")}</span>
    <input id="pcName" class="txt" value="${Ye(i.name)}" maxlength="40">
  </div>
  <div class="quickacts">
    <button class="btn" id="pcFront" title="\u0625\u0644\u0649 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629">${Dt("up")} \u0644\u0644\u0645\u0642\u062F\u0645\u0629</button>
    <button class="btn" id="pcBack" title="\u0625\u0644\u0649 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629">${Dt("down")} \u0644\u0644\u062E\u0644\u0641</button>
    <button class="btn" id="pcDup" title="\u062A\u0643\u0631\u0627\u0631 (Ctrl+D)">${Dt("copy")}</button>
    <button class="btn danger" id="pcDel" title="\u062D\u0630\u0641 (Del)">${Dt("trash")}</button>
  </div>`),r.push(()=>{let o=t.querySelector("#pcName");o.addEventListener("change",()=>{i.name=o.value.trim()||i.name,n.touch(i,!0)}),t.querySelector("#pcFront").onclick=()=>n.moveLayer(i.id,"front"),t.querySelector("#pcBack").onclick=()=>n.moveLayer(i.id,"back"),t.querySelector("#pcDup").onclick=()=>n.duplicateEl(i.id),t.querySelector("#pcDel").onclick=()=>n.removeEl(i.id)}),i.type==="text"){let o=es();s.push(xi("\u0627\u0644\u0646\u0635",!0,`
      ${an("\u0627\u0644\u0645\u062D\u062A\u0648\u0649",`<textarea id="${o}" rows="3" dir="auto">${Ye(i.text)}</textarea>`)}
      ${an("\u0627\u0644\u0627\u062A\u062C\u0627\u0647",Xr(o+"d",[["auto","\u062A\u0644\u0642\u0627\u0626\u064A"],["rtl","\u0639\u0631\u0628\u064A \u2190"],["ltr","\u2192 \u0644\u0627\u062A\u064A\u0646\u064A"]],i.dir))}
      ${an("\u0627\u0644\u0645\u062D\u0627\u0630\u0627\u0629",Xr(o+"a",[["start","\u0627\u0644\u0628\u062F\u0627\u064A\u0629"],["center","\u0648\u0633\u0637"],["end","\u0627\u0644\u0646\u0647\u0627\u064A\u0629"]],i.align))}
    `)),r.push(()=>{let c=t.querySelector("#"+o),h=T_(()=>n.touch(i,!1),120);c.addEventListener("input",()=>{i.text=c.value,h()}),c.addEventListener("change",()=>n.touch(i,!0)),qr(t,o+"d",f=>{i.dir=f,n.touch(i,!0)}),qr(t,o+"a",f=>{i.align=f,n.touch(i,!0)})});let a=[],l=`<optgroup label="\u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0639\u0631\u0628\u064A\u0629">${S_.map(c=>`<option value="${c}" ${c===i.font?"selected":""}>${c}</option>`).join("")}</optgroup><optgroup label="English Fonts">${w_.map(c=>`<option value="${c}" ${c===i.font?"selected":""}>${c}</option>`).join("")}</optgroup>`;a.push(an("\u0627\u0644\u062E\u0637",`<select id="pcFont">${l}</select>`)),a.push(an("\u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629",`<div class="fontprev" dir="auto">\u0623\u0628\u062C\u062F \u0647\u0648\u0632 \u2014 ${Ye(i.font)}</div>`)),r.push(()=>{let c=t.querySelector("#pcFont");c.addEventListener("change",()=>{i.font=c.value,t.querySelector(".fontprev").textContent="\u0623\u0628\u062C\u062F \u0647\u0648\u0632 \u2014 "+i.font,t.querySelector(".fontprev").style.fontFamily=`"${i.font}", sans-serif`,n.touch(i,!0)}),t.querySelector(".fontprev").style.fontFamily=`"${i.font}", sans-serif`}),xe(a,r,i,n,"\u0627\u0644\u062D\u062C\u0645","fontSize",10,180,1),A_(a,r,i,n,"\u0627\u0644\u0648\u0632\u0646","weight",[[300,"\u062E\u0641\u064A\u0641 300"],[400,"\u0639\u0627\u062F\u064A 400"],[500,"\u0645\u062A\u0648\u0633\u0637 500"],[600,"\u0646\u0635\u0641 \u0639\u0631\u064A\u0636 600"],[700,"\u0639\u0631\u064A\u0636 700"],[800,"\u0623\u0639\u0631\u0636 800"],[900,"\u0623\u0633\u0648\u062F 900"]],!0),Wr(a,r,i,n,"\u0645\u0627\u0626\u0644","italic"),xe(a,r,i,n,"\u062A\u0628\u0627\u0639\u062F \u0627\u0644\u062D\u0631\u0648\u0641","spacing",-3,14,.5),xe(a,r,i,n,"\u062A\u0628\u0627\u0639\u062F \u0627\u0644\u0623\u0633\u0637\u0631","lineHeight",.8,3,.05),ws(a,r,i,n,"\u0644\u0648\u0646 \u0627\u0644\u0646\u0635","color",!1),xe(a,r,i,n,"\u0633\u0645\u0627\u0643\u0629 \u0627\u0644\u062D\u062F\u0648\u062F","strokeW",0,14,.5),ws(a,r,i,n,"\u0644\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F","strokeColor",!1),ws(a,r,i,n,"\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0646\u0635","textBg",!0),s.push(xi("\u0627\u0644\u062E\u0637 \u0648\u0627\u0644\u0646\u0645\u0637",!0,a.join("")))}else{let o=[],a=es();o.push(`<button class="btn wide" id="${a}">${Dt("upload")} \u0627\u0633\u062A\u0628\u062F\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0629</button>`),o.push(an("\u0646\u0633\u0628\u0629 \u0627\u0644\u0639\u0631\u0636",Xr(a+"s",E_,i.aspect))),o.push(an("\u0642\u0635\u0651 \u0627\u0644\u063A\u0644\u0627\u0641",'<span class="hint-inline">\u062A\u064F\u0642\u0635 \u0627\u0644\u0635\u0648\u0631\u0629 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0646\u0633\u0628\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629</span>')),r.push(()=>{t.querySelector("#"+a).onclick=()=>n.replaceImage(i.id),qr(t,a+"s",l=>{i.aspect=l,n.touch(i,!0)})}),ws(o,r,i,n,"\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0642\u0629","bg",!0),s.push(xi("\u0627\u0644\u0635\u0648\u0631\u0629",!0,o.join("")))}{let o=[`<div class="presets" id="pcBendPre">${yh.map((a,l)=>`<button class="btn chipbtn" data-i="${l}">${a.n}</button>`).join("")}</div>`];xe(o,r,i,n,"\u0627\u0646\u062D\u0646\u0627\u0621 \u0623\u0641\u0642\u064A","bendX",-180,180,1,"\xB0"),xe(o,r,i,n,"\u0627\u0646\u062D\u0646\u0627\u0621 \u0639\u0645\u0648\u062F\u064A","bendY",-180,180,1,"\xB0"),xe(o,r,i,n,"\u0627\u0644\u062A\u0648\u0627\u0621","twist",-180,180,1,"\xB0"),xe(o,r,i,n,"\u0642\u0648\u0629 \u0627\u0644\u0645\u0648\u062C\u0629","waveAmp",0,30,.5),xe(o,r,i,n,"\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u062C\u0627\u062A","waveCount",.5,5,.5),r.push(()=>{t.querySelector("#pcBendPre").querySelectorAll("button").forEach(a=>{a.onclick=()=>{let l=yh[+a.dataset.i].p;Object.entries(l).forEach(([c,h])=>n.setProp(i,c,h)),n.touch(i,!0),n.refreshPanel()}})}),s.push(xi("\u0627\u0644\u0627\u0646\u062D\u0646\u0627\u0621 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",!0,o.join("")))}{let o=[];xe(o,r,i,n,"\u0627\u0633\u062A\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0648\u0627\u0641","radius",0,50,1,"%"),xe(o,r,i,n,"\u0633\u0645\u0627\u0643\u0629 \u0627\u0644\u0625\u0637\u0627\u0631","border",0,15,.5,"%"),ws(o,r,i,n,"\u0644\u0648\u0646 \u0627\u0644\u0625\u0637\u0627\u0631","borderColor",!1),Wr(o,r,i,n,"\u0638\u0644 \u0623\u0633\u0641\u0644 \u0627\u0644\u0639\u0646\u0635\u0631","shadow"),s.push(xi("\u0627\u0644\u062D\u0648\u0627\u0641 \u0648\u0627\u0644\u0625\u0637\u0627\u0631",!1,o.join("")))}{let o=[];xe(o,r,i,n,"\u0627\u0644\u0645\u0648\u0636\u0639 \u0623\u0641\u0642\u064A","x",-150,150,1),xe(o,r,i,n,"\u0627\u0644\u0645\u0648\u0636\u0639 \u0639\u0645\u0648\u062F\u064A","y",-150,150,1),xe(o,r,i,n,"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0639\u0645\u0642)","z",-6,6,.2),xe(o,r,i,n,"\u0625\u0645\u0627\u0644\u0629 X","rotX",-180,180,1,"\xB0"),xe(o,r,i,n,"\u0625\u0645\u0627\u0644\u0629 Y","rotY",-180,180,1,"\xB0"),xe(o,r,i,n,"\u062F\u0648\u0631\u0627\u0646 Z","rotZ",-180,180,1,"\xB0"),xe(o,r,i,n,"\u0627\u0644\u062D\u062C\u0645","scale",.05,3,.01,"\xD7"),xe(o,r,i,n,"\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629","opacity",0,1,.01),o.push(`<button class="btn wide" id="pcResetT">${Dt("rotate")} \u062A\u0635\u0641\u064A\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644\u0627\u062A</button>`),r.push(()=>{t.querySelector("#pcResetT").onclick=()=>{["x","y","z","rotX","rotY","rotZ","scale","opacity"].forEach(a=>n.setProp(i,a,a==="scale"||a==="opacity"?1:0)),n.touch(i,!0),n.refreshPanel()}}),s.push(xi("\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0648\u0627\u0644\u0645\u0648\u0636\u0639",!1,o.join("")))}{let o=[];Wr(o,r,i,n,"\u0645\u0631\u0626\u064A","visible"),Wr(o,r,i,n,"\u0645\u0642\u0641\u0648\u0644 (\u0644\u0627 \u064A\u064F\u0633\u062D\u0628)","locked"),s.push(xi("\u0627\u0644\u0638\u0647\u0648\u0631 \u0648\u0627\u0644\u0642\u0641\u0644",!1,o.join("")))}t.innerHTML=s.join(""),r.forEach(o=>o())}function Xr(n,t,e){return`<select id="${n}">${t.map(i=>`<option value="${i[0]}" ${String(i[0])===String(e)?"selected":""}>${i[1]}</option>`).join("")}</select>`}function qr(n,t,e){let i=n.querySelector("#"+t);i.addEventListener("change",()=>e(i.value))}function T_(n,t){let e;return(...i)=>{clearTimeout(e),e=setTimeout(()=>n(...i),t)}}function xe(n,t,e,i,s,r,o,a,l,c=""){let h=es();n.push(an(s,`<div class="pair"><input type="range" id="${h}" min="${o}" max="${a}" step="${l}" value="${vh(e[r])}"><input type="number" class="num" id="${h}n" min="${o}" max="${a}" step="${l}" value="${vh(e[r])}">${c?`<span class="unit">${c}</span>`:""}</div>`)),t.push(()=>{let f=document.getElementById(h),d=document.getElementById(h+"n"),m=g=>{g=b_(g,o,a),i.setProp(e,r,g,!0),f.value=g,d.value=Math.round(g*100)/100};f.addEventListener("input",()=>m(parseFloat(f.value))),d.addEventListener("input",()=>{let g=parseFloat(d.value);isNaN(g)||m(g)}),f.addEventListener("change",()=>i.touch(e,!0)),d.addEventListener("change",()=>i.touch(e,!0))})}function A_(n,t,e,i,s,r,o,a=!1){let l=es();n.push(an(s,Xr(l,o,e[r]))),t.push(()=>qr(document,l,c=>{e[r]=a?parseFloat(c):c,i.touch(e,!0)}))}function ws(n,t,e,i,s,r,o){let a=es(),l=e[r]==="transparent";n.push(an(s,`<div class="pair colorpair">
    <input type="color" id="${a}" value="${l?"#ffffff":e[r]}" ${l?"disabled":""}>
    ${o?`<button class="btn mini" id="${a}t">${l?"\u0634\u0641\u0627\u0641 \u2713":"\u0634\u0641\u0627\u0641"}</button>`:""}
  </div>`)),t.push(()=>{let c=document.getElementById(a);c.addEventListener("input",()=>{i.setProp(e,r,c.value,!0),c.disabled=!1}),c.addEventListener("change",()=>i.touch(e,!0));let h=document.getElementById(a+"t");h&&(h.onclick=()=>{e[r]=e[r]==="transparent"?"#141414":"transparent",i.touch(e,!0),i.refreshPanel()})})}function Wr(n,t,e,i,s,r){let o=es();n.push(an(s,`<button class="btn mini tog" id="${o}" aria-pressed="${!!e[r]}">${e[r]?"\u0645\u0641\u0639\u0651\u0644":"\u0645\u0639\u0637\u0651\u0644"}</button>`)),t.push(()=>{let a=document.getElementById(o);a.onclick=()=>{i.setProp(e,r,!e[r]),a.setAttribute("aria-pressed",!!e[r]),a.textContent=e[r]?"\u0645\u0641\u0639\u0651\u0644":"\u0645\u0639\u0637\u0651\u0644",i.touch(e,!0)}})}var Mh=[["1080x1080","\u0645\u0631\u0628\u0639 1080\xD71080"],["1080x1350","\u0628\u0648\u0631\u062A\u0631\u064A\u0647 1080\xD71350"],["1080x1920","\u0633\u062A\u0648\u0631\u064A / \u0631\u064A\u0644\u0632 1080\xD71920"],["1920x1080","\u0639\u0631\u064A\u0636 1920\xD71080"],["1170x2532","\u0647\u0627\u062A\u0641 1170\xD72532"],["1200x628","\u063A\u0644\u0627\u0641 1200\xD7628"]];function bh(n){let t=w=>document.querySelector(w),e=t("#topbar"),i=t("#toolrail"),s=t("#stage");e.innerHTML=`
    <div class="brand">${Dt("logo",22)}<div class="bt"><b>\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0627\u0644\u0627\u0646\u062D\u0646\u0627\u0621</b><span>CURVE STUDIO \xB7 3D</span></div></div>
    <div class="hgroup" id="hWs">
      <select id="wsSelect" title="\u0628\u064A\u0626\u0627\u062A \u0627\u0644\u0639\u0645\u0644"></select>
      <button class="btn icon" id="wsNew" title="\u0628\u064A\u0626\u0629 \u0639\u0645\u0644 \u062C\u062F\u064A\u062F\u0629">${Dt("plus")}</button>
      <button class="btn icon" id="wsRename" title="\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629">${Dt("pen")}</button>
      <button class="btn icon" id="wsDelete" title="\u062D\u0630\u0641 \u0628\u064A\u0626\u0629 \u0627\u0644\u0639\u0645\u0644">${Dt("trash")}</button>
    </div>
    <div class="hgroup">
      <button class="btn" id="boardBtn">${Dt("board")} \u0627\u0644\u0644\u0648\u062D\u0629</button>
    </div>
    <div class="hspacer"></div>
    <div class="hgroup">
      <button class="btn icon" id="undoBtn" title="\u062A\u0631\u0627\u062C\u0639 (Ctrl+Z)">${Dt("undo")}</button>
      <button class="btn icon" id="redoBtn" title="\u0625\u0639\u0627\u062F\u0629 (Ctrl+Shift+Z)">${Dt("redo")}</button>
      <button class="btn icon" id="ioBtn" title="\u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 / \u0627\u0633\u062A\u064A\u0631\u0627\u062F">${Dt("check")}</button>
      <button class="btn icon" id="themeBtn" title="\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644\u064A/\u0627\u0644\u0646\u0647\u0627\u0631\u064A">${Dt("moon")}</button>
      <button class="btn icon" id="helpBtn" title="\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0648\u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A (H)">${Dt("help")}</button>
      <button class="btn primary" id="exportBtn">${Dt("download")} \u062D\u0641\u0638 \u0627\u0644\u0635\u0648\u0631\u0629</button>
    </div>`,i.innerHTML=`
    <button class="tool" id="toolMove" title="\u062A\u062D\u0631\u064A\u0643/\u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 (M)">${Dt("move")}</button>
    <button class="tool" id="toolOrbit" title="\u0639\u0631\u0636 \u0648\u062F\u0648\u0631\u0627\u0646 360\xB0 (M)">${Dt("orbit")}</button>
    <div class="tsep"></div>
    <button class="tool" id="fitBtn" title="\u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u0639\u0631\u0636 (0)">${Dt("fit")}</button>
    <button class="tool" id="rotBtn" title="\u062F\u0648\u0631\u0627\u0646 \u062A\u0644\u0642\u0627\u0626\u064A">${Dt("rotate")}</button>
    <button class="tool" id="gridBtn" title="\u0634\u0628\u0643\u0629 (G)">${Dt("grid")}</button>`;let r=document.createElement("div");r.id="boardPop",r.className="pop hidden",e.appendChild(r);function o(){let w=n.ws(),A=`${w.w}x${w.h}`,P=Mh.some(M=>M[0]===A);r.innerHTML=`
      <div class="popsec"><b>\u062D\u062C\u0645 \u0628\u064A\u0626\u0629 \u0627\u0644\u0639\u0645\u0644</b>
        ${vi("\u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062A",`<select id="bpSize">${Mh.map(M=>`<option value="${M[0]}" ${M[0]===A?"selected":""}>${M[1]}</option>`).join("")}<option value="custom" ${P?"":"selected"}>\u0645\u062E\u0635\u0635\u2026</option></select>`)}
        ${vi("\u0645\u062E\u0635\u0635",`<div class="pair"><input type="number" id="bpW" min="256" max="4096" step="1" value="${w.w}" class="num"><span class="unit">\xD7</span><input type="number" id="bpH" min="256" max="4096" step="1" value="${w.h}" class="num"><button class="btn mini" id="bpApply">\u062A\u0637\u0628\u064A\u0642</button></div>`)}
      </div>
      <div class="popsec"><b>\u062E\u0644\u0641\u064A\u0629 \u0628\u064A\u0626\u0629 \u0627\u0644\u0639\u0645\u0644</b>
        ${vi("\u0627\u0644\u0646\u0648\u0639",`<select id="bpType"><option value="color" ${w.bg.type==="color"?"selected":""}>\u0644\u0648\u0646</option><option value="gradient" ${w.bg.type==="gradient"?"selected":""}>\u062A\u062F\u0631\u0651\u062C</option><option value="transparent" ${w.bg.type==="transparent"?"selected":""}>\u0634\u0641\u0627\u0641\u0629 (PNG)</option></select>`)}
        <div id="bpColorRow">${vi("\u0627\u0644\u0644\u0648\u0646",`<input type="color" id="bpColor" value="${w.bg.color}">`)}</div>
        <div id="bpGradRow" class="${w.bg.type==="gradient"?"":"hidden"}">
          ${vi("\u0645\u0646",`<input type="color" id="bpFrom" value="${w.bg.from}">`)}
          ${vi("\u0625\u0644\u0649",`<input type="color" id="bpTo" value="${w.bg.to}">`)}
          ${vi("\u0627\u0644\u0632\u0627\u0648\u064A\u0629",`<div class="pair"><input type="range" id="bpAngle" min="0" max="360" value="${w.bg.angle}"><span class="unit">${w.bg.angle}\xB0</span></div>`)}
        </div>
      </div>`,r.querySelector("#bpSize").onchange=M=>{if(M.target.value!=="custom"){let[v,C]=M.target.value.split("x").map(Number);n.setWorkspaceSize(v,C)}},r.querySelector("#bpApply").onclick=()=>{let M=a(+r.querySelector("#bpW").value),v=a(+r.querySelector("#bpH").value);n.setWorkspaceSize(M,v)},r.querySelector("#bpType").onchange=M=>{n.setBg({type:M.target.value}),o()},r.querySelector("#bpColor")?.addEventListener("input",M=>n.setBg({color:M.target.value,type:"color"})),r.querySelector("#bpFrom")?.addEventListener("input",M=>n.setBg({from:M.target.value,type:"gradient"})),r.querySelector("#bpTo")?.addEventListener("input",M=>n.setBg({to:M.target.value,type:"gradient"})),r.querySelector("#bpAngle")?.addEventListener("input",M=>{n.setBg({angle:+M.target.value,type:"gradient"}),r.querySelector("#bpAngle").parentElement.querySelector(".unit").textContent=M.target.value+"\xB0"})}let a=w=>Math.max(256,Math.min(4096,Math.round(w)||1080));t("#boardBtn").onclick=w=>{w.stopPropagation(),o(),r.classList.toggle("hidden")},r.addEventListener("click",w=>w.stopPropagation()),t("#wsSelect").onchange=w=>n.switchWorkspace(w.target.value),t("#wsNew").onclick=()=>n.newWorkspace(),t("#wsRename").onclick=()=>n.renameWorkspace(),t("#wsDelete").onclick=()=>n.deleteWorkspace(),t("#undoBtn").onclick=()=>n.undo(),t("#redoBtn").onclick=()=>n.redo(),t("#exportBtn").onclick=()=>n.doExport(),t("#helpBtn").onclick=()=>_(),t("#ioBtn").onclick=()=>p(),t("#themeBtn").onclick=()=>n.setTheme(xt.ui.theme==="dark"?"light":"dark"),t("#toolMove").onclick=()=>n.setTool("move"),t("#toolOrbit").onclick=()=>n.setTool("orbit"),t("#fitBtn").onclick=()=>n.fitView(),t("#rotBtn").onclick=()=>{xt.ui.autoRotate=!xt.ui.autoRotate,l(),n.applyTool()},t("#gridBtn").onclick=()=>{xt.ui.grid=!xt.ui.grid,l(),n.applyFrame()};function l(){t("#toolMove").classList.toggle("on",xt.ui.tool==="move"),t("#toolOrbit").classList.toggle("on",xt.ui.tool==="orbit"),t("#rotBtn").classList.toggle("on",!!xt.ui.autoRotate),t("#gridBtn").classList.toggle("on",!!xt.ui.grid);let w=t("#hint");w.innerHTML=xt.ui.tool==="move"?"\u0627\u0633\u062D\u0628 \u0627\u0644\u0639\u0646\u0635\u0631 \u0644\u062A\u062D\u0631\u064A\u0643\u0647 \xB7 \u0627\u0633\u062D\u0628 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 360\xB0 \xB7 \u0627\u0644\u0639\u062C\u0644\u0629 \u0644\u0644\u062A\u0642\u0631\u064A\u0628 \xB7 \u0625\u0635\u0628\u0639\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0639\u0646\u0635\u0631 \u0644\u0644\u062A\u0643\u0628\u064A\u0631 \u0648\u0627\u0644\u062A\u062F\u0648\u064A\u0631":"\u0648\u0636\u0639 \u0627\u0644\u0639\u0631\u0636 360\xB0 \u2014 \u0627\u0633\u062D\u0628 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u062D\u0631\u060C \u0648\u0627\u0644\u0639\u062C\u0644\u0629 \u0644\u0644\u062A\u0642\u0631\u064A\u0628"}function c(){let w=n.ws(),A=t("#empty");if(w.elements.length){A.classList.add("hidden");return}A.classList.remove("hidden"),A.innerHTML=`
      <div class="emptybox">
        <div class="eico">${Dt("dragfile",40)}</div>
        <b>\u0627\u0628\u062F\u0623 \u0628\u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u062A\u0643 \u0623\u0648 \u0646\u0635\u0643</b>
        <p>\u0633\u062A\u0638\u0647\u0631 \u0635\u0648\u0631\u062A\u0643 \u0643\u0628\u0637\u0627\u0642\u0629/\u0634\u0627\u0634\u0629 \u0645\u0646\u062D\u0646\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 360\xB0</p>
        <div class="ebtns">
          <button class="btn primary" id="eImg">${Dt("image")} \u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629</button>
          <button class="btn" id="eTxt">${Dt("type")} \u0623\u0636\u0641 \u0646\u0635\u0627\u064B</button>
        </div>
        <p class="mini-h">\u0623\u0648 \u0623\u0641\u0644\u062A \u0645\u0644\u0641 \u0635\u0648\u0631\u0629 \u0647\u0646\u0627 \xB7 \u0623\u0648 \u0627\u0644\u0635\u0642 \u0635\u0648\u0631\u0629 \u0628\u0640 Ctrl+V</p>
      </div>`,A.querySelector("#eImg").onclick=()=>n.pickImages(),A.querySelector("#eTxt").onclick=()=>n.addText()}let h=t("#modals");function f(){h.innerHTML="",h.classList.remove("show")}function d({title:w,body:A,buttons:P=[],wide:M=!1}){h.innerHTML=`<div class="mbox ${M?"wide":""}">
      <div class="mhead"><b>${w}</b><button class="btn icon" id="mClose">${Dt("close")}</button></div>
      <div class="mbody">${A}</div>
      <div class="mfoot" id="mFoot"></div></div>`,h.classList.add("show");let v=t("#mFoot");return P.forEach((C,$)=>{let z=document.createElement("button");z.className="btn "+(C.primary?"primary":"")+(C.danger?"danger":""),z.innerHTML=C.label,z.onclick=()=>C.onClick?C.onClick(f):f(),v.appendChild(z)}),t("#mClose").onclick=f,f}h.addEventListener("click",w=>{w.target===h&&f()});function m(w,A,P){d({title:w,body:A,buttons:[{label:"\u0625\u0644\u063A\u0627\u0621"},{label:"\u0646\u0639\u0645\u060C \u0645\u062A\u0627\u0628\u0639\u0629",primary:!0,onClick:M=>{M(),P()}}]})}function g(w,A,P,M){d({title:w,body:`<div class="row"><label>${A}</label><div class="ctl"><input class="txt" id="pmIn" value="${Ye(P)}" maxlength="60"></div></div>`,buttons:[{label:"\u0625\u0644\u063A\u0627\u0621"},{label:"\u062A\u0637\u0628\u064A\u0642",primary:!0,onClick:v=>{let C=t("#pmIn").value.trim();v(),C&&M(C)}}]}),setTimeout(()=>{let v=t("#pmIn");v?.focus(),v?.select()},30)}function _(){let w=(A,P)=>`<tr><td><kbd>${A}</kbd></td><td>${P}</td></tr>`;d({title:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0648\u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A",wide:!0,body:`
      <div class="help">
        <div><b>\u0627\u0644\u0641\u0623\u0631\u0629</b><ul>
          <li>\u0627\u0633\u062D\u0628 \u0639\u0646\u0635\u0631\u0627\u064B \u0645\u062D\u062F\u062F\u0627\u064B \u0644\u062A\u062D\u0631\u064A\u0643\u0647 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0634\u0647\u062F.</li>
          <li>\u0627\u0633\u062D\u0628 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0641\u0627\u0631\u063A\u0629 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 360\xB0 \u062D\u0648\u0644 \u0627\u0644\u0639\u0645\u0644.</li>
          <li>\u0639\u062C\u0644\u0629 \u0627\u0644\u0641\u0623\u0631\u0629: \u062A\u0642\u0631\u064A\u0628/\u062A\u0628\u0639\u064A\u062F. Ctrl + \u0639\u062C\u0644\u0629 \u0641\u0648\u0642 \u0639\u0646\u0635\u0631 \u0645\u062D\u062F\u062F: \u062A\u0643\u0628\u064A\u0631\u0647.</li>
          <li>\u0636\u063A\u0637\u0629 \u0639\u0644\u0649 \u0639\u0646\u0635\u0631 \u062A\u062D\u062F\u062F\u0647 \u0648\u062A\u064F\u0638\u0647\u0631 \u062E\u0635\u0627\u0626\u0635\u0647\u060C \u0648\u0639\u0644\u0649 \u0634\u0631\u064A\u0637\u0647 \u0641\u064A \u0627\u0644\u0623\u0633\u0641\u0644 \u0643\u0630\u0644\u0643.</li>
        </ul></div>
        <div><b>\u0627\u0644\u0644\u0645\u0633 (\u0627\u0644\u0647\u0627\u062A\u0641)</b><ul>
          <li>\u0625\u0635\u0628\u0639 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0639\u0646\u0635\u0631: \u062A\u062D\u0631\u064A\u0643 \xB7 \u0639\u0644\u0649 \u0627\u0644\u062E\u0644\u0641\u064A\u0629: \u062F\u0648\u0631\u0627\u0646.</li>
          <li>\u0625\u0635\u0628\u0639\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u0645\u062D\u062F\u062F: \u062A\u0643\u0628\u064A\u0631 + \u062A\u062F\u0648\u064A\u0631.</li>
          <li>\u0625\u0635\u0628\u0639\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u062E\u0644\u0641\u064A\u0629: \u062A\u0642\u0631\u064A\u0628 \u0648\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627.</li>
        </ul></div>
        <div><b>\u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D</b><table>
          ${w("Ctrl+Z","\u062A\u0631\u0627\u062C\u0639")}${w("Ctrl+Shift+Z / Ctrl+Y","\u0625\u0639\u0627\u062F\u0629")}${w("Ctrl+D","\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0639\u0646\u0635\u0631")}${w("Ctrl+S","\u062D\u0641\u0638 \u0627\u0644\u0635\u0648\u0631\u0629 PNG")}${w("Delete","\u062D\u0630\u0641 \u0627\u0644\u0645\u062D\u062F\u062F")}
          ${w("\u0627\u0644\u0623\u0633\u0647\u0645","\u062A\u062D\u0631\u064A\u0643 \u062F\u0642\u064A\u0642 (Shift = \u0623\u0633\u0631\u0639)")}${w("Q / E","\u062A\u062F\u0648\u064A\u0631 \u062D\u0648\u0644 \u0645\u062D\u0648\u0631 Z")}${w("W / S","\u0625\u0645\u0627\u0644\u0629 \u062D\u0648\u0644 X")}${w("A / D","\u0625\u0645\u0627\u0644\u0629 \u062D\u0648\u0644 Y")}
          ${w("+ / \u2212","\u062A\u0643\u0628\u064A\u0631/\u062A\u0635\u063A\u064A\u0631 \u0627\u0644\u0645\u062D\u062F\u062F")}${w("0","\u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u0639\u0631\u0636")}${w("T","\u0646\u0635 \u062C\u062F\u064A\u062F")}${w("I","\u0635\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629")}${w("M","\u062A\u0628\u062F\u064A\u0644 \u0648\u0636\u0639 \u0627\u0644\u062A\u062D\u0631\u064A\u0631/\u0627\u0644\u0639\u0631\u0636")}${w("G","\u0627\u0644\u0634\u0628\u0643\u0629")}${w("Esc","\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062F")}${w("H","\u0647\u0630\u0647 \u0627\u0644\u0646\u0627\u0641\u0630\u0629")}
        </table></div>
        <div><b>\u0627\u0644\u0637\u0628\u0642\u0627\u062A</b><ul>
          <li>\u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0633\u0641\u0644\u064A \u064A\u0639\u0631\u0636 \u0627\u0644\u0637\u0628\u0642\u0627\u062A: \u0627\u0644\u0623\u0645\u0627\u0645 \u0623\u0648\u0644\u0627\u064B.</li>
          <li>\u0627\u0633\u062D\u0628 \u0634\u0631\u064A\u0637 \u0627\u0644\u0637\u0628\u0642\u0629 \u0623\u0641\u0642\u064A\u0627\u064B \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u2014 \u0636\u0639 \u0646\u0635\u0627\u064B \u0641\u0648\u0642 \u0635\u0648\u0631\u0629 \u0623\u0648 \u0627\u0644\u0639\u0643\u0633.</li>
          <li>\u0627\u0644\u0632\u0631 \u{1F441} \u0644\u0644\u0625\u062E\u0641\u0627\u0621\u060C \u{1F512} \u0644\u0644\u0642\u0641\u0644\u060C \u{1F5D1} \u0644\u0644\u062D\u0630\u0641\u060C \u0648\u0636\u063A\u0637\u0629 \u0645\u0632\u062F\u0648\u062C\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0633\u0645\u064A\u0629.</li>
        </ul></div>
        <div><b>\u0628\u064A\u0626\u0627\u062A \u0627\u0644\u0639\u0645\u0644</b><ul>
          <li>\u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649: \u0625\u0646\u0634\u0627\u0621/\u062A\u0633\u0645\u064A\u0629/\u062D\u0630\u0641 \u0628\u064A\u0626\u0627\u062A \u0639\u0645\u0644 \u0645\u062A\u0639\u062F\u062F\u0629\u060C \u0648\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062D\u062C\u0645 \u0648\u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0645\u0646 \u0632\u0631 \xAB\u0627\u0644\u0644\u0648\u062D\u0629\xBB.</li>
          <li>\u0643\u0644 \u0634\u064A\u0621 \u064A\u064F\u062D\u0641\u0638 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0641\u064A \u0627\u0644\u0645\u062A\u0635\u0641\u062D.</li>
        </ul></div>
      </div>`,buttons:[{label:"\u0641\u0647\u0645\u062A",primary:!0}]})}function p(){d({title:"\u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639",body:`<p>\u0635\u062F\u0651\u0631 \u0643\u0644 \u0628\u064A\u0626\u0627\u062A \u0627\u0644\u0639\u0645\u0644 (\u0645\u0639 \u0627\u0644\u0635\u0648\u0631) \u0641\u064A \u0645\u0644\u0641 JSON \u0648\u0627\u062D\u062F\u060C \u0623\u0648 \u0627\u0633\u062A\u0648\u0631\u062F \u0645\u0644\u0641\u0627\u064B \u0633\u0627\u0628\u0642\u0627\u064B.</p>
      <p class="mini-h">\u0645\u0644\u0627\u062D\u0638\u0629: \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u062A\u064F\u0636\u0645\u064E\u0651\u0646 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0644\u0641 \u0641\u0642\u062F \u064A\u0643\u0628\u0631 \u062D\u062C\u0645\u0647.</p>`,buttons:[{label:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0645\u0644\u0641\u2026",onClick:w=>{w(),n.importProject()}},{label:"\u062A\u0635\u062F\u064A\u0631 \u0645\u0644\u0641 JSON",primary:!0,onClick:w=>{w(),n.exportProject()}}]})}function u(w,A,P){let M=(n.ws().name||"design")+"-"+A+"x"+P+".png";d({title:"\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u062D\u0641\u0638 \u2014 "+A+"\xD7"+P,wide:!0,body:`<div class="exwrap"><img src="${w}" alt="\u0645\u0639\u0627\u064A\u0646\u0629"></div>
        <p class="mini-h">\u0625\u0646 \u0644\u0645 \u064A\u0628\u062F\u0623 \u0627\u0644\u062A\u0646\u0632\u064A\u0644 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B: \u0627\u0636\u063A\u0637 \u0632\u0631 \u0627\u0644\u062A\u0646\u0632\u064A\u0644\u060C \u0623\u0648 \u0627\u0646\u0642\u0631 \u0628\u0632\u0631 \u0627\u0644\u0641\u0623\u0631\u0629 \u0627\u0644\u0623\u064A\u0645\u0646 \u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0648\u0627\u062E\u062A\u0631 \xAB\u062D\u0641\u0638 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0627\u0633\u0645\xBB.</p>`,buttons:[{label:"\u0625\u063A\u0644\u0627\u0642"},{label:"\u062A\u0646\u0632\u064A\u0644 PNG",primary:!0,onClick:()=>{try{let v=document.createElement("a");v.href=w,v.download=M,document.body.appendChild(v),v.click(),v.remove()}catch{}}}]})}function E(w,A=2600){let P=document.createElement("div");return P.className="toast",P.innerHTML=w,t("#toasts").appendChild(P),setTimeout(()=>P.classList.add("out"),A-400),setTimeout(()=>P.remove(),A),P}function T(){let w=t("#wsSelect");w.innerHTML=xt.workspaces.map(A=>`<option value="${A.id}" ${A.id===xt.activeId?"selected":""}>${Ye(A.name)} \xB7 ${A.w}\xD7${A.h}</option>`).join(""),t("#themeBtn").innerHTML=Dt(xt.ui.theme==="dark"?"sun":"moon"),b()}function b(){let w=n.ws();t("#undoBtn").disabled=!ie.canUndo(w),t("#redoBtn").disabled=!ie.canRedo(w)}function O(){T(),n.refreshDock&&n.refreshDock(),sl(n),c(),l()}return{refreshAll:O,refreshHeader:T,refreshDock:()=>{n.refreshDock&&n.refreshDock(),c(),b()},refreshPanel:()=>{sl(n)},updateEmpty:c,updateUndoRedo:b,refreshTool:l,toast:E,modal:d,confirmModal:m,promptModal:g,openHelp:_,openExport:u,closeModal:f,get boardOpen(){return!r.classList.contains("hidden")},closeBoard(){r.classList.add("hidden")},renderBoard:o}}var vi=(n,t)=>`<div class="row"><label>${n}</label><div class="ctl">${t}</div></div>`;var rl=226,ol=30,ns=30,$n=n=>Math.max(0,Math.round(n*ns)/ns);function Sh(n){let t=document.getElementById("dock");t.innerHTML=`
    <div id="tlHead">
      <div class="tlgroup">
        <button class="tbtn" id="tlHome" title="\u0627\u0644\u0628\u062F\u0627\u064A\u0629 (Home)">\u23EE</button>
        <button class="tbtn big" id="tlPlay" title="\u062A\u0634\u063A\u064A\u0644/\u0625\u064A\u0642\u0627\u0641 (\u0645\u0633\u0627\u0641\u0629)">\u25B6</button>
        <button class="tbtn" id="tlEnd" title="\u0627\u0644\u0646\u0647\u0627\u064A\u0629 (End)">\u23ED</button>
        <button class="tbtn" id="tlLoop" title="\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644">\u27F2</button>
      </div>
      <span class="tltime" id="tlTimeLbl">0.00 / 5.00s</span>
      <div class="tlgroup">
        <label class="tlbl">\u0633\u0631\u0639\u0629 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629</label>
        <select id="tlRate" class="tsel mini"><option value="0.25">0.25\xD7</option><option value="0.5">0.5\xD7</option><option value="1" selected>1\xD7</option><option value="1.5">1.5\xD7</option><option value="2">2\xD7</option></select>
      </div>
      <div class="tlgroup">
        <label class="tlbl">\u0627\u0644\u0645\u062F\u0629</label>
        <input type="number" id="tlDur" class="tsel mini" min="1" max="60" step="0.5" value="5" style="width:56px"> \u062B
      </div>
      <div class="tlgroup">
        <button class="tbtn " id="tlAutoK" title="\u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A\u0629: \u0623\u064A \u062A\u0639\u062F\u064A\u0644 \u064A\u064F\u0633\u062C\u064E\u0651\u0644 \u0645\u0641\u062A\u0627\u062D\u0627\u064B \u0639\u0646\u062F \u0627\u0644\u0645\u0624\u0634\u0631 \u0627\u0644\u0632\u0645\u0646\u064A">\u25CF \u0645\u0641\u0627\u062A\u064A\u062D \u062A\u0644\u0642\u0627\u0626\u064A\u0629</button>
      </div>
      <div class="tlgroup">
        <select id="tlEase" class="tsel mini" disabled><option value="">\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0645\u0641\u062A\u0627\u062D\u2026</option>${ph.map(R=>`<option value="${R[0]}">${R[1]}</option>`).join("")}</select>
        <button class="tbtn" id="tlDelKf" disabled title="\u062D\u0630\u0641 \u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0645\u062D\u062F\u062F (Del)">${Dt("trash",14)} \u0645\u0641\u062A\u0627\u062D</button>
      </div>
      <div class="tlgroup">
        <label class="tlbl">\u062A\u0643\u0628\u064A\u0631</label>
        <input type="range" id="tlZoom" min="30" max="240" value="90" style="width:90px">
      </div>
      <div class="tlspacer"></div>
      <button class="btn" id="tlVideo" title="\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 WebM">${Dt("download")} \u0641\u064A\u062F\u064A\u0648</button>
      <button class="tbtn" id="tlCollapse" title="\u0637\u064A/\u0641\u062A\u062D \u0627\u0644\u0645\u062E\u0637\u0637">\u2304</button>
    </div>
    <div id="tlBody"><div id="tlInner"><div id="playhead"><div class="ph-head"></div></div></div></div>`;let e=t.querySelector("#tlBody"),i=t.querySelector("#tlInner"),s=t.querySelector("#playhead"),r=t.querySelector("#tlTimeLbl"),o=t.querySelector("#tlPlay"),a=t.querySelector("#tlEase"),l=t.querySelector("#tlDelKf"),c=90,h=0,f=!1,d=1,m=!0,g=!1,_=null,p=new Set;function u(){return Math.min(9e3,Math.max(300,n.ws().duration*c+40))}function E(){let R=n.ws(),I=u(),W=[];W.push(`<div class="trow ruler" style="height:26px">
      <div class="lcol rcol"><span class="rlbl">\u0627\u0644\u0637\u0628\u0642\u0627\u062A (${R.elements.length}) \xB7 \u0627\u0644\u0623\u0645\u0627\u0645 \u0623\u0648\u0644\u0627\u064B</span></div>
      <div class="track rtrack" style="width:${I}px"><canvas id="tlRuler" width="${I}" height="26"></canvas></div>
    </div>`),R.elements.forEach((H,nt)=>{let ot=H.anim,G=ot?Math.max(0,ot.in??0):0,J=ot?Math.min(R.duration,ot.out??R.duration):R.duration,at=ot?.speed??1,et=p.has(H.id),pt=H.id===n.selectedId,vt=new Set;ot&&Object.values(ot.props).forEach(yt=>yt.k.forEach(Jt=>vt.add(Math.round(Jt.t*ns)/ns))),W.push(`<div class="trow layer ${pt?"sel":""}" data-id="${H.id}" style="height:${ol}px">
        <div class="lcol">
          <button class="exp" data-id="${H.id}" title="\u0639\u0631\u0636 \u0627\u0644\u062E\u0635\u0627\u0626\u0635">${et?"\u25BE":"\u25B8"}</button>
          <span class="liic ${H.type}">${H.type==="image"?Dt("image",13):"T"}</span>
          <span class="lnm" title="${Ye(H.name)}">${Ye(H.name)}</span>
          <select class="tsel mini spd" data-id="${H.id}" title="\u0633\u0631\u0639\u0629 \u0627\u0644\u0637\u0628\u0642\u0629">${[.25,.5,1,1.5,2,3].map(yt=>`<option value="${yt}" ${yt===at?"selected":""}>${yt}\xD7</option>`).join("")}</select>
          <button class="cb eye" data-id="${H.id}">${Dt(H.visible?"eye":"eyeOff",13)}</button>
          <button class="cb lk ${H.locked?"on":""}" data-id="${H.id}">${Dt(H.locked?"lock":"unlock",13)}</button>
        </div>
        <div class="track" data-id="${H.id}" style="width:${I}px">
          <div class="lbar ${pt?"sel":""}" style="left:${G*c}px;width:${Math.max(4,(J-G)*c)}px" title="\u0627\u0633\u062D\u0628 \u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0644\u0644\u0642\u0635/\u0627\u0644\u062A\u0645\u062F\u064A\u062F \xB7 \u0627\u0633\u062D\u0628 \u0627\u0644\u0648\u0633\u0637 \u0644\u0644\u0625\u0632\u0627\u062D\u0629 \xB7 \u0646\u0642\u0631\u0629 \u0645\u0632\u062F\u0648\u062C\u0629 \u0644\u0644\u062A\u0635\u0641\u064A\u0631"></div>
          ${[...vt].map(yt=>`<div class="kfmini" style="left:${yt*c}px"></div>`).join("")}
        </div>
      </div>`),et&&Ln.forEach(yt=>{let Jt=new Set;ot&&yt.props.forEach(Qt=>ot.props[Qt]?.k.forEach(D=>Jt.add(Math.round(D.t*ns)/ns)));let Ot=Jt.size>0;W.push(`<div class="trow prop ${pt?"sel":""}" data-id="${H.id}" data-gid="${yt.id}" style="height:${ol}px">
          <div class="lcol pcol">
            <button class="ksw ${Ot?"on":""}" data-id="${H.id}" data-gid="${yt.id}" title="\u0645\u0641\u0627\u062A\u064A\u062D \u0647\u0630\u0647 \u0627\u0644\u062E\u0627\u0635\u064A\u0629 (\u062A\u0634\u063A\u064A\u0644/\u0625\u064A\u0642\u0627\u0641)">\u25C9</button>
            <button class="kadd" data-id="${H.id}" data-gid="${yt.id}" title="\u0625\u0636\u0627\u0641\u0629 \u0645\u0641\u062A\u0627\u062D \u0639\u0646\u062F \u0627\u0644\u0645\u0624\u0634\u0631">\u25C6+</button>
            <span class="pnm">${yt.n}</span>
          </div>
          <div class="track" data-id="${H.id}" data-gid="${yt.id}" style="width:${I}px">
            <div class="kline"></div>
            ${[...Jt].map(Qt=>{let D="io";for(let Gt of yt.props){let Wt=ot&&ot.props[Gt]&&ot.props[Gt].k.find(Tt=>Math.abs(Tt.t-Qt)<.001);if(Wt){D=Wt.e||"io";break}}let Pe=_&&_.id===H.id&&_.gid===yt.id&&Math.abs(_.t-Qt)<.001;return`<div class="kfd ${D==="h"?"hold":""} ${Pe?"sel":""}" style="left:${Qt*c}px" data-t="${Qt}" data-id="${H.id}" data-gid="${yt.id}" title="${Qt.toFixed(2)}s \xB7 ${D} \u2014 \u0646\u0642\u0631\u0629 \u0645\u0632\u062F\u0648\u062C\u0629 \u0644\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062A\u062E\u0641\u064A\u0641"></div>`}).join("")}
          </div>
        </div>`)})}),R.elements.length||W.push(`<div class="trow layer" style="height:${ol}px"><div class="lcol"><span class="chipsis">\u0644\u0627 \u0637\u0628\u0642\u0627\u062A \u0628\u0639\u062F \u2014 \u0623\u0636\u0641 \u0635\u0648\u0631\u0629 \u0623\u0648 \u0646\u0635\u0627\u064B \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649</span></div><div class="track" style="width:${I}px"></div></div>`),i.innerHTML=W.join("")+'<div style="height:8px"></div>',i.appendChild(s),T(),b(),Q()}function T(){let R=document.getElementById("tlRuler");if(!R)return;let I=R.getContext("2d"),W=getComputedStyle(document.documentElement),H=W.getPropertyValue("--line").trim()||"#e6e6e9",nt=W.getPropertyValue("--mut").trim()||"#71717a";I.clearRect(0,0,R.width,R.height),I.fillStyle=nt,I.font="9px Cairo, sans-serif",I.textBaseline="top";let ot=n.ws().duration,J=[.1,.25,.5,1,2,5,10].find(at=>at*c>=55)||10;for(let at=0;at<=ot+1e-6;at+=J){let et=Math.round(at*c)+.5;I.strokeStyle=H,I.beginPath(),I.moveTo(et,8),I.lineTo(et,26),I.stroke(),I.fillText(Math.round(at*10)/10+"s",et+3,4);for(let pt=1;pt<(J>=1?J/(J/4):4);pt++){let vt=Math.round((at+J*pt/(J>=1,4))*c)+.5;vt<ot*c&&(I.beginPath(),I.moveTo(vt,17),I.lineTo(vt,26),I.stroke())}}}function b(){let R=n.ws();i.querySelectorAll(".trow.layer").forEach(I=>{let W=I.dataset.id;W&&(I.addEventListener("click",H=>{let nt=H.target;if(nt.closest(".exp")&&nt.classList.contains("exp"),nt.closest(".eye")){let ot=R.elements.find(G=>G.id===W);ot.visible=!ot.visible,n.touch(ot,!0);return}if(nt.closest(".lk")){let ot=R.elements.find(G=>G.id===W);ot.locked=!ot.locked,n.touch(ot,!0);return}if(!nt.closest(".spd")&&!nt.closest(".exp")){if(nt.closest(".lbar")||nt.closest(".kfd")||nt.closest(".kfmini")){n.select(W);return}if(nt.classList.contains("track")){n.select(W);return}n.select(W)}}),I.addEventListener("dblclick",H=>{H.target.closest(".lnm")&&n.renameEl(W)}))}),i.querySelectorAll(".exp").forEach(I=>I.addEventListener("click",W=>{W.stopPropagation();let H=I.dataset.id;p.has(H)?p.delete(H):p.add(H),E()})),i.querySelectorAll(".spd").forEach(I=>I.addEventListener("change",()=>{let W=R.elements.find(H=>H.id===I.dataset.id);Hr(W,R.duration),W.anim.speed=parseFloat(I.value),n.touch(W,!0)})),i.querySelectorAll(".kadd").forEach(I=>I.addEventListener("click",W=>{W.stopPropagation();let H=R.elements.find(nt=>nt.id===I.dataset.id);C(H,I.dataset.gid)})),i.querySelectorAll(".ksw").forEach(I=>I.addEventListener("click",W=>{W.stopPropagation();let H=R.elements.find(nt=>nt.id===I.dataset.id);$(H,I.dataset.gid)})),O(),P(),v()}function O(){i.querySelectorAll(".track").forEach(R=>{R.addEventListener("pointerdown",I=>{I.target!==R&&I.target.tagName!=="CANVAS"||(I.preventDefault(),w(I))})})}function w(R){let I=n.ws();f&&Y(!1);let W=ot=>q($n((ot.clientX-A(ot.target))/c));W(R);let H=R.target;H.setPointerCapture(R.pointerId),H.addEventListener("pointermove",W);let nt=()=>{H.removeEventListener("pointermove",W),H.removeEventListener("pointerup",nt)};H.addEventListener("pointerup",nt)}function A(R){let I=R;for(;I&&!I.classList?.contains("track");)I=I.parentElement;return I?I.getBoundingClientRect().left:0}function P(){let R=n.ws();i.querySelectorAll(".kfd").forEach(I=>{I.addEventListener("pointerdown",W=>{W.preventDefault(),W.stopPropagation();let H=R.elements.find(vt=>vt.id===I.dataset.id),nt=I.dataset.gid,ot=Ln.find(vt=>vt.id===nt),G=parseFloat(I.dataset.t),J=W.clientX,at=!1;_={id:H.id,gid:nt,t:G},i.querySelectorAll(".kfd.sel").forEach(vt=>vt.classList.remove("sel")),I.classList.add("sel"),I.setPointerCapture(W.pointerId);let et=vt=>{let yt=vt.clientX-J;if(Math.abs(yt)>2&&(at=!0),!at)return;let Jt=I.parentElement.getBoundingClientRect(),Ot=$n(Math.max(0,Math.min(R.duration,G+yt/c)));_h(H,ot.props,G,Ot),_&&(_.t=Ot),G=Ot,M(I,Ot)},pt=()=>{I.removeEventListener("pointermove",et),I.removeEventListener("pointerup",pt),at&&n.touch(H,!0),z()};I.addEventListener("pointermove",et),I.addEventListener("pointerup",pt),z()}),I.addEventListener("dblclick",W=>{W.stopPropagation();let H=R.elements.find(et=>et.id===I.dataset.id),nt=Ln.find(et=>et.id===I.dataset.gid),ot=parseFloat(I.dataset.t),G=nt.props.map(et=>H.anim?.props[et]?.k.find(pt=>Math.abs(pt.t-ot)<.001)?.e).find(Boolean)||"l",J=["l","io","i","o","h","b"],at=J[(J.indexOf(G)+1)%J.length];nt.props.forEach(et=>H.anim?.props[et]?.k.forEach(pt=>{Math.abs(pt.t-ot)<.001&&(pt.e=at)})),n.touch(H,!0),E()})}),z()}function M(R,I){R.style.left=I*c+"px",R.dataset.t=I}function v(){let R=n.ws();i.querySelectorAll(".lbar").forEach(I=>{I.addEventListener("pointerdown",W=>{W.preventDefault(),W.stopPropagation();let H=R.elements.find(pt=>pt.id===I.parentElement.dataset.id);if(!H)return;Hr(H,R.duration);let nt=H.anim,ot=I.getBoundingClientRect(),G=W.clientX-ot.left<8?"in":ot.right-W.clientX<8?"out":"mid",J={x:W.clientX,in:nt.in??0,out:Math.min(nt.out??R.duration,R.duration)};I.setPointerCapture(W.pointerId);let at=pt=>{let vt=(pt.clientX-J.x)/c;if(G==="in")nt.in=$n(Math.max(0,Math.min(J.out-.15,J.in+vt)));else if(G==="out")nt.out=$n(Math.max(J.in+.15,Math.min(R.duration,J.out+vt)));else{let yt=J.out-J.in;nt.in=$n(Math.max(0,Math.min(R.duration-yt,J.in+vt))),nt.out=nt.in+yt}I.style.left=nt.in*c+"px",I.style.width=Math.max(4,(nt.out-nt.in)*c)+"px"},et=()=>{I.removeEventListener("pointermove",at),I.removeEventListener("pointerup",et),n.touch(H,!0)};I.addEventListener("pointermove",at),I.addEventListener("pointerup",et)}),I.addEventListener("dblclick",W=>{W.stopPropagation();let H=R.elements.find(nt=>nt.id===I.parentElement.dataset.id);H?.anim&&(H.anim.in=0,H.anim.out=R.duration,n.touch(H,!0))})})}function C(R,I){let W=n.ws();Ln.find(nt=>nt.id===I).props.forEach(nt=>Ss(R,nt,$n(h),pn(R,nt,h,W))),n.touch(R,!0),p.has(R.id)||p.add(R.id),E()}function $(R,I){let W=n.ws(),H=Ln.find(ot=>ot.id===I);H.props.some(ot=>R.anim?.props[ot]?.k.length)?H.props.forEach(ot=>{let G=pn(R,ot,h,W);R.anim?.props[ot]?.k.length&&(R[ot]=Math.round(G*1e3)/1e3),R.anim&&(R.anim.props[ot]={k:[]})}):H.props.forEach(ot=>Ss(R,ot,$n(h),pn(R,ot,h,W))),n.touch(R,!0),E()}function z(){let R=!!_&&!!i.querySelector(".kfd.sel");if(a.disabled=!R,l.disabled=!R,R){let W=n.ws().elements.find(ot=>ot.id===_.id),nt=Ln.find(ot=>ot.id===_.gid).props.map(ot=>W?.anim?.props[ot]?.k.find(G=>Math.abs(G.t-_.t)<.001)?.e).find(Boolean);nt&&(a.value=nt)}}a.addEventListener("change",()=>{if(!_)return;let I=n.ws().elements.find(H=>H.id===_.id);Ln.find(H=>H.id===_.gid).props.forEach(H=>I?.anim?.props[H]?.k.forEach(nt=>{Math.abs(nt.t-_.t)<.001&&(nt.e=a.value)})),n.touch(I,!0),E()}),l.addEventListener("click",()=>{if(!_)return;let I=n.ws().elements.find(H=>H.id===_.id),W=Ln.find(H=>H.id===_.gid);gh(I,W.props,_.t),_=null,n.touch(I,!0),E()});function q(R){let I=n.ws().duration;h=Math.max(0,Math.min(I,R)),n.stage.time=h,Q()}function Q(){s.style.left=rl+h*c+"px",r.textContent=h.toFixed(2)+" / "+n.ws().duration.toFixed(2)+"s",o.textContent=f?"\u23F8":"\u25B6"}function Y(R){f=R,R&&h>=n.ws().duration-.001&&(h=0),Q()}function st(R){if(!f)return;h+=R*d;let I=n.ws().duration;h>=I&&(m?h=0:(h=I,Y(!1))),n.stage.time=h,s.style.left=rl+h*c+"px",r.textContent=h.toFixed(2)+" / "+I.toFixed(2)+"s"}return o.addEventListener("click",()=>Y(!f)),t.querySelector("#tlHome").onclick=()=>{Y(!1),q(0)},t.querySelector("#tlEnd").onclick=()=>{Y(!1),q(n.ws().duration)},t.querySelector("#tlLoop").onclick=R=>{m=!m,R.currentTarget.classList.toggle("on",m)},t.querySelector("#tlLoop").classList.add("on"),t.querySelector("#tlRate").onchange=R=>{d=parseFloat(R.target.value)},t.querySelector("#tlDur").onchange=R=>{let I=n.ws();I.duration=Math.max(1,Math.min(60,parseFloat(R.target.value)||5)),I.elements.forEach(W=>{W.anim&&(W.anim.out>I.duration&&(W.anim.out=I.duration),W.anim.in>I.duration-.15&&(W.anim.in=Math.max(0,I.duration-.15)))}),ie.commit(I),q(Math.min(h,I.duration)),E(),n.scheduleSavePub()},t.querySelector("#tlAutoK").onclick=R=>{g=!g,R.currentTarget.classList.toggle("on",g)},t.querySelector("#tlZoom").oninput=R=>{c=parseFloat(R.target.value),E()},t.querySelector("#tlVideo").onclick=()=>n.exportVideo(),t.querySelector("#tlCollapse").onclick=R=>{t.classList.toggle("collapsed"),R.currentTarget.textContent=t.classList.contains("collapsed")?"\u2303":"\u2304"},s.addEventListener("pointerdown",R=>{R.preventDefault(),f&&Y(!1),s.setPointerCapture(R.pointerId);let I=H=>q($n((H.clientX-i.getBoundingClientRect().left-rl)/c)),W=()=>{s.removeEventListener("pointermove",I),s.removeEventListener("pointerup",W)};s.addEventListener("pointermove",I),s.addEventListener("pointerup",W)}),E(),{refresh:E,setTime:q,setPlaying:Y,tick:st,updatePlayhead:Q,get time(){return h},get playing(){return f},get autoKey(){return g},get px(){return c},get selKf(){return _},set selKf(R){_=R},expand(R){p.add(R),E()},deleteSelKf:()=>l.click()}}var wh=12,Yr=class{constructor(t,e){this.ctx=e,this.stageEl=t,this.elId=null,this.visible=!1,this.center=[0,0],this.rect=null;let i=document.createElement("div");i.id="gizmo",i.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:5;direction:ltr;overflow:hidden;",i.innerHTML=`<svg id="gzSvg" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible"></svg>
      <div id="gzLabel" class="gzlabel"></div>`,t.appendChild(i),this.root=i,this.svg=i.querySelector("#gzSvg"),this.label=i.querySelector("#gzLabel"),this.poly=document.createElementNS("http://www.w3.org/2000/svg","polyline"),this.poly.setAttribute("fill","none"),this.poly.setAttribute("stroke-width","1.5"),this.poly.setAttribute("stroke-dasharray","5 4"),this.svg.appendChild(this.poly),this.handles={};let s=(r,o,a)=>{let l=document.createElement("div");return l.className="gzh "+r,l.style.cursor=o,i.appendChild(l),this.handles[a]=this.handles[a]||[],this.handles[a].push(l),l};this.h={},this.h.nw=s("c","nwse-resize","scale"),this.h.ne=s("c","nesw-resize","scale"),this.h.sw=s("c","nesw-resize","scale"),this.h.se=s("c","nwse-resize","scale"),this.h.rot=s("r","grab","rot"),this.h.ml=s("sy","ew-resize","tiltY"),this.h.mr=s("sy","ew-resize","tiltY"),this.h.mt=s("sx","ns-resize","tiltX"),this.h.mb=s("sx","ns-resize","tiltX"),Object.entries(this.h).forEach(([r,o])=>this.bindHandle(r,o))}hide(){this.visible=!1,this.root.style.display="none",this.elId=null}_cur(t){return pn(this._el,t,this.ctx.stage.time,this.ctx.ws())}bindHandle(t,e){e.addEventListener("pointerdown",i=>{i.stopPropagation(),i.preventDefault();let s=this._el;if(!s||s.locked)return;let r=this.ctx;e.setPointerCapture(i.pointerId);let[o,a]=this.center,l={scale:this._cur("scale"),rotZ:this._cur("rotZ"),rotY:this._cur("rotY"),rotX:this._cur("rotX")},c=Math.hypot(i.clientX-o,i.clientY-a)||1,h=Math.atan2(i.clientY-a,i.clientX-o)*180/Math.PI,f=i.clientX,d=i.clientY,m=(p,u)=>r.setProp(s,p,Math.round(u*1e3)/1e3,!0),g=p=>{let u=p.clientX-f,E=p.clientY-d;if(e===this.h.nw||e===this.h.ne||e===this.h.sw||e===this.h.se){let T=Math.hypot(p.clientX-o,p.clientY-a)||1;m("scale",Math.max(.05,Math.min(4,l.scale*T/c)))}else if(e===this.h.rot){let T=Math.atan2(p.clientY-a,p.clientX-o)*180/Math.PI;m("rotZ",l.rotZ+(T-h))}else e===this.h.ml||e===this.h.mr?m("rotY",l.rotY+u*.4):m("rotX",l.rotX+E*.4)},_=p=>{e.removeEventListener("pointermove",g),e.removeEventListener("pointerup",_),e.removeEventListener("pointercancel",_),r.touch(s,!0),r.refreshPanel()};e.addEventListener("pointermove",g),e.addEventListener("pointerup",_),e.addEventListener("pointercancel",_)})}update(t){let e=t.elements.find(P=>P.id===this.ctx.selectedId),i=this.ctx.stage;if(!e||!e.visible||e.locked||i.time===void 0||this.ctx.isPlaying?.()){this.hide();return}let s=i.meshes.get(e.id);if(!s||!s.mesh.visible){this.hide();return}this._el=e,this.elId=e.id,this.root.style.display="";let o=i.canvas.getBoundingClientRect(),a=this.stageEl.getBoundingClientRect(),l=o.left-a.left,c=o.top-a.top,h=s.mesh,f=h.geometry.attributes.position,d=Math.round(Math.sqrt(f.count))-1,m=[];for(let P=0;P<=d;P++)m.push(P);for(let P=1;P<=d;P++)m.push(P*(d+1)+d);for(let P=d-1;P>=0;P--)m.push(d*(d+1)+P);for(let P=d-1;P>=1;P--)m.push(P*(d+1));let g=new F,_=1e9,p=1e9,u=-1e9,E=-1e9,T=[];h.updateWorldMatrix(!0,!1);for(let P of m){g.fromBufferAttribute(f,P).applyMatrix4(h.matrixWorld).project(i.camera);let M=l+(g.x*.5+.5)*o.width,v=c+(1-(g.y*.5+.5))*o.height;T.push(M.toFixed(1)+","+v.toFixed(1)),M<_&&(_=M),M>u&&(u=M),v<p&&(p=v),v>E&&(E=v)}this.poly.setAttribute("points",T.join(" ")),this.rect={minX:_,minY:p,maxX:u,maxY:E};let b=document.documentElement.dataset.theme==="dark";this.poly.setAttribute("stroke",b?"#ffffff":"#0b0b0c");let O=(_+u)/2,w=(p+E)/2;this.center=[O,w];let A=(P,M,v)=>{P.style.left=M-wh/2+"px",P.style.top=v-wh/2+"px"};A(this.h.nw,_,p),A(this.h.ne,u,p),A(this.h.sw,_,E),A(this.h.se,u,E),A(this.h.ml,_,w),A(this.h.mr,u,w),A(this.h.mt,O,p),A(this.h.mb,O,E),A(this.h.rot,O,p-30),this.label.style.left=Math.max(4,O-40)+"px",this.label.style.top=Math.max(2,p-30)+"px",this.label.textContent=e.name,this.label.style.display=p<34?"none":""}};var As=document.getElementById("gl"),Re=document.getElementById("stage"),Es=document.getElementById("frame"),Jn=document.getElementById("fileInput"),Ht=new Gr(As,Re),C_=il.load();if(!C_){let n=zr("\u0645\u0634\u0631\u0648\u0639\u064A \u0627\u0644\u0623\u0648\u0644");xt.workspaces=[n],xt.activeId=n.id}xt.workspaces.forEach(n=>ie.touch(n));var $e=null,Ts=null,Vt=null,al=null;function yi(n,t,e,i=!1){let s=kt.ws();(!!(n.anim&&n.anim.props&&n.anim.props[t]&&n.anim.props[t].k.length)||Vt&&Vt.autoKey)&&fh.has(t)?Ss(n,t,Math.round((Vt?Vt.time:0)*30)/30,e):n[t]=e}var Ee=(n,t)=>pn(n,t,Ht.time,kt.ws()),kt={state:xt,ws:nh,get selectedId(){return $e},stage:Ht,select:ye,touch:R_,addText:Ah,pickImages:Ch,removeEl:Rh,duplicateEl:Ph,moveLayer:P_,renameEl:I_,newWorkspace:D_,deleteWorkspace:N_,renameWorkspace:U_,switchWorkspace:F_,setWorkspaceSize:O_,setBg:B_,undo:Ih,redo:ll,doExport:Lh,setTool:Dh,setTheme:G_,applyTool:Uh,applyFrame:cn,fitView:Kn,replaceImage:L_,importProject:k_,exportProject:z_,refreshPanel:()=>Rt.refreshPanel(),setProp:yi,curVal:Ee,refreshDock:()=>{Vt&&Vt.refresh()},isPlaying:()=>!!(Vt&&Vt.playing),exportVideo:H_,scheduleSavePub:()=>ce(),get timeline(){return Vt}},Rt=bh(kt);function is(){Vt&&Vt.refresh(),Rt.updateEmpty()}window.__ctx=kt;function ye(n){$e=n,Ht.setSelection(n),Vt&&Vt.refresh(),Rt.refreshPanel()}function R_(n,t){t&&(ie.commit(kt.ws()),ce(),Vt&&Vt.refresh(),Rt.updateUndoRedo())}function Ah(){let n=kt.ws(),t=n.elements.filter(i=>i.type==="text").length+1,e=sh(t);n.elements.length&&(e.y=30),n.elements.unshift(e),ie.commit(n),ye(e.id),ce(),Rt.refreshAll&&Rt.refreshAll(),Rt.updateEmpty(),Rt.toast("\u0623\u064F\u0636\u064A\u0641 \u0646\u0635 \u2014 \u0639\u062F\u0651\u0644\u0647 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0627\u0644\u062E\u0635\u0627\u0626\u0635"),window.innerWidth<900&&document.body.classList.add("panel-open")}function Ch(){Ts=null,Jn.value="",Jn.click()}function hl(n){let t=kt.ws(),e=[...n].filter(r=>r.type&&r.type.startsWith("image/"));if(!e.length)return;let i=0,s=null;e.forEach((r,o)=>{let a=new FileReader;a.onload=()=>{let l=Or(a.result),c=t.elements.filter(f=>f.type==="image").length+1,h=rh(l,c);o>0&&(h.x=(o%3-1)*26,h.y=(Math.floor(o/3)%3-1)*22),t.elements.unshift(h),s=h,i++,i===e.length&&(ie.commit(t),ye(s.id),ce(),is(),Rt.toast("\u0623\u064F\u0636\u064A\u0641\u062A \u0627\u0644\u0635\u0648\u0631\u0629 \u2014 \u0627\u0633\u062D\u0628\u0647\u0627 \u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u064A\u0647\u0627 \u0644\u062A\u0639\u062F\u064A\u0644\u0647\u0627"),window.innerWidth<900&&document.body.classList.add("panel-open"))},a.readAsDataURL(r)})}function Rh(n){let t=kt.ws(),e=t.elements.findIndex(i=>i.id===n);e<0||(t.elements.splice(e,1),$e===n&&ye(null),ie.commit(t),ce(),is(),Rt.toast("\u062D\u064F\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631 \u2014 Ctrl+Z \u0644\u0644\u062A\u0631\u0627\u062C\u0639"))}function Ph(n){let t=kt.ws(),e=t.elements.findIndex(s=>s.id===n);if(e<0)return;let i=JSON.parse(JSON.stringify(t.elements[e]));i.id=Fr("t"),i.name=i.name+" (\u0646\u0633\u062E\u0629)",i.x=(i.x||0)+8,i.y=(i.y||0)-8,t.elements.splice(e,0,i),ie.commit(t),ye(i.id),ce(),is()}function P_(n,t,e){let i=kt.ws(),s=i.elements.findIndex(a=>a.id===n);if(s<0)return;let r=s;e==="index"&&typeof t=="number"?r=t:t==="front"?r=0:t==="back"?r=i.elements.length-1:typeof t=="number"&&(r=t),r=Math.max(0,Math.min(i.elements.length-1,r));let[o]=i.elements.splice(s,1);i.elements.splice(r,0,o),ie.commit(i),ce(),is()}function I_(n){let t=kt.ws(),e=t.elements.find(i=>i.id===n);e&&Rt.promptModal("\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629 \u0627\u0644\u0639\u0646\u0635\u0631","\u0627\u0644\u0627\u0633\u0645",e.name,i=>{e.name=i,ie.commit(t),ce(),is()})}function L_(n){Ts=n,Jn.value="",Jn.click()}Jn.addEventListener("change",()=>{if(Ts){let n=Jn.files&&Jn.files[0];if(n){let t=new FileReader;t.onload=()=>{let e=kt.ws(),i=e.elements.find(s=>s.id===Ts);i&&(i.assetId=Or(t.result),ie.commit(e),ce(),is(),Rt.toast("\u062A\u0645 \u0627\u0633\u062A\u0628\u062F\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0629"))},t.readAsDataURL(n)}Ts=null}else hl(Jn.files||[])});function D_(){let n=zr("\u0645\u0634\u0631\u0648\u0639 "+(xt.workspaces.length+1));xt.workspaces.push(n),xt.activeId=n.id,ie.touch(n),ye(null),Rt.refreshAll(),cn(),Kn(),ce(),Rt.toast("\u0623\u064F\u0646\u0634\u0626\u062A \u0628\u064A\u0626\u0629 \u0639\u0645\u0644 \u062C\u062F\u064A\u062F\u0629")}function U_(){let n=kt.ws();Rt.promptModal("\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629 \u0628\u064A\u0626\u0629 \u0627\u0644\u0639\u0645\u0644","\u0627\u0644\u0627\u0633\u0645",n.name,t=>{n.name=t,ie.commit(n),ce(),Rt.refreshHeader()})}function N_(){let n=kt.ws();Rt.confirmModal("\u062D\u0630\u0641 \u0628\u064A\u0626\u0629 \u0627\u0644\u0639\u0645\u0644",`\u0633\u064A\u062A\u0645 \u062D\u0630\u0641 \xAB${Ye(n.name)}\xBB \u0628\u0643\u0644 \u0639\u0646\u0627\u0635\u0631\u0647\u0627. \u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F\u061F`,()=>{let t=xt.workspaces.findIndex(e=>e.id===n.id);if(t>=0&&xt.workspaces.splice(t,1),!xt.workspaces.length){let e=zr("\u0645\u0634\u0631\u0648\u0639\u064A \u0627\u0644\u0623\u0648\u0644");xt.workspaces=[e]}xt.activeId=xt.workspaces[Math.min(t,xt.workspaces.length-1)].id,ie.touch(kt.ws()),ye(null),Rt.refreshAll(),cn(),Kn(),ce()})}function F_(n){xt.activeId=n,ie.touch(kt.ws()),ye(null),Rt.refreshAll(),cn(),Kn(),ce()}function O_(n,t){let e=kt.ws();e.w=n,e.h=t,ie.commit(e),Rt.refreshHeader(),cn(),Kn(),ce(),Rt.closeBoard()}function B_(n){let t=kt.ws();Object.assign(t.bg,n),ie.commit(t),cn(),ce()}function Ih(){let n=kt.ws();ie.undo(n)&&(n.elements.some(t=>t.id===$e)?Ht.setSelection($e):ye(null),Rt.refreshAll(),cn(),ce())}function ll(){let n=kt.ws();ie.redo(n)&&(n.elements.some(t=>t.id===$e)?Ht.setSelection($e):ye(null),Rt.refreshAll(),cn(),ce())}function Lh(){try{let n=Ht.exportPNG(kt.ws());Rt.openExport(n,kt.ws().w,kt.ws().h),ce()}catch(n){Rt.toast("\u062A\u0639\u0630\u0631 \u0627\u0644\u062A\u0635\u062F\u064A\u0631: "+n.message)}}function z_(){let n={};for(let s of xt.workspaces)for(let r of s.elements)r.assetId&&qe.has(r.assetId)&&(n[r.assetId]=qe.get(r.assetId).src);let t={app:"curve-studio",v:1,activeId:xt.activeId,workspaces:xt.workspaces.map(s=>JSON.parse(In(s))),assets:n},e=new Blob([JSON.stringify(t)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(e),i.download="curve-studio-project.json",document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),4e3),Rt.toast("\u0635\u064F\u062F\u0651\u0631 \u0645\u0644\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639")}function k_(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let t=n.files&&n.files[0];if(!t)return;let e=new FileReader;e.onload=()=>{try{let i=JSON.parse(e.result);if(!i||!Array.isArray(i.workspaces))throw new Error("\u0645\u0644\u0641 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D");for(let[s,r]of Object.entries(i.assets||{})){if(qe.has(s))continue;let o=Or(r),a=qe.get(o);qe.delete(o),a.id=s,qe.set(s,a)}xt.workspaces=i.workspaces,xt.activeId=i.activeId||xt.workspaces[0].id,xt.workspaces.forEach(s=>ie.touch(s)),ye(null),Rt.refreshAll(),cn(),Kn(),ce(),Rt.toast("\u0627\u0633\u062A\u064F\u0648\u0631\u062F \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0646\u062C\u0627\u062D")}catch(i){Rt.toast("\u0641\u0634\u0644 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F: "+i.message)}},e.readAsText(t)},n.click()}var V_=n=>new Promise(t=>setTimeout(t,n));async function H_(){let n=kt.ws();if(!("MediaRecorder"in window)||!HTMLCanvasElement.prototype.captureStream){Rt.toast("\u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0644\u0627 \u064A\u062F\u0639\u0645 \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u2014 \u0627\u0633\u062A\u062E\u062F\u0645 \u062D\u0641\u0638 \u0627\u0644\u0635\u0648\u0631\u0629 PNG");return}let t=n.w,e=n.h,i=document.createElement("canvas");i.width=t,i.height=e;let s=i.getContext("2d"),r=typeof i.captureStream=="function",o=i.captureStream(r?0:30),a=o.getVideoTracks()[0],l="video/webm;codecs=vp9";if(MediaRecorder.isTypeSupported(l)||(l="video/webm"),!MediaRecorder.isTypeSupported(l)){Rt.toast("\u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0644\u0627 \u064A\u062F\u0639\u0645 WebM");return}let c=new MediaRecorder(o,{mimeType:l,videoBitsPerSecond:12e6}),h=[];c.ondataavailable=C=>{C.data.size&&h.push(C.data)};let f=new Promise(C=>{c.onstop=C}),d=$e;ye(null);let m=Vt.playing;Vt.setPlaying(!1);let g=Vt.time,_=Ht.renderer.getPixelRatio(),p=Ht.camera.aspect;Ht.renderer.setPixelRatio(1),Ht.renderer.setSize(t,e,!1),Ht.camera.aspect=t/e,Ht.camera.updateProjectionMatrix();let u=()=>{if(n.bg.type==="color")s.fillStyle=n.bg.color;else if(n.bg.type==="gradient"){let C=((n.bg.angle||135)-90)*Math.PI/180,$=t/2,z=e/2,q=Math.abs(t*Math.cos(C))+Math.abs(e*Math.sin(C)),Q=s.createLinearGradient($-Math.cos(C)*q/2,z-Math.sin(C)*q/2,$+Math.cos(C)*q/2,z+Math.sin(C)*q/2);Q.addColorStop(0,n.bg.from),Q.addColorStop(1,n.bg.to),s.fillStyle=Q}else s.fillStyle="#ffffff";s.fillRect(0,0,t,e)},E=30,T=1/E,b=n.duration,O=Rt.toast("\u23FA \u062C\u0627\u0631\u064A \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u2026 0%",(b+4)*1e3);c.start(250);let w=performance.now(),A=0;try{for(;A/E<=b+1e-6;A++){let C=Math.min(A*T,b);Ht.time=C,Ht.syncAll(n),Ht.render(),u(),s.drawImage(Ht.renderer.domElement,0,0,t,e),r&&a.requestFrame&&a.requestFrame(),O&&A%10===0&&(O.textContent="\u23FA \u062C\u0627\u0631\u064A \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u2026 "+Math.round(C/b*100)+"%");let $=w+(A+1)*1e3/E;await V_(Math.max(0,$-performance.now()))}}catch(C){Rt.toast("\u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0635\u062F\u064A\u0631: "+C.message)}c.stop(),await f,Ht.renderer.setPixelRatio(_),Ht.resize(Ht.stageW,Ht.stageH),Ht.camera.aspect=p,Ht.camera.updateProjectionMatrix(),Vt.setTime(g),m&&Vt.setPlaying(!0),d&&ye(d),O&&O.remove();let P=new Blob(h,{type:l}),M=URL.createObjectURL(P),v=(n.name||"design")+"-"+t+"x"+e+".webm";Rt.modal({title:"\u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u062C\u0627\u0647\u0632 \u2014 "+(P.size/1048576).toFixed(1)+"MB",wide:!0,body:`<div class="exwrap"><video src="${M}" controls style="max-width:100%;max-height:46dvh;border-radius:8px;background:#000"></video>
      <p class="mini-h">\u0635\u064A\u063A\u0629 WebM (${t}\xD7${e} \xB7 ${b.toFixed(1)}\u062B \xB7 30fps) \u2014 \u062A\u0639\u0645\u0644 \u0641\u064A \u0643\u0644 \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u0648\u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060C \u0648\u064A\u0645\u0643\u0646 \u062A\u062D\u0648\u064A\u0644\u0647\u0627 MP4 \u0628\u0623\u064A \u0623\u062F\u0627\u0629.</p></div>`,buttons:[{label:"\u0625\u063A\u0644\u0627\u0642",onClick:C=>{C(),URL.revokeObjectURL(M)}},{label:"\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0641\u064A\u062F\u064A\u0648",primary:!0,onClick:()=>{let C=document.createElement("a");C.href=M,C.download=v,document.body.appendChild(C),C.click(),C.remove()}}]})}function Dh(n){xt.ui.tool=n,Rt.refreshTool()}function Uh(){Ht.controls.autoRotate=!!xt.ui.autoRotate}function G_(n){xt.ui.theme=n,document.documentElement.dataset.theme=n,Ht.setTheme(n==="dark"),Rt.refreshHeader(),ce()}function Kn(){Ht.fit(kt.ws())}function cn(){let n=kt.ws(),t=dh(n.bg);Es.classList.toggle("checker",t.transparent),Es.style.background=t.transparent?"":t.css,Es.classList.toggle("dots",!!xt.ui.grid),Nh()}function Nh(){let n=Re.getBoundingClientRect(),t=26,e=Math.max(80,n.width-t*2),i=Math.max(80,n.height-t*2),s=kt.ws().w/kt.ws().h,r=e,o=e/s;o>i&&(o=i,r=i*s),Es.style.width=r+"px",Es.style.height=o+"px"}var Eh=null;function ce(){clearTimeout(Eh),Eh=setTimeout(()=>{il.save()||console.warn('\u062A\u0639\u0630\u0631 \u0627\u0644\u062D\u0641\u0638 \u0627\u0644\u0645\u062D\u0644\u064A (\u0648\u0636\u0639 \u0645\u0639\u0627\u064A\u0646\u0629 \u0645\u0642\u064A\u062F\u061F) \u2014 \u0627\u0633\u062A\u062E\u062F\u0645 "\u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629" \u0644\u0644\u062A\u0635\u062F\u064A\u0631')},700)}var He=new Map,ln=null,cl=new F,$r=!1,Mi=null,Zn=null;function Zr(n,t){return Ht.raycast(kt.ws(),n,t)}Re.addEventListener("pointerdown",n=>{if(n.target!==As)return;if(He.set(n.pointerId,{x:n.clientX,y:n.clientY}),Mi={x:n.clientX,y:n.clientY,t:Date.now()},$r=!1,He.size===2){let[e,i]=[...He.values()],s=kt.ws().elements.find(r=>r.id===$e);if(xt.ui.tool==="move"&&s&&!s.locked&&s.visible){n.stopPropagation();try{Re.setPointerCapture(n.pointerId)}catch{}ln=null,Zn={dist:Math.hypot(i.x-e.x,i.y-e.y),ang:Math.atan2(i.y-e.y,i.x-e.x)*180/Math.PI,scale:s.scale,rotZ:s.rotZ};return}ln=null;return}if(He.size>2)return;let t=xt.ui.tool==="move"?Zr(n.clientX,n.clientY):null;if(t){n.stopPropagation();try{Re.setPointerCapture(n.pointerId)}catch{}ye(t.id);let e=Ht.meshes.get(t.id)?Ht.meshes.get(t.id).mesh.position.z:0,i=Ht.planePoint(n.clientX,n.clientY,e);i&&cl.set(Ee(t,"x")-i.x,Ee(t,"y")-i.y,0),ln=t}else ln=null},!0);Re.addEventListener("pointermove",n=>{if(!He.has(n.pointerId)){xt.ui.tool==="move"&&!He.size&&Zr(n.clientX,n.clientY)?As.style.cursor="grab":He.size||(As.style.cursor="");return}if(He.set(n.pointerId,{x:n.clientX,y:n.clientY}),Mi&&Math.hypot(n.clientX-Mi.x,n.clientY-Mi.y)>3&&($r=!0),Zn&&He.size===2){n.stopPropagation();let[t,e]=[...He.values()],i=kt.ws().elements.find(o=>o.id===$e);if(!i)return;let s=Math.hypot(e.x-t.x,e.y-t.y),r=Math.atan2(e.y-t.y,e.x-t.x)*180/Math.PI;yi(i,"scale",Math.max(.05,Math.min(4,Zn.scale*(s/Zn.dist))),!0),yi(i,"rotZ",Math.round((Zn.rotZ+(r-Zn.ang))*10)/10,!0);return}if(ln&&He.size===1){n.stopPropagation();let t=Ht.meshes.get(ln.id)?Ht.meshes.get(ln.id).mesh.position.z:0,e=Ht.planePoint(n.clientX,n.clientY,t);e&&(yi(ln,"x",Math.round((e.x+cl.x)*10)/10,!0),yi(ln,"y",Math.round((e.y+cl.y)*10)/10,!0))}},!0);function Fh(n){let t=!!Zn;if(He.delete(n.pointerId),He.size<2&&(Zn=null),ln){n.stopPropagation(),$r&&(ie.commit(kt.ws()),ce(),Rt.refreshPanel()),ln=null;return}if(t){ie.commit(kt.ws()),ce(),Rt.refreshPanel();return}if(Mi&&!$r&&Date.now()-Mi.t<450&&n.button===0){let e=Zr(n.clientX,n.clientY);e?ye(e.id):n.target.closest(".chip")||xt.ui.tool==="move"&&ye(null)}Mi=null}Re.addEventListener("pointerup",Fh,!0);Re.addEventListener("pointercancel",Fh,!0);As.addEventListener("dblclick",n=>{let t=Zr(n.clientX,n.clientY);if(t&&t.type==="text"){ye(t.id);let e=document.querySelector("#panel textarea");e&&(e.focus(),window.innerWidth<900&&document.body.classList.add("panel-open"))}});Re.addEventListener("wheel",n=>{let t=kt.ws().elements.find(e=>e.id===$e);n.ctrlKey&&t&&xt.ui.tool==="move"&&(n.preventDefault(),n.stopPropagation(),yi(t,"scale",Math.max(.05,Math.min(4,Ee(t,"scale")*(n.deltaY<0?1.07:.93)))),ie.commit(kt.ws()),ce(),Rt.refreshPanel())},{passive:!1,capture:!0});["dragover","drop"].forEach(n=>Re.addEventListener(n,t=>{t.preventDefault(),n==="drop"&&t.dataTransfer?.files?.length&&hl(t.dataTransfer.files)}));document.addEventListener("paste",n=>{let t=n.clipboardData?.items;if(!t)return;let e=[];for(let i of t)if(i.type&&i.type.startsWith("image/")){let s=i.getAsFile();s&&e.push(s)}e.length&&hl(e)});{let n=document.createElement("button");n.id="panelToggle",n.className="btn icon",n.title="\u062E\u0635\u0627\u0626\u0635 \u0627\u0644\u0639\u0646\u0635\u0631",n.innerHTML=Dt("sliders"),n.onclick=()=>document.body.classList.toggle("panel-open"),Re.appendChild(n)}document.addEventListener("keydown",n=>{let t=n.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable))return;let e=kt.ws(),i=e.elements.find(l=>l.id===$e),s=n.key,r=n.ctrlKey||n.metaKey;if(r&&s.toLowerCase()==="z"){n.preventDefault(),n.shiftKey?ll():Ih();return}if(r&&s.toLowerCase()==="y"){n.preventDefault(),ll();return}if(r&&s.toLowerCase()==="d"){i&&(n.preventDefault(),Ph(i.id));return}if(r&&s.toLowerCase()==="s"){n.preventDefault(),Lh();return}if(s==="Delete"||s==="Backspace"){i&&(n.preventDefault(),Rh(i.id));return}if(s==="Escape"){document.querySelector("#modals.show")?Rt.closeModal():ye(null);return}if(s.toLowerCase()==="h"){Rt.openHelp();return}if(s.toLowerCase()==="m"){Dh(xt.ui.tool==="move"?"orbit":"move");return}if(s.toLowerCase()==="g"){xt.ui.grid=!xt.ui.grid,Rt.refreshTool(),cn();return}if(s==="0"){Kn();return}if(s.toLowerCase()==="t"){Ah();return}if(s.toLowerCase()==="i"){Ch();return}if(s===" "){n.preventDefault(),Vt&&Vt.setPlaying(!Vt.playing);return}if(s==="Home"){Vt&&(Vt.setPlaying(!1),Vt.setTime(0));return}if(s==="End"){Vt&&(Vt.setPlaying(!1),Vt.setTime(e.duration));return}if((s==="ArrowLeft"||s==="ArrowRight")&&!i&&Vt){n.preventDefault(),Vt.setTime(Vt.time+(s==="ArrowRight"?1:-1)/30);return}if(s==="Delete"&&Vt&&Vt.selKf){Vt.deleteSelKf();return}if(!i)return;let o=(l,c)=>yi(i,l,Math.round(c*100)/100),a=n.shiftKey?8:1.5;if(s==="ArrowLeft")n.preventDefault(),o("x",Ee(i,"x")-a);else if(s==="ArrowRight")n.preventDefault(),o("x",Ee(i,"x")+a);else if(s==="ArrowUp")n.preventDefault(),o("y",Ee(i,"y")+a);else if(s==="ArrowDown")n.preventDefault(),o("y",Ee(i,"y")-a);else if(s.toLowerCase()==="q")o("rotZ",Ee(i,"rotZ")-4);else if(s.toLowerCase()==="e")o("rotZ",Ee(i,"rotZ")+4);else if(s.toLowerCase()==="w")o("rotX",Ee(i,"rotX")-4);else if(s.toLowerCase()==="s")o("rotX",Ee(i,"rotX")+4);else if(s.toLowerCase()==="a")o("rotY",Ee(i,"rotY")-4);else if(s.toLowerCase()==="d")o("rotY",Ee(i,"rotY")+4);else if(s==="+"||s==="=")o("scale",Math.min(4,Ee(i,"scale")*1.06));else if(s==="-"||s==="_")o("scale",Math.max(.05,Ee(i,"scale")*.94));else if(s.toLowerCase()==="r")o("rotX",0),o("rotY",0),o("rotZ",0);else return;ie.commit(e),ce()});var W_=new ResizeObserver(()=>{let n=Re.getBoundingClientRect();Ht.resize(Math.max(1,n.width),Math.max(1,n.height)),Nh()});W_.observe(Re);document.addEventListener("click",()=>{Rt.boardOpen&&Rt.closeBoard()});var Th=performance.now();function Oh(){let n=performance.now(),t=Math.min(.1,(n-Th)/1e3);Th=n,Vt&&Vt.tick(t),Ht.syncAll(kt.ws()),Ht.render(),al&&al.update(kt.ws()),requestAnimationFrame(Oh)}document.documentElement.dataset.theme=xt.ui.theme||"light";Ht.setTheme((xt.ui.theme||"light")==="dark");Vt=Sh(kt);al=new Yr(Re,kt);Uh();Rt.refreshAll();cn();Ht.time=Vt.time;{let n=Re.getBoundingClientRect();Ht.resize(Math.max(1,n.width),Math.max(1,n.height))}Kn();Oh();ce();Rt.toast("\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0641\u064A \u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0627\u0644\u0627\u0646\u062D\u0646\u0627\u0621 \u2726 \u0623\u0636\u0641 \u0635\u0648\u0631\u062A\u0643 \u0644\u062A\u0628\u062F\u0623",3600);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
