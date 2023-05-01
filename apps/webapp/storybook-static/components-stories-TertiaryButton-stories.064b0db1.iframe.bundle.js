"use strict";(self.webpackChunkwebapp=self.webpackChunkwebapp||[]).push([[819],{"./app/components/primitives/Buttons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C9:()=>TertiaryButton,KM:()=>PrimaryButton,O3:()=>DangerButton,c2:()=>PrimaryLink,kq:()=>SecondaryButton});var _remix_run_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@remix-run+react@1.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@remix-run/react/dist/esm/components.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const commonClasses="inline-flex items-center justify-center max-w-max rounded transition whitespace-nowrap",primaryClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,"px-4 py-2 bg-indigo-700 text-white hover:bg-indigo-600 focus-visible:ring-indigo-800 gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"),secondaryClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,"px-4 py-2 bg-transparent ring-1 ring-slate-700 ring-inset text-white hover:bg-white/5 hover:border-slate-700 focus-visible:ring-slate-300 gap-2"),tertiaryClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,"text-slate-300/70 hover:text-white gap-1"),dangerClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,"px-4 py-2 bg-rose-700 text-white hover:bg-rose-600 focus-visible:ring-rose-800 gap-2"),toxicClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,"hover:cursor-pointer px-3 py-1 transition bg-gradient-to-r from-acid-500 to-toxic-500 text-slate-1000 !text-base font-bold hover:from-acid-600 hover:to-toxic-600 focus-visible:ring-slate-300");function getSizeClassName(size){return"large"===size?"text-lg":"text-sm"}function PrimaryButton({children,size="regular",className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(primaryClasses,getSizeClassName(size),className),...props,children})}function SecondaryButton({children,size="regular",className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(secondaryClasses,getSizeClassName(size),className),...props,children})}function TertiaryButton({children,size="regular",className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(tertiaryClasses,getSizeClassName(size),className),...props,children})}function DangerButton({children,size="regular",className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(dangerClasses,getSizeClassName(size),className),...props,children})}function PrimaryLink({children,size="regular",className,to,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_remix_run_react__WEBPACK_IMPORTED_MODULE_2__.rU,{to,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(primaryClasses,getSizeClassName(size),className),...props,children})}function SecondaryLink({children,className,size="regular",to,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_remix_run_react__WEBPACK_IMPORTED_MODULE_2__.rU,{to,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(secondaryClasses,getSizeClassName(size),className),...props,children})}function TertiaryLink({children,className,size="regular",to,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_remix_run_react__WEBPACK_IMPORTED_MODULE_2__.rU,{to,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(tertiaryClasses,getSizeClassName(size),className),...props,children})}function DangerLink({children,className,size="regular",to,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_remix_run_react__WEBPACK_IMPORTED_MODULE_2__.rU,{to,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(dangerClasses,getSizeClassName(size),className),...props,children})}function ToxicLink({children,className,size="regular",to,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_remix_run_react__WEBPACK_IMPORTED_MODULE_2__.rU,{to,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(toxicClasses,getSizeClassName(size),className),...props,children})}function PrimaryA({children,className,size="regular",href,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(primaryClasses,getSizeClassName(size),className),...props,children})}function SecondaryA({children,className,size="regular",href,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(secondaryClasses,getSizeClassName(size),className),...props,children})}function TertiaryA({children,className,size="regular",href,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(tertiaryClasses,getSizeClassName(size),className),...props,children})}function ToxicA({children,className,size="regular",href,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(toxicClasses,getSizeClassName(size),className),...props,children})}PrimaryButton.displayName="PrimaryButton",SecondaryButton.displayName="SecondaryButton",TertiaryButton.displayName="TertiaryButton",DangerButton.displayName="DangerButton",PrimaryLink.displayName="PrimaryLink",SecondaryLink.displayName="SecondaryLink",TertiaryLink.displayName="TertiaryLink",DangerLink.displayName="DangerLink",ToxicLink.displayName="ToxicLink",PrimaryA.displayName="PrimaryA",SecondaryA.displayName="SecondaryA",TertiaryA.displayName="TertiaryA",ToxicA.displayName="ToxicA";try{PrimaryButton.displayName="PrimaryButton",PrimaryButton.__docgenInfo={description:"",displayName:"PrimaryButton",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#PrimaryButton"]={docgenInfo:PrimaryButton.__docgenInfo,name:"PrimaryButton",path:"app/components/primitives/Buttons.tsx#PrimaryButton"})}catch(__react_docgen_typescript_loader_error){}try{SecondaryButton.displayName="SecondaryButton",SecondaryButton.__docgenInfo={description:"",displayName:"SecondaryButton",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#SecondaryButton"]={docgenInfo:SecondaryButton.__docgenInfo,name:"SecondaryButton",path:"app/components/primitives/Buttons.tsx#SecondaryButton"})}catch(__react_docgen_typescript_loader_error){}try{TertiaryButton.displayName="TertiaryButton",TertiaryButton.__docgenInfo={description:"",displayName:"TertiaryButton",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#TertiaryButton"]={docgenInfo:TertiaryButton.__docgenInfo,name:"TertiaryButton",path:"app/components/primitives/Buttons.tsx#TertiaryButton"})}catch(__react_docgen_typescript_loader_error){}try{DangerButton.displayName="DangerButton",DangerButton.__docgenInfo={description:"",displayName:"DangerButton",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#DangerButton"]={docgenInfo:DangerButton.__docgenInfo,name:"DangerButton",path:"app/components/primitives/Buttons.tsx#DangerButton"})}catch(__react_docgen_typescript_loader_error){}try{PrimaryLink.displayName="PrimaryLink",PrimaryLink.__docgenInfo={description:"",displayName:"PrimaryLink",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#PrimaryLink"]={docgenInfo:PrimaryLink.__docgenInfo,name:"PrimaryLink",path:"app/components/primitives/Buttons.tsx#PrimaryLink"})}catch(__react_docgen_typescript_loader_error){}try{SecondaryLink.displayName="SecondaryLink",SecondaryLink.__docgenInfo={description:"",displayName:"SecondaryLink",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#SecondaryLink"]={docgenInfo:SecondaryLink.__docgenInfo,name:"SecondaryLink",path:"app/components/primitives/Buttons.tsx#SecondaryLink"})}catch(__react_docgen_typescript_loader_error){}try{TertiaryLink.displayName="TertiaryLink",TertiaryLink.__docgenInfo={description:"",displayName:"TertiaryLink",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#TertiaryLink"]={docgenInfo:TertiaryLink.__docgenInfo,name:"TertiaryLink",path:"app/components/primitives/Buttons.tsx#TertiaryLink"})}catch(__react_docgen_typescript_loader_error){}try{DangerLink.displayName="DangerLink",DangerLink.__docgenInfo={description:"",displayName:"DangerLink",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#DangerLink"]={docgenInfo:DangerLink.__docgenInfo,name:"DangerLink",path:"app/components/primitives/Buttons.tsx#DangerLink"})}catch(__react_docgen_typescript_loader_error){}try{ToxicLink.displayName="ToxicLink",ToxicLink.__docgenInfo={description:"",displayName:"ToxicLink",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#ToxicLink"]={docgenInfo:ToxicLink.__docgenInfo,name:"ToxicLink",path:"app/components/primitives/Buttons.tsx#ToxicLink"})}catch(__react_docgen_typescript_loader_error){}try{PrimaryA.displayName="PrimaryA",PrimaryA.__docgenInfo={description:"",displayName:"PrimaryA",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#PrimaryA"]={docgenInfo:PrimaryA.__docgenInfo,name:"PrimaryA",path:"app/components/primitives/Buttons.tsx#PrimaryA"})}catch(__react_docgen_typescript_loader_error){}try{SecondaryA.displayName="SecondaryA",SecondaryA.__docgenInfo={description:"",displayName:"SecondaryA",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#SecondaryA"]={docgenInfo:SecondaryA.__docgenInfo,name:"SecondaryA",path:"app/components/primitives/Buttons.tsx#SecondaryA"})}catch(__react_docgen_typescript_loader_error){}try{TertiaryA.displayName="TertiaryA",TertiaryA.__docgenInfo={description:"",displayName:"TertiaryA",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#TertiaryA"]={docgenInfo:TertiaryA.__docgenInfo,name:"TertiaryA",path:"app/components/primitives/Buttons.tsx#TertiaryA"})}catch(__react_docgen_typescript_loader_error){}try{ToxicA.displayName="ToxicA",ToxicA.__docgenInfo={description:"",displayName:"ToxicA",props:{size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/primitives/Buttons.tsx#ToxicA"]={docgenInfo:ToxicA.__docgenInfo,name:"ToxicA",path:"app/components/primitives/Buttons.tsx#ToxicA"})}catch(__react_docgen_typescript_loader_error){}},"./app/components/stories/TertiaryButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _primitives_Buttons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/components/primitives/Buttons.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Primitives/TertiaryButton",component:_primitives_Buttons__WEBPACK_IMPORTED_MODULE_1__.C9},Basic={args:{children:"Tertiary Button"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_primitives_Buttons__WEBPACK_IMPORTED_MODULE_1__.C9,{...args})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Tertiary Button"\n  },\n  render: args => <TertiaryButton {...args} />\n}',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]}}]);