(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4784db2e"],{"371c":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("WaterMark",[s("Header",{attrs:{back:""}}),s("Card",{attrs:{"dis-hover":"",bordered:!1,title:"投诉建议信息"}},[s("Row",{staticClass:"detail-row"},[s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("工单编号")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t.num))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("小区名称")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t.community_name))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 反馈类型 ")]),s("div",{staticClass:"detail-content"},[s("Tag",{attrs:{color:t.complainType.color}},[t._v(t._s(t.complainType.text))])],1)]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("问题分类")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t.category))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("问题描述")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.description))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 当前进度 ")]),s("div",{staticClass:"detail-content"},[s("Tag",{attrs:{color:t.progress.color}},[t._v(t._s(t.progress.text))])],1)]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 现场图片 ")]),s("div",{staticClass:"detail-content"},[!t.fetching&&t.detail.info.complain_imgs.length?s("Images",{attrs:{imgs:t.detail.info.complain_imgs}}):s("span",[t._v("未提供")])],1)]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("上报时间")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.created_at)))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 工单来源 ")]),s("div",{staticClass:"detail-content"},[t._v(t._s("owner"===t.detail.info.refer?"业主上报":"公司分配"))])]),"owner"===t.detail.info.refer?s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 业主姓名 ")]),s("div",{staticClass:"detail-content"},[t.userInfo.access.includes(t.ROLES.YZDA)?s("router-link",{attrs:{to:"/basic/owner/detail/"+t.detail.referInfo.id}},[t._v(" "+t._s(t.detail.referInfo.real_name)+" ")]):s("span",[t._v(t._s(t.detail.referInfo.real_name))])],1)]):t._e(),"colleague"===t.detail.info.refer?s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 发起人信息 ")]),s("div",{staticClass:"detail-content"},[s("router-link",{attrs:{to:"/oa/hr/colleague/detail/"+t.detail.referInfo.id}},[t._v(" "+t._s(t.detail.referInfo.real_name)+" ")])],1)]):t._e(),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 接收指派推送 ")]),s("div",{staticClass:"detail-content"},[s("Tag",{attrs:{color:t.detail.info.dispose_subscribed?"success":"default"}},[t._v(" "+t._s(t.detail.info.dispose_subscribed?"是":"否")+" ")])],1)]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 接收接单推送 ")]),s("div",{staticClass:"detail-content"},[s("Tag",{attrs:{color:t.detail.info.confrim_subscribed?"success":"default"}},[t._v(" "+t._s(t.detail.info.confrim_subscribed?"是":"否")+" ")])],1)]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 接收完工推送 ")]),s("div",{staticClass:"detail-content"},[s("Tag",{attrs:{color:t.detail.info.finish_subscribed?"success":"default"}},[t._v(" "+t._s(t.detail.info.finish_subscribed?"是":"否")+" ")])],1)])],1)],1),t.detail.info.step>=2?s("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"派单信息"}},[s("Row",{staticClass:"detail-row"},[s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("派单时间")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.alloted_at)))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 派单人 ")]),s("div",{staticClass:"detail-content"},[s("router-link",{attrs:{to:"/oa/hr/colleague/detail/"+t.detail.allotInfo.id}},[t._v(" "+t._s(t.detail.allotInfo.real_name)+" ")])],1)]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 指派人 ")]),s("div",{staticClass:"detail-content"},[s("router-link",{attrs:{to:"/oa/hr/colleague/detail/"+t.detail.disposedInfo.id}},[t._v(" "+t._s(t.detail.disposedInfo.real_name)+" ")])],1)])],1)],1):t._e(),2===t.detail.info.step?s("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"接受工单确认"}},[s("Form",{ref:"confirmForm",attrs:{model:t.confirmForm,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.confirmRules},nativeOn:{submit:function(t){t.preventDefault()}}},[s("FormField",{attrs:{title:"确认接单回复：",prop:"dispose_reply"}},[s("Input",{attrs:{type:"textarea",rows:5,"show-word-limit":"",maxlength:"200",placeholder:"非必填项，如果不能及时处理工单请填写延迟服务原因"},model:{value:t.confirmForm.dispose_reply,callback:function(s){t.$set(t.confirmForm,"dispose_reply",s)},expression:"confirmForm.dispose_reply"}})],1),s("div",{staticClass:"cw-form-actions"},[s("Button",{attrs:{type:"primary",loading:t.confirming},on:{click:t.confirm}},[t._v("确认工单")])],1)],1)],1):t._e(),t.detail.info.step>=3?s("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单确认信息"}},[s("Row",{staticClass:"detail-row"},[s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("确认时间")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.disposed_at)))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 确认回复 ")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.dispose_reply?t.detail.info.dispose_reply:"-"))])])],1)],1):t._e(),3===t.detail.info.step?s("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单完成确认"}},[s("Form",{ref:"finishForm",attrs:{model:t.finishForm,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.finishRules},nativeOn:{submit:function(t){t.preventDefault()}}},[s("FormField",{attrs:{title:"反馈信息：",prop:"dispose_content"}},[s("Input",{attrs:{type:"textarea",rows:5,"show-word-limit":"",maxlength:"200",placeholder:"请输入反馈信息"},model:{value:t.finishForm.dispose_content,callback:function(s){t.$set(t.finishForm,"dispose_content",s)},expression:"finishForm.dispose_content"}})],1),s("FormField",{attrs:{title:"现场图片：",prop:"dispose_imgs"}},[s("MultipleImageUpload",{attrs:{dir:"complain"},model:{value:t.finishForm.dispose_imgs,callback:function(s){t.$set(t.finishForm,"dispose_imgs",s)},expression:"finishForm.dispose_imgs"}})],1),s("div",{staticClass:"cw-form-actions"},[s("Button",{attrs:{type:"primary",loading:t.finishing},on:{click:t.finish}},[t._v("确认完工")])],1)],1)],1):t._e(),4===t.detail.info.step?s("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单处理信息"}},[s("Row",{staticClass:"detail-row"},[s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v("处理时间")]),s("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.finished_at)))])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 反馈信息 ")]),s("div",{staticClass:"detail-content"},[t._v(" "+t._s(t.detail.info.dispose_content?t.detail.info.dispose_content:"-")+" ")])]),s("Col",{attrs:{lg:8,sm:12,xs:24}},[s("span",{staticClass:"detail-label"},[t._v(" 现场图片 ")]),s("div",{staticClass:"detail-content"},[!t.fetching&&t.detail.info.dispose_imgs.length?s("Images",{attrs:{imgs:t.detail.info.dispose_imgs}}):s("span",[t._v("未提供")])],1)])],1)],1):t._e(),t.fetching?s("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},a=[],o=e("e7c9"),l=e("88bd"),r=e("545e"),n=e("c03a"),c=e("be5e"),d=e("9484"),m=e("4d77"),p=e("3e79"),h=e("8c99"),f=e("7736"),u=e("2af9"),_=e("ed08"),C=e("0373"),g=e.n(C),b=e("e49c"),v={name:"OaOrderComplainDetail",data(){return{ROLES:g.a,fetching:!0,detail:{info:{},referInfo:{},allotInfo:null,disposedInfo:null},confirmForm:{dispose_reply:""},confirmRules:{dispose_reply:[{max:200,message:"确认接单回复最多能输入200个字"}]},confirming:!1,finishForm:{dispose_content:"",dispose_imgs:[]},finishRules:{dispose_content:[{required:!0,message:"请输入反馈信息"},{max:200,message:"反馈信息最多能输入200个字"}]},finishing:!1}},mounted(){this.postInfo.default_community_id&&this.getDetail()},mixins:[b["a"]],methods:{building(){return _["b"].text(this.detail.info)},getDetail(){const t={id:this.$route.params.id,community_id:this.postInfo.default_community_id};_["i"].post("/complain/my_detail",t).then(t=>{this.fetching=!1,this.detail=t.data}).catch(()=>this.fetching=!1)},confirm(){this.$refs.confirmForm.validate(t=>{if(!t)return;const s={id:this.$route.params.id,community_id:this.postInfo.default_community_id,...this.confirmForm};this.confirming=!0,_["i"].post("/complain/confirm",s).then(t=>{this.detail.info.disposed_at=t.data.disposed_at,this.detail.info.dispose_reply=this.confirmForm.dispose_reply,this.detail.info.step=3,this.confirming=!1,h["a"].success("确认工单信息成功")}).catch(()=>this.confirming=!1)})},finish(){this.$refs.finishForm.validate(t=>{if(!t)return;const s={id:this.$route.params.id,community_id:this.postInfo.default_community_id,...this.finishForm};this.finishing=!0,_["i"].post("/complain/finish",s).then(t=>{this.detail.info.finished_at=t.data.finished_at,this.detail.info.dispose_content=this.finishForm.dispose_content,this.detail.info.dispose_imgs=this.finishForm.dispose_imgs,this.detail.info.step=4,this.finishing=!1,h["a"].success("确认工单完成成功")}).catch(()=>this.finishing=!1)})}},computed:{...Object(f["c"])({postInfo:"common/postInfo",userInfo:"common/userInfo"}),num(){return _["f"].num("C",this.detail.info.created_at,this.detail.info.id)},complainType(){let t="",s="";switch(this.detail.info.type){case 1:t="卫生",s="magenta";break;case 2:t="建议",s="red";break}return{text:t,color:s}},progress(){let t="",s="";if(this.detail.info.merge_id)t="合并工单",s="cyan";else switch(this.detail.info.step){case 1:t="待分配工单",s="geekblue";break;case 2:t="待确认工单",s="purple";break;case 3:t="待处理",s="orange";break;case 4:t="已完成",s="green";break}return{text:t,color:s}},category(){switch(this.detail.info.category){case 1:return"卫生";case 2:return"噪音";case 3:return"服务态度";case 4:return"违建";case 5:return"占用消防通道";case 6:return"小区设施";case 7:return"其他";default:return"未知"}},community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name}},watch:{"postInfo.default_community_id"(){this.getDetail()}},components:{Card:p["a"],Spin:m["a"],Header:u["k"],Row:d["a"],Col:c["a"],Tag:n["a"],Images:u["m"],Form:r["a"],FormField:u["j"],Button:l["a"],Input:o["a"],MultipleImageUpload:u["p"],WaterMark:u["s"]}},y=v,k=e("e607"),x=Object(k["a"])(y,i,a,!1,null,null,null);s["default"]=x.exports},c03a:function(t,s,e){"use strict";var i=function(){var t=this,s=t._self._c;return t.fade?s("transition",{attrs:{name:"fade"}},[s("div",{class:t.classes,style:t.wraperStyles,on:{click:function(s){return s.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?s("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),s("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?s("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(s){return s.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)]):s("div",{class:t.classes,style:t.wraperStyles,on:{click:function(s){return s.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?s("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),s("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?s("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(s){return s.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)},a=[],o=e("4b1c"),l=e("e4a4");const r="ivu-tag",n=["default","primary","success","warning","error","blue","green","red","yellow","pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],c=["pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"];var d={name:"Tag",components:{Icon:o["a"]},props:{closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:!0},color:{type:String,default:"default"},type:{validator(t){return Object(l["m"])(t,["border","dot"])}},name:{type:[String,Number]},fade:{type:Boolean,default:!0},size:{validator(t){return Object(l["m"])(t,["default","medium","large"])},default:"default"}},data(){return{isChecked:this.checked}},computed:{classes(){return[""+r,`${r}-size-${this.size}`,{[`${r}-${this.color}`]:!!this.color&&Object(l["m"])(this.color,n),[`${r}-${this.type}`]:!!this.type,[r+"-closable"]:this.closable,[r+"-checked"]:this.isChecked}]},wraperStyles(){return Object(l["m"])(this.color,n)?{}:{background:this.isChecked?this.defaultTypeColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"dot"!==this.type&&"border"!==this.type&&this.isChecked?this.borderColor:this.lineColor,color:this.lineColor}},textClasses(){return[r+"-text","border"===this.type&&Object(l["m"])(this.color,n)?`${r}-color-${this.color}`:"","dot"!==this.type&&"border"!==this.type&&"default"!==this.color&&this.isChecked&&c.indexOf(this.color)<0?r+"-color-white":""]},dotClasses(){return r+"-dot-inner"},iconClass(){return"dot"===this.type?"":"border"===this.type?Object(l["m"])(this.color,n)?`${r}-color-${this.color}`:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},showDot(){return!!this.type&&"dot"===this.type},lineColor(){return"dot"===this.type?"":"border"===this.type?void 0!==this.color?Object(l["m"])(this.color,n)?"":this.color:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},borderColor(){return void 0!==this.color?"default"===this.color?"":this.color:""},dotColor(){return void 0!==this.color?Object(l["m"])(this.color,n)?"":this.color:""},textColorStyle(){return Object(l["m"])(this.color,n)?{}:"dot"!==this.type&&"border"!==this.type?this.isChecked?{color:this.lineColor}:{}:{color:this.lineColor}},bgColorStyle(){return Object(l["m"])(this.color,n)?{}:{background:this.dotColor}},defaultTypeColor(){return"dot"!==this.type&&"border"!==this.type&&void 0!==this.color?Object(l["m"])(this.color,n)?"":this.color:""}},methods:{close(t){void 0===this.name?this.$emit("on-close",t):this.$emit("on-close",t,this.name)},check(){if(!this.checkable)return;const t=!this.isChecked;this.isChecked=t,void 0===this.name?this.$emit("on-change",t):this.$emit("on-change",t,this.name)}},watch:{checked(t){this.isChecked=t}}},m=d,p=e("e607"),h=Object(p["a"])(m,i,a,!1,null,null,null),f=h.exports;s["a"]=f}}]);