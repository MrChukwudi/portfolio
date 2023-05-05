const insert = document.querySelector(".insert");

window.addEventListener("keydown", (event) => {
  console.log(event);
  insert.innerHTML = `
  <div class="insert">
<div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>
      <div class="key">Pres any Key to get the keyCode</div>
    </div>
  `;
});


