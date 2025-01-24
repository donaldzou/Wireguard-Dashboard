import{O,r as x,I as E,D as z,o as J,a as c,c as v,b as e,d as i,n as $,m as B,x as R,A as K,i as S,z as W,g as M,_ as I,u as Q,p as X,w as T,e as N,T as Y,t as D,f as V,F as H,h as F,k as G,E as j,W as q,H as Z,j as ee,a4 as te,q as P,C as se,a5 as ne,N as ae,v as ie}from"./index-DYu3w9yi.js";import{L as l}from"./localeText-CJ9oAh-b.js";import{d as le}from"./dayjs.min-BoqzkTu7.js";const oe={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},re={class:"container d-flex h-100 w-100"},de={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"700px"}},ue={class:"card rounded-3 shadow flex-grow-1 bg-danger-subtle border-danger-subtle",id:"deleteConfigurationContainer"},ce={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-0"},fe={class:"mb-0"},ge={class:"card-body px-4 text-muted"},me={class:"mb-0"},be={key:0},ve={key:1},pe={key:2,class:"d-flex align-items-center gap-2"},he=["placeholder"],ye=["disabled"],xe={__name:"deleteConfiguration",emits:["backup","close"],setup(o,{emit:r}){const p=O().params.id,n=x(""),g=E(),u=z(),h=x(!1),f=()=>{clearInterval(u.Peers.RefreshInterval),h.value=!0,W("/api/deleteWireguardConfiguration",{Name:p},_=>{_.status?(g.push("/"),u.newMessage("Server","Configuration deleted","success")):h.value=!1})},b=x(!0),y=x([]),w=()=>{b.value=!0,M("/api/getWireguardConfigurationBackup",{configurationName:p},_=>{y.value=_.data,b.value=!1})};J(()=>{w()});const k=r;return(_,d)=>(c(),v("div",oe,[e("div",re,[e("div",de,[e("div",ue,[e("div",ce,[e("h5",fe,[i(l,{t:"Are you sure to delete this configuration?"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:d[0]||(d[0]=s=>k("close"))})]),e("div",ge,[e("p",me,[i(l,{t:"Once you deleted this configuration:"})]),e("ul",null,[e("li",null,[i(l,{t:"All connected peers will get disconnected"})]),e("li",null,[i(l,{t:"Both configuration file (.conf) and database table related to this configuration will get deleted"})])]),e("div",{class:$(["alert",[b.value?"alert-secondary":y.value.length>0?"alert-success":"alert-danger"]])},[b.value?(c(),v("div",be,[d[5]||(d[5]=e("i",{class:"bi bi-search me-2"},null,-1)),i(l,{t:"Checking backups..."})])):y.value.length>0?(c(),v("div",ve,[d[6]||(d[6]=e("i",{class:"bi bi-check-circle-fill me-2"},null,-1)),i(l,{t:"This configuration have "+y.value.length+" backups"},null,8,["t"])])):(c(),v("div",pe,[d[9]||(d[9]=e("i",{class:"bi bi-x-circle-fill me-2"},null,-1)),i(l,{t:"This configuration have no backup"}),e("a",{role:"button",onClick:d[1]||(d[1]=s=>k("backup")),class:"ms-auto btn btn-sm btn-primary rounded-3"},[d[7]||(d[7]=e("i",{class:"bi bi-clock-history me-2"},null,-1)),i(l,{t:"Backup"})]),e("a",{role:"button",onClick:d[2]||(d[2]=s=>w()),class:"btn btn-sm btn-primary rounded-3"},d[8]||(d[8]=[e("i",{class:"bi bi-arrow-clockwise"},null,-1)]))]))],2),d[11]||(d[11]=e("hr",null,null,-1)),e("p",null,[i(l,{t:"If you're sure, please type in the configuration name below and click Delete"})]),B(e("input",{class:"form-control rounded-3 mb-3",placeholder:K(p),"onUpdate:modelValue":d[3]||(d[3]=s=>n.value=s),type:"text"},null,8,he),[[R,n.value]]),e("button",{class:"btn btn-danger w-100",onClick:d[4]||(d[4]=s=>f()),disabled:n.value!==K(p)||h.value},[d[10]||(d[10]=e("i",{class:"bi bi-trash-fill me-2 rounded-3"},null,-1)),h.value?(c(),S(l,{key:1,t:"Deleting..."})):(c(),S(l,{key:0,t:"Delete"}))],8,ye)])])])])]))}},we={class:"card my-0 rounded-3"},ke={class:"card-body position-relative"},Ce={key:0,class:"position-absolute w-100 h-100 confirmationContainer start-0 top-0 rounded-3 d-flex p-2"},_e={class:"m-auto"},Ne={class:"d-flex gap-2 align-items-center justify-content-center"},Se=["disabled"],$e=["disabled"],Be={key:0,class:"position-absolute w-100 h-100 confirmationContainer start-0 top-0 rounded-3 d-flex p-2"},Pe={class:"m-auto"},Re={class:"d-flex gap-2 align-items-center justify-content-center"},De=["disabled"],We=["disabled"],Le={class:"d-flex gap-3"},Ve={class:"d-flex flex-column"},He={class:"text-muted"},Me={class:"d-flex flex-column"},ze={class:"text-muted"},Ie={class:"d-flex gap-2 align-items-center ms-auto"},Ke={class:"card rounded-3"},Te={key:0,class:"card-body"},Fe=["value"],Oe={class:"d-flex"},Ue={__name:"backup",props:["b","delay"],emits:["refresh","refreshPeersList"],setup(o,{emit:r}){Q(d=>({a60ade86:k.value}));const t=o,p=x(!1),n=x(!1),g=O(),u=r,h=z(),f=x(!1),b=()=>{f.value=!0,W("/api/deleteWireguardConfigurationBackup",{configurationName:g.params.id,backupFileName:t.b.filename},d=>{f.value=!1,d.status?(u("refresh"),h.newMessage("Server","Backup deleted","success")):h.newMessage("Server","Backup failed to delete","danger")})},y=()=>{f.value=!0,W("/api/restoreWireguardConfigurationBackup",{configurationName:g.params.id,backupFileName:t.b.filename},d=>{f.value=!1,n.value=!1,d.status?(u("refreshPeersList"),h.newMessage("Server","Backup restored with "+t.b.filename,"success")):h.newMessage("Server","Backup failed to restore","danger")})},w=()=>{M("/api/downloadWireguardConfigurationBackup",{configurationName:g.params.id,backupFileName:t.b.filename},d=>{d.status&&window.open(`/fileDownload?file=${d.data}`,"_blank")})},k=X(()=>t.delay+"s"),_=x(!1);return(d,s)=>(c(),v("div",we,[e("div",ke,[i(Y,{name:"zoomReversed"},{default:T(()=>[p.value?(c(),v("div",Ce,[e("div",_e,[e("h5",null,[i(l,{t:"Are you sure to delete this backup?"})]),e("div",Ne,[e("button",{class:"btn btn-danger rounded-3",disabled:f.value,onClick:s[0]||(s[0]=C=>b())},[i(l,{t:"Yes"})],8,Se),e("button",{onClick:s[1]||(s[1]=C=>p.value=!1),disabled:f.value,class:"btn bg-secondary-subtle text-secondary-emphasis border-secondary-subtle rounded-3"},[i(l,{t:"No"})],8,$e)])])])):N("",!0)]),_:1}),i(Y,{name:"zoomReversed"},{default:T(()=>[n.value?(c(),v("div",Be,[e("div",Pe,[e("h5",null,[i(l,{t:"Are you sure to restore this backup?"})]),e("div",Re,[e("button",{disabled:f.value,onClick:s[2]||(s[2]=C=>y()),class:"btn btn-success rounded-3"},[i(l,{t:"Yes"})],8,De),e("button",{onClick:s[3]||(s[3]=C=>n.value=!1),disabled:f.value,class:"btn bg-secondary-subtle text-secondary-emphasis border-secondary-subtle rounded-3"},[i(l,{t:"No"})],8,We)])])])):N("",!0)]),_:1}),e("div",Le,[e("div",Ve,[e("small",He,[i(l,{t:"Backup"})]),e("samp",null,D(o.b.filename),1)]),e("div",Me,[e("small",ze,[i(l,{t:"Backup Date"})]),V(" "+D(K(le)(o.b.backupDate,"YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss")),1)]),e("div",Ie,[e("button",{onClick:s[4]||(s[4]=C=>w()),class:"btn bg-primary-subtle text-primary-emphasis border-primary-subtle rounded-3 btn-sm"},s[8]||(s[8]=[e("i",{class:"bi bi-download"},null,-1)])),e("button",{onClick:s[5]||(s[5]=C=>n.value=!0),class:"btn bg-warning-subtle text-warning-emphasis border-warning-subtle rounded-3 btn-sm"},s[9]||(s[9]=[e("i",{class:"bi bi-clock-history"},null,-1)])),e("button",{onClick:s[6]||(s[6]=C=>p.value=!0),class:"btn bg-danger-subtle text-danger-emphasis border-danger-subtle rounded-3 btn-sm"},s[10]||(s[10]=[e("i",{class:"bi bi-trash-fill"},null,-1)]))])]),s[14]||(s[14]=e("hr",null,null,-1)),e("div",Ke,[e("a",{role:"button",class:$(["card-header d-flex text-decoration-none align-items-center",{"border-bottom-0":!_.value}]),style:{cursor:"pointer"},onClick:s[7]||(s[7]=C=>_.value=!_.value)},[e("small",null,[s[11]||(s[11]=V(".conf ")),i(l,{t:"File"})]),s[12]||(s[12]=e("i",{class:"bi bi-chevron-down ms-auto"},null,-1))],2),_.value?(c(),v("div",Te,[e("textarea",{class:"form-control rounded-3",value:o.b.content,disabled:"",style:{height:"300px","font-family":"var(--bs-font-monospace),sans-serif !important"}},null,8,Fe)])):N("",!0)]),s[15]||(s[15]=e("hr",null,null,-1)),e("div",Oe,[e("span",null,[s[13]||(s[13]=e("i",{class:"bi bi-database me-1"},null,-1)),i(l,{t:"Database File"})]),e("i",{class:$(["bi ms-auto",[o.b.database?"text-success bi-check-circle-fill":"text-danger bi-x-circle-fill"]])},null,2)])])]))}},Ae=I(Ue,[["__scopeId","data-v-93ce03f2"]]),je={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll",ref:"editConfigurationContainer"},Je={class:"d-flex h-100 w-100"},Ye={class:"modal-dialog-centered dashboardModal w-100 h-100 overflow-x-scroll flex-column gap-3 mx-3"},Ee={class:"my-5 d-flex gap-3 flex-column position-relative"},Ge={class:"title"},qe={class:"d-flex mb-3"},Ze={class:"mb-0"},Qe={class:"position-relative d-flex flex-column gap-3"},Xe={class:"text-center title",key:"spinner"},et={class:"card my-0 rounded-3",key:"noBackups"},tt={class:"card-body text-center text-muted"},st={__name:"configurationBackupRestore",emits:["close","refreshPeersList"],setup(o,{emit:r}){const t=O(),p=x([]),n=x(!0),g=r;J(()=>{u()});const u=()=>{n.value=!0,M("/api/getWireguardConfigurationBackup",{configurationName:t.params.id},f=>{p.value=f.data,n.value=!1})},h=()=>{M("/api/createWireguardConfigurationBackup",{configurationName:t.params.id},f=>{p.value=f.data,n.value=!1})};return(f,b)=>(c(),v("div",je,[e("div",Je,[e("div",Ye,[e("div",Ee,[e("div",Ge,[e("div",qe,[e("h4",Ze,[i(l,{t:"Backup & Restore"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:b[0]||(b[0]=y=>f.$emit("close"))})]),e("button",{onClick:b[1]||(b[1]=y=>h()),class:"btn bg-primary-subtle text-primary-emphasis border-primary-subtle rounded-3 w-100"},[b[4]||(b[4]=e("i",{class:"bi bi-plus-circle-fill me-2"},null,-1)),i(l,{t:"Create Backup"})])]),e("div",Qe,[i(G,{name:"list1"},{default:T(()=>[n.value&&p.value.length===0?(c(),v("div",Xe,b[5]||(b[5]=[e("div",{class:"spinner-border"},null,-1)]))):!n.value&&p.value.length===0?(c(),v("div",et,[e("div",tt,[b[6]||(b[6]=e("i",{class:"bi bi-x-circle-fill me-2"},null,-1)),i(l,{t:"No backup yet, click the button above to create backup."})])])):N("",!0),(c(!0),v(H,null,F(p.value,y=>(c(),S(Ae,{onRefresh:b[2]||(b[2]=w=>u()),onRefreshPeersList:b[3]||(b[3]=w=>g("refreshPeersList")),b:y,key:y.filename},null,8,["b"]))),128))]),_:1})])])])])],512))}},nt=I(st,[["__scopeId","data-v-1f718118"]]),at={class:"card rounded-3 flex-grow-1 bg-danger-subtle border-danger-subtle border shadow"},it={class:"card-body"},lt={class:"d-flex align-items-center gap-3 inputGroup"},ot=["value"],rt={class:"mb-0"},dt={class:"d-flex mt-3"},ut=["disabled"],ct={__name:"updateConfigurationName",props:{configurationName:String},emits:["close"],setup(o,{emit:r}){const t=o,p=r,n=j({data:"",valid:!1}),g=q();J(()=>{Z(()=>n.data,y=>{n.valid=/^[a-zA-Z0-9_=+.-]{1,15}$/.test(y)&&y.length>0&&!g.Configurations.find(w=>w.Name===y)})});const u=z(),h=x(!1),f=E(),b=async()=>{n.data&&(h.value=!0,clearInterval(u.Peers.RefreshInterval),await W("/api/renameWireguardConfiguration",{Name:t.configurationName,NewConfigurationName:n.data},async y=>{y.status?(await g.getConfigurations(),u.newMessage("Server","Configuration renamed","success"),f.push(`/configuration/${n.data}/peers`)):(u.newMessage("Server",y.message,"danger"),h.value=!1)}))};return(y,w)=>(c(),v("div",at,[e("div",it,[e("p",null,[i(l,{t:"To update this configuration's name, WGDashboard will execute the following operations:"})]),e("ol",null,[e("li",null,[i(l,{t:"Duplicate current configuration's database table and .conf file with the new name"})]),e("li",null,[i(l,{t:"Delete current configuration's database table and .conf file"})])]),e("div",lt,[e("input",{class:"form-control form-control-sm rounded-3",value:o.configurationName,disabled:""},null,8,ot),w[3]||(w[3]=e("h3",{class:"mb-0"},[e("i",{class:"bi bi-arrow-right"})],-1)),B(e("input",{class:$(["form-control form-control-sm rounded-3",[n.data?n.valid?"is-valid":"is-invalid":""]]),id:"newConfigurationName","onUpdate:modelValue":w[0]||(w[0]=k=>n.data=k)},null,2),[[R,n.data]])]),e("div",{class:$(["invalid-feedback",{"d-block":!n.valid&&n.data}])},[i(l,{t:"Configuration name is invalid. Possible reasons:"}),e("ul",rt,[e("li",null,[i(l,{t:"Configuration name already exist."})]),e("li",null,[i(l,{t:"Configuration name can only contain 15 lower/uppercase alphabet, numbers, underscore, equal sign, plus sign, period and hyphen."})])])],2),e("div",dt,[e("button",{onClick:w[1]||(w[1]=k=>p("close")),class:"btn btn-sm bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3"},[i(l,{t:"Cancel"})]),e("button",{onClick:w[2]||(w[2]=k=>b()),disabled:!n.data||h.value,class:"btn btn-sm btn-danger rounded-3 ms-auto"},[i(l,{t:"Save"})],8,ut)])])]))}},ft=I(ct,[["__scopeId","data-v-4be4f48a"]]),gt={name:"Dropdown",props:{width:{type:String,default:"80px"},height:{type:String,default:"auto"},title:{type:String,default:""},disabled:{type:Boolean,default:!1},defaultDisplay:{type:Boolean,default:!1}}},mt={class:"title"};function bt(o,r,t,p,n,g){return c(),v("div",{class:$(["dropdown",{disabled:t.disabled}]),onClick:r[0]||(r[0]=(...u)=>o.toggleDropdown&&o.toggleDropdown(...u)),onFocusout:r[1]||(r[1]=(...u)=>o.hideDropdown&&o.hideDropdown(...u)),tabindex:"0"},[e("div",mt,[e("div",null,D(t.title),1)])],34)}const vt=I(gt,[["render",bt]]),pt={components:{Dropdown:vt},name:"CodeEditor",props:{lineNums:{type:Boolean,default:!1},modelValue:{type:String},value:{type:String},theme:{type:String,default:"github-dark"},tabSpaces:{type:Number,default:2},wrap:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},header:{type:Boolean,default:!0},width:{type:String,default:"540px"},height:{type:String,default:"auto"},maxWidth:{type:String},minWidth:{type:String},maxHeight:{type:String},minHeight:{type:String},borderRadius:{type:String,default:"12px"},languages:{type:Array,default:function(){return[["javascript","JS"]]}},langListWidth:{type:String,default:"110px"},langListHeight:{type:String,default:"auto"},langListDisplay:{type:Boolean,default:!1},displayLanguage:{type:Boolean,default:!0},zIndex:{type:String,default:"0"},fontSize:{type:String,default:"17px"},padding:{type:String,default:"20px"}},directives:{highlight:{mounted(o,r){o.textContent=r.value},updated(o,r){o.scrolling?o.scrolling=!1:o.textContent=r.value}}},data(){return{scrollBarWidth:0,scrollBarHeight:0,top:0,left:0,languageClass:"hljs language-"+this.languages[0][0],languageTitle:this.languages[0][1]?this.languages[0][1]:this.languages[0][0],content:this.value,cursorPosition:0,insertTab:!1,lineNum:0,lineNumsWidth:0,scrolling:!1,textareaHeight:0,showLineNums:this.wrap?!1:this.lineNums}},computed:{tabWidth(){let o="";for(let r=0;r<this.tabSpaces;r++)o+=" ";return o},contentValue(){return this.modelValue==null?this.content+`
`:this.modelValue+`
`},scroll(){return this.height!="auto"}},methods:{updateValue(o){this.modelValue==null?this.content=o.target.value:this.$emit("update:modelValue",o.target.value)},changeLang(o){this.languageTitle=o[1]?o[1]:o[0],this.languageClass="language-"+o[0],this.$emit("lang",o[0])},tab(){if(document.execCommand("insertText"))document.execCommand("insertText",!1,this.tabWidth);else{const o=this.$refs.textarea.selectionStart;this.content=this.content.substring(0,o)+this.tabWidth+this.content.substring(o),this.cursorPosition=o+this.tabWidth.length,this.insertTab=!0}},calcScrollDistance(o){this.$refs.code.scrolling=!0,this.scrolling=!0,this.top=-o.target.scrollTop,this.left=-o.target.scrollLeft},resizer(){new ResizeObserver(t=>{this.scrollBarWidth=t[0].target.offsetWidth-t[0].target.clientWidth,this.scrollBarHeight=t[0].target.offsetHeight-t[0].target.clientHeight,this.textareaHeight=t[0].target.offsetHeight}).observe(this.$refs.textarea);const r=new ResizeObserver(t=>{this.lineNumsWidth=t[0].target.offsetWidth});this.$refs.lineNums&&r.observe(this.$refs.lineNums)},copy(){document.execCommand("copy")?(this.$refs.textarea.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()):navigator.clipboard.writeText(this.$refs.textarea.value)},getLineNum(){const o=this.$refs.textarea.value;let r=0,t=o.indexOf(`
`);for(;t!==-1;)r++,t=o.indexOf(`
`,t+1);const p=this.$refs.lineNums.firstChild.offsetHeight,n=parseInt(this.textareaHeight/p)-1;this.lineNum=this.height=="auto"||r>n?r:n}},mounted(){this.$emit("lang",this.languages[0][0]),this.$emit("content",this.content),this.$emit("textarea",this.$refs.textarea),this.resizer()},updated(){this.insertTab&&(this.$refs.textarea.setSelectionRange(this.cursorPosition,this.cursorPosition),this.insertTab=!1),this.lineNums&&(this.scrolling?this.scrolling=!1:this.getLineNum())}},ht=["theme"],yt=["readOnly","autofocus","value"];function xt(o,r,t,p,n,g){const u=ee("Dropdown"),h=te("highlight");return c(),v("div",{theme:t.theme,class:$(["code-editor",{"hide-header":!t.header,scroll:g.scroll,"read-only":t.readOnly,wrap:t.wrap}]),style:P({width:t.width,height:t.height,zIndex:t.zIndex,maxWidth:t.maxWidth,minWidth:t.minWidth,maxHeight:t.maxHeight,minHeight:t.minHeight})},[e("div",{class:"hljs",style:P({borderRadius:t.borderRadius})},[t.header?(c(),v("div",{key:0,class:$(["header",{border:n.showLineNums}]),style:P({borderRadius:t.borderRadius+" "+t.borderRadius+" 0 0"})},[t.displayLanguage?(c(),S(u,{key:0,width:t.langListWidth,title:n.languageTitle,disabled:t.languages.length<=1,defaultDisplay:t.langListDisplay},null,8,["width","title","disabled","defaultDisplay"])):N("",!0)],6)):N("",!0),e("div",{class:"code-area",style:P({borderRadius:t.header?"0 0 "+t.borderRadius+" "+t.borderRadius:t.borderRadius})},[n.showLineNums?(c(),v("div",{key:0,ref:"lineNums",class:"line-nums hljs",style:P({fontSize:t.fontSize,paddingTop:t.header?"10px":t.padding,paddingBottom:t.padding,top:n.top+"px"})},[r[3]||(r[3]=e("div",null,"1",-1)),(c(!0),v(H,null,F(n.lineNum,f=>(c(),v("div",null,D(f+1),1))),256)),r[4]||(r[4]=e("div",null," ",-1))],4)):N("",!0),e("textarea",{title:"textarea",readOnly:t.readOnly,style:P({fontSize:t.fontSize,padding:t.header?t.lineNums?"10px "+t.padding+" "+t.padding:"0 "+t.padding+" "+t.padding:t.padding,marginLeft:n.showLineNums?n.lineNumsWidth+"px":"0",width:n.showLineNums?"calc(100% - "+n.lineNumsWidth+"px)":"100%"}),ref:"textarea",autofocus:t.autofocus,spellcheck:"false",onKeydown:r[0]||(r[0]=se(ne((...f)=>g.tab&&g.tab(...f),["prevent","stop"]),["tab"])),onScroll:r[1]||(r[1]=(...f)=>g.calcScrollDistance&&g.calcScrollDistance(...f)),value:t.modelValue==null?n.content:t.modelValue,onInput:r[2]||(r[2]=(...f)=>g.updateValue&&g.updateValue(...f))},null,44,yt),e("pre",{style:P({paddingRight:n.scrollBarWidth+"px",paddingBottom:n.scrollBarHeight+"px",marginLeft:n.showLineNums?n.lineNumsWidth+"px":"0",width:n.showLineNums?"calc(100% - "+n.lineNumsWidth+"px)":"100%"})},[r[6]||(r[6]=V("        ")),B((c(),v("code",{ref:"code",class:$(n.languageClass),style:P({top:n.top+"px",left:n.left+"px",fontSize:t.fontSize,padding:t.header?t.lineNums?"10px "+t.padding+" "+t.padding:"0 "+t.padding+" "+t.padding:t.padding})},r[5]||(r[5]=[V(`
        `)]),6)),[[h,g.contentValue]]),r[7]||(r[7]=V(`
      `))],4)],4)],4)],14,ht)}const wt=I(pt,[["render",xt]]),kt={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},Ct={class:"container d-flex h-100 w-100"},_t={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"1000px"}},Nt={class:"card rounded-3 shadow flex-grow-1",id:"deleteConfigurationContainer"},St={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-0"},$t={class:"mb-0"},Bt={class:"card-body px-4 d-flex flex-column gap-3"},Pt={class:"alert alert-warning rounded-3 mb-0"},Rt={key:0,class:"alert alert-danger rounded-3 mb-0"},Dt={class:"mb-2"},Wt={class:"bg-body w-100 p-2 rounded-3"},Lt={class:"d-flex gap-2"},Vt=["disabled"],Ht=["disabled"],Mt={__name:"editRawConfigurationFile",emits:["close"],async setup(o,{emit:r}){let t,p;const n=r,g=O(),u=x(""),h=x(""),f=x(!1),b=x(""),y=async()=>{await M("/api/getWireguardConfigurationRawFile",{configurationName:g.params.id},d=>{u.value=d.data.content,h.value=d.data.path})};[t,p]=ae(()=>y()),await t,p();const w=z(),k=x(!1),_=async()=>{k.value=!0,await W("/api/updateWireguardConfigurationRawFile",{configurationName:g.params.id,rawConfiguration:u.value},d=>{d.status?(f.value=!1,w.newMessage("Server","Configuration saved","success")):(f.value=!0,b.value=d.message),k.value=!1})};return(d,s)=>(c(),v("div",kt,[e("div",Ct,[e("div",_t,[e("div",Nt,[e("div",St,[e("h5",$t,[i(l,{t:"Edit Raw Configuration File"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:s[0]||(s[0]=C=>n("close"))})]),e("div",Bt,[e("div",Pt,[s[4]||(s[4]=e("i",{class:"bi-exclamation-triangle-fill me-2"},null,-1)),i(l,{t:"Please be careful when editing the raw file"})]),f.value?(c(),v("div",Rt,[e("div",Dt,[e("strong",null,[i(l,{t:"Failed to save configuration. Please see the following error message:"})])]),e("div",Wt,[e("pre",null,D(b.value),1)])])):N("",!0),i(wt,{disabled:!0,"read-only":k.value,modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=C=>u.value=C),theme:K(w).Configuration.Server.dashboard_theme==="dark"?"github-dark":"github",languages:[["ini",h.value]],width:"100%",height:"600px"},null,8,["read-only","modelValue","theme","languages"]),e("div",Lt,[e("button",{class:"btn bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3 shadow ms-auto px-3 py-2",disabled:k.value,onClick:s[2]||(s[2]=C=>y())},[s[5]||(s[5]=e("i",{class:"bi bi-arrow-clockwise me-2"},null,-1)),i(l,{t:"Reset"})],8,Vt),e("button",{onClick:s[3]||(s[3]=C=>_()),disabled:k.value,class:"btn bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 px-3 py-2 shadow"},[s[6]||(s[6]=e("i",{class:"bi bi-save-fill me-2"},null,-1)),k.value?(c(),S(l,{key:1,t:"Saving..."})):(c(),S(l,{key:0,t:"Save"}))],8,Ht)])])])])])]))}},zt={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll",ref:"editConfigurationContainer"},It={class:"container d-flex h-100 w-100"},Kt={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"700px"}},Tt={class:"card rounded-3 shadow flex-grow-1"},Ft={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4"},Ot={class:"mb-0"},Ut={class:"card-body px-4 pb-4"},At={class:"d-flex gap-2 flex-column"},jt={key:0,class:"d-flex align-items-center gap-3"},Jt={class:"text-muted"},Yt={class:"d-flex align-items-center gap-3"},Et={class:"text-muted",style:{"word-break":"keep-all"}},Gt={class:"ms-auto",style:{"word-break":"break-all"}},qt={class:"d-flex"},Zt={for:"configuration_private_key",class:"form-label"},Qt={class:"text-muted d-block"},Xt={class:"form-check form-switch ms-auto"},es=["disabled"],ts={for:"configuration_ipaddress_cidr",class:"form-label"},ss={class:"text-muted"},ns=["disabled"],as={for:"configuration_listen_port",class:"form-label"},is={class:"text-muted"},ls=["disabled"],os=["for"],rs={class:"text-muted"},ds=["disabled","onUpdate:modelValue","id"],us=["for"],cs={class:"text-muted"},fs=["disabled","onUpdate:modelValue","id"],gs={class:"d-flex align-items-center gap-2 mt-4"},ms=["disabled"],bs=["disabled"],vs={class:"d-flex gap-2 flex-column"},xs={__name:"editConfiguration",props:{configurationInfo:Object},emits:["changed","close","refresh"],setup(o,{emit:r}){const t=o,p=q(),n=z(),g=x(!1),u=j(JSON.parse(JSON.stringify(t.configurationInfo))),h=x(!1),f=x(!1),b=j({PrivateKey:!0,IPAddress:!0,ListenPort:!0}),y=()=>{p.checkWGKeyLength(u.PrivateKey)?(b.PrivateKey=!0,u.PublicKey=window.wireguard.generatePublicKey(u.PrivateKey)):b.PrivateKey=!1},w=()=>{f.value=!1,Object.assign(u,JSON.parse(JSON.stringify(t.configurationInfo)))},k=r,_=()=>{g.value=!0,W("/api/updateWireguardConfiguration",u,L=>{g.value=!1,L.status?(n.newMessage("Server","Configuration saved","success"),f.value=!1,k("dataChanged",L.data)):n.newMessage("Server",L.message,"danger")})},d=x(!1);Z(u,()=>{f.value=JSON.stringify(u)!==JSON.stringify(t.configurationInfo)},{deep:!0});const s=x(!1),C=x(!1),U=x(!1);return(L,a)=>(c(),v("div",zt,[i(G,{name:"zoom"},{default:T(()=>[s.value?(c(),S(Mt,{key:0,name:"EditRawConfigurationFile",onClose:a[0]||(a[0]=m=>s.value=!1)})):N("",!0),U.value?(c(),S(xe,{key:"DeleteConfiguration",onBackup:a[1]||(a[1]=m=>C.value=!0),onClose:a[2]||(a[2]=m=>U.value=!1)})):N("",!0),C.value?(c(),S(nt,{key:2,onClose:a[3]||(a[3]=m=>C.value=!1),onRefreshPeersList:a[4]||(a[4]=m=>k("refresh"))})):N("",!0)]),_:1}),e("div",It,[e("div",Kt,[e("div",Tt,[e("div",Ft,[e("h4",Ot,[i(l,{t:"Configuration Settings"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:a[5]||(a[5]=m=>L.$emit("close"))})]),e("div",Ut,[e("div",At,[d.value?N("",!0):(c(),v("div",jt,[e("small",Jt,[i(l,{t:"Name"})]),e("small",null,D(u.Name),1),e("button",{onClick:a[6]||(a[6]=m=>d.value=!0),class:"btn btn-sm bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 ms-auto"}," Update Name ")])),d.value?(c(),S(ft,{key:1,onClose:a[7]||(a[7]=m=>d.value=!1),"configuration-name":u.Name},null,8,["configuration-name"])):(c(),v(H,{key:2},[a[24]||(a[24]=e("hr",null,null,-1)),e("div",Yt,[e("small",Et,[i(l,{t:"Public Key"})]),e("small",Gt,D(u.PublicKey),1)]),a[25]||(a[25]=e("hr",null,null,-1)),e("div",null,[e("div",qt,[e("label",Zt,[e("small",Qt,[i(l,{t:"Private Key"})])]),e("div",Xt,[B(e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"editPrivateKeySwitch","onUpdate:modelValue":a[8]||(a[8]=m=>h.value=m)},null,512),[[ie,h.value]]),a[18]||(a[18]=e("label",{class:"form-check-label",for:"editPrivateKeySwitch"},[e("small",null,"Edit")],-1))])]),B(e("input",{type:"text",class:$(["form-control form-control-sm rounded-3",{"is-invalid":!b.PrivateKey}]),disabled:g.value||!h.value,onKeyup:a[9]||(a[9]=m=>y()),"onUpdate:modelValue":a[10]||(a[10]=m=>u.PrivateKey=m),id:"configuration_private_key"},null,42,es),[[R,u.PrivateKey]])]),e("div",null,[e("label",ts,[e("small",ss,[i(l,{t:"IP Address/CIDR"})])]),B(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:g.value,"onUpdate:modelValue":a[11]||(a[11]=m=>u.Address=m),id:"configuration_ipaddress_cidr"},null,8,ns),[[R,u.Address]])]),e("div",null,[e("label",as,[e("small",is,[i(l,{t:"Listen Port"})])]),B(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:g.value,"onUpdate:modelValue":a[12]||(a[12]=m=>u.ListenPort=m),id:"configuration_listen_port"},null,8,ls),[[R,u.ListenPort]])]),(c(),v(H,null,F(["PreUp","PreDown","PostUp","PostDown"],m=>e("div",null,[e("label",{for:"configuration_"+m,class:"form-label"},[e("small",rs,[i(l,{t:m},null,8,["t"])])],8,os),B(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:g.value,"onUpdate:modelValue":A=>u[m]=A,id:"configuration_"+m},null,8,ds),[[R,u[m]]])])),64)),o.configurationInfo.Protocol==="awg"?(c(),v(H,{key:0},F(["Jc","Jmin","Jmax","S1","S2","H1","H2","H3","H4"],m=>e("div",null,[e("label",{for:"configuration_"+m,class:"form-label"},[e("small",cs,[i(l,{t:m},null,8,["t"])])],8,us),B(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:g.value,"onUpdate:modelValue":A=>u[m]=A,id:"configuration_"+m},null,8,fs),[[R,u[m]]])])),64)):N("",!0),e("div",gs,[e("button",{class:"btn bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3 shadow ms-auto",onClick:a[13]||(a[13]=m=>w()),disabled:!f.value||g.value},[a[19]||(a[19]=e("i",{class:"bi bi-arrow-clockwise me-2"},null,-1)),i(l,{t:"Reset"})],8,ms),e("button",{class:"btn bg-primary-subtle border-primary-subtle text-primary-emphasis rounded-3 shadow",disabled:!f.value||g.value,onClick:a[14]||(a[14]=m=>_())},[a[20]||(a[20]=e("i",{class:"bi bi-save-fill me-2"},null,-1)),i(l,{t:"Save"})],8,bs)]),a[26]||(a[26]=e("hr",null,null,-1)),a[27]||(a[27]=e("h5",{class:"mb-3"},"Danger Zone",-1)),e("div",vs,[e("button",{onClick:a[15]||(a[15]=m=>C.value=!0),class:"btn bg-warning-subtle border-warning-subtle text-warning-emphasis rounded-3 text-start d-flex"},[a[21]||(a[21]=e("i",{class:"bi bi-copy me-auto"},null,-1)),i(l,{t:"Backup & Restore"})]),e("button",{onClick:a[16]||(a[16]=m=>s.value=!0),class:"btn bg-warning-subtle border-warning-subtle text-warning-emphasis rounded-3 d-flex"},[a[22]||(a[22]=e("i",{class:"bi bi-pen me-auto"},null,-1)),i(l,{t:"Edit Raw Configuration File"})]),e("button",{onClick:a[17]||(a[17]=m=>U.value=!0),class:"btn bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 d-flex mt-4"},[a[23]||(a[23]=e("i",{class:"bi bi-trash-fill me-auto"},null,-1)),i(l,{t:"Delete Configuration"})])])],64))])])])])])],512))}};export{xs as default};
