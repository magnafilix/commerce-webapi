"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5737],{8098:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return p}});var n=a(87462),r=a(63366),m=(a(15007),a(64983)),l=a(91515),d=["components"],o={},i={_frontmatter:o},u=l.Z;function p(e){var t=e.components,a=(0,r.Z)(e,d);return(0,m.mdx)(u,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"generatecustomertoken-mutation"},"generateCustomerToken mutation"),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"generateCustomerToken")," mutation to create a new customer token."),(0,m.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  generateCustomerToken(\n    email: String!\n    password: String!\n  ) {\n    token\n  }\n}\n")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following call creates a new customer token."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  generateCustomerToken(\n    email: "bobloblaw@example.com"\n    password: "b0bl0bl@w"\n  ) {\n    token\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "generateCustomerToken": {\n      "token": "ar4116zozoagxty1xjn4lj13kim36r6x"\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"generateCustomerToken")," mutation requires the following inputs:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"email")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's email address")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"password")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer's password")))),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"generateCustomerToken")," mutation returns a valid token for the customer."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"token")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The customer token")))),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Specify the "email" value.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Specify the "password" value.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The value specified value in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"password")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.")),(0,m.mdx)("td",{parentName:"tr",align:null},"Authentication error. The email or password is incorrect, or the customer account is locked.")))),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"revoke-token.md"},"revokeCustomerToken mutation"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-generate-token-md-a5b9881483990fc2247c.js.map