(self.webpackChunkcd_user=self.webpackChunkcd_user||[]).push([[454],{8073:(g,h,u)=>{u.r(h),u.d(h,{default:()=>c});class a{static getDescendantProperty(n,t,r=[]){let e,l,i,s,f,o;if(t){if(i=t.indexOf("."),-1===i?e=t:(e=t.slice(0,i),l=t.slice(i+1)),s=n[e],null!==s&&typeof s<"u")if(l||"string"!=typeof s&&"number"!=typeof s)if("[object Array]"===Object.prototype.toString.call(s))for(f=0,o=s.length;f<o;f++)a.getDescendantProperty(s[f],l,r);else l&&a.getDescendantProperty(s,l,r);else r.push(s)}else r.push(n);return r}}class c{constructor(n=[],t=[],r={}){Array.isArray(t)||(r=t,t=[]),this.haystack=n,this.keys=t,this.options=Object.assign({caseSensitive:!1,sort:!1},r)}search(n=""){if(""===n)return this.haystack;const t=[];for(let r=0;r<this.haystack.length;r++){const e=this.haystack[r];if(0===this.keys.length){const l=c.isMatch(e,n,this.options.caseSensitive);l&&t.push({item:e,score:l})}else for(let l=0;l<this.keys.length;l++){const i=a.getDescendantProperty(e,this.keys[l]);let s=!1;for(let f=0;f<i.length;f++){const o=c.isMatch(i[f],n,this.options.caseSensitive);if(o){s=!0,t.push({item:e,score:o});break}}if(s)break}}return this.options.sort&&t.sort((r,e)=>r.score-e.score),t.map(r=>r.item)}static isMatch(n,t,r){n=String(n),t=String(t),r||(n=n.toLocaleLowerCase(),t=t.toLocaleLowerCase());const e=c.nearestIndexesFor(n,t);return!!e&&(n===t?1:e.length>1?e[e.length-1]-e[0]+2:2+e[0])}static nearestIndexesFor(n,t){const r=t.split("");let e=[];return c.indexesOfFirstLetter(n,t).forEach((i,s)=>{let f=i+1;e[s]=[i];for(let o=1;o<r.length;o++){if(f=n.indexOf(r[o],f),-1===f){e[s]=!1;break}e[s].push(f),f++}}),e=e.filter(i=>!1!==i),!!e.length&&e.sort((i,s)=>1===i.length?i[0]-s[0]:(i=i[i.length-1]-i[0])-(s=s[s.length-1]-s[0]))[0]}static indexesOfFirstLetter(n,t){const r=t[0];return n.split("").map((e,l)=>e===r&&l).filter(e=>!1!==e)}}}}]);