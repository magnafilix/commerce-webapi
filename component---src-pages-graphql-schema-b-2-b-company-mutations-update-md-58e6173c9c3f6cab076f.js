"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7105],{75980:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return s}});var a=n(87462),d=n(63366),m=(n(15007),n(64983)),r=n(91515),l=n(74257),p=["components"],o={},i={_frontmatter:o},u=r.Z;function s(e){var t=e.components,n=(0,d.Z)(e,p);return(0,m.mdx)(u,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"updatecompany-mutation"},"updateCompany mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"updateCompany")," mutation allows you to update a company's address as well as top-level string attributes such as the name, legal name, and email. You cannot update the administrator or other objects such as teams, roles, or resources with this mutation."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  updateCompany(\n    input: CompanyUpdateInput!\n  ) {\n    UpdateCompanyOutput\n  }\n}\n")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following call updates the legal address of a company"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateCompany(\n    input: {\n      legal_address: {\n        street: ["265 Cambridge Ave"]\n        city: "Palo Alto"\n        region: {\n          region_code:"CA"\n          region_id: 12\n        }\n        postcode: "94306"\n      }\n    }\n  ) {\n    company {\n      legal_address {\n        street\n        city\n        region {\n          region_code\n        }\n        postcode\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateCompany": {\n      "company": {\n        "legal_address": {\n          "street": [\n            "265 Cambridge Ave"\n          ],\n          "city": "Palo Alto",\n          "region": {\n            "region_code": "CA"\n          },\n          "postcode": "94306"\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The CompanyUpdateInput object defines the schema for updating a company."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"company_email")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The email address of the company contact")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"company_name")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the company to update")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"legal_address")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"#companylegaladdressupdateinput-attributes"},"CompanyLegalAddressUpdateInput")),(0,m.mdx)("td",{parentName:"tr",align:null},"Defines the legal address data of the company")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"legal_name")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The full legal name of the company")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"reseller_id")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The resale number that is assigned to the company for tax reporting purposes")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"vat_tax_id")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes")))),(0,m.mdx)("h3",{id:"companylegaladdressupdateinput-attributes"},"CompanyLegalAddressUpdateInput attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"CompanyLegalAddressUpdateInput")," object can contain the following attributes."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"city")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The city where the company is registered to conduct business")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"country_id")),(0,m.mdx)("td",{parentName:"tr",align:null},"CountryCodeEnum"),(0,m.mdx)("td",{parentName:"tr",align:null},"Company's country ID. See the ",(0,m.mdx)("a",{parentName:"td",href:"../../../store/queries/countries.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"countries")," query"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"postcode")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The ZIP/postal code of the company")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"region")),(0,m.mdx)("td",{parentName:"tr",align:null},"CustomerAddressRegionInput!"),(0,m.mdx)("td",{parentName:"tr",align:null},"An object containing the region name and/or region ID where the company is registered to conduct business")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"street")),(0,m.mdx)("td",{parentName:"tr",align:null},"[String!]"),(0,m.mdx)("td",{parentName:"tr",align:null},"An array of strings that define the street address where the company is registered to conduct business")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"telephone")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"The primary phone number of the company")))),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"UpdateCompanyOutput")," object contains the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Company")," object."),(0,m.mdx)(l.default,{mdxType:"Company"}),".md %}",(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"create.md"},"createCompany mutation"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-b-2-b-company-mutations-update-md-58e6173c9c3f6cab076f.js.map