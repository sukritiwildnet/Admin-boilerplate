(this["webpackJsonpreact-material-dashboard"]=this["webpackJsonpreact-material-dashboard"]||[]).push([[0],{295:function(e,a,t){e.exports=t(406)},396:function(e,a,t){},406:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),o=t.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(253),c=t(254),s=t(287),m=t(286),d=t(14),u=t(21),p=t(28),g=t(50),h=t(469),f=t(51),b=t.n(f);var x={draw:function(){var e,a,t,n,r,i,o,l,c=this._chart.ctx,s=this._view,m=s.borderWidth,d=this._chart.config.options.cornerRadius;if(d<0&&(d=0),"undefined"===typeof d&&(d=0),s.horizontal?(e=s.base,a=s.x,t=s.y-s.height/2,n=s.y+s.height/2,r=a>e?1:-1,i=1,o=s.borderSkipped||"left"):(e=s.x-s.width/2,a=s.x+s.width/2,t=s.y,r=1,i=(n=s.base)>t?1:-1,o=s.borderSkipped||"bottom"),m){var u=Math.min(Math.abs(e-a),Math.abs(t-n)),p=(m=m>u?u:m)/2,g=e+("left"!==o?p*r:0),h=a+("right"!==o?-p*r:0),f=t+("top"!==o?p*i:0),b=n+("bottom"!==o?-p*i:0);g!==h&&(t=f,n=b),f!==b&&(e=g,a=h)}c.beginPath(),c.fillStyle=s.backgroundColor,c.strokeStyle=s.borderColor,c.lineWidth=m;var x=[[e,n],[e,t],[a,t],[a,n]],E=["bottom","left","top","right"].indexOf(o,0);function y(e){return x[(E+e)%4]}-1===E&&(E=0);var v=y(0);c.moveTo(v[0],v[1]);for(var j=1;j<4;j+=1){v=y(j);var C=j+1;4===C&&(C=0);var O=x[2][0]-x[1][0],w=x[0][1]-x[1][1],N=x[1][0],k=x[1][1];if((l=d)>Math.abs(w)/2&&(l=Math.floor(Math.abs(w)/2)),l>Math.abs(O)/2&&(l=Math.floor(Math.abs(O)/2)),w<0){var T=N,S=N+O,B=k+w,I=k+w,L=N,R=N+O,z=k,A=k;c.moveTo(L+l,z),c.lineTo(R-l,A),c.quadraticCurveTo(R,A,R,A-l),c.lineTo(S,I+l),c.quadraticCurveTo(S,I,S-l,I),c.lineTo(T+l,B),c.quadraticCurveTo(T,B,T,B+l),c.lineTo(L,z-l),c.quadraticCurveTo(L,z,L+l,z)}else if(O<0){var W=N+O,D=N,q=k,F=k,M=N+O,H=N,G=k+w,P=k+w;c.moveTo(M+l,G),c.lineTo(H-l,P),c.quadraticCurveTo(H,P,H,P-l),c.lineTo(D,F+l),c.quadraticCurveTo(D,F,D-l,F),c.lineTo(W+l,q),c.quadraticCurveTo(W,q,W,q+l),c.lineTo(M,G-l),c.quadraticCurveTo(M,G,M+l,G)}else c.moveTo(N+l,k),c.lineTo(N+O-l,k),c.quadraticCurveTo(N+O,k,N+O,k+l),c.lineTo(N+O,k+w-l),c.quadraticCurveTo(N+O,k+w,N+O-l,k+w),c.lineTo(N+l,k+w),c.quadraticCurveTo(N,k+w,N,k+w-l),c.lineTo(N,k+l),c.quadraticCurveTo(N,k,N+l,k)}c.fill(),m&&c.stroke()}},E=t(285),y=t(6),v="#FFFFFF",j={black:"#000000",white:v,primary:{contrastText:v,dark:y.a.indigo[900],main:y.a.indigo[500],light:y.a.indigo[100]},secondary:{contrastText:v,dark:y.a.blue[900],main:y.a.blue.A400,light:y.a.blue.A400},success:{contrastText:v,dark:y.a.green[900],main:y.a.green[600],light:y.a.green[400]},info:{contrastText:v,dark:y.a.blue[900],main:y.a.blue[600],light:y.a.blue[400]},warning:{contrastText:v,dark:y.a.orange[900],main:y.a.orange[600],light:y.a.orange[400]},error:{contrastText:v,dark:y.a.red[900],main:y.a.red[600],light:y.a.red[400]},text:{primary:y.a.blueGrey[900],secondary:y.a.blueGrey[600],link:y.a.blue[600]},background:{default:"#F4F6F8",paper:v},icon:y.a.blueGrey[600],divider:y.a.grey[200]},C={h1:{color:j.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:j.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:j.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:j.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:j.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:j.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:j.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:j.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:j.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:j.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:j.text.primary,fontSize:"14px"},caption:{color:j.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:j.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},O={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:j.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(d.a)(Object(d.a)({},C.body1),{},{borderBottom:"1px solid ".concat(j.divider)})},MuiTableHead:{root:{backgroundColor:y.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}},w=Object(E.a)({palette:j,typography:C,overrides:O,zIndex:{appBar:1200,drawer:1100}}),N=(t(395),t(396),{checked:function(e,a){if(!0!==e)return a.message||"must be checked"}}),k=t(8),T=t(2),S=t(470),B=(t(111),t(289),t(258),Object(S.a)((function(e){return{root:{borderRadius:"4px",alignItems:"center",padding:e.spacing(1),display:"flex",flexBasis:420},icon:{marginRight:e.spacing(1),color:e.palette.text.secondary},input:{flexGrow:1,fontSize:"14px",lineHeight:"16px",letterSpacing:"-0.05px"}}})),t(16)),I=Object(S.a)((function(e){return{root:{display:"inline-block",borderRadius:"50%",flexGrow:0,flexShrink:0},sm:{height:e.spacing(1),width:e.spacing(1)},md:{height:e.spacing(2),width:e.spacing(2)},lg:{height:e.spacing(3),width:e.spacing(3)},neutral:{backgroundColor:e.palette.neutral},primary:{backgroundColor:e.palette.primary.main},info:{backgroundColor:e.palette.info.main},warning:{backgroundColor:e.palette.warning.main},danger:{backgroundColor:e.palette.error.main},success:{backgroundColor:e.palette.success.main}}})),L=function(e){var a,t=e.className,n=e.size,i=e.color,o=Object(k.a)(e,["className","size","color"]),l=I();return r.a.createElement("span",Object.assign({},o,{className:Object(T.a)((a={},Object(B.a)(a,l.root,!0),Object(B.a)(a,l[n],n),Object(B.a)(a,l[i],i),a),t)}))};L.defaultProps={size:"md",color:"default"};var R=L,z=t(20),A=t(110),W=(t(415),Object(S.a)((function(e){return{root:{padding:e.spacing(4)}}})),t(443),t(445)),D=(t(259),t(260),t(261),t(262),t(26)),q=t(474),F=t(40),M=(Object(S.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"fit-content"},avatar:{width:60,height:60},name:{marginTop:e.spacing(1)}}})),t(409)),H=t(410),G=t(442),P=(Object(S.a)((function(e){return{root:{},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{color:y.a.blueGrey[800],padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightMedium},icon:{color:e.palette.icon,width:24,height:24,display:"flex",alignItems:"center",marginRight:e.spacing(1)},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium,"& $icon":{color:e.palette.primary.main}}}})),Object(n.forwardRef)((function(e,a){return r.a.createElement("div",{ref:a,style:{flexGrow:1}},r.a.createElement(D.b,e))})),Object(S.a)((function(e){return{root:{backgroundColor:y.a.grey[50]},media:{paddingTop:e.spacing(2),height:80,textAlign:"center","& > img":{height:"100%",width:"auto"}},content:{padding:e.spacing(1,2)},actions:{padding:e.spacing(1,2),display:"flex",justifyContent:"center"}}})),Object(S.a)((function(e){return{drawer:Object(B.a)({width:240},e.breakpoints.up("lg"),{marginTop:64,height:"calc(100% - 64px)"}),root:{backgroundColor:e.palette.white,display:"flex",flexDirection:"column",height:"100%",padding:e.spacing(2)},divider:{margin:e.spacing(2,0)},nav:{marginBottom:e.spacing(2)}}})),t(446),t(447),t(473),t(449)),U=(t(450),t(265),t(263),t(264),Object(S.a)((function(e){return{root:{boxShadow:"none"},flexGrow:{flexGrow:1},signOutButton:{marginLeft:e.spacing(1)}}})),Object(S.a)((function(e){return{root:Object(B.a)({paddingTop:56,height:"100%"},e.breakpoints.up("sm"),{paddingTop:64}),shiftContent:{paddingLeft:240},content:{height:"100%"}}})),Object(S.a)((function(){return{root:{boxShadow:"none"}}})),Object(S.a)((function(){return{root:{paddingTop:64,height:"100%"},content:{height:"100%"}}})),t(454)),V=t(451),_=t(452),Y=t(453),$=t(455),Z=t(456),J=(Object(S.a)((function(){return{root:{}}})),t(30)),K=t.n(J),Q=t(457),X=(Object(S.a)((function(e){return{root:{},details:{display:"flex"},avatar:{marginLeft:"auto",height:110,width:100,flexShrink:0,flexGrow:0},progress:{marginTop:e.spacing(2)},uploadButton:{marginRight:e.spacing(2)}}})),Object(S.a)((function(e){return{root:{padding:e.spacing(4)}}})),t(269)),ee=t.n(X),ae=t(268),te=t.n(ae),ne=Object(S.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.error.main,height:56,width:56},icon:{height:32,width:32},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIcon:{color:e.palette.error.dark},differenceValue:{color:e.palette.error.dark,marginRight:e.spacing(1)}}})),re=function(e){var a=e.className,t=Object(k.a)(e,["className"]),n=ne();return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(n.root,a)}),r.a.createElement(Y.a,null,r.a.createElement(U.a,{container:!0,justify:"space-between"},r.a.createElement(U.a,{item:!0},r.a.createElement(F.a,{className:n.title,color:"textSecondary",gutterBottom:!0,variant:"body2"},"BUDGET"),r.a.createElement(F.a,{variant:"h3"},"$24,000")),r.a.createElement(U.a,{item:!0},r.a.createElement(q.a,{className:n.avatar},r.a.createElement(te.a,{className:n.icon})))),r.a.createElement("div",{className:n.difference},r.a.createElement(ee.a,{className:n.differenceIcon}),r.a.createElement(F.a,{className:n.differenceValue,variant:"body2"},"12%"),r.a.createElement(F.a,{className:n.caption,variant:"caption"},"Since last month"))))},ie=t(107),oe=t.n(ie),le=t(458),ce=t(459),se=t(460),me=t(461),de=t(462),ue=t(475),pe=t(463),ge=t(70),he=t.n(ge),fe=t(13),be=t.n(fe),xe=[{id:be()(),ref:"CDD1049",amount:30.5,customer:{name:"Ekaterina Tankova"},createdAt:15550164e5,status:"pending"},{id:be()(),ref:"CDD1048",amount:25.1,customer:{name:"Cao Yu"},createdAt:15550164e5,status:"delivered"},{id:be()(),ref:"CDD1047",amount:10.99,customer:{name:"Alexa Richardson"},createdAt:155493e7,status:"refunded"},{id:be()(),ref:"CDD1046",amount:96.43,customer:{name:"Anje Keizer"},createdAt:15547572e5,status:"pending"},{id:be()(),ref:"CDD1045",amount:32.54,customer:{name:"Clarke Gillebert"},createdAt:15546708e5,status:"delivered"},{id:be()(),ref:"CDD1044",amount:16.76,customer:{name:"Adam Denisov"},createdAt:15546708e5,status:"delivered"}],Ee=Object(S.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:800},statusContainer:{display:"flex",alignItems:"center"},status:{marginRight:e.spacing(1)},actions:{justifyContent:"flex-end"}}})),ye={delivered:"success",pending:"info",refunded:"danger"},ve=function(e){var a=e.className,t=Object(k.a)(e,["className"]),i=Ee(),o=Object(n.useState)(xe),l=Object(z.a)(o,1)[0];return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(i.root,a)}),r.a.createElement(_.a,{action:r.a.createElement(G.a,{color:"primary",size:"small",variant:"outlined"},"New entry"),title:"Latest Orders"}),r.a.createElement(W.a,null),r.a.createElement(Y.a,{className:i.content},r.a.createElement(oe.a,null,r.a.createElement("div",{className:i.inner},r.a.createElement(le.a,null,r.a.createElement(ce.a,null,r.a.createElement(se.a,null,r.a.createElement(me.a,null,"Order Ref"),r.a.createElement(me.a,null,"Customer"),r.a.createElement(me.a,{sortDirection:"desc"},r.a.createElement(de.a,{enterDelay:300,title:"Sort"},r.a.createElement(ue.a,{active:!0,direction:"desc"},"Date"))),r.a.createElement(me.a,null,"Status"))),r.a.createElement(pe.a,null,l.map((function(e){return r.a.createElement(se.a,{hover:!0,key:e.id},r.a.createElement(me.a,null,e.ref),r.a.createElement(me.a,null,e.customer.name),r.a.createElement(me.a,null,K()(e.createdAt).format("DD/MM/YYYY")),r.a.createElement(me.a,null,r.a.createElement("div",{className:i.statusContainer},r.a.createElement(R,{className:i.status,color:ye[e.status],size:"sm"}),e.status)))}))))))),r.a.createElement(W.a,null),r.a.createElement(Z.a,{className:i.actions},r.a.createElement(G.a,{color:"primary",size:"small",variant:"text"},"View all ",r.a.createElement(he.a,null))))},je=t(464),Ce=t(465),Oe=t(271),we=t.n(Oe),Ne=[{id:be()(),name:"Dropbox",imageUrl:"/images/products/product_1.png",updatedAt:K()().subtract(2,"hours")},{id:be()(),name:"Medium Corporation",imageUrl:"/images/products/product_2.png",updatedAt:K()().subtract(2,"hours")},{id:be()(),name:"Slack",imageUrl:"/images/products/product_3.png",updatedAt:K()().subtract(3,"hours")},{id:be()(),name:"Lyft",imageUrl:"/images/products/product_4.png",updatedAt:K()().subtract(5,"hours")},{id:be()(),name:"GitHub",imageUrl:"/images/products/product_5.png",updatedAt:K()().subtract(9,"hours")}],ke=Object(S.a)((function(){return{root:{height:"100%"},content:{padding:0},image:{height:48,width:48},actions:{justifyContent:"flex-end"}}})),Te=function(e){var a=e.className,t=Object(k.a)(e,["className"]),i=ke(),o=Object(n.useState)(Ne),l=Object(z.a)(o,1)[0];return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(i.root,a)}),r.a.createElement(_.a,{subtitle:"".concat(l.length," in total"),title:"Latest products"}),r.a.createElement(W.a,null),r.a.createElement(Y.a,{className:i.content},r.a.createElement(M.a,null,l.map((function(e,a){return r.a.createElement(H.a,{divider:a<l.length-1,key:e.id},r.a.createElement(je.a,null,r.a.createElement("img",{alt:"Product",className:i.image,src:e.imageUrl})),r.a.createElement(Ce.a,{primary:e.name,secondary:"Updated ".concat(e.updatedAt.fromNow())}),r.a.createElement(P.a,{edge:"end",size:"small"},r.a.createElement(we.a,null)))})))),r.a.createElement(W.a,null),r.a.createElement(Z.a,{className:i.actions},r.a.createElement(G.a,{color:"primary",size:"small",variant:"text"},"View all ",r.a.createElement(he.a,null))))},Se=t(272),Be=t.n(Se),Ie={labels:["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug"],datasets:[{label:"This year",backgroundColor:j.primary.main,data:[18,5,19,27,29,19,20]},{label:"Last year",backgroundColor:j.neutral,data:[11,20,12,29,30,25,13]}]},Le={responsive:!0,maintainAspectRatio:!1,animation:!1,legend:{display:!1},cornerRadius:20,tooltips:{enabled:!0,mode:"index",intersect:!1,borderWidth:1,borderColor:j.divider,backgroundColor:j.white,titleFontColor:j.text.primary,bodyFontColor:j.text.secondary,footerFontColor:j.text.secondary},layout:{padding:0},scales:{xAxes:[{barThickness:12,maxBarThickness:10,barPercentage:.5,categoryPercentage:.5,ticks:{fontColor:j.text.secondary},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{ticks:{fontColor:j.text.secondary,beginAtZero:!0,min:0},gridLines:{borderDash:[2],borderDashOffset:[2],color:j.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:j.divider}}]}},Re=Object(S.a)((function(){return{root:{},chartContainer:{height:400,position:"relative"},actions:{justifyContent:"flex-end"}}})),ze=function(e){var a=e.className,t=Object(k.a)(e,["className"]),n=Re();return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(n.root,a)}),r.a.createElement(_.a,{action:r.a.createElement(G.a,{size:"small",variant:"text"},"Last 7 days ",r.a.createElement(Be.a,null)),title:"Latest Sales"}),r.a.createElement(W.a,null),r.a.createElement(Y.a,null,r.a.createElement("div",{className:n.chartContainer},r.a.createElement(g.Bar,{data:Ie,options:Le}))),r.a.createElement(W.a,null),r.a.createElement(Z.a,{className:n.actions},r.a.createElement(G.a,{color:"primary",size:"small",variant:"text"},"Overview ",r.a.createElement(he.a,null))))},Ae=t(273),We=t.n(Ae),De=Object(S.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,height:56,width:56},icon:{height:32,width:32},progress:{marginTop:e.spacing(3)}}})),qe=function(e){var a=e.className,t=Object(k.a)(e,["className"]),n=De();return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(n.root,a)}),r.a.createElement(Y.a,null,r.a.createElement(U.a,{container:!0,justify:"space-between"},r.a.createElement(U.a,{item:!0},r.a.createElement(F.a,{className:n.title,color:"textSecondary",gutterBottom:!0,variant:"body2"},"TASKS PROGRESS"),r.a.createElement(F.a,{variant:"h3"},"75.5%")),r.a.createElement(U.a,{item:!0},r.a.createElement(q.a,{className:n.avatar},r.a.createElement(We.a,{className:n.icon})))),r.a.createElement(Q.a,{className:n.progress,value:75.5,variant:"determinate"})))},Fe=t(274),Me=t.n(Fe),He=Object(S.a)((function(e){return{root:{height:"100%",backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.white,color:e.palette.primary.main,height:56,width:56},icon:{height:32,width:32}}})),Ge=function(e){var a=e.className,t=Object(k.a)(e,["className"]),n=He();return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(n.root,a)}),r.a.createElement(Y.a,null,r.a.createElement(U.a,{container:!0,justify:"space-between"},r.a.createElement(U.a,{item:!0},r.a.createElement(F.a,{className:n.title,color:"inherit",gutterBottom:!0,variant:"body2"},"TOTAL PROFIT"),r.a.createElement(F.a,{color:"inherit",variant:"h3"},"$23,200")),r.a.createElement(U.a,{item:!0},r.a.createElement(q.a,{className:n.avatar},r.a.createElement(Me.a,{className:n.icon}))))))},Pe=t(276),Ue=t.n(Pe),Ve=t(275),_e=t.n(Ve),Ye=Object(S.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.success.main,height:56,width:56},icon:{height:32,width:32},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIcon:{color:e.palette.success.dark},differenceValue:{color:e.palette.success.dark,marginRight:e.spacing(1)}}})),$e=function(e){var a=e.className,t=Object(k.a)(e,["className"]),n=Ye();return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(n.root,a)}),r.a.createElement(Y.a,null,r.a.createElement(U.a,{container:!0,justify:"space-between"},r.a.createElement(U.a,{item:!0},r.a.createElement(F.a,{className:n.title,color:"textSecondary",gutterBottom:!0,variant:"body2"},"TOTAL USERS"),r.a.createElement(F.a,{variant:"h3"},"1,600")),r.a.createElement(U.a,{item:!0},r.a.createElement(q.a,{className:n.avatar},r.a.createElement(_e.a,{className:n.icon})))),r.a.createElement("div",{className:n.difference},r.a.createElement(Ue.a,{className:n.differenceIcon}),r.a.createElement(F.a,{className:n.differenceValue,variant:"body2"},"16%"),r.a.createElement(F.a,{className:n.caption,variant:"caption"},"Since last month"))))},Ze=t(277),Je=t.n(Ze),Ke=t(279),Qe=t.n(Ke),Xe=t(280),ea=t.n(Xe),aa=t(278),ta=t.n(aa),na=Object(S.a)((function(e){return{root:{height:"100%"},chartContainer:{position:"relative",height:"300px"},stats:{marginTop:e.spacing(2),display:"flex",justifyContent:"center"},device:{textAlign:"center",padding:e.spacing(1)},deviceIcon:{color:e.palette.icon}}})),ra=function(e){var a=e.className,t=Object(k.a)(e,["className"]),n=na(),i=Object(A.a)(),o={datasets:[{data:[63,15,22],backgroundColor:[i.palette.primary.main,i.palette.error.main,i.palette.warning.main],borderWidth:8,borderColor:i.palette.white,hoverBorderColor:i.palette.white}],labels:["Desktop","Tablet","Mobile"]},l={legend:{display:!1},responsive:!0,maintainAspectRatio:!1,animation:!1,cutoutPercentage:80,layout:{padding:0},tooltips:{enabled:!0,mode:"index",intersect:!1,borderWidth:1,borderColor:i.palette.divider,backgroundColor:i.palette.white,titleFontColor:i.palette.text.primary,bodyFontColor:i.palette.text.secondary,footerFontColor:i.palette.text.secondary}},c=[{title:"Desktop",value:"63",icon:r.a.createElement(Je.a,null),color:i.palette.primary.main},{title:"Tablet",value:"15",icon:r.a.createElement(ta.a,null),color:i.palette.error.main},{title:"Mobile",value:"23",icon:r.a.createElement(Qe.a,null),color:i.palette.warning.main}];return r.a.createElement(V.a,Object.assign({},t,{className:Object(T.a)(n.root,a)}),r.a.createElement(_.a,{action:r.a.createElement(P.a,{size:"small"},r.a.createElement(ea.a,null)),title:"Users By Device"}),r.a.createElement(W.a,null),r.a.createElement(Y.a,null,r.a.createElement("div",{className:n.chartContainer},r.a.createElement(g.Doughnut,{data:o,options:l})),r.a.createElement("div",{className:n.stats},c.map((function(e){return r.a.createElement("div",{className:n.device,key:e.title},r.a.createElement("span",{className:n.deviceIcon},e.icon),r.a.createElement(F.a,{variant:"body1"},e.title),r.a.createElement(F.a,{style:{color:e.color},variant:"h2"},e.value,"%"))})))))},ia=Object(S.a)((function(e){return{root:{padding:e.spacing(4)}}})),oa=function(){var e=ia();return r.a.createElement("div",{className:e.root},r.a.createElement(U.a,{container:!0,spacing:4},r.a.createElement(U.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(re,null)),r.a.createElement(U.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement($e,null)),r.a.createElement(U.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(qe,null)),r.a.createElement(U.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(Ge,null)),r.a.createElement(U.a,{item:!0,lg:8,md:12,xl:9,xs:12},r.a.createElement(ze,null)),r.a.createElement(U.a,{item:!0,lg:4,md:6,xl:3,xs:12},r.a.createElement(ra,null)),r.a.createElement(U.a,{item:!0,lg:4,md:6,xl:3,xs:12},r.a.createElement(Te,null)),r.a.createElement(U.a,{item:!0,lg:8,md:12,xl:9,xs:12},r.a.createElement(ve,null))))},la=(Object(S.a)((function(e){return{root:{padding:e.spacing(4)},iframe:{width:"100%",minHeight:640,border:0}}})),Object(S.a)((function(e){return{root:{padding:e.spacing(4)},content:{paddingTop:150,textAlign:"center"},image:{marginTop:50,display:"inline-block",maxWidth:"100%",width:560}}})),t(284),t(283),t(281),t(282),Object(S.a)((function(e){return{root:{},imageContainer:{height:64,width:64,margin:"0 auto",border:"1px solid ".concat(e.palette.divider),borderRadius:"5px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},image:{width:"100%"},statsItem:{display:"flex",alignItems:"center"},statsIcon:{color:e.palette.icon,marginRight:e.spacing(1)}}})),Object(S.a)((function(e){return{root:{},row:{height:"42px",display:"flex",alignItems:"center",marginTop:e.spacing(1)},spacer:{flexGrow:1},importButton:{marginRight:e.spacing(1)},exportButton:{marginRight:e.spacing(1)},searchInput:{marginRight:e.spacing(1)}}})),be()(),be()(),be()(),be()(),be()(),be()(),Object(S.a)((function(e){return{root:{padding:e.spacing(3)},content:{marginTop:e.spacing(2)},pagination:{marginTop:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"flex-end"}}})),t(466),t(471)),ca=(Object(S.a)((function(){return{root:{},item:{display:"flex",flexDirection:"column"}}})),Object(S.a)((function(){return{root:{}}})),Object(S.a)((function(e){return{root:{padding:e.spacing(4)}}})),t(467)),sa=t(109),ma=t(102);function da(e){return r.a.createElement(ma.a,e,r.a.createElement("path",{d:"M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z"}))}function ua(e){return r.a.createElement(ma.a,e,r.a.createElement("path",{d:"M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z"}))}var pa={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}}},ga=Object(S.a)((function(e){return{root:{backgroundColor:e.palette.background.default,height:"100%"},grid:{height:"100%"},quoteContainer:Object(B.a)({},e.breakpoints.down("md"),{display:"none"}),quote:{backgroundColor:e.palette.neutral,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(/images/auth.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},quoteInner:{textAlign:"center",flexBasis:"600px"},quoteText:{color:e.palette.white,fontWeight:300},name:{marginTop:e.spacing(3),color:e.palette.white},bio:{color:e.palette.white},contentContainer:{},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:e.spacing(5),paddingBototm:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},logoImage:{marginLeft:e.spacing(4)},contentBody:Object(B.a)({flexGrow:1,display:"flex",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"center"}),form:Object(B.a)({paddingLeft:100,paddingRight:100,paddingBottom:125,flexBasis:700},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{marginTop:e.spacing(3)},socialButtons:{marginTop:e.spacing(3)},socialIcon:{marginRight:e.spacing(1)},sugestion:{marginTop:e.spacing(2)},textField:{marginTop:e.spacing(2)},signInButton:{margin:e.spacing(2,0)}}})),ha=Object(u.g)((function(e){var a=e.history,t=ga(),i=Object(sa.b)().loginWithRedirect,o=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),l=Object(z.a)(o,2),c=l[0],s=l[1];Object(n.useEffect)((function(){var e=b()(c.values,pa);s((function(a){return Object(d.a)(Object(d.a)({},a),{},{isValid:!e,errors:e||{}})}))}),[c.values]);var m=function(e){e.persist(),s((function(a){return Object(d.a)(Object(d.a)({},a),{},{values:Object(d.a)(Object(d.a)({},a.values),{},Object(B.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(d.a)(Object(d.a)({},a.touched),{},Object(B.a)({},e.target.name,!0))})}))},u=function(e){e.preventDefault(),a.push("/")},p=function(e){return!(!c.touched[e]||!c.errors[e])};return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{className:t.grid,container:!0},r.a.createElement(U.a,{className:t.quoteContainer,item:!0,lg:5},r.a.createElement("div",{className:t.quote})),r.a.createElement(U.a,{className:t.content,item:!0,lg:7,xs:12},r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.contentHeader}),r.a.createElement("div",{className:t.contentBody},r.a.createElement("form",{className:t.form,onSubmit:u},r.a.createElement(F.a,{className:t.title,variant:"h2"},"Sign in"),r.a.createElement(F.a,{color:"textSecondary",gutterBottom:!0},"Sign in with social media"),r.a.createElement(U.a,{className:t.socialButtons,container:!0,spacing:2},r.a.createElement(U.a,{item:!0},r.a.createElement(G.a,{color:"primary",onClick:u,size:"large",variant:"contained"},r.a.createElement(da,{className:t.socialIcon}),"Login with Facebook")),r.a.createElement(U.a,{item:!0},r.a.createElement(G.a,Object(B.a)({onClick:u,size:"large",variant:"contained"},"onClick",(function(){return i()})),r.a.createElement(ua,{className:t.socialIcon}),"Login with Google"))),r.a.createElement(F.a,{align:"center",className:t.sugestion,color:"textSecondary",variant:"body1"},"or login with email address"),r.a.createElement($.a,{className:t.textField,error:p("email"),fullWidth:!0,helperText:p("email")?c.errors.email[0]:null,label:"Email address",name:"email",onChange:m,type:"text",value:c.values.email||"",variant:"outlined"}),r.a.createElement($.a,{className:t.textField,error:p("password"),fullWidth:!0,helperText:p("password")?c.errors.password[0]:null,label:"Password",name:"password",onChange:m,type:"password",value:c.values.password||"",variant:"outlined"}),r.a.createElement(G.a,{className:t.signInButton,color:"primary",disabled:!c.isValid,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign in now"),r.a.createElement(F.a,{color:"textSecondary",variant:"body1"},"Don't have an account?"," ",r.a.createElement(ca.a,{component:D.a,to:"/sign-up",variant:"h6"},"Sign up"))))))))})),fa=t(422),ba=t(139),xa=t.n(ba),Ea={firstName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},lastName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}},policy:{presence:{allowEmpty:!1,message:"is required"},checked:!0}},ya=Object(S.a)((function(e){return{root:{backgroundColor:e.palette.background.default,height:"100%"},grid:{height:"100%"},quoteContainer:Object(B.a)({},e.breakpoints.down("md"),{display:"none"}),quote:{backgroundColor:e.palette.neutral,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(/images/auth.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},quoteInner:{textAlign:"center",flexBasis:"600px"},quoteText:{color:e.palette.white,fontWeight:300},name:{marginTop:e.spacing(3),color:e.palette.white},bio:{color:e.palette.white},contentContainer:{},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:e.spacing(5),paddingBototm:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},logoImage:{marginLeft:e.spacing(4)},contentBody:Object(B.a)({flexGrow:1,display:"flex",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"center"}),form:Object(B.a)({paddingLeft:100,paddingRight:100,paddingBottom:125,flexBasis:700},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{marginTop:e.spacing(3)},textField:{marginTop:e.spacing(2)},policy:{marginTop:e.spacing(1),display:"flex",alignItems:"center"},policyCheckbox:{marginLeft:"-14px"},signUpButton:{margin:e.spacing(2,0)}}})),va=(Object(u.g)((function(e){var a=e.history,t=ya(),i=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),o=Object(z.a)(i,2),l=o[0],c=o[1];Object(n.useEffect)((function(){var e=b()(l.values,Ea);c((function(a){return Object(d.a)(Object(d.a)({},a),{},{isValid:!e,errors:e||{}})}))}),[l.values]);var s=function(e){e.persist(),c((function(a){return Object(d.a)(Object(d.a)({},a),{},{values:Object(d.a)(Object(d.a)({},a.values),{},Object(B.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(d.a)(Object(d.a)({},a.touched),{},Object(B.a)({},e.target.name,!0))})}))},m=function(e){return!(!l.touched[e]||!l.errors[e])};return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{className:t.grid,container:!0},r.a.createElement(U.a,{className:t.quoteContainer,item:!0,lg:5},r.a.createElement("div",{className:t.quote},r.a.createElement("div",{className:t.quoteInner},r.a.createElement(F.a,{className:t.quoteText,variant:"h1"},"Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life."),r.a.createElement("div",{className:t.person},r.a.createElement(F.a,{className:t.name,variant:"body1"},"Takamaru Ayako"),r.a.createElement(F.a,{className:t.bio,variant:"body2"},"Manager at inVision"))))),r.a.createElement(U.a,{className:t.content,item:!0,lg:7,xs:12},r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.contentHeader},r.a.createElement(P.a,{onClick:function(){a.goBack()}},r.a.createElement(xa.a,null))),r.a.createElement("div",{className:t.contentBody},r.a.createElement("form",{className:t.form,onSubmit:function(e){e.preventDefault(),a.push("/")}},r.a.createElement(F.a,{className:t.title,variant:"h2"},"Create new account"),r.a.createElement(F.a,{color:"textSecondary",gutterBottom:!0},"Use your email to create new account"),r.a.createElement($.a,{className:t.textField,error:m("firstName"),fullWidth:!0,helperText:m("firstName")?l.errors.firstName[0]:null,label:"First name",name:"firstName",onChange:s,type:"text",value:l.values.firstName||"",variant:"outlined"}),r.a.createElement($.a,{className:t.textField,error:m("lastName"),fullWidth:!0,helperText:m("lastName")?l.errors.lastName[0]:null,label:"Last name",name:"lastName",onChange:s,type:"text",value:l.values.lastName||"",variant:"outlined"}),r.a.createElement($.a,{className:t.textField,error:m("email"),fullWidth:!0,helperText:m("email")?l.errors.email[0]:null,label:"Email address",name:"email",onChange:s,type:"text",value:l.values.email||"",variant:"outlined"}),r.a.createElement($.a,{className:t.textField,error:m("password"),fullWidth:!0,helperText:m("password")?l.errors.password[0]:null,label:"Password",name:"password",onChange:s,type:"password",value:l.values.password||"",variant:"outlined"}),r.a.createElement("div",{className:t.policy},r.a.createElement(la.a,{checked:l.values.policy||!1,className:t.policyCheckbox,color:"primary",name:"policy",onChange:s}),r.a.createElement(F.a,{className:t.policyText,color:"textSecondary",variant:"body1"},"I have read the"," ",r.a.createElement(ca.a,{color:"primary",component:D.a,to:"#",underline:"always",variant:"h6"},"Terms and Conditions"))),m("policy")&&r.a.createElement(fa.a,{error:!0},l.errors.policy[0]),r.a.createElement(G.a,{className:t.signUpButton,color:"primary",disabled:!l.isValid,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign up now"),r.a.createElement(F.a,{color:"textSecondary",variant:"body1"},"Have an account?"," ",r.a.createElement(ca.a,{component:D.a,to:"/sign-in",variant:"h6"},"Sign in"))))))))})),Object(S.a)((function(e){return{root:{padding:e.spacing(4)}}})),t(472),Object(S.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:1050},nameContainer:{display:"flex",alignItems:"center"},avatar:{marginRight:e.spacing(2)},actions:{justifyContent:"flex-end"}}})),Object(S.a)((function(e){return{root:{},row:{height:"42px",display:"flex",alignItems:"center",marginTop:e.spacing(1)},spacer:{flexGrow:1},importButton:{marginRight:e.spacing(1)},exportButton:{marginRight:e.spacing(1)},searchInput:{marginRight:e.spacing(1)}}})),be()(),be()(),be()(),be()(),be()(),be()(),be()(),be()(),be()(),be()(),Object(S.a)((function(e){return{root:{padding:e.spacing(3)},content:{marginTop:e.spacing(2)}}})),Object(p.a)());g.Chart.helpers.extend(g.Chart.elements.Rectangle.prototype,{draw:x.draw}),b.a.validators=Object(d.a)(Object(d.a)({},b.a.validators),N);var ja=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:w},r.a.createElement(u.c,{history:va},r.a.createElement(u.b,{component:ha,exact:!0,path:"/"}),r.a.createElement(u.b,{component:oa,exact:!0,path:"/dashboard"})))}}]),t}(n.Component);o.a.render(r.a.createElement(sa.a,{domain:"dev--51c0mci.us.auth0.com",clientId:"FxvHp6bnYPI8G2yzlMh5BtWQpa64bh2w",redirectUri:"http://localhost:3000/dashboard"},r.a.createElement(ja,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[295,1,2]]]);
//# sourceMappingURL=main.6ab96f57.chunk.js.map