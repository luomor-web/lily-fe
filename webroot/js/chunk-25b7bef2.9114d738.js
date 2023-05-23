(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25b7bef2"],{"18a5":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{class:t.classes,on:{mouseleave:t.handleMouseleave}},[e("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.currentValue}}),t._l(t.count,(function(s){return e("div",{key:s,class:t.starCls(s),on:{mousemove:function(e){return t.handleMousemove(s,e)},click:function(e){return t.handleClick(s)}}},[t.showCharacter?[e("span",{class:[t.prefixCls+"-star-first"],attrs:{type:"half"}},[""!==t.character?[t._v(t._s(t.character))]:e("i",{class:t.iconClasses,attrs:{type:"half"}})],2),e("span",{class:[t.prefixCls+"-star-second"]},[""!==t.character?[t._v(t._s(t.character))]:e("i",{class:t.iconClasses})],2)]:[e("span",{class:[t.prefixCls+"-star-content"],attrs:{type:"half"}})]],2)})),t.showText?e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue>0,expression:"currentValue > 0"}],class:[t.prefixCls+"-text"]},[t._t("default",(function(){return[e("span",[t._v(t._s(t.currentValue))]),t._v(" "),t.currentValue<=1?e("span",[t._v(t._s(t.t("i.rate.star")))]):e("span",[t._v(t._s(t.t("i.rate.stars")))])]}))],2):t._e()],2)},i=[],l=s("e35f"),o=s("ce17"),r=s("bc46"),n=s("4919");const c="ivu-rate";var d={name:"Rate",mixins:[l["a"],o["a"],r["a"]],components:{Icon:n["a"]},props:{count:{type:Number,default:5},value:{type:Number,default:0},allowHalf:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showText:{type:Boolean,default:!1},name:{type:String},clearable:{type:Boolean,default:!1},character:{type:String,default:""},icon:{type:String,default:""},customIcon:{type:String,default:""}},data(){const t=this.value||0;return{prefixCls:c,hoverIndex:-1,isHover:!1,isHalf:this.allowHalf&&t.toString().indexOf(".")>=0,currentValue:t}},computed:{classes(){return[""+c,{[c+"-disabled"]:this.itemDisabled}]},iconClasses(){return["ivu-icon",{["ivu-icon-"+this.icon]:""!==this.icon,[""+this.customIcon]:""!==this.customIcon}]},showCharacter(){return""!==this.character||""!==this.icon||""!==this.customIcon}},watch:{value(t){this.currentValue=t||0},currentValue(t){this.setHalf(t)}},methods:{starCls(t){const e=this.hoverIndex,s=this.isHover?e:this.currentValue;let a=!1,i=!1;return s>=t&&(a=!0),i=this.isHover?s===t:Math.ceil(this.currentValue)===t,[{[c+"-star"]:!this.showCharacter,[c+"-star-chart"]:this.showCharacter,[c+"-star-full"]:!i&&a||i&&!this.isHalf,[c+"-star-half"]:i&&this.isHalf,[c+"-star-zero"]:!a}]},handleMousemove(t,e){if(!this.itemDisabled){if(this.isHover=!0,this.allowHalf){const t=e.target.getAttribute("type")||!1;this.isHalf="half"===t}else this.isHalf=!1;this.hoverIndex=t}},handleMouseleave(){this.itemDisabled||(this.isHover=!1,this.setHalf(this.currentValue),this.hoverIndex=-1)},setHalf(t){this.isHalf=this.allowHalf&&t.toString().indexOf(".")>=0},handleClick(t){this.itemDisabled||(this.isHalf&&(t-=.5),this.clearable&&Math.abs(t-this.currentValue)<.01&&(t=0),this.currentValue=t,this.$emit("input",t),this.$emit("on-change",t),this.dispatch("FormItem","on-form-change",t))}}},u=d,h=s("e607"),p=Object(h["a"])(u,a,i,!1,null,null,null),_=p.exports;e["a"]=_},"3a3f":function(t,e,s){"use strict";s("c850")},ad8f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("WaterMark",[e("Header",{attrs:{back:""}}),e("Card",{attrs:{"dis-hover":"",bordered:!1,title:"报修信息"}},[e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("工单编号")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.num))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("小区名称")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.community_name))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 维修地点 ")]),e("div",{staticClass:"detail-content"},[0===t.detail.info.building_id?e("span",[t._v("公共设施/区域")]):t.userInfo.access.includes(t.ROLES.FCDA)?e("router-link",{attrs:{to:"/basic/building/detail/"+t.detail.info.building_id}},[t._v(" "+t._s(t.building)+" ")]):e("span",[t._v(t._s(t.building))])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("问题描述")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.description))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 维修类型 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.repairType.color}},[t._v(t._s(t.repairType.text))])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 当前进度 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.progress.color}},[t._v(t._s(t.progress.text))])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 现场图片 ")]),e("div",{staticClass:"detail-content"},[!t.fetching&&t.detail.info.repair_imgs.length?e("Images",{attrs:{imgs:t.detail.info.repair_imgs}}):e("span",[t._v("未提供")])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("报修时间")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.created_at)))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("业主催促")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.urge_total)+"次")])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 工单来源 ")]),e("div",{staticClass:"detail-content"},[t._v(t._s("owner"===t.detail.info.refer?"业主报修":"公司分配"))])]),"owner"===t.detail.info.refer?e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 业主姓名 ")]),e("div",{staticClass:"detail-content"},[t.userInfo.access.includes(t.ROLES.YZDA)?e("router-link",{attrs:{to:"/basic/owner/detail/"+t.detail.referInfo.id}},[t._v(" "+t._s(t.detail.referInfo.real_name)+" ")]):e("span",[t._v(t._s(t.detail.referInfo.real_name))])],1)]):t._e(),"colleague"===t.detail.info.refer?e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 发起人信息 ")]),e("div",{staticClass:"detail-content"},[e("router-link",{attrs:{to:"/oa/hr/colleague/detail/"+t.detail.referInfo.id}},[t._v(" "+t._s(t.detail.referInfo.real_name)+" ")])],1)]):t._e(),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 接收指派推送 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.detail.info.dispose_subscribed?"success":"default"}},[t._v(" "+t._s(t.detail.info.dispose_subscribed?"是":"否")+" ")])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 接收接单推送 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.detail.info.confrim_subscribed?"success":"default"}},[t._v(" "+t._s(t.detail.info.confrim_subscribed?"是":"否")+" ")])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 接收完工推送 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.detail.info.finish_subscribed?"success":"default"}},[t._v(" "+t._s(t.detail.info.finish_subscribed?"是":"否")+" ")])],1)])],1)],1),t.detail.info.merge_id?e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单合并信息"}},[e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 合并工单 ")]),e("div",{staticClass:"detail-content"},[e("router-link",{attrs:{to:"/basic/repair/detail/"+t.detail.info.merge_id}},[t._v(" 点击查看 ")])],1)])],1)],1):t._e(),t.detail.info.step>=2?e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"派单信息"}},[e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("派单时间")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.alloted_at)))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 派单人 ")]),e("div",{staticClass:"detail-content"},[e("router-link",{attrs:{to:"/oa/hr/colleague/detail/"+t.detail.allotInfo.id}},[t._v(" "+t._s(t.detail.allotInfo.real_name)+" ")])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 指派人 ")]),e("div",{staticClass:"detail-content"},[e("router-link",{attrs:{to:"/oa/hr/colleague/detail/"+t.detail.disposedInfo.id}},[t._v(" "+t._s(t.detail.disposedInfo.real_name)+" ")])],1)])],1)],1):t._e(),t.detail.info.step>=3?e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单确认信息"}},[e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("确认时间")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.disposed_at)))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 确认回复 ")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.dispose_reply?t.detail.info.dispose_reply:"-"))])])],1)],1):t._e(),4===t.detail.info.step?e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单维修信息"}},[e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("完工时间")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.finished_at)))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 维修内容 ")]),e("div",{staticClass:"detail-content"},[t._v(" "+t._s(t.detail.info.dispose_content?t.detail.info.dispose_content:"-")+" ")])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 现场图片 ")]),e("div",{staticClass:"detail-content"},[!t.fetching&&t.detail.info.dispose_imgs.length?e("Images",{attrs:{imgs:t.detail.info.dispose_imgs}}):e("span",[t._v("未提供")])],1)])],1)],1):t._e(),4===t.detail.info.step?e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"评价信息"}},[e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("评价时间")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.rated_at)))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 评价内容 ")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.rate_content?t.detail.info.rate_content:"-"))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 评价分数 ")]),e("div",{staticClass:"detail-content"},[e("Rate",{attrs:{value:t.detail.info.rate,disabled:""}})],1)])],1)],1):t._e(),1!==t.detail.info.step||t.detail.info.merge_id?t._e():e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单指派"}},[e("Colleague",{model:{value:t.dispose_user_id,callback:function(e){t.dispose_user_id=e},expression:"dispose_user_id"}}),e("div",{staticClass:"cw-form-actions"},[e("Button",{attrs:{type:"primary",loading:t.submiting},on:{click:t.allot}},[t._v("确定指派")])],1)],1),1!==t.detail.info.step||t.detail.info.merge_id?t._e():e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"工单合并"}},[e("RepairMerge",{attrs:{list:t.mergeOption},model:{value:t.merge_id,callback:function(e){t.merge_id=e},expression:"merge_id"}}),e("div",{staticClass:"cw-form-actions"},[e("Button",{attrs:{type:"primary",loading:t.merging},on:{click:t.merge}},[t._v("确认合并")])],1)],1),t.fetching?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},i=[],l=s("18a5"),o=s("88bd"),r=s("c03a"),n=s("be5e"),c=s("9484"),d=s("4d77"),u=s("3e79"),h=s("8c99"),p=s("7736"),_=s("2af9"),f=s("ed08"),m=s("0373"),v=s.n(m),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"repair-merge"},[e("ul",t._l(t.list,(function(s){return e("li",{key:s.id,on:{click:function(e){return t.select(s.id)}}},[e("Checkbox",{attrs:{value:t.result===s.id,disabled:""}}),e("div",{staticClass:"info"},[e("p",[t._v("工单编号："+t._s(t.num(s)))]),e("p",[t._v("问题描述："+t._s(s.description))]),e("p",[t._v(" 维修类型： "),e("Tag",{attrs:{color:t.repairType(s).color}},[t._v(t._s(t.repairType(s).text))])],1),e("p",[t._v(" 当前进度： "),e("Tag",{attrs:{color:t.progress(s).color}},[t._v(t._s(t.progress(s).text))])],1),e("p",[t._v("上报时间："+t._s(t._f("mom_format")(s.created_at)))])])],1)})),0),0===t.list.length?e("p",{staticClass:"empty"},[t._v("没有可以合并的工单")]):t._e()])},C=[],b=s("78d8"),y={name:"RepairMerge",props:{value:Number,list:Array},data(){return{result:this.value}},methods:{select(t){this.result=t},repairType(t){let e="",s="";switch(t.repair_type){case 1:e="水暖",s="magenta";break;case 2:e="电路",s="red";break;case 3:e="门窗",s="volcano";break;case 4:e="公共设施",s="gold";break}return{text:e,color:s}},progress(t){let e="",s="";switch(t.step){case 1:e="待分配工单",s="geekblue";break;case 2:e="待工程确认",s="purple";break;case 3:e="待维修",s="orange";break;case 4:e="已完成",s="green";break}return{text:e,color:s}},num(t){return f["f"].num("R",t.created_at,t.id)}},watch:{result(t){this.$emit("input",t),this.$emit("on-change",t)}},components:{Tag:r["a"],Checkbox:b["a"]}},k=y,x=(s("3a3f"),s("e607")),w=Object(x["a"])(k,g,C,!1,null,null,null),I=w.exports,O={name:"BasicRepairDetail",data(){return{ROLES:v.a,fetching:!0,detail:{info:{},referInfo:{},allotInfo:null,disposedInfo:null},dispose_user_id:null,submiting:!1,mergeOption:[],merge_id:null,merging:!1}},mounted(){this.postInfo.default_community_id&&this.getDetail()},methods:{getDetail(){const t={id:this.$route.params.id,community_id:this.postInfo.default_community_id};this.fetching=!0,f["i"].post("/repair/detail",t).then(e=>{this.fetching=!1,this.detail=e.data,1!==e.data.info.step||e.data.info.merge_id||(this.fetching=!0,f["i"].post("/repair/merge_option",t).then(t=>{this.mergeOption=t.data.list,this.fetching=!1}))}).catch(()=>this.fetching=!1)},allot(){if(!this.dispose_user_id)return h["a"].error("请选择工单指派人员");const t={id:this.$route.params.id,community_id:this.postInfo.default_community_id,dispose_user_id:this.dispose_user_id};f["i"].post("/repair/allot",t).then(t=>{this.submiting=!1,this.detail.info.step=2,this.detail.info.alloted_at=t.data.alloted_at,this.detail.allotInfo=t.data.allotInfo,this.detail.disposedInfo=t.data.disposedInfo,h["a"].success("指派工单成功")})},merge(){if(!this.merge_id)return h["a"].error("请选择需要合并的工单");const t={id:this.$route.params.id,community_id:this.postInfo.default_community_id,merge_id:this.merge_id};this.merging=!0,f["i"].post("/repair/merge",t).then(()=>{this.merging=!1,this.detail.info.merge_id=this.merge_id,h["a"].success("工单合并成功")})}},computed:{...Object(p["c"])({postInfo:"common/postInfo",userInfo:"common/userInfo"}),building(){return f["b"].text(this.detail.info)},num(){return f["f"].num("R",this.detail.info.created_at,this.detail.info.id)},repairType(){let t="",e="";switch(this.detail.info.repair_type){case 1:t="水暖",e="magenta";break;case 2:t="电路",e="red";break;case 3:t="门窗",e="volcano";break;case 4:t="公共设施",e="gold";break}return{text:t,color:e}},progress(){let t="",e="";if(this.detail.info.merge_id)t="合并工单",e="cyan";else switch(this.detail.info.step){case 1:t="待分配工单",e="geekblue";break;case 2:t="待工程确认",e="purple";break;case 3:t="待维修",e="orange";break;case 4:t="已完成",e="green";break}return{text:t,color:e}},community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name}},watch:{"postInfo.default_community_id"(){this.getDetail()},$route(t,e){t.params.id!==e.params.id&&this.getDetail()},"$route.params.id"(){this.getDetail()}},components:{Card:u["a"],Spin:d["a"],Header:_["k"],Row:c["a"],Col:n["a"],Tag:r["a"],Images:_["m"],Button:o["a"],Colleague:_["c"],Rate:l["a"],WaterMark:_["s"],RepairMerge:I}},S=O,$=Object(x["a"])(S,a,i,!1,null,null,null);e["default"]=$.exports},c03a:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return t.fade?e("transition",{attrs:{name:"fade"}},[e("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?e("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),e("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?e("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)]):e("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?e("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),e("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?e("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)},i=[],l=s("4b1c"),o=s("e4a4");const r="ivu-tag",n=["default","primary","success","warning","error","blue","green","red","yellow","pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],c=["pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"];var d={name:"Tag",components:{Icon:l["a"]},props:{closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:!0},color:{type:String,default:"default"},type:{validator(t){return Object(o["m"])(t,["border","dot"])}},name:{type:[String,Number]},fade:{type:Boolean,default:!0},size:{validator(t){return Object(o["m"])(t,["default","medium","large"])},default:"default"}},data(){return{isChecked:this.checked}},computed:{classes(){return[""+r,`${r}-size-${this.size}`,{[`${r}-${this.color}`]:!!this.color&&Object(o["m"])(this.color,n),[`${r}-${this.type}`]:!!this.type,[r+"-closable"]:this.closable,[r+"-checked"]:this.isChecked}]},wraperStyles(){return Object(o["m"])(this.color,n)?{}:{background:this.isChecked?this.defaultTypeColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"dot"!==this.type&&"border"!==this.type&&this.isChecked?this.borderColor:this.lineColor,color:this.lineColor}},textClasses(){return[r+"-text","border"===this.type&&Object(o["m"])(this.color,n)?`${r}-color-${this.color}`:"","dot"!==this.type&&"border"!==this.type&&"default"!==this.color&&this.isChecked&&c.indexOf(this.color)<0?r+"-color-white":""]},dotClasses(){return r+"-dot-inner"},iconClass(){return"dot"===this.type?"":"border"===this.type?Object(o["m"])(this.color,n)?`${r}-color-${this.color}`:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},showDot(){return!!this.type&&"dot"===this.type},lineColor(){return"dot"===this.type?"":"border"===this.type?void 0!==this.color?Object(o["m"])(this.color,n)?"":this.color:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},borderColor(){return void 0!==this.color?"default"===this.color?"":this.color:""},dotColor(){return void 0!==this.color?Object(o["m"])(this.color,n)?"":this.color:""},textColorStyle(){return Object(o["m"])(this.color,n)?{}:"dot"!==this.type&&"border"!==this.type?this.isChecked?{color:this.lineColor}:{}:{color:this.lineColor}},bgColorStyle(){return Object(o["m"])(this.color,n)?{}:{background:this.dotColor}},defaultTypeColor(){return"dot"!==this.type&&"border"!==this.type&&void 0!==this.color?Object(o["m"])(this.color,n)?"":this.color:""}},methods:{close(t){void 0===this.name?this.$emit("on-close",t):this.$emit("on-close",t,this.name)},check(){if(!this.checkable)return;const t=!this.isChecked;this.isChecked=t,void 0===this.name?this.$emit("on-change",t):this.$emit("on-change",t,this.name)}},watch:{checked(t){this.isChecked=t}}},u=d,h=s("e607"),p=Object(h["a"])(u,a,i,!1,null,null,null),_=p.exports;e["a"]=_},c850:function(t,e,s){}}]);