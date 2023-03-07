"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2445],{4908:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return l},default:function(){return u}});var t,a=r(87462),o=r(63366),s=(r(15007),r(64983)),d=r(91515),i=["components"],l={},m=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),c={_frontmatter:l},p=d.Z;function u(e){var n=e.components,r=(0,o.Z)(e,i);return(0,s.mdx)(p,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"link-and-unlink-stocks-and-sources"},"Link and unlink stocks and sources"),(0,s.mdx)("p",null,"In Admin, you can assign (link) sources to a stock when you create the stock. In REST, creating a stock and assigning sources to it are separate steps."),(0,s.mdx)("p",null,"To link a source to a stock, you must specify the ",(0,s.mdx)("inlineCode",{parentName:"p"},"source_code"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_id"),", and ",(0,s.mdx)("inlineCode",{parentName:"p"},"priority")," attributes. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"priority")," value indicates where the source ranks in descending order. The Source Selection Algorithm uses this priority order when recommending order fulfillment. All sources linked to a stock are displayed in prioritized order in the Admin."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Service names:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"inventoryApiStockSourceLinksSaveV1\ninventoryApiStockSourceLinksDeleteV1\nInventoryApiGetStockSourceLinksV1\ninventoryApiGetSourcesAssignedToStockOrderedByPriorityV1\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"REST endpoints:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"POST /V1/inventory/stock-source-links\nPOST /V1/inventory/stock-source-links-delete\nGET /V1/inventory/stock-source-links\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"StockSourceLink parameters:")),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Name"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Requirements"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"stock_id")),(0,s.mdx)("td",{parentName:"tr",align:null},"Stock ID"),(0,s.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,s.mdx)("td",{parentName:"tr",align:null},"Required for POST operations")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"source_code")),(0,s.mdx)("td",{parentName:"tr",align:null},"Source code of the link"),(0,s.mdx)("td",{parentName:"tr",align:null},"String"),(0,s.mdx)("td",{parentName:"tr",align:null},"Required for POST operations")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"priority")),(0,s.mdx)("td",{parentName:"tr",align:null},"Priority of the link"),(0,s.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,s.mdx)("td",{parentName:"tr",align:null},"Required when linking a stock to a source")))),(0,s.mdx)("h2",{id:"link-stocks-and-sources"},"Link stocks and sources"),(0,s.mdx)("p",null,"If you specify a sales channel that is already assigned to another stock, Adobe Commerce reassigns the sales channel from the previous stock to the current stock."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/inventory/stock-source-links")),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "links" : [\n      {\n         "source_code" : "central",\n         "stock_id" : 4,\n         "priority" : 1\n      },\n      {\n        "source_code" : "east",\n        "stock_id" : 4,\n        "priority" : 2\n      }\n   ]\n}\n')),(0,s.mdx)("h4",{id:"response"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// Commerce returns empty array.\n[]\n")),(0,s.mdx)("h2",{id:"delete-links-between-stocks-and-sources"},"Delete links between stocks and sources"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST /V1/inventory/stock-source-links-delete")," endpoint breaks the link between a stock and one or more sources. Commerce does not recalculate priority of sources after you delete links."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/inventory/stock-source-links-delete")),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-1"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "links" : [\n      {\n        "source_code" : "south",\n        "stock_id" : 4\n      }\n   ]\n}\n')),(0,s.mdx)("h4",{id:"response-1"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-JSON"},"// Commerce returns empty array.\n[]\n")),(0,s.mdx)("h2",{id:"search-for-links"},"Search for links"),(0,s.mdx)("p",null,"The following call returns the link information for ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_id = 4"),"."),(0,s.mdx)("p",null,"See ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/use-rest/performing-searches/"},"Search using REST APIs")," for information about constructing a search query."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/inventory/stock-source-links?searchCriteria[filter_groups][0][filters][0][field]=stock_id&searchCriteria[filter_groups][0][filters][0][value]=4&searchCriteria[filter_groups][0][filters][0][condition_type]=eq")),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-2"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// None\n")),(0,s.mdx)("h4",{id:"response-2"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "stock_id": 4,\n            "source_code": "central",\n            "priority": 1\n        },\n        {\n            "stock_id": 4,\n            "source_code": "east",\n            "priority": 2\n        }\n    ],\n    "search_criteria": {\n        "filter_groups": [\n            {\n                "filters": [\n                    {\n                        "field": "stock_id",\n                        "value": "4",\n                        "condition_type": "eq"\n                    }\n                ]\n            }\n        ]\n    },\n    "total_count": 2\n}\n')),(0,s.mdx)("h2",{id:"get-sources-assigned-to-a-stock"},"Get sources assigned to a stock"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"GET /V1/inventory/get-sources-assigned-to-stock-ordered-by-priority/:stock_id")," endpoint returns details about each source that is assigned to the specified stock. ",(0,s.mdx)("a",{parentName:"p",href:"manage-sources.md"},"Manage sources")," provides definitions for each attribute returned."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Sample Usage:")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET <host>/rest/<store_code>/V1/inventory/get-sources-assigned-to-stock-ordered-by-priority/4")),(0,s.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"payload-3"},"Payload"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},"// None\n")),(0,s.mdx)("h4",{id:"response-3"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "source_code": "central",\n        "name": "Central Shipping Center",\n        "email": "hsmith@example.com",\n        "contact_name": "Harold Smith",\n        "enabled": true,\n        "description": "Primary source for the central region",\n        "latitude": 38.74132,\n        "longitude": -90.363267,\n        "country_id": "US",\n        "region_id": 36,\n        "city": "St. Louis",\n        "street": "123 Warehouse Blvd",\n        "postcode": "63145",\n        "phone": "(314) 555-1234",\n        "use_default_carrier_config": true,\n        "carrier_links": []\n    },\n    {\n        "source_code": "east",\n        "name": "Eastern Shipping Center",\n        "email": "dsimons@example.com",\n        "contact_name": "Daryl Simons",\n        "enabled": true,\n        "description": "Primary source for the eastern region",\n        "country_id": "US",\n        "region_id": 45,\n        "city": "Raleigh",\n        "street": "456 Shipping Center Blvd",\n        "postcode": "27614",\n        "phone": "(919) 555-8888",\n        "use_default_carrier_config": true,\n        "carrier_links": []\n    }\n]\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-inventory-link-stocks-sources-md-3faa384feb804f725550.js.map