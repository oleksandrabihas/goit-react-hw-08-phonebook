"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[47],{2047:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,o=e(168),i=e(5705),a=e(5867),u=(0,a.ZP)(i.l0)(r||(r=(0,o.Z)(["\n  margin-bottom: 20px;\n  label {\n    display: block;\n    margin-bottom: 8px;\n    font-size: 26px;\n  }\n  input {\n    display: block;\n    font-size: 20px;\n    width: 300px;\n    height: 30px;\n    margin-bottom: 8px;\n  }\n\n  button {\n    display: block;\n    padding: 8px 20px;\n    font-size: 18px;\n    background-color: #e0a8d2;\n    border: 1px solid #841869;\n    border-radius: 5px;\n  }\n"]))),c=e(9434),l=e(9517),s=e(5218),p="NOT_FOUND";var f=function(n,t){return n===t};function d(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,o=void 0===r?f:r,i=e.maxSize,a=void 0===i?1:i,u=e.resultEqualityCheck,c=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!n(t[o],e[o]))return!1;return!0}}(o),l=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:p},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var o=e[r];return r>0&&(e.splice(r,1),e.unshift(o)),o.value}return p}return{get:r,put:function(t,o){r(t)===p&&(e.unshift({key:t,value:o}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,c);function s(){var t=l.get(arguments);if(t===p){if(t=n.apply(null,arguments),u){var e=l.getEntries(),r=e.find((function(n){return u(n.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return s.clearCache=function(){return l.clear()},s}function m(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function h(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,p=void 0===s?e:s,f=Array.isArray(p)?p:[p],d=m(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],t=d.length,e=0;e<t;e++)n.push(d[e].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(x,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return o}var x,b,y,v=h(d),g=function(n){return n.contacts},j=v([g,function(n){return n.filter}],(function(n,t){return n.items.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).toSorted((function(n,t){return n.name.localeCompare(t.name)}))})),w=e(184),k=function(){var n=(0,c.I0)(),t=(0,c.v9)(g).items;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s.x7,{}),(0,w.jsx)(i.J9,{initialValues:{name:"",number:""},onSubmit:function(e,r){var o=e.name,i=e.number,a=r.resetForm;console.log(o,i),t.some((function(n){return n.name===o}))?alert("".concat(o," is already in contacts")):n((0,l.uK)({name:o,number:i})).unwrap().then((function(){s.ZP.success("Contact was successfully added to your contacts list.",{duration:2e3,position:"top-right"}),a()}))},children:(0,w.jsxs)(u,{children:[(0,w.jsx)("label",{htmlFor:"name",children:"Name"}),(0,w.jsx)(i.gN,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,w.jsx)("label",{htmlFor:"number",children:"Number"}),(0,w.jsx)(i.gN,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,w.jsx)("button",{children:"Add contact"})]})})]})},C=function(n){var t=n.contacts,e=n.handleDeleteContact;return t.map((function(n){var t=n.id,r=n.name,o=n.number;return(0,w.jsxs)("li",{children:[r,": ",o,(0,w.jsx)("button",{type:"button",onClick:function(){return e(t)},children:"Delete"})]},t)}))},z=a.ZP.ul(x||(x=(0,o.Z)(["\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  li {\n    max-width: 700px;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n\n  }\n  button {\n    display: block;\n    padding: 4px 15px;\n    font-size: 14px;\n    background-color: #f7f7f8;\n\n    border: 1px solid #9191b4;\n    border-radius: 5px;\n  }\n"]))),Z=function(){var n=(0,c.I0)(),t=(0,c.v9)(j);return(0,w.jsx)(z,{children:(0,w.jsx)(C,{contacts:t,handleDeleteContact:function(t){n((0,l.GK)(t)).unwrap().then((function(){s.ZP.error("Contact was successfully deleted from your contacts list.",{duration:2e3,position:"top-right"})}))}})})},A=function(){return(0,w.jsx)("div",{children:"You don't have any contact"})},F=a.ZP.div(b||(b=(0,o.Z)(["\n  label {\n    font-size: 20px;\n    display: block;\n    margin-bottom: 12px;\n  }\n  input {\n    width: 250px;\n    height: 25px;\n    margin-bottom: 12px;\n    font-size: 16px;\n  }\n"]))),P=e(1634),E=function(){var n=(0,c.v9)(g).items,t=(0,c.I0)();return 0!==n.length?(0,w.jsxs)(F,{children:[(0,w.jsx)("label",{htmlFor:"filter",children:"Find contacts by name:"}),(0,w.jsx)("input",{id:"filter",type:"text",name:"filter",onChange:function(n){t((0,P.x)(n.target.value.toLowerCase().trim()))}})]}):(0,w.jsx)(A,{})},N=a.ZP.main(y||(y=(0,o.Z)(["\nmargin: 0 auto;\npadding: 30px;\n\nh1, h2 {\nmargin-bottom: 20px;\n}\n"]))),q=e(2791);function I(){var n=(0,c.I0)();return(0,q.useEffect)((function(){n((0,l.yF)())}),[n]),(0,w.jsxs)(N,{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(k,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(E,{}),(0,w.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=47.27559e54.chunk.js.map