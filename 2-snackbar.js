import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();const i=parseInt(t.target.elements.delay.value),r=t.target.elements.state.value;new Promise((e,o)=>{setTimeout(()=>{r==="fulfilled"?e(i):o(i)},i)}).then(e=>{s.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{s.error({title:"❌ Error",message:`Rejected promise in ${e}ms`,position:"topRight"})})});document.body.insertAdjacentHTML("beforeend",`
  <nav>
    <ul>
      <li><a href="1-timer.html">Timer</a></li>
      <li><a href="2-snackbar.html">Snackbar</a></li>
    </ul>
  </nav>
`);
//# sourceMappingURL=2-snackbar.js.map
