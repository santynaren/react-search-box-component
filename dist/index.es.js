import e,{useState as t,useRef as r,useEffect as n}from"react";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const o=({delay:o,onChange:l,setVal:c,placeholder:u},p)=>{const[i,s]=t(""),h=r();return n((()=>{const e=setTimeout((()=>c(i)),o);return()=>clearTimeout(e)}),[o,c,i]),e.createElement(e.Fragment,null,e.createElement("input",a({ref:h,type:"text",value:i,placeholder:u,onChange:e=>s(h.current.value)},p)))};export{o as Searchbox};
