"use strict";(self["webpackChunkorangehrm_installer"]=self["webpackChunkorangehrm_installer"]||[]).push([[848],{4848:function(e,t,n){n.r(t),n.d(t,{ResizeObserver:function(){return Z},ResizeObserverEntry:function(){return O},ResizeObserverSize:function(){return f}});n(3248);var r,i=[],o=function(){return i.some((function(e){return e.activeTargets.length>0}))},s=function(){return i.some((function(e){return e.skippedTargets.length>0}))},a="ResizeObserver loop completed with undelivered notifications.",c=function(){var e;"function"===typeof ErrorEvent?e=new ErrorEvent("error",{message:a}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=a),window.dispatchEvent(e)};(function(e){e["BORDER_BOX"]="border-box",e["CONTENT_BOX"]="content-box",e["DEVICE_PIXEL_CONTENT_BOX"]="device-pixel-content-box"})(r||(r={}));var u,h=function(e){return Object.freeze(e)},f=function(){function e(e,t){this.inlineSize=e,this.blockSize=t,h(this)}return e}(),d=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,h(this)}return e.prototype.toJSON=function(){var e=this,t=e.x,n=e.y,r=e.top,i=e.right,o=e.bottom,s=e.left,a=e.width,c=e.height;return{x:t,y:n,top:r,right:i,bottom:o,left:s,width:a,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),v=function(e){return e instanceof SVGElement&&"getBBox"in e},l=function(e){if(v(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},p=function(e){var t,n;if(e instanceof Element)return!0;var r=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},g=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},b="undefined"!==typeof window?window:{},w=new WeakMap,E=/auto|scroll/,x=/^tb|vertical/,m=/msie|trident/i.test(b.navigator&&b.navigator.userAgent),T=function(e){return parseFloat(e||"0")},z=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new f((n?t:e)||0,(n?e:t)||0)},y=h({devicePixelContentBoxSize:z(),borderBoxSize:z(),contentBoxSize:z(),contentRect:new d(0,0,0,0)}),S=function(e,t){if(void 0===t&&(t=!1),w.has(e)&&!t)return w.get(e);if(l(e))return w.set(e,y),y;var n=getComputedStyle(e),r=v(e)&&e.ownerSVGElement&&e.getBBox(),i=!m&&"border-box"===n.boxSizing,o=x.test(n.writingMode||""),s=!r&&E.test(n.overflowY||""),a=!r&&E.test(n.overflowX||""),c=r?0:T(n.paddingTop),u=r?0:T(n.paddingRight),f=r?0:T(n.paddingBottom),p=r?0:T(n.paddingLeft),g=r?0:T(n.borderTopWidth),b=r?0:T(n.borderRightWidth),S=r?0:T(n.borderBottomWidth),B=r?0:T(n.borderLeftWidth),O=p+u,R=c+f,k=B+b,C=g+S,N=a?e.offsetHeight-C-e.clientHeight:0,D=s?e.offsetWidth-k-e.clientWidth:0,_=i?O+k:0,M=i?R+C:0,P=r?r.width:T(n.width)-_-D,F=r?r.height:T(n.height)-M-N,I=P+O+D+k,L=F+R+N+C,W=h({devicePixelContentBoxSize:z(Math.round(P*devicePixelRatio),Math.round(F*devicePixelRatio),o),borderBoxSize:z(I,L,o),contentBoxSize:z(P,F,o),contentRect:new d(p,c,P,F)});return w.set(e,W),W},B=function(e,t,n){var i=S(e,n),o=i.borderBoxSize,s=i.contentBoxSize,a=i.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return a;case r.BORDER_BOX:return o;default:return s}},O=function(){function e(e){var t=S(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=h([t.borderBoxSize]),this.contentBoxSize=h([t.contentBoxSize]),this.devicePixelContentBoxSize=h([t.devicePixelContentBoxSize])}return e}(),R=function(e){if(l(e))return 1/0;var t=0,n=e.parentNode;while(n)t+=1,n=n.parentNode;return t},k=function(){var e=1/0,t=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new O(t.target),i=R(t.target);r.push(n),t.lastReportedSize=B(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){var o=r[n];o()}return e},C=function(e){i.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(R(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},N=function(){var e=0;C(e);while(o())e=k(),C(e);return s()&&c(),e>0},D=[],_=function(){return D.splice(0).forEach((function(e){return e()}))},M=function(e){if(!u){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver((function(){return _()})).observe(n,r),u=function(){n.textContent=""+(t?t--:t++)}}D.push(e),u()},P=function(e){M((function(){requestAnimationFrame(e)}))},F=0,I=function(){return!!F},L=250,W={attributes:!0,characterData:!0,childList:!0,subtree:!0},X=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],A=function(e){return void 0===e&&(e=0),Date.now()+e},V=!1,q=function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=L),!V){V=!0;var n=A(e);P((function(){var r=!1;try{r=N()}finally{if(V=!1,e=n-A(),!I())return;r?t.run(1e3):e>0?t.run(e):t.start()}}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,W)};document.body?t():b.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),X.forEach((function(t){return b.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),X.forEach((function(t){return b.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}(),G=new q,H=function(e){!F&&e>0&&G.start(),F+=e,!F&&G.stop()},J=function(e){return!v(e)&&!g(e)&&"inline"===getComputedStyle(e).display},U=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e=B(this.target,this.observedBox,!0);return J(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},e}(),j=function(){function e(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return e}(),Y=new WeakMap,K=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Q=function(){function e(){}return e.connect=function(e,t){var n=new j(e,t);Y.set(e,n)},e.observe=function(e,t,n){var r=Y.get(e),o=0===r.observationTargets.length;K(r.observationTargets,t)<0&&(o&&i.push(r),r.observationTargets.push(new U(t,n&&n.box)),H(1),G.schedule())},e.unobserve=function(e,t){var n=Y.get(e),r=K(n.observationTargets,t),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),H(-1))},e.disconnect=function(e){var t=this,n=Y.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),Z=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Q.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Q.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Q.unobserve(this,e)},e.prototype.disconnect=function(){Q.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}()}}]);
//# sourceMappingURL=848.js.map