import{_ as l}from"./elevation.6f2b205f.js";import{e as o,o as n,c,a as t,i as a,j as d,S as r,m as s}from"./vendor.8243c41e.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"Skeleton",-1),g=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Display some space occupying elements with transition effect to optimize the loading process.")],-1),j={class:"card"},u=t("h3",null,"Install",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Skeleton } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Skeleton)
`)])],-1),m={class:"card"},k=t("h3",null,"Basic Use",-1),v=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-skeleton"),s(),t("span",{class:"hljs-attr"},":loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(">")]),s("Loading Data"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-skeleton"),s(">")]),s(`
`)])],-1),f=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),t("span",{class:"hljs-literal"},"true"),s(`)

    `),t("span",{class:"hljs-keyword"},"return"),s(` { loading }
  }
}
`)])],-1),b={class:"card"},y=t("h3",null,"Display Title",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-skeleton"),s(),t("span",{class:"hljs-attr"},"title"),s(),t("span",{class:"hljs-attr"},":loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(">")]),s("Loading Data"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-skeleton"),s(">")]),s(`
`)])],-1),x={class:"card"},S=t("h3",null,"Custom Rows Height",-1),D=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-skeleton"),s(`
  `),t("span",{class:"hljs-attr"},"title"),s(`
  `),t("span",{class:"hljs-attr"},":rows"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(`
  `),t("span",{class:"hljs-attr"},":rows-width"),s("="),t("span",{class:"hljs-string"},`"['200px', '100px', '50px']"`),s(`
>`)]),s(`
  Loading Data
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-skeleton"),s(">")]),s(`
`)])],-1),T={class:"card"},A=t("h3",null,"Display Avatar",-1),C=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-skeleton"),s(`
  `),t("span",{class:"hljs-attr"},"title"),s(`
  `),t("span",{class:"hljs-attr"},"avatar"),s(`
  `),t("span",{class:"hljs-attr"},":rows"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(`
>`)]),s(`
	Loading Data
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-skeleton"),s(">")]),s(`
`)])],-1),L={class:"card"},V=t("h3",null,"Display Card",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-skeleton"),s(`
  `),t("span",{class:"hljs-attr"},"title"),s(`
  `),t("span",{class:"hljs-attr"},"avatar"),s(`
  `),t("span",{class:"hljs-attr"},"card"),s(`
  `),t("span",{class:"hljs-attr"},":rows"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(`
>`)]),s(`
  Loading Data
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-skeleton"),s(">")]),s(`
`)])],-1),W={class:"card"},B=t("h3",null,"Fullscreen Mode",-1),N=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"loading = !loading"'),s(">")]),s(`
	Toggle Fullscreen Mode
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-skeleton"),s(),t("span",{class:"hljs-attr"},"fullscreen"),s(),t("span",{class:"hljs-attr"},":loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(" />")]),s(`
`)])],-1),P=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading Status Set to <code>true</code> to turn on the skeleton</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>title</code></td><td>Whether to display the title</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>card</code></td><td>Whether to display the card</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>avatar</code></td><td>Whether to display the avatar</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>fullscreen</code></td><td>Whether to enable fullscreen mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title-width</code></td><td>Title Width</td><td><em>string | number</em></td><td><code>50%</code></td></tr><tr><td><code>card-height</code></td><td>Card Height</td><td><em>string | number</em></td><td><code>160px</code></td></tr><tr><td><code>avatar-size</code></td><td>Avatar size</td><td><em>string | number</em></td><td><code>34px</code></td></tr><tr><td><code>rows</code></td><td>The paragraph number of rows</td><td><em>string | number</em></td><td><code>3</code></td></tr><tr><td><code>rows-width</code></td><td>The width of each line of a paragraph</td><td><em>number[] | string[]</em></td><td><code>[&#39;12px&#39;, &#39;12px&#39;, &#39;12px&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u52A0\u8F7D\u6210\u529F\u540E\u663E\u793A\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--skeleton-content-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-height</code></td><td><code>160px</code></td></tr><tr><td><code>--skeleton-card-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--skeleton-card-margin-bottom</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-animation-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr><tr><td><code>--skeleton-avatar-size</code></td><td><code>34px</code></td></tr><tr><td><code>--skeleton-avatar-border-radius</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-avatar-margin-right</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-avatar-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-title-width</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-title-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-title-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-row-height</code></td><td><code>12px</code></td></tr><tr><td><code>--skeleton-row-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-row-margin-top</code></td><td><code>10px</code></td></tr></tbody></table></div>',4);function $(H,I,U,F,M,E){const e=o("var-site-code-example");return n(),c("div",i,[p,g,t("div",j,[u,a(e,null,{default:d(()=>[_]),_:1})]),t("div",m,[k,a(e,null,{default:d(()=>[v]),_:1}),a(e,null,{default:d(()=>[f]),_:1})]),t("div",b,[y,a(e,null,{default:d(()=>[w]),_:1})]),t("div",x,[S,a(e,null,{default:d(()=>[D]),_:1})]),t("div",T,[A,a(e,null,{default:d(()=>[C]),_:1})]),t("div",L,[V,a(e,null,{default:d(()=>[z]),_:1})]),t("div",W,[B,a(e,null,{default:d(()=>[N]),_:1})]),P])}var G=l(h,[["render",$]]);export{G as default};
