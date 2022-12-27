import{_ as c,p as r,f as o,h as p,M as a,q as l,S as n,aq as e,P as s}from"./vue-router.esm-bundler.53acc020.js";const d={components:{}},h={class:"varlet-site-doc"},j=a("h1",null,"Result",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"It is used to show the results to users.")],-1),g={class:"card"},u=a("h3",null,"Basic Usage",-1),m=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Success"'),s(`
    `),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},`"Hi, I'm a result description."`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s("OK"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},v=e("<h3>Types</h3><p>Result type, optional values are <code>info</code>\uFF0C<code>success</code>\uFF0C<code>warning</code>\uFF0C<code>error</code>\uFF0C<code>question</code>\uFF0C<code>empty</code>.</p>",2),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" success = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" error = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" info = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" warning = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" question = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" empty = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"success = true"'),s(">")]),s("Success"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"warning = true"'),s(">")]),s("Warning"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"info = true"'),s(">")]),s("Info"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"error = true"'),s(">")]),s("Error"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-question-color)"'),s(`
      `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
      `),a("span",{class:"hljs-attr"},"block"),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"question = true"'),s(`
    >`)]),s(`
      Question
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-empty-color)"'),s(`
      `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
      `),a("span",{class:"hljs-attr"},"block"),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"empty = true"'),s(`
    >`)]),s(`
      Empty
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Success"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},`"Hi, I'm a result description."`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"success = false"'),s(">")]),s("OK"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Warning"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},`"Hi, I'm a result description."`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"warning = false"'),s(">")]),s("OK"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Info"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},`"Hi, I'm a result description."`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"info = false"'),s(">")]),s("OK"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"error"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"error"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Error"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},`"Hi, I'm a result description."`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"error = false"'),s(">")]),s("OK"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"question"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"question"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Question"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},`"Hi, I'm a result description."`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
          `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-question-color)"'),s(`
          `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
          @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"question = false"'),s(`
        >`)]),s(`
          OK
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"empty"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"empty"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Empty"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},`"Hi, I'm a result description."`),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
          `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-empty-color)"'),s(`
          `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
          @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"empty = false"'),s(">")]),s(`
          OK
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".result"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"75vw"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=e('<div class="card"><h3>Note when modifying the background color</h3><p>Please try not to modify the background color to be transparent or translucent, which may affect the animation effect of the success type.</p></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td>Image type\uFF0Coptions <code>info</code> <code>success</code> <code>warning</code> <code>error</code> <code>question</code> <code>empty</code></td><td><em>string</em></td><td><code>success</code></td></tr><tr><td><code>title</code></td><td>The title of Result</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>The description of Result</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>image-size</code></td><td>Image Size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>animation</code></td><td>Whether to enable animation, valid for <code>success</code> type only</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>image</code></td><td>Custom image</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Custom title</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>Custom description</td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>Custom bottom content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--result-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--result-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--result-info-border-color</code></td><td><code>rgba(0, 175, 239, 0.3)</code></td></tr><tr><td><code>--result-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--result-success-border-color</code></td><td><code>rgba(0, 196, 143, 0.3)</code></td></tr><tr><td><code>--result-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--result-error-border-color</code></td><td><code>rgba(244, 67, 54, 0.3)</code></td></tr><tr><td><code>--result-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--result-warning-border-color</code></td><td><code>rgba(255, 159, 0, 0.3)</code></td></tr><tr><td><code>--result-question-color</code></td><td><code>#607d8b</code></td></tr><tr><td><code>--result-question-border-color</code></td><td><code>rgba(96, 125, 139, 0.3)</code></td></tr><tr><td><code>--result-empty-color</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--result-empty-border-color</code></td><td><code>rgba(158, 158, 158, 0.3)</code></td></tr><tr><td><code>--result-padding</code></td><td><code>24px</code></td></tr><tr><td><code>--result-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--result-title-color</code></td><td><code>#444</code></td></tr><tr><td><code>--result-title-font-size</code></td><td><code>32px</code></td></tr><tr><td><code>--result-title-margin</code></td><td><code>15px 0 0 0</code></td></tr><tr><td><code>--result-image-size</code></td><td><code>80px</code></td></tr><tr><td><code>--result-title-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--result-description-margin</code></td><td><code>10px 0 0 0</code></td></tr><tr><td><code>--result-description-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--result-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--result-description-line-height</code></td><td><code>1.6</code></td></tr></tbody></table></div>',5);function _(w,k,x,S,I,q){const t=r("var-site-code-example");return o(),p("div",h,[j,i,a("div",g,[u,l(t,null,{default:n(()=>[m]),_:1})]),a("div",f,[v,l(t,null,{default:n(()=>[b]),_:1})]),y])}const z=c(d,[["render",_]]);export{z as default};
