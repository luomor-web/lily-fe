(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7968a3a"],{"0122":function(t,e,s){t.exports=s.p+"img/list.32d64d49.jpg"},"0fc7":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{class:t.wrapClasses},[e("div",{class:[t.prefixCls+"-tail"]},[e("i")]),e("div",{class:[t.prefixCls+"-head"]},[e("div",{class:[t.prefixCls+"-head-inner"]},[t.icon||t.$slots.icon||"finish"===t.currentStatus||"error"===t.currentStatus?t.$slots.icon?e("span",{staticClass:"ivu-steps-icon"},[t._t("icon")],2):e("span",{class:t.iconClasses}):e("span",[t._v(t._s(t.stepNumber))])])]),e("div",{class:[t.prefixCls+"-main"]},[e("div",{class:[t.prefixCls+"-title"]},[t._t("title",(function(){return[t._v(t._s(t.title))]}))],2),t.content||t.$slots.content?e("div",{class:[t.prefixCls+"-content"]},[t._t("content",(function(){return[t._v(t._s(t.content))]}))],2):t._e()])])},r=[],n=s("ce17"),a=s("e4a4");const o="ivu-steps",c="ivu-icon";var u={name:"Step",mixins:[n["a"]],props:{status:{validator(t){return Object(a["m"])(t,["wait","process","finish","error"])}},title:{type:String,default:""},content:{type:String},icon:{type:String}},data(){return{prefixCls:o,stepNumber:"",nextError:!1,total:1,currentStatus:""}},computed:{wrapClasses(){return[o+"-item",`${o}-status-${this.currentStatus}`,{[o+"-custom"]:!!this.icon||!!this.$slots.icon,[o+"-next-error"]:this.nextError}]},iconClasses(){let t="";return this.icon?t=this.icon:"finish"===this.currentStatus?t="ios-checkmark":"error"===this.currentStatus&&(t="ios-close"),[o+"-icon",""+c,{[`${c}-${t}`]:""!==t}]}},watch:{status(t){this.currentStatus=t,"error"===this.currentStatus&&this.$parent.setNextError()}},created(){this.currentStatus=this.status},mounted(){this.dispatch("Steps","append")},beforeDestroy(){this.dispatch("Steps","remove")}},l=u,d=s("e607"),p=Object(d["a"])(l,i,r,!1,null,null,null);e["a"]=p.exports},"101d":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{class:t.classes},[t._t("default")],2)},r=[],n=s("e4a4");const a="ivu-steps";function o(t){let e;return function(){if(e)return;e=!0;const s=this,i=arguments,r=function(){e=!1,t.apply(s,i)};this.$nextTick(r)}}var c={name:"Steps",props:{current:{type:Number,default:0},status:{validator(t){return Object(n["m"])(t,["wait","process","finish","error"])},default:"process"},size:{validator(t){return Object(n["m"])(t,["small"])}},direction:{validator(t){return Object(n["m"])(t,["horizontal","vertical"])},default:"horizontal"}},computed:{classes(){return[""+a,`${a}-${this.direction}`,{[`${a}-${this.size}`]:!!this.size}]}},methods:{updateChildProps(t){const e=this.$children.length;this.$children.forEach((s,i)=>{s.stepNumber=i+1,"horizontal"===this.direction&&(s.total=e),t&&s.currentStatus||(i===this.current?"error"!==this.status&&(s.currentStatus="process"):i<this.current?s.currentStatus="finish":s.currentStatus="wait"),"error"!==s.currentStatus&&0!==i&&(this.$children[i-1].nextError=!1)})},setNextError(){this.$children.forEach((t,e)=>{"error"===t.currentStatus&&0!==e&&(this.$children[e-1].nextError=!0)})},updateCurrent(t){if(!(this.current<0||this.current>=this.$children.length))if(t){const t=this.$children[this.current].currentStatus;t||(this.$children[this.current].currentStatus=this.status)}else this.$children[this.current].currentStatus=this.status},debouncedAppendRemove(){return o((function(){this.updateSteps()}))},updateSteps(){this.updateChildProps(!0),this.setNextError(),this.updateCurrent(!0)}},mounted(){this.updateSteps(),this.$on("append",this.debouncedAppendRemove()),this.$on("remove",this.debouncedAppendRemove())},watch:{current(){this.updateChildProps()},status(){this.updateCurrent()}}},u=c,l=s("e607"),d=Object(l["a"])(u,i,r,!1,null,null,null),p=d.exports,h=s("0fc7");p.Step=h["a"];e["a"]=p},"8ae2":function(t,e,s){"use strict";var i=s("0fc7");e["a"]=i["a"]},bb93:function(t,e,s){t.exports=s.p+"img/home.a1d820a2.jpg"},c423:function(t,e,s){t.exports=s.p+"img/qrcode.cf98786f.jpg"},cc2a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("WaterMark",{staticClass:"owner-approve"},[e("Header",{attrs:{back:""}}),e("Card",{attrs:{"dis-hover":"",bordered:!1}},[e("Steps",{attrs:{current:t.step}},[e("Step",{attrs:{title:"业主注册",content:"引导业主注册「e家宜业」小程序"}}),e("Step",{attrs:{title:"房产",content:"核实并录入房产信息"}}),e("Step",{attrs:{title:"扫码绑定",content:"业主扫描认证二维码完成绑定"}})],1),0===t.step?e("div",{staticClass:"help"},[e("RadioGroup",{model:{value:t.is_old_user,callback:function(e){t.is_old_user=e},expression:"is_old_user"}},[e("Radio",{attrs:{label:0}},[t._v("新用户注册引导")]),e("Radio",{attrs:{label:1}},[t._v("已注册用户认证引导")])],1),t.is_old_user?e("Row",[e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("c423")}}),e("p",[t._v("a).引导业主使用微信扫描「二维码」")])]),e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("bb93")}}),e("p",[t._v("b).请业主点击首页中「小区设置」按钮")])]),e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("0122")}}),e("p",[t._v("c).请业主点击下方「添加住宅」按钮")])]),e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("e429")}}),e("p",[t._v("d).请业主点击「物业公司认证住宅」扫描稍后生成的二维码")])])],1):e("Row",[e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("c423")}}),e("p",[t._v("a).引导业主使用微信扫描「二维码」")])]),e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("c7bb")}}),e("p",[t._v("b).请业主点击「登录」授权")])]),e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("77cc")}}),e("p",[t._v("c).请业主如实完成身份信息认证")])]),e("Col",{attrs:{lg:6,sm:12,xs:24}},[e("img",{attrs:{src:s("e429")}}),e("p",[t._v("d).请业主点击「物业公司认证住宅」扫描稍后生成的二维码")])])],1),e("div",{staticClass:"cw-form-actions"},[e("Button",{attrs:{type:"primary",loading:t.getting},on:{click:t.getBuilding}},[t._v("下一步")])],1)],1):t._e(),1===t.step?e("div",{staticClass:"ivu-form"},[e("Form",{ref:"form",attrs:{model:t.form,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{title:"小区名称："}},[t._v(t._s(t.community_name))]),e("FormField",{attrs:{title:"业主房产：",prop:"building_ids"}},[e("Select",{attrs:{multiple:"",placeholder:"请选择业主房产",filterable:""},model:{value:t.form.building_ids,callback:function(e){t.$set(t.form,"building_ids",e)},expression:"form.building_ids"}},t._l(t.buildingList,(function(s){return e("Option",{key:s.building_id,attrs:{value:s.building_id}},[t._v(" "+t._s(t._f("building")(s))+" ")])})),1)],1)],1),e("div",{staticClass:"cw-form-actions"},[e("Button",{on:{click:t.preStep}},[t._v("上一步")]),e("Button",{attrs:{type:"primary",loading:t.fetching},on:{click:t.getQrcode}},[t._v("下一步")])],1)],1):t._e(),2===t.step?e("div",{staticClass:"qrocde-qrapper"},[e("div",{staticClass:"qrcode"},[e("canvas",{ref:"canvas",staticClass:"mg-auto"}),t.expired?e("div",{staticClass:"mask"},[t._v("二维码已过期")]):t._e()]),e("p",[t._v(t._s(t.expireText))]),t.expired?t._e():e("p",[t._v("二维码有效期内，一码可供多位业主使用")]),e("div",{staticClass:"cw-form-actions"},[e("Button",{on:{click:t.preStep}},[t._v("上一步")])],1)]):t._e()],1)],1)},r=[],n=s("2cce"),a=s("8100"),o=s("be5e"),c=s("9484"),u=s("545e"),l=s("13ab"),d=s("fee1"),p=s("8ae2"),h=s("101d"),m=s("88bd"),f=s("3e79"),v=s("4c91"),_=s("7736"),g=s("2af9"),b=s("ed08"),x=s("e49c"),C=s("1e7f"),S=s.n(C),$=s("2f42"),w=s.n($),y={name:"BasicOwerApprove",data(){return{step:0,is_old_user:0,buildingList:[],form:{building_ids:[]},rules:{building_ids:[{required:!0,type:"array",message:"请选择业主所有房产"}]},getting:!1,fetching:!1,expired:!1,expireText:""}},mixins:[x["a"]],destroyed(){clearInterval(this.timer)},methods:{preStep(){clearInterval(this.timer),this.step--},getBuilding(){if(this.buildingList.length>0)return this.step++;this.getting=!0,b["i"]({url:"/option/building",data:{community_id:this.postInfo.default_community_id},method:"post"}).then(t=>{this.buildingList=t.data.list,this.step++,this.getting=!1}).catch(()=>this.getting=!1)},getQrcode(){this.$refs.form.validate(t=>{t&&(this.fetching=!0,b["i"]({url:"/owner/approve",data:{community_id:this.postInfo.default_community_id,...this.form},method:"post"}).then(t=>{this.expired=!1,this.expireText="",this.step++,this.fetching=!1,this.$nextTick(()=>{S.a.toCanvas(this.$refs.canvas,t.data.text,{width:220,height:220,margin:2}),this.startCountdown(t.data.stamp,t.data.expire)})}).catch(()=>this.fetching=!1))})},startCountdown(t,e){this.timer=setInterval(()=>{e<=Date.now()-t?(this.expireText="",this.expired=!0,clearInterval(this.timer)):this.expireText=w()(e-(Date.now()-t)).format("mm:ss")+"后过期"},1e3)}},computed:{...Object(_["c"])({postInfo:"common/postInfo"}),community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name}},components:{Alert:v["a"],Header:g["k"],Card:f["a"],Button:m["a"],Steps:h["a"],Step:p["a"],Select:d["a"],Option:l["a"],FormField:g["j"],Form:u["a"],Row:c["a"],Col:o["a"],Radio:a["a"],WaterMark:g["s"],RadioGroup:n["a"]}},k=y,j=(s("dbf3"),s("e607")),I=Object(j["a"])(k,i,r,!1,null,null,null);e["default"]=I.exports},dbf3:function(t,e,s){"use strict";s("ea17")},e429:function(t,e,s){t.exports=s.p+"img/approve.8dd665f2.jpg"},ea17:function(t,e,s){}}]);