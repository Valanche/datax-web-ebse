(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b3e06f8"],{"34e3":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"build-container"},[r("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[r("el-step",{attrs:{title:"步骤 1",description:"构建reader"}},[e._v("1")]),e._v(" "),r("el-step",{attrs:{title:"步骤 2",description:"构建writer"}},[e._v("2")]),e._v(" "),r("el-step",{attrs:{title:"步骤 3",description:"字段映射"}},[e._v("2")])],1),e._v(" "),r("el-button",{staticStyle:{"margin-top":"12px","margin-bottom":"12px"},on:{click:e.next}},[e._v("下一步")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active===1"}],staticClass:"step1"},[r("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.readerForm}},[r("el-form-item",{attrs:{label:"数据源"}},[r("el-select",{attrs:{filterable:""},on:{change:e.rDsChange},model:{value:e.readerForm.id,callback:function(t){e.$set(e.readerForm,"id",t)},expression:"readerForm.id"}},e._l(e.rDsList,function(e){return r("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"表"}},[r("el-select",{attrs:{filterable:""},on:{change:e.rTbChange},model:{value:e.readerForm.tableName,callback:function(t){e.$set(e.readerForm,"tableName",t)},expression:"readerForm.tableName"}},e._l(e.rTbList,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"querySql",prop:"querySql"}},[r("el-input",{attrs:{placeholder:"sql查询，一般用于多表关联查询时才用"},model:{value:e.readerForm.querySql,callback:function(t){e.$set(e.readerForm,"querySql",t)},expression:"readerForm.querySql"}}),e._v(" "),r("el-button",{on:{click:function(t){return t.preventDefault(),e.getColumns("reader")}}},[e._v("解析字段")])],1),e._v(" "),r("el-form-item",{attrs:{label:"字段"}},[r("el-checkbox",{attrs:{indeterminate:e.readerForm.isIndeterminate},on:{change:e.rHandleCheckAllChange},model:{value:e.readerForm.checkAll,callback:function(t){e.$set(e.readerForm,"checkAll",t)},expression:"readerForm.checkAll"}},[e._v("全选")]),e._v(" "),r("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),r("el-checkbox-group",{on:{change:e.rHandleCheckedChange},model:{value:e.readerForm.columns,callback:function(t){e.$set(e.readerForm,"columns",t)},expression:"readerForm.columns"}},e._l(e.rColumnList,function(t){return r("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"where",prop:"where"}},[r("el-input",{attrs:{placeholder:"where条件"},model:{value:e.readerForm.where,callback:function(t){e.$set(e.readerForm,"where",t)},expression:"readerForm.where"}})],1)],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.active,expression:"active===2"}],staticClass:"step2"},[r("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.readerForm}},[r("el-form-item",[r("el-switch",{attrs:{"active-text":"streamwriter","inactive-text":"other"},model:{value:e.ifStreamWriter,callback:function(t){e.ifStreamWriter=t},expression:"ifStreamWriter"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数据源"}},[r("el-select",{attrs:{disabled:e.ifStreamWriter,filterable:""},on:{change:e.wDsChange},model:{value:e.writerForm.id,callback:function(t){e.$set(e.writerForm,"id",t)},expression:"writerForm.id"}},e._l(e.rDsList,function(e){return r("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"表"}},[r("el-select",{attrs:{disabled:e.ifStreamWriter,filterable:""},on:{change:e.wTbChange},model:{value:e.writerForm.tableName,callback:function(t){e.$set(e.writerForm,"tableName",t)},expression:"writerForm.tableName"}},e._l(e.wTbList,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"字段"}},[r("el-checkbox",{attrs:{indeterminate:e.writerForm.isIndeterminate},on:{change:e.wHandleCheckAllChange},model:{value:e.writerForm.checkAll,callback:function(t){e.$set(e.writerForm,"checkAll",t)},expression:"writerForm.checkAll"}},[e._v("全选")]),e._v(" "),r("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),r("el-checkbox-group",{on:{change:e.wHandleCheckedChange},model:{value:e.writerForm.columns,callback:function(t){e.$set(e.writerForm,"columns",t)},expression:"writerForm.columns"}},e._l(e.wColumnList,function(t){return r("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"preSql",prop:"preSql"}},[r("el-input",{attrs:{placeholder:"preSql"},model:{value:e.writerForm.preSql,callback:function(t){e.$set(e.writerForm,"preSql",t)},expression:"writerForm.preSql"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.beforeBuildJson}},[e._v("构建")])],1)],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:3===e.active,expression:"active===3"}],staticClass:"step2"},[e._v("\n      33\n    ")])],1),e._v(" "),r("json-editor",{directives:[{name:"show",rawName:"v-show",value:2===e.active,expression:"active===2"}],ref:"jsonEditor",model:{value:e.configJson,callback:function(t){e.configJson=t},expression:"configJson"}})],1)},i=[],o=r("b775");function n(e){return Object(o["a"])({url:"/api/jdbcDatasourceQuery/getTables",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/api/jdbcDatasourceQuery/getColumns",method:"get",params:e})}function l(e){return Object(o["a"])({url:"/api/jdbcDatasourceQuery/getColumnsByQuerySql",method:"get",params:e})}function c(e){return Object(o["a"])({url:"/api/dataxJson/buildJson",method:"post",data:e})}var u=r("7e39"),m=r("fa7e"),d={components:{JsonEditor:m["a"]},data:function(){return{configJson:"",jdbcDsQuery:{current:1,size:50},rDsList:[],rTbList:[],rColumnList:[],loading:!1,active:1,readerForm:{datasourceId:void 0,tableName:"",columns:[],where:"",querySql:"",checkAll:!1,isIndeterminate:!0},ifStreamWriter:!0,wDsList:[],wTbList:[],wColumnList:[],writerForm:{datasourceId:void 0,tableName:"",columns:[],checkAll:!1,isIndeterminate:!0,preSql:""}}},created:function(){this.getJdbcDs()},methods:{getJdbcDs:function(){var e=this;this.loading=!0,Object(u["d"])(this.jdbcDsQuery).then(function(t){var r=t.records;e.rDsList=r,e.loading=!1})},getTables:function(e){var t=this;if("reader"===e){var r={datasourceId:this.readerForm.datasourceId};n(r).then(function(e){t.rTbList=e})}else if("writer"===e){var a={datasourceId:this.writerForm.datasourceId};n(a).then(function(e){t.wTbList=e})}},last:function(){this.active--<1&&(this.active=1)},next:function(){1===this.active?this.readerForm.columns.length>0?this.active++:this.$message({message:"无法进行下一步",type:"warning"}):3===this.active++&&(this.active=1)},rDsChange:function(e){this.readerForm.tableName="",this.readerForm.datasourceId=e,this.getTables("reader")},wDsChange:function(e){this.writerForm.tableName="",this.writerForm.datasourceId=e,this.getTables("writer")},getTableColumns:function(){var e=this,t={datasourceId:this.readerForm.datasourceId,tableName:this.readerForm.tableName};s(t).then(function(t){e.rColumnList=t,e.readerForm.columns=t,e.readerForm.checkAll=!0,e.readerForm.isIndeterminate=!1})},getColumnsByQuerySql:function(){var e=this,t={datasourceId:this.readerForm.datasourceId,querySql:this.readerForm.querySql};l(t).then(function(t){e.rColumnList=t,e.readerForm.columns=t,e.readerForm.checkAll=!0,e.readerForm.isIndeterminate=!1})},getColumns:function(e){var t=this;if("reader"===e)""!==this.readerForm.querySql?this.getColumnsByQuerySql():this.getTableColumns();else if("writer"===e){var r={datasourceId:this.writerForm.datasourceId,tableName:this.writerForm.tableName};s(r).then(function(e){t.wColumnList=e,t.writerForm.columns=e,t.writerForm.checkAll=!0,t.writerForm.isIndeterminate=!1})}},rTbChange:function(e){this.readerForm.tableName=e,this.rColumnList=[],this.readerForm.columns=[],this.getColumns("reader")},wTbChange:function(e){this.writerForm.tableName=e,this.wColumnList=[],this.writerForm.columns=[],this.getColumns("writer")},beforeBuildJson:function(){(this.writerForm.columns.length>0||!0===this.ifStreamWriter)&&this.buildJson()},buildJson:function(){var e=this;console.info(this.readerForm);var t={readerDatasourceId:this.readerForm.datasourceId,readerTables:[this.readerForm.tableName],readerColumns:this.readerForm.columns,ifStreamWriter:this.ifStreamWriter,writerDatasourceId:this.writerForm.datasourceId,writerTables:[this.writerForm.tableName],writerColumns:this.writerForm.columns,whereParams:this.readerForm.where,querySql:this.readerForm.querySql,preSql:this.writerForm.preSql};console.info(t),c(t).then(function(t){console.log(t),e.configJson=JSON.parse(t)})},rHandleCheckAllChange:function(e){this.readerForm.columns=e?this.rColumnList:[],this.readerForm.isIndeterminate=!1},rHandleCheckedChange:function(e){var t=e.length;this.readerForm.checkAll=t===this.rColumnList.length,this.readerForm.isIndeterminate=t>0&&t<this.rColumnList.length},wHandleCheckAllChange:function(e){this.writerForm.columns=e?this.wColumnList:[],this.writerForm.isIndeterminate=!1},wHandleCheckedChange:function(e){var t=e.length;this.writerForm.checkAll=t===this.wColumnList.length,this.writerForm.isIndeterminate=t>0&&t<this.wColumnList.length}}},h=d,b=r("2877"),f=Object(b["a"])(h,a,i,!1,null,"8191a7f6",null);t["default"]=f.exports},"7e39":function(e,t,r){"use strict";r.d(t,"d",function(){return i}),r.d(t,"c",function(){return o}),r.d(t,"e",function(){return n}),r.d(t,"a",function(){return s}),r.d(t,"b",function(){return l});var a=r("b775");function i(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/"+e,method:"get"})}function n(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/",method:"put",data:e})}function s(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/",method:"delete",params:e})}},b8b0:function(e,t,r){"use strict";var a=r("f84c"),i=r.n(a);i.a},f84c:function(e,t,r){},fa7e:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"json-editor"},[r("textarea",{ref:"textarea"})])},i=[],o=r("56b3"),n=r.n(o);r("0dd0"),r("a7be"),r("acdf"),r("f9d4"),r("8822"),r("d2de");r("ae67");var s={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){var t=this.jsonEditor.getValue();e!==t&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}},mounted:function(){var e=this;this.jsonEditor=n.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())})},methods:{getValue:function(){return this.jsonEditor.getValue()}}},l=s,c=(r("b8b0"),r("2877")),u=Object(c["a"])(l,a,i,!1,null,"fad11014",null);t["a"]=u.exports}}]);