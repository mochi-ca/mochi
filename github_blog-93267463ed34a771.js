let O=0,M=null,P=`undefined`,U=`boolean`,V=`string`,N=1,X=`Object`,Q=`utf-8`,T=`number`,Z=4,S=`function`,Y=16,K=Array,W=Array.isArray,R=Error,$=Object,_=Reflect,L=undefined;var E=(async(a,b)=>{if(typeof Response===S&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===S){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==T||b==U||a==M){return `${a}`};if(b==V){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==M){return `Symbol`}else{return `Symbol(${b})`}};if(b==S){const b=a.name;if(typeof b==V&&b.length>O){return `Function(${b})`}else{return `Function`}};if(W(a)){const b=a.length;let c=`[`;if(b>O){c+=u(a[O])};for(let d=N;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>N){d=c[N]}else{return toString.call(a)};if(d==X){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return X}};if(a instanceof R){return `${a.name}: ${a.message}\n${a.stack}`};return d});var G=((a,b)=>{});var w=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h53d4592c1ceffb64(b,c)});var g=(a=>{if(d===b.length)b.push(b.length+ N);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var J=(async(b)=>{if(a!==L)return a;if(typeof b===P){b=new URL(`github_blog-93267463ed34a771_bg.wasm`,import.meta.url)};const c=F();if(typeof b===V||typeof Request===S&&b instanceof Request||typeof URL===S&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc4c997d55930d7de(b,c,g(d))});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var B=((a,b)=>{if(a===O){return c(b)}else{return r(a,b)}});var A=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he673d4af4ea72955(b,c,g(d))});var p=(()=>{if(o===M||o.byteLength===O){o=new Int32Array(a.memory.buffer)};return o});var n=(a=>a===L||a===M);var c=(a=>b[a]);var I=(b=>{if(a!==L)return a;const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var F=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==N){b.a=O;return !0};const c=!1;return c});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===V?e:L;var g=n(f)?O:m(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=h;p()[b/Z+ N]=i;p()[b/Z+ O]=g});b.wbg.__wbindgen_string_new=((a,b)=>{const c=r(a,b);return g(c)});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===T?d:L;t()[a/8+ N]=n(e)?O:e;p()[a/Z+ O]=!n(e)});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===V;return b});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===U?(b?N:O):2;return d});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===L;return b});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===M;return b});b.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=c(a).document;return n(b)?O:g(b)});b.wbg.__wbg_location_0f233324e8e8c699=(a=>{const b=c(a).location;return g(b)});b.wbg.__wbg_history_370f36be0803466b=function(){return D((a=>{const b=c(a).history;return g(b)}),arguments)};b.wbg.__wbg_scrollTo_fa65cff02c3e7c5a=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_requestAnimationFrame_1820a8e6b645ec5a=function(){return D(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_fetch_ba9c8f5d941ae5c4=((a,b)=>{const d=c(a).fetch(c(b));return g(d)});b.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=c(a).body;return n(b)?O:g(b)});b.wbg.__wbg_createComment_ce9f467394242d45=((a,b,d)=>{var e=B(b,d);const f=c(a).createComment(e);return g(f)});b.wbg.__wbg_createDocumentFragment_229f723f44e69ab9=(a=>{const b=c(a).createDocumentFragment();return g(b)});b.wbg.__wbg_createElement_1a136faad4101f43=function(){return D(((a,b,d)=>{var e=B(b,d);const f=c(a).createElement(e);return g(f)}),arguments)};b.wbg.__wbg_createTextNode_dbdd908f92bae1b1=((a,b,d)=>{var e=B(b,d);const f=c(a).createTextNode(e);return g(f)});b.wbg.__wbg_getElementById_00904c7c4a32c23b=((a,b,d)=>{var e=B(b,d);const f=c(a).getElementById(e);return n(f)?O:g(f)});b.wbg.__wbg_classList_b75072943b838f29=(a=>{const b=c(a).classList;return g(b)});b.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,d)=>{var e=B(b,d);c(a).innerHTML=e});b.wbg.__wbg_getAttribute_14ccdc738c4f7d95=((b,d,e,f)=>{var g=B(e,f);const i=c(d).getAttribute(g);var j=n(i)?O:m(i,a.__wbindgen_malloc,a.__wbindgen_realloc);var k=h;p()[b/Z+ N]=k;p()[b/Z+ O]=j});b.wbg.__wbg_hasAttribute_40947267e195b26c=((a,b,d)=>{var e=B(b,d);const f=c(a).hasAttribute(e);return f});b.wbg.__wbg_removeAttribute_5c264e727b67dbdb=function(){return D(((a,b,d)=>{var e=B(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_scrollIntoView_31df5d1d2bc727ab=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_setAttribute_0918ea45d5a1c663=function(){return D(((a,b,d,e,f)=>{var g=B(b,d);var h=B(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_bed7b7b6e53dd469=function(){return D(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_ed2f62f1a8be044b=(a=>{c(a).remove()});b.wbg.__wbg_append_517583bac5b5bb16=function(){return D(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_instanceof_HtmlAnchorElement_afbec6867d883d45=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_target_a012ddff98c775bb=((b,d)=>{const e=c(d).target;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f});b.wbg.__wbg_href_596cc35e5517d06b=((b,d)=>{const e=c(d).href;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f});b.wbg.__wbg_newwithstrandinit_9fd2fc855c6327eb=function(){return D(((a,b,d)=>{var e=B(a,b);const f=new Request(e,c(d));return g(f)}),arguments)};b.wbg.__wbg_instanceof_Response_0d25bb8436a9cefe=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_text_10c88c5e55f873c7=function(){return D((a=>{const b=c(a).text();return g(b)}),arguments)};b.wbg.__wbg_state_cabf8868613a7bdb=function(){return D((a=>{const b=c(a).state;return g(b)}),arguments)};b.wbg.__wbg_pushState_90b0a1cf59505502=function(){return D(((a,b,d,e,f,g)=>{var h=B(d,e);var i=B(f,g);c(a).pushState(c(b),h,i)}),arguments)};b.wbg.__wbg_replaceState_594fcc05da10fe45=function(){return D(((a,b,d,e,f,g)=>{var h=B(d,e);var i=B(f,g);c(a).replaceState(c(b),h,i)}),arguments)};b.wbg.__wbg_origin_a66ff95a994d7e40=function(){return D(((b,d)=>{const e=c(d).origin;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_pathname_2cd8b46817926b06=function(){return D(((b,d)=>{const e=c(d).pathname;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_search_eb68df82d26f8761=function(){return D(((b,d)=>{const e=c(d).search;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_hash_9bd16c0f666cdf27=function(){return D(((b,d)=>{const e=c(d).hash;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_error_1f4e3e298a7c97f6=(a=>{console.error(c(a))});b.wbg.__wbg_warn_0e0204547af47087=(a=>{console.warn(c(a))});b.wbg.__wbg_add_44212bfb95df48ba=function(){return D(((a,b,d)=>{var e=B(b,d);c(a).add(e)}),arguments)};b.wbg.__wbg_remove_0df84ff63b459921=function(){return D(((a,b,d)=>{var e=B(b,d);c(a).remove(e)}),arguments)};b.wbg.__wbg_defaultPrevented_37035afe196e2aa0=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_composedPath_d94a39b8c8f6eed1=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_preventDefault_d2c7416966cb0632=(a=>{c(a).preventDefault()});b.wbg.__wbg_ctrlKey_0d75e0e9028bd999=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_12353f0e19b21d6a=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_altKey_a076f8612103d7e8=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_metaKey_4e3f6e986f2802b1=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_8a97c55db17c7314=(a=>{const b=c(a).button;return b});b.wbg.__wbg_childNodes_75d3da5f3a7bb985=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_previousSibling_4cd9e84aeb4df529=(a=>{const b=c(a).previousSibling;return n(b)?O:g(b)});b.wbg.__wbg_nextSibling_13e9454ef5323f1a=(a=>{const b=c(a).nextSibling;return n(b)?O:g(b)});b.wbg.__wbg_appendChild_bd383ec5356c0bdb=function(){return D(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_cloneNode_80501c66ab115588=function(){return D((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_length_d5ed87010607a669=(a=>{const b=c(a).length;return b});b.wbg.__wbg_setdata_4d5b377238fff97c=((a,b,d)=>{var e=B(b,d);c(a).data=e});b.wbg.__wbg_addEventListener_2f891d22985fd3c8=function(){return D(((a,b,d,e)=>{var f=B(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_removeEventListener_07715e6f464823fc=function(){return D(((a,b,d,e)=>{var f=B(b,d);c(a).removeEventListener(f,c(e))}),arguments)};b.wbg.__wbg_origin_028cdb6d9987f6c3=((b,d)=>{const e=c(d).origin;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f});b.wbg.__wbg_pathname_d0d5b2fd2c7d8243=((b,d)=>{const e=c(d).pathname;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f});b.wbg.__wbg_search_b5c7b044aaf64616=((b,d)=>{const e=c(d).search;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f});b.wbg.__wbg_searchParams_40c1f8d0a85de0aa=(a=>{const b=c(a).searchParams;return g(b)});b.wbg.__wbg_hash_286eced2921b7b34=((b,d)=>{const e=c(d).hash;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f});b.wbg.__wbg_newwithbase_1151109a3f062f92=function(){return D(((a,b,c,d)=>{var e=B(a,b);var f=B(c,d);const h=new URL(e,f);return g(h)}),arguments)};b.wbg.__wbg_queueMicrotask_118eeb525d584d9a=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_26a89c14c53809c0=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===S;return b});b.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const d=c(a)[b>>>O];return g(d)});b.wbg.__wbg_length_d99b680fd68bf71b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{var c=B(a,b);const d=new Function(c);return g(d)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==M;return d});b.wbg.__wbg_next_1938cf110c9491d4=(a=>{const b=c(a).next;return g(b)});b.wbg.__wbg_next_267398d0e0761bf9=function(){return D((a=>{const b=c(a).next();return g(b)}),arguments)};b.wbg.__wbg_done_506b44765ba84b9c=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_31485d8770eb06ab=(a=>{const b=c(a).value;return g(b)});b.wbg.__wbg_iterator_364187e1ee96b750=(()=>{const a=Symbol.iterator;return g(a)});b.wbg.__wbg_get_5027b32da70f39b1=function(){return D(((a,b)=>{const d=_.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_call_a79f1973a4f07d5e=function(){return D(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_87d841e70661f6e9=(()=>{const a=new $();return g(a)});b.wbg.__wbg_self_086b5302bcafb962=function(){return D((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_132fa5d7546f1de5=function(){return D((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return D((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return D((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_decodeURI_4bf318e70843e94f=function(){return D(((a,b)=>{var c=B(a,b);const d=decodeURI(c);return g(d)}),arguments)};b.wbg.__wbg_isArray_fbd24d447869b527=(a=>{const b=W(c(a));return b});b.wbg.__wbg_call_f6a2bc58c19c53c6=function(){return D(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_is_a5728dbfb61c82cd=((a,b)=>{const d=$.is(c(a),c(b));return d});b.wbg.__wbg_exec_70dc2e84f7a29584=((a,b,d)=>{var e=B(b,d);const f=c(a).exec(e);return n(f)?O:g(f)});b.wbg.__wbg_new_c62202c5c4bd9009=((a,b,c,d)=>{var e=B(a,b);var f=B(c,d);const h=new RegExp(e,f);return g(h)});b.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_then_5842e4e97f7beace=((a,b,d)=>{const e=c(a).then(c(b),c(d));return g(e)});b.wbg.__wbg_set_37a50e901587b477=function(){return D(((a,b,d)=>{const e=_.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Z+ N]=g;p()[b/Z+ O]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new R(r(a,b))});b.wbg.__wbindgen_closure_wrapper228=((a,b,c)=>{const d=v(a,b,61,w);return g(d)});b.wbg.__wbindgen_closure_wrapper735=((a,b,c)=>{const d=v(a,b,206,x);return g(d)});b.wbg.__wbindgen_closure_wrapper1657=((a,b,c)=>{const d=v(a,b,584,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1843=((a,b,c)=>{const d=v(a,b,644,z);return g(d)});b.wbg.__wbindgen_closure_wrapper3102=((a,b,c)=>{const d=v(a,b,661,A);return g(d)});return b});var z=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hae25a9a73ad292f5(b,c)});var t=(()=>{if(s===M||s.byteLength===O){s=new Float64Array(a.memory.buffer)};return s});var x=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hf84368d727e89e55(b,c)});var e=(a=>{if(a<132)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:N,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=O;try{return e(c,f.b,...b)}finally{if(--f.cnt===O){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var m=((a,b,c)=>{if(c===L){const c=k.encode(a);const d=b(c.length,N)>>>O;j().subarray(d,d+ c.length).set(c);h=c.length;return d};let d=a.length;let e=b(d,N)>>>O;const f=j();let g=O;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==O){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,N)>>>O;const b=j().subarray(e+ g,e+ d);const f=l(a,b);g+=f.written};h=g;return e});var j=(()=>{if(i===M||i.byteLength===O){i=new Uint8Array(a.memory.buffer)};return i});var r=((a,b)=>{a=a>>>O;return q.decode(j().subarray(a,a+ b))});var H=((b,c)=>{a=b.exports;J.__wbindgen_wasm_module=c;s=M;o=M;i=M;a.__wbindgen_start();return a});let a;const b=new K(128).fill(L);b.push(L,M,!0,!1);let d=b.length;let h=O;let i=M;const k=typeof TextEncoder!==P?new TextEncoder(Q):{encode:()=>{throw R(`TextEncoder not available`)}};const l=typeof k.encodeInto===S?((a,b)=>k.encodeInto(a,b)):((a,b)=>{const c=k.encode(a);b.set(c);return {read:a.length,written:c.length}});let o=M;const q=typeof TextDecoder!==P?new TextDecoder(Q,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw R(`TextDecoder not available`)}};if(typeof TextDecoder!==P){q.decode()};let s=M;function C(b){try{const f=a.__wbindgen_add_to_stack_pointer(-Y);const g=m(b,a.__wbindgen_malloc,a.__wbindgen_realloc);const i=h;a.slugify(f,g,i);var c=p()[f/Z+ O];var d=p()[f/Z+ N];var e=B(c,d);if(c!==O){a.__wbindgen_free(c,d,N)};return e}finally{a.__wbindgen_add_to_stack_pointer(Y)}}export default J;export{C as slugify,I as initSync}