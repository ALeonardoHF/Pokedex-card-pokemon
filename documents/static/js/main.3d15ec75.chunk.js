(this["webpackJsonppokedex-pokeapi"]=this["webpackJsonppokedex-pokeapi"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(6),s=a.n(n),r=a(2),i=(a(5),a(0)),o=function(e){var t=e.setPokemon,a=Object(c.useState)(""),n=Object(r.a)(a,2),s=n[0],o=n[1],j=function(e){e.preventDefault(),s.trim().length>0&&(t(s),o(""))};return Object(i.jsx)("form",{onSubmit:j,children:Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("label",{children:Object(i.jsx)("input",{type:"text",placeholder:"Name or No.",onChange:function(e){o(e.target.value)},value:s,id:"pokemon"})}),Object(i.jsx)("button",{className:"unit",type:"button",onClick:j})]})})},j=a(8),l=a(4),d=a.n(l),b=a(7),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://pokeapi.co/api/v2/pokemon/".concat(encodeURI(t)),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=(a(15),function(e){var t=e.id,a=e.name,c=e.sprites,n=e.stats,s=e.types,r=e.abilities;if(void 0===t)return"";var o="card card--".concat(s[0].type.name),j=[];return s.map((function(e){return j.push(e.type.name)})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{id:"cards",children:Object(i.jsxs)("figure",{className:o,children:[Object(i.jsxs)("div",{className:"card__image-container",children:[Object(i.jsx)("img",{src:c.front_default,alt:a,className:"card__image"}),c.front_female?Object(i.jsx)("img",{src:c.front_female,alt:a,className:"card__image"}):"",Object(i.jsx)("img",{src:c.front_shiny,alt:a,className:"card__image"})]}),Object(i.jsxs)("figcaption",{className:"card__caption",children:[Object(i.jsxs)("h3",{className:"card__name",children:[" No. ",t]}),Object(i.jsx)("h1",{className:"card__name",children:a}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("h3",{className:"card__type",children:[" ",j[0]," "]}),j[1]?Object(i.jsx)("h3",{className:"card__type__2",children:j[1]}):""]}),Object(i.jsx)("hr",{className:"hr_line"}),Object(i.jsx)("hr",{className:"hr_line"}),Object(i.jsx)("table",{className:"card__stats",children:Object(i.jsx)("tbody",{children:n.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"stat_name",children:e.stat.name}),Object(i.jsx)("td",{children:e.base_stat})]},t)}))})}),Object(i.jsx)("div",{className:"card__abilities",children:r.map((function(e,t){return Object(i.jsxs)("h4",{className:"card__ability",id:"ability_cap",children:[Object(i.jsx)("span",{className:"card__label",children:e.is_hidden?"Hidden Ability":"Ability"}),e.ability.name]},t)}))})]})]})})})}),h=function(e){var t=function(e){var t=Object(c.useState)({data:[],loading:!0}),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){m(e).then((function(e){setTimeout((function(){s({data:e,loading:!1})}),1e3)}))}),[e]),n}(e.pokemon),a=t.data,n=t.loading;return Object(i.jsxs)(i.Fragment,{children:[n&&Object(i.jsx)("p",{className:"loadingText",children:"Loading ..."}),Object(i.jsx)("div",{children:Object(i.jsx)(u,Object(j.a)({},a),a.id)})]})},p=function(){var e=function(e,t){var a=t-e,c=Math.random()*(a+1);return e+(c=Math.floor(c))}(1,898),t=Object(c.useState)(e),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:"https://fontmeme.com/permalink/211023/4cb64e943694981d154ca5e5fe995908.png",alt:"fuente-pokemon",border:"0"}),Object(i.jsx)(o,{setPokemon:s}),Object(i.jsx)(h,{pokemon:n})]})};s.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))},5:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.3d15ec75.chunk.js.map