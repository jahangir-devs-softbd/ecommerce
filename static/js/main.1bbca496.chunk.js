(this["webpackJsonpsimple-ecommerce-for-3s"]=this["webpackJsonpsimple-ecommerce-for-3s"]||[]).push([[0],{43:function(e,t,c){},45:function(e,t,c){},50:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),r=c.n(i),a=c(18),n=c.n(a),l=(c(43),c(44),c(12)),j=c(5),o=(c(45),c(6)),d=c(20),h=c(15),b=c(76),m=(c(50),c.p+"static/media/logo.d95ec3aa.png"),u=Object(o.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,c=Object(i.useState)(0),r=Object(h.a)(c,2),a=r[0],n=r[1];return Object(i.useEffect)((function(){var e=0;t.forEach((function(t){e+=t.qty})),n(e)}),[t,a]),Object(s.jsx)("nav",{className:"container py-2",children:Object(s.jsxs)("div",{className:"row justify-content-between align-items-center",children:[Object(s.jsx)("div",{className:"col-lg-2",children:Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{src:m,alt:"logo",className:"img-fluid logo"})})}),Object(s.jsx)("div",{className:"col-lg-4",children:Object(s.jsxs)(b.a,{className:"inline",children:[Object(s.jsx)("input",{className:"search-box",placeholder:"Search",type:"text"}),Object(s.jsx)("button",{className:"btn btn-primary ml-3",type:"submit",children:"Submit"})]})}),Object(s.jsx)("div",{className:"col-lg-5",children:Object(s.jsxs)("ul",{className:"nav",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Shop"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Help"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/cart",children:Object(s.jsxs)("div",{className:"cart-container",children:[Object(s.jsx)("h5",{children:"Cart"}),Object(s.jsx)("img",Object(d.a)({className:"cart-image",src:"https://image.flaticon.com/icons/svg/102/102276.svg",alt:"shopping cart"},"alt","")),Object(s.jsx)("div",{className:"cart-counter",children:a})]})})})]})})]})})})),O=(c(53),c(54),"ADD_TO_CART"),x="ADJUST_ITEM_QTY",p="REMOVE_FROM_CART",f="LOAD_CURRENT_ITEM",g=function(e){return{type:O,payload:{id:e}}},v=function(e){return{type:f,payload:e}},y=Object(o.b)(null,(function(e){return{addToCart:function(t){return e(g(t))},loadCurrentItem:function(t){return e(v(t))}}}))((function(e){var t=e.product,c=e.addToCart;e.loadCurrentItem;return Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("img",{height:"220",width:"410",src:t.image,alt:""}),Object(s.jsxs)("div",{className:"caption",children:[Object(s.jsxs)("div",{className:"title-price",children:[Object(s.jsx)("h5",{className:"mt-3",children:t.title}),Object(s.jsxs)("h5",{children:["$ ",t.price]})]}),Object(s.jsx)("button",{onClick:function(){return c(t.id)},className:"add-to-cart-btn text-primary",children:"Add to Cart"})]})]})})),N=Object(o.b)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products;return Object(s.jsx)("div",{className:"col-md-8 m-auto pt-5",children:Object(s.jsx)("div",{className:"row products",children:t.map((function(e){return Object(s.jsx)(y,{product:e},e.id)}))})})})),w=(c(55),c(56),Object(o.b)(null,(function(e){return{adjustQty:function(t,c){return e({type:x,payload:{id:t,qty:c}})},removeFromCart:function(t){return e({type:p,payload:{id:t}})}}}))((function(e){var t=e.item,c=e.adjustQty,r=e.removeFromCart,a=Object(i.useState)(t.qty),n=Object(h.a)(a,2),l=n[0],j=n[1];return Object(s.jsxs)("div",{className:"cartItem",children:[Object(s.jsx)("img",{height:"200",className:"cartItem-image",src:t.image,alt:t.title}),Object(s.jsxs)("div",{className:"cartItem-details",children:[Object(s.jsx)("p",{className:"details-title",children:t.title}),Object(s.jsxs)("p",{className:"details-price",children:["$ ",t.price]})]}),Object(s.jsxs)("div",{className:"cartItem-actions",children:[Object(s.jsxs)("div",{className:"cartItem-qty",children:[Object(s.jsx)("label",{htmlFor:"qty",children:"Qty"}),Object(s.jsx)("input",{min:"1",type:"number",id:"qty",name:"qty",value:l,onChange:function(e){j(e.target.value),c(t.id,e.target.value)}})]}),Object(s.jsx)("button",{onClick:function(){return r(t.id)},className:"actions-deleteItemBtn",children:Object(s.jsx)("img",{src:"https://image.flaticon.com/icons/svg/709/709519.svg",alt:""})})]})]})}))),T=Object(o.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,c=Object(i.useState)(0),r=Object(h.a)(c,2),a=r[0],n=r[1],l=Object(i.useState)(0),j=Object(h.a)(l,2),o=j[0],d=j[1];Object(i.useEffect)((function(){var e=0,c=0;t.forEach((function(t){e+=t.qty,c+=t.qty*t.price})),d(e),n(c)}),[t,a,o,n,d]);var b=0;a>35?b=0:a>15?b=4.99:a>0&&(b=12.99);var m=.05*a,u=a+b+m;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row cart",children:[Object(s.jsx)("div",{className:"cart-items col-md-8",children:t.map((function(e){return Object(s.jsx)(w,{item:e},e.id)}))}),Object(s.jsxs)("div",{className:"cart-summary col-md-4",children:[Object(s.jsx)("h3",{children:"Summary"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"cart-summary-item",children:[Object(s.jsxs)("p",{children:["SUBTOTAL: (",o," items) "]}),Object(s.jsxs)("p",{children:["$ ",a]})]}),Object(s.jsxs)("div",{className:"cart-summary-item",children:[Object(s.jsx)("p",{children:"SHIPPING: "}),Object(s.jsxs)("p",{children:["$ ",b]})]}),Object(s.jsxs)("div",{className:"cart-summary-item",children:[Object(s.jsx)("p",{children:"TAXES:"}),Object(s.jsxs)("p",{children:["$ ",m]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"cart-summary-item p-3",children:[Object(s.jsx)("p",{children:"TOTAL:"}),Object(s.jsxs)("p",{children:["$ ",function(e){var t=e.toFixed(2);return Number(t)}(u)]})]}),Object(s.jsx)("button",{className:"btn btn-primary summary-checkoutBtn",children:"Proceed To Checkout"})]})]}),Object(s.jsxs)("footer",{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Home"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"About"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/products",children:"Shop"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Help"})})]}),Object(s.jsx)("p",{children:"\xa9eShopBD"})]})]})})),C=(c(57),Object(o.b)(null,(function(e){return{addToCart:function(t){return e(g(t))},loadCurrentItem:function(t){return e(v(t))}}}))((function(e){var t=e.products,c=e.addToCart,i=t.sort((function(){return.5-Math.random()})).slice(0,5),r=i.slice(1,5);return Object(s.jsxs)("section",{children:[Object(s.jsxs)("div",{className:"row mt-5 mb-5 p-3",children:[Object(s.jsxs)("div",{className:"col-md-4 showcase-left",children:[Object(s.jsx)("img",{height:"520",width:"400",src:i[0].image,alt:""}),Object(s.jsxs)("div",{className:"caption p-3",children:[Object(s.jsxs)("div",{className:"title-price",children:[Object(s.jsx)("h5",{className:"mt-3",children:i[0].title}),Object(s.jsxs)("h5",{children:["$ ",i[0].price]})]}),Object(s.jsx)("button",{onClick:function(){return c(i[0].id)},className:"add-to-cart-btn text-primary",children:"Add to Cart"})]})]}),Object(s.jsx)("div",{className:"col-md-8 showcase-right",children:Object(s.jsx)("div",{className:"row",children:r.map((function(e){return Object(s.jsx)(y,{product:e},e.id)}))})})]}),Object(s.jsx)("hr",{})]})}))),S=(c(58),c(34)),k=c.n(S),I=(c(71),{desktop:{breakpoint:{max:3e3,min:1024},items:2,slidesToSlide:2},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}}),A=function(e){var t=e.products.sort((function(){return.5-Math.random()})).slice(0,4);return Object(s.jsxs)("section",{className:"carousel-container",children:[Object(s.jsx)("h3",{className:"m-5",children:"Featured Products"}),Object(s.jsxs)(k.a,{swipeable:!1,draggable:!1,showDots:!0,responsive:I,ssr:!0,infinite:!0,autoPlay:"true",autoPlaySpeed:1e3,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],deviceType:"desktop",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{height:"400",width:"500",src:t[0].image,alt:""}),Object(s.jsx)("h5",{className:"mt-3",children:t[0].title}),Object(s.jsxs)("h5",{children:["$ ",t[0].price]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{height:"400",width:"500",src:t[1].image,alt:""}),Object(s.jsx)("h5",{className:"mt-3",children:t[1].title}),Object(s.jsxs)("h5",{children:["$ ",t[1].price]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{height:"400",width:"500",src:t[2].image,alt:""}),Object(s.jsx)("h5",{className:"mt-3",children:t[2].title}),Object(s.jsxs)("h5",{children:["$ ",t[2].price]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{height:"400",width:"500",src:t[3].image,alt:""}),Object(s.jsx)("h5",{className:"mt-3",children:t[3].title}),Object(s.jsxs)("h5",{children:["$ ",t[3].price]})]})]}),";",Object(s.jsx)("hr",{})]})},M=(c(72),function(e){var t=e.products.sort((function(){return.5-Math.random()})).slice(0,3);return Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{className:"m-5",children:"Make Yourself Better Than Before!"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row m-5",children:[Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsx)("img",{height:"300",width:"300",src:t[0].image,alt:""})}),Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsx)("img",{height:"300",width:"300",src:t[1].image,alt:""})}),Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsx)("img",{height:"300",width:"300",src:t[2].image,alt:""})})]}),Object(s.jsx)(l.b,{to:"/products",children:Object(s.jsx)("button",{className:"btn btn-primary m-3",children:"Shop Now"})}),Object(s.jsx)("hr",{})]})}),E=(c(73),function(){return Object(s.jsxs)("section",{children:[Object(s.jsxs)("div",{className:"row mt-5 mb-5",children:[Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("h1",{children:"Newsletter"}),Object(s.jsx)("p",{children:"Stay with us to get new updates, discount and to follow trends. Get in Touch via email."})]}),Object(s.jsx)("div",{className:"col-md-6 mt-5",children:Object(s.jsxs)(b.a,{className:"inline",children:[Object(s.jsx)("input",{className:"newsletter-text-box",placeholder:"Email Address",type:"text"}),Object(s.jsx)("button",{className:"btn btn-primary ml-3",type:"submit",children:"Subscribe"})]})})]}),Object(s.jsx)("hr",{})]})}),q=(c(74),function(){return Object(s.jsxs)("section",{children:[Object(s.jsxs)("div",{className:"mt-5 mb-5 about",children:[Object(s.jsx)("h3",{children:"About"}),Object(s.jsx)("p",{children:"The eShop or electronic store is \u201cthe place\u201d where a company can sell their products or services using digital networks. It\u2019s an online store where customers can \u201cvisit\u201d from anywhere at anytime using a Web browser on a mobile phone or a laptop."})]}),Object(s.jsx)("hr",{})]})}),B=function(){return Object(s.jsxs)("footer",{children:[Object(s.jsxs)("div",{className:"row mt-5 mb-5",children:[Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("img",{height:"100",width:"200",src:m,alt:""}),Object(s.jsxs)("p",{className:"mt-3 text-secondary",children:["1212 Mohakhali ",Object(s.jsx)("br",{})," Dhaka, Bangladesh."]})]}),Object(s.jsxs)("div",{className:"col-md-2",children:[Object(s.jsx)("ul",{className:"text-uppercase font-weight-bold",children:"Main Menu"}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Home"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"About"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Shop"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Help"})})]}),Object(s.jsxs)("div",{className:"col-md-2",children:[Object(s.jsx)("ul",{className:"text-uppercase font-weight-bold",children:"COMPANY"}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"The Company"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Careers"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Press"})})]}),Object(s.jsxs)("div",{className:"col-md-2",children:[Object(s.jsx)("ul",{className:"text-uppercase font-weight-bold",children:"Discover"}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"The Team"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Our History"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"/",children:"Brand Motto"})})]}),Object(s.jsxs)("div",{className:"col-md-2",children:[Object(s.jsx)("ul",{className:"text-uppercase font-weight-bold",children:"Find Us On"}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"www.facebook.com",children:"Facebook"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"www.twitter.com",children:"Twitter"})}),Object(s.jsx)("ul",{children:Object(s.jsx)("a",{href:"www.instagram.com",children:"Instagram"})})]})]}),Object(s.jsx)("hr",{})]})},D=Object(o.b)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products;return Object(s.jsxs)("div",{children:[Object(s.jsx)(M,{products:t}),Object(s.jsx)(A,{products:t}),Object(s.jsx)(E,{}),Object(s.jsx)(C,{products:t}),Object(s.jsx)(q,{}),Object(s.jsx)(B,{})]})}));var H=Object(o.b)((function(e){return{current:e.shop.currentItem}}))((function(e){return e.current,Object(s.jsx)(l.a,{children:Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(u,{}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(s.jsx)(j.a,{exact:!0,path:"/cart",component:T}),Object(s.jsx)(j.a,{exact:!0,path:"/products",component:N})]})]})})})),F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),r(e),a(e)}))},P=c(14),$=c(35),L=c(36),R=c(7),_={products:[{id:1,title:"This is the COOLEST Cube Ever",description:"This cube will keep you busy the entire day and it is very fun to play with",price:15,image:"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:4,title:"Cavalier Sunglass",description:"Stylish and cool looking sunglass.",price:160,image:"https://i.imgur.com/3hV7M5p.jpg"},{id:5,title:"Bluetooth Headphone",description:"Great Sound - Ergonomic Design - Wireless - Built-In Headphone Control - High-Quality Microphone.",price:300,image:"https://i.imgur.com/PAlhvUn.jpg"},{id:6,title:"Digital Bracelet Recorder",description:"Record messages and reminders with this simple and stylish digital record in the form of a bracelet.",price:130,image:"https://i.imgur.com/z1e7TbC.jpg"},{id:7,title:"Watch",description:"Stylish watch for men.",price:130,image:"https://i.imgur.com/l6l7Oiv.jpg"}],cart:[],currentItem:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var c=e.products.find((function(e){return e.id===t.payload.id})),s=e.cart.find((function(e){return e.id===t.payload.id}));return Object(R.a)(Object(R.a)({},e),{},{cart:s?e.cart.map((function(e){return e.id===t.payload.id?Object(R.a)(Object(R.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(L.a)(e.cart),[Object(R.a)(Object(R.a)({},c),{},{qty:1})])});case p:return Object(R.a)(Object(R.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case x:return Object(R.a)(Object(R.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(R.a)(Object(R.a)({},e),{},{qty:+t.payload.qty}):e}))});case f:return Object(R.a)(Object(R.a)({},e),{},{currentItem:t.payload});default:return e}},W=Object(P.combineReducers)({shop:Q}),G=Object(P.createStore)(W,Object($.composeWithDevTools)());n.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(o.a,{store:G,children:Object(s.jsx)(H,{})})}),document.getElementById("root")),F()}},[[75,1,2]]]);
//# sourceMappingURL=main.1bbca496.chunk.js.map