webpackJsonp([13],{dIqY:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("Xxa5"),i=t.n(n),a=t("exGp"),s=t.n(a),l=t("GVVA"),c={data:function(){var e=this;return{checkbox:!1,passwordRules:[function(e){return!!e||"비밀번호를 입력해 주세요."},function(e){return e&&e.length>=8||"최소 문자의 길이가 8 이상이어야 합니다."}],confirmPasswordRules:[function(e){return!!e||"비밀번호를 다시 입력해 주세요."},function(r){return r===e.fields.password||"비밀번호가 일치하지 않습니다."}],emailRules:[function(e){return!e||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"이메일 형식에 맞춰 입력하세요."}],genderRules:[function(e){return!!e||"성별이 선택되지 않았습니다."}],checkboxRules:[function(e){return!!e||"이용약관 동의를 하지 않았습니다."}],rules:{email:{require1:function(e){return!!e||"이메일을 입력해 주세요."},require2:function(e){return!e||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"이메일 형식에 맞춰 입력하세요."},duplicate:function(r){return e.duplicateEmail(r)||"중복된 email 주소입니다."}},nickname:{require1:function(e){return!!e||"닉네임을 입력해 주세요."},require2:function(e){return!(e&&e.length>=15)||"닉네임은 15자 이상 입력할 수 없습니다."},require3:function(e){return!/[~!@#$%^&*()_+|<>?:{} ]/.test(e)||"닉네임에는 특수문자를 사용할 수 없습니다."},require4:function(e){return!(e&&e.length<=1)||"닉네임은 2자 이상 입력해야 합니다."},duplicate:function(r){return e.duplicateNickname(r)}}},fields:{email:null,nickname:null,password:null,confirm:null,gender:null},email_err_msg:[],nickname_err_msg:[]}},methods:{duplicateEmail:function(e){var r=this;return s()(i.a.mark(function t(){var n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e},t.prev=1,t.next=4,l.a.post("/email_validate",n,{withCredentials:!0});case 4:"Email Address empty"==(a=t.sent).data.msg?r.email_err_msg=[]:"Email Address Exists"==a.data.msg&&(r.email_err_msg=["이미 등록된 이메일 주소입니다."]),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}},t,r,[[1,8]])}))()},duplicateNickname:function(e){var r=this;return s()(i.a.mark(function t(){var n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={nickname:e},t.prev=1,t.next=4,l.a.post("/nickname_validate",n,{withCredentials:!0});case 4:"Nickname empty"==(a=t.sent).data.msg?r.nickname_err_msg=[]:"Nickname Exists"==a.data.msg&&(r.nickname_err_msg=["중복된 닉네임 입니다."]),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}},t,r,[[1,8]])}))()},register:function(){var e=this;if(this.$refs.form.validate()){var r={email:this.fields.email,nickname:this.fields.nickname,password:this.fields.password,gender:this.fields.gender};this.$store.dispatch("loginstore/register",r).then(function(r,t){200===r.status?e.$alert("회원등록이 성공했습니다. 로그인 해주세요.").then(function(){return e.$router.push("/")}):t&&e.$alert("회원등록이 되지 않았습니다. 다시 등록해주세요")})}else alert("빠진 항목을 확인해 주세요.")},clearForm:function(){this.fields.email="",this.fields.nickname="",this.fields.password=""},moveLoginpage:function(){this.$router.push("/login")}}},o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register pa-6"},[t("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[t("v-card",{staticClass:"elevation-12"},[t("v-toolbar",{staticClass:"ml-2",attrs:{dark:"",flat:""}},[t("v-toolbar-title",[e._v("Register")]),e._v(" "),t("v-spacer")],1),e._v(" "),t("v-card-text",[t("v-form",{ref:"form"},[t("v-text-field",{attrs:{id:"email",label:"ID로 쓰일 email을 입력하세요.",name:"email","prepend-icon":"mdi-account",type:"email",rules:[e.rules.email.require1,e.rules.email.require2,e.rules.email.duplicate],"error-messages":e.email_err_msg},model:{value:e.fields.email,callback:function(r){e.$set(e.fields,"email",r)},expression:"fields.email"}}),e._v(" "),t("v-text-field",{attrs:{id:"nickname",label:"닉네임을 입력하세요.",name:"nickname","prepend-icon":"mdi-alert-circle-check",type:"text",rules:[e.rules.nickname.require1,e.rules.nickname.require2,e.rules.nickname.require3,e.rules.nickname.require4,e.rules.nickname.duplicate],"error-messages":e.nickname_err_msg},model:{value:e.fields.nickname,callback:function(r){e.$set(e.fields,"nickname",r)},expression:"fields.nickname"}}),e._v(" "),t("v-text-field",{attrs:{id:"password",label:"비밀번호",name:"password","prepend-icon":"mdi-lock",type:"password",rules:e.passwordRules},model:{value:e.fields.password,callback:function(r){e.$set(e.fields,"password",r)},expression:"fields.password"}}),e._v(" "),t("v-text-field",{attrs:{id:"confirm",label:"비밀번호 확인",name:"confirm","prepend-icon":"mdi-alert-circle-check",type:"password",rules:e.confirmPasswordRules},model:{value:e.fields.confirm,callback:function(r){e.$set(e.fields,"confirm",r)},expression:"fields.confirm"}}),e._v(" "),t("v-radio-group",{attrs:{id:"gender",row:"",rules:e.genderRules},model:{value:e.fields.gender,callback:function(r){e.$set(e.fields,"gender",r)},expression:"fields.gender"}},[t("v-radio",{attrs:{label:"남",value:"male"}}),e._v(" "),t("v-radio",{attrs:{label:"여",value:"female"}})],1),e._v(" "),t("v-checkbox",{attrs:{rules:e.checkboxRules},scopedSlots:e._u([{key:"label",fn:function(){return[t("div",[t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on;return[t("a",e._g({attrs:{target:"_blank",href:"http://192.168.0.12:8080/TermsOfUse"},on:{click:function(e){e.stopPropagation()}}},n),[e._v("\n                          이용약관\n                        ")])]}}])},[e._v("\n                      이용약관 보기\n                    ")]),e._v("\n                    에 동의 합니다.\n                  ")],1)]},proxy:!0}]),model:{value:e.checkbox,callback:function(r){e.checkbox=r},expression:"checkbox"}})],1)],1),e._v(" "),t("v-card-actions",{staticClass:"justify-center"},[t("v-btn",{attrs:{color:"grey darken-3",dark:""},on:{click:e.moveLoginpage}},[e._v("로그인")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"grey darken-3",dark:""},on:{click:e.register}},[e._v("회원등록")])],1)],1)],1)],1)],1)],1)};o._withStripped=!0;var u={render:o,staticRenderFns:[]},d=u;var m=t("VU/8")(c,d,!1,null,null,null);m.options.__file="src/components/Register.vue";r.default=m.exports}});
//# sourceMappingURL=13.ca47462603a5c1cc5c96.js.map