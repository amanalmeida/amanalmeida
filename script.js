window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add('display');
  }, 2000);
}
// toggles menu closing for mobile app users.
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

//also closes menu for mobile users.
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

//toggles the animation for bottom right arrow to move to the top of page
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 2000);
  });

  var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thank you for your email!";
        status.classList.add('success');
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form."
        status.classList.add('error')
      });
    }
    form.addEventListener("submit", handleSubmit)