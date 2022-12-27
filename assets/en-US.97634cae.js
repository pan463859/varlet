import{_ as e,p as l,f as n,h as o,M as a,q as r,S as d,aq as c,P as s}from"./vue-router.esm-bundler.53acc020.js";const h={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"LoadingBar",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Display loading progress at the top of the page.")],-1),g={class:"card"},m=a("h3",null,"Basic Usage",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { LoadingBar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" hasCustomStyle = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

`),a("span",{class:"hljs-keyword"},"const"),s(" setStyle = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  LoadingBar.mergeConfig({
    `),a("span",{class:"hljs-attr"},"errorColor"),s(": hasCustomStyle.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'#ff8800'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": hasCustomStyle.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'#10afef'"),s(`,
    `),a("span",{class:"hljs-attr"},"height"),s(": hasCustomStyle.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'5px'"),s(`
  })

  hasCustomStyle.value = !hasCustomStyle.value
}

`),a("span",{class:"hljs-comment"},"// mobile only"),s(`
`),a("span",{class:"hljs-comment"},"// LoadingBar.mergeConfig({"),s(`
`),a("span",{class:"hljs-comment"},"//   top: '48px'"),s(`
`),a("span",{class:"hljs-comment"},"// })"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.start()"'),s(">")]),s("Start"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.finish()"'),s(">")]),s("Finish"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.error()"'),s(">")]),s("Error"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"setStyle"'),s(">")]),s(`
      {{ hasCustomStyle ? 'Clear Style' : 'Custom Style' }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=c('<h2>API</h2><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return value</th></tr></thead><tbody><tr><td><code>LoadingBar.mergeConfig</code></td><td>Merge config of loading bar</td><td><em>options: Options</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.start</code></td><td>Start loading</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>Finish loading</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>Loading error</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>LoadingBar Options</h3><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>LoadingBar color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>LoadingBar error color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>LoadingBar height</td><td><em>string|number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>LoadingBar top</td><td><em>string|number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table></div>',4);function v(b,f,_,S,B,C){const t=l("var-site-code-example");return n(),o("div",p,[i,j,a("div",g,[m,r(t,null,{default:d(()=>[u]),_:1})]),y])}const k=e(h,[["render",v]]);export{k as default};
