"use strict";(self.webpackChunksolar_ds_stencil=self.webpackChunksolar_ds_stencil||[]).push([[349],{"./src/components/solar-ds/solar-button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Ghost:()=>Ghost,Outlined:()=>Outlined,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},type:{control:{type:"select"},options:["filled","outlined","ghost"]},variant:{control:{type:"select"},options:["red","black"]}}},Template=args=>`<solar-button variant="${args.variant}" type="${args.type}" size="${args.size}">${args.label}</solar-button>`,Primary=Template.bind({}),Secondary=Template.bind({}),Outlined=Template.bind({}),Ghost=Template.bind({});Primary.args={type:"filled",variant:"red",size:"medium",label:"Button"},Secondary.args={type:"filled",variant:"black",size:"medium",label:"Button"},Outlined.args={type:"outlined",variant:"red",size:"medium",label:"Button"},Ghost.args={type:"ghost",variant:"black",size:"medium",label:"Button"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => `<solar-button variant="${args.variant}" type="${args.type}" size="${args.size}">${args.label}</solar-button>`',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => `<solar-button variant="${args.variant}" type="${args.type}" size="${args.size}">${args.label}</solar-button>`',...Secondary.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'args => `<solar-button variant="${args.variant}" type="${args.type}" size="${args.size}">${args.label}</solar-button>`',...Outlined.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:'args => `<solar-button variant="${args.variant}" type="${args.type}" size="${args.size}">${args.label}</solar-button>`',...Ghost.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Outlined","Ghost"]}}]);