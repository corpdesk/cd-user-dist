(self.webpackChunkcd_user=self.webpackChunkcd_user||[]).push([[6667,9048],{6667:(U,_,f)=>{f.r(_),f.d(_,{SMOOTH_SCROLL_OPTIONS:()=>S,SmoothScroll:()=>j,SmoothScrollManager:()=>y,provideSmoothScrollOptions:()=>B});var c=f(2264),R=f(9354),M=f(823),u=f(4866);const d=.1,P="function"==typeof Float32Array;function O(r,i){return 1-3*i+3*r}function m(r,i){return 3*i-6*r}function T(r){return 3*r}function g(r,i,e){return((O(i,e)*r+m(i,e))*r+T(i))*r}function v(r,i,e){return 3*O(i,e)*r*r+2*m(i,e)*r+T(i)}function W(r){return r}function z(r,i,e,t){if(!(0<=r&&r<=1&&0<=e&&e<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===i&&e===t)return W;const l=P?new Float32Array(11):new Array(11);for(let n=0;n<11;++n)l[n]=g(n*d,r,e);return function(s){return 0===s?0:1===s?1:g(function o(n){let s=0,a=1;for(;10!==a&&l[a]<=n;++a)s+=d;--a;const E=s+(n-l[a])/(l[a+1]-l[a])*d,I=v(E,r,e);return I>=.001?function N(r,i,e,t){for(let l=0;l<4;++l){const o=v(i,e,t);if(0===o)return i;i-=(g(i,e,t)-r)/o}return i}(n,E,r,e):0===I?E:function C(r,i,e,t,l){let o,n,s=0;do{n=i+(e-i)/2,o=g(n,t,l)-r,o>0?e=n:i=n}while(Math.abs(o)>1e-7&&++s<10);return n}(n,s,s+d,r,e)}(s),i,t)}}const S=new c.InjectionToken("SMOOTH_SCROLL_OPTIONS");function B(r){return[{provide:S,useValue:r}]}let y=(()=>{class r{constructor(){this.document=(0,c.inject)(R.DOCUMENT),this.zone=(0,c.inject)(c.NgZone),this._defaultOptions={duration:468,easing:{x1:.42,y1:0,x2:.58,y2:1},...(0,c.inject)(S,{optional:!0})},this.onGoingScrolls=new Map}get now(){return this.document.defaultView.performance?.now?.bind(this.document.defaultView.performance)||Date.now}scrollElement(e,t,l){e.scrollLeft=t,e.scrollTop=l}getElement(e,t){return"string"==typeof e?(t||this.document).querySelector(e):(0,M.coerceElement)(e)}getScrollDestroyerRef(e){return this.onGoingScrolls.has(e)&&this.onGoingScrolls.get(e).next(),this.onGoingScrolls.set(e,new u.Subject).get(e)}step(e){return new u.Observable(t=>{let l=(this.now()-e.startTime)/e.duration;l=l>1?1:l;const o=e.easing(l);e.currentX=e.startX+(e.x-e.startX)*o,e.currentY=e.startY+(e.y-e.startY)*o,this.scrollElement(e.scrollable,e.currentX,e.currentY),requestAnimationFrame(()=>{t.next(),t.complete()})})}isReached(e,t){return e.currentX===e.x&&e.currentY===e.y&&(t.next(),!0)}scrolling(e,t){return this.step(e).pipe((0,u.takeWhile)(()=>!this.isReached(e,t)),(0,u.switchMap)(()=>this.scrolling(e,t)))}onScrollReached(e,t,l){l.complete(),this.onGoingScrolls.delete(e),this.zone.run(()=>t())}interrupted(e,t){return(0,u.merge)((0,u.fromEvent)(e,"wheel",{passive:!0,capture:!0}),(0,u.fromEvent)(e,"touchmove",{passive:!0,capture:!0}),t).pipe((0,u.take)(1))}applyScrollToOptions(e,t){return t.duration?new Promise(l=>{this.zone.runOutsideAngular(()=>{const o=this.getScrollDestroyerRef(e),n={scrollable:e,startTime:this.now(),startX:e.scrollLeft,startY:e.scrollTop,x:null==t.left?e.scrollLeft:~~t.left,y:null==t.top?e.scrollTop:~~t.top,duration:t.duration,easing:z(t.easing.x1,t.easing.y1,t.easing.x2,t.easing.y2)};this.scrolling(n,o).pipe((0,u.takeUntil)(this.interrupted(e,o)),(0,u.finalize)(()=>this.onScrollReached(e,l,o))).subscribe()})}):(this.scrollElement(e,t.left,t.top),Promise.resolve())}scrollTo(e,t){const l=this.getElement(e),o="rtl"===getComputedStyle(l).direction,n={...this._defaultOptions,...t,left:null==t.left?o?t.end:t.start:t.left,right:null==t.right?o?t.start:t.end:t.right};return null!=n.bottom&&(n.top=l.scrollHeight-l.clientHeight-n.bottom),o?(null!=n.left&&(n.right=l.scrollWidth-l.clientWidth-n.left),n.left=n.right?-n.right:n.right):null!=n.right&&(n.left=l.scrollWidth-l.clientWidth-n.right),this.applyScrollToOptions(l,n)}scrollToElement(e,t,l={}){const o=this.getElement(e),n=this.getElement(t,o);if(n&&o){const s=o.getBoundingClientRect(),a=n.getBoundingClientRect(),p={...l,left:a.left+o.scrollLeft-s.left+(l.left||0),top:a.top+o.scrollTop-s.top+(l.top||0)};return this.scrollTo(o,p)}return Promise.resolve()}static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275prov=c.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),j=(()=>{class r{constructor(){this.smoothScroll=(0,c.inject)(y),this.element=(0,c.inject)(c.ElementRef)}scrollTo(e){return this.smoothScroll.scrollTo(this.element,e)}scrollToElement(e,t){return this.smoothScroll.scrollToElement(this.element,e,t)}static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275dir=c.\u0275\u0275defineDirective({type:r,selectors:[["","smoothScroll",""]],exportAs:["smoothScroll"],standalone:!0})}return r})()}}]);