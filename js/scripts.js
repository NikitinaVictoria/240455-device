  var WriteUsLink = document.querySelector(".write-link");
  var WriteUsPopup = document.querySelector(".modal-content");
  var WriteUsClose = document.querySelector(".write-us-close");
  var Name = WriteUsPopup.querySelector("[name=name]");
  var form = WriteUsPopup.querySelector("form");
  var Email = WriteUsPopup.querySelector("[name=email]");
  var Letter = WriteUsPopup.querySelector("[name=letter]");
    WriteUsLink.addEventListener("click", function(event) {
    event.preventDefault();
    WriteUsPopup.classList.toggle("modal-content-appear");
    Name.focus();
  });
    form.addEventListener("submit", function(event) {
      if (!Name.value || !Email.value || !Letter.value) {
      event.preventDefault();
      console.log("Введите данные");
     }
  });
    WriteUsClose.addEventListener("click", function(event) {
    event.preventDefault();
    WriteUsPopup.classList.remove("modal-content-appear");
    Name.classList.remove("modal-error");
    Email.classList.remove("modal-error");
    Letter.classList.remove("modal-error");
  });
    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (WriteUsPopup.classList.contains("modal-content-appear")) {
          WriteUsPopup.classList.remove("modal-content-appear");
          Name.classList.remove("modal-error");
          Email.classList.remove("modal-error");
          Letter.classList.remove("modal-error");
        }
      }
    });
  var MapLink = document.querySelector(".map");
  var MapPopup = document.querySelector(".modal-content-map");
  var MapClose = document.querySelector(".map-close");
      MapLink .addEventListener("click", function(event) {
      event.preventDefault();
      MapPopup.classList.add("modal-content-show");
    });
      MapClose.addEventListener("click", function(event) {
      event.preventDefault();
      MapPopup.classList.remove("modal-content-show");

      });
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (MapPopup.classList.contains("modal-content-show")) {
          MapPopup.classList.remove("modal-content-show");
          }
        }
      });
