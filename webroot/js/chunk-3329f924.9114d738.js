(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3329f924"],{"0fc7":function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{class:t.wrapClasses},[e("div",{class:[t.prefixCls+"-tail"]},[e("i")]),e("div",{class:[t.prefixCls+"-head"]},[e("div",{class:[t.prefixCls+"-head-inner"]},[t.icon||t.$slots.icon||"finish"===t.currentStatus||"error"===t.currentStatus?t.$slots.icon?e("span",{staticClass:"ivu-steps-icon"},[t._t("icon")],2):e("span",{class:t.iconClasses}):e("span",[t._v(t._s(t.stepNumber))])])]),e("div",{class:[t.prefixCls+"-main"]},[e("div",{class:[t.prefixCls+"-title"]},[t._t("title",(function(){return[t._v(t._s(t.title))]}))],2),t.content||t.$slots.content?e("div",{class:[t.prefixCls+"-content"]},[t._t("content",(function(){return[t._v(t._s(t.content))]}))],2):t._e()])])},i=[],n=r("ce17"),a=r("e4a4");const o="ivu-steps",c="ivu-icon";var u={name:"Step",mixins:[n["a"]],props:{status:{validator(t){return Object(a["m"])(t,["wait","process","finish","error"])}},title:{type:String,default:""},content:{type:String},icon:{type:String}},data(){return{prefixCls:o,stepNumber:"",nextError:!1,total:1,currentStatus:""}},computed:{wrapClasses(){return[o+"-item",`${o}-status-${this.currentStatus}`,{[o+"-custom"]:!!this.icon||!!this.$slots.icon,[o+"-next-error"]:this.nextError}]},iconClasses(){let t="";return this.icon?t=this.icon:"finish"===this.currentStatus?t="ios-checkmark":"error"===this.currentStatus&&(t="ios-close"),[o+"-icon",""+c,{[`${c}-${t}`]:""!==t}]}},watch:{status(t){this.currentStatus=t,"error"===this.currentStatus&&this.$parent.setNextError()}},created(){this.currentStatus=this.status},mounted(){this.dispatch("Steps","append")},beforeDestroy(){this.dispatch("Steps","remove")}},l=u,d=r("e607"),p=Object(d["a"])(l,s,i,!1,null,null,null);e["a"]=p.exports},"101d":function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{class:t.classes},[t._t("default")],2)},i=[],n=r("e4a4");const a="ivu-steps";function o(t){let e;return function(){if(e)return;e=!0;const r=this,s=arguments,i=function(){e=!1,t.apply(r,s)};this.$nextTick(i)}}var c={name:"Steps",props:{current:{type:Number,default:0},status:{validator(t){return Object(n["m"])(t,["wait","process","finish","error"])},default:"process"},size:{validator(t){return Object(n["m"])(t,["small"])}},direction:{validator(t){return Object(n["m"])(t,["horizontal","vertical"])},default:"horizontal"}},computed:{classes(){return[""+a,`${a}-${this.direction}`,{[`${a}-${this.size}`]:!!this.size}]}},methods:{updateChildProps(t){const e=this.$children.length;this.$children.forEach((r,s)=>{r.stepNumber=s+1,"horizontal"===this.direction&&(r.total=e),t&&r.currentStatus||(s===this.current?"error"!==this.status&&(r.currentStatus="process"):s<this.current?r.currentStatus="finish":r.currentStatus="wait"),"error"!==r.currentStatus&&0!==s&&(this.$children[s-1].nextError=!1)})},setNextError(){this.$children.forEach((t,e)=>{"error"===t.currentStatus&&0!==e&&(this.$children[e-1].nextError=!0)})},updateCurrent(t){if(!(this.current<0||this.current>=this.$children.length))if(t){const t=this.$children[this.current].currentStatus;t||(this.$children[this.current].currentStatus=this.status)}else this.$children[this.current].currentStatus=this.status},debouncedAppendRemove(){return o((function(){this.updateSteps()}))},updateSteps(){this.updateChildProps(!0),this.setNextError(),this.updateCurrent(!0)}},mounted(){this.updateSteps(),this.$on("append",this.debouncedAppendRemove()),this.$on("remove",this.debouncedAppendRemove())},watch:{current(){this.updateChildProps()},status(){this.updateCurrent()}}},u=c,l=r("e607"),d=Object(l["a"])(u,s,i,!1,null,null,null),p=d.exports,h=r("0fc7");p.Step=h["a"];e["a"]=p},"8ae2":function(t,e,r){"use strict";var s=r("0fc7");e["a"]=s["a"]},ac10:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;return e("WaterMark",[e("Header",{attrs:{back:""}}),e("Card",{attrs:{"dis-hover":"",bordered:!1}},[e("Steps",{attrs:{current:t.step}},[e("Step",{attrs:{title:"业主信息",content:"通过手机号查找业主"}}),e("Step",{attrs:{title:"车辆信息",content:"录入车辆信息"}}),e("Step",{attrs:{title:"录入成功",content:"添加车辆信息成功"}})],1),0===t.step?e("FindOwer",{on:{"on-find-owner":t.onFindOwer}}):t._e(),1===t.step?e("Form",{ref:"form",attrs:{model:t.form,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{title:"业主姓名："}},[t._v(" "+t._s(t.ownerInfo.real_name)+" ")]),e("FormField",{attrs:{title:"绑定房产：",prop:"building_id"}},[e("Select",{attrs:{placeholder:"请选择车位信息"},model:{value:t.form.building_id,callback:function(e){t.$set(t.form,"building_id",e)},expression:"form.building_id"}},t._l([].concat(t.ownerInfo.carports,t.ownerInfo.garages),(function(r){return e("Option",{key:r.building_id,attrs:{value:r.building_id}},[t._v(" "+t._s(t._f("building")(r))+" ")])})),1)],1),e("FormField",{attrs:{title:"是否新能源：",prop:"is_new_energy"}},[e("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:t.form.is_new_energy,callback:function(e){t.$set(t.form,"is_new_energy",e)},expression:"form.is_new_energy"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("否")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("是")])])],1),e("FormField",{attrs:{title:"车辆类型：",prop:"car_type"}},[e("RadioGroup",{model:{value:t.form.car_type,callback:function(e){t.$set(t.form,"car_type",e)},expression:"form.car_type"}},[e("Radio",{attrs:{label:1}},[t._v("7座及以下小客车/小型货车")]),e("Radio",{attrs:{label:2}},[t._v("7座以上客车/中大型货车")])],1)],1),e("FormField",{attrs:{title:"车牌号码：",prop:"car_number"}},[e("Input",{attrs:{placeholder:"请输入车牌号码"},model:{value:t.form.car_number,callback:function(e){t.$set(t.form,"car_number",e)},expression:"form.car_number"}})],1),e("div",{staticClass:"cw-form-actions"},[e("Button",{on:{click:t.preStep}},[t._v("上一步")]),e("Button",{attrs:{type:"primary",loading:t.submiting},on:{click:t.submit}},[t._v("下一步")])],1)],1):t._e(),2===t.step?e("Result",{attrs:{title:"录入车辆成功"}},[e("div",{attrs:{slot:"extra"},slot:"extra"},[e("p",[t._v("提醒业主勿占用他人车位。")]),e("p",[t._v("提醒业主停车不能占用消防通道。")])]),e("div",{attrs:{slot:"actions"},slot:"actions"},[e("Button",{attrs:{type:"primary"},on:{click:t.goDetail}},[t._v("查看车辆信息")])],1)]):t._e()],1)],1)},i=[],n=r("37a2"),a=r("2cce"),o=r("8100"),c=r("545e"),u=r("13ab"),l=r("fee1"),d=r("8ae2"),p=r("101d"),h=r("e7c9"),m=r("88bd"),f=r("3e79"),_=r("7736"),v=r("2af9"),b=r("ed08"),S=r("e49c"),g={name:"BasicCarCreate",data(){return{step:0,ownerInfo:{},form:{building_id:null,is_new_energy:0,car_type:1,car_number:""},rules:{building_id:[{required:!0,message:"请选择绑定房产"}],is_new_energy:[{required:!0,message:"请选择是否新能源车辆"}],car_type:[{required:!0,message:"请选择车辆类型"}],car_number:[{required:!0,message:"请输入车牌号码"},{pattern:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9]{0,1}[A-Z0-9挂学警港澳]{0,1}$/,message:"请输入正确的车牌号码"}]},insertId:null,submiting:!1}},mixins:[S["a"]],methods:{preStep(){this.step--},onFindOwer(t){this.ownerInfo=t,this.step++},submit(){this.$refs.form.validate(t=>{if(!t)return;this.submiting=!0;const e={...this.form,community_id:this.postInfo.default_community_id,wechat_mp_user_id:this.ownerInfo.id};b["i"].post("/car/create",e).then(t=>{this.submiting=!1,this.insertId=t.data.id,this.step++}).catch(()=>this.submiting=!1)})},goDetail(){this.$router.replace("/basic/car/detail/"+this.insertId)}},computed:{...Object(_["c"])({postInfo:"common/postInfo"})},components:{FindOwer:v["i"],Header:v["k"],Card:f["a"],Button:m["a"],Input:h["a"],Result:v["q"],Steps:p["a"],Step:d["a"],Select:l["a"],Option:u["a"],FormField:v["j"],Form:c["a"],Radio:o["a"],RadioGroup:a["a"],OSwitch:n["a"],WaterMark:v["s"]}},w=g,$=r("e607"),x=Object($["a"])(w,s,i,!1,null,null,null);e["default"]=x.exports}}]);