function viewNextCertificate(event) {
  event.preventDefault();
}

function viewPrevCertificate(event) {
  event.preventDefault();
}

let certificates = [
  {
    name: "SheCodes Basics",
    testimonial:
      "SheCodes Basics is a great introduction to learning programming. I really enjoyed learning how to code and create my own HTML pages. The workshop made me want to dive into coding!",
    certificateLink:
      "https://www.shecodes.io/certificates/dc4e6b642e7a27d77f67af0d5d72de68",
    imagePath: "/images/certificates/shecodes-basics.png",
  },
  {
    name: "SheCodes Plus",
    testimonial:
      "SheCodes Plus is an amazing adventure I would highly recommend. It was a challenging, but well structured and fun course. I learned how to use API key and host pages, as well as developed my HTML, CSS and JS skills. ",
    certificateLink:
      "https://www.shecodes.io/certificates/2cffcd760c2126c9b4f7ef4966b4f05e",
    imagePath: "/images/certificates/shecodes-plus.png",
  },
  {
    name: "SheCodes Responsive",
    testimonial:
      "SheCodes Responsive is a great course that helped me to learn how to build responsive websites that look good on different devices. My HTML and CSS skills have improved greatly and I am looking forward to continue developing my skills.",
    certificateLink:
      "https://www.shecodes.io/certificates/ddde496309404c40a1d4cca4650e679f",
    imagePath: "/images/certificates/shecodes-responsive.png",
  },
];

let arrowRight = document.querySelector("#arrow-right");
arrowRight.addEventListener("click", viewNextCertificate);

let arrowLeft = document.querySelector("#arrow-left");
arrowLeft.addEventListener("click", viewPrevCertificate);

/*Contact Form*/
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
