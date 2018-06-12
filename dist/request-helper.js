"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function n(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,u){return t&&n(e.prototype,t),u&&n(e,u),e}}(),_request=require("request"),_request2=_interopRequireDefault(_request);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var RequestHelper=function(){function t(e){_classCallCheck(this,t),this.headers={authorization:"Bearer "+e,content_type:"application/json"},this.apiUrl="https://api.digitalocean.com/v2/"}return _createClass(t,[{key:"request",value:function(e,t){var u=void 0;return t||(u=new Promise(function(n,s){t=function(e,t,u){e?s(e):n({response:t,body:u})}})),e.includeAll?this.getAllPages(e.key,e,t):this.submitRequest(e,t),u}},{key:"submitRequest",value:function(e,n){var s=this,t=this.requestBuilder(e);(0,_request2.default)(t,function(e,t,u){e?n(e):e||s.isSuccessfulRequest(t.statusCode)?n(null,t,u):n(u)})}},{key:"isSuccessfulRequest",value:function(e){return/^[2][0-9][0-9]$/.test(e)}},{key:"getAllPages",value:function(n,s,r){var i=this,a=[],o=0,l=0,c=1;s.qs.page=1,this.submitRequest(s,function(e,t,u){if(e&&r(e),o=u.meta.total,a=a.concat(u[n]),l=o/(s.qs.per_page||25),a.length>=o)return r(null,t,a);i.getRemainingPages(s,2,l,function(e,t,u){e&&r(e),c++,a=a.concat(u[n]),c===l&&r(null,t,a)})})}},{key:"getRemainingPages",value:function(e,t,u,n){for(var s=t;s<=u;s++)e.qs.page=s,this.submitRequest(e,n)}},{key:"requestBuilder",value:function(e){return{uri:this.apiUrl+e.actionPath,method:e.method||"GET",headers:e.headers||this.headers,body:e.body||{},strictSSL:!0,json:!0,qs:e.qs||{}}}}]),t}();exports.default=RequestHelper;