(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f6328e5"],{"2fef":function(t,e,i){},"8dd9":function(t,e,i){"use strict";i("2fef")},a166:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("WaterMark",{staticClass:"questionnaire-editor"},[e("Card",{attrs:{"dis-hover":"",bordered:!1,title:"问卷信息"}},[e("Form",{ref:"form",attrs:{model:t.form,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{title:"统计小区："}},[t._v(t._s(t.community_name)+"小区")]),e("FormField",{attrs:{title:"问卷标题：",prop:"title"}},[e("Input",{attrs:{placeholder:"请输入问卷标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormField",{attrs:{title:"发布问卷：",prop:"published"}},[e("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:t.form.published,callback:function(e){t.$set(t.form,"published",e)},expression:"form.published"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("否")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("是")])])],1),e("FormField",{attrs:{title:"截止时间：",prop:"expire"}},[e("DatePicker",{attrs:{placeholder:"请选择截止时间",options:{disabledDate:t=>+t<Date.now()+864e5}},model:{value:t.form.expire,callback:function(e){t.$set(t.form,"expire",e)},expression:"form.expire"}})],1)],1)],1),e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"问卷问题"}},[e("div",{staticClass:"ivu-form"},[t._l(t.questions,(function(i,s){return e("div",{directives:[{name:"dragging",rawName:"v-dragging",value:{item:i,list:t.questions,group:"questions"},expression:"{ item, list: questions, group: 'questions' }"}],key:s,class:["question",s===t.editingIndex?"editing":""]},[s===t.editingIndex?e("div",[e("div",{staticClass:"title-row"},[e("span",[t._v(t._s(s+1)+".")]),e("Input",{attrs:{placeholder:"请输入问题标题","show-word-limit":"",maxlength:128},model:{value:t.questions[s].title,callback:function(e){t.$set(t.questions[s],"title",e)},expression:"questions[index].title"}})],1),t._l(i.options,(function(n,o){return e("div",{key:o,staticClass:"answer-row"},[e("span",[1===i.type?e("Radio",{attrs:{disabled:""}}):t._e(),2===i.type?e("Checkbox",{attrs:{disabled:""}}):t._e()],1),e("Input",{attrs:{placeholder:"请输入问题选项","show-word-limit":"",maxlength:128},model:{value:t.questions[s].options[o],callback:function(e){t.$set(t.questions[s].options,o,e)},expression:"questions[index].options[key]"}}),o>1?e("Button",{attrs:{shape:"circle",size:"small"},on:{click:function(e){return t.removeOption(o)}}},[e("Icon",{attrs:{type:"ios-close"}})],1):t._e()],1)})),e("div",{staticClass:"operate-box"},[e("Button",{attrs:{type:"info",size:"small",shape:"circle"},on:{click:t.addOption}},[t._v(" 添加选项 ")]),e("Button",{attrs:{type:"error",size:"small",shape:"circle"},on:{click:t.removeQuestion}},[t._v(" 删除问题 ")]),e("Button",{attrs:{type:"primary",size:"small",shape:"circle"},on:{click:t.confirmQuestion}},[t._v(" 确认问题 ")])],1)],2):e("div",[e("div",{staticClass:"title-row"},[e("span",[t._v(t._s(s+1)+".")]),t._v(" "+t._s(i.title)+" "),e("span",{staticClass:"edit-btn",on:{click:function(e){return t.editQuestion(s)}}},[e("Icon",{attrs:{type:"update"}})],1)]),t._l(i.options,(function(s,n){return e("div",{key:n,staticClass:"answer-row"},[e("span",[1===i.type?e("Radio",{attrs:{disabled:""}}):t._e(),2===i.type?e("Checkbox",{attrs:{disabled:""}}):t._e()],1),t._v(" "+t._s(s)+" ")])}))],2)])})),e("div",{staticClass:"add-btns"},[e("Button",{attrs:{type:"info",shape:"circle",disabled:t.editingIndex>-1},on:{click:function(e){return t.addQuestion(1)}}},[e("Icon",{attrs:{type:"ios-add-circle-outline"}}),t._v(" 单选题 ")],1),e("Button",{attrs:{shape:"circle",type:"info",disabled:t.editingIndex>-1},on:{click:function(e){return t.addQuestion(2)}}},[e("Icon",{attrs:{type:"ios-add-circle-outline"}}),t._v(" 多选题 ")],1)],1)],2)]),e("div",{staticClass:"cw-form-actions"},[e("Button",{attrs:{type:"primary",loading:t.submiting},on:{click:t.submit}},[t._v(t._s(t.update?"修改问卷":"发布问卷"))])],1)],1)},n=[],o=i("78d8"),a=i("37a2"),r=i("8100"),l=i("4b1c"),d=i("6339"),u=i("e7c9"),c=i("545e"),p=i("88bd"),m=i("3e79"),h=i("7c0d"),f=i("8c99"),b=(i("ed70"),i("7736")),v=i("2af9"),g=i("e49c"),x={name:"QuestionnaireEditor",props:{detail:{type:Object,default:()=>({})},update:Boolean,onSubmit:Function},data(){return{form:{title:this.detail.title?this.detail.title:"",expire:this.detail.expire?new Date(this.detail.expire):"",published:this.detail.published?this.detail.published:0},rules:{published:[{required:!0,type:"number",message:"请选择是否发布问卷"}],title:[{required:!0,message:"请输入问卷标题"},{max:56,message:"问卷标题不能超过56个字"}],expire:[{required:!0,message:"请选择问卷截止时间"}]},questions:this.detail.questions?this.detail.questions:[],submiting:!1,editingIndex:-1}},mixins:[g["a"]],mounted(){this.$dragging.$on("dragged",({value:t})=>{this.questions=t.list})},methods:{addQuestion(t){this.questions.push({type:t,title:1===t?"单选题":"多选题",options:["选项1","选项2","选项3","选项4"]}),this.editingIndex=this.questions.length-1},editQuestion(t){this.editingIndex=t},removeQuestion(){this.editingIndex<0||(this.questions.splice(this.editingIndex,1),this.editingIndex=-1)},confirmQuestion(){this.editingIndex=-1},addOption(){this.questions[this.editingIndex].options.push("新增选项")},removeOption(t){if(!(this.editingIndex<0))return this.questions[this.editingIndex].options.length<2?f["a"].warning("一个问题至少要有两个选项"):void this.questions[this.editingIndex].options.splice(t,1)},submit(){this.$refs.form.validate(t=>{if(!t)return;if(this.editingIndex>-1)return f["a"].error("请先完成编辑操作");if(0===this.questions.length)return f["a"].error("问卷问题不能为空");const e=()=>{this.submiting=!0;const t={...this.form,questions:this.questions};t.expire=+t.expire,this.submiting=!0,this.onSubmit(t).then(()=>{this.submiting=!1},()=>{this.submiting=!1})};this.form.published?h["a"].confirm({title:"确认要发布问卷吗",content:"发布试卷后不允许修改问卷，请确定",onOk:()=>e()}):e()})}},computed:{...Object(b["c"])({postInfo:"common/postInfo"}),community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name}},watch:{detail:{deep:!0,handler(t){this.form={title:t.title?t.title:"",expire:t.expire?new Date(t.expire):"",published:t.published?t.published:0},this.questions=t.questions?t.questions:[]}}},components:{Card:m["a"],Button:p["a"],Form:c["a"],Input:u["a"],DatePicker:d["a"],FormField:v["j"],Icon:l["a"],Radio:r["a"],OSwitch:a["a"],Checkbox:o["a"],WaterMark:v["s"]}},_=x,I=(i("8dd9"),i("e607")),q=Object(I["a"])(_,s,n,!1,null,null,null);e["a"]=q.exports},efa5:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("Header"),e("Editor",{attrs:{onSubmit:t.submit}})],1)},n=[],o=i("8c99"),a=(i("ed70"),i("7736")),r=i("2af9"),l=i("a166"),d=i("ed08"),u={name:"BasicQuestionnaireCreate",components:{Header:r["k"],Editor:l["a"],Message:o["a"]},methods:{submit(t){return new Promise((e,i)=>{d["i"].post("/questionnaire/create",{...t,community_id:this.postInfo.default_community_id}).then(t=>{o["a"].success("问卷创建成功"),this.$router.push("/basic/questionnaire/preview/"+t.data.id),e()}).catch(()=>i())})}},computed:{...Object(a["c"])({postInfo:"common/postInfo"})}},c=u,p=i("e607"),m=Object(p["a"])(c,s,n,!1,null,null,null);e["default"]=m.exports}}]);