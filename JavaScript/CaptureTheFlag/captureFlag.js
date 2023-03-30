function getMessage() {
  let coincidences = document.querySelectorAll('section[id^="11"] main[id*="22"] article[id*="33"] p.flag');
  console.log(coincidences);

  let url = "";
  for (let i = 0; i < coincidences.length; i++) {
    url += coincidences[i].attributes.value.value;
  }
  console.log("url => ", url);
}