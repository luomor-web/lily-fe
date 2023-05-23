(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26d66dbf"],{"0fc7":function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{class:t.wrapClasses},[e("div",{class:[t.prefixCls+"-tail"]},[e("i")]),e("div",{class:[t.prefixCls+"-head"]},[e("div",{class:[t.prefixCls+"-head-inner"]},[t.icon||t.$slots.icon||"finish"===t.currentStatus||"error"===t.currentStatus?t.$slots.icon?e("span",{staticClass:"ivu-steps-icon"},[t._t("icon")],2):e("span",{class:t.iconClasses}):e("span",[t._v(t._s(t.stepNumber))])])]),e("div",{class:[t.prefixCls+"-main"]},[e("div",{class:[t.prefixCls+"-title"]},[t._t("title",(function(){return[t._v(t._s(t.title))]}))],2),t.content||t.$slots.content?e("div",{class:[t.prefixCls+"-content"]},[t._t("content",(function(){return[t._v(t._s(t.content))]}))],2):t._e()])])},a=[],i=r("ce17"),n=r("e4a4");const o="ivu-steps",c="ivu-icon";var l={name:"Step",mixins:[i["a"]],props:{status:{validator(t){return Object(n["m"])(t,["wait","process","finish","error"])}},title:{type:String,default:""},content:{type:String},icon:{type:String}},data(){return{prefixCls:o,stepNumber:"",nextError:!1,total:1,currentStatus:""}},computed:{wrapClasses(){return[o+"-item",`${o}-status-${this.currentStatus}`,{[o+"-custom"]:!!this.icon||!!this.$slots.icon,[o+"-next-error"]:this.nextError}]},iconClasses(){let t="";return this.icon?t=this.icon:"finish"===this.currentStatus?t="ios-checkmark":"error"===this.currentStatus&&(t="ios-close"),[o+"-icon",""+c,{[`${c}-${t}`]:""!==t}]}},watch:{status(t){this.currentStatus=t,"error"===this.currentStatus&&this.$parent.setNextError()}},created(){this.currentStatus=this.status},mounted(){this.dispatch("Steps","append")},beforeDestroy(){this.dispatch("Steps","remove")}},p=l,u=r("e607"),d=Object(u["a"])(p,s,a,!1,null,null,null);e["a"]=d.exports},"101d":function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{class:t.classes},[t._t("default")],2)},a=[],i=r("e4a4");const n="ivu-steps";function o(t){let e;return function(){if(e)return;e=!0;const r=this,s=arguments,a=function(){e=!1,t.apply(r,s)};this.$nextTick(a)}}var c={name:"Steps",props:{current:{type:Number,default:0},status:{validator(t){return Object(i["m"])(t,["wait","process","finish","error"])},default:"process"},size:{validator(t){return Object(i["m"])(t,["small"])}},direction:{validator(t){return Object(i["m"])(t,["horizontal","vertical"])},default:"horizontal"}},computed:{classes(){return[""+n,`${n}-${this.direction}`,{[`${n}-${this.size}`]:!!this.size}]}},methods:{updateChildProps(t){const e=this.$children.length;this.$children.forEach((r,s)=>{r.stepNumber=s+1,"horizontal"===this.direction&&(r.total=e),t&&r.currentStatus||(s===this.current?"error"!==this.status&&(r.currentStatus="process"):s<this.current?r.currentStatus="finish":r.currentStatus="wait"),"error"!==r.currentStatus&&0!==s&&(this.$children[s-1].nextError=!1)})},setNextError(){this.$children.forEach((t,e)=>{"error"===t.currentStatus&&0!==e&&(this.$children[e-1].nextError=!0)})},updateCurrent(t){if(!(this.current<0||this.current>=this.$children.length))if(t){const t=this.$children[this.current].currentStatus;t||(this.$children[this.current].currentStatus=this.status)}else this.$children[this.current].currentStatus=this.status},debouncedAppendRemove(){return o((function(){this.updateSteps()}))},updateSteps(){this.updateChildProps(!0),this.setNextError(),this.updateCurrent(!0)}},mounted(){this.updateSteps(),this.$on("append",this.debouncedAppendRemove()),this.$on("remove",this.debouncedAppendRemove())},watch:{current(){this.updateChildProps()},status(){this.updateCurrent()}}},l=c,p=r("e607"),u=Object(p["a"])(l,s,a,!1,null,null,null),d=u.exports,m=r("0fc7");d.Step=m["a"];e["a"]=d},"8ae2":function(t,e,r){"use strict";var s=r("0fc7");e["a"]=s["a"]},dc5f:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;return e("WaterMark",[e("Header",{attrs:{back:""}}),e("Card",{attrs:{"dis-hover":"",bordered:!1}},[e("Steps",{attrs:{current:t.step}},[e("Step",{attrs:{title:"业主信息",content:"通过手机号查找业主"}}),e("Step",{attrs:{title:"宠物信息",content:"录入宠物信息"}}),e("Step",{attrs:{title:"建档成功",content:"档案创建完成"}})],1),0===t.step?e("FindOwer",{on:{"on-find-owner":t.onFindOwer}}):t._e(),1===t.step?e("Form",{ref:"form",attrs:{model:t.form,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{title:"业主姓名："}},[t._v(t._s(t.ownerInfo.real_name))]),e("FormField",{attrs:{title:"宠物种类：",prop:"pet_type"}},[e("Input",{attrs:{value:"犬",readonly:""}})],1),e("FormField",{attrs:{title:"宠物名称：",prop:"name"}},[e("Input",{attrs:{placeholder:"请输入宠物名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("FormField",{attrs:{title:"雌雄：",prop:"sex"}},[e("RadioGroup",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}},[e("Radio",{attrs:{label:0}},[t._v("雌")]),e("Radio",{attrs:{label:1}},[t._v("雄")])],1)],1),e("FormField",{attrs:{title:"宠物照片：",prop:"photo"}},[e("AvatarCrop",{attrs:{width:300,height:200,title:"宠物照片裁剪",text:"上传照片",updateText:"修改照片",dir:"pet",previewContainer:{width:150,height:100}},model:{value:t.form.photo,callback:function(e){t.$set(t.form,"photo",e)},expression:"form.photo"}})],1),e("FormField",{attrs:{title:"宠物毛色：",prop:"coat_color"}},[e("Input",{attrs:{placeholder:"请输入宠物毛色"},model:{value:t.form.coat_color,callback:function(e){t.$set(t.form,"coat_color",e)},expression:"form.coat_color"}})],1),e("FormField",{attrs:{title:"宠物品种：",prop:"breed"}},[e("Input",{attrs:{placeholder:"请输入宠物品种"},model:{value:t.form.breed,callback:function(e){t.$set(t.form,"breed",e)},expression:"form.breed"}})],1),e("FormField",{attrs:{title:"已办理宠物登记证：",prop:"haveLicense"}},[e("OSwitch",{model:{value:t.form.haveLicense,callback:function(e){t.$set(t.form,"haveLicense",e)},expression:"form.haveLicense"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("否")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("是")])])],1),t.form.haveLicense?e("FormField",{attrs:{title:"证书编号：",prop:"pet_license"}},[e("Input",{attrs:{placeholder:"请输入证书编号"},model:{value:t.form.pet_license,callback:function(e){t.$set(t.form,"pet_license",e)},expression:"form.pet_license"}})],1):t._e(),t.form.haveLicense?e("FormField",{attrs:{title:"发证日期：",prop:"pet_license_award_at"}},[e("DatePicker",{attrs:{placeholder:"请选择发证日期"},model:{value:t.form.pet_license_award_at,callback:function(e){t.$set(t.form,"pet_license_award_at",e)},expression:"form.pet_license_award_at"}})],1):t._e(),t.form.haveLicense?e("FormField",{attrs:{title:"接种日期：",prop:"vaccinated_at"}},[e("DatePicker",{attrs:{placeholder:"请选择接种日期"},model:{value:t.form.vaccinated_at,callback:function(e){t.$set(t.form,"vaccinated_at",e)},expression:"form.vaccinated_at"}})],1):t._e(),t.form.haveLicense?e("FormField",{attrs:{title:"疫苗类型：",prop:"vaccine_type"}},[e("Input",{attrs:{placeholder:"请输入疫苗类型"},model:{value:t.form.vaccine_type,callback:function(e){t.$set(t.form,"vaccine_type",e)},expression:"form.vaccine_type"}})],1):t._e(),e("div",{staticClass:"cw-form-actions"},[e("Button",{on:{click:t.preStep}},[t._v("上一步")]),e("Button",{attrs:{type:"primary",loading:t.submiting},on:{click:t.submit}},[t._v("下一步")])],1)],1):t._e(),2===t.step?e("Result",{attrs:{title:"宠物档案登记成功"}},[e("div",{attrs:{slot:"extra"},slot:"extra"},[e("p",[t._v("提醒业主按时录入疫苗接种信息。")]),e("p",[t._v("遛狗需要纤绳。")]),e("p",[t._v("注意公共环境卫生。")])]),e("div",{attrs:{slot:"actions"},slot:"actions"},[e("Button",{attrs:{type:"primary"},on:{click:t.goDetail}},[t._v("查看宠物信息")])],1)]):t._e()],1)],1)},a=[],i=r("13ab"),n=r("fee1"),o=r("8ae2"),c=r("101d"),l=r("6339"),p=r("2cce"),u=r("8100"),d=r("37a2"),m=r("e7c9"),h=r("88bd"),f=r("545e"),_=r("3e79"),v=(r("ed70"),r("7736")),b=r("2af9"),x=r("ed08"),S=r("e49c"),w={name:"BasicPetCreate",data(){return{step:0,ownerInfo:{},labelWidth:160,submiting:!1,form:{pet_type:1,name:"",sex:void 0,photo:"",coat_color:"",breed:"",haveLicense:!1,pet_license:"",pet_license_award_at:"",vaccinated_at:"",vaccine_type:""},rules:{pet_type:[{required:!0,message:"请选择宠物类型"}],name:[{required:!0,message:"请输入宠物名"},{max:12,message:"宠物名不能超过12个字"}],sex:[{required:!0,type:"number",message:"请选择宠物雌雄"}],photo:[{required:!0,message:"请上传宠物照片"}],coat_color:[{required:!0,message:"请输入宠物毛色"},{max:10,message:"宠物毛色不能超过10个字"}],breed:[{required:!0,message:"请输入宠物品种"},{max:20,message:"宠物品种不能超过20个字"}],pet_license:[{message:"请输入证书编号",required:!0},{max:40,message:"证书编号不能超过40个字"}],pet_license_award_at:[{message:"请选择发证日期",required:!0,type:"date"}],vaccinated_at:[{message:"请选择最近一次疫苗接种日期",required:!0,type:"date"}],vaccine_type:[{required:!0,message:"请输入疫苗类型"},{max:32,message:"疫苗类型不能超过32个字"}]},insertId:null}},methods:{preStep(){this.step--},onFindOwer(t){this.ownerInfo=t,this.step++},submit(){this.$refs.form.validate(t=>{if(!t)return;this.submiting=!0;const e={...this.form,user_id:this.ownerInfo.id,community_id:this.postInfo.default_community_id};e.pet_license_award_at=e.pet_license_award_at?+e.pet_license_award_at:void 0,e.vaccinated_at=e.vaccinated_at?+e.vaccinated_at:void 0,x["i"]({url:"/pet/create",method:"post",data:e}).then(t=>{this.insertId=t.data.id,this.submiting=!1,this.step++},()=>{this.submiting=!1})})},goDetail(){this.$router.push("/basic/pet/detail/"+this.insertId)}},computed:{...Object(v["c"])({postInfo:"common/postInfo"})},mixins:[S["a"]],components:{FindOwer:b["i"],FormField:b["j"],Header:b["k"],Card:_["a"],Form:f["a"],Button:h["a"],Input:m["a"],Result:b["q"],OSwitch:d["a"],Radio:u["a"],RadioGroup:p["a"],AvatarCrop:b["b"],DatePicker:l["a"],Steps:c["a"],Step:o["a"],Select:n["a"],Option:i["a"],WaterMark:b["s"]}},$=w,F=r("e607"),g=Object(F["a"])($,s,a,!1,null,null,null);e["default"]=g.exports}}]);