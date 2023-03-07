"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8685],{80305:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return x}});var n,r=a(87462),d=a(63366),m=(a(15007),a(64983)),o=a(91515),l=a(49891),i=["components"],p={},u=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),s={_frontmatter:p},h=o.Z;function x(e){var t=e.components,a=(0,d.Z)(e,i);return(0,m.mdx)(h,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"setpaymentmethodandplaceorder-mutation"},"setPaymentMethodAndPlaceOrder mutation"),(0,m.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodAndPlaceOrder")," mutation has been deprecated. Use the ",(0,m.mdx)("a",{parentName:"p",href:"set-payment-method.md"},"setPaymentMethodOnCart")," and ",(0,m.mdx)("a",{parentName:"p",href:"place-order.md"},"placeOrder")," mutations instead. You can run the two methods in the same call if your use case allows it."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodAndPlaceOrder")," mutation sets the cart payment method and converts the cart into an order. The\nmutation returns the resulting order ID. You cannot manage orders with GraphQL, because orders are part of the backend.\nYou can use REST or SOAP calls to manage orders to their completion."),(0,m.mdx)("p",null,"Perform the following actions before using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodAndPlaceOrder")," mutation:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Create an empty cart"),(0,m.mdx)("li",{parentName:"ul"},"Add one or more products to the cart"),(0,m.mdx)("li",{parentName:"ul"},"Set the billing address"),(0,m.mdx)("li",{parentName:"ul"},"Set the shipping address (non-virtual carts only)"),(0,m.mdx)("li",{parentName:"ul"},"Set the shipping method (non-virtual carts only)"),(0,m.mdx)("li",{parentName:"ul"},"For guest customers, assign an email to the cart")),(0,m.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodAndPlaceOrder")," mutation runs asynchronously if the ",(0,m.mdx)("inlineCode",{parentName:"p"},"AsyncOrder")," module has been enabled. By default, the mutation runs synchronously. ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/performance-best-practices/high-throughput-order-processing.html#asynchronous-order-placement"},"Asynchronous order placement")," describes the benefits of enabling the module."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  setPaymentMethodAndPlaceOrder(\n    input: SetPaymentMethodAndPlaceOrderInput\n  ) {\n    PlaceOrderOutput\n  }\n}\n")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  setPaymentMethodAndPlaceOrder(\n    input: {\n      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"\n      payment_method: {\n        code: "checkmo"\n      }\n    }\n  ) {\n    order {\n      order_id\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "setPaymentMethodAndPlaceOrder": {\n      "order": {\n        "order_id": "000000006"\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"placeOrderInput")," object must contain the following attribute:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"cart_id")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique ID that identifies the customer's cart")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"payment_method")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"#paymentmethodinput-attributes"},"PaymentMethodInput!")),(0,m.mdx)("td",{parentName:"tr",align:null},"The payment method data for the cart")))),(0,m.mdx)("h3",{id:"paymentmethodinput-attributes"},"PaymentMethodInput attributes"),(0,m.mdx)(l.default,{mdxType:"QuotePaymentInput"}),(0,m.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"placeOrderOutput")," object contains the ",(0,m.mdx)("inlineCode",{parentName:"p"},"order")," object, which contains the following attribute:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"order_id")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The unique ID that identifies the order")))),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,m.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,m.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," table.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Guest email for cart is missing.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The guest attempted to place an order but did not provide an email address. See the ",(0,m.mdx)("a",{parentName:"td",href:"set-guest-email.md"},"setGuestEmailOnCart")," mutation.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Required parameter "cart_id" is missing')),(0,m.mdx)("td",{parentName:"tr",align:null},"The required ",(0,m.mdx)("inlineCode",{parentName:"td"},"cart_id")," argument contains an empty value.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Required parameter "code" for "payment_method" is missing.')),(0,m.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"code")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'The current user cannot perform operations on cart "XXX"')),(0,m.mdx)("td",{parentName:"tr",align:null},"An unauthorized user (guest) tried to set a payment method and place an order with a customer's cart, or an authorized user (customer) tried to set a payment method and place an order with a cart of another customer.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The shipping address is missing. Set the address and try again.")),(0,m.mdx)("td",{parentName:"tr",align:null},"You ran ",(0,m.mdx)("inlineCode",{parentName:"td"},"setPaymentMethodAndPlaceOrder")," mutation before ",(0,m.mdx)("a",{parentName:"td",href:"set-shipping-method.md"},"setShippingAddressesOnCart"),". Set a shipping address first. ",(0,m.mdx)("a",{parentName:"td",href:"https://devdocs.magento.com/guides/v2.3/graphql/tutorials/checkout/index.html"},"GraphQL checkout tutorial")," shows the order placement sequence.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The requested Payment Method is not available.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The payment method specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"payment_method")," argument is disabled or does not exist.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Unable to place order: Some of the products are out of stock.")),(0,m.mdx)("td",{parentName:"tr",align:null},"Some of the products in a cart are out of stock.")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-set-payment-place-order-md-6e0b78aad2518ddf6782.js.map