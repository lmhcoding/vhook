import{g as a,j as s,A as n,f as t,q as e}from"./common-db3bf608.js";const p='{"title":"`useDebounce`","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"effects/useDebounce.md","lastUpdated":1601612170295.6177}';var o={};const c=n('<h1 id="usedebounce"><a class="header-anchor" href="#usedebounce" aria-hidden="true">#</a> <code>useDebounce</code></h1><p>带防抖功能的状态</p><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>\n</code></pre></div><h2 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>默认状态值</td><td>any</td><td></td></tr><tr><td>delay</td><td>防抖延时时间</td><td>number</td><td>200</td></tr></tbody></table><h2 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th></tr></thead><tbody><tr><td>state</td><td>带防抖功能的 <code>Ref</code></td><td>Ref&lt;T&gt;</td></tr></tbody></table><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',9),l=n('<h2 id="code"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useDebounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vhook&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      state\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2);o.render=function(n,p,o,u,d,r){const i=e("UseDebounce");return t(),a("div",null,[c,s(i),l])};export default o;export{p as __pageData};