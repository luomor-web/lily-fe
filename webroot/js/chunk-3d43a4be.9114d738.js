(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d43a4be"],{"5a84":function(e,t,s){"use strict";var a=s("7c19");t["a"]=a["a"]},"70a0":function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return e.simple?t("ul",{class:e.simpleWrapClasses,style:e.styles},[t("li",{class:e.prevClasses,attrs:{title:e.t("i.page.prev")},on:{click:e.prev}},[e._m(0)]),t("div",{class:e.simplePagerClasses,attrs:{title:e.currentPage+"/"+e.allPages}},[t("input",{attrs:{type:"text",autocomplete:"off",spellcheck:"false",disabled:e.disabled},domProps:{value:e.currentPage},on:{keydown:e.keyDown,keyup:e.keyUp,change:e.keyUp}}),t("span",[e._v("/")]),e._v(" "+e._s(e.allPages)+" ")]),t("li",{class:e.nextClasses,attrs:{title:e.t("i.page.next")},on:{click:e.next}},[e._m(1)])]):t("ul",{class:e.wrapClasses,style:e.styles},[e.showTotal?t("span",{class:[e.prefixCls+"-total"]},[e._t("default",(function(){return[e._v(e._s(e.t("i.page.total"))+" "+e._s(e.total)+" "),e.total<=1?[e._v(e._s(e.t("i.page.item")))]:[e._v(e._s(e.t("i.page.items")))]]}))],2):e._e(),t("li",{class:e.prevClasses,attrs:{title:e.t("i.page.prev")},on:{click:e.prev}},[t("a",[""!==e.prevText?[e._v(e._s(e.prevText))]:t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"})],2)]),t("li",{class:e.firstPageClasses,attrs:{title:"1"},on:{click:function(t){return e.changePage(1)}}},[t("a",[e._v("1")])]),e.currentPage>5?t("li",{class:[e.prefixCls+"-item-jump-prev"],attrs:{title:e.t("i.page.prev5")},on:{click:e.fastPrev}},[e._m(2)]):e._e(),5===e.currentPage?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-3},on:{click:function(t){return e.changePage(e.currentPage-3)}}},[t("a",[e._v(e._s(e.currentPage-3))])]):e._e(),e.currentPage-2>1?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-2},on:{click:function(t){return e.changePage(e.currentPage-2)}}},[t("a",[e._v(e._s(e.currentPage-2))])]):e._e(),e.currentPage-1>1?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-1},on:{click:function(t){return e.changePage(e.currentPage-1)}}},[t("a",[e._v(e._s(e.currentPage-1))])]):e._e(),1!=e.currentPage&&e.currentPage!=e.allPages?t("li",{class:[e.prefixCls+"-item",e.prefixCls+"-item-active"],attrs:{title:e.currentPage}},[t("a",[e._v(e._s(e.currentPage))])]):e._e(),e.currentPage+1<e.allPages?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+1},on:{click:function(t){return e.changePage(e.currentPage+1)}}},[t("a",[e._v(e._s(e.currentPage+1))])]):e._e(),e.currentPage+2<e.allPages?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+2},on:{click:function(t){return e.changePage(e.currentPage+2)}}},[t("a",[e._v(e._s(e.currentPage+2))])]):e._e(),e.allPages-e.currentPage===4?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+3},on:{click:function(t){return e.changePage(e.currentPage+3)}}},[t("a",[e._v(e._s(e.currentPage+3))])]):e._e(),e.allPages-e.currentPage>=5?t("li",{class:[e.prefixCls+"-item-jump-next"],attrs:{title:e.t("i.page.next5")},on:{click:e.fastNext}},[e._m(3)]):e._e(),e.allPages>1?t("li",{class:e.lastPageClasses,attrs:{title:e.allPages},on:{click:function(t){return e.changePage(e.allPages)}}},[t("a",[e._v(e._s(e.allPages))])]):e._e(),t("li",{class:e.nextClasses,attrs:{title:e.t("i.page.next")},on:{click:e.next}},[t("a",[""!==e.nextText?[e._v(e._s(e.nextText))]:t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"})],2)]),t("Options",{attrs:{"show-sizer":e.showSizer,"page-size":e.currentPageSize,"page-size-opts":e.pageSizeOpts,placement:e.placement,transfer:e.transfer,"show-elevator":e.showElevator,_current:e.currentPage,current:e.currentPage,disabled:e.disabled,"all-pages":e.allPages,"is-small":e.isSmall,eventsEnabled:e.eventsEnabled},on:{"on-size":e.onSize,"on-page":e.onPage}})],1)},i=[function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"}),t("i",{staticClass:"ivu-icon ivu-icon-ios-more"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"}),t("i",{staticClass:"ivu-icon ivu-icon-ios-more"})])}],n=s("e4a4"),r=function(){var e=this,t=e._self._c;return e.showSizer||e.showElevator?t("div",{class:e.optsClasses},[e.showSizer?t("div",{class:e.sizerClasses},[t("i-select",{attrs:{size:e.size,placement:e.placement,transfer:e.transfer,disabled:e.disabled,eventsEnabled:e.eventsEnabled},on:{"on-change":e.changeSize},model:{value:e.currentPageSize,callback:function(t){e.currentPageSize=t},expression:"currentPageSize"}},e._l(e.pageSizeOpts,(function(s){return t("i-option",{key:s,staticStyle:{"text-align":"center"},attrs:{value:s}},[e._v(e._s(s)+" "+e._s(e.t("i.page.page")))])})),1)],1):e._e(),e.showElevator?t("div",{class:e.ElevatorClasses},[e._v(" "+e._s(e.t("i.page.goto"))+" "),t("input",{attrs:{type:"text",autocomplete:"off",spellcheck:"false",disabled:e.disabled},domProps:{value:e._current},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changePage.apply(null,arguments)}}}),e._v(" "+e._s(e.t("i.page.p"))+" ")]):e._e()]):e._e()},o=[],l=s("c01e"),c=s("4ff7"),h=s("e35f");const u="ivu-page";function d(e){return/^[1-9][0-9]*$/.test(e+"")}var p={name:"PageOption",mixins:[h["a"]],components:{iSelect:l["a"],iOption:c["a"]},props:{pageSizeOpts:Array,showSizer:Boolean,showElevator:Boolean,current:Number,_current:Number,pageSize:Number,allPages:Number,isSmall:Boolean,placement:String,transfer:Boolean,disabled:Boolean,eventsEnabled:Boolean},data(){return{currentPageSize:this.pageSize}},watch:{pageSize(e){this.currentPageSize=e}},computed:{size(){return this.isSmall?"small":"default"},optsClasses(){return[u+"-options"]},sizerClasses(){return[u+"-options-sizer"]},ElevatorClasses(){return[u+"-options-elevator"]}},methods:{changeSize(){this.$emit("on-size",this.currentPageSize)},changePage(e){let t=e.target.value.trim(),s=0;if(d(t)){if(t=Number(t),t!=this.current){const e=this.allPages;s=t>e?e:t}}else s=1;s&&(this.$emit("on-page",s),e.target.value=s)}}},m=p,f=s("e607"),g=Object(f["a"])(m,r,o,!1,null,null,null),b=g.exports;const v="ivu-page";var y={name:"Page",mixins:[h["a"]],components:{Options:b},props:{current:{type:Number,default:1},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageSizeOpts:{type:Array,default(){return[10,20,30,40]}},placement:{validator(e){return Object(n["m"])(e,["top","bottom"])},default:"bottom"},transfer:{type:Boolean,default(){return!(!this.$IVIEW||""===this.$IVIEW.transfer)&&this.$IVIEW.transfer}},size:{validator(e){return Object(n["m"])(e,["small","default"])}},simple:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showElevator:{type:Boolean,default:!1},showSizer:{type:Boolean,default:!1},className:{type:String},styles:{type:Object},prevText:{type:String,default:""},nextText:{type:String,default:""},disabled:{type:Boolean,default:!1},eventsEnabled:{type:Boolean,default:!1}},data(){return{prefixCls:v,currentPage:this.current,currentPageSize:this.pageSize}},watch:{total(e){let t=Math.ceil(e/this.currentPageSize);t<this.currentPage&&(this.currentPage=0===t?1:t)},current(e){this.currentPage=e},pageSize(e){this.currentPageSize=e}},computed:{isSmall(){return"small"===this.size},allPages(){const e=Math.ceil(this.total/this.currentPageSize);return 0===e?1:e},simpleWrapClasses(){return[""+v,v+"-simple",{[""+this.className]:!!this.className}]},simplePagerClasses(){return v+"-simple-pager"},wrapClasses(){return[""+v,{[""+this.className]:!!this.className,[v+"-with-disabled"]:this.disabled,mini:"small"===this.size}]},prevClasses(){return[v+"-prev",{[v+"-disabled"]:1===this.currentPage||this.disabled,[v+"-custom-text"]:""!==this.prevText}]},nextClasses(){return[v+"-next",{[v+"-disabled"]:this.currentPage===this.allPages||this.disabled,[v+"-custom-text"]:""!==this.nextText}]},firstPageClasses(){return[v+"-item",{[v+"-item-active"]:1===this.currentPage}]},lastPageClasses(){return[v+"-item",{[v+"-item-active"]:this.currentPage===this.allPages}]}},methods:{changePage(e){this.disabled||this.currentPage!=e&&(this.currentPage=e,this.$emit("update:current",e),this.$emit("on-change",e))},prev(){if(this.disabled)return;const e=this.currentPage;if(e<=1)return!1;this.changePage(e-1),this.$emit("on-prev",e-1)},next(){if(this.disabled)return;const e=this.currentPage;if(e>=this.allPages)return!1;this.changePage(e+1),this.$emit("on-next",e+1)},fastPrev(){if(this.disabled)return;const e=this.currentPage-5;e>0?this.changePage(e):this.changePage(1)},fastNext(){if(this.disabled)return;const e=this.currentPage+5;e>this.allPages?this.changePage(this.allPages):this.changePage(e)},onSize(e){this.disabled||(this.currentPageSize=e,this.$emit("on-page-size-change",e),this.changePage(1))},onPage(e){this.disabled||this.changePage(e)},keyDown(e){const t=e.keyCode,s=t>=48&&t<=57||t>=96&&t<=105||8===t||37===t||39===t;s||e.preventDefault()},keyUp(e){const t=e.keyCode,s=parseInt(e.target.value);if(38===t)this.prev();else if(40===t)this.next();else if(13===t){let t=1;t=s>this.allPages?this.allPages:s<=0||!s?1:s,e.target.value=t,this.changePage(t)}}}},_=y,x=Object(f["a"])(_,a,i,!1,null,null,null),w=x.exports;t["a"]=w},"7c19":function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:e.prefixCls,style:e.contentStyle},[e._t("default")],2)},i=[];const n="ivu-tabs-tabpane";var r={name:"TabPane",inject:["TabsInstance"],props:{name:{type:String},label:{type:[String,Function],default:""},icon:{type:String},disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:null},tab:{type:String},index:{type:Number},contextMenu:{type:Boolean,default:!1}},data(){return{prefixCls:n,show:!0,currentName:this.name}},computed:{contentStyle(){return{visibility:this.TabsInstance.activeKey!==this.currentName?"hidden":"visible"}}},methods:{updateNav(){this.TabsInstance.updateNav()}},watch:{name(e){this.currentName=e,this.updateNav()},label(){this.updateNav()},icon(){this.updateNav()},disabled(){this.updateNav()}},mounted(){this.updateNav()},destroyed(){this.updateNav()}},o=r,l=s("e607"),c=Object(l["a"])(o,a,i,!1,null,null,null);t["a"]=c.exports},c03a:function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return e.fade?t("transition",{attrs:{name:"fade"}},[t("div",{class:e.classes,style:e.wraperStyles,on:{click:function(t){return t.stopPropagation(),e.check.apply(null,arguments)}}},[e.showDot?t("span",{class:e.dotClasses,style:e.bgColorStyle}):e._e(),t("span",{class:e.textClasses,style:e.textColorStyle},[e._t("default")],2),e.closable?t("Icon",{class:e.iconClass,attrs:{color:e.lineColor,type:"ios-close"},nativeOn:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}}):e._e()],1)]):t("div",{class:e.classes,style:e.wraperStyles,on:{click:function(t){return t.stopPropagation(),e.check.apply(null,arguments)}}},[e.showDot?t("span",{class:e.dotClasses,style:e.bgColorStyle}):e._e(),t("span",{class:e.textClasses,style:e.textColorStyle},[e._t("default")],2),e.closable?t("Icon",{class:e.iconClass,attrs:{color:e.lineColor,type:"ios-close"},nativeOn:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}}):e._e()],1)},i=[],n=s("4b1c"),r=s("e4a4");const o="ivu-tag",l=["default","primary","success","warning","error","blue","green","red","yellow","pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],c=["pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"];var h={name:"Tag",components:{Icon:n["a"]},props:{closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:!0},color:{type:String,default:"default"},type:{validator(e){return Object(r["m"])(e,["border","dot"])}},name:{type:[String,Number]},fade:{type:Boolean,default:!0},size:{validator(e){return Object(r["m"])(e,["default","medium","large"])},default:"default"}},data(){return{isChecked:this.checked}},computed:{classes(){return[""+o,`${o}-size-${this.size}`,{[`${o}-${this.color}`]:!!this.color&&Object(r["m"])(this.color,l),[`${o}-${this.type}`]:!!this.type,[o+"-closable"]:this.closable,[o+"-checked"]:this.isChecked}]},wraperStyles(){return Object(r["m"])(this.color,l)?{}:{background:this.isChecked?this.defaultTypeColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"dot"!==this.type&&"border"!==this.type&&this.isChecked?this.borderColor:this.lineColor,color:this.lineColor}},textClasses(){return[o+"-text","border"===this.type&&Object(r["m"])(this.color,l)?`${o}-color-${this.color}`:"","dot"!==this.type&&"border"!==this.type&&"default"!==this.color&&this.isChecked&&c.indexOf(this.color)<0?o+"-color-white":""]},dotClasses(){return o+"-dot-inner"},iconClass(){return"dot"===this.type?"":"border"===this.type?Object(r["m"])(this.color,l)?`${o}-color-${this.color}`:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},showDot(){return!!this.type&&"dot"===this.type},lineColor(){return"dot"===this.type?"":"border"===this.type?void 0!==this.color?Object(r["m"])(this.color,l)?"":this.color:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},borderColor(){return void 0!==this.color?"default"===this.color?"":this.color:""},dotColor(){return void 0!==this.color?Object(r["m"])(this.color,l)?"":this.color:""},textColorStyle(){return Object(r["m"])(this.color,l)?{}:"dot"!==this.type&&"border"!==this.type?this.isChecked?{color:this.lineColor}:{}:{color:this.lineColor}},bgColorStyle(){return Object(r["m"])(this.color,l)?{}:{background:this.dotColor}},defaultTypeColor(){return"dot"!==this.type&&"border"!==this.type&&void 0!==this.color?Object(r["m"])(this.color,l)?"":this.color:""}},methods:{close(e){void 0===this.name?this.$emit("on-close",e):this.$emit("on-close",e,this.name)},check(){if(!this.checkable)return;const e=!this.isChecked;this.isChecked=e,void 0===this.name?this.$emit("on-change",e):this.$emit("on-change",e,this.name)}},watch:{checked(e){this.isChecked=e}}},u=h,d=s("e607"),p=Object(d["a"])(u,a,i,!1,null,null,null),m=p.exports;t["a"]=m},c6e7a:function(e,t,s){"use strict";s("ed70");var a=s("db49"),i=s("ed08");t["a"]={data(){return{page_num:1,total:0,page_size:a["c"],list:[]}},created(){this.updateFilters()},methods:{updateFilters(){if(this.page_num=this.$route.query.p?parseInt(this.$route.query.p,10):1,this.page_size=this.$route.query.s?parseInt(this.$route.query.s,10):a["c"],"object"===typeof this.filters){const e={...this.filters};for(let t in e)if(t in this.$route.query){const s=this.$route.query[t];/^\d+$/.test(s)?e[t]=parseInt(s,10):e[t]="true"===s||"false"===s?"true"===s:s}else e[t]=void 0;i["c"].vueSame(e,this.filters)||(this.filters=e)}},changeRouteQuery(){const e=["p="+this.page_num,"s="+this.page_size];if("object"===typeof this.filters)for(let t in this.filters)void 0!==this.filters[t]&&e.push(`${t}=${this.filters[t]}`);this.$router.push(`${this.$route.path}?${e.join("&")}`)},onPageChange(e){this.page_num=e,this.changeRouteQuery()},onPageSizeChange(e){this.page_num=1,this.page_size=e,this.changeRouteQuery()}},watch:{$route:{deep:!0,handler(){this.postInfo&&!this.postInfo.default_community_id||(this.updateFilters(),this.$nextTick(()=>{this.getListData()}))}}}}},d7d9:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("WaterMark",[t("Header",[t("Tabs",{attrs:{slot:"nav",value:e.activeTab},on:{"on-click":e.onTabChange},slot:"nav"},[t("TabPane",{attrs:{label:"我需要完成的任务",icon:"my-mission",name:"my"}}),t("TabPane",{attrs:{label:"我分配给别人的任务",icon:"dispose-mission",name:"dispose"}}),e.userInfo.access.includes(e.ROLES.XJRW)?t("TabPane",{attrs:{label:"全部巡检任务",icon:"all-mission",name:"all"}}):e._e()],1)],1),t(e.activeTab,{tag:"component"})],1)},i=[],n=s("5a84"),r=s("e741"),o=(s("ed70"),s("7736")),l=s("2af9"),c=function(){var e=this,t=e._self._c;return t("section",[t("Card",{attrs:{"dis-hover":"",bordered:!1}},[t("Table",{attrs:{stripe:"",columns:e.columns,data:e.list}}),t("ListFooter",[t("Page",{attrs:{"show-total":"","show-elevator":"","show-sizer":"","page-size":e.page_size,total:e.total,current:e.page_num},on:{"on-change":e.onPageChange,"on-page-size-change":e.onPageSizeChange}})],1)],1),e.fetching?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)},h=[],u=s("2af6"),d=s("4d77"),p=s("70a0"),m=s("3e79"),f=s("c03a"),g=s("c6e7a"),b=s("ed08"),v=s("2f42"),y=s.n(v),_={name:"OaMissionMy",data(){return{fetching:!0,columns:[{title:"任务编号",minWidth:140,render:(e,t)=>e("span",b["f"].num("MN",t.row.created_at,t.row.id))},{title:"任务开始日期",minWidth:120,render:(e,t)=>e("span",y()(t.row.start_date).format("YYYY-MM-DD"))},{title:"任务结束日期",minWidth:120,render:(e,t)=>e("span",y()(t.row.end_date).format("YYYY-MM-DD"))},{title:"上报开始时间",minWidth:120,render:(e,t)=>e("span",y()().hour(t.row.start_hour).minute(0).format("HH:mm"))},{title:"上报结束时间",minWidth:120,render:(e,t)=>e("span",y()().hour(t.row.end_hour).minute(0).format("HH:mm"))},{title:"任务分类",minWidth:120,key:"category"},{title:"巡检路线",minWidth:120,key:"line"},{title:"任务状态",minWidth:100,render:(e,t)=>t.row.cancel?e(f["a"],{props:{color:"magenta"}},"已取消"):t.row.start_date>Date.now()?e(f["a"],{props:{color:"default"}},"未开始"):t.row.end_date<Date.now()?e(f["a"],{props:{color:"blue"}},"已结束"):e(f["a"],{props:{color:"cyan"}},"进行中")},{title:"任务分配人",minWidth:120,render:(e,t)=>e("a",{on:{click:()=>this.$router.push("/oa/hr/colleague/detail/"+t.row.created_by)}},t.row.real_name)},{title:"创建时间",minWidth:140,render:(e,t)=>e("span",y()(t.row.created_at).format("YYYY-MM-DD HH:mm:ss"))},{title:"操作",key:"id",minWidth:120,fixed:"right",render:(e,t)=>e("span",[e("a",{on:{click:()=>this.goDetail(t.row.id)}},"查看"),t.row.start_date<Date.now()&&Date.now()<t.row.end_date&&!t.row.cancel&&!t.row.finish?e("a",{on:{click:()=>this.startMission(t.row.id)}},"开始巡检"):null])}]}},mixins:[g["a"]],mounted(){this.postInfo.default_community_id&&this.getListData()},methods:{getListData(){const{page_num:e,page_size:t,postInfo:s}=this;this.fetching=!0;const a={page_num:e,page_size:t,community_id:s.default_community_id};b["i"].post("/mission/my",a).then(e=>{this.fetching=!1,this.page_num=e.data.page_num,this.page_size=e.data.page_size,this.list=e.data.list,this.total=e.data.total}).catch(()=>this.fetching=!1)},goDetail(e){this.$router.push("/oa/mission/detail/"+e)},startMission(e){this.$router.push("/oa/mission/submit/"+e)}},computed:{...Object(o["c"])({postInfo:"common/postInfo"})},watch:{"postInfo.default_community_id"(){this.getListData()}},components:{ListFooter:l["n"],Card:m["a"],Page:p["a"],Spin:d["a"],Table:u["a"]}},x=_,w=s("e607"),C=Object(w["a"])(x,c,h,!1,null,null,null),P=C.exports,S=function(){var e=this,t=e._self._c;return t("section",[t("Card",{attrs:{"dis-hover":"",bordered:!1}},[t("Table",{attrs:{stripe:"",columns:e.columns,data:e.list}}),t("ListFooter",[t("Page",{attrs:{"show-total":"","show-elevator":"","show-sizer":"","page-size":e.page_size,total:e.total,current:e.page_num},on:{"on-change":e.onPageChange,"on-page-size-change":e.onPageSizeChange}})],1)],1),e.fetching?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)},k=[],$=s("8c99"),z=s("7c0d"),I={name:"OaMissionDispose",data(){return{fetching:!0,columns:[{title:"任务编号",minWidth:140,render:(e,t)=>e("span",b["f"].num("MN",t.row.created_at,t.row.id))},{title:"巡检执行人",minWidth:120,render:(e,t)=>e("a",{on:{click:()=>this.$router.push("/oa/hr/colleague/detail/"+t.row.user_id)}},t.row.real_name)},{title:"任务开始日期",minWidth:120,render:(e,t)=>e("span",y()(t.row.start_date).format("YYYY-MM-DD"))},{title:"任务结束日期",minWidth:120,render:(e,t)=>e("span",y()(t.row.end_date).format("YYYY-MM-DD"))},{title:"上报开始时间",minWidth:120,render:(e,t)=>e("span",y()().hour(t.row.start_hour).minute(0).format("HH:mm"))},{title:"上报结束时间",minWidth:120,render:(e,t)=>e("span",y()().hour(t.row.end_hour).minute(0).format("HH:mm"))},{title:"任务分类",minWidth:120,key:"category"},{title:"巡检路线",minWidth:120,key:"line"},{title:"任务状态",minWidth:100,render:(e,t)=>t.row.cancel?e(f["a"],{props:{color:"magenta"}},"已取消"):t.row.start_date>Date.now()?e(f["a"],{props:{color:"default"}},"未开始"):t.row.end_date<Date.now()?e(f["a"],{props:{color:"blue"}},"已结束"):e(f["a"],{props:{color:"cyan"}},"进行中")},{title:"创建时间",minWidth:140,render:(e,t)=>e("span",y()(t.row.created_at).format("YYYY-MM-DD HH:mm:ss"))},{title:"操作",key:"id",minWidth:120,fixed:"right",render:(e,t)=>e("span",[e("a",{on:{click:()=>this.goDetail(t.row.id)}},"查看"),Date.now()<t.row.end_date&&!t.row.cancel?e("a",{on:{click:()=>this.cancel(t.row.id,t.index)}},"取消任务"):null])}]}},mixins:[g["a"]],mounted(){this.postInfo.default_community_id&&this.getListData()},methods:{getListData(){const{page_num:e,page_size:t,postInfo:s}=this;this.fetching=!0;const a={page_num:e,page_size:t,community_id:s.default_community_id};b["i"].post("/mission/dispose",a).then(e=>{this.fetching=!1,this.page_num=e.data.page_num,this.page_size=e.data.page_size,this.list=e.data.list,this.total=e.data.total}).catch(()=>this.fetching=!1)},goDetail(e){this.$router.push("/oa/mission/detail/"+e)},cancel(e,t){z["a"].confirm({title:"请确认",content:"确认要取消本次巡检吗？此操作不可恢复",onOk:()=>{const s={id:e,community_id:this.postInfo.default_community_id};b["i"].post("/mission/cancel",s).then(()=>{$["a"].success("取消任务成功");const e=[].concat(this.list);e[t].cancel=1,this.list=e}).catch(()=>{})}})}},computed:{...Object(o["c"])({postInfo:"common/postInfo"})},watch:{"postInfo.default_community_id"(){this.getListData()}},components:{ListFooter:l["n"],Card:m["a"],Page:p["a"],Spin:d["a"],Table:u["a"]}},T=I,O=Object(w["a"])(T,S,k,!1,null,null,null),D=O.exports,W=function(){var e=this,t=e._self._c;return t("section",[t("Card",{attrs:{"dis-hover":"",bordered:!1}},[t("Table",{attrs:{stripe:"",columns:e.columns,data:e.list}}),t("ListFooter",[t("Page",{attrs:{"show-total":"","show-elevator":"","show-sizer":"","page-size":e.page_size,total:e.total,current:e.page_num},on:{"on-change":e.onPageChange,"on-page-size-change":e.onPageSizeChange}})],1)],1),e.fetching?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)},M=[],N={name:"OaMissionAll",data(){return{fetching:!0,columns:[{title:"任务编号",minWidth:140,render:(e,t)=>e("span",b["f"].num("MN",t.row.created_at,t.row.id))},{title:"巡检执行人",minWidth:120,render:(e,t)=>e("a",{on:{click:()=>this.$router.push("/oa/hr/colleague/detail/"+t.row.user_id)}},t.row.real_name)},{title:"任务开始日期",minWidth:120,render:(e,t)=>e("span",y()(t.row.start_date).format("YYYY-MM-DD"))},{title:"任务结束日期",minWidth:120,render:(e,t)=>e("span",y()(t.row.end_date).format("YYYY-MM-DD"))},{title:"上报开始时间",minWidth:120,render:(e,t)=>e("span",y()().hour(t.row.start_hour).minute(0).format("HH:mm"))},{title:"上报结束时间",minWidth:120,render:(e,t)=>e("span",y()().hour(t.row.end_hour).minute(0).format("HH:mm"))},{title:"任务分类",minWidth:120,key:"category"},{title:"巡检路线",minWidth:120,key:"line"},{title:"任务状态",minWidth:100,render:(e,t)=>t.row.cancel?e(f["a"],{props:{color:"magenta"}},"已取消"):t.row.start_date>Date.now()?e(f["a"],{props:{color:"default"}},"未开始"):t.row.end_date<Date.now()?e(f["a"],{props:{color:"blue"}},"已结束"):e(f["a"],{props:{color:"cyan"}},"进行中")},{title:"创建时间",minWidth:140,render:(e,t)=>e("span",y()(t.row.created_at).format("YYYY-MM-DD HH:mm:ss"))},{title:"操作",key:"id",minWidth:80,fixed:"right",render:(e,t)=>e("a",{on:{click:()=>this.goDetail(t.row.id)}},"查看")}]}},mixins:[g["a"]],mounted(){this.postInfo.default_community_id&&this.getListData()},methods:{getListData(){const{page_num:e,page_size:t,postInfo:s}=this;this.fetching=!0;const a={page_num:e,page_size:t,community_id:s.default_community_id};b["i"].post("/mission/all",a).then(e=>{this.fetching=!1,this.page_num=e.data.page_num,this.page_size=e.data.page_size,this.list=e.data.list,this.total=e.data.total}).catch(()=>this.fetching=!1)},goDetail(e){this.$router.push("/oa/mission/detail/"+e)},cancel(e,t){z["a"].confirm({title:"请确认",content:"确认要取消本次巡检吗？此操作不可恢复",onOk:()=>{const s={id:e,community_id:this.postInfo.default_community_id};b["i"].post("/mission/cancel",s).then(()=>{$["a"].success("取消任务成功");const e=[].concat(this.list);e[t].cancel=1,this.list=e}).catch(()=>{})}})}},computed:{...Object(o["c"])({postInfo:"common/postInfo"})},watch:{"postInfo.default_community_id"(){this.getListData()}},components:{ListFooter:l["n"],Card:m["a"],Page:p["a"],Spin:d["a"],Table:u["a"]}},E=N,Y=Object(w["a"])(E,W,M,!1,null,null,null),j=Y.exports,L=s("0373"),B=s.n(L),K={name:"OaMissionMain",data(){return{ROLES:B.a,activeTab:this.$route.query.tab?this.$route.query.tab:"my"}},methods:{onTabChange(e){this.activeTab=e,this.$router.push(`${this.$route.path}?tab=${e}`)}},computed:{...Object(o["c"])({userInfo:"common/userInfo"})},components:{Tabs:r["a"],TabPane:n["a"],Header:l["k"],WaterMark:l["s"],My:P,Dispose:D,All:j}},R=K,H=Object(w["a"])(R,a,i,!1,null,null,null);t["default"]=H.exports},e741:function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{ref:"tabsWrap",class:e.classes},[t("div",{class:[e.prefixCls+"-bar"]},[e.showSlot?t("div",{class:[e.prefixCls+"-nav-right"]},[e._t("extra")],2):e._e(),t("div",{ref:"navContainer",class:[e.prefixCls+"-nav-container"],attrs:{tabindex:"0"},on:{keydown:[e.handleTabKeyNavigation,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.handleTabKeyboardSelect(!1))}]}},[t("div",{ref:"navWrap",class:[e.prefixCls+"-nav-wrap",e.scrollable?e.prefixCls+"-nav-scrollable":""]},[t("span",{class:[e.prefixCls+"-nav-prev",e.scrollable?"":e.prefixCls+"-nav-scroll-disabled"],on:{click:e.scrollPrev}},[t("Icon",{attrs:{type:"ios-arrow-back"}})],1),t("span",{class:[e.prefixCls+"-nav-next",e.scrollable?"":e.prefixCls+"-nav-scroll-disabled"],on:{click:e.scrollNext}},[t("Icon",{attrs:{type:"ios-arrow-forward"}})],1),t("div",{ref:"navScroll",class:[e.prefixCls+"-nav-scroll"],on:{DOMMouseScroll:e.handleScroll,mousewheel:e.handleScroll}},[t("div",{ref:"nav",class:[e.prefixCls+"-nav"],style:e.navStyle},[t("div",{class:e.barClasses,style:e.barStyle}),e._l(e.navList,(function(s,a){return t("div",{class:e.tabCls(s),attrs:{draggable:e.draggable},on:{click:function(t){return e.handleChange(a)},dblclick:function(t){return e.handleDblclick(a)},contextmenu:function(t){return t.stopPropagation(),e.handleContextmenu(a,t)},selectstart:function(t){return t.stopPropagation(),e.handlePreventSelect(a,t)},dragstart:function(t){return e.handleDrag(a,t)},drop:function(t){return e.handleDrop(a,t)},dragover:function(e){e.preventDefault()}}},[""!==s.icon?t("Icon",{attrs:{type:s.icon}}):e._e(),"function"===s.labelType?t("Render",{attrs:{render:s.label}}):[e._v(e._s(s.label))],e.showClose(s)?t("Icon",{class:[e.prefixCls+"-close"],attrs:{type:e.arrowType,custom:e.customArrowType,size:e.arrowSize},nativeOn:{click:function(t){return t.stopPropagation(),e.handleRemove(a)}}}):e._e()],2)}))],2)])])])]),t("div",{ref:"panes",class:e.contentClasses,style:e.contentStyle},[e._t("default")],2),t("div",{staticClass:"ivu-tabs-context-menu",style:e.contextMenuStyles},[t("Dropdown",{attrs:{trigger:"custom",visible:e.contextMenuVisible,transfer:""},on:{"on-clickoutside":e.handleClickContextMenuOutside}},[t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e._t("contextMenu")],2)],1)],1)])},i=[],n=(s("ed70"),s("4919")),r=s("d6dc"),o=s("1918"),l=s("edf2"),c=s("e4a4"),h=s("ce17"),u=s("a504"),d=s.n(u);const p="ivu-tabs",m=300,f=(e,t,s,a)=>{const i=e.findIndex(e=>e.name===t),n=(i+s+e.length)%e.length,r=e[n];return r.disabled?f(e,r.name,s,a):r},g=(e,t)=>{try{e.focus()}catch(a){}if(document.activeElement==e&&e!==t)return!0;const s=e.children;for(let i of s)if(g(i,t))return!0;return!1};var b={name:"Tabs",mixins:[h["a"]],components:{Icon:n["a"],Render:r["a"],Dropdown:o["a"],DropdownMenu:l["a"]},provide(){return{TabsInstance:this}},props:{value:{type:[String,Number]},type:{validator(e){return Object(c["m"])(e,["line","card"])},default:"line"},size:{validator(e){return Object(c["m"])(e,["small","default"])},default:"default"},animated:{type:Boolean,default:!0},captureFocus:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},beforeRemove:Function,name:{type:String},draggable:{type:Boolean,default:!1}},data(){return{prefixCls:p,navList:[],barWidth:0,barOffset:0,activeKey:this.value,focusedKey:this.value,showSlot:!1,navStyle:{transform:""},scrollable:!1,transitioning:!1,contextMenuVisible:!1,contextMenuStyles:{top:0,left:0}}},computed:{classes(){return[""+p,{[p+"-card"]:"card"===this.type,[p+"-mini"]:"small"===this.size&&"line"===this.type,[p+"-no-animation"]:!this.animated}]},contentClasses(){return[p+"-content",{[p+"-content-animated"]:this.animated}]},barClasses(){return[p+"-ink-bar",{[p+"-ink-bar-animated"]:this.animated}]},contentStyle(){const e=this.getTabIndex(this.activeKey),t=0===e?"0%":`-${e}00%`;let s={};return e>-1&&(s={transform:`translateX(${t}) translateZ(0px)`}),s},barStyle(){let e={visibility:"hidden",width:this.barWidth+"px"};return"line"===this.type&&(e.visibility="visible"),this.animated?e.transform=`translate3d(${this.barOffset}px, 0px, 0px)`:e.left=this.barOffset+"px",e},arrowType(){let e="ios-close";return this.$IVIEW&&(this.$IVIEW.tabs.customCloseIcon?e="":this.$IVIEW.tabs.closeIcon&&(e=this.$IVIEW.tabs.closeIcon)),e},customArrowType(){let e="";return this.$IVIEW&&this.$IVIEW.tabs.customCloseIcon&&(e=this.$IVIEW.tabs.customCloseIcon),e},arrowSize(){let e="";return this.$IVIEW&&this.$IVIEW.tabs.closeIconSize&&(e=this.$IVIEW.tabs.closeIconSize),e}},methods:{getTabs(){const e=Object(c["h"])(this,"TabPane"),t=[];return e.forEach(e=>{e.tab&&this.name?e.tab===this.name&&t.push(e):t.push(e)}),t.sort((e,t)=>{if(e.index&&t.index)return e.index>t.index?1:-1}),t},updateNav(){this.navList=[],this.getTabs().forEach((e,t)=>{this.navList.push({labelType:typeof e.label,label:e.label,icon:e.icon||"",name:e.currentName||t,disabled:e.disabled,closable:e.closable,contextMenu:e.contextMenu}),e.currentName||(e.currentName=t),0===t&&(this.activeKey||(this.activeKey=e.currentName||t))}),this.updateStatus(),this.updateBar()},updateBar(){this.$nextTick(()=>{const e=this.getTabIndex(this.activeKey);if(!this.$refs.nav)return;const t=this.$refs.nav.querySelectorAll(`.${p}-tab`),s=t[e];if(this.barWidth=s?parseFloat(s.offsetWidth):0,e>0){let s=0;const a="small"===this.size?0:16;for(let i=0;i<e;i++)s+=parseFloat(t[i].offsetWidth)+a;this.barOffset=s}else this.barOffset=0;this.updateNavScroll()})},updateStatus(){const e=this.getTabs();e.forEach(e=>e.show=e.currentName===this.activeKey||this.animated)},tabCls(e){return[p+"-tab",{[p+"-tab-disabled"]:e.disabled,[p+"-tab-active"]:e.name===this.activeKey,[p+"-tab-focused"]:e.name===this.focusedKey}]},handleChange(e){if(this.transitioning)return;this.transitioning=!0,setTimeout(()=>this.transitioning=!1,m);const t=this.navList[e];t&&!t.disabled&&(this.activeKey=t.name,this.$emit("input",t.name),this.$emit("on-click",t.name))},handleDblclick(e){const t=this.navList[e];t&&!t.disabled&&this.$emit("on-dblclick",t.name)},handleContextmenu(e,t){this.contextMenuVisible&&this.handleClickContextMenuOutside(),this.$nextTick(()=>{const s=this.navList[e];if(!s||s.disabled||!s.contextMenu)return;t.preventDefault();const a=this.$refs.tabsWrap,i=a.getBoundingClientRect(),n={left:t.clientX-i.left+"px",top:t.clientY-i.top+"px"};this.contextMenuStyles=n,this.contextMenuVisible=!0,this.$emit("on-contextmenu",s,t,n)})},handleClickContextMenuOutside(){this.contextMenuVisible=!1},handlePreventSelect(e,t){const s=this.navList[e];s&&!s.disabled&&s.contextMenu&&t.preventDefault()},handleTabKeyNavigation(e){if(37!==e.keyCode&&39!==e.keyCode)return;const t=39===e.keyCode?1:-1,s=f(this.navList,this.focusedKey,t);this.focusedKey=s.name},handleTabKeyboardSelect(e=!1){if(e)return;const t=this.focusedKey||0,s=this.getTabIndex(t);this.handleChange(s)},handleRemove(e){if(!this.beforeRemove)return this.handleRemoveTab(e);const t=this.beforeRemove(e);t&&t.then?t.then(()=>{this.handleRemoveTab(e)}):this.handleRemoveTab(e)},handleRemoveTab(e){const t=this.getTabs(),s=t[e];if(s.$destroy(),s.currentName===this.activeKey){const s=this.getTabs();let a=-1;if(s.length){const i=t.filter((t,s)=>!t.disabled&&s<e),n=t.filter((t,s)=>!t.disabled&&s>e);a=n.length?n[0].currentName:i.length?i[i.length-1].currentName:s[0].currentName}this.activeKey=a,this.$emit("input",a)}this.$emit("on-tab-remove",s.currentName),this.updateNav()},showClose(e){return"card"===this.type&&(null!==e.closable?e.closable:this.closable)},scrollPrev(){const e=this.$refs.navScroll.offsetWidth,t=this.getCurrentScrollOffset();if(!t)return;let s=t>e?t-e:0;this.setOffset(s)},scrollNext(){const e=this.$refs.nav.offsetWidth,t=this.$refs.navScroll.offsetWidth,s=this.getCurrentScrollOffset();if(e-s<=t)return;let a=e-s>2*t?s+t:e-t;this.setOffset(a)},getCurrentScrollOffset(){const{navStyle:e}=this;return e.transform?Number(e.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1]):0},getTabIndex(e){return this.navList.findIndex(t=>t.name===e)},setOffset(e){this.navStyle.transform=`translateX(-${e}px)`},scrollToActiveTab(){if(!this.scrollable)return;const e=this.$refs.nav,t=this.$el.querySelector(`.${p}-tab-active`);if(!t)return;const s=this.$refs.navScroll,a=t.getBoundingClientRect(),i=s.getBoundingClientRect(),n=e.getBoundingClientRect(),r=this.getCurrentScrollOffset();let o=r;n.right<i.right&&(o=e.offsetWidth-i.width),a.left<i.left?o=r-(i.left-a.left):a.right>i.right&&(o=r+a.right-i.right),r!==o&&this.setOffset(Math.max(o,0))},updateNavScroll(){const e=this.$refs.nav.offsetWidth,t=this.$refs.navScroll.offsetWidth,s=this.getCurrentScrollOffset();t<e?(this.scrollable=!0,e-s<t&&this.setOffset(e-t)):(this.scrollable=!1,s>0&&this.setOffset(0))},handleScroll(e){e.preventDefault(),e.stopPropagation();const t=e.type;let s=0;"DOMMouseScroll"!==t&&"mousewheel"!==t||(s=e.wheelDelta?e.wheelDelta:40*-(e.detail||0)),s>0?this.scrollPrev():this.scrollNext()},handleResize(){this.updateNavScroll()},isInsideHiddenElement(){let e=this.$el.parentNode;while(e&&e!==document.body){if(e.style&&"none"===e.style.display)return e;e=e.parentNode}return!1},updateVisibility(e){[...this.$refs.panes.querySelectorAll(`.${p}-tabpane`)].forEach((t,s)=>{e===s?([...t.children].filter(e=>e.classList.contains(p+"-tabpane")).forEach(e=>e.style.visibility="visible"),this.captureFocus&&setTimeout(()=>g(t,t),m)):setTimeout(()=>{[...t.children].filter(e=>e.classList.contains(p+"-tabpane")).forEach(e=>e.style.visibility="hidden")},m)})},handleDrag(e,t){const s=this.navList[e];s&&t.dataTransfer.setData("tab-name",s.name)},handleDrop(e,t){const s=this.navList[e];if(s){const e=t.dataTransfer.getData("tab-name");t.preventDefault();let a=this.navList.map(e=>e.name);const i=parseInt(a.findIndex(t=>t===e)),n=parseInt(a.findIndex(e=>e===s.name));a.splice(n,1,...a.splice(i,1,a[n])),this.$emit("on-drag-drop",e,s.name,i,n,a)}}},watch:{value(e){this.activeKey=e,this.focusedKey=e},activeKey(e){this.focusedKey=e,this.updateBar(),this.updateStatus(),this.broadcast("Table","on-visible-change",!0),this.$nextTick(()=>{this.scrollToActiveTab()});const t=Math.max(this.getTabIndex(this.focusedKey),0);this.updateVisibility(t)}},mounted(){this.showSlot=void 0!==this.$slots.extra,this.observer=d()(),this.observer.listenTo(this.$refs.navWrap,this.handleResize);const e=this.isInsideHiddenElement();e&&(this.mutationObserver=new c["a"](()=>{"none"!==e.style.display&&(this.updateBar(),this.mutationObserver.disconnect())}),this.mutationObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,attributeFilter:["style"]})),this.handleTabKeyboardSelect(!0),this.updateVisibility(this.getTabIndex(this.activeKey))},beforeDestroy(){this.observer.removeListener(this.$refs.navWrap,this.handleResize),this.mutationObserver&&this.mutationObserver.disconnect()}},v=b,y=s("e607"),_=Object(y["a"])(v,a,i,!1,null,null,null),x=_.exports,w=s("7c19");x.Pane=w["a"];t["a"]=x}}]);