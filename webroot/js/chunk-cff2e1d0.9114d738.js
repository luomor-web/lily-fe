(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cff2e1d0"],{"05b3":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("Card",{attrs:{"dis-hover":"",bordered:!1}},[e("Form",{ref:"form",staticClass:"form",attrs:{model:t.form,rules:t.rules,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{prop:"title",title:"专题标题："}},[e("Input",{attrs:{placeholder:"请输入专题标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormField",{attrs:{prop:"banner_img",title:"专题封面：",label:"请上传900*300尺寸图片"}},[e("ImageUpload",{attrs:{dir:"topic",width:900,height:300},model:{value:t.form.banner_img,callback:function(e){t.$set(t.form,"banner_img",e)},expression:"form.banner_img"}})],1),e("FormField",{attrs:{prop:"published",title:"发布到线上："}},[e("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:t.form.published,callback:function(e){t.$set(t.form,"published",e)},expression:"form.published"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1),e("FormField",{attrs:{prop:"content",title:"专题内容："}},[e("Editor",{attrs:{dir:"topic"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("div",{staticClass:"cw-form-actions"},[e("Button",{attrs:{type:"primary",loading:t.submiting},on:{click:t.submit}},[t._v(" "+t._s(t.update?"更新":"发布")+" ")])],1)],1)],1)},s=[],o=i("88bd"),n=i("37a2"),r=i("e7c9"),l=i("545e"),d=i("3e79"),m=i("2af9"),u=i("e49c"),c={name:"TopicEditor",props:{update:Boolean,onSubmit:Function,detail:{type:Object,default:()=>({})}},data(){return{labelWidth:160,form:{title:this.detail.title?this.detail.title:"",banner_img:this.detail.banner_img?this.detail.banner_img:void 0,published:this.detail.published?this.detail.published:1,content:this.detail.content?this.detail.content:[]},rules:{title:[{required:!0,message:"请输入专题标题"},{max:56,message:"专题标题不能超过56个字"}],banner_img:[{required:!0,message:"请上传专题封面"}],published:[{required:!0,message:"请选择是否发布",type:"number"}],content:[{required:!0,message:"请输入专题内容",type:"array"}]},submiting:!1}},mixins:[u["a"]],methods:{submit(){this.$refs.form.validate(t=>{t&&(this.submiting=!0,this.onSubmit(this.form).then(()=>{this.submiting=!1},()=>{this.submiting=!1}))})}},watch:{detail:{deep:!0,handler(t){this.form={title:t.title?t.title:"",banner_img:t.banner_img?t.banner_img:void 0,published:t.published?t.published:1,content:t.content?t.content:[]}}}},components:{Card:d["a"],Form:l["a"],FormField:m["j"],Input:r["a"],ImageUpload:m["l"],OSwitch:n["a"],Button:o["a"],Editor:m["e"]}},p=c,h=i("e607"),b=Object(h["a"])(p,a,s,!1,null,null,null);e["a"]=b.exports},"2fc51":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("section",[e("Header",{attrs:{back:""}}),e("Editor",{attrs:{onSubmit:t.submit,update:"",detail:t.detail}}),t.fetching?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},s=[],o=i("4d77"),n=i("8c99"),r=i("7736"),l=i("2af9"),d=i("05b3"),m=i("ed08"),u={name:"BasicTopicCreate",components:{Header:l["k"],Editor:d["a"],Message:n["a"],Spin:o["a"]},data(){return{fetching:!0,detail:{}}},computed:{...Object(r["c"])({postInfo:"common/postInfo"})},mounted(){this.postInfo.default_community_id&&this.getDetail()},methods:{getDetail(){const t={community_id:this.postInfo.default_community_id,id:this.$route.params.id};m["i"].post("/topic/detail",t).then(t=>{this.fetching=!1,this.detail=t.data})},submit(t){return new Promise((e,i)=>{t.id=this.$route.params.id,t.community_id=this.postInfo.default_community_id,m["i"].post("/topic/update",t).then(()=>{n["a"].success("专题更新成功"),this.$router.replace("/basic/topic/preview/"+this.$route.params.id),e()}).catch(()=>i())})}},watch:{"postInfo.default_community_id"(){this.getDetail()}}},c=u,p=i("e607"),h=Object(p["a"])(c,a,s,!1,null,null,null);e["default"]=h.exports}}]);