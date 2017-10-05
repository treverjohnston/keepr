webpackJsonp([1],{"0XBL":function(t,e,a){"use strict";var s=a("MOH+"),i=a("EUlB");e.a={name:"hellocard",props:["item"],data:function(){return{msg:"Welcome to Your Vue.js App",show:!1,dialog:!1,dialog2:!1,name:"",description:"",bar:!1,botbar:!1}},methods:{redraw:function(){this.show=!this.show,this.$redrawVueMasonry()},setZoom:function(t){this.$store.commit("setZoom",t),this.$store.dispatch("viewPlus",t)},setKeep:function(t){this.$store.commit("setZoom",t)},addVault:function(){var t={title:this.name,description:this.description,keep:this.current};this.$store.dispatch("addVault",t),this.dialog2=!1,this.bar=!1},addKeep:function(t){var e={vault:t,keep:this.current};this.$store.dispatch("addKeep",e),this.dialog2=!1}},mounted:function(){},components:{Zoom:s.a,Keepcheck:i.a},computed:{current:function(){return this.$store.state.current},user:function(){return this.$store.state.userInfo},vaults:function(){return this.$store.state.vaults}}}},"0tLL":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hellocard"},[a("v-card",{attrs:{hover:""},on:{click:function(e){t.setZoom(t.item)}}},[a("img",{staticClass:"media",attrs:{src:t.item.url}}),t._v(" "),a("v-card-title",[a("div",[a("p",{staticClass:"grey--text"},[t._v(t._s(t.item.author))])]),t._v(" "),a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-btn",{staticClass:"btn",attrs:{slot:"activator",primary:"",dark:""},on:{click:function(e){t.setKeep(t.item)}},slot:"activator"},[a("v-icon",[t._v("play_for_work")]),t._v(" "),a("p",[t._v(t._s(t.item.keeps))])],1),t._v(" "),a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("What vault do you want to keep this in?")])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.vaults,function(e){return a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"vault",on:{click:function(a){t.addKeep(e)}}},[t._v(t._s(e.title))])],1)],1)],1)}))],1),t._v(" "),a("v-bottom-sheet",{attrs:{lazy:""},model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}},[a("v-btn",{staticClass:"purple",attrs:{slot:"activator",dark:""},on:{click:function(e){t.dialog2=!t.dialog2}},slot:"activator"},[a("v-icon",[t._v("library_add")]),t._v(" "),a("p",[t._v("Add a new vault")])],1),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-btn",{on:{click:t.addVault}},[t._v("\n                Add Vault\n              ")])],1)],1)],1)],1),t._v(" "),a("v-icon",{attrs:{small:""}},[t._v("visibility")]),t._v(" "),a("p",[t._v(t._s(t.item.views))])],1),t._v(" "),a("v-slide-y-transition",[t.show?a("v-card-text",t._l(t.item.tags,function(e){return a("div",[a("p",[t._v(t._s(e))])])})):t._e()],1),t._v(" "),a("v-card-actions",{staticClass:"white"},[a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",primary:"",dark:"",icon:""},on:{click:function(e){t.setZoom(t.item)}},slot:"activator"},[a("v-icon",[t._v("launch")])],1),t._v(" "),a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.item.url}})]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.item.author))])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.item.tags,function(e){return a("div",[a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"tag"},[t._v(t._s(e))])])],1)})),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-btn",{staticClass:"btn",attrs:{slot:"activator",primary:"",dark:""},on:{click:function(e){t.dialog=!t.dialog}},slot:"activator"},[a("v-icon",[t._v("play_for_work")]),t._v(" "),a("p",[t._v(t._s(t.item.keeps))])],1),t._v(" "),a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("Add to a vault?")])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.vaults,function(e){return a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"vault",on:{click:function(a){t.addKeep(e)}}},[t._v(t._s(e.title))])],1)],1)],1)}))],1),t._v(" "),a("v-dialog",{attrs:{lazy:""},model:{value:t.botbar,callback:function(e){t.botbar=e},expression:"botbar"}},[a("v-btn",{staticClass:"purple",attrs:{slot:"activator",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog2=!t.dialog2,t.bar=!t.bar}},slot:"activator"},[a("v-icon",[t._v("library_add")]),t._v(" "),a("p",[t._v("Add a new vault")])],1),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-btn",{on:{click:t.addVault}},[t._v("\n                        Add Vault\n                      ")])],1)],1)],1)],1),t._v(" "),a("v-icon",{attrs:{large:""}},[t._v("visibility")]),t._v(" "),a("p",[t._v(t._s(t.item.views))])],1)],1)],1)],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},"27Fn":function(t,e,a){"use strict";var s=a("MOH+"),i=a("EUlB");e.a={name:"keepview",props:["item"],data:function(){return{msg:"Welcome to Your Vue.js App",show:!1,dialog:!1,dialog2:!1,name:"",description:"",bar:!1,botbar:!1}},methods:{redraw:function(){this.show=!this.show,this.$redrawVueMasonry()},setZoom:function(t){this.$store.commit("setZoom",t),this.$store.dispatch("viewPlus",t)},setKeep:function(t){this.$store.commit("setZoom",t)},addVault:function(){var t={title:this.name,description:this.description,keep:this.current};this.$store.dispatch("addVault",t),this.dialog2=!1,this.bar=!1},addKeep:function(t){var e={vault:t,keep:this.current};this.$store.dispatch("addKeep",e),this.dialog2=!1}},mounted:function(){},components:{Zoom:s.a,Keepcheck:i.a},computed:{current:function(){return this.$store.state.current},user:function(){return this.$store.state.userInfo},vaults:function(){return this.$store.state.vaults}}}},"4Enp":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zoom"},[a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.item.url}})]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.item.author))])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.item.tags,function(e){return a("div",[a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"tag"},[t._v(t._s(e))])])],1)})),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-btn",{staticClass:"btn",attrs:{slot:"activator",primary:"",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog2=!t.dialog2}},slot:"activator"},[a("v-icon",[t._v("play_for_work")]),t._v(" "),a("p",[t._v(t._s(t.item.keeps))])],1),t._v(" "),a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("Add to a vault?")])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.vaults,function(e){return a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"vault",on:{click:function(a){t.addKeep(e)}}},[t._v(t._s(e.title))])],1)],1)],1)}))],1),t._v(" "),a("v-dialog",{attrs:{lazy:""},model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}},[a("v-btn",{staticClass:"purple",attrs:{slot:"activator",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog2=!t.dialog2,t.bar=!t.bar}},slot:"activator"},[a("v-icon",[t._v("library_add")]),t._v(" "),a("p",[t._v("Add a new vault")])],1),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-btn",{on:{click:t.addVault}},[t._v("\n                                    Add Vault\n                                ")])],1)],1)],1)],1),t._v(" "),a("v-icon",{attrs:{large:""}},[t._v("visibility")]),t._v(" "),a("p",[t._v(t._s(t.item.views))])],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},"7sZd":function(t,e){},CGcc:function(t,e){},CrKi:function(t,e,a){"use strict";function s(t){a("tC/G")}var i=a("w1Ym"),r=a("D9MR"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-627088e6",null);e.a=c.exports},D9MR:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vaultview"},[a("v-card",{attrs:{hover:""},on:{click:function(e){t.setZoom(t.item)}}},[a("img",{staticClass:"media",attrs:{src:t.item.url}}),t._v(" "),a("v-card-title",[a("div",[a("p",{staticClass:"grey--text"},[t._v(t._s(t.item.title))]),t._v(" "),a("p",{staticClass:"grey--text"},[t._v(t._s(t.item.description))])])]),t._v(" "),a("v-slide-y-transition",[t.show?a("v-card-text",t._l(t.item.tags,function(e){return a("div",[a("p",[t._v(t._s(e))])])})):t._e()],1),t._v(" "),a("v-card-actions",{staticClass:"white"},[a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",primary:"",dark:"",icon:""},on:{click:function(e){t.setZoom(t.item)}},slot:"activator"},[a("v-icon",[t._v("launch")])],1),t._v(" "),a("zoom")],1),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("library_add")])],1),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("share")])],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},EKN5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("v-layout",[a("v-bottom-sheet",{attrs:{lazy:""},model:{value:t.keep,callback:function(e){t.keep=e},expression:"keep"}},[a("v-btn",{staticClass:"purple",attrs:{slot:"activator",fab:"",dark:"",small:""},slot:"activator"},[a("v-icon",[t._v("note_add")])],1),t._v(" "),a("h2",{staticClass:"elevation-8 grey lighten-3"},[t._v("Add Keep")]),t._v(" "),""!==t.urlAdd?a("div",[a("v-card",{staticClass:"image"},[a("img",{staticClass:"img",attrs:{src:t.urlAdd,alt:"your image"}})])],1):t._e(),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.nameAdd,callback:function(e){t.nameAdd=e},expression:"nameAdd"}}),t._v(" "),a("v-text-field",{attrs:{label:"Url",required:""},model:{value:t.urlAdd,callback:function(e){t.urlAdd=e},expression:"urlAdd"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.descriptionAdd,callback:function(e){t.descriptionAdd=e},expression:"descriptionAdd"}})],1),t._v(" "),a("v-btn",{attrs:{id:"upload_widget_opener"},on:{click:t.openCloud}},[t._v("\n              Add Keep\n            ")])],1)],1),t._v(" "),a("v-bottom-sheet",{attrs:{lazy:""},model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}},[a("v-btn",{staticClass:"green",attrs:{slot:"activator",fab:"",dark:"",small:""},slot:"activator"},[a("v-icon",[t._v("library_add")])],1),t._v(" "),a("h2",{staticClass:"elevation-8 grey lighten-3"},[t._v("Add Vault")]),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.nameAdd,callback:function(e){t.nameAdd=e},expression:"nameAdd"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.descriptionAdd,callback:function(e){t.descriptionAdd=e},expression:"descriptionAdd"}})],1),t._v(" "),a("v-btn",{on:{click:t.addVault}},[t._v("\n          Add Vault\n        ")])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"hellocards ",attrs:{"transition-duration":"0.3s","item-selector":".item"}},[a("v-layout",{attrs:{row:"","justify-space-around":""}},t._l(t.keeps,function(t){return a("v-flex",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item",attrs:{xs12:"",sm6:"",md4:"","fit-width":"true"}},[a("hellocard",{attrs:{item:t}})],1)}))],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},EUlB:function(t,e,a){"use strict";function s(t){a("wQDL")}var i=a("MC7A"),r=a("VrkP"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-49b23639",null);e.a=c.exports},HARo:function(t,e){},IcnI:function(t,e,a){"use strict";var s=a("7+uW"),i=a("mtWM"),r=a.n(i),n=a("NYxO"),o=a("YaEn"),c=r.a.create({baseURL:"//keepur.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),l=r.a.create({baseURL:"//keepur.herokuapp.com/",timeout:2e3,withCredentials:!0});s.a.use(n.a);var d=new n.a.Store({state:{dummy:[],current:{},userInfo:{},dummyVaults:{},keeps:{},loggedIn:!1,vaults:{},currentVault:{},currentKeeps:{},profileInfo:{},profileVaults:{},userKeeps:{}},mutations:{resetState:function(t,e){t.current={},t.keeps={},t.vaults={},t.currentVault={},t.currentKeeps={},t.profileInfo={},t.profileVaults={}},setZoom:function(t,e){t.current=e},handleError:function(t,e){console.error(e)},setInfo:function(t,e){t.userInfo=e.data},setCurrentVault:function(t,e){t.currentVault=e},addToKeeps:function(t,e){s.a.set(t.dummyKeeps,e.vault,e)},setLogged:function(t){t.loggedIn=!t.loggedIn},setVaults:function(t,e){for(var a=0;a<e.length;a++){var i=e[a];s.a.set(t.vaults,i._id,i)}},setProfileVaults:function(t,e){for(var a=0;a<e.length;a++){var i=e[a];s.a.set(t.profileVaults,i._id,i)}},setUserKeeps:function(t,e){for(var a=0;a<e.length;a++){var i=e[a];s.a.set(t.userKeeps,i._id,i)}},setKeeps:function(t,e){for(var a=0;a<e.length;a++){var i=e[a];t.currentKeeps[i._id]||s.a.set(t.currentKeeps,i._id,i)}},setAllKeeps:function(t,e){for(var a=0;a<e.length;a++){var i=e[a];t.keeps[i._id]||s.a.set(t.keeps,i._id,i)}},addVault:function(t,e){s.a.set(t.vaults,e._id,e)}},actions:{sendDesign:function(t,e){var a=t.commit,s=t.dispatch;console.log("dis is payload",e[0]),c.post("keeps",e[0]).then(function(t){console.log("dis is res",t),s("getKeeps")}).catch(function(t){a("handleError",t)})},deleteVault:function(t,e){var a=t.commit,s=t.dispatch;c.delete("vaults/"+e.keepId).then(function(t){s("getUserVaults"),s("getArtistProfile",e.userId)}).catch(function(t){a("handleError",t)})},getKeeps:function(t){var e=t.commit;t.dispatch;c("keeps").then(function(t){e("setAllKeeps",t.data.data)}).catch(function(t){console.log("eerrrroror"),e("handleError",t)})},addKeep:function(t,e){var a=t.commit,s=t.dispatch;e.keep.vaults.push(e.vault._id),c.put("keeps/"+e.keep._id,e.keep).then(function(t){s("getKeeps")}).catch(function(t){console.log("eerrrroror"),a("handleError",t)})},getCurrentKeeps:function(t,e){var a=t.commit;t.dispatch;c("vaults/"+e+"/keeps").then(function(t){a("setKeeps",t.data.data)}).catch(function(t){console.log("eerrrroror"),a("handleError",t)})},getUserVaults:function(t){var e=t.commit;t.dispatch;c("uservaults").then(function(t){e("setVaults",t.data.data)}).catch(function(t){console.log("eerrrroror"),e("handleError",t)})},getArtistProfile:function(t,e){var a=t.commit;t.dispatch;c("uservaults/"+e+"/vaults").then(function(t){a("setProfileVaults",t.data.data)}).catch(function(t){console.log("eerrrroror"),a("handleError",t)})},getUserKeeps:function(t,e){var a=t.commit;t.dispatch;c("uservaults/"+e+"/keeps").then(function(t){a("setUserKeeps",t.data.data)}).catch(function(t){console.log("eerrrroror"),a("handleError",t)})},addVault:function(t,e){var a=t.commit,s=t.dispatch;c.post("vaults",e).then(function(t){if(a("addVault",t.data.data),e.keep){var i={vault:t.data.data,keep:e.keep};s("addKeep",i)}}).catch(function(t){console.log("eerrrroror"),a("handleError",t)})},getAuth:function(t){var e=t.commit;t.dispatch;l("authenticate").then(function(t){if(!t.data)return o.a.push("/");e("setInfo",t.data),e("setLogged")}).catch(function(t){e("handleError",t),o.a.push("/")})},viewPlus:function(t){t.commit,t.dispatch;console.log("add a plus view function")},createAccount:function(t,e){var a=t.commit;t.dispatch;l.post("register",e).then(function(t){swal({title:"Account Created",timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){a("handleError",t),o.a.push("/")}),a("setLogged"),a("resetState"),console.log(t)})},login:function(t,e){var a=t.commit;t.dispatch;l.post("login",e).then(function(t){swal({title:"Logged in as",text:t.data.username,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){a("handleError",t),o.a.push("/")}),a("setLogged"),a("resetState"),console.log(t)})},logout:function(t){var e=t.commit;t.dispatch;l.delete("logout").then(function(t){console.log(t),e("setLogged"),e("resetState")}).catch(function(t){e("handleError",t),o.a.push("/")})}}});e.a=d},M93x:function(t,e,a){"use strict";function s(t){a("VQZu")}var i=a("xJD8"),r=a("o8nR"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,null,null);e.a=c.exports},MC7A:function(t,e,a){"use strict";e.a={name:"keepcheck",data:function(){return{name:"",description:""}},components:{},computed:{item:function(){return this.$store.state.current},user:function(){return this.$store.state.userInfo},vaults:function(){return this.$store.state.vaults}},methods:{addVault:function(){var t={title:this.name,description:this.description};this.$store.dispatch("addVault",t)},addKeep:function(t){var e={vault:t,keep:this.item};this.$store.dispatch("addKeep",e)}},mounted:function(){this.$store.dispatch("getUserVaults")}}},"MOH+":function(t,e,a){"use strict";function s(t){a("vMBU")}var i=a("OQ1w"),r=a("4Enp"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-8929fce6",null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("3EgV"),r=a.n(i),n=a("tLfa"),o=(a.n(n),a("M93x")),c=a("YaEn"),l=a("IcnI"),d=a("zaIY"),u=a.n(d),v=a("thjQ");a.n(v);s.a.use(u.a),s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:c.a,store:l.a,template:"<App/>",components:{App:o.a}})},OQ1w:function(t,e,a){"use strict";e.a={name:"zoom",data:function(){return{name:"",description:"",bar:!1,dialog:!1,dialog2:!1}},components:{},computed:{item:function(){return this.$store.state.current},user:function(){return this.$store.state.userInfo},vaults:function(){return this.$store.state.vaults}},methods:{addVault:function(){var t={title:this.name,description:this.description};this.$store.dispatch("addVault",t),this.bar=!this.bar},addKeep:function(t){var e={vault:t,keep:this.item};this.$store.dispatch("addKeep",e)}},mounted:function(){this.$store.dispatch("getUserVaults")}}},Qipf:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[t.loggedIn?a("div",[a("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"hellocards",attrs:{"transition-duration":"0.3s","item-selector":".item"}},[a("v-layout",{attrs:{row:"","justify-space-around":""}},t._l(t.vaults,function(t){return a("v-flex",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item",attrs:{xs12:"",sm4:"",md3:"",lg2:"","fit-width":"true"}},[a("vaultcard",{attrs:{item:t}})],1)})),t._v(" "),a("v-layout",{attrs:{row:"","justify-space-around":""}},t._l(t.keeps,function(t){return a("v-flex",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item",attrs:{xs12:"",sm4:"",md3:"",lg2:"","fit-width":"true"}},[a("keepview",{attrs:{item:t}})],1)}))],1)]):a("div",[a("h1",[t._v("Need to log in first")])])])},i=[],r={render:s,staticRenderFns:i};e.a=r},R6og:function(t,e,a){"use strict";function s(t){a("CGcc")}var i=a("YWVZ"),r=a("ZJeU"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-ea459ad0",null);e.a=c.exports},V3DO:function(t,e,a){"use strict";function s(t){a("darC")}var i=a("0XBL"),r=a("0tLL"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-7d18f938",null);e.a=c.exports},VQZu:function(t,e){},VrkP:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keepcheck"},[a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("What vault do you want to keep this in?")])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.vaults,function(e){return a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"vault",on:{click:function(a){t.addKeep(e)}}},[t._v(t._s(e.title))])],1)],1)],1)}))],1),t._v(" "),a("v-bottom-sheet",[a("v-btn",{staticClass:"purple",attrs:{slot:"activator",dark:""},slot:"activator"},[a("v-icon",[t._v("library_add")]),t._v(" "),a("p",[t._v("Add a new vault")])],1),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-btn",{on:{click:t.addVault}},[t._v("\n                    Add Vault\n                ")])],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},XbrT:function(t,e,a){"use strict";function s(t){a("sr0M")}var i=a("tClW"),r=a("bC3q"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-1c057930",null);e.a=c.exports},YWVZ:function(t,e,a){"use strict";var s=a("MOH+"),i=a("EUlB");e.a={name:"vaultcard",props:["item"],data:function(){return{msg:"Welcome to Your Vue.js App",show:!1,dialog:"",dialog2:""}},computed:{user:function(){return this.$store.state.userInfo}},methods:{redraw:function(){this.show=!this.show,this.$redrawVueMasonry()},setVault:function(t){this.$store.commit("setCurrentVault",t),this.$store.commit("resetState"),this.$store.dispatch("getCurrentKeeps",t._id)},setKeep:function(t){this.$store.commit("setKeep",t)},deleteVault:function(t){var e={keepId:t,userId:this.user._id},a=this;swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){a.$store.dispatch("deleteVault",e),swal("Deleted!","Your file has been deleted.","success")})}},mounted:function(){this.$store.dispatch("getUserVaults")},components:{Zoom:s.a,Keepcheck:i.a}}},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),i=a("/ocq"),r=a("qSdX"),n=a("V3DO"),o=a("MOH+"),c=a("xJsL"),l=a("o9cx"),d=a("EUlB"),u=a("XbrT");s.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:r.a},{path:"/profile/:userId/vaults",name:"Vault",component:u.a},{path:"/keepcheck",name:"KeepCheck",component:d.a},{path:"/profile/:profileId",name:"Profile",component:l.a},{path:"/login",name:"Login",component:c.a},{path:"/zoom",name:"Zoom",component:o.a},{path:"/hellocard",name:"HelloCard",component:n.a}]})},ZJeU:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vaultcard"},[a("v-card",{attrs:{hover:""},on:{click:function(e){t.setVault(t.item)}}},[void 0!==t.item.url?a("div",[a("img",{staticClass:"media",attrs:{src:t.item.url}})]):a("div",[a("img",{staticClass:"media",attrs:{src:"http://via.placeholder.com/350x250"}})]),t._v(" "),a("v-card-title",[a("div",[a("h5",{staticClass:"grey--text text-xs-center"},[t._v(t._s(t.item.title))])])]),t._v(" "),a("v-card-actions",{staticClass:"white"},[a("v-spacer"),t._v(" "),a("router-link",{attrs:{to:t.user._id+"/vaults"}},[a("v-btn",{attrs:{primary:"",dark:""},on:{click:function(e){t.setVault(t.item)}}},[a("v-icon",[t._v("launch")])],1)],1),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.deleteVault(t.item._id)}}},[a("v-icon",{staticClass:"red--text"},[t._v("delete_forever")])],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},bC3q:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault"},[a("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"hellocards",attrs:{"transition-duration":"0.3s","item-selector":".item"}},[a("v-layout",{attrs:{row:"","justify-space-around":""}},t._l(t.blocks,function(t){return a("v-flex",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item",attrs:{xs12:"",sm4:"",md3:"",lg2:"","fit-width":"true"}},[a("vaultview",{attrs:{item:t}})],1)})),t._v(" "),a("v-layout",{attrs:{row:"","justify-space-around":""}},t._l(t.keeps,function(t){return a("v-flex",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item",attrs:{xs12:"",sm4:"",md3:"",lg2:"","fit-width":"true"}},[a("hellocard",{attrs:{item:t}})],1)}))],1)])},i=[],r={render:s,staticRenderFns:i};e.a=r},clyW:function(t,e){},darC:function(t,e){},"kvR+":function(t,e,a){"use strict";function s(t){a("7sZd")}var i=a("27Fn"),r=a("wahg"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-7ec714e4",null);e.a=c.exports},"nKb+":function(t,e,a){"use strict";e.a={name:"login",data:function(){return{login:!1,register:!1,e1:!0,name:"",email:"",password:"",confirmPassword:"",loggedIn:!1}},components:{},computed:{logged:function(){return this.$store.state.loggedIn}},methods:{logging:function(){var t={email:this.email,password:this.password};this.$store.dispatch("login",t)},registering:function(){console.log("attempting");var t={email:this.email,name:this.name,password:this.password,confirmPassword:this.confirmPassword};this.$store.dispatch("createAccount",t)},logout:function(){this.$store.dispatch("logout")},addVault:function(){var t={title:this.name,description:this.description,keep:this.current};this.$store.dispatch("addVault",t),this.dialog2=!1,this.bar=!1}},mounted:function(){}}},o8nR:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("v-toolbar",{attrs:{fixed:""}},[a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{icon:"",light:""}},[a("v-icon",[t._v("home")])],1)],1),t._v(" "),a("router-link",{attrs:{to:"/profile/"+t.info._id}},[a("v-btn",{attrs:{icon:"",light:""}},[a("v-icon",[t._v("perm_identity")])],1)],1),t._v(" "),a("v-btn",{attrs:{icon:"",light:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[a("v-icon",[t._v("remove")])],1),t._v(" "),a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:"",light:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[a("v-icon",[t._v("menu")])],1)],1),t._v(" "),a("main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),t._v(" "),a("v-navigation-drawer",{attrs:{temporary:"",right:t.right},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[a("login")],1),t._v(" "),a("v-footer",{attrs:{fixed:t.fixed}},[a("span",[t._v("© 2017")])])],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},o9cx:function(t,e,a){"use strict";function s(t){a("HARo")}var i=a("yoF/"),r=a("Qipf"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-5d3517df",null);e.a=c.exports},pMZz:function(t,e,a){"use strict";var s=a("V3DO");e.a={name:"hello",data:function(){return{weird:!0,nameAdd:"",descriptionAdd:"",urlAdd:"",bar:!1,keep:!1}},components:{Hellocard:s.a},computed:{keeps:function(){return this.$store.state.keeps},info:function(){return this.$store.state.userInfo}},methods:{refresh:function(){this.$redrawVueMasonry()},addVault:function(){var t={title:this.nameAdd,description:this.descriptionAdd,keep:this.current};this.$store.dispatch("addVault",t),this.dialog2=!1,this.bar=!1},openCloud:function(){var t=this;""!==this.name?cloudinary.openUploadWidget({cloud_name:"treverscloud",upload_preset:"nd6fcx4z"},function(e,a){a[0].title=t.nameAdd,a[0].description=t.descriptionAdd,a[0].creatorId=t.info._id,t.$store.dispatch("sendDesign",a)}):swal("Oops...","You need to add a name first!","error")}},mounted:function(){this.refresh(),this.$store.dispatch("getUserVaults"),this.$store.dispatch("getKeeps")}}},qSdX:function(t,e,a){"use strict";function s(t){a("vuts")}var i=a("pMZz"),r=a("EKN5"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-cd354bf0",null);e.a=c.exports},sr0M:function(t,e){},"tC/G":function(t,e){},tClW:function(t,e,a){"use strict";var s=a("CrKi"),i=a("V3DO");e.a={name:"vault",data:function(){return{weird:!0}},components:{Vaultview:s.a,Hellocard:i.a},computed:{blocks:function(){return this.$store.state.currentKeeps},keeps:function(){return this.$store.state.userKeeps}},methods:{refresh:function(){this.$redrawVueMasonry(),setTimeout(this.refresh,500)}},mounted:function(){this.refresh(),this.$store.dispatch("getUserVaults")}}},tLfa:function(t,e){},ui43:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[t.logged?a("div",[a("v-container",{attrs:{fluid:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Add New Keep/Vault")]),t._v(" "),a("v-btn",{on:{click:t.logout}},[t._v("Logout")])],1)],1)],1):a("div",[a("v-container",{attrs:{fluid:""}},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{on:{click:function(e){e.stopPropagation(),t.login=!0,t.register=!1}}},[t._v("Login")]),t._v(" "),a("v-btn",{on:{click:function(e){e.stopPropagation(),t.register=!0,t.login=!1}}},[t._v("Register")])],1)],1)],1),t._v(" "),t.register?a("v-card",{staticClass:"elevation-0",attrs:{light:""}},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{box:"",label:"Full Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{box:"",label:"Email address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"input-10-1",label:"Enter your password",hint:"At least 8 characters",min:"8","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"password":"text",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"input-10-1",label:"Confirm your password",hint:"At least 8 characters",min:"8","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"password":"text",counter:""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),t._v(" "),a("v-btn",{on:{click:t.registering}},[t._v("Continue")])],1)],1)],1):t._e(),t._v(" "),t.login?a("v-card",{staticClass:"elevation-0",attrs:{light:""}},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{box:"",label:"Email address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"input-10-1",label:"Enter your password",hint:"At least 8 characters",min:"8","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"password":"text",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("v-btn",{on:{click:t.logging}},[t._v("Continue")])],1)],1)],1):t._e()],1)])},i=[],r={render:s,staticRenderFns:i};e.a=r},vMBU:function(t,e){},vuts:function(t,e){},w1Ym:function(t,e,a){"use strict";var s=a("MOH+"),i=a("EUlB");e.a={name:"vaultview",props:["item"],data:function(){return{msg:"Welcome to Your Vue.js App",show:!1,dialog:"",dialog2:""}},methods:{redraw:function(){this.show=!this.show,this.$redrawVueMasonry()},setZoom:function(t){this.$store.commit("setZoom",t),this.$store.dispatch("viewPlus",t)},setKeep:function(t){this.$store.commit("setZoom",t)}},mounted:function(){this.$store.dispatch("getUserVaults")},components:{Zoom:s.a,Keepcheck:i.a}}},wQDL:function(t,e){},wahg:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keepview"},[a("v-card",{attrs:{hover:""},on:{click:function(e){t.setZoom(t.item)}}},[a("img",{staticClass:"media",attrs:{src:t.item.url}}),t._v(" "),a("v-card-title",[a("div",[a("p",{staticClass:"grey--text"},[t._v(t._s(t.item.author))])]),t._v(" "),a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-btn",{staticClass:"btn",attrs:{slot:"activator",primary:"",dark:""},on:{click:function(e){t.setKeep(t.item)}},slot:"activator"},[a("v-icon",[t._v("play_for_work")]),t._v(" "),a("p",[t._v(t._s(t.item.keeps))])],1),t._v(" "),a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("What vault do you want to keep this in?")])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.vaults,function(e){return a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"vault",on:{click:function(a){t.addKeep(e)}}},[t._v(t._s(e.title))])],1)],1)],1)}))],1),t._v(" "),a("v-bottom-sheet",{attrs:{lazy:""},model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}},[a("v-btn",{staticClass:"purple",attrs:{slot:"activator",dark:""},on:{click:function(e){t.dialog2=!t.dialog2}},slot:"activator"},[a("v-icon",[t._v("library_add")]),t._v(" "),a("p",[t._v("Add a new vault")])],1),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-btn",{on:{click:t.addVault}},[t._v("\n                Add Vault\n              ")])],1)],1)],1)],1),t._v(" "),a("v-icon",{attrs:{small:""}},[t._v("visibility")]),t._v(" "),a("p",[t._v(t._s(t.item.views))])],1),t._v(" "),a("v-slide-y-transition",[t.show?a("v-card-text",t._l(t.item.tags,function(e){return a("div",[a("p",[t._v(t._s(e))])])})):t._e()],1),t._v(" "),a("v-card-actions",{staticClass:"white"},[a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",primary:"",dark:"",icon:""},on:{click:function(e){t.setZoom(t.item)}},slot:"activator"},[a("v-icon",[t._v("launch")])],1),t._v(" "),a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.item.url}})]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.item.author))])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.item.tags,function(e){return a("div",[a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"tag"},[t._v(t._s(e))])])],1)})),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{lazy:"",absolute:""},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-btn",{staticClass:"btn",attrs:{slot:"activator",primary:"",dark:""},on:{click:function(e){t.dialog=!t.dialog}},slot:"activator"},[a("v-icon",[t._v("play_for_work")]),t._v(" "),a("p",[t._v(t._s(t.item.keeps))])],1),t._v(" "),a("v-card",[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("Add to a vault?")])]),t._v(" "),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},t._l(t.vaults,function(e){return a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"vault",on:{click:function(a){t.addKeep(e)}}},[t._v(t._s(e.title))])],1)],1)],1)}))],1),t._v(" "),a("v-dialog",{attrs:{lazy:""},model:{value:t.botbar,callback:function(e){t.botbar=e},expression:"botbar"}},[a("v-btn",{staticClass:"purple",attrs:{slot:"activator",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog2=!t.dialog2,t.bar=!t.bar}},slot:"activator"},[a("v-icon",[t._v("library_add")]),t._v(" "),a("p",[t._v("Add a new vault")])],1),t._v(" "),a("v-list",[a("v-form",[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-btn",{on:{click:t.addVault}},[t._v("\n                        Add Vault\n                      ")])],1)],1)],1)],1),t._v(" "),a("v-icon",{attrs:{large:""}},[t._v("visibility")]),t._v(" "),a("p",[t._v(t._s(t.item.views))])],1)],1)],1)],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},xJD8:function(t,e,a){"use strict";var s=a("xJsL");e.a={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Keepr"}},computed:{info:function(){return this.$store.state.userInfo}},components:{Login:s.a},mounted:function(){this.$store.dispatch("getAuth")}}},xJsL:function(t,e,a){"use strict";function s(t){a("clyW")}var i=a("nKb+"),r=a("ui43"),n=a("VU/8"),o=s,c=n(i.a,r.a,o,"data-v-28d1e5c2",null);e.a=c.exports},"yoF/":function(t,e,a){"use strict";var s=a("bOdI"),i=a.n(s),r=a("R6og"),n=a("kvR+");e.a=i()({name:"profile",data:function(){return{}},components:{Keepview:n.a},computed:{info:function(){return this.$store.state.userInfo},vaults:function(){return this.$store.state.profileVaults},loggedIn:function(){return this.$store.state.loggedIn},keeps:function(){return this.$store.state.userKeeps}},methods:{},mounted:function(){this.$store.dispatch("getUserVaults"),this.$store.dispatch("getArtistProfile",this.$route.params.profileId),this.$store.dispatch("getUserKeeps",this.$route.params.profileId)}},"components",{Vaultcard:r.a})}},["NHnr"]);
//# sourceMappingURL=app.684e8e6da60ac0cf98b3.js.map