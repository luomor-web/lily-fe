(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a1f16dc"],{"2b57":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("section",[t("Header",{attrs:{back:""}},[t("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 公司整体设置，请谨慎操作，如有疑问请发信至 "),t("a",{attrs:{href:"mailto:contact@luomor.com"}},[e._v("技术支持")]),e._v(" 咨询。 ")])]),t("CommunityEditor",{attrs:{onSubmit:e.submit}})],1)},a=[],o=s("8c99"),c=(s("ed70"),s("2af9")),n=s("5916"),i=s("ed08"),l={name:"SettingCommunityCreate",methods:{submit(e){return new Promise((t,s)=>{i["i"].post("/community_manage/create",e).then(e=>{o["a"].success("添加小区成功"),this.$router.push("/setting/community/detail/"+e.data.id),t()}).catch(()=>s())})}},components:{Header:c["k"],CommunityEditor:n["a"]}},m=l,d=s("e607"),p=Object(d["a"])(m,r,a,!1,null,null,null);t["default"]=p.exports},5916:function(e,t,s){"use strict";var r=function(){var e=this,t=e._self._c;return t("Card",{attrs:{"dis-hover":"",bordered:!1}},[t("Form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-position":e.mlabelPostion,"label-width":e.mlabelWidth,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[t("FormField",{attrs:{title:"小区名称：",prop:"name",width:"300"}},[t("Input",{attrs:{placeholder:"请输入小区名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("FormField",{attrs:{title:"小区所在地：",prop:"address"}},[t("AreaSelect",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("FormField",{attrs:{title:"客服电话：",prop:"phone",width:"200"}},[t("Input",{attrs:{placeholder:"请输入客服电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("FormField",{attrs:{title:"小区照片：",prop:"banner",label:"请上传900*506尺寸图片，用于业主端App展示"}},[t("ImageUpload",{attrs:{dir:"community_banner",width:900,height:506},model:{value:e.form.banner,callback:function(t){e.$set(e.form,"banner",t)},expression:"form.banner"}})],1),t("FormField",{attrs:{prop:"access_nfc",title:"NFC门禁："}},[t("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:e.form.access_nfc,callback:function(t){e.$set(e.form,"access_nfc",t)},expression:"form.access_nfc"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("关")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("开")])])],1),t("FormField",{attrs:{prop:"access_qrcode",title:"二维码门禁："}},[t("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:e.form.access_qrcode,callback:function(t){e.$set(e.form,"access_qrcode",t)},expression:"form.access_qrcode"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("关")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("开")])])],1),t("FormField",{attrs:{prop:"access_remote",title:"远程开门："}},[t("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:e.form.access_remote,callback:function(t){e.$set(e.form,"access_remote",t)},expression:"form.access_remote"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("关")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("开")])])],1),t("FormField",{attrs:{prop:"fitment_pledge",title:"装修保证金："}},[t("OSwitch",{attrs:{"true-value":1,"false-value":0},model:{value:e.form.fitment_pledge,callback:function(t){e.$set(e.form,"fitment_pledge",t)},expression:"form.fitment_pledge"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("关")]),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("开")])])],1),t("FormField",{attrs:{prop:"carport_max_car",title:"车位绑定车辆数目：",width:"120"}},[t("Input",{attrs:{type:"number"},model:{value:e.form.carport_max_car,callback:function(t){e.$set(e.form,"carport_max_car",t)},expression:"form.carport_max_car"}})],1),t("div",{staticClass:"cw-form-actions"},[t("Button",{attrs:{type:"primary",loading:e.submiting},on:{click:e.submit}},[e._v(e._s(e.update?"修改":"创建"))])],1)],1)],1)},a=[],o=s("88bd"),c=s("37a2"),n=s("e7c9"),i=s("545e"),l=s("3e79"),m=s("2af9"),d=s("e49c"),p={name:"CommunityEditor",props:{detail:Object,update:Boolean,onSubmit:Function},data(){const{detail:e}=this;return{labelWidth:160,submiting:!1,form:{name:e?e.name:"",address:e?[e.province,e.city,e.district]:[],phone:e?e.phone:"",banner:e?e.banner:"",access_nfc:e?e.access_nfc:0,access_qrcode:e?e.access_qrcode:0,access_remote:e?e.access_remote:0,fitment_pledge:e?e.fitment_pledge:0,carport_max_car:e?e.carport_max_car:1},rules:{name:[{required:!0,message:"请输入小区名称"},{max:12,message:"小区名称不能超过12个字"}],address:[{required:!0,type:"array",len:3,message:"请选择小区所在地"}],phone:[{required:!0,message:"请输入小区客户电话"},{pattern:/^\d{11}$/,message:"请输入正确的电话号码"}],banner:[{required:!0,message:"请上传小区照片"}],access_nfc:[{required:!0,type:"number"}],access_qrcode:[{required:!0,type:"number"}],access_remote:[{required:!0,type:"number"}],fitment_pledge:[{required:!0,type:"number"}],carport_max_car:[{required:!0,pattern:/^\d+$/,message:"请输入正确的车位可绑定车辆的数目"}]}}},methods:{submit(){this.$refs.form.validate(e=>{if(!e)return;const t={...this.form,province:this.form.address[0],city:this.form.address[1],district:this.form.address[2]};delete t.address,this.onSubmit(t).then(()=>{this.submiting=!1},()=>{this.submiting=!1})})}},watch:{detail:{deep:!0,handler(e){this.form={name:e?e.name:"",address:e?[e.province,e.city,e.district]:[],phone:e?e.phone:"",banner:e?e.banner:"",access_nfc:e?e.access_nfc:0,access_qrcode:e?e.access_qrcode:0,access_remote:e?e.access_remote:0,fitment_pledge:e?e.fitment_pledge:0,carport_max_car:e?e.carport_max_car:1}}}},mixins:[d["a"]],components:{FormField:m["j"],ImageUpload:m["l"],Card:l["a"],Form:i["a"],AreaSelect:m["a"],Input:n["a"],OSwitch:c["a"],Button:o["a"]}},u=p,f=s("e607"),_=Object(f["a"])(u,r,a,!1,null,null,null);t["a"]=_.exports}}]);