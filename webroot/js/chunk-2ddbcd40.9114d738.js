(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ddbcd40"],{"2e0f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"title"},[t._v(t._s(t.title)+"会议室")]),e("canvas",{ref:"canvas"})])},r=[],s=i("9724"),a=i("1e7f"),c=i.n(a),o={name:"PrintMeetingCode",data(){return{code:"",title:""}},mixins:[s["a"]],created(){this.code=this.$route.query.code,this.title=this.$route.query.title},watch:{code(t){c.a.toCanvas(this.$refs.canvas,t,{width:220,height:220,margin:0}),this.print()}}},d=o,u=i("e607"),h=Object(u["a"])(d,n,r,!1,null,null,null);e["default"]=h.exports},9724:function(t,e,i){"use strict";e["a"]={mounted(){window.addEventListener("afterprint",this.back)},beforeDestroy(){window.removeEventListener("afterprint",this.back)},methods:{print(){window.print()},back(){this.$router.back()}}}}}]);