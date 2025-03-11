(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3632)}])},3632:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var r=t(5893),a=t(7294),l=t(88),c=t(8650),i=t(512),n=t(8388);function o(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,n.m6)((0,i.W)(s))}let d=a.forwardRef((e,s)=>{let{className:t,id:a,title:i,rating:n,summary:d,imageUrl:x,streamingServices:m,releaseYear:h,...u}=e;return(0,r.jsxs)("div",{ref:s,className:o("w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]",t),...u,children:[(0,r.jsxs)("div",{className:"relative h-48 w-full overflow-hidden",children:[(0,r.jsx)("img",{src:x,alt:i,className:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"}),(0,r.jsx)("div",{className:"absolute bottom-1 right-1",children:(0,r.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"TMDB Logo",className:"h-5 w-5 rounded"})})]}),(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-foreground",children:i}),(0,r.jsxs)("div",{className:"mt-1 flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(e=>{if(void 0===e)return null;let s=[],t=Math.floor(e);for(let e=0;e<t;e++)s.push((0,r.jsx)(l.Z,{className:"h-4 w-4 fill-current text-amber-400"},"star-".concat(e)));e%1>=.5&&s.push((0,r.jsx)(c.Z,{className:"h-4 w-4 fill-current text-amber-400"},"half-star"));let a=5-s.length;for(let e=0;e<a;e++)s.push((0,r.jsx)(l.Z,{className:"h-4 w-4 text-gray-300 dark:text-gray-600"},"empty-star-".concat(e)));return s})(n),n&&(0,r.jsxs)("span",{className:"ml-2 text-sm text-muted-foreground",children:[n.toFixed(1),"/5.0"]})]}),h&&(0,r.jsx)("span",{className:"text-sm text-muted-foreground",children:h})]})]}),d&&(0,r.jsx)("p",{className:"mb-4 text-sm text-muted-foreground line-clamp-3",children:d}),m&&m.length>0&&(0,r.jsxs)("div",{className:"flex flex-wrap items-center gap-2 pt-2 border-t border-border",children:[(0,r.jsx)("span",{className:"text-xs text-muted-foreground",children:"Available on:"}),m.map((e,s)=>(0,r.jsx)("div",{className:"px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground",children:e},s))]})]})]})});d.displayName="TVSeriesCard";var x=t(3432);let m=e=>{let{className:s,size:t=24}=e;return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4",children:[(0,r.jsx)(x.Z,{className:o("animate-spin text-primary",s),size:t}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Loading Turkish Series..."})]})},h=()=>(0,r.jsx)("footer",{className:"bg-white py-4 mt-8",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("span",{className:"text-sm text-gray-600",children:"Powered by"}),(0,r.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:(0,r.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"TMDB Logo",className:"h-5"})})]}),(0,r.jsx)("p",{className:"text-xs text-gray-500 text-center",children:"This product uses the TMDB API but is not endorsed or certified by TMDB"})]})})}),u="be669d8e5e5f8baa1d24613bc61f4171";function f(){console.log("API Key:",u);let[e,s]=(0,a.useState)([]),[t,l]=(0,a.useState)(!0),[c,i]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(async()=>{try{let e=new Date(new Date().setFullYear(new Date().getFullYear()-5)).toISOString().split("T")[0],t="".concat("https://api.themoviedb.org/3","/discover/tv?api_key=").concat(u,"&with_original_language=tr&sort_by=popularity.desc&first_air_date_gte=").concat(e,"&page=1");console.log("Fetching from URL:",t);let r=await fetch(t);if(!r.ok)throw Error("HTTP error! status: ".concat(r.status));let a=await r.json();console.log("API Response:",a);let c=a.results.map(e=>({id:e.id.toString(),title:e.name,rating:e.vote_average/2,imageUrl:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),summary:e.overview,streamingServices:[],releaseYear:new Date(e.first_air_date).getFullYear()}));s(c),l(!1)}catch(e){console.error("Error fetching Turkish series:",e),e instanceof Error&&console.error("Error details:",{message:e.message,stack:e.stack}),i("Failed to load Turkish series. Please try again later."),l(!1)}})()},[]),(0,r.jsxs)("div",{className:"min-h-screen bg-gray-100 flex flex-col",children:[(0,r.jsx)("div",{className:"flex-grow py-8 px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Top Turkish Series"}),c&&(0,r.jsx)("div",{className:"text-red-500 text-center",children:c}),t&&(0,r.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,r.jsx)(m,{size:48})}),!t&&!c&&e.length>0&&(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(e=>(0,r.jsx)(d,{...e},e.id))}),!t&&!c&&0===e.length&&(0,r.jsx)("div",{className:"text-center text-gray-600",children:"No Turkish series found. Please try again later."})]})}),(0,r.jsx)(h,{})]})}}},function(e){e.O(0,[335,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);