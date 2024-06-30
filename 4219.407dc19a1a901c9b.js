(self.webpackChunkcd_user=self.webpackChunkcd_user||[]).push([[4219],{2770:(Y,j,p)=>{p.r(j),p.d(j,{UserFrontModule:()=>k});var C=p(5228),i=p(533),F=p(5250),D=p(3781),y=p(6380),T=p(2618),u=p(9707),I=p(5006),f=p(6143),o=p(1542),m=p(3078),v=p(7011),c=p(1042),e=p(7675);function L(r,t){if(1&r&&(e.\u0275\u0275elementStart(0,"ngb-alert",39),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&r){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function M(r,t){1&r&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName is required"),e.\u0275\u0275elementEnd())}function w(r,t){1&r&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName must be a valid userName address"),e.\u0275\u0275elementEnd())}function oe(r,t){if(1&r&&(e.\u0275\u0275elementStart(0,"div",40),e.\u0275\u0275template(1,M,2,0,"div",41),e.\u0275\u0275template(2,w,2,0,"div",41),e.\u0275\u0275elementEnd()),2&r){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid)}}function ne(r,t){1&r&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function re(r,t){if(1&r&&(e.\u0275\u0275elementStart(0,"div",40),e.\u0275\u0275template(1,ne,2,0,"div",41),e.\u0275\u0275elementEnd()),2&r){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid)}}const ee=function(r){return{"is-invalid":r}};class U{constructor(t,n,s,a,d,g,h,N,W){this.logger=t,this.svSio=n,this.svWss=s,this.svUser=a,this.svSess=d,this.svMenu=g,this.svNav=h,this.route=N,this.svBase=W,this.debug=!0,this.resourceGuid=(0,c.Z)(),this.loginInvalid=!1,this.rememberMe=!0,this.submitted=!1,this.error="",this.socketData=[],this.svSio.env=f.N,this.svSio.initSio(null,null),this.fg=new i.FormGroup({userName:new i.FormControl,password:new i.FormControl,rememberMe:new i.FormControl})}ngOnInit(){this.logger.info("cd-user-v2::LoginComponent::ngOnInit()/StorageType.CdObjId:",o.StorageType.CdObjId);const t={storageType:o.StorageType.CdObjId,cdObjId:{appId:localStorage.getItem("appId"),resourceGuid:null,resourceName:"SidebarComponent",ngModule:"SharedModule",jwtToken:localStorage.getItem("accessToken"),socket:null,commTrack:null}};this.logger.info("cd-user-v2::LoginComponent::ngOnInit()/filter:",t),this.sidebarInitData=this.searchLocalStorage(t),this.logger.info("user/LoginComponent::ngOnInit()/this.sidebarInitData:",this.sidebarInitData);const n=localStorage.getItem("socketData");if(n){let a=function(d){return"appInit"===d.name?d:null};this.socketData=JSON.parse(n).filter(a),this.logger.info("user/LoginComponent::ngOnInit()/this.socketData:",this.socketData)}else this.logger.info("Err: socket data is not valid")}login(t){this.logger.info("starting user/LoginComponent::login");let n=t.value;const s=t.valid;this.logger.info("user/LoginComponent::login/01"),this.logger.info("user/LoginComponent::login/fg:",t),this.logger.info("user/LoginComponent::login/valid:",s),this.submitted=!0,n=Object.assign({},n,{consumerGuid:f.N.consumerToken});try{this.logger.info("user/LoginComponent::login/02"),s&&(this.logger.info("user/LoginComponent::login/03"),this.initSession(n))}catch{this.logger.info("user/LoginComponent::login/04"),this.errMsg="Something went wrong!!",this.loginInvalid=!0}}initSession(t){this.logger.info("user/LoginComponent::initSession/01"),this.svUser.auth$(t).subscribe(n=>{if(!0===n.app_state.success){if(this.logger.info("user/LoginComponent::initSession/res:",JSON.stringify(n)),this.svSess.appState=n.app_state,null!==n.app_state.sess.cd_token&&n.app_state.success){this.logger.info("user/LoginComponent::initSession/02");const s=this.configPushPayload("login","push-menu",n.data.userData.userId);s.pushData.m=n.data.menuData,this.logger.info("user/LoginComponent::initSession/envl:",s),"sio"===f.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing sio"),this.svSio.sendPayLoad(s)),"wss"===f.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing wss"),this.svWss.sendMsg(s)),this.svSess.createSess(n,this.svMenu),this.svUser.currentUser={name:`${n.data.userData.userName}`,picture:`${f.N.shellHost}/user-resources/${n.data.userData.userGuid}/avatar-01/a.jpg`},this.svNav.userMenu=[{title:"Profile",link:"/pages/cd-auth/register"},{title:"Log out",link:"/pages/cd-auth/logout"}];const a={queryParams:{token:n.app_state.sess.cd_token},skipLocationChange:!0,replaceUrl:!1};this.route.navigate(["/dashboard"],a),this.route.navigate([f.N.initialPage],a)}}else this.errMsg="The userName and password were not valid",this.loginInvalid=!0,this.svSess.logout()})}configPushPayload(t,n,s){this.logger.info("starting cd-user-v2::LoginComponent::configPushPayload()");const a={pushData:{pushGuid:"",m:"",pushRecepients:[],triggerEvent:"",emittEvent:"",token:"",isNotification:null,appSockets:this.socketData,commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}},req:null,resp:null},d=[{userId:s,subTypeId:1,cdObjId:{appId:f.N.appId,ngModule:"UserFrontModule",resourceName:"LoginComponent",resourceGuid:(0,c.Z)(),jwtToken:"",socket:null,socketId:"",commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}}}],g={...a};g.pushData.triggerEvent=t,g.pushData.emittEvent=n;const h={...d[0]};h.subTypeId=1,g.pushData.pushRecepients.push(h),this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/this.sidebarInitData:",JSON.stringify(this.sidebarInitData)),this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/this.sidebarInitData.value:",JSON.stringify(this.sidebarInitData.value));const N={...d[0]};return N.subTypeId=7,this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/uRecepient:",JSON.stringify(N)),N.cdObjId=this.sidebarInitData.value,g.pushData.pushRecepients.push(N),this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/envl:",JSON.stringify(g)),g}searchLocalStorage(t){this.logger.info("starting LoginComponent::searchLocalStorage()/lcLength:");const n=[],s=localStorage.length;this.logger.info("LoginComponent::searchLocalStorage()/lcLength:",s);for(let l=0;l<localStorage.length;l++){const S=localStorage.key(l);var d=localStorage.getItem(S);this.logger.info("Key: "+S+", Value: "+d);try{if(this.logger.info("LoginComponent::searchLocalStorage()/1"),"object"==typeof d){this.logger.info("LoginComponent::searchLocalStorage()/2"),this.logger.info("LoginComponent::searchLocalStorage()/v:",d);const R=JSON.parse(d);"success"in R&&(this.logger.info("LoginComponent::searchLocalStorage()/3"),this.logger.info("LoginComponent::searchLocalStorage()/appState:",R)),"resourceGuid"in R&&(this.logger.info("LoginComponent::searchLocalStorage()/4"),this.logger.info("LoginComponent::searchLocalStorage()/cdObjId:",R)),this.logger.info("LoginComponent::searchLocalStorage()/5"),n.push({key:S,value:JSON.parse(d)})}else this.logger.info("LoginComponent::searchLocalStorage()/typeof (v):",typeof d),this.logger.info("LoginComponent::searchLocalStorage()/6"),n.push({key:S,value:JSON.parse(d)})}catch(R){this.logger.info("offending item:",d),this.logger.info("the item is not an object"),this.logger.info("Error:",R)}}this.logger.info("LoginComponent::searchLocalStorage()/lcArr:",n),this.logger.info("LoginComponent::searchLocalStorage()/f.cdObjId!.resourceName:",t.cdObjId.resourceName);const h=l=>"object"==typeof l.value,N=l=>"resourceName"in l.value,W=l=>l.value.resourceName===t.cdObjId.resourceName&&l.value.ngModule===t.cdObjId.ngModule,X=(l,S)=>l.value.commTrack.initTime>S.value.commTrack.initTime?l:S;let P=null;try{this.debug?(this.logger.info("LoginComponent::searchLocalStorage()/debug=true:"),P=n.filter(l=>"object"==typeof l.value?(this.logger.info("LoginComponent::searchLocalStorage()/filteredByObject: d:",l),l):null).filter(l=>"resourceName"in l.value?(this.logger.info("LoginComponent::searchLocalStorage()/filteredByResourceNameField: d:",l),l):null).filter(l=>(this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d:",l),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.resourceName:",l.value.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.resourceName:",t.cdObjId.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.ngModule:",l.value.ngModule),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.ngModule:",t.cdObjId.ngModule),l.value.resourceName===t.cdObjId.resourceName&&l.value.ngModule===t.cdObjId.ngModule?l:null)).reduce((l={},S={})=>(this.logger.info("LoginComponent::searchLocalStorage()/prev:",l),this.logger.info("LoginComponent::searchLocalStorage()/current:",S),l.value.commTrack.initTime>S.value.commTrack.initTime?l:S))):(this.logger.info("LoginComponent::searchLocalStorage()/debug=false:"),P=n.filter(h).filter(N).filter(W).reduce(X)),this.logger.info("LoginComponent::searchLocalStorage()/ret:",P)}catch(l){this.logger.info("Error:",l)}return P}onFocus(){this.errMsg=""}}U.\u0275fac=function(t){return new(t||U)(e.\u0275\u0275directiveInject(F.NGXLogger),e.\u0275\u0275directiveInject(o.SioClientService),e.\u0275\u0275directiveInject(o.WebsocketService),e.\u0275\u0275directiveInject(o.UserService),e.\u0275\u0275directiveInject(o.SessService),e.\u0275\u0275directiveInject(o.MenuService),e.\u0275\u0275directiveInject(o.NavService),e.\u0275\u0275directiveInject(v.Router),e.\u0275\u0275directiveInject(o.BaseService))},U.\u0275cmp=e.\u0275\u0275defineComponent({type:U,selectors:[["app-login"]],decls:58,vars:10,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","no-gutters"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","userName"],["formControlName","userName","id","userName","placeholder","userName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customControlInline",1,"custom-control-input"],["for","customControlInline",1,"custom-control-label"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],["routerLink","/account/reset-password",1,"text-muted"],[1,"mdi","mdi-lock","mr-1"],[1,"mt-5","text-center"],["routerLink","/account/signup",1,"font-weight-medium","text-primary"],[1,"mdi","mdi-heart","text-danger"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Welcome Back !"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Sign in to continue."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return n.login(n.fg)}),e.\u0275\u0275template(22,L,2,2,"ngb-alert",17),e.\u0275\u0275elementStart(23,"div",18),e.\u0275\u0275element(24,"i",19),e.\u0275\u0275elementStart(25,"label",20),e.\u0275\u0275text(26,"User Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"input",21),e.\u0275\u0275template(28,oe,3,2,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",18),e.\u0275\u0275element(30,"i",23),e.\u0275\u0275elementStart(31,"label",24),e.\u0275\u0275text(32,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(33,"input",25),e.\u0275\u0275template(34,re,2,1,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",26),e.\u0275\u0275element(36,"input",27),e.\u0275\u0275elementStart(37,"label",28),e.\u0275\u0275text(38,"Remember me"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"div",29)(40,"button",30),e.\u0275\u0275text(41,"Log In"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"div",29)(43,"a",31),e.\u0275\u0275element(44,"i",32),e.\u0275\u0275text(45," Forgot your password?"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(46,"div",33)(47,"p"),e.\u0275\u0275text(48,"Don't have an account ? "),e.\u0275\u0275elementStart(49,"a",34),e.\u0275\u0275text(50," Register "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275text(52,"\xa9 2020 Nazox. Crafted with "),e.\u0275\u0275element(53,"i",35),e.\u0275\u0275text(54," by Themesdesign"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(55,"div",36)(56,"div",37),e.\u0275\u0275element(57,"div",38),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",n.fg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(6,ee,n.submitted&&n.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.loginInvalid),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,ee,n.submitted&&n.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.loginInvalid))},dependencies:[C.NgClass,C.NgIf,v.RouterLink,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,y.NgbAlert]});class B{constructor(){}ngOnInit(){}}B.\u0275fac=function(t){return new(t||B)},B.\u0275cmp=e.\u0275\u0275defineComponent({type:B,selectors:[["app-register"]],decls:2,vars:0,template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"register works!"),e.\u0275\u0275elementEnd())}});class O{constructor(){}ngOnInit(){}}O.\u0275fac=function(t){return new(t||O)},O.\u0275cmp=e.\u0275\u0275defineComponent({type:O,selectors:[["app-user-profile"]],decls:2,vars:0,template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"user-profile works!"),e.\u0275\u0275elementEnd())}});var V=p(3635);const ie=new o.FormsService,q=[{title:"ID",name:"userId",dbName:"user_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"userGuid",dbName:"user_guid",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"userName",dbName:"user_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(3),i.Validators.maxLength(20),i.Validators.required]]},{title:"F.Name",name:"fName",dbName:"f_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(3),i.Validators.maxLength(20),i.Validators.required]]},{title:"M.Name",name:"mName",dbName:"m_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(3),i.Validators.maxLength(20),i.Validators.required]]},{title:"L.Name",name:"lName",dbName:"l_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(3),i.Validators.maxLength(20),i.Validators.required]]},{title:"NID",name:"nationalId",dbName:"national_id",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(3),i.Validators.maxLength(20),i.Validators.required]]},{title:"PID",name:"passportId",dbName:"passport_id",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(3),i.Validators.maxLength(20),i.Validators.required]]},{title:"Postal",name:"postalAddress",dbName:"postal_address",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(1),i.Validators.maxLength(20),i.Validators.required]]},{title:"Mobile",name:"mobile",dbName:"mobile",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(8),i.Validators.maxLength(14),i.Validators.required]]},{title:"Email",name:"email",dbName:"email",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[i.Validators.pattern(o.EMAIL_PATTERN),i.Validators.required]]},{title:"Company",name:"companyId",dbName:"company_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.searchDropDown,fieldFor:o.FieldFor.createForm}],ddlInfo:{selData$:(0,V.of)([]),selValueField:"companyName",selIndex:"companyId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[i.Validators.minLength(3),i.Validators.maxLength(42),i.Validators.required]]},{title:"Gender",name:"gender",dbName:"gender",type:o.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.status,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Enabled",name:"userEnabled",dbName:"user_enabled",type:o.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.status,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:o.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:o.ControlType.action,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.action,fieldFor:o.FieldFor.createForm}],Fn:"createUser"},{title:"Search",name:"iconSearch",type:o.FieldType.any,controls:[],formControlsConfig:["",[]]}],se={data:{},valid:null,ctx:"Sys"},b={token:"",stepTitle:"Create User",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"userInfo",cardTitle:"User Information",cardTitleDesc:"Fill all information below",module:"User",controller:"User",formGroup:null,fields:ie.filterByFieldFor(q,o.FieldFor.createForm)},te={name:"User Wizard",steps:[b]},A={select:["userId","userName","userGuid"],where:{}},z={getFn$:null,selIndex:A.select[0],selValueField:A.select[1],fetchFields:A.select,step:null,token:null,controlName:"userId"},ae=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/user/user/create",actionType:o.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/user/user/dashboard",actionType:o.ActionType.navigate}];class G{constructor(t,n,s,a,d,g,h){this.aRoute=t,this.router=n,this.svBase=s,this.svNazTable=a,this.svAcl=d,this.svPage=g,this.svSess=h,this.dSource={fields:[],data:[]},this.cardTitle="User",this.cardBodyId="user",this.searchInputId="inputSearchUser",this.filter={},this.tpData=o.DEFAULT_TPD,this.ddlData=ae,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{t&&this.svAcl.initComponent(t,this,this.svSess).then(n=>{})})}init(){this.baseModel=new o.BaseModel(b.module,b.controller),this.svBase.module=b.module,this.svBase.controller=b.controller,this.baseModel.data.fields=q.filter(t=>t.fetchable||t.type===o.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(b.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(t){this.svNazTable.execQuery(t,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(t){this.sQuery=t.sQuery,this.execQuery(t)}getSelect(){return this.baseModel.data.fields.filter(t=>t.fetchable).map(t=>t.name)}}G.\u0275fac=function(t){return new(t||G)(e.\u0275\u0275directiveInject(v.ActivatedRoute),e.\u0275\u0275directiveInject(v.Router),e.\u0275\u0275directiveInject(o.BaseService),e.\u0275\u0275directiveInject(m.NazTableService),e.\u0275\u0275directiveInject(o.AclService),e.\u0275\u0275directiveInject(m.PageService),e.\u0275\u0275directiveInject(o.SessService))},G.\u0275cmp=e.\u0275\u0275defineComponent({type:G,selectors:[["app-list"]],viewQuery:function(t,n){if(1&t&&e.\u0275\u0275viewQuery(m.NazTableComponent,5),2&t){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(n.nazTable=s.first)}},decls:1,vars:7,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","searchQuery"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"naz-table",0),e.\u0275\u0275listener("searchQuery",function(a){return n.setSearchQuery(a)}),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("baseModel",n.baseModel)("cardTitle",n.cardTitle)("cardBodyId",n.cardBodyId)("searchInputId",n.searchInputId)("tpData",n.tpData)("filter",n.filter)("ddlData",n.ddlData)},dependencies:[m.NazTableComponent]});var H=p(5861);class Q{constructor(t,n,s,a,d,g,h){this.aRoute=t,this.router=n,this.svBase=s,this.svPage=a,this.svSess=d,this.svAcl=g,this.svNotif=h,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(n=>{})})}init(){this.baseModel=new o.BaseModel(b.module,b.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(b.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(t){var n=this;return(0,H.Z)(function*(){n.svBase.update$(t,n.baseModel.token).subscribe(s=>{n.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:s,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:s})})})()}}Q.\u0275fac=function(t){return new(t||Q)(e.\u0275\u0275directiveInject(v.ActivatedRoute),e.\u0275\u0275directiveInject(v.Router),e.\u0275\u0275directiveInject(o.BaseService),e.\u0275\u0275directiveInject(m.PageService),e.\u0275\u0275directiveInject(o.SessService),e.\u0275\u0275directiveInject(o.AclService),e.\u0275\u0275directiveInject(o.NotificationService))},Q.\u0275cmp=e.\u0275\u0275defineComponent({type:Q,selectors:[["app-edit"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","updateQuery"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"naz-table-edit",0),e.\u0275\u0275listener("updateQuery",function(a){return n.update(a)}),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("baseModel",n.baseModel)("formConfig",n.formConfig)},dependencies:[m.EditComponent]});class ${constructor(t,n,s,a,d,g,h){this.aRoute=t,this.router=n,this.svBase=s,this.svPage=a,this.svAcl=d,this.svNotif=g,this.svSess=h,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(n=>{})})}init(){this.baseModel=new o.BaseModel(b.module,b.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(b.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(t){var n=this;return(0,H.Z)(function*(){n.svBase.delete$(t,n.baseModel.token).subscribe(s=>{n.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:s,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:s})})})()}}$.\u0275fac=function(t){return new(t||$)(e.\u0275\u0275directiveInject(v.ActivatedRoute),e.\u0275\u0275directiveInject(v.Router),e.\u0275\u0275directiveInject(o.BaseService),e.\u0275\u0275directiveInject(m.PageService),e.\u0275\u0275directiveInject(o.AclService),e.\u0275\u0275directiveInject(o.NotificationService),e.\u0275\u0275directiveInject(o.SessService))},$.\u0275cmp=e.\u0275\u0275defineComponent({type:$,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"naz-table-delete",0),e.\u0275\u0275listener("deleteQuery",function(a){return n.deleteItem(a)}),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("baseModel",n.baseModel)("formConfig",n.formConfig)},dependencies:[m.DeleteComponent]});class x{constructor(t,n,s){this.svMenu=t,this.svNotif=n,this.svForm=s,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(t,n){t.fields.map((s,a)=>{s.name===n&&(t.fields[a].ddlInfo.selData$=(0,V.of)(this.ddlData),t.fields[a].ddlInfo.selIndex="iconId",t.fields[a].ddlInfo.selValueField="iconName",t.fields[a].ddlInfo.selPlaceholder="...Choose")})}setDdl$(t){if(t.token){const n=new V.Subject;let s=[];return t.getFn$.subscribe(a=>{const d=a;console.log("ModulemanService::setDdl$()/response:",d),d.app_state.success?(s=d.data.items,t.step.fields.map((g,h)=>{g.name===t.controlName&&(t.step.fields[h].ddlInfo.selData$=(0,V.of)(d.data.items),t.step.fields[h].ddlInfo.selIndex=t.selIndex,t.step.fields[h].ddlInfo.selValueField=t.selValueField,t.step.fields[h].ddlInfo.selPlaceholder="...Choose")}),n.next(s)):(this.pushEnvelop.pushData=d,this.pushEnvelop.resp=d,this.svNotif.emitNotif(this.pushEnvelop),n.next(s))}),n.asObservable()}return(0,V.of)([])}}x.\u0275fac=function(t){return new(t||x)(e.\u0275\u0275inject(o.MenuService),e.\u0275\u0275inject(o.NotificationService),e.\u0275\u0275inject(o.FormsService))},x.\u0275prov=e.\u0275\u0275defineInjectable({token:x,factory:x.\u0275fac,providedIn:"root"});class _{constructor(t,n){this.svBase=t,this.svUserBase=n}loadDdls(t,n){var s=this;return(0,H.Z)(function*(){z.token=t.token,z.step=n,z.controlName="userId",console.log("ConsumerModService::loadDdls()/userGetQuery:",A),z.getFn$=s.svBase.getPaged$(A,t.token,"Sys","Moduleman","Company"),yield s.svUserBase.setDdl$(yield z).subscribe(a=>{console.log("menu/ConsumerModService::loadDdls()/ret(companies):",a),n.fields.forEach(d=>{"userId"===d.name&&(d.ddlInfo.data=a)})})})()}}_.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275inject(o.BaseService),e.\u0275\u0275inject(x))},_.\u0275prov=e.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac,providedIn:"root"});class J{constructor(t,n,s,a,d,g,h,N,W,X,P,l){this.aRoute=t,this.router=n,this.svAcl=s,this.svForm=a,this.svNotif=d,this.fb=g,this.svForms=h,this.svPage=N,this.svPush=W,this.svBase=X,this.svUserFront=P,this.svSess=l,this.newUser=se,this.wizardModel=te,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(n=>{n&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svUserFront.loadDdls(this.baseModel,this.baseModel.data.step).then(t=>{console.log("user/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)})}init(){this.baseModel=new o.BaseModel(b.module,b.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(q,o.FieldFor.createForm),this.baseModel.data.wizardModel=te,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,b.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(q)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(b.controller,"Create")}setSelectedIcon(t){this.svForm.setSelectedIcon(t,this.baseModel,this.baseModel.data.step)}save(t){let n;switch(t.controller){case"module":case"menu":break;case"user":n=this.svBase.create$(this.newUser,this.baseModel.token),this.svForm.saveForm(t,this.newUser,n,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}J.\u0275fac=function(t){return new(t||J)(e.\u0275\u0275directiveInject(v.ActivatedRoute),e.\u0275\u0275directiveInject(v.Router),e.\u0275\u0275directiveInject(o.AclService),e.\u0275\u0275directiveInject(o.FormsService),e.\u0275\u0275directiveInject(o.NotificationService),e.\u0275\u0275directiveInject(i.FormBuilder),e.\u0275\u0275directiveInject(o.FormsService),e.\u0275\u0275directiveInject(m.PageService),e.\u0275\u0275directiveInject(o.CdPushService),e.\u0275\u0275directiveInject(o.BaseService),e.\u0275\u0275directiveInject(_),e.\u0275\u0275directiveInject(o.SessService))},J.\u0275cmp=e.\u0275\u0275defineComponent({type:J,selectors:[["app-create"]],decls:2,vars:0,template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"create works!"),e.\u0275\u0275elementEnd())}});class Z{constructor(){}ngOnInit(){}}Z.\u0275fac=function(t){return new(t||Z)},Z.\u0275cmp=e.\u0275\u0275defineComponent({type:Z,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"dashboard works!"),e.\u0275\u0275elementEnd())}});const le=[{path:"",redirectTo:"profile",pathMatch:"full"},{path:"login",component:U},{path:"register",component:B},{path:"profile",component:O},{path:"list",component:G},{path:"edit",component:Q},{path:"delete",component:$},{path:"create",component:J},{path:"dashboard",component:Z}];class E{constructor(t){this.router=t,t.events.subscribe(n=>{console.log("CdUser::UserRoutingModule::constructor()/routeState:",n)})}}E.\u0275fac=function(t){return new(t||E)(e.\u0275\u0275inject(v.Router))},E.\u0275mod=e.\u0275\u0275defineNgModule({type:E}),E.\u0275inj=e.\u0275\u0275defineInjector({imports:[v.RouterModule.forChild(le),v.RouterModule]});class k{}k.\u0275fac=function(t){return new(t||k)},k.\u0275mod=e.\u0275\u0275defineNgModule({type:k}),k.\u0275inj=e.\u0275\u0275defineInjector({imports:[C.CommonModule,E,i.FormsModule,i.ReactiveFormsModule,F.LoggerModule.forRoot({level:F.NgxLoggerLevel.TRACE,serverLogLevel:F.NgxLoggerLevel.OFF,serverLoggingUrl:"/api/logs",disableConsoleLogging:!1,enableSourceMaps:!0,colorScheme:["purple","teal","gray","gray","red","red","red"]}),y.NgbNavModule,y.NgbDropdownModule,y.NgbTooltipModule,y.NgbAccordionModule,m.NazUiModule,m.NazTableModule,m.NazCreateModule,m.NazEditModule,m.NazDeleteModule,y.NgbAlertModule,T.Ng2SearchPipeModule,u.ArchwizardModule,I.NgToggleModule,D.NgSelectModule,o.BaseModule.forChild(f.N),o.UserModule.forChild(f.N),o.CdPushModule.forChild(f.N)]})},1042:(Y,j,p)=>{p.d(j,{Z:()=>v});var C,i=new Uint8Array(16);function F(){if(!C&&!(C=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return C(i)}const D=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,T=function y(c){return"string"==typeof c&&D.test(c)};for(var u=[],I=0;I<256;++I)u.push((I+256).toString(16).substr(1));const v=function m(c,e,L){var M=(c=c||{}).random||(c.rng||F)();if(M[6]=15&M[6]|64,M[8]=63&M[8]|128,e){L=L||0;for(var w=0;w<16;++w)e[L+w]=M[w];return e}return function f(c){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,L=(u[c[e+0]]+u[c[e+1]]+u[c[e+2]]+u[c[e+3]]+"-"+u[c[e+4]]+u[c[e+5]]+"-"+u[c[e+6]]+u[c[e+7]]+"-"+u[c[e+8]]+u[c[e+9]]+"-"+u[c[e+10]]+u[c[e+11]]+u[c[e+12]]+u[c[e+13]]+u[c[e+14]]+u[c[e+15]]).toLowerCase();if(!T(L))throw TypeError("Stringified UUID is invalid");return L}(M)}},5861:(Y,j,p)=>{function C(F,D,y,T,u,I,f){try{var o=F[I](f),m=o.value}catch(v){return void y(v)}o.done?D(m):Promise.resolve(m).then(T,u)}function i(F){return function(){var D=this,y=arguments;return new Promise(function(T,u){var I=F.apply(D,y);function f(m){C(I,T,u,f,o,"next",m)}function o(m){C(I,T,u,f,o,"throw",m)}f(void 0)})}}p.d(j,{Z:()=>i})}}]);