(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a0d7caf"],{"4f39":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("WaterMark",[e("Header",{attrs:{back:""}}),e("Row",{attrs:{gutter:22}},[e("Col",{attrs:{lg:10,sm:24,xs:24}},[e("Card",{attrs:{"dis-hover":"",bordered:!1,title:"审批进度"}},[e("WorkflowTimeline",{attrs:{steps:t.detail.steps,label:"采购金额",info:t.detail.info,userId:t.userInfo.id,onApprover:t.doApprover,onBindRelation:t.bindRelation}})],1)],1),e("Col",{attrs:{lg:14,sm:24,xs:24}},[e("Card",{attrs:{"dis-hover":"",bordered:!1,title:"采购信息"}},[e("span",{attrs:{slot:"extra"},slot:"extra"},[t.detail.info.cancel||null!==t.detail.info.success||t.userInfo.id!==t.detail.info.created_by?t._e():e("a",{on:{click:t.cancel}},[e("Icon",{attrs:{type:"md-return-left"}}),t._v(" 撤销申请 ")],1)]),e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("流程编号")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.num))])]),t.userInfo.id!==t.detail.info.created_by?e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("申请人")]),e("div",{staticClass:"detail-content"},[e("router-link",{attrs:{to:"/oa/hr/colleague/detail/"+t.detail.info.created_by}},[t._v(" "+t._s(t.detail.info.real_name)+" ")])],1)]):t._e(),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("采购备注")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.remark?t.detail.info.remark:"-"))])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("采购总金额")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.total)+"元")])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("申请时间")]),e("div",{staticClass:"detail-content"},[t._v(" "+t._s(t._f("mom_format")(t.detail.info.created_at))+" ")])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("申请结果")]),e("div",{staticClass:"detail-content"},[t.detail.info.cancel?e("Tag",{attrs:{color:"warning"}},[t._v("已撤销")]):null===t.detail.info.success?e("Tag",{attrs:{color:"blue"}},[t._v("审核中")]):e("Tag",{attrs:{color:t.detail.info.success?"success":"red"}},[t._v(" "+t._s(t.detail.info.success?"成功":"驳回")+" ")])],1)]),t.detail.info.cancel?e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("撤销时间")]),e("div",{staticClass:"detail-content"},[t._v(" "+t._s(t._f("mom_format")(t.detail.info.canceled_at))+" ")])]):t._e()],1)],1),e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"采购项目"}},t._l(t.detail.items,(function(s,a){return e("div",{key:s.id,staticClass:"purchase-item"},[e("h4",[t._v("采购项目（"+t._s(a+1)+"）信息")]),e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("物料")]),e("div",{staticClass:"detail-content"},[t._v(t._s(s.material))])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("采购数量")]),e("div",{staticClass:"detail-content"},[t._v(t._s(s.total))])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("采购总金额")]),e("div",{staticClass:"detail-content"},[t._v(t._s(s.fee)+"元")])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("供应商")]),e("div",{staticClass:"detail-content"},[t._v(t._s(s.supplier))])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("供应商联系人")]),e("div",{staticClass:"detail-content"},[e("div",{staticClass:"detail-content"},[t._v(t._s(s.linkman))])])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("供应商联系电话")]),e("div",{staticClass:"detail-content"},[e("div",{staticClass:"detail-content"},[t._v(t._s(s.phone))])])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("供应商开户行")]),e("div",{staticClass:"detail-content"},[e("div",{staticClass:"detail-content"},[t._v(t._s(s.bank_name?s.bank_name:"-"))])])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("供应商银行账号")]),e("div",{staticClass:"detail-content"},[e("div",{staticClass:"detail-content"},[t._v(t._s(s.bank_id?s.bank_id:"-"))])])]),e("Col",{attrs:{lg:12,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("供应商开户行地址")]),e("div",{staticClass:"detail-content"},[e("div",{staticClass:"detail-content"},[t._v(t._s(s.bank_address?s.bank_address:"-"))])])])],1)],1)})),0)],1)],1),t.fetching?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},l=[],i=s("4b1c"),o=s("c03a"),n=s("be5e"),r=s("9484"),c=s("4d77"),d=s("3e79"),h=s("8c99"),u=s("7c0d"),p=s("7736"),_=s("2af9"),m=s("ed08"),C={name:"OaPurchaseDetail",data(){return{fetching:!0,detail:{info:{},steps:[],items:[]}}},mounted(){this.postInfo.default_community_id&&this.getDetail()},methods:{getDetail(){const t={id:this.$route.params.id,community_id:this.postInfo.default_community_id};m["i"].post("/purchase/detail",t).then(t=>{this.fetching=!1,this.detail=t.data}).catch(()=>this.fetching=!1)},doApprover({node_id:t,agree:e,reason:s}){const a={id:this.$route.params.id,community_id:this.postInfo.default_community_id,node_id:t,agree:e,reason:s};return new Promise(t=>{m["i"].post("/purchase/flow",a).then(()=>{t(),this.getDetail()}).catch(()=>t())})},bindRelation({node_id:t,relation_user_id:e}){const s={id:this.$route.params.id,community_id:this.postInfo.default_community_id,node_id:t,relation_user_id:e};return new Promise(t=>{m["i"].post("/purchase/assign",s).then(()=>{t(),this.getDetail()}).catch(()=>t())})},cancel(){u["a"].confirm({title:"请确认",content:"确认要撤销本次采购流程吗？此操作不可恢复",onOk:()=>{const t={id:this.$route.params.id,community_id:this.postInfo.default_community_id};m["i"].post("/purchase/cancel",t).then(t=>{this.detail.info.cancel=1,this.detail.info.canceled_at=t.data.canceled_at,h["a"].success("撤销成功")}).catch(()=>{})}})}},computed:{...Object(p["c"])({postInfo:"common/postInfo",userInfo:"common/userInfo"}),num(){return m["f"].num("MF",this.detail.info.created_at,this.detail.info.id)}},watch:{"postInfo.default_community_id"(){this.getDetail()}},components:{Card:d["a"],Spin:c["a"],Header:_["k"],Row:r["a"],Col:n["a"],Tag:o["a"],WaterMark:_["s"],WorkflowTimeline:_["u"],Icon:i["a"]}},f=C,v=(s("ac8e"),s("e607")),b=Object(v["a"])(f,a,l,!1,null,null,null);e["default"]=b.exports},"80b5":function(t,e,s){},ac8e:function(t,e,s){"use strict";s("80b5")},c03a:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return t.fade?e("transition",{attrs:{name:"fade"}},[e("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?e("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),e("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?e("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)]):e("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?e("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),e("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?e("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)},l=[],i=s("4b1c"),o=s("e4a4");const n="ivu-tag",r=["default","primary","success","warning","error","blue","green","red","yellow","pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],c=["pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"];var d={name:"Tag",components:{Icon:i["a"]},props:{closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:!0},color:{type:String,default:"default"},type:{validator(t){return Object(o["m"])(t,["border","dot"])}},name:{type:[String,Number]},fade:{type:Boolean,default:!0},size:{validator(t){return Object(o["m"])(t,["default","medium","large"])},default:"default"}},data(){return{isChecked:this.checked}},computed:{classes(){return[""+n,`${n}-size-${this.size}`,{[`${n}-${this.color}`]:!!this.color&&Object(o["m"])(this.color,r),[`${n}-${this.type}`]:!!this.type,[n+"-closable"]:this.closable,[n+"-checked"]:this.isChecked}]},wraperStyles(){return Object(o["m"])(this.color,r)?{}:{background:this.isChecked?this.defaultTypeColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"dot"!==this.type&&"border"!==this.type&&this.isChecked?this.borderColor:this.lineColor,color:this.lineColor}},textClasses(){return[n+"-text","border"===this.type&&Object(o["m"])(this.color,r)?`${n}-color-${this.color}`:"","dot"!==this.type&&"border"!==this.type&&"default"!==this.color&&this.isChecked&&c.indexOf(this.color)<0?n+"-color-white":""]},dotClasses(){return n+"-dot-inner"},iconClass(){return"dot"===this.type?"":"border"===this.type?Object(o["m"])(this.color,r)?`${n}-color-${this.color}`:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},showDot(){return!!this.type&&"dot"===this.type},lineColor(){return"dot"===this.type?"":"border"===this.type?void 0!==this.color?Object(o["m"])(this.color,r)?"":this.color:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},borderColor(){return void 0!==this.color?"default"===this.color?"":this.color:""},dotColor(){return void 0!==this.color?Object(o["m"])(this.color,r)?"":this.color:""},textColorStyle(){return Object(o["m"])(this.color,r)?{}:"dot"!==this.type&&"border"!==this.type?this.isChecked?{color:this.lineColor}:{}:{color:this.lineColor}},bgColorStyle(){return Object(o["m"])(this.color,r)?{}:{background:this.dotColor}},defaultTypeColor(){return"dot"!==this.type&&"border"!==this.type&&void 0!==this.color?Object(o["m"])(this.color,r)?"":this.color:""}},methods:{close(t){void 0===this.name?this.$emit("on-close",t):this.$emit("on-close",t,this.name)},check(){if(!this.checkable)return;const t=!this.isChecked;this.isChecked=t,void 0===this.name?this.$emit("on-change",t):this.$emit("on-change",t,this.name)}},watch:{checked(t){this.isChecked=t}}},h=d,u=s("e607"),p=Object(u["a"])(h,a,l,!1,null,null,null),_=p.exports;e["a"]=_}}]);