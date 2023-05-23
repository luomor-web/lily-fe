(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-825404aa"],{"27b7":function(t,e,i){"use strict";var r=function(){var t=this,e=t._self._c;return e("WaterMark",{staticClass:"contract-editor"},[e("Card",{attrs:{"dis-hover":"",bordered:!1,title:"合同信息"}},[e("Form",{ref:"form",attrs:{model:t.form,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{title:"所在小区："}},[t._v(t._s(t.community_name)+"小区")]),e("FormField",{attrs:{title:"合同名称：",prop:"title",width:"300"}},[e("Input",{attrs:{placeholder:"请输入合同名称"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormField",{attrs:{title:"甲方：",prop:"first_party",width:"300"}},[e("Input",{attrs:{placeholder:"请输入甲方称呼"},model:{value:t.form.first_party,callback:function(e){t.$set(t.form,"first_party",e)},expression:"form.first_party"}})],1),e("FormField",{attrs:{title:"甲方联系人：",prop:"first_party_linkman",width:"180"}},[e("Input",{attrs:{placeholder:"请输入甲方联系人"},model:{value:t.form.first_party_linkman,callback:function(e){t.$set(t.form,"first_party_linkman",e)},expression:"form.first_party_linkman"}})],1),e("FormField",{attrs:{title:"甲方联系电话：",prop:"first_party_phone",width:"220"}},[e("Input",{attrs:{placeholder:"请输入甲方联系电话"},model:{value:t.form.first_party_phone,callback:function(e){t.$set(t.form,"first_party_phone",e)},expression:"form.first_party_phone"}})],1),e("FormField",{attrs:{title:"乙方系业主：",prop:"is_owner"}},[e("OSwitch",{model:{value:t.form.is_owner,callback:function(e){t.$set(t.form,"is_owner",e)},expression:"form.is_owner"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("否")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("是")])])],1),t.form.is_owner?t._e():e("FormField",{attrs:{title:"乙方：",prop:"second_party",width:"300"}},[e("Input",{attrs:{placeholder:"请输入乙方称呼"},model:{value:t.form.second_party,callback:function(e){t.$set(t.form,"second_party",e)},expression:"form.second_party"}})],1),t.form.is_owner?t._e():e("FormField",{attrs:{title:"乙方联系人：",prop:"second_party_linkman",width:"180"}},[e("Input",{attrs:{placeholder:"请输入乙方联系人"},model:{value:t.form.second_party_linkman,callback:function(e){t.$set(t.form,"second_party_linkman",e)},expression:"form.second_party_linkman"}})],1),t.form.is_owner?t._e():e("FormField",{attrs:{title:"乙方联系电话：",prop:"second_party_phone",width:"220"}},[e("Input",{attrs:{placeholder:"请输入乙方联系电话"},model:{value:t.form.second_party_phone,callback:function(e){t.$set(t.form,"second_party_phone",e)},expression:"form.second_party_phone"}})],1),t.form.is_owner?e("FormField",{attrs:{title:"乙方业主电话：",prop:"owner_phone",width:"300"}},[e("Input",{staticClass:"user-input",attrs:{prefix:"ios-contact",readonly:t.ownerFetching,suffix:t.ownerFetching?"ios-loading":"",placeholder:"请输入业主手机号码"},model:{value:t.form.owner_phone,callback:function(e){t.$set(t.form,"owner_phone",e)},expression:"form.owner_phone"}})],1):t._e(),t.form.is_owner?e("FormField",{attrs:{title:"乙方业主姓名：",prop:"second_party_wechat_mp_user_id",width:"300"}},[t.form.second_party_wechat_mp_user_id?e("span",[t._v(t._s(t.ownerInfo.real_name))]):e("span",[t._v("-")])]):t._e(),e("FormField",{attrs:{title:"合同类别：",prop:"category_id",width:"220"}},[e("Select",{attrs:{placeholder:"请选择合同类别"},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}},t._l(t.options,(function(i){return e("Option",{key:i.id,attrs:{value:i.id}},[t._v(" "+t._s(i.name)+" "),i.description?[t._v("-"+t._s(i.description))]:t._e()],2)})),1)],1),e("FormField",{attrs:{title:"合同开始时间：",prop:"begin_time"}},[e("DatePicker",{attrs:{placeholder:"请选择合同开始时间",options:{disabledDate:t=>+t<Date.now()}},model:{value:t.form.begin_time,callback:function(e){t.$set(t.form,"begin_time",e)},expression:"form.begin_time"}})],1),e("FormField",{attrs:{title:"合同结束时间：",prop:"finish_time"}},[e("DatePicker",{attrs:{placeholder:"请选择合同结束时间",options:{disabledDate:t=>+t<Date.now()}},model:{value:t.form.finish_time,callback:function(e){t.$set(t.form,"finish_time",e)},expression:"form.finish_time"}})],1),e("FormField",{attrs:{title:"合同金额：",prop:"contract_fee",width:"300"}},[e("Input",{attrs:{readonly:""},model:{value:t.form.contract_fee,callback:function(e){t.$set(t.form,"contract_fee",e)},expression:"form.contract_fee"}})],1)],1)],1),e("Card",{staticClass:"mt-16",attrs:{"dis-hover":"",bordered:!1,title:"合同项目"}},[e("a",{attrs:{slot:"extra"},on:{click:t.addItem},slot:"extra"},[e("Icon",{attrs:{type:"ios-add-circle-outline"}}),t._v(" 添加项目 ")],1),t._l(t.items,(function(i,r){return e("div",{key:r,staticClass:"item"},[e("ContractItemEditor",{ref:"item",refInFor:!0,attrs:{detail:i,index:r+1,isOwer:t.form.is_owner,options:t.ownerInfo.id?[].concat(t.ownerInfo.houses,t.ownerInfo.merchants,t.ownerInfo.carports,t.ownerInfo.garages,t.ownerInfo.warehouses):[]},model:{value:t.items[r],callback:function(e){t.$set(t.items,r,e)},expression:"items[key]"}}),e("a",{staticClass:"remove",on:{click:function(e){return t.removeItem(r)}}},[e("Icon",{attrs:{type:"ios-trash-outline"}}),t._v(" 删除项目"+t._s(r+1)+" ")],1)],1)}))],2),e("div",{staticClass:"cw-form-actions"},[e("Button",{attrs:{type:"primary",loading:t.submiting},on:{click:t.submit}},[t._v(t._s(t.update?"修改合同":"创建合同"))])],1)],1)},o=[],n=i("13ab"),a=i("fee1"),s=i("37a2"),m=i("4b1c"),l=i("6339"),d=i("e7c9"),_=i("545e"),c=i("88bd"),p=i("3e79"),f=i("8c99"),u=(i("00e5"),i("ed70"),i("7736")),h=i("2af9"),y=i("e49c"),g=i("ed08"),w=function(){var t=this,e=t._self._c;return e("div",[e("h4",[t._v("合同项目（"+t._s(t.index)+"）信息")]),e("Form",{ref:"form",attrs:{model:t.form,"label-position":t.mlabelPostion,"label-width":t.mlabelWidth,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormField",{attrs:{title:"项目名称：",prop:"title",width:"300"}},[e("Input",{attrs:{placeholder:"请输入项目名称"},on:{"on-change":t.trigger},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormField",{attrs:{title:"项目备注：",prop:"descritpion"}},[e("Input",{attrs:{type:"textarea",placeholder:"请输入项目备注"},on:{"on-change":t.trigger},model:{value:t.form.descritpion,callback:function(e){t.$set(t.form,"descritpion",e)},expression:"form.descritpion"}})],1),t.isOwer?e("FormField",{attrs:{title:"项目关联房产：",prop:"building_id",width:"220"}},[e("Select",{attrs:{placeholder:"请选择关联房产"},on:{"on-change":t.trigger},model:{value:t.form.building_id,callback:function(e){t.$set(t.form,"building_id",e)},expression:"form.building_id"}},t._l(t.options,(function(i){return e("Option",{key:i.building_id,attrs:{value:i.building_id}},[t._v(" "+t._s(t._f("building")(i))+" ")])})),1)],1):t._e(),e("FormField",{attrs:{title:"项目附件：",prop:"attachment_url"}},[e("FileUpload",{attrs:{dir:"contract"},on:{"on-change":t.trigger},model:{value:t.attachment,callback:function(e){t.attachment=e},expression:"attachment"}})],1),e("FormField",{attrs:{title:"项目费用：",prop:"fee",width:"140"}},[e("Input",{attrs:{placeholder:"请输入项目费用",type:"number"},on:{"on-change":t.trigger},model:{value:t.form.fee,callback:function(e){t.$set(t.form,"fee",e)},expression:"form.fee"}})],1)],1)],1)},b=[],v={name:"ContractItemEditor",props:{value:{type:Object,default:()=>({})},options:{type:Array,default:()=>[]},index:Number,isOwer:Boolean},data(){const{value:t}=this;return{form:{id:t.id?t.id:void 0,title:t.title?t.title:"",descritpion:t.descritpion?t.descritpion:void 0,building_id:t.building_id?t.building_id:void 0,attachment_url:t.attachment_url?t.attachment_url:void 0,attachment_name:t.attachment_name?t.attachment_name:void 0,fee:t.fee?t.fee:""},attachment:{url:void 0,name:void 0},rules:{title:[{required:!0,message:"请输入项目名称"},{max:56,message:"项目名称不能超过56个字"}],descritpion:[{max:128,message:"合同名称不能超过128个字"}],building_id:[{type:"number",message:"请选择关联房产"}],fee:[{message:"请输入项目费用",required:!0},{message:"请输入正确的金额",pattern:/^\d+(\.\d+)?$/}]}}},mixins:[y["a"]],methods:{validate(t){this.$refs.form.validate(t)},trigger(){this.$nextTick(()=>{this.$emit("input",{...this.form})})}},watch:{value:{deep:!0,handler(t){this.form={id:t.id?t.id:void 0,title:t.title?t.title:"",descritpion:t.descritpion?t.descritpion:void 0,building_id:t.building_id?t.building_id:void 0,attachment_url:t.attachment_url?t.attachment_url:void 0,attachment_name:t.attachment_name?t.attachment_name:void 0,fee:t.fee?t.fee:""},this.attachment={url:t.attachment_url?t.attachment_url:void 0,name:t.attachment_name?t.attachment_name:void 0}}},attachment:{deep:!0,handler(t){this.form.attachment_url=t.url,this.form.attachment_name=t.name}}},components:{Form:_["a"],Input:d["a"],FormField:h["j"],Select:a["a"],Option:n["a"],FileUpload:h["g"]}},F=v,k=i("e607"),I=Object(k["a"])(F,w,b,!1,null,null,null),x=I.exports,$={name:"ContractEditor",props:{detail:{type:Object,default:()=>({})},update:Boolean,onSubmit:Function},data(){const{detail:t}=this;return{options:[],ownerFetching:!1,disabled:!1,ownerInfo:{},form:{title:t.title?t.title:"",category_id:t.category_id?t.category_id:void 0,first_party:t.first_party?t.first_party:"",first_party_linkman:t.first_party_linkman?t.first_party_linkman:"",first_party_phone:t.first_party_phone?t.first_party_phone:"",second_party:t.second_party?t.second_party:"",second_party_linkman:t.second_party_linkman?t.second_party_linkman:"",second_party_phone:t.second_party_phone?t.second_party_phone:"",owner_phone:t.owner_phone?t.owner_phone:"",second_party_wechat_mp_user_id:t.second_party_wechat_mp_user_id?t.second_party_wechat_mp_user_id:void 0,begin_time:t.begin_time?t.begin_time:void 0,finish_time:t.finish_time?t.finish_time:void 0,contract_fee:t.contract_fee?t.contract_fee:0,is_owner:!!t.is_owner&&t.is_owner},items:t.items?t.items:[{}],rules:{title:[{required:!0,message:"请输入合同名称"},{max:56,message:"合同名称不能超过56个字"}],first_party:[{required:!0,message:"请输入甲方称呼"},{max:56,message:"甲方称呼不能超过56个字"}],first_party_linkman:[{required:!0,message:"请输入甲方联系人"},{max:8,message:"甲方联系人不能超8个字"}],first_party_phone:[{required:!0,pattern:/^\d{11}$/,message:"请输入正确的甲方联系电话"}],second_party:[{required:!0,message:"请输入乙方称呼"},{max:56,message:"乙方称呼不能超过56个字"}],second_party_linkman:[{required:!0,message:"请输入乙方联系人"},{max:8,message:"乙方联系人不能超8个字"}],second_party_phone:[{required:!0,pattern:/^\d{11}$/,message:"请输入正确的乙方联系电话"}],owner_phone:[{required:!0,pattern:/^\d{11}$/,message:"请输入正确的业主联系电话"}],second_party_wechat_mp_user_id:[{required:!0,type:"number",message:"请输入乙方业主手机号码"}],category_id:[{required:!0,type:"number",message:"请选择合同类别"}],begin_time:[{required:!0,type:"date",message:"请选择合同开始日期"}],finish_time:[{required:!0,type:"date",message:"请选择合同结束日期"},{message:"结束日期应大于开始日期",validator:(t,e,i)=>{e&&this.form.begin_time&&+this.form.begin_time>+e?i(new Error("结束时间应大于开始时间")):i()}}],contract_fee:[{required:!0,type:"number",message:"请录入合同条目"}],is_owner:[{required:!0,type:"boolean",message:"请选择是否系业主合同"}]},submiting:!1}},mixins:[y["a"]],mounted(){this.postInfo.default_community_id&&this.getOptions()},methods:{getOptions(){g["i"].get("/contract/option").then(t=>{this.options=t.data.list})},addItem(){this.items.push({})},removeItem(t){if(1===this.items.length)return f["a"].warning("至少要有一个合同项目");this.items.splice(t,1)},submit(){this.$refs.form.validate(t=>{Promise.all(this.items.map((t,e)=>new Promise(t=>{this.$refs.item[e].validate(e=>{t(e)})}))).then(e=>{const i=e.every(t=>0==!t);if(!t||!i)return;const r={...this.form,items:this.items.map(t=>({...t,fee:parseFloat(t.fee,10)}))};r.begin_time=+r.begin_time,r.finish_time=+r.finish_time,this.submiting=!0,this.onSubmit(r).then(()=>{this.submiting=!1},()=>{this.submiting=!1})})})}},computed:{...Object(u["c"])({postInfo:"common/postInfo"}),community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name}},watch:{detail:{deep:!0,handler(t){this.form={title:t.title?t.title:"",category_id:t.category_id?t.category_id:void 0,first_party:t.first_party?t.first_party:"",first_party_linkman:t.first_party_linkman?t.first_party_linkman:"",first_party_phone:t.first_party_phone?t.first_party_phone:"",second_party:t.second_party?t.second_party:"",second_party_linkman:t.second_party_linkman?t.second_party_linkman:"",second_party_phone:t.second_party_phone?t.second_party_phone:"",owner_phone:t.owner_phone?t.owner_phone:"",second_party_wechat_mp_user_id:t.second_party_wechat_mp_user_id?t.second_party_wechat_mp_user_id:void 0,begin_time:t.begin_time?t.begin_time:void 0,finish_time:t.finish_time?t.finish_time:void 0,contract_fee:t.contract_fee?t.contract_fee:0,is_owner:!!t.is_owner&&t.is_owner},this.items=t.items?t.items:[{}]}},"form.owner_phone"(t,e){if(/^1\d{10}$/.test(t)?(this.ownerFetching=!0,g["i"]({url:"/option/owner",data:{phone:t,community_id:this.postInfo.default_community_id},method:"post"}).then(t=>{this.ownerInfo=t.data,this.form.second_party_wechat_mp_user_id=t.data.id,this.ownerFetching=!1}).catch(()=>this.ownerFetching=!1)):this.form.second_party_wechat_mp_user_id=null,!/^1\d{10}$/.test(t)&&/^1\d{10}$/.test(e)){const t=[].concat(this.items);t.forEach((e,i)=>{t[i].building_id=void 0}),this.items=t}},"form.is_owner"(t){t||(this.ownerInfo={},this.form.owner_phone=void 0)},"postInfo.default_community_id"(){this.getOptions()},items:{deep:!0,handler(t){let e=0;t.forEach(({fee:t})=>{t&&(e+=parseFloat(t,10))}),this.form.contract_fee=e}}},components:{Card:p["a"],Button:c["a"],Form:_["a"],Input:d["a"],DatePicker:l["a"],FormField:h["j"],Icon:m["a"],OSwitch:s["a"],Select:a["a"],Option:n["a"],ContractItemEditor:x,WaterMark:h["s"]}},O=$,q=(i("d74c"),Object(k["a"])(O,r,o,!1,null,null,null));e["a"]=q.exports},8820:function(t,e,i){},d74c:function(t,e,i){"use strict";i("8820")}}]);