(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(t,a,n){"use strict";n.r(a);n(61);var s={props:["slot-key"]},e=n(17),o=Object(e.a)(s,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"use-with-element-ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-with-element-ui","aria-hidden":"true"}},[t._v("#")]),t._v(" Use With Element UI")]),t._v(" "),n("p",[t._v("There has some issues before, about how to use this plugin with the table component of the Element UI, so here is a case for reference.")]),t._v(" "),n("p",[t._v("It is easy to use this plugin with the standard table component, just place the "),n("code",[t._v("InfiniteLoading")]),t._v(" component under the table component, but we need to pay attention to the following 2 points when writing template if use this plugin with the scrollable table component:")]),t._v(" "),n("ol",[n("li",[t._v("Place the "),n("code",[t._v("InfiniteLoading")]),t._v(" component at the end of the table component via a "),n("a",{attrs:{href:"https://element.eleme.io/#/en-US/component/table#table-slot",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot"),n("OutboundLink")],1),t._v(" named "),n("code",[t._v("append")]),t._v(" of the Element UI table component;")]),t._v(" "),n("li",[t._v("Set the "),n("code",[t._v("forceUseInfiniteWrapper")]),t._v(" property to the CSS selector of the real scroll container, because the scroll bar of Element UI table component was enable dynamically according to content height, this plugin cannot find the correct scroll container automatically.")])]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("If there has multiple Element UI table components in a same page, we need a more detailed CSS selector instead of the "),n("code",[t._v(".el-table__body-wrapper")]),t._v(", if not, this plugin may find a error table component as the scroll container")])]),t._v(" "),n("p",[t._v("The final template should be similar to:")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-table")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- el-table-column items --\x3e")]),t._v("\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("infinite-loading")]),t._v("\n      "),n("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("append"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{attrs:{class:"token attr-name"}},[t._v("@infinite")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("infiniteHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{attrs:{class:"token attr-name"}},[t._v("force-use-infinite-wrapper")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".el-table__body-wrapper"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("infinite-loading")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-table")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("No special handling is required in the logic, this plugin can already works as the preview on the right.")])])},[],!1,null,null,null);o.options.__file="use-with-el-table.md";a.default=o.exports}}]);