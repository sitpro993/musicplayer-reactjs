(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{52:function(e,n,t){},58:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var s=t(1),r=t.n(s),c=t(47),i=t.n(c),a=(t(52),t(15)),o=t(19),u=t(14),g=(t(58),t(2));var l=function(e){return Object(g.jsxs)("div",{className:"control",children:[Object(g.jsx)("div",{className:"btn btn-repeat",onClick:function(){return e.setIsRepeat(!e.isRepeat)},children:Object(g.jsx)(o.a,{className:e.isRepeat?"active":"",icon:u.g})}),Object(g.jsx)("div",{className:"btn btn-prev",onClick:function(){return e.skipSong(!1)},children:Object(g.jsx)(o.a,{icon:u.a})}),Object(g.jsx)("div",{className:"btn btn-toggle-play",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(g.jsx)(o.a,{icon:e.isPlaying?u.d:u.e})}),Object(g.jsx)("div",{className:"btn btn-next",onClick:function(){return e.skipSong()},children:Object(g.jsx)(o.a,{icon:u.c})}),Object(g.jsx)("div",{className:"btn btn-random",onClick:function(){return e.setIsRandom(!e.isRandom)},children:Object(g.jsx)(o.a,{className:e.isRandom?"active":"",icon:u.f})})]})},d=t(66),m=t(65);var j=function(e){var n=Object(s.useRef)(null),t=Object(s.useRef)(null),r=Object(s.useRef)(null),c=Object(s.useState)(0),i=Object(a.a)(c,2),o=i[0],u=i[1],j=Object(s.useState)(0),b=Object(a.a)(j,2),x=b[0],p=b[1],O=Object(s.useState)(!1),f=Object(a.a)(O,2),h=f[0],v=f[1],S=Object(s.useState)(!1),I=Object(a.a)(S,2),y=I[0],N=I[1],C=Object(s.useState)(!1),k=Object(a.a)(C,2),R=k[0],_=k[1],w=Object(d.a)(),E={loop:1/0,duration:10,ease:"linear"};if(Object(s.useEffect)((function(){u(r.current.offsetWidth)}),[r,o]),window.addEventListener("scroll",(function(){p(window.scrollY)})),r.current){var M=o-x;r.current.style.width=M>0?M+"px":"0px",r.current.style.opacity=M/o}return Object(s.useEffect)((function(){h?(n.current.play(),w.start({rotate:360})):(n.current.pause(),w.stop())})),Object(g.jsxs)("div",{className:"dashboard",children:[Object(g.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:n,onTimeUpdate:function(){var e=n.current.currentTime/n.current.duration*100;t.current.value=e},onEnded:function(){if(!1===y)!1===R&&e.setCurrentSongIndex((function(){var n=e.currentSongIndex;return++n>e.songs.length-1&&(n=0),n}));else{var t=e.currentSongIndex;e.setCurrentSongIndex(t),n.current.play()}}}),Object(g.jsxs)("header",{children:[Object(g.jsx)("h4",{children:"Now playing:"}),Object(g.jsx)("h2",{children:e.songs[e.currentSongIndex].title})]}),Object(g.jsx)("div",{className:"cd",ref:r,children:Object(g.jsx)(m.a.div,{className:"cd-thumb",style:{backgroundImage:"url(".concat(e.songs[e.currentSongIndex].img_src,")")},animate:w,transition:E})}),Object(g.jsx)(l,{isPlaying:h,setIsPlaying:v,skipSong:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(n)if(!1===R)e.setCurrentSongIndex((function(){var n=e.currentSongIndex;return++n>e.songs.length-1&&(n=0),n}));else{for(var t=e.currentSongIndex;t===e.currentSongIndex;)t=Math.floor(Math.random()*e.songs.length);e.setCurrentSongIndex(t)}else if(!1===R)e.setCurrentSongIndex((function(){var n=e.currentSongIndex;return--n<0&&(n=e.songs.length-1),n}));else{for(var s=e.currentSongIndex;s===e.currentSongIndex;)s=Math.floor(Math.random()*e.songs.length);e.setCurrentSongIndex(s)}},isRepeat:y,setIsRepeat:N,isRandom:R,setIsRandom:_}),Object(g.jsx)("input",{id:"progress",className:"progress",type:"range",defaultValue:"0",step:"0.1",min:"0",max:"100",ref:t,onChange:function(e){var t=n.current.duration*e.target.value/100;n.current.currentTime=t}})]})};t(60),t(61);var b=function(e){return Object(g.jsx)("div",{className:"playlist",children:e.songs.map((function(n,t){return Object(g.jsxs)("div",{className:t===e.currentSongIndex?"song active-list":"song",onClick:function(){return e.setCurrentSongIndex(t)},children:[Object(g.jsx)("div",{className:"thumb",style:{backgroundImage:"url(".concat(n.img_src,")")}}),Object(g.jsxs)("div",{className:"body",children:[Object(g.jsx)("h3",{className:"title",children:n.title}),Object(g.jsx)("p",{className:"author",children:n.artist})]}),Object(g.jsx)("div",{className:"option",children:Object(g.jsx)(o.a,{icon:u.b})})]},t)}))})};var x=function(){var e=Object(s.useState)([{title:"Cartoon - [NCS Release]",artist:"On & On (feat. Daniel Levi)",img_src:"./images/song-1.png",src:"./music/song-1.mp3"},{title:"Th\u1edf",artist:"Da LAB ft. Juky San",img_src:"./images/song-2.png",src:"./music/song-2.mp3"},{title:"Bad Habits",artist:"Ed Sheeran",img_src:"./images/song-3.png",src:"./music/song-3.mp3"},{title:"Begin",artist:"Gaho",img_src:"./images/song-4.png",src:"./music/song-4.mp3"},{title:"Diamond",artist:"Ha Hyun Woo (Guckkasten)",img_src:"./images/song-5.png",src:"./music/song-5.mp3"},{title:"With you(Ng\u1eabu h\u1ee9ng)",artist:"Nick Strand, Hoaprox, Mio",img_src:"./images/song-6.png",src:"./music/song-6.mp3"},{title:"Khi em l\u1edbn",artist:"Orange, Ho\xe0ng D\u0169ng",img_src:"./images/song-7.png",src:"./music/song-7.mp3"},{title:"Tr\u1ed1n t\xecm",artist:"\u0110en v\xe2u",img_src:"./images/song-8.png",src:"./music/song-8.mp3"},{title:"I do",artist:"911 band",img_src:"./images/song-9.png",src:"./music/song-9.mp3"},{title:"Believer",artist:"Imagine dragon",img_src:"./images/song-10.png",src:"./music/song-10.mp3"}]),n=Object(a.a)(e,1)[0],t=Object(s.useState)(0),r=Object(a.a)(t,2),c=r[0],i=r[1];return Object(g.jsxs)("div",{className:"player",children:[Object(g.jsx)(j,{currentSongIndex:c,setCurrentSongIndex:i,songs:n}),Object(g.jsx)(b,{songs:n,currentSongIndex:c,setCurrentSongIndex:i})]})};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.51f98e2e.chunk.js.map