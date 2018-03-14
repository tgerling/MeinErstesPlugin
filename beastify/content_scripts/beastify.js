(function() {

  if (window.hasRun) {
    return;
  }
}
window.hasRun = true;

  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "beastify-image";
    beastImage.className = "beastyify-image";
    document.body.appendChild(beastImage);
  }

  function removeExistingBEasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
}

/* Einstieg */

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "beastify") {
    insertBeast(message.beastURL);
  } else if (message.command === "reset") {
    removeExistingBEasts();
  }
  });

})();
