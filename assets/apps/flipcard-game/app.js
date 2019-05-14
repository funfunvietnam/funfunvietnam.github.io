(function(t){function e(e){for(var n,r,c=e[0],o=e[1],u=e[2],m=0,d=[];m<c.length;m++)r=c[m],s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ab0":function(t,e,a){"use strict";var n=a("2b99"),s=a.n(n);s.a},"1dc5":function(t,e,a){},"2b99":function(t,e,a){},4537:function(t,e,a){"use strict";var n=a("1dc5"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Board")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.v,expression:"v"}]},[t.isGameIdle?a("div",{staticClass:"menu-screen"},[a("div",{staticClass:"game-header"},[t._v("\n      Flip Card Game\n      "),0==t.games.length?a("div",{staticClass:"loader-icon"},[t._v("Loading...")]):t._e()]),a("div",{staticClass:"game-card-container"},[t.choseGame?a("div",{staticClass:"game-card",on:{click:function(e){return t.setup(t.choseGame)}}},[a("img",{attrs:{src:t.choseGame.thumbnail}}),a("div",{staticClass:"title"},[t._v(t._s(t.choseGame.name))])]):t._l(t.games,function(e){return a("div",{staticClass:"game-card",on:{click:function(a){return t.setup(e)}}},[a("img",{attrs:{src:e.thumbnail}}),a("div",{staticClass:"title"},[t._v(t._s(e.name))])])})],2),a("div",{staticClass:"game-footer"},[t.choseGame?a("button",{staticClass:"btn btn-outline-success",on:{click:t.removeChoseGame}},[t._v("Show All Game")]):t._e()])]):t._e(),t.isGameRunning||t.isGameEnd?a("div",{staticClass:"cards-wrapper"},t._l(t.cards,function(e){return a("Card",{attrs:{card:e,onclick:t.onCardClick}})}),1):t._e(),t.isGameRunning||t.isGameEnd?a("div",{staticClass:"game-message"},[t.isGameRunning?a("div",{staticClass:"game-message-running",domProps:{innerHTML:t._s(t.gamingMessage)}},[t._v(t._s(t.gamingMessage))]):t._e(),t.isGameEnd?a("div",{staticClass:"mb-1"},[a("div",{staticClass:"game-message-gameover text-red"},[t._v("🎉 You Win! Congratulation!!! 🎉")]),t.gameplayTime>0?a("div",{staticClass:"game-message-gameover"},[t._v("Time: "+t._s(t.gameplayTime)+" seconds")]):t._e(),a("button",{staticClass:"btn btn-outline-success mr-2",on:{click:t.resetup}},[t._v("Play Again")]),a("button",{staticClass:"btn btn-outline-success",on:{click:t.nextGame}},[t._v("Next")])]):t._e(),a("button",{staticClass:"btn btn-outline-secondary mr-2",on:{click:t.idlegame}},[t._v("Menu")]),a("button",{staticClass:"btn btn-outline-secondary",on:{click:t.toggleVoca}},[t.showVoca?a("span",[t._v("Hide Vocabulary")]):a("span",[t._v("Show Vocabulary")])]),t.showVoca?a("div",[a("table",{staticClass:"table-striped table-sm voca-table"},[t._m(0),a("tbody",[t._l(this.vocas,function(e,n){return a("tr",[a("td",[t._v(t._s(e.vn))]),a("td",[t._v(t._s(e.en))]),a("td",[t._v(t._s(e.cn))]),a("td",[a("CardImg",{attrs:{imgUrl:e.img.src,pos:e.img.pos}})],1)])}),t.currentGame.title?a("tr",[a("td",[t._v(t._s(t.currentGame.title[0]))]),a("td",[t._v(t._s(t.currentGame.title[1]))]),a("td",[t._v(t._s(t.currentGame.title[2]))])]):t._e()],2)]),a("img",{staticClass:"w-100 mt-2",attrs:{src:t.currentGame.thumbnail}})]):t._e()]):t._e()])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("VN")]),a("th",[t._v("EN")]),a("th",[t._v("CN")]),a("th")])])}],o=(a("28a5"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flipcard",class:{"flipcard-fliping":t.card.show},on:{click:t.click}},[a("div",{staticClass:"flipcard-front",class:{nobg:t.card.show}}),a("div",{staticClass:"flipcard-back"},["img"==t.card.type?a("CardImg",{attrs:{imgUrl:t.card.value,pos:t.card.pos}}):a("p",{class:{textSmaller:t.card.value.length>=20}},[t._v(t._s(t.card.value))])],1)])}),u=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-container",class:t.imgPos,style:{"background-image":"url('"+t.imgUrl+"')"}})},m=[],d=(a("c5f6"),{name:"CardImg",props:{imgUrl:String,pos:Number},computed:{imgPos:function(){return"pos-".concat(this.pos)}}}),h=d,p=(a("4537"),a("2877")),g=Object(p["a"])(h,l,m,!1,null,null,null),f=g.exports,v={name:"flipcard",components:{CardImg:f},props:{card:Object,onclick:Function},methods:{click:function(){this.onclick(this.card)}}},b=v,_=(a("0ab0"),Object(p["a"])(b,o,u,!1,null,null,null)),C=_.exports,G=window.location.hostname,y={IDLE:0,RUNNING:1,GAMEOVER:2};function w(t){return fetch(t).then(function(t){return t.json()})}function k(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}return t}function E(){return Date.now()/1e3|0}var T={name:"board",components:{Card:C,CardImg:f},computed:{games:function(){return this.gamedata},isGameIdle:function(){return this.gameState==y.IDLE},isGameRunning:function(){return this.gameState==y.RUNNING},isGameEnd:function(){return this.gameState==y.GAMEOVER},vocas:function(){var t=this,e=[];return this.currentGame.data.map(function(a,n){e.push({vn:a[0],en:a[1],cn:a[2],img:{src:t.currentGame.items,pos:n}})}),e}},data:function(){var t=this;return w("/assets/apps/flipcard-game/d.json").then(function(e){t.gamedata=e,t.gamedata.map(function(e){var a=t.gamedata[e.id].folder;t.gamedata[e.id]["thumbnail"]="/assets/apps/flipcard-game/".concat(a,"/thumbnail.png"),t.gamedata[e.id]["items"]="/assets/apps/flipcard-game/".concat(a,"/items.png")});var a=parseInt(t.loadLevel());"number"==typeof a&&a>=0&&a<t.gamedata.length&&(t.choseGame=t.gamedata[a])}),{v:"funfunvietnam.com"==G,gamedata:[],gameState:y.IDLE,currentGame:null,gamingMessage:"",cards:[],dict:{},comparingCard:null,cardsInTurn:0,matchedCount:0,timestamp:0,gameplayTime:0,showVoca:!1,choseGame:null}},methods:{init:function(){this.gameState=y.RUNNING,this.currentGame=null,this.gamingMessage="Flip card to match pair.",this.cards=[],this.dict={},this.comparingCard=null,this.cardsInTurn=0,this.matchedCount=0,this.timestamp=E(),this.gameplayTime=0,this.showVoca=!1,this.choseGame=null},setup:function(t){this.init(),this.currentGame=t;var e=[];t.data.map(function(a,n){e.push({type:"text",value:a[0],pos:n,name:a[0],key:n,show:!1,matched:!1}),e.push({type:"img",value:t.items,pos:n,name:a[0],key:n,show:!1,matched:!1})}),this.cards=k(e),this.dict=e.reduce(function(t,e,a){var n="".concat(e.key,"-").concat(e.type);return t[n]=a,t},{});try{$("html, body").animate({scrollTop:0},"300")}catch(a){}},resetup:function(){this.setup(this.currentGame)},nextGame:function(){var t=this.currentGame.id+1;t>=this.gamedata.length&&(t=0),this.setup(this.gamedata[t])},idlegame:function(){this.gameState=y.IDLE},onCardClick:function(t){var e=this;if(this.validateFlipable(t)&&!(this.cardsInTurn>=2)){var a="".concat(t.key,"-").concat(t.type),n=this.dict[a],s=this.cards[n];s.show=!0,this.cardsInTurn++,null===this.comparingCard?this.comparingCard=s:setTimeout(function(){var t=e.compareCards(e.comparingCard,s);t?(s.matched=!0,e.comparingCard.matched=!0,e.matchedCount++,e.gamingMessage='<span class="text-red">'.concat(s.name,"</span> matched!"),e.endTurn(!0),e.checkEndGame()):(e.comparingCard.show=!1,s.show=!1,e.endTurn())}.bind(this),500)}},compareCards:function(t,e){return t.key===e.key},validateFlipable:function(t){return!0!==t.matched&&(null===this.comparingCard||this.comparingCard!==t)},endTurn:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=function(){t.comparingCard=null,t.cardsInTurn=0};!0===e?a():setTimeout(function(){return a()}.bind(this),500)},checkEndGame:function(){this.matchedCount==this.cards.length/2&&(this.gameState=y.GAMEOVER,this.gameplayTime=E()-this.timestamp)},toggleVoca:function(){this.showVoca=!this.showVoca},loadLevel:function(){var t=window.location.href,e=t.substring(t.split("?g=")[0].length+3);return e.length>0?e:null},removeChoseGame:function(){this.choseGame=null}}},I=T,x=(a("b2e8"),Object(p["a"])(I,r,c,!1,null,null,null)),O=x.exports,M={name:"app",components:{Board:O}},S=M,j=Object(p["a"])(S,s,i,!1,null,null,null),N=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(N)}}).$mount("#app")},b2e8:function(t,e,a){"use strict";var n=a("dcc5"),s=a.n(n);s.a},dcc5:function(t,e,a){}});