(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-878ef912"],{"0b42":function(e,t,a){var s=a("e8b5"),n=a("68ee"),r=a("861d"),o=a("b622"),i=o("species");e.exports=function(e){var t;return s(e)&&(t=e.constructor,n(t)&&(t===Array||s(t.prototype))?t=void 0:r(t)&&(t=t[i],null===t&&(t=void 0))),void 0===t?Array:t}},"159b":function(e,t,a){var s=a("da84"),n=a("fdbc"),r=a("785a"),o=a("17c2"),i=a("9112"),l=function(e){if(e&&e.forEach!==o)try{i(e,"forEach",o)}catch(t){e.forEach=o}};for(var c in n)n[c]&&l(s[c]&&s[c].prototype);l(r)},"17c2":function(e,t,a){"use strict";var s=a("b727").forEach,n=a("a640"),r=n("forEach");e.exports=r?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"65f0":function(e,t,a){var s=a("0b42");e.exports=function(e,t){return new(s(e))(0===t?0:t)}},a640:function(e,t,a){"use strict";var s=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&s((function(){a.call(null,t||function(){throw 1},1)}))}},b53f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Bienvenido, ${nombre}"}})],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("body",[a("main",[a("div",{staticClass:"contenedor__todo"},[e._m(0),a("div",{staticClass:"contenedor__login-register"},[a("form",{staticClass:"formulario__login",attrs:{action:""}},[a("h2",[e._v("Iniciar sesión")]),a("input",{attrs:{type:"text",placeholder:"Usuario",id:"user"}}),a("input",{attrs:{type:"password",placeholder:"Contraseña",id:"pass"}}),a("button",{attrs:{id:"entrar",type:"button"},on:{click:function(t){return e.login()}}},[e._v("Entrar")]),a("br"),a("a",{attrs:{href:"/inicio"}},[e._v("¿Recordar contraseña?")])]),a("form",{staticClass:"formulario__register",attrs:{action:""}},[a("h2",[e._v("Registrarse")]),a("input",{attrs:{type:"text",placeholder:"Nombre",id:"nombres"}}),a("input",{attrs:{type:"text",placeholder:"Apellidos",id:"apellidos"}}),a("input",{attrs:{type:"text",placeholder:"Correo electrónico",id:"email"}}),a("input",{attrs:{type:"password",placeholder:"Número de identificacion",id:"idN"}}),a("input",{attrs:{type:"checkbox",placeholder:"terms"}}),e._m(1),a("button",{attrs:{type:"button"},on:{click:function(t){return e.register()}}},[e._v("Enviar ")])])])])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"caja__trasera"},[a("div",{staticClass:"caja__trasera-login"},[a("h3",[e._v("¿Ya tienes una cuenta?")]),a("p",[e._v("Iniciar Sesión para entrar en la página")]),a("button",{attrs:{id:"btn__Iniciar-Sesión"}},[e._v(" Iniciar Sesión")])]),a("div",{staticClass:"caja__trasera-register"},[a("h3",[e._v("¿Aún no tienes una cuenta?")]),a("p",[e._v("Registrarse para Iniciar Sesión")]),a("button",{attrs:{id:"btn__Registrarse"}},[e._v(" Registrarse")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"terms"}},[a("a",{attrs:{hrefer:"#"}},[e._v("Al seleccionar esta casilla aceptas nuestro aviso de privacidad, los términos y condiciones")])])}],i=(a("159b"),{name:"Login",props:{msg:String},data:function(){return{datos:{username:"",password:"",nombres:"",apellidos:"",email:"",id:"",users:[]}}},beforeCreate:function(){var e=window.localStorage.getItem("autenticacion");"ok"===e&&this.$router.push({path:"/usuario"})},mounted:function(){document.getElementById("btn__Registrarse").addEventListener("click",i),document.getElementById("btn__Iniciar-Sesión").addEventListener("click",o),window.addEventListener("resize",r);var e=document.querySelector(".formulario__login"),t=document.querySelector(".formulario__register"),a=document.querySelector(".contenedor__login-register"),s=document.querySelector(".caja__trasera-login"),n=document.querySelector(".caja__trasera-register");function r(){window.innerWidth>850?(s.style.display="block",n.style.display="block"):(n.style.display="block",n.style.opacity="1",s.style.display="none",e.style.display="block",t.style.display="none",a.style.left="0px")}function o(){window.innerWidth>850?(t.style.display="none",a.style.left="10px",e.style.display="block",n.style.opacity="1",s.style.opacity="0"):(t.style.display="none",a.style.left="0px",e.style.display="block",n.style.display="block",s.style.display="none")}function i(){window.innerWidth>850?(t.style.display="block",a.style.left="420px",e.style.display="none",n.style.opacity="0",s.style.opacity="1"):(t.style.display="block",a.style.left="0px",e.style.display="none",n.style.display="none",s.style.display="block",s.style.opacity="1")}r()},methods:{login:function(){var e=this;this.datos.username=document.getElementById("user").value,this.datos.password=document.getElementById("pass").value,this.axios.get("/user").then((function(t){e.datos.users=t.data,e.datos.users.forEach((function(t){e.datos.username===t.username&&e.datos.password===t.password&&(window.localStorage.setItem("autenticacion","ok"),window.localStorage.setItem("userName",t.nombres+" "+t.apellidos),window.localStorage.setItem("id",t._id),window.localStorage.setItem("email",t.email),e.$router.push({path:"/usuario"}))}))}))},register:function(){this.datos.nombres=document.getElementById("nombres").value,this.datos.apellidos=document.getElementById("apellidos").value,this.datos.email=document.getElementById("email").value,this.datos.username=document.getElementById("idN").value,this.datos.id=document.getElementById("idN").value,this.datos.password=document.getElementById("idN").value;var e={nombres:this.datos.nombres,apellidos:this.datos.apellidos,email:this.datos.email,username:this.datos.id,password:this.datos.id,_id:this.datos.id};console.log(e),this.axios.post("/user",e).then((function(e){alert("Usuario creado correctamente! "+e.data)})).catch((function(e){return console.log(e)}))}}}),l=i,c=(a("c37f"),a("2877")),d=Object(c["a"])(l,r,o,!1,null,"2289e7d5",null),u=d.exports,p={name:"Home",components:{HelloWorld:u}},y=p,f=Object(c["a"])(y,s,n,!1,null,null,null);t["default"]=f.exports},b727:function(e,t,a){var s=a("0366"),n=a("44ad"),r=a("7b0b"),o=a("50c4"),i=a("65f0"),l=[].push,c=function(e){var t=1==e,a=2==e,c=3==e,d=4==e,u=6==e,p=7==e,y=5==e||u;return function(f,m,h,v){for(var _,b,g=r(f),w=n(g),E=s(m,h,3),I=o(w.length),x=0,k=v||i,S=t?k(f,I):a||p?k(f,0):void 0;I>x;x++)if((y||x in w)&&(_=w[x],b=E(_,x,g),e))if(t)S[x]=b;else if(b)switch(e){case 3:return!0;case 5:return _;case 6:return x;case 2:l.call(S,_)}else switch(e){case 4:return!1;case 7:l.call(S,_)}return u?-1:c||d?d:S}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},c37f:function(e,t,a){"use strict";a("de2a")},de2a:function(e,t,a){},e8b5:function(e,t,a){var s=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==s(e)}}}]);
//# sourceMappingURL=chunk-878ef912.5fb0fb90.js.map