(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f961ca3"],{b743:function(t,e,s){"use strict";s("e3c4")},c03a:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return t.fade?e("transition",{attrs:{name:"fade"}},[e("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?e("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),e("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?e("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)]):e("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check.apply(null,arguments)}}},[t.showDot?e("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),e("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?e("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}}):t._e()],1)},a=[],o=s("4b1c"),l=s("e4a4");const n="ivu-tag",r=["default","primary","success","warning","error","blue","green","red","yellow","pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],c=["pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"];var d={name:"Tag",components:{Icon:o["a"]},props:{closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:!0},color:{type:String,default:"default"},type:{validator(t){return Object(l["m"])(t,["border","dot"])}},name:{type:[String,Number]},fade:{type:Boolean,default:!0},size:{validator(t){return Object(l["m"])(t,["default","medium","large"])},default:"default"}},data(){return{isChecked:this.checked}},computed:{classes(){return[""+n,`${n}-size-${this.size}`,{[`${n}-${this.color}`]:!!this.color&&Object(l["m"])(this.color,r),[`${n}-${this.type}`]:!!this.type,[n+"-closable"]:this.closable,[n+"-checked"]:this.isChecked}]},wraperStyles(){return Object(l["m"])(this.color,r)?{}:{background:this.isChecked?this.defaultTypeColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"dot"!==this.type&&"border"!==this.type&&this.isChecked?this.borderColor:this.lineColor,color:this.lineColor}},textClasses(){return[n+"-text","border"===this.type&&Object(l["m"])(this.color,r)?`${n}-color-${this.color}`:"","dot"!==this.type&&"border"!==this.type&&"default"!==this.color&&this.isChecked&&c.indexOf(this.color)<0?n+"-color-white":""]},dotClasses(){return n+"-dot-inner"},iconClass(){return"dot"===this.type?"":"border"===this.type?Object(l["m"])(this.color,r)?`${n}-color-${this.color}`:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},showDot(){return!!this.type&&"dot"===this.type},lineColor(){return"dot"===this.type?"":"border"===this.type?void 0!==this.color?Object(l["m"])(this.color,r)?"":this.color:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},borderColor(){return void 0!==this.color?"default"===this.color?"":this.color:""},dotColor(){return void 0!==this.color?Object(l["m"])(this.color,r)?"":this.color:""},textColorStyle(){return Object(l["m"])(this.color,r)?{}:"dot"!==this.type&&"border"!==this.type?this.isChecked?{color:this.lineColor}:{}:{color:this.lineColor}},bgColorStyle(){return Object(l["m"])(this.color,r)?{}:{background:this.dotColor}},defaultTypeColor(){return"dot"!==this.type&&"border"!==this.type&&void 0!==this.color?Object(l["m"])(this.color,r)?"":this.color:""}},methods:{close(t){void 0===this.name?this.$emit("on-close",t):this.$emit("on-close",t,this.name)},check(){if(!this.checkable)return;const t=!this.isChecked;this.isChecked=t,void 0===this.name?this.$emit("on-change",t):this.$emit("on-change",t,this.name)}},watch:{checked(t){this.isChecked=t}}},u=d,h=s("e607"),p=Object(h["a"])(u,i,a,!1,null,null,null),m=p.exports;e["a"]=m},e3c4:function(t,e,s){},fb9b:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("WaterMark",{staticClass:"owner-detail"},[e("Header",{attrs:{back:""}}),e("Alert",{attrs:{"show-icon":"",type:"warning"}},[t._v(" 请保护业主隐私，非法泄露业主隐私信息属于违法行为 "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("p",{attrs:{slot:"content"},slot:"content"},[t._v(" 《中华人民共和国刑法修正案（九）》：十七、将刑法第二百五十三条之一修改为：“违反国家有关规定，向他人出售或者提供公民个人信息，情节严重的，处三年以下有期徒刑或者拘役，并处或者单处罚金；情节特别严重的，处三年以上七年以下有期徒刑，并处罚金。 ")])])]),e("Card",{attrs:{"dis-hover":"",bordered:!1,title:"业主信息"}},[e("Row",{staticClass:"detail-row"},[e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("小区名称")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.community_name))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("业主姓名")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.real_name?t.detail.info.real_name:"-"))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("联系电话")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.phone))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("身份证号码")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.idcard?t.detail.info.idcard:"-"))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 性别 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.sex.color}},[t._v(t._s(t.sex.text))])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 身份信息是否完善 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.detail.info.intact?"success":"default"}},[t._v(" "+t._s(t.detail.info.intact?"已完善":"未完善")+" ")])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("昵称")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.nick_name))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("签名")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t.detail.info.signature))])]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 头像 ")]),e("div",{staticClass:"detail-content"},[!t.fetching&&t.detail.info.avatar_url?e("Images",{attrs:{imgs:[t.detail.info.avatar_url]}}):e("span",[t._v("暂无上传")])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v(" 是否关注公众号 ")]),e("div",{staticClass:"detail-content"},[e("Tag",{attrs:{color:t.detail.info.subscribed?"success":"warning"}},[t._v(" "+t._s(t.detail.info.subscribed?"已关注":"未关注")+" ")])],1)]),e("Col",{attrs:{lg:8,sm:12,xs:24}},[e("span",{staticClass:"detail-label"},[t._v("创建账号时间")]),e("div",{staticClass:"detail-content"},[t._v(t._s(t._f("mom_format")(t.detail.info.created_at)))])])],1)],1),e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"业主房产"}},[e("Table",{attrs:{data:t.detail.buildings,columns:t.buildings}})],1),e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"业主车辆"}},[e("Table",{attrs:{data:t.detail.cars,columns:t.cars}})],1),t.fetching?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},a=[],o=s("2af6"),l=s("4c91"),n=s("be5e"),r=s("9484"),c=s("4d77"),d=s("3e79"),u=s("8c99"),h=s("7c0d"),p=s("c03a"),m=(s("ed70"),s("7736")),b=s("2af9"),f=s("ed08"),g=s("0373"),_=s.n(g),C={name:"BasicOwerDetail",data(){return{ROLES:_.a,fetching:!0,detail:{info:{},buildings:[],cars:[]},buildings:[{title:"编号",minWidth:120,render:(t,e)=>t("span",f["f"].num("B",e.row.created_at,e.row.building_id))},{title:"详细",minWidth:120,render:(t,e)=>this.userInfo.access.includes(_.a.FCDA)?t("a",{on:{click:()=>this.$router.push("/basic/building/detail/"+e.row.building_id)}},f["b"].text(e.row)):t("span",f["b"].text(e.row))},{title:"建筑面积(㎡)",minWidth:120,key:"construction_area"},{title:"首次认证类型",minWidth:60,render:(t,e)=>{let s,i;return 1===e.row.authenticated_type?(s="volcano",i="实名信息自行关联"):2===e.row.authenticated_type?(s="orange",i="物业公司现场认证"):(s="red",i="家人APP认证关联"),t(p["a"],{props:{color:s}},i)}},{title:"状态",minWidth:80,render:(t,e)=>t(p["a"],{props:{color:e.row.status?"green":"purple"}},e.row.status?"绑定中":"已解绑")},{title:"操作",minWidth:80,fixed:"right",render:(t,e)=>this.userInfo.access.includes(_.a.FCDA)?t("a",{on:{click:()=>this.buildingOperate(e.row,e.index)}},e.row.status?"解除绑定":"恢复绑定"):t("span",{class:"lighter"},"没有操作权限")}],cars:[{title:"编号",minWidth:120,render:(t,e)=>t("span",f["f"].num("P",e.row.created_at,e.row.id))},{title:"车牌号码",minWidth:120,render:(t,e)=>this.userInfo.access.includes(_.a.CLGL)?t("a",{on:{click:()=>this.$router.push("/basic/car/detail/"+e.row.id)}},e.row.car_number):t("span",e.row.car_number)},{title:"车位",minWidth:120,render:(t,e)=>t("span",f["b"].text(e.row))},{title:"状态",minWidth:80,render:(t,e)=>t(p["a"],{props:{color:e.row.status?"green":"purple"}},e.row.status?"绑定中":"已解绑")},{title:"操作",minWidth:80,fixed:"right",render:(t,e)=>this.userInfo.access.includes(_.a.CLGL)?t("a",{on:{click:()=>this.carOperate(e.row,e.index)}},e.row.status?"解除绑定":"恢复绑定"):t("span",{class:"lighter"},"没有操作权限")}]}},mounted(){this.postInfo.default_community_id&&this.getDetail()},methods:{getDetail(){const t={id:this.$route.params.id,community_id:this.postInfo.default_community_id};f["i"].post("/owner/detail",t).then(t=>{this.fetching=!1,this.detail=t.data}).catch(()=>this.fetching=!1)},buildingOperate(t,e){h["a"].confirm({title:"请确认",content:`是否要「${t.status?"解绑":"恢复绑定"}」${f["b"].text(t)}`,onOk:()=>{const s={id:t.id,community_id:this.postInfo.default_community_id,building_id:t.building_id},i=t.status?0:1,a=t.status?"/building/unbinding":"/building/binding";f["i"].post(a,s).then(()=>{const t=[].concat(this.detail.buildings);t[e]={...t[e],status:i},this.detail.buildings=t,u["a"].success("操作成功")}).catch(()=>{})}})},carOperate(t,e){h["a"].confirm({title:"请确认",content:`是否要「${t.status?"解绑车辆":"恢复绑定"}」${t.car_number}`,onOk:()=>{const s={id:t.id,community_id:this.postInfo.default_community_id,building_id:t.building_id},i=t.status?0:1,a=t.status?"/car/unbinding":"/car/binding";f["i"].post(a,s).then(()=>{const t=[].concat(this.detail.cars);t[e]={...t[e],status:i},this.detail.cars=t,u["a"].success("操作成功")}).catch(()=>{})}})}},computed:{...Object(m["c"])({postInfo:"common/postInfo",userInfo:"common/userInfo"}),community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name},sex(){let t,e;return 1===this.detail.info.gender?(t="blue",e="男"):2===this.detail.info.gender?(t="magenta",e="女"):(t="default",e="未知"),{color:t,text:e}}},watch:{"postInfo.default_community_id"(){this.getDetail()}},components:{Card:d["a"],Spin:c["a"],Header:b["k"],Row:r["a"],Col:n["a"],Tag:p["a"],Images:b["m"],Alert:l["a"],Table:o["a"],WaterMark:b["s"]}},y=C,v=(s("b743"),s("e607")),w=Object(v["a"])(y,i,a,!1,null,null,null);e["default"]=w.exports}}]);