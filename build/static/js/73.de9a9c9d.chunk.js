"use strict";(self.webpackChunktable_finder=self.webpackChunktable_finder||[]).push([[73],{9073:function(e,i,n){n.r(i);var s=n(4165),a=n(5861),l=n(9439),d=n(2791),c=n(7689),o=n(6977),t=n(326),r=n(1830),u=n.n(r),v=n(184);i.default=function(){var e,i,r,m,h,x,p,j,N=(0,d.useState)("Take Away"),A=(0,l.Z)(N,2),f=A[0],g=A[1],b=(0,c.s0)(),w=(0,d.useState)([]),_=(0,l.Z)(w,2),y=_[0],k=_[1],I=(0,d.useState)([]),C=(0,l.Z)(I,2),O=C[0],S=(C[1],localStorage.getItem("tableId")),E=(0,d.useState)([]),Z=(0,l.Z)(E,2),T=Z[0],B=(Z[1],(0,d.useState)([])),G=(0,l.Z)(B,2),U=G[0],R=(G[1],(0,d.useState)(!1)),q=(0,l.Z)(R,2),z=q[0],P=q[1];(0,d.useEffect)((function(){Q()}),[]);var X=localStorage.getItem("tableId"),Q=function(){return(e=e||(0,a.Z)((0,s.Z)().mark((function e(){var i,n,a,l,d,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.iS)(S);case 2:i=e.sent,null!==(n=i.data)&&void 0!==n&&n.error||(c=null===n||void 0===n||null===(a=n.results)||void 0===a||null===(l=a.cart)||void 0===l?void 0:l.cuisines,k(null===n||void 0===n||null===(d=n.results)||void 0===d?void 0:d.cart),P(!1),null!==c&&void 0!==c&&c.length||(u().fire({title:"Your Cart is Empty!",text:"Click to Continue to Order!.",timer:5e3,confirmButtonText:"Go Home",confirmButtonColor:"#ff7a00"}),b("/".concat(X))));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)};console.log(U,"adddon");var D=function(e,n){return(i=i||(0,a.Z)((0,s.Z)().mark((function e(i,n){var a,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,(0,o.GR)({tableId:S,cuisineId:i,quantity:n});case 3:a=e.sent,null!==(l=a.data)&&void 0!==l&&l.error||Q(),setTimeout((function(){P(!1)}),[4e3]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)};console.log(f);var K=function(){return(r=r||(0,a.Z)((0,s.Z)().mark((function e(){var i,n,a,l,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Jd)({price:null===y||void 0===y?void 0:y.total});case 2:i=e.sent,null!==(n=i.data)&&void 0!==n&&n.error||(localStorage.setItem("paymentId",null===n||void 0===n||null===(a=n.results)||void 0===a?void 0:a.id),d={tableId:S,cuisines:null===y||void 0===y?void 0:y.cuisines,type:f,total:null===y||void 0===y?void 0:y.total,id:null===n||void 0===n||null===(l=n.results)||void 0===l?void 0:l.id},localStorage.setItem("checkOut",JSON.stringify(d)),b("/app/home/review",{state:d}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},H=function(e,i){return(m=m||(0,a.Z)((0,s.Z)().mark((function e(i,n){var a,l,d,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),d=[],null===y||void 0===y||null===(a=y.cuisines)||void 0===a||null===(l=a.addOns)||void 0===l||l.map((function(e,i){null!==e&&void 0!==e&&e.optionId&&d.push({addOnId:null===e||void 0===e?void 0:e._id,option:null===e||void 0===e?void 0:e.optionId})})),e.next=5,(0,o.GR)({tableId:X,cuisineId:i,quantity:n});case 5:c=e.sent,c.data.error||Q(),setTimeout((function(){P(!1)}),[4e3]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)};console.log(T);var J=function(e,i){return(h=h||(0,a.Z)((0,s.Z)().mark((function e(i,n){var a,l,d,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),d=[],null===y||void 0===y||null===(a=y.cuisines)||void 0===a||null===(l=a.addOns)||void 0===l||l.map((function(e,i){null!==e&&void 0!==e&&e.optionId&&d.push({addOnId:null===e||void 0===e?void 0:e._id,option:null===e||void 0===e?void 0:e.optionId})})),e.next=5,(0,o.Xp)({tableId:X,cuisineId:i,quantity:1,price:n,addOns:d});case 5:c=e.sent,c.data.error||Q(),setTimeout((function(){P(!1)}),[4e3]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)};return(0,v.jsx)("div",{children:(null===y||void 0===y||null===(x=y.cuisines)||void 0===x?void 0:x.length)>0?(0,v.jsx)(v.Fragment,{children:"Take Away"===f?(0,v.jsxs)("div",{className:"app_main",children:[z&&(0,v.jsx)("div",{class:"loading",children:"Loading\u2026"}),(0,v.jsxs)("div",{className:"cart_screen comman_space overflow-hidden",children:[(0,v.jsxs)("div",{className:"row top_bar pb-3 align-items-center",children:[(0,v.jsx)("div",{className:"col-2",children:(0,v.jsx)("a",{className:"back_btn",children:(0,v.jsx)("img",{onClick:function(){b(-1)},src:n(5178),alt:""})})}),(0,v.jsx)("div",{className:"col text-center",children:(0,v.jsx)("div",{className:"head_comman",children:"Your Cart"})}),(0,v.jsx)("div",{className:"col-2"})]}),(0,v.jsx)("div",{className:"row cart_product",children:(0,v.jsx)("div",{className:"col-12",children:null===y||void 0===y||null===(p=y.cuisines)||void 0===p?void 0:p.map((function(e,i){var s,a,l,d;return(0,v.jsxs)("div",{className:"row Breakfast_single align-items-center",children:[(0,v.jsx)("div",{className:"col",children:(0,v.jsxs)("div",{className:"menu_card_data fs-4",children:[(0,v.jsx)("h2",{children:null===e||void 0===e||null===(s=e.cuisineId)||void 0===s?void 0:s.name}),(0,v.jsxs)("span",{children:["EGP ",null===e||void 0===e?void 0:e.total]})]})}),(0,v.jsx)("div",{className:"px-0 col-auto",children:(0,v.jsxs)("div",{className:"quantity_box",children:[(0,v.jsx)("span",{onClick:function(){var i;return H(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id,1)},children:"-"}),(0,v.jsx)("button",{className:"bg-white border rounded m-2",children:null===e||void 0===e?void 0:e.quantity}),(0,v.jsx)("span",{onClick:function(){var i;return J(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id,null===e||void 0===e?void 0:e.price)},children:"+"})]},O)}),(0,v.jsx)("div",{className:"col-auto",children:(0,v.jsxs)("div",{className:"menu_product position-relative",children:[(0,v.jsx)("img",{className:"mp_img",src:null!==e&&void 0!==e&&null!==(a=e.cuisineId)&&void 0!==a&&a.image?null===e||void 0===e||null===(l=e.cuisineId)||void 0===l?void 0:l.image:n(9861),alt:""}),(0,v.jsx)("a",{className:"add_product shadow",onClick:function(){var i;b("/app/home/add-product/".concat(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id))},children:(0,v.jsx)("img",{src:n(5682),alt:""})})]})}),(0,v.jsx)("div",{className:"col-auto",children:(0,v.jsx)("div",{className:"menu_product position-relative",children:(0,v.jsx)("i",{className:"fa fa-trash",onClick:function(){var i;D(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id,null===e||void 0===e?void 0:e.quantity)}})})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("span",{className:"d-flex",children:null===e||void 0===e||null===(d=e.addOns)||void 0===d?void 0:d.map((function(e){var i,n;return(0,v.jsxs)("h5",{style:{fontSize:"10px"},children:[(null===e||void 0===e||null===(i=e.addOnId)||void 0===i?void 0:i.name)+"-"+(null===e||void 0===e||null===(n=e.option)||void 0===n?void 0:n.name),","]})}))})})]})}))})}),(0,v.jsx)("div",{className:"main_head my-3",children:"Summary"}),(0,v.jsx)("div",{className:"row promo_codepart",children:(0,v.jsx)("div",{className:"col-12 ",children:(0,v.jsx)("div",{className:"accordion",id:"accordionExample",children:(0,v.jsxs)("div",{className:"accordion-item",children:[(0,v.jsx)("h2",{className:"accordion-header",id:"headingOne",children:(0,v.jsxs)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:[(0,v.jsx)("img",{src:n(2829),alt:""})," ","Promo Code"]})}),(0,v.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,v.jsx)("div",{className:"accordion-body",children:(0,v.jsx)("form",{action:"",children:(0,v.jsxs)("div",{className:"form-group position-relative",children:[(0,v.jsx)("input",{type:"text",className:"form-control shadow-none",placeholder:"Enter Promo Code"}),(0,v.jsx)("button",{className:"apply_btn",children:"Apply"})]})})})})]})})})}),(0,v.jsx)("div",{className:"row summary_part py-2",children:(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("div",{className:"row py-1",children:[(0,v.jsx)("div",{className:"col-6",children:(0,v.jsx)("div",{className:"summary_text",children:"Subtotal"})}),(0,v.jsx)("div",{className:"col-6",children:(0,v.jsxs)("div",{className:"summary_text text-end",children:["EGP ",null===y||void 0===y?void 0:y.total]})})]})})}),(0,v.jsxs)("div",{className:"row summary_total",children:[(0,v.jsx)("div",{className:"col-12 pb-3",children:(0,v.jsxs)("div",{className:"row py-3",children:[(0,v.jsx)("div",{className:"col-6",children:(0,v.jsx)("div",{className:"total_count",children:"Total"})}),(0,v.jsx)("div",{className:"col-6",children:(0,v.jsxs)("div",{className:"total_count text-end",children:[" ","EGP ",null===y||void 0===y?void 0:y.total]})})]})}),(0,v.jsxs)("div",{className:"col-12 mb-5 d-flex align-items-center twooptions_btns justify-content-center",children:[(0,v.jsx)("a",{onClick:function(){g("Dining")},className:"comman_btn shadow-none active text-decoration-none",children:"Dine In"}),(0,v.jsx)("a",{onClick:function(){g("Take Away")},className:"comman_btn shadow-none text-decoration-none",children:"Take Away"})]}),(0,v.jsx)("div",{className:"col-12 pb-3",children:(0,v.jsx)("a",{className:"comman_btn text-decoration-none",onClick:function(){K()},children:"Checkout"})})]})]})]}):(0,v.jsxs)("div",{className:"app_main",children:[z&&(0,v.jsx)("div",{class:"loading",children:"Loading\u2026"}),(0,v.jsxs)("div",{className:"checkout comman_space overflow-hidden",children:[(0,v.jsxs)("div",{className:"row top_bar py-3 align-items-center",children:[(0,v.jsx)("div",{className:"col-2",children:(0,v.jsx)("a",{className:"back_btn",children:(0,v.jsx)("img",{src:n(5178),alt:""})})}),(0,v.jsx)("div",{className:"col text-center",children:(0,v.jsx)("div",{className:"head_comman",children:"Order Details"})}),(0,v.jsx)("div",{className:"col-2"})]}),(0,v.jsx)("div",{className:"row show_status",children:(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("h2",{children:"Dine In"})})}),(0,v.jsx)("div",{className:"row cart_product",children:(0,v.jsx)("div",{className:"col-12",children:null===y||void 0===y||null===(j=y.cuisines)||void 0===j?void 0:j.map((function(e,i){var s,a,l,d;return(0,v.jsxs)("div",{className:"row Breakfast_single align-items-center",children:[(0,v.jsx)("div",{className:"col",children:(0,v.jsxs)("div",{className:"menu_card_data fs-4",children:[(0,v.jsx)("h2",{children:null===e||void 0===e||null===(s=e.cuisineId)||void 0===s?void 0:s.name}),(0,v.jsxs)("span",{children:["EGP ",null===e||void 0===e?void 0:e.total]})]})}),(0,v.jsx)("div",{className:"px-0 col-auto",children:(0,v.jsxs)("div",{className:"quantity_box",children:[(0,v.jsx)("span",{onClick:function(){var i;return H(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id,1)},children:"-"}),(0,v.jsx)("button",{className:"bg-white border rounded m-2",children:null===e||void 0===e?void 0:e.quantity}),(0,v.jsx)("span",{onClick:function(){var i;return J(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id,null===e||void 0===e?void 0:e.price)},children:"+"})]},O)}),(0,v.jsx)("div",{className:"col-auto",children:(0,v.jsxs)("div",{className:"menu_product position-relative",children:[(0,v.jsx)("img",{className:"mp_img",src:null!==e&&void 0!==e&&null!==(a=e.cuisineId)&&void 0!==a&&a.image?null===e||void 0===e||null===(l=e.cuisineId)||void 0===l?void 0:l.image:n(9861),alt:""}),(0,v.jsx)("a",{className:"add_product shadow",onClick:function(){var i;b("/app/home/add-product/".concat(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id))},children:(0,v.jsx)("img",{src:n(5682),alt:""})})]})}),(0,v.jsx)("div",{className:"col-auto",children:(0,v.jsx)("div",{className:"menu_product position-relative",children:(0,v.jsx)("i",{className:"fa fa-trash",onClick:function(){var i;D(null===e||void 0===e||null===(i=e.cuisineId)||void 0===i?void 0:i._id,null===e||void 0===e?void 0:e.quantity)}})})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("span",{className:"d-flex",children:null===e||void 0===e||null===(d=e.addOns)||void 0===d?void 0:d.map((function(e){var i,n;return(0,v.jsxs)("h5",{style:{fontSize:"10px"},children:[(null===e||void 0===e||null===(i=e.addOnId)||void 0===i?void 0:i.name)+"-"+(null===e||void 0===e||null===(n=e.option)||void 0===n?void 0:n.name),","]})}))})})]})}))})}),(0,v.jsx)("div",{className:"main_head my-3",children:"Summary"}),(0,v.jsx)("div",{className:"row promo_codepart",children:(0,v.jsx)("div",{className:"col-12 ",children:(0,v.jsx)("div",{className:"accordion",id:"accordionExample",children:(0,v.jsxs)("div",{className:"accordion-item",children:[(0,v.jsx)("h2",{className:"accordion-header",id:"headingOne",children:(0,v.jsxs)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:[(0,v.jsx)("img",{src:n(2829),alt:""})," ","Promo Code"]})}),(0,v.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,v.jsx)("div",{className:"accordion-body",children:(0,v.jsx)("form",{action:"",children:(0,v.jsxs)("div",{className:"form-group position-relative",children:[(0,v.jsx)("input",{type:"text",className:"form-control shadow-none",placeholder:"Enter Promo Code"}),(0,v.jsx)("button",{className:"apply_btn",children:"Apply"})]})})})})]})})})}),(0,v.jsx)("div",{className:"row summary_part py-2",children:(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("div",{className:"row py-1",children:[(0,v.jsx)("div",{className:"col-6",children:(0,v.jsx)("div",{className:"summary_text",children:"Subtotal"})}),(0,v.jsx)("div",{className:"col-6",children:(0,v.jsxs)("div",{className:"summary_text text-end",children:["EGP ",null===y||void 0===y?void 0:y.total]})})]})})}),(0,v.jsx)("div",{className:"row summary_total",children:(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("div",{className:"row py-3",children:[(0,v.jsx)("div",{className:"col-6",children:(0,v.jsx)("div",{className:"total_count",children:"Total"})}),(0,v.jsx)("div",{className:"col-6",children:(0,v.jsxs)("div",{className:"total_count text-end",children:["EGP ",null===y||void 0===y?void 0:y.total]})})]})})}),(0,v.jsxs)("div",{className:"col-12 mb-5 d-flex align-items-center twooptions_btns justify-content-center",children:[(0,v.jsx)("a",{onClick:function(){g("Dinning")},className:"comman_btn shadow-none  text-decoration-none",children:"Dine In"}),(0,v.jsx)("a",{onClick:function(){g("Take Away")},className:"comman_btn shadow-none active text-decoration-none",children:"Take Away"})]}),(0,v.jsx)("div",{className:"row",children:(0,v.jsx)("div",{className:"col-12 mb-4",children:(0,v.jsx)("a",{className:"comman_btn text-decoration-none",onClick:function(){K()},children:"Place Order"})})})]})]})}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(t.Z,{})})})}},5682:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcVJREFUSEvNlT9Lw1AUxc+NWP9gXHRSRwvOOhRBaq2CFGwVJShUtCD4AZwdujr4HRQsFp4KWgT/YQMOfgVdXKS6uBmtxrZXUlupadMmgYJvTHLP79xz33shNHlRk/XxvwGBQKxdkr/OAQwVUBhXU/t35kRcd6Aoiucl6zklwpQhSsBzi5T3XRwnHyshrgGTM8sbTLxtcvzw1UpjN0d7z+XnjgGhULTb5/NqqqpKLXJfkkELlRAG1HQqMeEKEFCULunDcw3g3j/iXTUgktwnAJorCzKwm04lYo4BJfErAD6jmIkS48ODK0VIV/8hCBFmXLGWCamqmnMEKIlfABg1Zb7jH/GuFSHdA5vZts+tWyGyjoYcDq93vuHNiKXo3LzKncTj8UKt93WHbIhreD8n8JjViXcNsCMOwoF/2Lto5b50Pqq92RXvadOXhBD5evdZVUTG8Sc5d1kvFsO5HfGqDn7uFv0UoKClK8ZJT4c+38h5zW06GYmeMWPaSpzAh/nXp6XKfd7ouv8TUTAc5XrOC1pmwYl4VUSWAMaJG3FbAAbO+DUTduq85gzMHRjive36rBBCb5S19dzcVtqsc/w/sKn7+1nTAd/rt7oZGb5XmgAAAABJRU5ErkJggg=="},2829:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEWSURBVHgBrdPRTcMwEAbgO+NK5S0j+CExDk8wQieAbsAGdAOyQieomAAxQdmAPBUpRcIj9A1QlRx2I4Fom/jc9n+Jpbt8suMLwAmDoQatzQMB3gWQsqrexjIIEd6u1zTq6pESFAicbdZh6HNkrV119RljoG7atTgG2o6IhdL0YqJ1/rQPkzGQD+LZS4MEvRj3aMvlonSPcl9NxEChSKWuEoLvibv+60Oguq4TQPm3szZf0ZBSKnH7mbmhftxg1pYrApoOBufztsiLmy/l3yHE5/dqUfwrptoUWZa/ckAPZTr/SPVl0dnEAVkQB4yC+kAOhH0gEt64kRkPh24EGpz7W9v52BzsFwRx79fuB5r2Qaz4o3JH5gc4zZ10CgWskAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=73.de9a9c9d.chunk.js.map