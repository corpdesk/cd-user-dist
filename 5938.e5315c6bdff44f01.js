(self.webpackChunkcd_user=self.webpackChunkcd_user||[]).push([[5938],{5176:(O,m,a)=>{a.r(m),a.d(m,{GroupMemberModule:()=>b});var u=a(5228),l=a(7011),e=a(7675);let p=(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-list"]],decls:2,vars:0,template:function(o,r){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"list works!"),e.\u0275\u0275elementEnd())}})}return t})(),h=(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-edit"]],decls:2,vars:0,template:function(o,r){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"edit works!"),e.\u0275\u0275elementEnd())}})}return t})(),v=(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-delete"]],decls:2,vars:0,template:function(o,r){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"delete works!"),e.\u0275\u0275elementEnd())}})}return t})();var n=a(7512),C=a(533),d=a(1052);const f=[{path:"list",component:p},{path:"edit",component:h},{path:"delete",component:v},{path:"create",component:(()=>{class t{constructor(s,o,r,i,c,S,I,E,g,F,j,y,_,w){this.aRoute=s,this.router=o,this.svServer=r,this.svConsumerFront=i,this.svAcl=c,this.svForm=S,this.svNotif=I,this.fb=E,this.svForms=g,this.svModman=F,this.svPage=j,this.svPush=y,this.svBase=_,this.svSess=w,this.newConsumer=n.DEFAULT_INSERTABLE_CONSUMER,this.wizardModel=n.ConsumerWizardModel,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(s=>{this.svAcl.initComponent(s,this,this.svSess).then(o=>{o&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svConsumerFront.loadDdls(this.baseModel,this.baseModel.data.step).then(s=>{console.log("consumer/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)})}init(){this.baseModel=new n.BaseModel(n.CONSUMER_STEP_MODEL.module,n.CONSUMER_STEP_MODEL.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(n.ConsumerModel,n.FieldFor.createForm),this.baseModel.data.wizardModel=n.ConsumerWizardModel,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,n.CONSUMER_STEP_MODEL.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(n.ConsumerModel)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(n.CONSUMER_STEP_MODEL.controller,"Create")}setSelectedIcon(s){this.svForm.setSelectedIcon(s,this.baseModel,this.baseModel.data.step)}save(s){switch(console.log("consumer/CreateComponent::save()/01"),console.log("consumer/CreateComponent::save()/step:",s),s.controller){case"module":case"menu":break;case"Consumer":if(console.log("consumer/CreateComponent::save()/handling consumer"),console.log("consumer/CreateComponent::save()/step.formGroup.value:",s.formGroup.value),"VALID"===s.formGroup.status){console.log("consumer/CreateComponent::save()/validation success");let r={ctx:"Sys",m:"Moduleman",c:"Consumer",a:"Create",dat:{f_vals:[{data:{}}],token:""},args:{}};r.dat.f_vals[0].data={...s.formGroup.value},r.dat.token=this.baseModel.token,console.log("consumer/CreateComponent::save()/env:",r),this.svServer.proc(r).subscribe(i=>{console.log("consumer/CreateComponent::save()/Consumer/resp:",i)})}else console.log("consumer/CreateComponent::save()/Validation Error orccured")}}finishFunction(){console.log("finishing!!")}static#e=this.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275directiveInject(l.ActivatedRoute),e.\u0275\u0275directiveInject(l.Router),e.\u0275\u0275directiveInject(n.ServerService),e.\u0275\u0275directiveInject(n.ConsumerFrontService),e.\u0275\u0275directiveInject(n.AclService),e.\u0275\u0275directiveInject(n.FormsService),e.\u0275\u0275directiveInject(n.NotificationService),e.\u0275\u0275directiveInject(C.FormBuilder),e.\u0275\u0275directiveInject(n.FormsService),e.\u0275\u0275directiveInject(n.ModulemanService),e.\u0275\u0275directiveInject(d.PageService),e.\u0275\u0275directiveInject(n.CdPushService),e.\u0275\u0275directiveInject(n.BaseService),e.\u0275\u0275directiveInject(n.SessService))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(o,r){1&o&&(e.\u0275\u0275elementStart(0,"naz-table-create",0),e.\u0275\u0275listener("saveEmitter",function(c){return r.save(c)})("relaySelIconEmitter",function(c){return r.setSelectedIcon(c)}),e.\u0275\u0275elementEnd()),2&o&&e.\u0275\u0275property("baseModel",r.baseModel)("wizardModel",r.wizardModel)},dependencies:[d.CreateComponent]})}return t})()},{path:"dashboard",component:(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(o,r){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"dashboard works!"),e.\u0275\u0275elementEnd())}})}return t})()}];let M=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:t});static#o=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.RouterModule.forChild(f),l.RouterModule]})}return t})(),b=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:t});static#o=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[u.CommonModule,M,d.NazCreateModule]})}return t})()}}]);