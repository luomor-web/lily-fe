(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2894c2b0"],{"706e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"title"},[t._v("物业费催缴通知")]),e("p",{staticClass:"to"},[t._v("尊敬的业主：")]),e("p",{staticClass:"section"},[t._v(" "+t._s(t.community_name)+"小区"+t._s(t.start_year)+"年至"+t._s(t.end_year)+"年物业费缴纳已有一段时间，您名下房产"+t._s(t.building)+"物业费用"+t._s(t._f("yuan")(t.fee))+"元还未缴纳，请及时缴费。 ")]),e("p",{staticClass:"section"},[t._v("您可前往物业办公室现场缴费，或扫描下方二维码通过业主小程序缴费。")]),e("img",{attrs:{src:i("c423"),width:"215"},on:{load:t.imgLoaded}}),e("p",{staticClass:"section"},[t._v("感觉您对物业工作的理解和支持。")]),e("p",{staticClass:"date"},[t._v(t._s(t._f("mom_format")(t.now)))])])},n=[],o=i("7736"),a=i("9724"),r={name:"PrintFeeUrge",data(){return{fetching:!0,building:"",end_year:"",fee:"",start_year:"",now:Date.now()}},mixins:[a["a"]],created(){this.building=this.$route.query.building,this.end_year=this.$route.query.end_year,this.fee=this.$route.query.fee,this.start_year=this.$route.query.start_year},methods:{imgLoaded(){this.print()}},computed:{...Object(o["c"])({postInfo:"common/postInfo"}),community_name(){if(!this.postInfo.default_community_id)return"";const t=this.postInfo.community_list.findIndex(t=>t.community_id===this.postInfo.default_community_id);return this.postInfo.community_list[t].name}}},c=r,u=i("e607"),d=Object(u["a"])(c,s,n,!1,null,null,null);e["default"]=d.exports},9724:function(t,e,i){"use strict";e["a"]={mounted(){window.addEventListener("afterprint",this.back)},beforeDestroy(){window.removeEventListener("afterprint",this.back)},methods:{print(){window.print()},back(){this.$router.back()}}}},c423:function(t,e,i){t.exports=i.p+"img/qrcode.cf98786f.jpg"}}]);