$("#celular").mask("(99) 99999-9999");
var btn = document.querySelector("#btn-link");
var fieldTel = document.querySelector("#celular");
var fieldMsg = document.querySelector("#mensagem");
var badge = document.querySelector(".tooltip");
var title = document.querySelector("h1.title");
function executar() {
  fieldTelValue = fieldTel.value;
  fieldTelConvert = fieldTelValue.replace(/[(|)|" "|-]/g, "");
  fieldMsgValue = fieldMsg.value;
  fieldMsgConvert = fieldMsgValue.replace(/[" "|+]/g, "%20");
  linkGenerated = `https://api.whatsapp.com/send?phone=55${fieldTelConvert}&text=${fieldMsgConvert}`;
  textAreaLink = document.querySelector("#link");
  textAreaLink.style.display = "block";
  fieldTel.style.display = "none";
  fieldMsg.style.display = "none";
  textAreaLink.value = linkGenerated;
  textAreaLink.select();
  navigator.clipboard.writeText(textAreaLink.value);
  title.innerText = "Link Gerado";
  btn.value = "VOLTAR";
  setTimeout(function () {
    badge.style.display = "block";
  }, 500);
  setTimeout(function () {
    badge.style.display = "none";
  }, 5000);
  btn.addEventListener("click", function () {
    window.location.reload();
  });
}

function redirect() {
  window.location.href = "qrcode.html";
}
