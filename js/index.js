let certificates = [
  {
    name: "SheCodes Basics",
    testimonial:
      "The workshop was absolutely amazing! The way of presenting the material is clear and simple, the support in Slack is very fast. I really enjoyed learning how to code and create my own pages. This workshop is a great introduction to learning programming, it makes me want to dive into coding. Thanks a lot to Matthieu Delac and the SheCodes team! Looking forward to further learning!",
    certificateLink:
      "https://www.shecodes.io/certificates/dc4e6b642e7a27d77f67af0d5d72de68",
    imagePath: "/images/certificates/shecodes-basics.png",
  },
  {
    name: "SheCodes Plus",
    testimonial:
      "This has been an amazing course full of different challenges I loved to go through. The course is well explained, so you'll never feel like you're lost. It was so exciting to work on my own project and I am so happy and satisfied with what I've created. SheCodes gave me confidence and inspired me to start my carrier in tech. I highly recommend it and looking forward to continue learning to code with SheCodes.",
    certificateLink:
      "https://www.shecodes.io/certificates/2cffcd760c2126c9b4f7ef4966b4f05e",
    imagePath: "/images/certificates/shecodes-plus.png",
  },
  {
    name: "SheCodes Responsive",
    testimonial:
      "SheCodes Responsive is a great course that helped me to learn how to build responsive websites that look good on different devices. It was very exciting to work on my own portfolio website and I am very happy with the result. My HTML and CSS skills have improved greatly and I am looking forward to continue developing my skills.",
    certificateLink:
      "https://www.shecodes.io/certificates/ddde496309404c40a1d4cca4650e679f",
    imagePath: "/images/certificates/shecodes-responsive.png",
  },
];

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
