(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-437dc598"],{"213b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("WaterMark",[t("Header"),t("FilterQuery",{staticClass:"mt-16",attrs:{filterOptions:e.filterOptions,filters:e.filters}}),t("Card",{attrs:{"dis-hover":"",bordered:!1}},[t("Table",{attrs:{stripe:"",columns:e.columns,data:e.list}}),t("ListFooter",[t("Page",{attrs:{"show-total":"","show-elevator":"","show-sizer":"","page-size":e.page_size,total:e.total,current:e.page_num},on:{"on-change":e.onPageChange,"on-page-size-change":e.onPageSizeChange}})],1)],1),e.fetching?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)},i=[],r=s("2af6"),l=s("4d77"),n=s("70a0"),o=s("3e79"),c=s("c03a"),u=(s("ed70"),s("7736")),h=s("2af9"),p=s("c6e7a"),g=s("ed08"),d=s("2f42"),f=s.n(d),m={name:"BasicComplainList",data(){return{fetching:!0,filterOptions:[{label:"当前进度",prop:"step",list:[{label:"待分配工单",value:1},{label:"待确认工单",value:2},{label:"待处理",value:3},{label:"已完成",value:4}]},{label:"反馈类型",prop:"type",list:[{label:"投诉",value:1},{label:"建议",value:2}]},{label:"反馈分类",prop:"category",list:[{label:"卫生",value:1},{label:"噪音",value:2},{label:"服务态度",value:3},{label:"违建",value:4},{label:"占用消防通道",value:5},{label:"小区设施",value:6},{label:"其他",value:7}]},{label:"工单来源",prop:"refer",list:[{label:"业主上报",value:"owner"},{label:"公司指派",value:"colleague"}]}],filters:{step:void 0,type:void 0,category:void 0,refer:void 0},columns:[{title:"编号",minWidth:120,render:(e,t)=>e("span",g["f"].num("C",t.row.created_at,t.row.id))},{title:"问题描述",minWidth:180,key:"description"},{title:"反馈类型",minWidth:100,render:(e,t)=>{let s="",a="";switch(t.row.type){case 1:s="投诉",a="magenta";break;case 2:s="建议",a="red";break}return e(c["a"],{props:{color:a}},s)}},{title:"反馈分类",minWidth:120,render:(e,t)=>{let s="";switch(t.row.category){case 1:s="投诉";break;case 2:s="噪音";break;case 3:s="服务态度";break;case 4:s="违建";break;case 5:s="占用消防通道";break;case 6:s="小区设施";break;case 7:s="其他";break}return e("span",s)}},{title:"当前进度",minWidth:120,render:(e,t)=>{let s="",a="";if(t.row.merge_id)s="合并工单",a="cyan";else switch(t.row.step){case 1:s="待分配工单",a="geekblue";break;case 2:s="待确认工单",a="purple";break;case 3:s="待处理",a="orange";break;case 4:s="已完成",a="green";break}return e(c["a"],{props:{color:a}},s)}},{title:"申请时间",key:"created_at",minWidth:180,render:(e,t)=>e("span",f()(t.row.created_at).format("YYYY-MM-DD HH:mm:ss"))},{title:"操作",key:"id",fixed:"right",minWidth:80,render:(e,t)=>e("a",{on:{click:()=>this.goDetail(t.row.id)}},"查看")}]}},mixins:[p["a"]],mounted(){this.postInfo.default_community_id&&this.getListData()},methods:{getListData(){const{page_num:e,page_size:t,postInfo:s,filters:a}=this;this.fetching=!0;const i={page_num:e,page_size:t,community_id:s.default_community_id,...a};g["i"].post("/complain/list",i).then(e=>{this.fetching=!1,this.page_num=e.data.page_num,this.page_size=e.data.page_size,this.list=e.data.list,this.total=e.data.total}).catch(()=>this.fetching=!1)},goDetail(e){this.$router.push("/basic/complain/detail/"+e)}},computed:{...Object(u["c"])({postInfo:"common/postInfo"})},watch:{"postInfo.default_community_id"(){this.getListData()}},components:{Header:h["k"],ListFooter:h["n"],Card:o["a"],Page:n["a"],Spin:l["a"],Table:r["a"],FilterQuery:h["h"],WaterMark:h["s"]}},v=m,b=s("e607"),P=Object(b["a"])(v,a,i,!1,null,null,null);t["default"]=P.exports},"70a0":function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return e.simple?t("ul",{class:e.simpleWrapClasses,style:e.styles},[t("li",{class:e.prevClasses,attrs:{title:e.t("i.page.prev")},on:{click:e.prev}},[e._m(0)]),t("div",{class:e.simplePagerClasses,attrs:{title:e.currentPage+"/"+e.allPages}},[t("input",{attrs:{type:"text",autocomplete:"off",spellcheck:"false",disabled:e.disabled},domProps:{value:e.currentPage},on:{keydown:e.keyDown,keyup:e.keyUp,change:e.keyUp}}),t("span",[e._v("/")]),e._v(" "+e._s(e.allPages)+" ")]),t("li",{class:e.nextClasses,attrs:{title:e.t("i.page.next")},on:{click:e.next}},[e._m(1)])]):t("ul",{class:e.wrapClasses,style:e.styles},[e.showTotal?t("span",{class:[e.prefixCls+"-total"]},[e._t("default",(function(){return[e._v(e._s(e.t("i.page.total"))+" "+e._s(e.total)+" "),e.total<=1?[e._v(e._s(e.t("i.page.item")))]:[e._v(e._s(e.t("i.page.items")))]]}))],2):e._e(),t("li",{class:e.prevClasses,attrs:{title:e.t("i.page.prev")},on:{click:e.prev}},[t("a",[""!==e.prevText?[e._v(e._s(e.prevText))]:t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"})],2)]),t("li",{class:e.firstPageClasses,attrs:{title:"1"},on:{click:function(t){return e.changePage(1)}}},[t("a",[e._v("1")])]),e.currentPage>5?t("li",{class:[e.prefixCls+"-item-jump-prev"],attrs:{title:e.t("i.page.prev5")},on:{click:e.fastPrev}},[e._m(2)]):e._e(),5===e.currentPage?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-3},on:{click:function(t){return e.changePage(e.currentPage-3)}}},[t("a",[e._v(e._s(e.currentPage-3))])]):e._e(),e.currentPage-2>1?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-2},on:{click:function(t){return e.changePage(e.currentPage-2)}}},[t("a",[e._v(e._s(e.currentPage-2))])]):e._e(),e.currentPage-1>1?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-1},on:{click:function(t){return e.changePage(e.currentPage-1)}}},[t("a",[e._v(e._s(e.currentPage-1))])]):e._e(),1!=e.currentPage&&e.currentPage!=e.allPages?t("li",{class:[e.prefixCls+"-item",e.prefixCls+"-item-active"],attrs:{title:e.currentPage}},[t("a",[e._v(e._s(e.currentPage))])]):e._e(),e.currentPage+1<e.allPages?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+1},on:{click:function(t){return e.changePage(e.currentPage+1)}}},[t("a",[e._v(e._s(e.currentPage+1))])]):e._e(),e.currentPage+2<e.allPages?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+2},on:{click:function(t){return e.changePage(e.currentPage+2)}}},[t("a",[e._v(e._s(e.currentPage+2))])]):e._e(),e.allPages-e.currentPage===4?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+3},on:{click:function(t){return e.changePage(e.currentPage+3)}}},[t("a",[e._v(e._s(e.currentPage+3))])]):e._e(),e.allPages-e.currentPage>=5?t("li",{class:[e.prefixCls+"-item-jump-next"],attrs:{title:e.t("i.page.next5")},on:{click:e.fastNext}},[e._m(3)]):e._e(),e.allPages>1?t("li",{class:e.lastPageClasses,attrs:{title:e.allPages},on:{click:function(t){return e.changePage(e.allPages)}}},[t("a",[e._v(e._s(e.allPages))])]):e._e(),t("li",{class:e.nextClasses,attrs:{title:e.t("i.page.next")},on:{click:e.next}},[t("a",[""!==e.nextText?[e._v(e._s(e.nextText))]:t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"})],2)]),t("Options",{attrs:{"show-sizer":e.showSizer,"page-size":e.currentPageSize,"page-size-opts":e.pageSizeOpts,placement:e.placement,transfer:e.transfer,"show-elevator":e.showElevator,_current:e.currentPage,current:e.currentPage,disabled:e.disabled,"all-pages":e.allPages,"is-small":e.isSmall,eventsEnabled:e.eventsEnabled},on:{"on-size":e.onSize,"on-page":e.onPage}})],1)},i=[function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"}),t("i",{staticClass:"ivu-icon ivu-icon-ios-more"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"}),t("i",{staticClass:"ivu-icon ivu-icon-ios-more"})])}],r=s("e4a4"),l=function(){var e=this,t=e._self._c;return e.showSizer||e.showElevator?t("div",{class:e.optsClasses},[e.showSizer?t("div",{class:e.sizerClasses},[t("i-select",{attrs:{size:e.size,placement:e.placement,transfer:e.transfer,disabled:e.disabled,eventsEnabled:e.eventsEnabled},on:{"on-change":e.changeSize},model:{value:e.currentPageSize,callback:function(t){e.currentPageSize=t},expression:"currentPageSize"}},e._l(e.pageSizeOpts,(function(s){return t("i-option",{key:s,staticStyle:{"text-align":"center"},attrs:{value:s}},[e._v(e._s(s)+" "+e._s(e.t("i.page.page")))])})),1)],1):e._e(),e.showElevator?t("div",{class:e.ElevatorClasses},[e._v(" "+e._s(e.t("i.page.goto"))+" "),t("input",{attrs:{type:"text",autocomplete:"off",spellcheck:"false",disabled:e.disabled},domProps:{value:e._current},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changePage.apply(null,arguments)}}}),e._v(" "+e._s(e.t("i.page.p"))+" ")]):e._e()]):e._e()},n=[],o=s("c01e"),c=s("4ff7"),u=s("e35f");const h="ivu-page";function p(e){return/^[1-9][0-9]*$/.test(e+"")}var g={name:"PageOption",mixins:[u["a"]],components:{iSelect:o["a"],iOption:c["a"]},props:{pageSizeOpts:Array,showSizer:Boolean,showElevator:Boolean,current:Number,_current:Number,pageSize:Number,allPages:Number,isSmall:Boolean,placement:String,transfer:Boolean,disabled:Boolean,eventsEnabled:Boolean},data(){return{currentPageSize:this.pageSize}},watch:{pageSize(e){this.currentPageSize=e}},computed:{size(){return this.isSmall?"small":"default"},optsClasses(){return[h+"-options"]},sizerClasses(){return[h+"-options-sizer"]},ElevatorClasses(){return[h+"-options-elevator"]}},methods:{changeSize(){this.$emit("on-size",this.currentPageSize)},changePage(e){let t=e.target.value.trim(),s=0;if(p(t)){if(t=Number(t),t!=this.current){const e=this.allPages;s=t>e?e:t}}else s=1;s&&(this.$emit("on-page",s),e.target.value=s)}}},d=g,f=s("e607"),m=Object(f["a"])(d,l,n,!1,null,null,null),v=m.exports;const b="ivu-page";var P={name:"Page",mixins:[u["a"]],components:{Options:v},props:{current:{type:Number,default:1},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageSizeOpts:{type:Array,default(){return[10,20,30,40]}},placement:{validator(e){return Object(r["m"])(e,["top","bottom"])},default:"bottom"},transfer:{type:Boolean,default(){return!(!this.$IVIEW||""===this.$IVIEW.transfer)&&this.$IVIEW.transfer}},size:{validator(e){return Object(r["m"])(e,["small","default"])}},simple:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showElevator:{type:Boolean,default:!1},showSizer:{type:Boolean,default:!1},className:{type:String},styles:{type:Object},prevText:{type:String,default:""},nextText:{type:String,default:""},disabled:{type:Boolean,default:!1},eventsEnabled:{type:Boolean,default:!1}},data(){return{prefixCls:b,currentPage:this.current,currentPageSize:this.pageSize}},watch:{total(e){let t=Math.ceil(e/this.currentPageSize);t<this.currentPage&&(this.currentPage=0===t?1:t)},current(e){this.currentPage=e},pageSize(e){this.currentPageSize=e}},computed:{isSmall(){return"small"===this.size},allPages(){const e=Math.ceil(this.total/this.currentPageSize);return 0===e?1:e},simpleWrapClasses(){return[""+b,b+"-simple",{[""+this.className]:!!this.className}]},simplePagerClasses(){return b+"-simple-pager"},wrapClasses(){return[""+b,{[""+this.className]:!!this.className,[b+"-with-disabled"]:this.disabled,mini:"small"===this.size}]},prevClasses(){return[b+"-prev",{[b+"-disabled"]:1===this.currentPage||this.disabled,[b+"-custom-text"]:""!==this.prevText}]},nextClasses(){return[b+"-next",{[b+"-disabled"]:this.currentPage===this.allPages||this.disabled,[b+"-custom-text"]:""!==this.nextText}]},firstPageClasses(){return[b+"-item",{[b+"-item-active"]:1===this.currentPage}]},lastPageClasses(){return[b+"-item",{[b+"-item-active"]:this.currentPage===this.allPages}]}},methods:{changePage(e){this.disabled||this.currentPage!=e&&(this.currentPage=e,this.$emit("update:current",e),this.$emit("on-change",e))},prev(){if(this.disabled)return;const e=this.currentPage;if(e<=1)return!1;this.changePage(e-1),this.$emit("on-prev",e-1)},next(){if(this.disabled)return;const e=this.currentPage;if(e>=this.allPages)return!1;this.changePage(e+1),this.$emit("on-next",e+1)},fastPrev(){if(this.disabled)return;const e=this.currentPage-5;e>0?this.changePage(e):this.changePage(1)},fastNext(){if(this.disabled)return;const e=this.currentPage+5;e>this.allPages?this.changePage(this.allPages):this.changePage(e)},onSize(e){this.disabled||(this.currentPageSize=e,this.$emit("on-page-size-change",e),this.changePage(1))},onPage(e){this.disabled||this.changePage(e)},keyDown(e){const t=e.keyCode,s=t>=48&&t<=57||t>=96&&t<=105||8===t||37===t||39===t;s||e.preventDefault()},keyUp(e){const t=e.keyCode,s=parseInt(e.target.value);if(38===t)this.prev();else if(40===t)this.next();else if(13===t){let t=1;t=s>this.allPages?this.allPages:s<=0||!s?1:s,e.target.value=t,this.changePage(t)}}}},y=P,_=Object(f["a"])(y,a,i,!1,null,null,null),C=_.exports;t["a"]=C},c03a:function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return e.fade?t("transition",{attrs:{name:"fade"}},[t("div",{class:e.classes,style:e.wraperStyles,on:{click:function(t){return t.stopPropagation(),e.check.apply(null,arguments)}}},[e.showDot?t("span",{class:e.dotClasses,style:e.bgColorStyle}):e._e(),t("span",{class:e.textClasses,style:e.textColorStyle},[e._t("default")],2),e.closable?t("Icon",{class:e.iconClass,attrs:{color:e.lineColor,type:"ios-close"},nativeOn:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}}):e._e()],1)]):t("div",{class:e.classes,style:e.wraperStyles,on:{click:function(t){return t.stopPropagation(),e.check.apply(null,arguments)}}},[e.showDot?t("span",{class:e.dotClasses,style:e.bgColorStyle}):e._e(),t("span",{class:e.textClasses,style:e.textColorStyle},[e._t("default")],2),e.closable?t("Icon",{class:e.iconClass,attrs:{color:e.lineColor,type:"ios-close"},nativeOn:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}}):e._e()],1)},i=[],r=s("4b1c"),l=s("e4a4");const n="ivu-tag",o=["default","primary","success","warning","error","blue","green","red","yellow","pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],c=["pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"];var u={name:"Tag",components:{Icon:r["a"]},props:{closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:!0},color:{type:String,default:"default"},type:{validator(e){return Object(l["m"])(e,["border","dot"])}},name:{type:[String,Number]},fade:{type:Boolean,default:!0},size:{validator(e){return Object(l["m"])(e,["default","medium","large"])},default:"default"}},data(){return{isChecked:this.checked}},computed:{classes(){return[""+n,`${n}-size-${this.size}`,{[`${n}-${this.color}`]:!!this.color&&Object(l["m"])(this.color,o),[`${n}-${this.type}`]:!!this.type,[n+"-closable"]:this.closable,[n+"-checked"]:this.isChecked}]},wraperStyles(){return Object(l["m"])(this.color,o)?{}:{background:this.isChecked?this.defaultTypeColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"dot"!==this.type&&"border"!==this.type&&this.isChecked?this.borderColor:this.lineColor,color:this.lineColor}},textClasses(){return[n+"-text","border"===this.type&&Object(l["m"])(this.color,o)?`${n}-color-${this.color}`:"","dot"!==this.type&&"border"!==this.type&&"default"!==this.color&&this.isChecked&&c.indexOf(this.color)<0?n+"-color-white":""]},dotClasses(){return n+"-dot-inner"},iconClass(){return"dot"===this.type?"":"border"===this.type?Object(l["m"])(this.color,o)?`${n}-color-${this.color}`:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},showDot(){return!!this.type&&"dot"===this.type},lineColor(){return"dot"===this.type?"":"border"===this.type?void 0!==this.color?Object(l["m"])(this.color,o)?"":this.color:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},borderColor(){return void 0!==this.color?"default"===this.color?"":this.color:""},dotColor(){return void 0!==this.color?Object(l["m"])(this.color,o)?"":this.color:""},textColorStyle(){return Object(l["m"])(this.color,o)?{}:"dot"!==this.type&&"border"!==this.type?this.isChecked?{color:this.lineColor}:{}:{color:this.lineColor}},bgColorStyle(){return Object(l["m"])(this.color,o)?{}:{background:this.dotColor}},defaultTypeColor(){return"dot"!==this.type&&"border"!==this.type&&void 0!==this.color?Object(l["m"])(this.color,o)?"":this.color:""}},methods:{close(e){void 0===this.name?this.$emit("on-close",e):this.$emit("on-close",e,this.name)},check(){if(!this.checkable)return;const e=!this.isChecked;this.isChecked=e,void 0===this.name?this.$emit("on-change",e):this.$emit("on-change",e,this.name)}},watch:{checked(e){this.isChecked=e}}},h=u,p=s("e607"),g=Object(p["a"])(h,a,i,!1,null,null,null),d=g.exports;t["a"]=d},c6e7a:function(e,t,s){"use strict";s("ed70");var a=s("db49"),i=s("ed08");t["a"]={data(){return{page_num:1,total:0,page_size:a["c"],list:[]}},created(){this.updateFilters()},methods:{updateFilters(){if(this.page_num=this.$route.query.p?parseInt(this.$route.query.p,10):1,this.page_size=this.$route.query.s?parseInt(this.$route.query.s,10):a["c"],"object"===typeof this.filters){const e={...this.filters};for(let t in e)if(t in this.$route.query){const s=this.$route.query[t];/^\d+$/.test(s)?e[t]=parseInt(s,10):e[t]="true"===s||"false"===s?"true"===s:s}else e[t]=void 0;i["c"].vueSame(e,this.filters)||(this.filters=e)}},changeRouteQuery(){const e=["p="+this.page_num,"s="+this.page_size];if("object"===typeof this.filters)for(let t in this.filters)void 0!==this.filters[t]&&e.push(`${t}=${this.filters[t]}`);this.$router.push(`${this.$route.path}?${e.join("&")}`)},onPageChange(e){this.page_num=e,this.changeRouteQuery()},onPageSizeChange(e){this.page_num=1,this.page_size=e,this.changeRouteQuery()}},watch:{$route:{deep:!0,handler(){this.postInfo&&!this.postInfo.default_community_id||(this.updateFilters(),this.$nextTick(()=>{this.getListData()}))}}}}}}]);