  var button = document.querySelector(".search-btn");
  var popup = document.querySelector(".modal-content");
  var date = popup.querySelector("#date-1");
  var date2 = popup.querySelector("#date-2");
  var form = popup.querySelector(".search-form");

  button.addEventListener("click", function(event) {event.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.toggle("modal-content-show");
  date.focus();
  });

  form.addEventListener("submit", function(event) {if (!date.value || !date2.value) {event.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  }
  });
