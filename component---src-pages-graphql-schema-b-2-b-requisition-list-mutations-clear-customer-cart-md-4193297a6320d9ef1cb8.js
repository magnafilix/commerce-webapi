"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1778],{70685:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return u},default:function(){return c}});var n,r=a(87462),m=a(63366),l=(a(15007),a(64983)),d=a(91515),i=a(69115),o=["components"],u={},p=(n="InlineAlert",function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",t)}),s={_frontmatter:u},x=d.Z;function c(t){var e=t.components,a=(0,m.Z)(t,o);return(0,l.mdx)(x,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"clearcustomercart-mutation"},"clearCustomerCart mutation"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"clearCustomerCart")," mutation clears the customer's cart."),(0,l.mdx)("p",null,"This mutation requires a valid ",(0,l.mdx)("a",{parentName:"p",href:"../../../customer/mutations/generate-token.md"},"customer authentication token"),"."),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Use the ",(0,l.mdx)("a",{parentName:"p",href:"../../../../schema/store/queries/store-config.md"},"storeConfig query")," with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"is_requisition_list_active")," attribute to determine whether requisition lists are enabled."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  clearCustomerCart(\n    cartUid: String!\n  ) {\n    ClearCustomerCartOutput\n  }\n}\n")),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("p",null,"The following example clears the customer's cart."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  clearCustomerCart(\n      cartUid: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"\n    ) {\n        status\n    }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "clearCustomerCart": {\n        "status": "true"\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"clearCustomerCart")," mutation requires the following input."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"cartUid")),(0,l.mdx)("td",{parentName:"tr",align:null},"String!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The masked ID of the cart.")))),(0,l.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"clearCustomerCart")," object returns the status and cart object."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"cart")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#cart-object"},"Cart")),(0,l.mdx)("td",{parentName:"tr",align:null},"The cart after clearing items.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"status")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean!"),(0,l.mdx)("td",{parentName:"tr",align:null},"Indicates whether cart was cleared.")))),(0,l.mdx)("h3",{id:"cart-object"},"Cart object"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"Cart")," object can contain the following attributes."),(0,l.mdx)(i.default,{mdxType:"CartObject"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-requisition-list-mutations-clear-customer-cart-md-4193297a6320d9ef1cb8.js.map