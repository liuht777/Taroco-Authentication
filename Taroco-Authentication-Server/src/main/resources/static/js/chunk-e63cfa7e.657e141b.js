(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e63cfa7e"],{b39f:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"e",function(){return s}),r.d(t,"f",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"c",function(){return l}),r.d(t,"b",function(){return u});var a=r("b775");function n(e){return Object(a["b"])({url:"/clients/".concat(e),method:"get"})}function s(e){return Object(a["b"])({url:"/clients",method:"get",params:e})}function o(e){return Object(a["b"])({url:"/clients",method:"put",data:e})}function i(e){return Object(a["b"])({url:"/clients",method:"post",data:e})}function l(e){return Object(a["b"])({url:"/clients/".concat(e),method:"delete"})}function u(e){return Object(a["b"])({url:"/oauth/authorize",method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},data:e})}},d934:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticStyle:{"margin-bottom":"18px","text-align":"right"}},[r("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"default",icon:"reload"},on:{click:e.refreshList}},[e._v("刷新")]),r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新建")])],1),r("s-table",{ref:"table",attrs:{columns:e.columns,data:e.loadData,rowKey:function(e){return e.clientId}},scopedSlots:e._u([{key:"authorizedGrantTypes",fn:function(t,a){return r("span",{},e._l(a.authorizedGrantTypes,function(t,a){return r("a-tag",{key:a,attrs:{color:"blue"}},[e._v(e._s(t))])}),1)}},{key:"scopes",fn:function(t,a){return r("span",{},e._l(a.scope,function(t,a){return r("a-tag",{key:a,attrs:{color:"green"}},[e._v(e._s(t))])}),1)}},{key:"webServerRedirectUri",fn:function(t){return r("span",{},[r("a",[e._v(e._s(t))])])}},{key:"autoapprove",fn:function(t){return r("span",{},[t?[e._v("是")]:[e._v("否")]],2)}},{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])],1)}}])}),r("CreateClient",{ref:"CreateClient",on:{"on-refresh":e.refreshList}})],1)},n=[],s=r("2af9"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e._f("titleFilter")(e.isAdd),width:800},on:{ok:e.handleOk,cancel:e.resetForm},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"应用名称",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["appName",{rules:[{required:!0,max:50,message:"请输入应用名称,50以内"}]}],expression:"[\n          'appName',\n          {rules: [{ required: true, max: 50, message: '请输入应用名称,50以内' }]\n          }]"}],attrs:{disabled:!e.isAdd}})],1),e.isAdd?r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"应用密钥",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["clientSecret",{rules:[{required:!0,max:50,message:"请输入应用密钥,50以内"}]}],expression:"[\n          'clientSecret',\n          {rules: [{ required: true, max: 50, message: '请输入应用密钥,50以内' }]\n          }]"}],attrs:{type:"password"}})],1):e._e(),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"授权类型",hasFeedback:""}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["authorizedGrantTypes",{rules:[{required:!0,message:"请选择授权范围"}]}],expression:"[\n          'authorizedGrantTypes',\n          {rules: [{ required: true, message: '请选择授权范围' }]}\n        ]"}],attrs:{mode:"multiple"}},[r("a-select-option",{attrs:{value:"password"}},[e._v("password")]),r("a-select-option",{attrs:{value:"refresh_token"}},[e._v("refresh_token")]),r("a-select-option",{attrs:{value:"authorization_code"}},[e._v("authorization_code")])],1)],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"权限范围",hasFeedback:""}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["scope",{rules:[{required:!0,message:"请选择权限范围"}]}],expression:"[\n          'scope',\n          {rules: [{ required: true, message: '请选择权限范围' }]}\n        ]"}],attrs:{mode:"multiple"}},[r("a-select-option",{attrs:{value:"All"}},[e._v("All")]),r("a-select-option",{attrs:{value:"Read"}},[e._v("Read")]),r("a-select-option",{attrs:{value:"Write"}},[e._v("Write")]),r("a-select-option",{attrs:{value:"Server"}},[e._v("Server")])],1)],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"重定向地址",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["webServerRedirectUri",{rules:[{required:!0,message:"请输入重定向地址"},{pattern:/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,message:"请输入合法的重定向地址"}]}],expression:"[\n          'webServerRedirectUri',\n          {rules: [{ required: true, message: '请输入重定向地址' },\n                   {pattern: /^(https?|ftp):\\/\\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\\.)*[a-zA-Z0-9-]+\\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\\/($|[a-zA-Z0-9.,?'\\\\+&%$#=~_-]+))*$/, message: '请输入合法的重定向地址'}]}\n        ]"}]})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"自动认证"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["autoapprove",{rules:[{required:!0,message:"请选择是否自动认证"}],initialValue:!1}],expression:"[\n          'autoapprove',\n          { rules: [{ required: true, message: '请选择是否自动认证' }],\n            initialValue: false\n          }\n        ]"}]},[r("a-radio",{attrs:{value:!0}},[e._v("是")]),r("a-radio",{attrs:{value:!1}},[e._v("否")])],1)],1)],1)],1)},i=[],l=r("b39f"),u={name:"CreateClient",data:function(){return{clientId:null,visible:!1,isAdd:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:this.$form.createForm(this)}},filters:{titleFilter:function(e){var t={true:"新增",false:"编辑"};return t[e]}},methods:{init:function(e){var t=this;this.isAdd=!0,e?(this.clientId=e,this.isAdd=!1,Object(l["d"])(e).then(function(e){"SUCCEED"===e.status&&(t.form.setFieldsValue({appName:e.result.appName,authorizedGrantTypes:e.result.authorizedGrantTypes,scope:e.result.scope,webServerRedirectUri:e.result.webServerRedirectUri,autoapprove:e.result.autoapprove}),t.visible=!0)})):this.visible=!0},handleOk:function(){var e=this;this.form.validateFields(function(t,r){t||(e.isAdd?Object(l["a"])(r).then(function(t){"SUCCEED"===t.status&&(e.$message.success("操作成功!"),e.visible=!1,e.$emit("on-refresh"))}):Object(l["f"])(Object.assign({clientId:e.clientId},r)).then(function(t){"SUCCEED"===t.status&&(e.$message.success("操作成功!"),e.visible=!1,e.$emit("on-refresh"))}))})},resetForm:function(){this.form.resetFields()}}},c=u,d=r("2877"),p=Object(d["a"])(c,o,i,!1,null,null,null),m=p.exports,f={name:"TarocoClients",components:{STable:s["c"],CreateClient:m},data:function(){return{columns:[{title:"应用名称",dataIndex:"appName"},{title:"应用ID",dataIndex:"clientId"},{title:"授权类型",dataIndex:"authorizedGrantTypes",scopedSlots:{customRender:"authorizedGrantTypes"}},{title:"权限范围",dataIndex:"scope",scopedSlots:{customRender:"scopes"}},{title:"重定向地址",dataIndex:"webServerRedirectUri",scopedSlots:{customRender:"webServerRedirectUri"}},{title:"自动认证",dataIndex:"autoapprove",scopedSlots:{customRender:"autoapprove"}},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(e){return Object(l["e"])({size:e.pageSize,current:e.pageNo}).then(function(e){return e.result})}}},methods:{handleAdd:function(){this.$refs.CreateClient.init()},handleEdit:function(e){this.$refs.CreateClient.init(e.clientId)},handleDelete:function(e){var t=this;this.$confirm({title:"操作确认",content:"是否确认删除应用: "+e.appName+" ?",onOk:function(){Object(l["c"])(e.clientId).then(function(e){"SUCCEED"===e.status&&(t.$message.success("操作成功!"),t.refreshList())})}})},refreshList:function(){this.$refs.table.refresh(!0)}}},v=f,b=Object(d["a"])(v,a,n,!1,null,null,null);t["default"]=b.exports}}]);