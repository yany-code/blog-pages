import{_ as a,o as e,c as i,e as n,a as l}from"./chunks/framework.zCPgfX_8.js";const S=JSON.parse('{"title":"SpringSecurity 学习笔记","description":"SpringSecurity 学习笔记的完整学习记录，保留原笔记中的方法、示例与代码。","frontmatter":{"title":"SpringSecurity 学习笔记","date":"2026-11-06","description":"SpringSecurity 学习笔记的完整学习记录，保留原笔记中的方法、示例与代码。","category":"Java 后端","folder":"java/campusforge","order":7,"sourceNote":"CampusForge/SpringSecurity相关.md","imported":true},"headers":[{"level":4,"title":"总体流程:","slug":"总体流程","link":"#总体流程","children":[{"level":5,"title":"登录时Controller的整体流程:","slug":"登录时controller的整体流程","link":"#登录时controller的整体流程","children":[]},{"level":5,"title":"后续请求：从会话回复身份，不必每次输密码","slug":"后续请求从会话回复身份不必每次输密码","link":"#后续请求从会话回复身份不必每次输密码","children":[]}]}],"relativePath":"posts/java/campusforge/spring-security.md","filePath":"posts/java/campusforge/spring-security.md"}'),p={name:"posts/java/campusforge/spring-security.md"};function r(t,s,c,u,o,d){return e(),i("div",null,[...s[0]||(s[0]=[n("h1",{id:"springsecurity-学习笔记",tabindex:"-1"},[l("SpringSecurity 学习笔记 "),n("a",{class:"header-anchor",href:"#springsecurity-学习笔记","aria-label":'Permalink to "SpringSecurity 学习笔记"'},"​")],-1),n("div",null,[n("h4",{id:"总体流程",tabindex:"-1"},[l("总体流程: "),n("a",{class:"header-anchor",href:"#总体流程","aria-label":'Permalink to "总体流程:"'},"​")]),n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki github-light vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"请求")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"SecurityFilterChain")]),l(`
`),n("span",{class:"line"},[n("span",null,"  · 恢复已有登录身份")]),l(`
`),n("span",{class:"line"},[n("span",null,"  · 执行 CSRF 等安全检查")]),l(`
`),n("span",{class:"line"},[n("span",null,"  · 检查这个接口是否允许访问")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Controller → Service → Mapper")])])])]),n("p",null,[l("比起传统范式来说多了"),n("a",{href:"/blog-pages/posts/java/campusforge/security-filter-chain.html"},"SecurityFilterChain相关"),l("安全过滤链在Controller前面")]),n("h5",{id:"登录时controller的整体流程",tabindex:"-1"},[l("登录时Controller的整体流程: "),n("a",{class:"header-anchor",href:"#登录时controller的整体流程","aria-label":'Permalink to "登录时Controller的整体流程:"'},"​")]),n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki github-light vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"Controller 接收用户名和密码")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"AuthService 包装成未认证的 Token")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"AuthenticationManager 调用认证组件")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"CampusUserDetailsService 通过 Mapper 查账号")]),l(`
`),n("span",{class:"line"},[n("span",null,"PasswordEncoder 验证密码")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"返回已认证的 Authentication")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"处理 Session：换 ID、清除旧 CSRF 令牌")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"把 Authentication 放进 SecurityContext")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"设置到 Holder，并保存到 Session")])])])]),n("p",null,"该条流程主要是进行两件事:"),n("ul",null,[n("li",null,[n("em",null,"验证凭据"),l(": 确认这次输入的账号密码正确")]),n("li",null,[n("em",null,"建立登录状态"),l(": 让当前请求和以后请求都能使用这个身份")])]),n("h5",{id:"后续请求从会话回复身份不必每次输密码",tabindex:"-1"},[l("后续请求：从会话回复身份，不必每次输密码 "),n("a",{class:"header-anchor",href:"#后续请求从会话回复身份不必每次输密码","aria-label":'Permalink to "后续请求：从会话回复身份，不必每次输密码"'},"​")]),n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki github-light vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"浏览器携带 JSESSIONID")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"服务器找到对应 Session")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Spring Security 从 Session 恢复 SecurityContext")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"通过 SecurityContextHolder，让当前请求线程能取得 Authentication")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"通过安全检查后，进入 Spring MVC")]),l(`
`),n("span",{class:"line"},[n("span",null,"		↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Spring MVC 调用 Controller, 调用前通过参数解析器确定参数的值")]),l(`
`),n("span",{class:"line"},[n("span",null,"		↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Spring MVC 发现 Authentication 参数")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Authentication 接口继承了 Principal")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"MVC 调用 HTTP request.getUserPrincipal()")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Spring Security 包装过的 request 从 SecurityContextHolder 取得认证对象")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"MVC 将这个对象传入请求方法")])])])]),n("p",null,[n("em",null,"简记"),l(": Session 保存身份 → Spring Security 恢复到当前线程 → Spring MVC 解析参数 → Controller 拿到 "),n("code",null,"Authentication")])],-1),n("hr",null,null,-1),n("p",null,[n("em",null,"原笔记：CampusForge/SpringSecurity相关.md。迁移时保留原文结构，完成链接、附件和已识别问题的适配。")],-1)])])}const h=a(p,[["render",r]]);export{S as __pageData,h as default};
