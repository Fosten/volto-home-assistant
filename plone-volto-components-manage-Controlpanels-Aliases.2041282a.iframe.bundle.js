"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[5772],{"./src/components/manage/Controlpanels/Aliases.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var lodash_map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js"),lodash_map__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/react-router@5.2.0_react@18.2.0/node_modules/react-router/esm/react-router.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/index.js"),_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/actions/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Header/Header.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Message/Message.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/addons/Radio/Radio.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/addons/Pagination/Pagination.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js"),react_intl__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),react_intl__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),_plone_volto_components_manage_Widgets_DatetimeWidget__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/manage/Widgets/DatetimeWidget.jsx"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/index.js"),_plone_volto_hooks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/hooks/index.js"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9__),react_toastify__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/react-toastify@5.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/esm/react-toastify.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_1__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({back:{id:"Back",defaultMessage:"Back"},aliases:{id:"URL Management",defaultMessage:"URL Management"},success:{id:"Success",defaultMessage:"Success"},successAdd:{id:"Alias has been added",defaultMessage:"Alias has been added"}}),filterChoices=[{label:"Both",value:""},{label:"Automatically",value:"no"},{label:"Manually",value:"yes"}],itemsPerPageChoices=[10,25,50,"All"],Aliases=props=>{const title=props,intl=(0,react_intl__WEBPACK_IMPORTED_MODULE_11__.c)(),dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(),{pathname:pathname}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.IT)(),history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Uz)(),aliases=(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state=>state.aliases)),{0:filterType,1:setFilterType}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(filterChoices[0]),{0:createdBefore,1:setCreatedBefore}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),{0:altUrlPath,1:setAltUrlPath}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),{0:isAltUrlCorrect,1:setIsAltUrlCorrect}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),{0:targetUrlPath,1:setTargetUrlPath}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),{0:aliasesToRemove,1:setAliasesToRemove}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),{0:errorMessageAdd,1:setErrorMessageAdd}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),{0:filterQuery,1:setFilterQuery}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),{0:activePage,1:setActivePage}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),{0:pages,1:setPages}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),{0:itemsPerPage,1:setItemsPerPage}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10),isClient=(0,_plone_volto_hooks__WEBPACK_IMPORTED_MODULE_8__.WC)(),prevaliasesitemstotal=(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.i0)(aliases.items_total),previtemsPerPage=(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.i0)(itemsPerPage),prevactivePage=(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.i0)(activePage),prevalturlpath=(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.i0)(altUrlPath),prevtargetUrlPath=(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.i0)(targetUrlPath),prevaliasesaddloading=(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.i0)(aliases.add.loading),prevaliasesremoveloading=(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.i0)(aliases.remove.loading);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(prevaliasesitemstotal!==aliases.items_total||previtemsPerPage!==itemsPerPage){const pages=Math.ceil(aliases.items_total/itemsPerPage);0===pages||isNaN(pages)?setPages(""):setPages(pages)}prevactivePage===activePage&&previtemsPerPage===itemsPerPage||dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.cj)((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.U$)(pathname),{query:filterQuery,manual:filterType.value,datetime:createdBefore,batchSize:"All"===itemsPerPage?999999999999:itemsPerPage,batchStart:(activePage-1)*itemsPerPage})),prevalturlpath!==altUrlPath&&("/"===altUrlPath.charAt(0)?setIsAltUrlCorrect(!0):setIsAltUrlCorrect(!1))}),[itemsPerPage,pathname,prevaliasesitemstotal,aliases.items_total,previtemsPerPage,prevactivePage,activePage,prevalturlpath,altUrlPath,prevtargetUrlPath,targetUrlPath,dispatch,filterQuery,filterType.value,createdBefore]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{prevaliasesaddloading&&!aliases.add.loaded&&aliases.add.error&&setErrorMessageAdd(aliases.add.error.response.body.message),prevaliasesaddloading&&aliases.add.loaded&&(dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.cj)((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.U$)(pathname),{query:filterQuery,manual:filterType.value,datetime:createdBefore,batchSize:itemsPerPage})),react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_7__.qAm,{success:!0,title:intl.formatMessage(messages.success),content:intl.formatMessage(messages.successAdd)})),aliases.add.error||setErrorMessageAdd("")),prevaliasesremoveloading&&aliases.remove.loaded&&dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.cj)((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.U$)(pathname),{query:filterQuery,manual:filterType.value,datetime:createdBefore,batchSize:itemsPerPage}))}),[prevaliasesaddloading,aliases.add.loaded,aliases.add.error,aliases.remove.loaded,prevaliasesremoveloading,dispatch,pathname,filterQuery,filterType.value,createdBefore,itemsPerPage,intl]);const handleSubmitAlias=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{isAltUrlCorrect&&(dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.W0)("",{items:[{path:altUrlPath,"redirect-to":targetUrlPath}]})),setAltUrlPath(""),setTargetUrlPath(""))}),[isAltUrlCorrect,altUrlPath,targetUrlPath,dispatch]);return __jsx("div",{id:"page-aliases"},__jsx(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.So,{title:intl.formatMessage(messages.aliases)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,null,__jsx("article",{id:"content"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"URL Management",defaultMessage:"URL Management",values:{title:__jsx("q",null,title)}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{size:"medium"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Alternative url path (Required)",defaultMessage:"Alternative url path (Required)"})),__jsx("p",{className:"help"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Enter the absolute path where the alternative url should exist. The path must start with '/'. Only urls that result in a 404 not found page will result in a redirect occurring.",defaultMessage:"Enter the absolute path where the alternative url should exist. The path must start with '/'. Only urls that result in a 404 not found page will result in a redirect occurring."})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.Field,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__.c,{id:"alternative-url-input",name:"alternative-url-path",placeholder:"/example",value:altUrlPath,onChange:e=>{return url=e.target.value,void setAltUrlPath(url);var url}}),!isAltUrlCorrect&&""!==altUrlPath&&__jsx("p",{style:{color:"red"}},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Alternative url path must start with a slash.",defaultMessage:"Alternative url path must start with a slash."}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{size:"medium"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Target Path (Required)",defaultMessage:"Target Path (Required)"})),__jsx("p",{className:"help"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Enter the absolute path of the target. Target must exist or be an existing alternative url path to the target.",defaultMessage:"Enter the absolute path of the target. Target must exist or be an existing alternative url path to the target."})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.Field,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__.c,{id:"target-url-input",name:"target-url-path",placeholder:"/example",value:targetUrlPath,onChange:e=>{return url=e.target.value,void setTargetUrlPath(url);var url}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{id:"submit-alias",primary:!0,onClick:()=>handleSubmitAlias(),disabled:!isAltUrlCorrect||""===altUrlPath||""===targetUrlPath},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Add",defaultMessage:"Add"})),errorMessageAdd&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c,{color:"red"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c.Header,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"ErrorHeader",defaultMessage:"Error"})),__jsx("p",null,errorMessageAdd)))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,{className:"primary"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{size:"medium"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"All existing alternative urls for this site",defaultMessage:"All existing alternative urls for this site"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{size:"small"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Filter by prefix",defaultMessage:"Filter by prefix"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.Field,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__.c,{name:"filter",placeholder:"/example",value:filterQuery,onChange:e=>{return query=e.target.value,void setFilterQuery(query);var query}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{size:"small"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Manually or automatically added?",defaultMessage:"Manually or automatically added?"})),filterChoices.map(((o,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.Field,{key:i},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,{label:o.label,name:"radioGroup",value:o.value,checked:filterType===o,onChange:()=>{setFilterType(o)}})))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.Field,null,__jsx(_plone_volto_components_manage_Widgets_DatetimeWidget__WEBPACK_IMPORTED_MODULE_6__.default,{id:"created-before-date",title:"Created before",dateOnly:!0,value:createdBefore,onChange:(id,value)=>{setCreatedBefore(value)}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{onClick:()=>{dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.cj)((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.U$)(pathname),{query:filterQuery,manual:filterType.value,datetime:createdBefore,batchSize:itemsPerPage}))},primary:!0},"Filter"),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{size:"small"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Alternative url path → target url path (date and time of creation, manually created yes/no)",defaultMessage:"Alternative url path → target url path (date and time of creation, manually created yes/no)"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Body,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Select",defaultMessage:"Select"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Alias",defaultMessage:"Alias"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Target",defaultMessage:"Target"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Date",defaultMessage:"Date"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Manual",defaultMessage:"Manual"}))),aliases.items.length>0&&aliases.items.map(((alias,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Row,{key:i},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Cell,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c,{onChange:(e,{value:value})=>(alias=>{const aliasess=[...aliasesToRemove];if(aliasess.includes(alias)){const index=aliasess.indexOf(alias);if(index>-1){let newAliasesArr=aliasess;newAliasesArr.splice(index,1),setAliasesToRemove(newAliasesArr)}}else setAliasesToRemove([...aliasesToRemove,alias])})(value),checked:aliasesToRemove.includes(alias.path),value:alias.path})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Cell,null,__jsx("p",null,alias.path)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Cell,null,__jsx("p",null,alias["redirect-to"])),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Cell,null,__jsx("p",null,alias.datetime)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Cell,null,__jsx("p",null,`${alias.manual}`))))))),__jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",marginBottom:"20px"}},pages&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c,{boundaryRange:0,activePage:activePage,ellipsisItem:null,firstItem:null,lastItem:null,siblingRange:1,totalPages:pages,onPageChange:(e,o)=>((e,{activePage:activePage})=>{setActivePage(activePage)})(0,o)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_26__.c.Menu,{position:"right",style:{display:"flex",marginLeft:"auto"}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_26__.c.Item,{style:{color:"grey"}},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Show",defaultMessage:"Show"}),":"),lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(itemsPerPageChoices,(size=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_26__.c.Item,{style:{padding:"0 0.4em",margin:"0em 0.357em",cursor:"pointer"},key:size,value:size,active:size===itemsPerPage,onClick:(e,o)=>((e,{value:value})=>{setItemsPerPage(value),setActivePage(1)})(0,o)},size))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{disabled:0===aliasesToRemove.length,onClick:()=>{const items=aliasesToRemove.map((a=>({path:a})));dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.Oq)("",{items:items})),setAliasesToRemove([])},primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.c,{id:"Remove selected",defaultMessage:"Remove selected"}))))))),isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal)(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_7__.YT3,{pathname:pathname,hideDefaultViewButtons:!0,inner:__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.cH,{className:"item",to:"#",onClick:()=>{history.push((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__.yn)(pathname))}},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_7__.GWx,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9___default(),className:"contents circled",size:"30px",title:intl.formatMessage(messages.back)}))}),document.getElementById("toolbar")))};__webpack_exports__.default=Aliases,Aliases.__docgenInfo={description:"",methods:[],displayName:"Aliases"}}}]);