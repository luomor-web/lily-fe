(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56eca1ab"],{"09ba":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t._self._c;return e("WaterMark",[e("Header"),e("Editor",{attrs:{onSubmit:t.submit}})],1)},l=[],s=i("8c99"),a=(i("ed70"),i("7736")),n=i("2af9"),r=i("3c31"),p=i("ed08"),c={name:"BasicNoticeCreate",components:{Header:n["k"],Editor:r["a"],Message:s["a"],WaterMark:n["s"]},methods:{submit(t){return new Promise((e,i)=>{p["i"].post("/notice/create",{...t,community_id:this.postInfo.default_community_id}).then(t=>{s["a"].success("通知发布成功"),this.$router.push("/basic/notice/preview/"+t.data.id),e()}).catch(()=>i())})}},computed:{...Object(a["c"])({postInfo:"common/postInfo"})}},m=c,d=i("e607"),u=Object(d["a"])(m,o,l,!1,null,null,null);e["default"]=u.exports},"3c31":function(t,e,i){"use strict";var o=function(){var t=this,e=t._self._c;return e("Card",{attrs:{"dis-hover":"",bordered:!1}},[e("Form",{ref:"form",staticClass:"form",attrs:{model:t.form,rules:t.rules,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{title:"通知范围："}},[t._v(t._s(t.community_name)+"小区")]),e("FormField",{attrs:{prop:"title",title:"通知标题："}},[e("Input",{attrs:{placeholder:"请输入通知标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormField",{attrs:{prop:"overview",title:"通知概述："}},[e("Input",{attrs:{type:"textarea",rows:5,placeholder:"请输入通知概述"},model:{value:t.form.overview,callback:function(e){t.$set(t.form,"overview",e)},expression:"form.overview"}})],1),e("FormField",{attrs:{title:"发布：",prop:"published"}},[e("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:t.form.published,callback:function(e){t.$set(t.form,"published",e)},expression:"form.published"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("否")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("是")])])],1),e("FormField",{attrs:{title:"公众号推送：",prop:"oa_tpl_msg",label:"当前仅支持停水停电通知，非严重影响业主生活情况不准使用本功能"}},[e("OSwitch",{model:{value:t.form.oa_tpl_msg,callback:function(e){t.$set(t.form,"oa_tpl_msg",e)},expression:"form.oa_tpl_msg"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("否")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("是")])])],1),t.form.oa_tpl_msg?e("FormField",{attrs:{title:"推送模板：",prop:"tpl"}},[e("Select",{attrs:{placeholder:"请选择推送模板"},model:{value:t.form.tpl,callback:function(e){t.$set(t.form,"tpl",e)},expression:"form.tpl"}},t._l(t.tplList,(function(i){return e("Option",{key:i.tpl,attrs:{value:i.tpl}},[t._v(t._s(i.title))])})),1)],1):t._e(),t.form.oa_tpl_msg?e("FormField",{attrs:{title:"模板内容：",prop:"tpl_content",label:"禁止出现不雅词语，违者封号"}},[e("div",{staticClass:"wechat-tpl-preview"},[e("div",{staticClass:"tpl-content"},[e("h4",[t._v(t._s(t.tplTitle))]),t._l(t.form.tpl_content,(function(i,o){return e("div",{key:o,staticClass:"row"},[i.label?e("span",[t._v(t._s(i.label)+"：")]):t._e(),e("Input",{attrs:{placeholder:"{{"+i.key+"."+i.type+"}}"},model:{value:t.form.tpl_content[o].value,callback:function(e){t.$set(t.form.tpl_content[o],"value",e)},expression:"form.tpl_content[index].value"}})],1)}))],2),e("div",{staticClass:"to-mp"},[e("span",[t._v("详情")]),e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)])]):t._e(),e("FormField",{attrs:{prop:"content",title:"通知内容："}},[e("Editor",{attrs:{dir:"notice"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("div",{staticClass:"cw-form-actions"},[e("Button",{attrs:{type:"primary",loading:t.submiting},on:{click:t.submit}},[t._v(" "+t._s(t.update?"更新":"发布")+" ")])],1)],1)],1)},l=[],s=i("4b1c"),a=i("13ab"),n=i("fee1"),r=i("37a2"),p=i("88bd"),c=i("e7c9"),m=i("545e"),d=i("3e79"),u=(i("00e5"),i("2af9")),f=i("e49c"),_=i("7736"),h=i("ed08"),v={name:"NoticeEditor",props:{update:Boolean,onSubmit:Function,detail:{type:Object,default:()=>({})}},data(){return{labelWidth:160,form:{title:this.detail.title?this.detail.title:"",overview:this.detail.overview?this.detail.overview:void 0,published:this.detail.published?this.detail.published:0,oa_tpl_msg:!!this.detail.notice_tpl_id,tpl:this.detail.tpl?this.detail.tpl:"",tpl_content:this.detail.tpl_content?this.detail.tpl_content:[],content:this.detail.content?this.detail.content:[]},rules:{title:[{required:!0,message:"请输入通知标题"},{max:56,message:"通知标题不能超过56个字"}],published:[{required:!0,type:"number",message:"请选择是否发布通知"}],overview:[{required:!0,message:"请输入通知概述"},{max:128,message:"通知概述不能超过128个字"}],oa_tpl_msg:[{required:!0,type:"boolean",message:"请选择是否公众号群发 "}],tpl:[{required:!0,message:"请选择推送模板"}],tpl_content:[{required:!0,type:"array",message:"请输入模板内容",validator:(t,e,i)=>{const o=e.every(t=>!!t.value);o?i():i(new Error("请输入模板内容"))}}],content:[{required:!0,message:"请输入通知内容",type:"array"}]},tplTitle:"",tplList:[],submiting:!1}},created(){h["i"].get("/notice/tpl").then(t=>{this.tplList=t.data.list})},mixins:[f["a"]],methods:{submit(){this.$refs.form.validate(t=>{t&&(this.submiting=!0,this.onSubmit(this.form).then(()=>{this.submiting=!1},()=>{this.submiting=!1}))})}},computed:{...Object(_["c"])({postInfo:"common/postInfo"}),community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name}},watch:{detail:{deep:!0,handler(t){this.form={title:t.title?t.title:"",overview:t.overview?t.overview:void 0,published:t.published?t.published:0,oa_tpl_msg:!!t.notice_tpl_id,tpl:t.tpl?t.tpl:"",tpl_content:t.tpl_content?t.tpl_content:[],content:t.content?t.content:[]}}},"form.tpl"(t){const e=this.tplList.findIndex(e=>e.tpl===t);e<0||(this.tplTitle=this.tplList[e].title,this.update?this.form.tpl_content=this.tplList[e].content.map((t,e)=>({...t,value:this.detail.notice_tpl_id?this.detail.tpl_content[e].value:""})):this.form.tpl_content=this.tplList[e].content)}},components:{Card:d["a"],Form:m["a"],FormField:u["j"],Input:c["a"],Button:p["a"],Editor:u["e"],OSwitch:r["a"],Select:n["a"],Option:a["a"],Icon:s["a"]}},b=v,w=(i("b9ed"),i("e607")),g=Object(w["a"])(b,o,l,!1,null,null,null);e["a"]=g.exports},"48de":function(t,e,i){},b9ed:function(t,e,i){"use strict";i("48de")}}]);