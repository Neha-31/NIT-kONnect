(this["webpackJsonpnit-konnect"]=this["webpackJsonpnit-konnect"]||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},104:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(24),a=s.n(i),o=(s(76),s(15)),l=(s(80),s(18)),r=(s(81),s(55)),j=s.n(r),d=s(27),b=d.a.initializeApp({apiKey:"AIzaSyAYx5ZHeE6zYTAk7JogPfJ1yhEYiJpA1B0",authDomain:"nit-konnect.firebaseapp.com",projectId:"nit-konnect",storageBucket:"nit-konnect.appspot.com",messagingSenderId:"966668599449",appId:"1:966668599449:web:e596d87f2948b8de99f808",measurementId:"G-W5W27SB0JK"}),u=d.a.auth(),h=new d.a.auth.GoogleAuthProvider,O=b.firestore(),m=s(3);var p=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)(""),a=Object(l.a)(i,2),o=a[0],r=a[1];return Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("div",{className:"login__logo",children:Object(m.jsx)("img",{src:"https://1.bp.blogspot.com/-yN68iYnyELE/YL344Z1VUdI/AAAAAAAAABY/UvDvzpAosX0exwUebJS34T7eyaEF_DcjgCLcBGAsYHQ/s364/qna_logo.png",alt:""})}),Object(m.jsx)("div",{className:"login__desc",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("h1",{children:"Discover, Share, Grow, Repeat!"}),"."]})}),Object(m.jsxs)("div",{className:"login__auth",children:[Object(m.jsxs)("div",{className:"login__authOptions",children:[Object(m.jsxs)("div",{className:"login__authOption",children:[Object(m.jsx)("img",{className:"login__googleAuth",src:"https://media-public.canva.com/MADnBiAubGA/3/screen.svg",alt:""}),Object(m.jsx)("p",{onClick:function(){u.signInWithPopup(h).catch((function(e){alert(e.message),console.log(u)}))},children:"Continue With Google"})]}),Object(m.jsxs)("div",{className:"login__authOption",children:[Object(m.jsx)("img",{className:"login__googleAuth",src:"https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png",alt:""}),Object(m.jsx)("span",{children:"Continue With Facebook"})]}),Object(m.jsx)("div",{className:"login__authDesc",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Sign Up With Email"}),". By continuing you indicate that you have read and agree to NIT-koONect's",Object(m.jsxs)("span",{style:{color:"blue",cursor:"pointer"},children:["Terms of Service"," "]}),"and"," ",Object(m.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Privacy Policy"}),"."]})})]}),Object(m.jsxs)("div",{className:"login__emailPass",children:[Object(m.jsx)("div",{className:"login__label",children:Object(m.jsx)("h4",{children:"Login"})}),Object(m.jsxs)("div",{className:"login__inputFields",children:[Object(m.jsx)("div",{className:"login__inputField",children:Object(m.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},type:"text",placeholder:"Email"})}),Object(m.jsx)("div",{className:"login__inputField",children:Object(m.jsx)("input",{value:o,onChange:function(e){return r(e.target.value)},type:"password",placeholder:"Password"})})]}),Object(m.jsxs)("div",{className:"login__forgButt",children:[Object(m.jsx)("small",{children:"Forgot Password?"}),Object(m.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),u.signInWithEmailAndPassword(s,o).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)})),n(""),r("")},children:"Login"})]}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),u.createUserWithEmailAndPassword(s,o).then((function(e){e&&console.log(e)})).catch((function(e){return alert(e.message)})),n(""),r("")},children:"Register"})]})]}),Object(m.jsxs)("div",{className:"login__lang",children:[Object(m.jsx)("p",{children:"\u0939\u093f\u0928\u094d\u0926\u0940"}),Object(m.jsx)(j.a,{fontSize:"small"})]}),Object(m.jsxs)("div",{className:"login__footer",children:[Object(m.jsx)("p",{children:"About"}),Object(m.jsx)("p",{children:"Languages"}),Object(m.jsx)("p",{children:"Careers"}),Object(m.jsx)("p",{children:"Businesses"}),Object(m.jsx)("p",{children:"Privacy"}),Object(m.jsx)("p",{children:"Terms"}),Object(m.jsx)("p",{children:"Contact"}),Object(m.jsx)("p",{children:"\xa9 Project Krap"})]})]})})},x=(s(88),s(89),s(129)),g=(s(90),s(60)),v=s.n(g),f=s(61),N=s.n(f),_=s(62),y=s.n(_),q=s(63),w=s.n(q),A=s(122),k=s(123),S=s(42),C=s.n(S),I=(s(46),s(30)),D=Object(I.b)({name:"question",initialState:{questionId:null,questionName:null},reducers:{setQuestionInfo:function(e,t){e.questionId=t.payload.questionId,e.questionName=t.payload.questionName}}}),E=D.actions.setQuestionInfo,z=function(e){return e.question.questionId},B=function(e){return e.question.questionName},T=D.reducer,L=Object(I.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),F=L.actions,P=F.login,H=F.logout,W=function(e){return e.user.user},Y=L.reducer;var U=function(e){var t=e.Id,s=e.question,n=e.image,i=e.timestamp,a=e.NITuser,r=Object(o.c)(W),j=Object(c.useState)(!1),b=Object(l.a)(j,2),u=b[0],h=b[1],p=Object(o.b)(),g=Object(o.c)(z),f=Object(o.c)(B),_=Object(c.useState)(""),q=Object(l.a)(_,2),S=q[0],I=q[1],D=Object(c.useState)([]),T=Object(l.a)(D,2),L=T[0],F=T[1];return Object(c.useEffect)((function(){g&&O.collection("questions").doc(g).collection("answer").orderBy("timestamp","desc").onSnapshot((function(e){return F(e.docs.map((function(e){return{id:e.id,answers:e.data()}})))}))}),[g]),Object(m.jsx)("div",{className:"post",onClick:function(){return p(E({questionId:t,questionName:s}))},children:Object(m.jsxs)("div",{className:"post_info",children:[Object(m.jsx)(x.a,{src:a.photo}),Object(m.jsx)("h4",{children:a.displayName?a.displayName:a.email}),Object(m.jsx)("small",{children:new Date(null===i||void 0===i?void 0:i.toDate()).toLocaleString()}),Object(m.jsxs)("div",{className:"post_body",children:[Object(m.jsxs)("div",{className:"post_question",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("button",{onClick:function(){return h(!0)},className:"post_button",children:"Answer"}),Object(m.jsxs)(C.a,{isOpen:u,onRequestClose:function(){return h(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:600,height:550,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-250px",marginLeft:"-350px"}},children:[Object(m.jsxs)("div",{className:"modal_question",children:[Object(m.jsx)("h1",{children:s}),Object(m.jsxs)("p",{children:["asked by",Object(m.jsx)("span",{className:"name",children:a.displayName?a.displayName:a.email})," ","on",Object(m.jsx)("span",{className:"name",children:new Date(null===i||void 0===i?void 0:i.toDate()).toLocaleString()})]})]}),Object(m.jsx)("div",{className:"modal_answer",children:Object(m.jsx)("textarea",{required:!0,value:S,onChange:function(e){return I(e.target.value)},placeholder:"Enter Your Answer",type:"text"})}),Object(m.jsxs)("div",{className:"modal__button",children:[Object(m.jsx)("button",{className:"cancel",onClick:function(){return h(!1)},children:"Cancel"}),Object(m.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),g&&(O.collection("questions").doc(g).collection("answer").add({questionId:g,timestamp:d.a.firestore.FieldValue.serverTimestamp(),answer:S,user:r}),console.log(g,f),I(" "),h(!1))},className:"add",children:"Submit Your Answer"})]})]})]}),Object(m.jsx)("div",{className:"post_ans",children:L.map((function(e){var s,c=e.id,n=e.answers;return Object(m.jsx)("p",{style:{position:"relative",paddingBottom:"5px"},children:t===n.questionId?Object(m.jsxs)("span",{children:[n.answer,Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{position:"absolute",color:"gray",fontSize:"small",display:"flex",right:"0px"},children:Object(m.jsxs)("span",{style:{color:"#b92b27"},children:[n.user.displayName?n.user.displayName:n.user.email," ","on"," ",new Date(null===(s=n.timestamp)||void 0===s?void 0:s.toDate()).toLocaleString()]})})]}):""},c)}))}),Object(m.jsx)("img",{src:n,alt:""})]}),Object(m.jsxs)("div",{className:"post_footer",children:[Object(m.jsxs)("div",{className:"post_footerAction",children:[Object(m.jsx)(v.a,{}),Object(m.jsx)(N.a,{})]}),Object(m.jsx)(y.a,{}),Object(m.jsx)(w.a,{}),Object(m.jsxs)("div",{className:"post_footerLeft",children:[Object(m.jsx)(A.a,{}),Object(m.jsx)(k.a,{})]})]})]})})};s(100);var G=function(){var e=Object(o.c)(W);return Object(m.jsxs)("div",{className:"qnaBox",children:[Object(m.jsxs)("div",{className:"qnaBox_info ",children:[Object(m.jsx)(x.a,{src:e.photo}),Object(m.jsx)("h5",{children:e.displayName})]}),Object(m.jsx)("div",{className:"qnaBox_qna",children:Object(m.jsx)("p",{children:"What is your question or link?"})})]})};var J=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){O.collection("questions").orderBy("timestamp","desc").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,question:e.data()}})))}))}),[]),Object(m.jsxs)("div",{className:"Feed",children:[Object(m.jsx)(G,{}),s.map((function(e){var t=e.id,s=e.question;return Object(m.jsx)(U,{Id:t,image:s.imageUrl,question:s.question,timestamp:s.timestamp,NITuser:s.user},t)}))]})},Q=s(64),K=s.n(Q),M=s(65),R=s.n(M),V=s(66),Z=s.n(V),X=s(48),$=s.n(X),ee=s(67),te=s.n(ee),se=s(68),ce=s.n(se),ne=s(69),ie=s.n(ne),ae=s(127),oe=s(128),le=s(124),re=s(125);var je=function(){var e=Object(o.c)(W),t=Object(c.useState)(!1),s=Object(l.a)(t,2),n=s[0],i=s[1],a=Object(c.useState)(""),r=Object(l.a)(a,2),j=r[0],b=r[1],h=Object(c.useState)(""),p=Object(l.a)(h,2),g=p[0],v=p[1],f=j;return Object(m.jsx)("div",{className:"Navbar",children:Object(m.jsxs)("div",{className:"qHeader_logo",children:[Object(m.jsx)("img",{src:"https://1.bp.blogspot.com/-yN68iYnyELE/YL344Z1VUdI/AAAAAAAAABY/UvDvzpAosX0exwUebJS34T7eyaEF_DcjgCLcBGAsYHQ/s364/qna_logo.png",alt:""}),Object(m.jsxs)("div",{className:"qHeader_icons",children:[Object(m.jsx)("div",{className:"qHeader_icon",children:Object(m.jsx)(K.a,{})}),Object(m.jsx)("div",{className:"qHeader_icon",children:Object(m.jsx)(R.a,{})}),Object(m.jsx)("div",{className:"qHeader_icon",children:Object(m.jsx)(Z.a,{})}),Object(m.jsx)("div",{className:"qHeader_icon",children:Object(m.jsx)($.a,{})}),Object(m.jsx)("div",{className:"qHeader_icon",children:Object(m.jsx)(te.a,{})}),Object(m.jsxs)("div",{className:"qHeader_input",children:[Object(m.jsx)(ce.a,{}),Object(m.jsx)("input",{type:"text",placeholder:"Ask and get enriched"})]}),Object(m.jsxs)("div",{className:"qHeader_Rem",children:[Object(m.jsx)("div",{className:"qHeader_avatar",children:Object(m.jsx)(x.a,{onClick:function(){return u.signOut()},src:e.photo})}),Object(m.jsx)(ie.a,{}),Object(m.jsx)(ae.a,{onClick:function(){return i(!0)},children:"Ask Question"}),Object(m.jsxs)(C.a,{isOpen:n,onRequestClose:function(){return i(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:700,height:600,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-300px",marginLeft:"-350px"}},children:[Object(m.jsxs)("div",{className:"modal__title",children:[Object(m.jsx)("h5",{children:"Ask Question"}),Object(m.jsx)("h5",{children:"Share Link"})]}),Object(m.jsxs)("div",{className:"modal__info",children:[Object(m.jsx)(x.a,{className:"avatar",src:e.photo}),Object(m.jsxs)("p",{children:[" ",e.disPlayName?e.disPlayName:e.email,"asked"]}),Object(m.jsxs)("div",{className:"modal__scope",children:[Object(m.jsx)($.a,{}),Object(m.jsx)("p",{children:"Public"}),Object(m.jsx)(le.a,{})]})]}),Object(m.jsxs)("div",{className:"modal__Field",children:[Object(m.jsx)(oe.a,{value:j,onChange:function(e){return b(e.target.value)},type:"text",placeholder:"Ask Questions and Get Enriched"}),Object(m.jsxs)("div",{className:"modal__fieldLink",children:[Object(m.jsx)(re.a,{}),Object(m.jsx)("input",{value:g,onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Include link of context if needed (Optional)"})]})]}),Object(m.jsxs)("div",{className:"modal__buttons",children:[Object(m.jsx)("button",{className:"cancel",onClick:function(){return i(!1)},children:"close"}),Object(m.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),i(!1),f&&O.collection("questions").add({user:e,question:j,imageUrl:g,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),b(""),v("")},className:"add",children:"Submit Your Query"})]})]})]})]})]})})},de=s(126);s(101);var be=function(){return Object(m.jsxs)("div",{className:"SidebarOptions",children:[Object(m.jsxs)("div",{className:"SidebarOption",children:[Object(m.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/001/252/133/non_2x/light-bulb-icon-vector.jpg",alt:"",width:"25",height:"20"}),Object(m.jsx)("p",{children:"Ideas"})]}),Object(m.jsxs)("div",{className:"SidebarOption",children:[Object(m.jsx)("img",{src:"https://images.shiksha.com/mediadata/images/1488190632phpzn94a5.jpeg",alt:"",width:"25",height:"20"}),Object(m.jsx)("p",{children:"NIT's Culture"})]}),Object(m.jsxs)("div",{className:"SidebarOption",children:[Object(m.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WF05Nz1-0dGeDHa5Cl1Nj7rKKv_aO8oN6qzom8is_UbASZM26p5WBsFvKXJ43d_v3to&usqp=CAU",alt:"",width:"25",height:"20"}),Object(m.jsx)("p",{children:"College Experiencs"})]}),Object(m.jsxs)("div",{className:"SidebarOption",children:[Object(m.jsx)("img",{src:"https://appliedmachinelearning.files.wordpress.com/2018/04/interview_exp.jpg",alt:"",width:"25",height:"20"}),Object(m.jsx)("p",{children:"Interview Experiencs"})]}),Object(m.jsxs)("div",{className:"SidebarOption",children:[Object(m.jsx)("img",{src:"http://questionsofdifference.com/wp-content/uploads/2020/04/opportunity3.jpg",alt:"",width:"25",height:"20"}),Object(m.jsx)("p",{children:"Opportunities"})]}),Object(m.jsxs)("div",{className:"SidebarOption",children:[Object(m.jsx)("img",{src:"https://spiderimg.amarujala.com/assets/images/2016/09/05/job_1473068678.jpeg",alt:"",width:"25",height:"20"}),Object(m.jsx)("p",{children:"Internships/Jobs"})]}),Object(m.jsxs)("div",{className:"SidebarOption",children:[Object(m.jsx)("img",{src:"https://icon-library.com/images/discover-icon/discover-icon-7.jpg",alt:"",width:"25",height:"20"}),Object(m.jsx)(de.a,{}),Object(m.jsx)("p",{children:"Discover"})]})]})};s(102);var ue=function(){return Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsx)(be,{})})};s(103);var he=function(){return Object(m.jsxs)("div",{className:"widget_contents",children:[Object(m.jsxs)("div",{className:"widget_content",children:[Object(m.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg",alt:""}),Object(m.jsxs)("div",{className:"widget_contentTitle",children:[Object(m.jsx)("h5",{children:"Mobile App Programmer"}),Object(m.jsx)("p",{children:"The best Mobile App Development Company"})]})]}),Object(m.jsxs)("div",{className:"widget_content",children:[Object(m.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1574818-100-mzdwostcualpwcxekyrvyqqpychetdoc.jpeg",alt:""}),Object(m.jsxs)("div",{className:"widget_contentTitle",children:[Object(m.jsx)("h5",{children:"Quota of Quotes"}),Object(m.jsx)("p",{children:"Daily dosage of unforgettable lines from ..."})]})]}),Object(m.jsxs)("div",{className:"widget_content",children:[Object(m.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1644613-100-ydflucgoeztbhwyurtmlqqrgfqmjmhpl.jpeg",alt:""}),Object(m.jsxs)("div",{className:"widget_contentTitle",children:[Object(m.jsx)("h5",{children:"Art & Artist"}),Object(m.jsx)("p",{children:"A Space retated to creating, practicing an..."})]})]}),Object(m.jsxs)("div",{className:"widget_content",children:[Object(m.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1647318-100-kmwvqbpzatmylibelrowrerfqbspekwo.jpeg",alt:""}),Object(m.jsxs)("div",{className:"widget_contentTitle",children:[Object(m.jsx)("h5",{children:"Friedrich Nietzche"}),Object(m.jsx)("p",{children:"A Space dedicated to great work of Friedrich..."})]})]}),Object(m.jsxs)("div",{className:"widget_content",children:[Object(m.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1578647-100-xkggvbyzfkvzhyklewtkjijefekqbazb.jpeg",alt:""}),Object(m.jsxs)("div",{className:"widget_contentTitle",children:[Object(m.jsx)("h5",{children:"Stock Market Strategies"}),Object(m.jsx)("p",{children:"Everything about investing in Stock..."})]})]}),Object(m.jsxs)("div",{className:"widget_content",children:[Object(m.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1711686-100-glvgnbatdxpjbhrkyphlfamqrryfccvp.jpeg",alt:""}),Object(m.jsxs)("div",{className:"widget_contentTitle",children:[Object(m.jsx)("h5",{children:"Architecture World"}),Object(m.jsx)("p",{children:"All about civil architecture..."})]})]})]})};var Oe=function(){return Object(m.jsxs)("div",{className:"widget",children:[Object(m.jsx)("div",{className:" widget_header",children:Object(m.jsx)("h5",{children:"Spaces to follow"})}),Object(m.jsx)("div",{className:"widget_contents",children:Object(m.jsx)(he,{})})]})};var me=function(){return Object(m.jsxs)("div",{className:"qna",children:[Object(m.jsx)(je,{}),Object(m.jsxs)("div",{className:"qna_content",children:[Object(m.jsx)(ue,{}),Object(m.jsx)(J,{}),Object(m.jsx)(Oe,{})]})]})};var pe=function(){var e=Object(o.c)(W),t=Object(o.b)();return Object(c.useEffect)((function(){u.onAuthStateChanged((function(e){t(e?P({uid:e.uid,email:e.email,displayName:e.displayName,photo:e.photoURL}):H()),console.log(e)}))}),[t]),Object(m.jsx)("div",{className:"App",children:e?Object(m.jsx)(me,{}):Object(m.jsx)(p,{})})},xe=Object(I.a)({reducer:{user:Y,question:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(o.a,{store:xe,children:Object(m.jsx)(pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,s){},76:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){}},[[104,1,2]]]);
//# sourceMappingURL=main.88b2bbb0.chunk.js.map