(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-714719b8"],{"089ac":function(e,t,i){"use strict";i("c033")},5945:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("WaterMark",[t("Header"),t("Button",{staticClass:"mb-16",attrs:{type:"primary"},on:{click:e.showModal}},[e._v("添加巡检路线")]),t("Card",{attrs:{"dis-hover":"",bordered:!1}},[t("Table",{attrs:{stripe:"",columns:e.columns,data:e.list}}),t("ListFooter",[t("Page",{attrs:{"show-total":"","show-elevator":"","show-sizer":"","page-size":e.page_size,total:e.total,current:e.page_num},on:{"on-change":e.onPageChange,"on-page-size-change":e.onPageSizeChange}})],1)],1),t("Modal",{attrs:{title:e.editId?"修改巡检路线":"添加巡检路线"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("Form",{ref:"form",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[t("FormItem",{attrs:{prop:"name",label:"路线名称："}},[t("Input",{attrs:{placeholder:"请输入巡检路线名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("FormItem",{attrs:{prop:"description",label:"巡检路线描述："}},[t("Input",{attrs:{placeholder:"请输入巡检路线描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),t("FormItem",{attrs:{prop:"category_id",label:"巡检路线分类："}},[t("Select",{attrs:{placeholder:"请选择巡检路线分类",filterable:""},model:{value:e.form.category_id,callback:function(t){e.$set(e.form,"category_id",t)},expression:"form.category_id"}},e._l(e.options.category,(function(i){return t("Option",{key:i.id,attrs:{value:i.id}},[e._v(" "+e._s(i.name)+" "),i.description?[e._v("-"+e._s(i.description))]:e._e()],2)})),1)],1),t("FormItem",{attrs:{prop:"points",label:"巡检点位："}},[t("Select",{attrs:{placeholder:"请选择巡检点",multiple:"",filterable:""},model:{value:e.form.points,callback:function(t){e.$set(e.form,"points",t)},expression:"form.points"}},[e._l(e.options.point,(function(i){return[e.form.category_id===i.category_id?t("Option",{key:i.id,attrs:{value:i.id}},[e._v(" "+e._s(i.local)+" ")]):e._e()]}))],2)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{on:{click:e.hideModal}},[e._v("取消")]),t("Button",{attrs:{type:"primary",loading:e.submiting},on:{click:e.submit}},[e._v(e._s(e.editId?"更新":"确认"))])],1)],1),t("Drawer",{attrs:{title:`巡检路线「${e.detail.info.name}」详情`,transfer:"",width:"560","class-name":"cw-drawer-width-footer",closable:!1,"mask-closable":!1},model:{value:e.detailVisible,callback:function(t){e.detailVisible=t},expression:"detailVisible"}},[t("Row",{staticClass:"detail-row"},[t("Col",{attrs:{lg:12,sm:12,xs:24}},[t("span",{staticClass:"detail-label"},[e._v("巡检路线名称")]),t("div",{staticClass:"detail-content"},[e._v(" "+e._s(e.detail.info.name)+" ")])]),t("Col",{attrs:{lg:12,sm:12,xs:24}},[t("span",{staticClass:"detail-label"},[e._v("巡检路线描述")]),t("div",{staticClass:"detail-content"},[e._v(" "+e._s(e.detail.info.description)+" ")])]),t("Col",{attrs:{lg:12,sm:12,xs:24}},[t("span",{staticClass:"detail-label"},[e._v("巡检路线分类")]),t("div",{staticClass:"detail-content"},[e._v(" "+e._s(e.detail.info.category)+" ")])]),t("Col",{attrs:{lg:12,sm:12,xs:24}},[t("span",{staticClass:"detail-label"},[e._v("创建时间")]),t("div",{staticClass:"detail-content"},[e._v(" "+e._s(e._f("mom_format")(e.detail.info.created_at))+" ")])]),t("Col",{attrs:{lg:24,sm:24,xs:24}},[t("span",{staticClass:"detail-label"},[e._v("巡检点位")]),t("div",{staticClass:"detail-content"},[t("Timeline",{staticClass:"points"},e._l(e.detail.points,(function(i){return t("TimelineItem",{key:i.id},[e._v(" "+e._s(i.local)+" ")])})),1)],1)])],1),e.detailFetching?t("Spin",{attrs:{size:"large",fix:""}}):e._e(),t("div",{staticClass:"cw-drawer-footer"},[t("Button",{on:{click:e.closeDrawer}},[e._v("关闭")]),t("Button",{attrs:{type:"primary",loading:e.submiting},on:{click:e.update}},[e._v("修改")])],1)],1),e.fetching?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)},a=[],n=i("be5e"),r=i("9484"),l=i("39e3"),o=i("e4f2"),c=i("9d21"),u=i("13ab"),d=i("fee1"),h=i("e7c9"),p=i("5ca3"),g=i("545e"),m=i("88bd"),f=i("2af6"),_=i("4d77"),v=i("70a0"),P=i("3e79"),b=i("8c99"),y=i("7c0d"),x=(i("ed70"),i("7736")),C=i("2af9"),k=i("ed08"),w=i("2f42"),z=i.n(w),S=i("c6e7a"),I={name:"OaMissionLine",data(){return{fetching:!0,columns:[{title:"巡检路线名称",minWidth:120,key:"name"},{title:"巡检路线描述",minWidth:240,key:"description"},{title:"巡检路线分类",minWidth:140,key:"category"},{title:"创建时间",minWidth:120,render:(e,t)=>e("span",z()(t.row.created_at).format("YYYY-MM-DD HH:mm:ss"))},{title:"创建人",minWidth:120,render:(e,t)=>e("a",{on:{click:()=>this.$router.push("/oa/hr/colleague/detail/"+t.row.created_by)}},t.row.real_name)},{title:"操作",key:"id",minWidth:100,fixed:"right",render:(e,t)=>e("span",[e("a",{on:{click:()=>this.showDetail(t.row.id,t.index)}},"详细"),e("a",{on:{click:()=>this.delete(t.row.id,t.index)}},"删除")])}],visible:!1,editId:null,editIndex:-1,submiting:!1,form:{name:"",description:"",category_id:"",points:[]},rules:{name:[{required:!0,message:"请输入巡检路线名称"},{max:56,message:"巡检路线名称为不能大于56个字符"}],description:[{required:!0,message:"请输入巡检路线描述"},{max:256,message:"巡检路线描述不能大于256个字符"}],category_id:[{required:!0,type:"number",message:"请选择巡检路线归属分类"}],points:[{required:!0,type:"array",min:1,message:"请选择巡检点"}]},options:{category:[],point:[]},detail:{info:{},points:[]},detailVisible:!1,detailFetching:!1}},mounted(){this.postInfo.default_community_id&&this.getListData()},mixins:[S["a"]],methods:{getListData(){const{page_num:e,page_size:t}=this;this.fetching=!0;const i=()=>{k["i"].post("/mission_manage/line_list",{page_num:e,page_size:t,community_id:this.postInfo.default_community_id}).then(e=>{this.fetching=!1,this.page_num=e.data.page_num,this.page_size=e.data.page_size,this.list=e.data.list,this.total=e.data.total}).catch(()=>this.fetching=!1)};0===this.options.category.length?k["i"].post("/mission_manage/option",{community_id:this.postInfo.default_community_id}).then(e=>{this.options=e.data,i()}).catch(()=>this.fetching=!1):i()},showDetail(e,t){this.editId=e,this.editIndex=t,this.detailVisible=!0,this.detailFetching=!0,k["i"].post("/mission_manage/line_detail",{id:e,community_id:this.postInfo.default_community_id}).then(e=>{this.detail=e.data,this.detailFetching=!1}).catch(()=>this.detailFetching=!1)},closeDrawer(){this.detailVisible=!1},showModal(){this.editId=null,this.editIndex=-1,this.visible=!0},hideModal(){this.visible=!1},update(){this.form={name:this.detail.info.name,description:this.detail.info.description,category_id:this.detail.info.category_id,points:this.detail.points.map(e=>e.id)},this.detailVisible=!1,this.visible=!0},delete(e,t){y["a"].confirm({title:"请确认",content:`确认要删除「${this.list[t].name}」巡检路线吗？`,onOk:()=>{k["i"].post("/mission_manage/line_delete",{id:e,community_id:this.postInfo.default_community_id}).then(()=>{this.list.splice(t,1),b["a"].success("删除巡检路线成功")}).catch(()=>{})}})},submit(){this.$refs.form.validate(e=>{if(!e)return;this.submiting=!0;const t=e=>{const t=this.options.category.findIndex(t=>t.id===e.category_id);return this.options.category[t].name},i=()=>{this.form={name:"",description:"",category_id:"",points:[]},this.$refs.form.resetFields(),this.submiting=!1,this.visible=!1};this.editId?k["i"].post("/mission_manage/line_update",{...this.form,id:this.editId,community_id:this.postInfo.default_community_id}).then(()=>{const e=[].concat(this.list);e[this.editIndex]={...e[this.editIndex],...this.form,category:t(this.form)},this.list=e,i(),b["a"].success("修改巡检路线成功")}).catch(()=>this.submiting=!1):k["i"].post("/mission_manage/line_create",{...this.form,community_id:this.postInfo.default_community_id}).then(e=>{this.list.unshift({id:e.data.id,...this.form,category:t(this.form),created_at:e.data.created_at,created_by:this.userInfo.id,real_name:this.userInfo.real_name}),i(),b["a"].success("添加巡检路线成功")}).catch(()=>this.submiting=!1)})}},computed:{...Object(x["c"])({postInfo:"common/postInfo",userInfo:"common/userInfo"})},watch:{"postInfo.default_community_id"(){this.getListData()}},components:{Header:C["k"],ListFooter:C["n"],Card:P["a"],Page:v["a"],Spin:_["a"],Table:f["a"],Button:m["a"],Form:g["a"],FormItem:p["a"],Modal:y["a"],Input:h["a"],WaterMark:C["s"],Select:d["a"],Option:u["a"],Drawer:c["a"],Timeline:o["a"],TimelineItem:l["a"],Row:r["a"],Col:n["a"]}},$=I,O=(i("089ac"),i("e607")),B=Object(O["a"])($,s,a,!1,null,null,null);t["default"]=B.exports},"70a0":function(e,t,i){"use strict";var s=function(){var e=this,t=e._self._c;return e.simple?t("ul",{class:e.simpleWrapClasses,style:e.styles},[t("li",{class:e.prevClasses,attrs:{title:e.t("i.page.prev")},on:{click:e.prev}},[e._m(0)]),t("div",{class:e.simplePagerClasses,attrs:{title:e.currentPage+"/"+e.allPages}},[t("input",{attrs:{type:"text",autocomplete:"off",spellcheck:"false",disabled:e.disabled},domProps:{value:e.currentPage},on:{keydown:e.keyDown,keyup:e.keyUp,change:e.keyUp}}),t("span",[e._v("/")]),e._v(" "+e._s(e.allPages)+" ")]),t("li",{class:e.nextClasses,attrs:{title:e.t("i.page.next")},on:{click:e.next}},[e._m(1)])]):t("ul",{class:e.wrapClasses,style:e.styles},[e.showTotal?t("span",{class:[e.prefixCls+"-total"]},[e._t("default",(function(){return[e._v(e._s(e.t("i.page.total"))+" "+e._s(e.total)+" "),e.total<=1?[e._v(e._s(e.t("i.page.item")))]:[e._v(e._s(e.t("i.page.items")))]]}))],2):e._e(),t("li",{class:e.prevClasses,attrs:{title:e.t("i.page.prev")},on:{click:e.prev}},[t("a",[""!==e.prevText?[e._v(e._s(e.prevText))]:t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"})],2)]),t("li",{class:e.firstPageClasses,attrs:{title:"1"},on:{click:function(t){return e.changePage(1)}}},[t("a",[e._v("1")])]),e.currentPage>5?t("li",{class:[e.prefixCls+"-item-jump-prev"],attrs:{title:e.t("i.page.prev5")},on:{click:e.fastPrev}},[e._m(2)]):e._e(),5===e.currentPage?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-3},on:{click:function(t){return e.changePage(e.currentPage-3)}}},[t("a",[e._v(e._s(e.currentPage-3))])]):e._e(),e.currentPage-2>1?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-2},on:{click:function(t){return e.changePage(e.currentPage-2)}}},[t("a",[e._v(e._s(e.currentPage-2))])]):e._e(),e.currentPage-1>1?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage-1},on:{click:function(t){return e.changePage(e.currentPage-1)}}},[t("a",[e._v(e._s(e.currentPage-1))])]):e._e(),1!=e.currentPage&&e.currentPage!=e.allPages?t("li",{class:[e.prefixCls+"-item",e.prefixCls+"-item-active"],attrs:{title:e.currentPage}},[t("a",[e._v(e._s(e.currentPage))])]):e._e(),e.currentPage+1<e.allPages?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+1},on:{click:function(t){return e.changePage(e.currentPage+1)}}},[t("a",[e._v(e._s(e.currentPage+1))])]):e._e(),e.currentPage+2<e.allPages?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+2},on:{click:function(t){return e.changePage(e.currentPage+2)}}},[t("a",[e._v(e._s(e.currentPage+2))])]):e._e(),e.allPages-e.currentPage===4?t("li",{class:[e.prefixCls+"-item"],attrs:{title:e.currentPage+3},on:{click:function(t){return e.changePage(e.currentPage+3)}}},[t("a",[e._v(e._s(e.currentPage+3))])]):e._e(),e.allPages-e.currentPage>=5?t("li",{class:[e.prefixCls+"-item-jump-next"],attrs:{title:e.t("i.page.next5")},on:{click:e.fastNext}},[e._m(3)]):e._e(),e.allPages>1?t("li",{class:e.lastPageClasses,attrs:{title:e.allPages},on:{click:function(t){return e.changePage(e.allPages)}}},[t("a",[e._v(e._s(e.allPages))])]):e._e(),t("li",{class:e.nextClasses,attrs:{title:e.t("i.page.next")},on:{click:e.next}},[t("a",[""!==e.nextText?[e._v(e._s(e.nextText))]:t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"})],2)]),t("Options",{attrs:{"show-sizer":e.showSizer,"page-size":e.currentPageSize,"page-size-opts":e.pageSizeOpts,placement:e.placement,transfer:e.transfer,"show-elevator":e.showElevator,_current:e.currentPage,current:e.currentPage,disabled:e.disabled,"all-pages":e.allPages,"is-small":e.isSmall,eventsEnabled:e.eventsEnabled},on:{"on-size":e.onSize,"on-page":e.onPage}})],1)},a=[function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-back"}),t("i",{staticClass:"ivu-icon ivu-icon-ios-more"})])},function(){var e=this,t=e._self._c;return t("a",[t("i",{staticClass:"ivu-icon ivu-icon-ios-arrow-forward"}),t("i",{staticClass:"ivu-icon ivu-icon-ios-more"})])}],n=i("e4a4"),r=function(){var e=this,t=e._self._c;return e.showSizer||e.showElevator?t("div",{class:e.optsClasses},[e.showSizer?t("div",{class:e.sizerClasses},[t("i-select",{attrs:{size:e.size,placement:e.placement,transfer:e.transfer,disabled:e.disabled,eventsEnabled:e.eventsEnabled},on:{"on-change":e.changeSize},model:{value:e.currentPageSize,callback:function(t){e.currentPageSize=t},expression:"currentPageSize"}},e._l(e.pageSizeOpts,(function(i){return t("i-option",{key:i,staticStyle:{"text-align":"center"},attrs:{value:i}},[e._v(e._s(i)+" "+e._s(e.t("i.page.page")))])})),1)],1):e._e(),e.showElevator?t("div",{class:e.ElevatorClasses},[e._v(" "+e._s(e.t("i.page.goto"))+" "),t("input",{attrs:{type:"text",autocomplete:"off",spellcheck:"false",disabled:e.disabled},domProps:{value:e._current},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changePage.apply(null,arguments)}}}),e._v(" "+e._s(e.t("i.page.p"))+" ")]):e._e()]):e._e()},l=[],o=i("c01e"),c=i("4ff7"),u=i("e35f");const d="ivu-page";function h(e){return/^[1-9][0-9]*$/.test(e+"")}var p={name:"PageOption",mixins:[u["a"]],components:{iSelect:o["a"],iOption:c["a"]},props:{pageSizeOpts:Array,showSizer:Boolean,showElevator:Boolean,current:Number,_current:Number,pageSize:Number,allPages:Number,isSmall:Boolean,placement:String,transfer:Boolean,disabled:Boolean,eventsEnabled:Boolean},data(){return{currentPageSize:this.pageSize}},watch:{pageSize(e){this.currentPageSize=e}},computed:{size(){return this.isSmall?"small":"default"},optsClasses(){return[d+"-options"]},sizerClasses(){return[d+"-options-sizer"]},ElevatorClasses(){return[d+"-options-elevator"]}},methods:{changeSize(){this.$emit("on-size",this.currentPageSize)},changePage(e){let t=e.target.value.trim(),i=0;if(h(t)){if(t=Number(t),t!=this.current){const e=this.allPages;i=t>e?e:t}}else i=1;i&&(this.$emit("on-page",i),e.target.value=i)}}},g=p,m=i("e607"),f=Object(m["a"])(g,r,l,!1,null,null,null),_=f.exports;const v="ivu-page";var P={name:"Page",mixins:[u["a"]],components:{Options:_},props:{current:{type:Number,default:1},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageSizeOpts:{type:Array,default(){return[10,20,30,40]}},placement:{validator(e){return Object(n["m"])(e,["top","bottom"])},default:"bottom"},transfer:{type:Boolean,default(){return!(!this.$IVIEW||""===this.$IVIEW.transfer)&&this.$IVIEW.transfer}},size:{validator(e){return Object(n["m"])(e,["small","default"])}},simple:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showElevator:{type:Boolean,default:!1},showSizer:{type:Boolean,default:!1},className:{type:String},styles:{type:Object},prevText:{type:String,default:""},nextText:{type:String,default:""},disabled:{type:Boolean,default:!1},eventsEnabled:{type:Boolean,default:!1}},data(){return{prefixCls:v,currentPage:this.current,currentPageSize:this.pageSize}},watch:{total(e){let t=Math.ceil(e/this.currentPageSize);t<this.currentPage&&(this.currentPage=0===t?1:t)},current(e){this.currentPage=e},pageSize(e){this.currentPageSize=e}},computed:{isSmall(){return"small"===this.size},allPages(){const e=Math.ceil(this.total/this.currentPageSize);return 0===e?1:e},simpleWrapClasses(){return[""+v,v+"-simple",{[""+this.className]:!!this.className}]},simplePagerClasses(){return v+"-simple-pager"},wrapClasses(){return[""+v,{[""+this.className]:!!this.className,[v+"-with-disabled"]:this.disabled,mini:"small"===this.size}]},prevClasses(){return[v+"-prev",{[v+"-disabled"]:1===this.currentPage||this.disabled,[v+"-custom-text"]:""!==this.prevText}]},nextClasses(){return[v+"-next",{[v+"-disabled"]:this.currentPage===this.allPages||this.disabled,[v+"-custom-text"]:""!==this.nextText}]},firstPageClasses(){return[v+"-item",{[v+"-item-active"]:1===this.currentPage}]},lastPageClasses(){return[v+"-item",{[v+"-item-active"]:this.currentPage===this.allPages}]}},methods:{changePage(e){this.disabled||this.currentPage!=e&&(this.currentPage=e,this.$emit("update:current",e),this.$emit("on-change",e))},prev(){if(this.disabled)return;const e=this.currentPage;if(e<=1)return!1;this.changePage(e-1),this.$emit("on-prev",e-1)},next(){if(this.disabled)return;const e=this.currentPage;if(e>=this.allPages)return!1;this.changePage(e+1),this.$emit("on-next",e+1)},fastPrev(){if(this.disabled)return;const e=this.currentPage-5;e>0?this.changePage(e):this.changePage(1)},fastNext(){if(this.disabled)return;const e=this.currentPage+5;e>this.allPages?this.changePage(this.allPages):this.changePage(e)},onSize(e){this.disabled||(this.currentPageSize=e,this.$emit("on-page-size-change",e),this.changePage(1))},onPage(e){this.disabled||this.changePage(e)},keyDown(e){const t=e.keyCode,i=t>=48&&t<=57||t>=96&&t<=105||8===t||37===t||39===t;i||e.preventDefault()},keyUp(e){const t=e.keyCode,i=parseInt(e.target.value);if(38===t)this.prev();else if(40===t)this.next();else if(13===t){let t=1;t=i>this.allPages?this.allPages:i<=0||!i?1:i,e.target.value=t,this.changePage(t)}}}},b=P,y=Object(m["a"])(b,s,a,!1,null,null,null),x=y.exports;t["a"]=x},c033:function(e,t,i){},c6e7a:function(e,t,i){"use strict";i("ed70");var s=i("db49"),a=i("ed08");t["a"]={data(){return{page_num:1,total:0,page_size:s["c"],list:[]}},created(){this.updateFilters()},methods:{updateFilters(){if(this.page_num=this.$route.query.p?parseInt(this.$route.query.p,10):1,this.page_size=this.$route.query.s?parseInt(this.$route.query.s,10):s["c"],"object"===typeof this.filters){const e={...this.filters};for(let t in e)if(t in this.$route.query){const i=this.$route.query[t];/^\d+$/.test(i)?e[t]=parseInt(i,10):e[t]="true"===i||"false"===i?"true"===i:i}else e[t]=void 0;a["c"].vueSame(e,this.filters)||(this.filters=e)}},changeRouteQuery(){const e=["p="+this.page_num,"s="+this.page_size];if("object"===typeof this.filters)for(let t in this.filters)void 0!==this.filters[t]&&e.push(`${t}=${this.filters[t]}`);this.$router.push(`${this.$route.path}?${e.join("&")}`)},onPageChange(e){this.page_num=e,this.changeRouteQuery()},onPageSizeChange(e){this.page_num=1,this.page_size=e,this.changeRouteQuery()}},watch:{$route:{deep:!0,handler(){this.postInfo&&!this.postInfo.default_community_id||(this.updateFilters(),this.$nextTick(()=>{this.getListData()}))}}}}}}]);