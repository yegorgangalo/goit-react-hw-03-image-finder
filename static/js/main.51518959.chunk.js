(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,n){e.exports={info:"ImageGallery_info__MGNMe"}},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(6),s=n.n(o),i=(n(20),n(2)),u=n(3),l=n(5),h=n(4),d=n(8),j=(n(21),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleInputChange=function(t){var n=t.target;e.setState({searchQuery:n.value})},e.onSubmitForm=function(t){t.preventDefault();var n=e.state.searchQuery;""!==n.trim()?e.props.onSubmit(n):d.b.warn("Input search Query"),e.reset()},e.reset=function(){return e.setState({searchQuery:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitForm,children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputChange})]})})}}]),n}(r.PureComponent)),p=n(11),m=n(13),b=n(10),g=n.n(b),f=document.querySelector("#modal-root"),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).keydownCloseModal=function(t){"Escape"===t.code&&e.props.onClose()},e.backdropCloseModal=function(t){t.target,t.currentTarget;e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keydownCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keydownCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.src,n=e.alt;return Object(o.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.backdropCloseModal,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:t,alt:n})})}),f)}}]),n}(r.PureComponent),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showModal,t=this.props,n=t.src,r=t.alt,c=t.fullSize;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:n,alt:r,onClick:this.toggleModal,className:"ImageGalleryItem-image"}),e&&Object(a.jsx)(y,{onClose:this.toggleModal,src:c,alt:r})]})}}]),n}(r.PureComponent);var v=function(e){var t=e.imgArray;return Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)(O,{src:n,alt:c,fullSize:r})},t)}))})},x=n(12),S=n(7),w=n.n(S);var k=function(e){var t=e.onClickFetch,n=void 0===t?null:t,r=e.type,c=void 0===r?"more":r;return e.show,"hidden"===c?Object(a.jsx)(a.Fragment,{}):"more"===c?Object(a.jsx)("button",{className:w.a.button,type:"button",onClick:n,children:"Load More"}):"spinner"===c?Object(a.jsx)(x.a,{size:"36",className:w.a.iconSpin}):"loading"===c?Object(a.jsxs)("button",{className:w.a.button,type:"button",children:[Object(a.jsx)("span",{children:Object(a.jsx)(x.a,{size:"16",className:w.a.iconSpinBtn})}),Object(a.jsx)("span",{children:"Loading..."})]}):void 0},F="19532775-cd1fec64673db4c80a00103d2",C="idle",M="pending",Q="rejected",_="resolved",N={status:C,imgFetched:[],imgTotal:0,page:1,error:""},P=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Object(m.a)({},N),e.staticFetchOptions={perPage:12,staticURL:"https://pixabay.com/api/?image_type=photo&orientation=horizontal"},e.fetchQuery=function(){e.setState({status:M});var t=e.props.searchQuery,n=e.state,a=n.page,r=n.imgFetched,c=e.staticFetchOptions,o=c.staticURL,s=c.perPage,i="".concat(o,"&q=").concat(t,"&page=").concat(a,"&per_page=").concat(s,"&key=").concat(F);return setTimeout((function(){fetch(i).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no image with tag ".concat(t)))})).then((function(n){var a=n.hits,c=n.totalHits;if(0===a.length&&0===r.length)return Promise.reject(new Error("There is no image with tag: ".concat(t)));e.setState((function(e){return{imgFetched:[].concat(Object(p.a)(e.imgFetched),Object(p.a)(a)),imgTotal:c,status:_}})),e.incrementPage()})).catch((function(t){return e.setState({error:t,status:Q})}))}),500)},e.incrementPage=function(){return e.setState((function(e){return{page:e.page+1}}))},e.resetGallery=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e.setState(Object(m.a)({},N),t)},e.buttonLoadType=function(){var t=e.state,n=t.imgFetched,a=t.page,r=t.totalHits,c="more";return 1===a&&(c="spinner"),t.status===M&&a>1&&(c="loading"),n.length>=r&&(c="hidden"),c},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.searchQuery!==this.props.searchQuery&&this.resetGallery(this.fetchQuery),t.imgFetched!==this.state.imgFetched&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.imgFetched,n=e.error,r=e.status,c=this.buttonLoadType();return r===C?Object(a.jsx)("h1",{className:g.a.info,children:"Input tag to find images"}):r===M?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{imgArray:t}),Object(a.jsx)(k,{type:c})]}):r===Q?Object(a.jsx)("h1",{className:g.a.info,children:n.message}):r===_?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{imgArray:t}),Object(a.jsx)(k,{type:c,onClickFetch:this.fetchQuery})]}):void 0}}]),n}(r.PureComponent),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.setSearchQuery=function(t){e.setState({searchQuery:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this.state.searchQuery;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{onSubmit:this.setSearchQuery}),Object(a.jsx)(P,{searchQuery:e}),Object(a.jsx)(d.a,{autoClose:3e3})]})}}]),n}(r.Component);I.defaultProps={};var L=I,A=document.querySelector("#root");s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),A)},7:function(e,t,n){e.exports={button:"Button_button__3QF_k",iconSpin:"Button_iconSpin__3vRRA","icon-spin":"Button_icon-spin__18vUR",iconSpinBtn:"Button_iconSpinBtn__3d432"}}},[[24,1,2]]]);
//# sourceMappingURL=main.51518959.chunk.js.map