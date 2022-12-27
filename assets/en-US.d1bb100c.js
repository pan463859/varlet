import{_ as n,p as c,f as d,h as o,M as t,q as l,S as e,P as s,aq as r}from"./vue-router.esm-bundler.53acc020.js";const p={components:{}},h={class:"varlet-site-doc"},i=t("h1",null,"AppBar",-1),j={class:"card"},m=t("h3",null,"Basic Usage",-1),g=t("p",null,[s("Set the title of the app bar through the "),t("code",null,"title"),s(" prop.")],-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-app-bar"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"title"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},v=t("h3",null,"Add Slots At Title",-1),f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s("Add Slots At Title"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},x=t("h3",null,"Add Left And Right Slot",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-app-bar"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Title"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"left"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
        `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"transparent"'),s(`
        `),t("span",{class:"hljs-attr"},"text-color"),s("="),t("span",{class:"hljs-string"},'"#ffffff"'),s(`
        `),t("span",{class:"hljs-attr"},"round"),s(`
        `),t("span",{class:"hljs-attr"},"text"),s(`
      >`)]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"chevron-left"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu"),s(),t("span",{class:"hljs-attr"},"placement"),s("="),t("span",{class:"hljs-string"},'"bottom-start"'),s(),t("span",{class:"hljs-attr"},":offset-y"),s("="),t("span",{class:"hljs-string"},'"12"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
          `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"transparent"'),s(`
          `),t("span",{class:"hljs-attr"},"text-color"),s("="),t("span",{class:"hljs-string"},'"#ffffff"'),s(`
          `),t("span",{class:"hljs-attr"},"round"),s(`
          `),t("span",{class:"hljs-attr"},"text"),s(`
        >`)]),s(`
          `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"menu"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
          `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"v-ripple"),s(">")]),s("OPTION"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
          `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"v-ripple"),s(">")]),s("OPTION"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
          `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"v-ripple"),s(">")]),s("OPTION"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},T=t("h3",null,"Use Border Radius",-1),B=t("p",null,[s("Turn on rounded border with the "),t("code",null,"round"),s(" prop.")],-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-app-bar"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Use Border Radius"'),s(),t("span",{class:"hljs-attr"},"title-position"),s("="),t("span",{class:"hljs-string"},'"center"'),s(),t("span",{class:"hljs-attr"},"round"),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},N=t("h3",null,"Custom Background Color",-1),C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-app-bar"),s(`
     `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"title"'),s(`
     `),t("span",{class:"hljs-attr"},"title-position"),s("="),t("span",{class:"hljs-string"},'"center"'),s(`
     `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"linear-gradient(var(--color-primary), var(--color-info))"'),s(`
   />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Background</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>Title location,Can be set to <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>Whether to use elevation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>round</code></td><td>Whether to use rounded border</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the title content to override the <code>title</code> content</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>Insert the content to the left of the app bar</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>Insert the content to the right of the app bar</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-border-radius</code></td><td><code>4px</code></td></tr></tbody></table></div>',4);function O(V,U,k,z,D,$){const a=c("var-site-code-example");return d(),o("div",h,[i,t("div",j,[m,g,l(a,null,{default:e(()=>[u]),_:1})]),t("div",_,[v,l(a,null,{default:e(()=>[f]),_:1})]),t("div",b,[x,l(a,null,{default:e(()=>[y]),_:1})]),t("div",S,[T,B,l(a,null,{default:e(()=>[P]),_:1})]),t("div",A,[N,l(a,null,{default:e(()=>[C]),_:1})]),I])}const q=n(p,[["render",O]]);export{q as default};
