"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2530],{86292:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return o}});var n=t(87462),l=t(63366),m=(t(15007),t(64983)),r=t(91515),i=["components"],d={},p={_frontmatter:d},u=r.Z;function o(e){var a=e.components,t=(0,l.Z)(e,i);return(0,m.mdx)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"isemailavailable-query"},"isEmailAvailable query"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"isEmailAvailable")," query checks whether the specified email has already been used to create a customer account. A value of ",(0,m.mdx)("inlineCode",{parentName:"p"},"true")," indicates the email address is available, and the customer can use the email address to create an account."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"{isEmailAvailable (email): {IsEmailAvailableOutput}}")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following example checks whether the email address ",(0,m.mdx)("inlineCode",{parentName:"p"},"customer@example.com")," is available to create a customer account."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  isEmailAvailable(email: "customer@example.com") {\n    is_email_available\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "isEmailAvailable": {\n      "is_email_available": true\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attribute"},"Input attribute"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"email")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The email address to check")))),(0,m.mdx)("h2",{id:"output-attribute"},"Output attribute"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"is_email_available")),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"A value of ",(0,m.mdx)("inlineCode",{parentName:"td"},"true")," indicates the email address is available, and the customer can use the email address to create an account")))),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},"customer query")),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Email is invalid")),(0,m.mdx)("td",{parentName:"tr",align:null},"The given email-id is not in a proper format.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Field isEmailAvailable.email of required type String! was not provided")),(0,m.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"isEmailAvailable.email")," argument is empty.")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-is-email-available-md-ce34535defd5ff268ed2.js.map