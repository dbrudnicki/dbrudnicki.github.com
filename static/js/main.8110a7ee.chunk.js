(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,a,e){n.exports=e(30)},23:function(n,a,e){},25:function(n,a,e){},27:function(n,a,e){},30:function(n,a,e){"use strict";e.r(a);var t=e(1),o=e.n(t),i=e(8),s=e(3),r=e(4),d=e(6),l=e(5),c=e(7),f=e(9),p=function(n){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,n),Object(r.a)(a,[{key:"render",value:function(){var n=this.props.data;return o.a.createElement(f.a,{size:"sm",responsive:!0,striped:!0,bordered:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,["Fan","Hand","Description"].map(function(n,a){return o.a.createElement("th",{key:a},n)}))),o.a.createElement("tbody",null,n.map(function(n,a){return o.a.createElement("tr",{key:a},o.a.createElement("td",null,n.fan),o.a.createElement("td",null,n.hand),o.a.createElement("td",null,n.description))})))}}]),a}(t.Component),u=(e(23),function(n){function a(){var n,e;Object(s.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=Object(d.a)(this,(n=Object(l.a)(a)).call.apply(n,[this].concat(o)))).handleRender=function(){},e}return Object(c.a)(a,n),Object(r.a)(a,[{key:"render",value:function(){var n=this.props,a=n.table,e=n.title,t=n.data;return o.a.createElement("div",{className:"Section"},o.a.createElement("h2",null,e),a?o.a.createElement(a,null):o.a.createElement(p,{data:t}))}}]),a}(t.Component)),h=[{fan:1,hand:"Self-drawn Win",description:"Winning on a tile drawn from the wall."},{fan:1,hand:"Last Tile Draw",description:"Self-drawn win on the last tile of the wall."},{fan:1,hand:"Last Tile Discard",description:"Win by discard on the discard after the last tile of the wall is drawn."},{fan:1,hand:"Robbing the Kong",description:"Winning off the tile that somebody adds to a melded pung."},{fan:1,hand:"Out on Replacement",description:"Winning on the replacement tile drawn after declaring a kong. Counts as self-drawn."},{fan:10,hand:"Blessing of Heaven",description:"East wins with initial hand."},{fan:10,hand:"Blessing of Earth",description:"Non-east player wins on East\u2019s first discard."}],m=[{fan:1,hand:"No Flowers and no Seasons",description:"Hand contains no flowers and seasons."},{fan:1,hand:"Seat Flower",description:"Hand contains player\u2019s flower."},{fan:1,hand:"Seat Season",description:"Hand contains player\u2019s Season."},{fan:2,hand:"All Flowers",description:"Hand contains all flower tiles. Implies Seat Flower."},{fan:2,hand:"All Seasons",description:"Hand contains all seasons tiles. Implies Seat Season."},{fan:4,hand:"Seven Pairs",description:"Hand is composed of seven pairs of tiles."},{fan:10,hand:"Thirteen Orphans",description:"Hand made of single tiles of 12 honors and terminals, plus a pair of the 13th."}],g=[{fan:1,hand:"All Chows",description:"Hand consists only of chows and a pair of suit tiles."}],w=[{fan:3,hand:"All Pungs",description:"Hand consists all pungs."},{fan:10,hand:"Four Concealed Pungs",description:"\tHand has four concealed pungs and a pair and self-drawn win."}],E=[{fan:10,hand:"All Kongs",description:"Hand has four kongs and a pair."}],H=[{fan:3,hand:"Half Flush",description:"Hand consists only of honors and suit tiles of one suit."},{fan:6,hand:"Full Flush",description:"Hand consists only of suit tiles of one suit."},{fan:10,hand:"Nine Gates",description:"Concealed hand of 1112345678999 in one suit and winning on any tile of the same suit."},{fan:10,hand:"Jade Dragon",description:"Hand is composed of pungs (or kongs) of bamboo tiles and a pung of green dragons."},{fan:10,hand:"Ruby Dragon",description:"Hand is composed of pungs (or kongs) of character tiles and pung of red dragons."},{fan:10,hand:"Pearl Dragon",description:"Hand is composed of pungs (or kongs) of dot tiles and a pung of white dragons."}],b=[{fan:1,hand:"Dragon Pung",description:"Hand includes a pung (or kong) of dragons."},{fan:1,hand:"Seat/Prevalent Wind",description:"Hand includes a pung (or kong) of the player\u2019s seat or round wind."},{fan:4,hand:"Little Three Dragons",description:"Hand has two dragon pungs and a pair of the third dragon."},{fan:10,hand:"Big Three Dragons",description:"Hand has three dragon pungs."},{fan:10,hand:"Little Four Winds",description:"Hand has three pungs and a pair of winds."},{fan:10,hand:"Big Four Winds",description:"Hand has four pungs of winds."},{fan:10,hand:"All Honors",description:"Hand consists only of honor tiles."},{fan:10,hand:"All Terminals",description:"Hand consists only of terminals."}],y=[{fan:"0",points:1,discard:"N/A",draw:"2 + 2 + 4 = 8"},{fan:"1",points:2,discard:"2 + 2 + 2 = 6",draw:"4 + 4 + 8 = 16"},{fan:"2",points:4,discard:"4 + 4 + 4 = 12",draw:"8 + 8 + 16 = 32"},{fan:"3",points:8,discard:"8 + 8 + 8 = 24",draw:"16 + 16 + 32 = 64"},{fan:"4-6",points:16,discard:"16 + 16 + 16 = 48",draw:"32 + 32 + 64 = 128"},{fan:"7-9",points:32,discard:"32 + 32 + 32 = 96",draw:"64 + 64 + 128 = 256"},{fan:"10",points:64,discard:"64 + 64 + 128 = 256",draw:"128+128+128=384"}],O=function(n){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,n),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(f.a,{size:"sm",responsive:!0,striped:!0,bordered:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,["Fan","Points","On Discard","On Draw"].map(function(n,a){return o.a.createElement("th",{key:a},n)}))),o.a.createElement("tbody",null,y.map(function(n,a){return o.a.createElement("tr",{key:a},o.a.createElement("td",null,n.fan),o.a.createElement("td",null,n.points),o.a.createElement("td",null,n.discard),o.a.createElement("td",null,n.draw))})))}}]),a}(t.Component),j=(e(25),function(n){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,n),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Mahjong-HK-Old-Scoring"),o.a.createElement("p",null,"Notes for scoring in Hong Kong Old Style of Mahjong. Typically, all hands must have four sets (chows, pungs, or kongs) and a pair."),o.a.createElement(u,{title:"Going Out",data:h}),o.a.createElement(u,{title:"Special Hands",data:m}),o.a.createElement(u,{title:"Chow Hand",data:g}),o.a.createElement(u,{title:"Pung Hands",data:w}),o.a.createElement(u,{title:"Kong Hand",data:E}),o.a.createElement(u,{title:"Suit Hands",data:H}),o.a.createElement(u,{title:"Terminal/Honors Hands",data:b}),o.a.createElement(u,{title:"Fan to Point Conversion",table:O}))}}]),a}(t.Component));e(27);Object(i.render)(o.a.createElement(j,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.8110a7ee.chunk.js.map