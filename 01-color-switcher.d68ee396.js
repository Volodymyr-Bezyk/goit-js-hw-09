const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function r(e){switch(e.currentTarget){case t.startBtn:t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled",!0);break;case t.stopBtn:t.startBtn.removeAttribute("disabled",!0),t.stopBtn.setAttribute("disabled",!0)}}t.startBtn.addEventListener("click",(function(t){e=setInterval(n,1e3),r(t)})),t.stopBtn.addEventListener("click",(function(t){clearInterval(e),r(t)}));
//# sourceMappingURL=01-color-switcher.d68ee396.js.map
