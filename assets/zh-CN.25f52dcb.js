import{_ as c,p as e,f as r,h as p,M as a,q as n,S as t,aq as h,P as s}from"./vue-router.esm-bundler.53acc020.js";const o={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"\u8868\u5355",-1),i=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u63D0\u4F9B\u4E86\u5BF9\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u8FDB\u884C\u63A7\u5236\u7684\u80FD\u529B\u3002")],-1),m={class:"card"},g=a("h3",null,"\u8868\u5355\u793A\u4F8B",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` formData = reactive({
  `),a("span",{class:"hljs-attr"},"username"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"department"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"gender"),s(": "),a("span",{class:"hljs-literal"},"undefined"),s(`,
  `),a("span",{class:"hljs-attr"},"license"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
  `),a("span",{class:"hljs-attr"},"range"),s(": "),a("span",{class:"hljs-number"},"10"),s(`,
  `),a("span",{class:"hljs-attr"},"count"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
  `),a("span",{class:"hljs-attr"},"group"),s(`: [],
  `),a("span",{class:"hljs-attr"},"score"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
  `),a("span",{class:"hljs-attr"},"like"),s(`: [],
  `),a("span",{class:"hljs-attr"},"files"),s(`: []
})
`),a("span",{class:"hljs-keyword"},"const"),s(" form = ref("),a("span",{class:"hljs-literal"},"null"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" readonly = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-form"),s(` 
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"form"'),s(` 
    `),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(`
    `),a("span",{class:"hljs-attr"},":readonly"),s("="),a("span",{class:"hljs-string"},'"readonly"'),s(` 
    `),a("span",{class:"hljs-attr"},"scroll-to-error"),s("="),a("span",{class:"hljs-string"},'"start"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[14, 0]"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"\u8BF7\u8F93\u5165\u7528\u6237\u540D"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || '\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.username"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(`
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"\u8BF7\u8F93\u5165\u5BC6\u7801"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || '\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.password"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"\u8BF7\u9009\u62E9\u90E8\u95E8"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || '\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.department"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"\u5403\u996D\u90E8"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"\u7761\u89C9\u90E8"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"\u6253\u6E38\u620F\u90E8"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
        `),a("span",{class:"hljs-attr"},"multiple"),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"\u8BF7\u9009\u62E9\u7EC4\u7EC7"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length >= 1 || '\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.group"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"\u5403\u996D\u7EC4"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"\u7761\u89C9\u7EC4"'),s("  />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"\u6253\u6E38\u620F\u7EC4"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio-group"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || '\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.gender"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("\u7537"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("\u5973"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length > 0 || '\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.like"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("\u5403\u996D"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("\u7761\u89C9"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("\u6253\u6E38\u620F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v >= 3 || '\u5FC5\u987B\u5927\u4E8E2']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.score"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-switch"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => !!v || '\u60A8\u5FC5\u987B\u5F00\u542F']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.license"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-counter"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v > 10 || '\u5FC5\u987B\u5927\u4E8E10']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.count"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v > 10 || '\u5FC5\u987B\u5927\u4E8E10']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.range"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length >= 1 || '\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247']"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formData.files"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-form"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[14, 0]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.reset()"'),s(">")]),s(`
      \u6E05\u7A7A\u8868\u5355
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.resetValidation()"'),s(">")]),s(`
      \u6E05\u7A7A\u9A8C\u8BC1
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"form.validate()"'),s(">")]),s(`
      \u89E6\u53D1\u9A8C\u8BC1
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(">")]),s(`
      \u8868\u5355\u7981\u7528
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"readonly = !readonly"'),s(">")]),s(`
      \u8868\u5355\u53EA\u8BFB
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},b=a("h3",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6",-1),f=a("p",null,"\u5982\u679C\u5E0C\u671B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5E76\u63A5\u5165\u8868\u5355\u7EC4\u4EF6\u7684\u80FD\u529B\uFF0C\u6848\u4F8B\u5982\u4E0B\u3002",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Form } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { nextTick } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` props = defineProps({
  `),a("span",{class:"hljs-attr"},"modelValue"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Boolean"),s(`
  },
  `),a("span",{class:"hljs-attr"},"disabled"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Boolean"),s(`,
    `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
  },
  `),a("span",{class:"hljs-attr"},"readonly"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Boolean"),s(`,
    `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`
  },
  `),a("span",{class:"hljs-attr"},"rules"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Array"),s(`
  },
  `),a("span",{class:"hljs-attr"},"validateTrigger"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"Array"),s(`,
    `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(" ["),a("span",{class:"hljs-string"},"'onToggle'"),s(`]
  },
  `),a("span",{class:"hljs-attr"},"extraMessage"),s(`: {
    `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-built_in"},"String"),s(`
  }
})

`),a("span",{class:"hljs-keyword"},"const"),s(" emit = defineEmits(["),a("span",{class:"hljs-string"},"'update:modelValue'"),s(`])

`),a("span",{class:"hljs-keyword"},"const"),s(` { useForm, useValidation } = Form
`),a("span",{class:"hljs-keyword"},"const"),s(" { errorMessage, "),a("span",{class:"hljs-attr"},"validateWithTrigger"),s(": _validateWithTrigger, "),a("span",{class:"hljs-attr"},"validate"),s(`: _validate, resetValidation } = useValidation()
`),a("span",{class:"hljs-keyword"},"const"),s(` { bindForm, form } = useForm()

`),a("span",{class:"hljs-keyword"},"const"),s(" reset = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  emit(`),a("span",{class:"hljs-string"},"'update:modelValue'"),s(", "),a("span",{class:"hljs-literal"},"false"),s(`)
  resetValidation()
}

`),a("span",{class:"hljs-keyword"},"const"),s(" validate = "),a("span",{class:"hljs-function"},"() =>"),s(` _validate(props.rules, props.modelValue)

`),a("span",{class:"hljs-keyword"},"const"),s(" validateWithTrigger = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"trigger"),s(") =>")]),s(` {
  nextTick(`),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(` { validateTrigger, rules, modelValue } = props
    _validateWithTrigger(validateTrigger, trigger, rules, modelValue)
  })
}

`),a("span",{class:"hljs-keyword"},"const"),s(" handleClick = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-keyword"},"if"),s(` (
    props.readonly ||
    props.disabled || 
    form?.readonly.value || 
    form?.disabled.value
  ) {
    `),a("span",{class:"hljs-keyword"},"return"),s(`
  }

  emit(`),a("span",{class:"hljs-string"},"'update:modelValue'"),s(`, !props.modelValue)
  validateWithTrigger(`),a("span",{class:"hljs-string"},"'onToggle'"),s(`)
}

`),a("span",{class:"hljs-keyword"},"const"),s(` apis = {
  reset,
  validate,
  resetValidation
}

defineExpose(apis)
bindForm?.(apis)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-custom-form-component"'),s(`
    `),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},`"{
      'var-custom-form-component--disabled': disabled || form?.disabled.value,
      'var-custom-form-component--error': errorMessage,
    }"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-custom-form-component__container"'),s("  @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(`
        `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-custom-form-component__icon"'),s(`
        `),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},`"modelValue ? 'checkbox-marked-circle' : 'close-circle'"`),s(`
        `),a("span",{class:"hljs-attr"},":transition"),s("="),a("span",{class:"hljs-string"},'"250"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"slot"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-form-details"),s(),a("span",{class:"hljs-attr"},":error-message"),s("="),a("span",{class:"hljs-string"},'"errorMessage"'),s(),a("span",{class:"hljs-attr"},":extra-message"),s("="),a("span",{class:"hljs-string"},'"extraMessage"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-custom-form-component"),s(` {
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
}

`),a("span",{class:"hljs-selector-class"},".var-custom-form-component__container"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}

`),a("span",{class:"hljs-selector-class"},".var-custom-form-component__icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"24px"),s(`;
}
  
`),a("span",{class:"hljs-selector-class"},".var-custom-form-component--disabled"),s(` {
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-text-disabled);
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: not-allowed;
}
  
`),a("span",{class:"hljs-selector-class"},".var-custom-form-component--error"),s(` {
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-danger);
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_=h('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><h4>Form Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scroll-to-error</code></td><td>\u662F\u5426\u5728\u6548\u9A8C\u4E0D\u901A\u8FC7\u65F6\u6EDA\u52A8\u5230\u4E0D\u901A\u8FC7\u7684\u8868\u5355\u9879\uFF0C\u53EF\u9009\u503C\u4E3A <code>start</code> <code>end</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>scroll-to-error-offset-y</code></td><td>\u6EDA\u52A8\u5230\u6821\u9A8C\u4E0D\u901A\u8FC7\u7684\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u504F\u79FB\u91CF</td><td><em>number | string</em></td><td><code>0</code></td></tr></tbody></table><h4>FormDetails Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>error-message</code></td><td>\u9519\u8BEF\u4FE1\u606F</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>\u9644\u52A0\u4FE1\u606F</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><h4>Form Methods</h4><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u7684\u503C\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><h4>Form Slots</h4><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u8868\u5355\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><h4>FormDetails Variables</h4><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--form-details-error-message-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-extra-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table></div>',5);function k(x,w,V,D,T,F){const l=e("var-site-code-example");return r(),p("div",d,[j,i,a("div",m,[g,n(l,null,{default:t(()=>[v]),_:1})]),a("div",u,[b,f,n(l,{"playground-ignore":""},{default:t(()=>[y]),_:1})]),_])}const P=c(o,[["render",k]]);export{P as default};
