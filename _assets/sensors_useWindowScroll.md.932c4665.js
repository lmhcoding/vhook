import{g as a,j as n,A as s,f as t,q as e}from"./common-db3bf608.js";const p='{"title":"`useWindowScroll`","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Params","slug":"params"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"sensors/useWindowScroll.md","lastUpdated":1601612171134.7952}';var o={};const l=s('<h1 id="usewindowscroll"><a class="header-anchor" href="#usewindowscroll" aria-hidden="true">#</a> <code>useWindowScroll</code></h1><hr><p>追踪 <code>window</code> 滚动的位置</p><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWindowScroll</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span>\n</code></pre></div><h2 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>delay</td><td>节流时间(为0则不节流)</td><td>number</td><td>200</td></tr></tbody></table><h2 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><table><thead><tr><th>参数名</th><th>描述</th><th>类型</th></tr></thead><tbody><tr><td>x</td><td>window.scrollX</td><td>DeepReadonly&lt;Ref&lt;number&gt;&gt;</td></tr><tr><td>y</td><td>window.scrollY</td><td>DeepReadonly&lt;Ref&lt;number&gt;&gt;</td></tr></tbody></table><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',10),c=s('<h2 id="code"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>x: {{x}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>y: {{y}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useWindowScroll <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vhook&#39;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">useWindowScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2);o.render=function(s,p,o,u,d,r){const i=e("UseWindowScroll");return t(),a("div",null,[l,n(i),c])};export default o;export{p as __pageData};