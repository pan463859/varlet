import{_ as c}from"./elevation.6f2b205f.js";import{e,o as h,c as p,a,i as n,j as t,m as s,S as r}from"./vendor.8243c41e.js";const o={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"Layout",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,[s("The component library provides two auxiliary layout components, "),a("code",null,"<var-row/>"),s(" and "),a("code",null,"<var-col/>"),s(", so that you can layout more efficiently.")])],-1),g={class:"card"},m=a("h3",null,"Install",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("link",{rel:"stylesheet",href:"./highlight.css"}),a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Row, Col } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Row).use(Col)
`)])],-1),u={class:"card"},f=a("h3",null,"Gird System",-1),_=a("pre",{class:"hljs"},[a("code",null,[a("link",{rel:"stylesheet",href:"./highlight.css"}),s("The `"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s("/>")]),s("` component divides a row into an average grid of 24 columns (24 pieces). \nThe `"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s("/>")]),s("` provides the span property to set the number of pieces in the column and the `offset` property to set the number of pieces `offset` in the column.\n")])],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("link",{rel:"stylesheet",href:"./highlight.css"}),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`)])],-1),b={class:"card"},w=a("h3",null,"Offset",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("link",{rel:"stylesheet",href:"./highlight.css"}),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"16"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("offset: 8 span: 16"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`)])],-1),k={class:"card"},C=a("h3",null,"Alignment",-1),S=a("p",null,[s("The layout component is laid out in "),a("code",null,"flex"),s(" by default, using the "),a("code",null,"<var-row/>"),s(),a("code",null,"justify"),s(" and "),a("code",null,"align"),s(" properties to set the alignment of the main and cross axes.")],-1),T=a("pre",{class:"hljs"},[a("code",null,[a("link",{rel:"stylesheet",href:"./highlight.css"}),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"flex-end"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-around"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`)])],-1),A={class:"card"},D=a("h3",null,"Gutter",-1),E=a("pre",{class:"hljs"},[a("code",null,[a("link",{rel:"stylesheet",href:"./highlight.css"}),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`)])],-1),R=r('<h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Row Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>Col gutter</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>Spindle alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>Cross axis alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table></div><div class="card"><h3>Col Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>span</code></td><td>Number of grids occupied by columns</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>Number of grids for column offsets</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>Row Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click Row</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Col Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click Col</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>Row Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Col Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col content</td><td><code>-</code></td></tr></tbody></table></div>',10);function N(P,V,$,B,I,G){const l=e("var-site-code-example");return h(),p("div",d,[j,i,a("div",g,[m,n(l,null,{default:t(()=>[v]),_:1})]),a("div",u,[f,n(l,null,{default:t(()=>[_]),_:1}),n(l,null,{default:t(()=>[y]),_:1})]),a("div",b,[w,n(l,null,{default:t(()=>[x]),_:1})]),a("div",k,[C,S,n(l,null,{default:t(()=>[T]),_:1})]),a("div",A,[D,n(l,null,{default:t(()=>[E]),_:1})]),R])}var U=c(o,[["render",N]]);export{U as default};
