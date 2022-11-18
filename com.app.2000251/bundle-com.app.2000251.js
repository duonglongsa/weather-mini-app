(()=>{var e={220:(e,t,i)=>{var s=i(72);t.Dio=s.MXDio,t.BaseOptions=s.MXBaseOptions,t.Options=s.MXOptions,t.Headers=s.MXHeaders,t.Response=s.MXResponse,t.RequestOptions=s.MXRequestOptions,t.ResponseType=s.MXResponseType},72:(e,t,i)=>{const{MXDartClass:s,MXLifecycleDartClass:r,MXMirrorObjMethodCall:n,MXJSLog:o}=i(234);MXResponseType={json:{_name:"ResponseType.json",index:0},stream:{_name:"ResponseType.stream",index:1},plain:{_name:"ResponseType.plain",index:2},bytes:{_name:"ResponseType.bytes",index:3}};class MXOptions extends s{constructor({method:e,sendTimeout:t,receiveTimeout:i,extra:s,headers:r,responseType:n,contentType:o,validateStatus:a,receiveDataWhenStatusError:l,followRedirects:c,maxRedirects:h}={}){super(),this.className="Options",this.method=e,this.sendTimeout=t,this.receiveTimeout=i,this.extra=s,this.headers=r,this.responseType=n,this.contentType=o,this.validateStatus=a,this.receiveDataWhenStatusError=l,this.followRedirects=c,this.maxRedirects=h}}class MXHeaders{constructor({map:e}={}){this.map=e}value(e){let t=this.map[e];if(null==t)return null;if(1==t.length)return t[0];throw Exception('"$name" header has more than one value, please use Headers[name]')}}MXHeaders.acceptHeader="accept",MXHeaders.contentEncodingHeader="content-encoding",MXHeaders.contentLengthHeader="content-length",MXHeaders.contentTypeHeader="content-type",MXHeaders.wwwAuthenticateHeader="www-authenticate",MXHeaders.jsonContentType="application/json; charset=utf-8",MXHeaders.formUrlEncodedContentType="application/x-www-form-urlencoded";class MXResponse extends s{constructor({data:e,headers:t,request:i,isRedirect:s,statusCode:r,statusMessage:n,redirects:o,extra:a}={}){super(),this.className="Response",this.data=e,this.headers=t,this.request=i,this.isRedirect=s,this.statusCode=r,this.statusMessage=n,this.redirects=o,this.extra=a}static fromJSON(e){let t=new MXResponse;return t.data=e.data,t.headers=new MXHeaders(e.headers),t.request=e.request,t.isRedirect=e.isRedirect,t.statusCode=e.statusCode,t.statusMessage=e.statusMessage,t.redirects=e.redirects,t.extra=e.extra,t}}class MXDio extends r{constructor(e){super(new n({className:"Dio",args:{baseOptions:e}}))}get(e,{queryParameters:t,options:i,onReceiveProgress:s}={}){return this.request(e,{options:this.checkOptions("get",i),queryParameters:t,onReceiveProgress:s})}post(e,{data:t,queryParameters:i,options:s,onSendProgress:r,onReceiveProgress:n}={}){return this.request(e,{data:t,options:this.checkOptions("post",s),queryParameters:i,onSendProgress:r,onReceiveProgress:n})}request(e,{data:t,queryParameters:i,options:s,onSendProgress:r,onReceiveProgress:o}={}){let a=this.addCallback(r),l=this.addCallback(o),c=new n({className:"Dio",funcName:"request",args:{path:e,data:t,options:s,queryParameters:i,onSendProgress:a,onReceiveProgress:l}}),h=this;return new Promise((function(e,t){h.invokeMirrorObjMethod(c,(function(t){if(null!=t){let i=JSON.parse(t),r=MXResponse.fromJSON(i);r&&(r.options=s),s.responseType==MXResponseType.bytes&&(r.data=convert.base64Encode(r.data)),e(r)}else e(null);setTimeout((function(){h.removeCallback(a),h.removeCallback(l)}),1e3)}))}))}checkOptions(e,t){return(t=t||new MXOptions).method=e,t}}t.MXDio=function MXFDio(e){return new MXDio(e)},t.MXBaseOptions=class MXBaseOptions extends s{constructor({method:e,connectTimeout:t,receiveTimeout:i,sendTimeout:s,baseUrl:r,queryParameters:n,extra:o,headers:a,responseType:l,contentType:c,validateStatus:h,receiveDataWhenStatusError:d,followRedirects:u,maxRedirects:p}={}){super(),this.className="BaseOptions",this.method=e,this.connectTimeout=t,this.receiveTimeout=i,this.sendTimeout=s,this.baseUrl=r,this.queryParameters=n,this.extra=o,this.headers=a,this.responseType=l,this.contentType=c,this.validateStatus=h,this.receiveDataWhenStatusError=d,this.followRedirects=u,this.maxRedirects=p}},t.MXOptions=MXOptions,t.MXHeaders=MXHeaders,t.MXResponse=MXResponse,t.MXRequestOptions=class MXRequestOptions extends s{constructor({method:e,sendTimeout:t,receiveTimeout:i,connectTimeout:s,data:r,path:n,queryParameters:o,baseUrl:a,extra:l,headers:c,responseType:h,contentType:d,validateStatus:u,receiveDataWhenStatusError:p,followRedirects:w,maxRedirects:g}={}){super(),this.className="RequestOptions",this.method=e,this.sendTimeout=t,this.receiveTimeout=i,this.connectTimeout=s,this.data=r,this.path=n,this.queryParameters=o,this.baseUrl=a,this.extra=l,this.headers=c,this.responseType=h,this.contentType=d,this.validateStatus=u,this.receiveDataWhenStatusError=p,this.followRedirects=w,this.maxRedirects=g}},t.MXResponseType=MXResponseType},156:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MXMirrorExample=void 0;const s=i(234);class MXMirrorExample extends s.MXLifecycleDartClass{constructor(){super(new s.MXMirrorObjMethodCall({className:"MXMirrorExample",args:{key:123}}))}navigateToMiniApp(e,{bizPath:t=""}){let i=new s.MXMirrorObjMethodCall({className:"MXMirrorExample",funcName:"navigateToMiniApp",args:{packageId:e,bizPath:t}});return this.invokeMirrorObjMethodAsyc(i)}release(){super.release()}}t.MXMirrorExample=MXMirrorExample},297:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkConfig=void 0;class NetworkConfig{}t.NetworkConfig=NetworkConfig,NetworkConfig.API_KEY="bda1b247c678eecf35c65f615b188b05",NetworkConfig.WEATHER_BASE_URL="https://api.openweathermap.org/data/2.5/weather",NetworkConfig.WEATHER_ICON_URL="http://openweathermap.org/img/wn/"},364:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WeatherData=void 0;t.WeatherData=class WeatherData{constructor(e,t,i,s,r,n,o){this.id=e,this.descriptions=t,this.icon=i,this.temperature=s,this.windSpeed=r,this.humidity=n,this.city=o}}},976:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(r,n){function fulfilled(e){try{step(s.next(e))}catch(t){n(t)}}function rejected(e){try{step(s.throw(e))}catch(t){n(t)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WeatherRepo=void 0;const r=i(220),n=i(234),o=i(364),a=i(297);t.WeatherRepo=class WeatherRepo{constructor(){this.dio=(0,r.Dio)()}getData(e){return s(this,void 0,void 0,(function*(){try{n.MXJSLog.log("get data");let t=yield this.dio.get(a.NetworkConfig.WEATHER_BASE_URL,{queryParameters:e});n.MXJSLog.log("await Dio.get(urlStr):request() :"+JSON.stringify(t.data));let i=t.data;return this.entityFromModel(i)}catch(t){return n.MXJSLog.log("testDio() error:"+t),t}}))}entityFromModel(e){return new o.WeatherData(e.weather[0].id,e.weather[0].description,e.weather[0].icon,e.main.temp,e.wind.speed,e.main.humidity,e.name)}}},341:function(e,t,i){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(i(234)),n=i(223);r.default.regist({name:"com.app.2000251",RootWidget:n.CityListScreen})},471:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(r,n){function fulfilled(e){try{step(s.next(e))}catch(t){n(t)}}function rejected(e){try{step(s.throw(e))}catch(t){n(t)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WeatherDetailViewModel=void 0;const r=i(234),n=i(651),o=i(976);class WeatherDetailViewModel extends n.ChangeNotifier{constructor(){super(),this.weatherRepo=new o.WeatherRepo}static get Instance(){return this._instance||(this._instance=new this)}getWeatherData(e){return s(this,void 0,void 0,(function*(){const t={q:e,appid:"bda1b247c678eecf35c65f615b188b05",units:"metric"};r.MXJSLog.log("get weather data:"+e),this.weatherDetail=yield this.weatherRepo.getData(t)}))}}t.WeatherDetailViewModel=WeatherDetailViewModel},223:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(r,n){function fulfilled(e){try{step(s.next(e))}catch(t){n(t)}}function rejected(e){try{step(s.throw(e))}catch(t){n(t)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CityListScreen=void 0;const r=i(234),n=i(933),o=i(993),a=i(220),l=i(558),c=i(156);class CityListScreen extends r.StatefulWidget{createState(){return new CityListState}}t.CityListScreen=CityListScreen;class CityListState extends r.State{constructor(){super(),this.cityList=[],this.searchList=[],this.isLoading=!1,this.superAppConnector=new c.MXMirrorExample}initState(){super.initState(),this.getCityList()}getCityList(){return s(this,void 0,void 0,(function*(){r.MXJSLog.log("get list"),this.isLoading=!0,this.setState((()=>{}));let e=(0,a.Dio)();var t=Date.now();let i=yield e.get("https://raw.githubusercontent.com/manifestinteractive/openweathermap-cities/master/data/owm_city_list.json",{queryParameters:{}});var s=Date.now();r.MXJSLog.log("calling api time: "+(s.valueOf()-t.valueOf()));let n=JSON.parse(i.data).RECORDS;var o=Date.now();for(let r=0;r<n.length;r++){const e=n[r].owm_city_name;this.cityList.push(e),this.searchList.push(e)}var l=Date.now();r.MXJSLog.log("loop time: "+(l.valueOf()-o.valueOf())),this.isLoading=!1,r.MXJSLog.log("list length: "+this.cityList.length.toString()),this.setState((()=>{})),r.MXJSLog.log(Date.now().valueOf().toString())}))}build(e){const t=this;return new n.Scaffold({appBar:new n.AppBar({backgroundColor:n.Colors.white,actions:[new n.IconButton({icon:new o.Icon(n.Icons.menu_open),onPressed:()=>{this.superAppConnector.navigateToMiniApp("com.app.20002501",{bizPath:""})}})],title:new n.Padding({padding:n.EdgeInsets.all(10),child:new n.Container({child:new n.TextField({decoration:new n.InputDecoration({filled:!0,fillColor:n.Colors.grey[50],hintText:"Search location",suffixIcon:new o.Icon(n.Icons.search),border:n.InputBorder.none}),onChanged:e=>{r.MXJSLog.log("Search: "+e),this.isLoading=!0,this.setState((()=>{})),this.searchList=[];for(let t=0;t<this.cityList.length;t++){const i=this.cityList[t];i.toLowerCase().includes(e.toLowerCase())&&this.searchList.push(i)}this.isLoading=!1,this.setState((()=>{}))}})})})}),body:this.isLoading?new o.Center({child:new n.CircularProgressIndicator}):this.searchList.length>0?n.ListView.builder({itemCount:this.searchList.length,itemBuilder:(i,s)=>new n.InkWell({onTap:()=>{r.MXJSLog.log("selected city: "+this.searchList[s]);let i=this.searchList[s];n.Navigator.push(e,new n.MaterialPageRoute({builder:function(e){return t.searchList[s],new l.WeatherPage(i)}}))},child:new n.Card({elevation:0,child:new n.ListTile({title:new o.Text(this.searchList[s]),trailing:new o.Icon(n.Icons.arrow_forward_ios)})})})}):new o.Center({child:new o.Text("City not found!")})})}}},558:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(r,n){function fulfilled(e){try{step(s.next(e))}catch(t){n(t)}}function rejected(e){try{step(s.throw(e))}catch(t){n(t)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WeatherPage=void 0;const r=i(234),n=i(933),o=i(993),a=i(554),l=i(471),c=i(297);class WeatherPage extends r.StatefulWidget{constructor(e){super(),this.city=e}createState(){return r.MXJSLog.log("Create state"+this.city),new WeatherPageState(this.city)}}t.WeatherPage=WeatherPage;class WeatherPageState extends r.State{constructor(e){super(),this.textController=new n.TextEditingController,this.weatherDetailViewmodel=l.WeatherDetailViewModel.Instance,this.city=e}initState(){super.initState(),r.MXJSLog.log("Init state"+this.city),this.getWeatherData(this.city)}getWeatherData(e){return s(this,void 0,void 0,(function*(){this.weatherDetailViewmodel.weatherDetail=null,this.setState((()=>{})),yield this.weatherDetailViewmodel.getWeatherData(e.toLocaleLowerCase().replace(/\s/g,"")),this.setState((()=>{}))}))}build(e){return new n.Scaffold({appBar:new n.AppBar({backgroundColor:n.Colors.white,title:new o.Text(this.city)}),body:new n.SingleChildScrollView({child:new n.Container({width:n.MediaQuery.of(e).size.width,height:n.MediaQuery.of(e).size.height,color:n.Colors.white,child:null!=this.weatherDetailViewmodel.weatherDetail?new o.Column({crossAxisAlignment:n.CrossAxisAlignment.center,mainAxisAlignment:a.MainAxisAlignment.center,mainAxisSize:n.MainAxisSize.min,children:[new n.SizedBox({height:20}),new n.Row({mainAxisAlignment:a.MainAxisAlignment.center,children:[new o.Icon(n.Icons.location_on_outlined),new o.Text(this.weatherDetailViewmodel.weatherDetail.city,{style:new n.TextStyle({color:n.Colors.black,fontWeight:n.FontWeight.bold,fontSize:40})})]}),n.Image.network(c.NetworkConfig.WEATHER_ICON_URL+this.weatherDetailViewmodel.weatherDetail.icon+"@4x.png",{fit:n.BoxFit.cover,height:.3*n.MediaQuery.of(e).size.width,width:.3*n.MediaQuery.of(e).size.width}),new o.Text(this.weatherDetailViewmodel.weatherDetail.descriptions,{style:new n.TextStyle({color:n.Colors.black,fontWeight:n.FontWeight.bold,fontSize:30})}),new n.SizedBox({height:10}),new o.Text(this.weatherDetailViewmodel.weatherDetail.temperature.toString()+"℃",{style:new n.TextStyle({color:n.Colors.black,fontWeight:n.FontWeight.bold,fontSize:40})}),new n.SizedBox({height:40}),new n.Row({mainAxisAlignment:a.MainAxisAlignment.spaceAround,children:[new o.Column({mainAxisAlignment:a.MainAxisAlignment.center,children:[new o.Text("Wind speed",{style:new n.TextStyle({color:new n.Color(4291085508),fontSize:12})}),new o.Text(this.weatherDetailViewmodel.weatherDetail.windSpeed.toString()+"m/s",{style:new n.TextStyle({color:new n.Color(4288322202),fontWeight:n.FontWeight.bold,fontSize:15})})]}),new o.Column({mainAxisAlignment:a.MainAxisAlignment.center,children:[new o.Text("Humidity",{style:new n.TextStyle({color:new n.Color(4291085508),fontSize:12})}),new o.Text(this.weatherDetailViewmodel.weatherDetail.humidity+"%".toString(),{style:new n.TextStyle({color:new n.Color(4288322202),fontWeight:n.FontWeight.bold,fontSize:15})})]})]})]}):new o.Center({child:new n.CircularProgressIndicator})})})})}}},234:e=>{"use strict";e.exports=globalThis.MXFlutterSDK.MXFlutter},651:e=>{"use strict";e.exports=globalThis.MXFlutterSDK.MXFlutterWidgets.cupertino},933:e=>{"use strict";e.exports=globalThis.MXFlutterSDK.MXFlutterWidgets.material},554:e=>{"use strict";e.exports=globalThis.MXFlutterSDK.MXFlutterWidgets.rendering},993:e=>{"use strict";e.exports=globalThis.MXFlutterSDK.MXFlutterWidgets.widgets}},t={};(function __webpack_require__(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,__webpack_require__),r.exports})(341)})();