import{p as b}from"./index-L60y6kc9.js";import{_ as y,W as _,q as w,c as d,b as s,d as o,w as C,m as l,s as u,t as c,f as g,j as m,a as r}from"./index-BQ9jnFZu.js";import{L as P}from"./localeText-BzleuEA0.js";const x={name:"newConfiguration",components:{LocaleText:P},setup(){return{store:_()}},data(){return{newConfiguration:{ConfigurationName:"",Address:"",ListenPort:"",PrivateKey:"",PublicKey:"",PresharedKey:"",PreUp:"",PreDown:"",PostUp:"",PostDown:""},numberOfAvailableIPs:"0",error:!1,errorMessage:"",success:!1,loading:!1}},created(){this.wireguardGenerateKeypair()},methods:{wireguardGenerateKeypair(){const t=window.wireguard.generateKeypair();this.newConfiguration.PrivateKey=t.privateKey,this.newConfiguration.PublicKey=t.publicKey,this.newConfiguration.PresharedKey=t.presharedKey},async saveNewConfiguration(){this.goodToSubmit&&(this.loading=!0,await w("/api/addWireguardConfiguration",this.newConfiguration,async t=>{t.status?(this.success=!0,await this.store.getConfigurations(),this.$router.push(`/configuration/${this.newConfiguration.ConfigurationName}/peers`)):(this.error=!0,this.errorMessage=t.message,document.querySelector(`#${t.data}`).classList.remove("is-valid"),document.querySelector(`#${t.data}`).classList.add("is-invalid"),this.loading=!1)}))}},computed:{goodToSubmit(){let t=["ConfigurationName","Address","ListenPort","PrivateKey"],e=[...document.querySelectorAll("input[required]")];return t.find(a=>this.newConfiguration[a].length===0)===void 0&&e.find(a=>a.classList.contains("is-invalid"))===void 0}},watch:{"newConfiguration.Address"(t){let e=document.querySelector("#Address");e.classList.remove("is-invalid","is-valid");try{if(t.trim().split("/").filter(f=>f.length>0).length!==2)throw Error();let a=b(t),p=a.end-a.start;this.numberOfAvailableIPs=p.toLocaleString(),e.classList.add("is-valid")}catch{this.numberOfAvailableIPs="0",e.classList.add("is-invalid")}},"newConfiguration.ListenPort"(t){let e=document.querySelector("#ListenPort");e.classList.remove("is-invalid","is-valid"),t<0||t>65353||!Number.isInteger(t)?e.classList.add("is-invalid"):e.classList.add("is-valid")},"newConfiguration.ConfigurationName"(t){let e=document.querySelector("#ConfigurationName");e.classList.remove("is-invalid","is-valid"),!/^[a-zA-Z0-9_=+.-]{1,15}$/.test(t)||t.length===0||this.store.Configurations.find(a=>a.Name===t)?e.classList.add("is-invalid"):e.classList.add("is-valid")},"newConfiguration.PrivateKey"(t){let e=document.querySelector("#PrivateKey");e.classList.remove("is-invalid","is-valid");try{wireguard.generatePublicKey(t),e.classList.add("is-valid")}catch{e.classList.add("is-invalid")}}}},L={class:"mt-md-5 mt-3 text-body"},K={class:"container mb-4"},k={class:"mb-4 d-flex align-items-center gap-4"},A={class:"mb-0"},U={class:"card rounded-3 shadow"},S={class:"card-header"},N={class:"card-body"},q=["disabled"],D={class:"invalid-feedback"},I={key:0},O={key:1},T={class:"mb-0"},$={class:"card rounded-3 shadow"},V={class:"card-header"},M={class:"card-body",style:{"font-family":"var(--bs-font-monospace)"}},R={class:"mb-2"},B={class:"text-muted fw-bold mb-1"},E={class:"input-group"},G=["disabled"],W={class:"text-muted fw-bold mb-1"},j={class:"card rounded-3 shadow"},z={class:"card-header"},Z={class:"card-body"},F=["disabled"],H={class:"invalid-feedback"},J={key:0},Q={key:1},X={class:"card rounded-3 shadow"},Y={class:"card-header d-flex align-items-center"},ss={class:"badge rounded-pill text-bg-success ms-auto"},es={class:"card-body"},ts=["disabled"],is={class:"invalid-feedback"},os={key:0},ns={key:1},as={class:"accordion",id:"newConfigurationOptionalAccordion"},ds={class:"accordion-item"},rs={class:"accordion-header"},ls={class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#newConfigurationOptionalAccordionCollapse"},us={id:"newConfigurationOptionalAccordionCollapse",class:"accordion-collapse collapse","data-bs-parent":"#newConfigurationOptionalAccordion"},cs={class:"accordion-body d-flex flex-column gap-3"},fs={class:"card rounded-3"},ps={class:"card-body"},gs={class:"card rounded-3"},ms={class:"card-body"},hs={class:"card rounded-3"},vs={class:"card-body"},bs={class:"card rounded-3"},ys={class:"card-body"},_s=["disabled"],ws={key:0,class:"d-flex w-100"},Cs={key:1,class:"d-flex w-100"},Ps={key:2,class:"d-flex w-100 align-items-center"};function xs(t,e,a,p,f,h){const v=m("RouterLink"),n=m("LocaleText");return r(),d("div",L,[s("div",K,[s("div",k,[o(v,{to:"/",class:"btn btn-dark btn-brand p-2 shadow",style:{"border-radius":"100%"}},{default:C(()=>e[11]||(e[11]=[s("h2",{class:"mb-0",style:{"line-height":"0"}},[s("i",{class:"bi bi-arrow-left-circle"})],-1)])),_:1}),s("h2",A,[o(n,{t:"New Configuration"})])]),s("form",{class:"text-body d-flex flex-column gap-3",onSubmit:e[10]||(e[10]=i=>{i.preventDefault(),this.saveNewConfiguration()})},[s("div",U,[s("div",S,[o(n,{t:"Configuration Name"})]),s("div",N,[l(s("input",{type:"text",class:"form-control",placeholder:"ex. wg1",id:"ConfigurationName","onUpdate:modelValue":e[0]||(e[0]=i=>this.newConfiguration.ConfigurationName=i),disabled:this.loading,required:""},null,8,q),[[u,this.newConfiguration.ConfigurationName]]),s("div",D,[this.error?(r(),d("div",I,c(this.errorMessage),1)):(r(),d("div",O,[o(n,{t:"Configuration name is invalid. Possible reasons:"}),s("ul",T,[s("li",null,[o(n,{t:"Configuration name already exist."})]),s("li",null,[o(n,{t:"Configuration name can only contain 15 lower/uppercase alphabet, numbers, underscore, equal sign, plus sign, period and hyphen."})])])]))])])]),s("div",$,[s("div",V,[o(n,{t:"Private Key"}),e[12]||(e[12]=g(" & ")),o(n,{t:"Public Key"})]),s("div",M,[s("div",R,[s("label",B,[s("small",null,[o(n,{t:"Private Key"})])]),s("div",E,[l(s("input",{type:"text",class:"form-control",id:"PrivateKey",required:"",disabled:this.loading,"onUpdate:modelValue":e[1]||(e[1]=i=>this.newConfiguration.PrivateKey=i)},null,8,G),[[u,this.newConfiguration.PrivateKey]]),s("button",{class:"btn btn-outline-primary",type:"button",title:"Regenerate Private Key",onClick:e[2]||(e[2]=i=>h.wireguardGenerateKeypair())},e[13]||(e[13]=[s("i",{class:"bi bi-arrow-repeat"},null,-1)]))])]),s("div",null,[s("label",W,[s("small",null,[o(n,{t:"Public Key"})])]),l(s("input",{type:"text",class:"form-control",id:"PublicKey","onUpdate:modelValue":e[3]||(e[3]=i=>this.newConfiguration.PublicKey=i),disabled:""},null,512),[[u,this.newConfiguration.PublicKey]])])])]),s("div",j,[s("div",z,[o(n,{t:"Listen Port"})]),s("div",Z,[l(s("input",{type:"number",class:"form-control",placeholder:"0-65353",id:"ListenPort",min:"1",max:"65353","onUpdate:modelValue":e[4]||(e[4]=i=>this.newConfiguration.ListenPort=i),disabled:this.loading,required:""},null,8,F),[[u,this.newConfiguration.ListenPort]]),s("div",H,[this.error?(r(),d("div",J,c(this.errorMessage),1)):(r(),d("div",Q,[o(n,{t:"Invalid port"})]))])])]),s("div",X,[s("div",Y,[o(n,{t:"IP Address/CIDR"}),s("span",ss,c(f.numberOfAvailableIPs)+" Available IPs",1)]),s("div",es,[l(s("input",{type:"text",class:"form-control",placeholder:"Ex: 10.0.0.1/24",id:"Address","onUpdate:modelValue":e[5]||(e[5]=i=>this.newConfiguration.Address=i),disabled:this.loading,required:""},null,8,ts),[[u,this.newConfiguration.Address]]),s("div",is,[this.error?(r(),d("div",os,c(this.errorMessage),1)):(r(),d("div",ns," IP Address/CIDR is invalid "))])])]),e[22]||(e[22]=s("hr",null,null,-1)),s("div",as,[s("div",ds,[s("h2",rs,[s("button",ls,[o(n,{t:"Optional Settings"})])]),s("div",us,[s("div",cs,[s("div",fs,[e[14]||(e[14]=s("div",{class:"card-header"},"PreUp",-1)),s("div",ps,[l(s("input",{type:"text",class:"form-control",id:"preUp","onUpdate:modelValue":e[6]||(e[6]=i=>this.newConfiguration.PreUp=i)},null,512),[[u,this.newConfiguration.PreUp]])])]),s("div",gs,[e[15]||(e[15]=s("div",{class:"card-header"},"PreDown",-1)),s("div",ms,[l(s("input",{type:"text",class:"form-control",id:"preDown","onUpdate:modelValue":e[7]||(e[7]=i=>this.newConfiguration.PreDown=i)},null,512),[[u,this.newConfiguration.PreDown]])])]),s("div",hs,[e[16]||(e[16]=s("div",{class:"card-header"},"PostUp",-1)),s("div",vs,[l(s("input",{type:"text",class:"form-control",id:"postUp","onUpdate:modelValue":e[8]||(e[8]=i=>this.newConfiguration.PostUp=i)},null,512),[[u,this.newConfiguration.PostUp]])])]),s("div",bs,[e[17]||(e[17]=s("div",{class:"card-header"},"PostDown",-1)),s("div",ys,[l(s("input",{type:"text",class:"form-control",id:"postDown","onUpdate:modelValue":e[9]||(e[9]=i=>this.newConfiguration.PostDown=i)},null,512),[[u,this.newConfiguration.PostDown]])])])])])])]),s("button",{class:"btn btn-dark btn-brand rounded-3 px-3 py-2 shadow ms-auto",disabled:!this.goodToSubmit||this.loading||this.success},[this.success?(r(),d("span",ws,[o(n,{t:"Success"}),e[18]||(e[18]=g("! ")),e[19]||(e[19]=s("i",{class:"bi bi-check-circle-fill ms-2"},null,-1))])):this.loading?(r(),d("span",Ps,[o(n,{t:"Saving..."}),e[21]||(e[21]=s("span",{class:"ms-2 spinner-border spinner-border-sm",role:"status"},null,-1))])):(r(),d("span",Cs,[e[20]||(e[20]=s("i",{class:"bi bi-save-fill me-2"},null,-1)),o(n,{t:"Save"})]))],8,_s)],32)])])}const As=y(x,[["render",xs]]);export{As as default};