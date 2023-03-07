"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7111],{6308:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return u}});var t,r=n(87462),d=n(63366),l=(n(15007),n(64983)),m=n(91515),i=["components"],p={},o=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),c={_frontmatter:p},s=m.Z;function u(e){var a=e.components,n=(0,d.Z)(e,i);return(0,l.mdx)(s,(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"manage-company-credit"},"Manage company credit"),(0,l.mdx)("p",null,"The company credit entity operates with the following attributes:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Credit limit"),(0,l.mdx)("li",{parentName:"ul"},"Available credit"),(0,l.mdx)("li",{parentName:"ul"},"Outstanding balance")),(0,l.mdx)("p",null,"The credit limit is allocated by seller, while available credit and outstanding balance are automatically calculated by the system based on the buyer transactions (place an order, return) and seller's transactions (refund, reimburse, update credit limit, cancel order)."),(0,l.mdx)("h2",{id:"manage-company-credit-limits"},"Manage company credit limits"),(0,l.mdx)("p",null,"When you create a company, the credit limit is set to 0. Use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"PUT /V1/companyCredits/:id")," call to change this value and perform other updates to the company's credit settings."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-terminal"},"PUT /V1/companyCredits/:id\nGET /V1/companyCredits/:creditId\nGET /V1/companyCredits/company/:companyId\nGET /V1/companyCredits/\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Company credit parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Format"),(0,l.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"id")),(0,l.mdx)("td",{parentName:"tr",align:null},"The credit ID generated by the system"),(0,l.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"company_id")),(0,l.mdx)("td",{parentName:"tr",align:null},"Company ID"),(0,l.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"credit_limit")),(0,l.mdx)("td",{parentName:"tr",align:null},"The amount of credit granted to the company"),(0,l.mdx)("td",{parentName:"tr",align:null},"Float"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"balance")),(0,l.mdx)("td",{parentName:"tr",align:null},"The amount the company currently owes the seller"),(0,l.mdx)("td",{parentName:"tr",align:null},"Float"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"currency_code")),(0,l.mdx)("td",{parentName:"tr",align:null},"The currency code for the company's credit, such as USD"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"exceed_limit")),(0,l.mdx)("td",{parentName:"tr",align:null},"Indicates whether the company can exceed their credit limit"),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"available_limit")),(0,l.mdx)("td",{parentName:"tr",align:null},"The amount of credit currently available to the company"),(0,l.mdx)("td",{parentName:"tr",align:null},"Float"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"credit_comment")),(0,l.mdx)("td",{parentName:"tr",align:null},"Describes the change being made"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,l.mdx)("h3",{id:"update-a-company-credit-limit"},"Update a company credit limit"),(0,l.mdx)("p",null,"This call changes the company's credit limit to $1000. The ",(0,l.mdx)("inlineCode",{parentName:"p"},"available_limit")," parameter is calculated, so you cannot specify the value."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Service Name:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"companyCreditCreditLimitRepositoryV1")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"PUT <host>/rest/<store_code>/V1/companyCredits/2")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "creditLimit": {\n  "id": 2,\n  "company_id": 2,\n  "credit_limit": 1000,\n  "currency_code": "USD"\n  }\n}\n')),(0,l.mdx)("h4",{id:"response"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 2,\n    "company_id": 2,\n    "credit_limit": 1000,\n    "balance": 0,\n    "currency_code": "USD",\n    "exceed_limit": false,\n    "available_limit": 1000\n}\n')),(0,l.mdx)("h3",{id:"get-details-about-a-companys-credit-limit-using-credit-id"},"Get details about a company's credit limit using credit ID"),(0,l.mdx)("p",null,"This call returns data on the credit limit for the specified credit ID."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Service Name:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"companyCreditCreditLimitRepositoryV1")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/companyCredits/2")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload-1"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,l.mdx)("h4",{id:"response-1"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2,\n  "company_id": 2,\n  "credit_limit": 500,\n  "balance": 0,\n  "currency_code": "USD",\n  "exceed_limit": false,\n  "available_limit": 500\n}\n')),(0,l.mdx)("h3",{id:"get-details-about-a-companys-credit-limit-using-company-id"},"Get details about a company's credit limit using company ID"),(0,l.mdx)("p",null,"This call returns information about the credit limit for a specified company."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Service Name:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"companyCreditCreditLimitManagementV1")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/companyCredits/company/2")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload-2"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,l.mdx)("h4",{id:"response-2"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2,\n  "company_id": 2,\n  "credit_limit": 500,\n  "balance": 0,\n  "currency_code": "USD",\n  "exceed_limit": false,\n  "available_limit": 500\n}\n')),(0,l.mdx)("h3",{id:"search-credit-ids"},"Search credit IDs"),(0,l.mdx)("p",null,"The following call returns information for all companies whose credit balance is 0."),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/use-rest/performing-searches.html"},"Search using REST APIs")," for information about constructing a search query."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/companyCredits?searchCriteria[filter_groups][0][filters][0][field]=balance&searchCriteria[filter_groups][0][filters][0][value]=0&searchCriteria[filter_groups][0][filters][0][condition_type]=eq")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload-3"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,l.mdx)("h4",{id:"response-3"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "id": 2,\n            "company_id": 2,\n            "credit_limit": 1000,\n            "balance": 0,\n            "currency_code": "USD",\n            "exceed_limit": false,\n            "available_limit": 1000\n        },\n        {\n            "id": 3,\n            "company_id": 3,\n            "balance": 0,\n            "currency_code": "USD",\n            "exceed_limit": false,\n            "available_limit": 0\n        },\n        {\n            "id": 4,\n            "company_id": 4,\n            "credit_limit": 2000,\n            "balance": 0,\n            "currency_code": "USD",\n            "exceed_limit": false,\n            "available_limit": 2000\n        }\n    ],\n    "search_criteria": {\n        "filter_groups": [\n            {\n                "filters": [\n                    {\n                        "field": "balance",\n                        "value": "0",\n                        "condition_type": "eq"\n                    }\n                ]\n            }\n        ]\n    },\n    "total_count": 3\n}\n')),(0,l.mdx)("h2",{id:"balance-operations"},"Balance operations"),(0,l.mdx)("p",null,"The company's outstanding balance can be updated as the buyer makes payments, purchases, and other transactions."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Service Name:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"companyCreditCreditBalanceManagementV1")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-terminal"},"POST /V1/companyCredits/:creditId/decreaseBalance\nPOST /V1/companyCredits/:creditId/increaseBalance\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Balance Parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Format"),(0,l.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"value")),(0,l.mdx)("td",{parentName:"tr",align:null},"Indicates how much money is involved in this company credit balance operation."),(0,l.mdx)("td",{parentName:"tr",align:null},"Number"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"currency")),(0,l.mdx)("td",{parentName:"tr",align:null},"The currency of the transaction, such as USD"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"operationType")),(0,l.mdx)("td",{parentName:"tr",align:null},"Must be one of the following: 1 - Allocated; 2 - Updated; 3 - Purchased; 4 - Reimbursed; 5 - Refunded; 6 - Reverted"),(0,l.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"comment")),(0,l.mdx)("td",{parentName:"tr",align:null},"Describers the operation"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"options")),(0,l.mdx)("td",{parentName:"tr",align:null},"An object that provides additional information for increasing or decreasing the credit balance"),(0,l.mdx)("td",{parentName:"tr",align:null},"Object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"options")," parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Format"),(0,l.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"purchase_order")),(0,l.mdx)("td",{parentName:"tr",align:null},"The company's purchase order number"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"order_increment")),(0,l.mdx)("td",{parentName:"tr",align:null},"Order increment"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"currency_display")),(0,l.mdx)("td",{parentName:"tr",align:null},"Currency code for displaying the operation"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"currency_base")),(0,l.mdx)("td",{parentName:"tr",align:null},"The base currency"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,l.mdx)("h3",{id:"increase-the-company-credit-balance"},"Increase the company credit balance"),(0,l.mdx)("p",null,"This call increases the company credit with an Allocate, Update, Refund, Revert, or Reimburse transaction. (You cannot specify the Purchased (3) operation type.) This call also decreases the company's outstanding balance."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/companyCredits/2/increaseBalance")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload-4"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "value": 250,\n  "currency": "USD",\n  "operationType": 2,\n  "comment": "update limit"\n}\n')),(0,l.mdx)("h4",{id:"response-4"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the increase to the company credit balance succeeded\n")),(0,l.mdx)("h3",{id:"decrease-the-balance"},"Decrease the balance"),(0,l.mdx)("p",null,"This call decreases the company credit with an Update (operation type = 2), Purchased (3), or Reimbursed (4) transaction. (You cannot specify the other operation types.) This call also increases company's outstanding balance."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/companyCredits/2/decreaseBalance")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload-5"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "value": 250,\n  "currency": "USD",\n  "operationType": 4,\n  "comment": "issue refund"\n}\n')),(0,l.mdx)("h4",{id:"response-5"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the decrease to the company credit balance succeeded\n")),(0,l.mdx)("h2",{id:"credit-history"},"Credit history"),(0,l.mdx)("p",null,"A Reimburse transaction can be updated to include a purchase order and comment."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Service Name:"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"companyCreditCreditHistoryManagementV1")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"REST Endpoints:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},"GET /V1/companyCredits/history\nPUT /V1/companyCredits/history/:historyId\n")),(0,l.mdx)("h3",{id:"save-the-credit-history"},"Save the credit history"),(0,l.mdx)("p",null,"This call updates the credit history to specify a purchase order number."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"PUT <host>/rest/<store_code>/V1/companyCredits/history/6")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload-6"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "purchaseOrder": "A12345",\n  "comment": "Adding PO info"\n}\n')),(0,l.mdx)("h4",{id:"response-6"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},"// `true`, indicating the call was successful\n")),(0,l.mdx)("h3",{id:"search-credit-history-ids"},"Search credit history IDs"),(0,l.mdx)("p",null,"The following call returns a list instances in which the credit limit was set to a value higher than $500."),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/use-rest/performing-searches.html"},"Search using REST APIs")," for information about constructing a search query."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/companyCredits/history?searchCriteria[filter_groups][0][filters][0][field]=credit_limit&searchCriteria[filter_groups][0][filters][0][value]=500&searchCriteria[filter_groups][0][filters][0][condition_type]=gt")),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"payload-7"},"Payload"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},"// Not applicable\n")),(0,l.mdx)("h4",{id:"response-7"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "id": 6,\n            "company_credit_id": 2,\n            "user_id": 1,\n            "user_type": 2,\n            "currency_credit": "USD",\n            "currency_operation": "USD",\n            "rate": 1,\n            "rate_credit": 0,\n            "amount": -250,\n            "balance": 0,\n            "credit_limit": 1000,\n            "available_limit": 1000,\n            "type": 4,\n            "datetime": "2017-06-12 02:26:28",\n            "purchase_order": "A12345",\n            "comment": "{\\"custom\\":\\"Adding PO info\\"}"\n        },\n        {\n            "id": 7,\n            "company_credit_id": 4,\n            "user_id": 1,\n            "user_type": 2,\n            "currency_credit": "USD",\n            "currency_operation": "USD",\n            "rate": 1,\n            "rate_credit": 0,\n            "amount": 0,\n            "balance": 0,\n            "credit_limit": 2000,\n            "available_limit": 2000,\n            "type": 1,\n            "datetime": "2017-07-20 21:28:35",\n            "comment": ""\n        }\n    ],\n    "search_criteria": {\n        "filter_groups": [\n            {\n                "filters": [\n                    {\n                        "field": "credit_limit",\n                        "value": "500",\n                        "condition_type": "gt"\n                    }\n                ]\n            }\n        ]\n    },\n    "total_count": 2\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-b-2-b-credit-manage-md-080bcb7dd0edec0d9cb0.js.map