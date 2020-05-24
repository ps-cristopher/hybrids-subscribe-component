import { html } from "hybrids";
import style from "./style.js";

// Timeout to wait for the email value
var timeout = null;

// Function to handle the email value, executed on input keyup
function handleEmail(host, { target }) {
  // Clears the current timeout
  clearTimeout(timeout);
  host.errorMessage = "";
  host.inputClass = ["form-control"];
  // Creates timeotut to wait for the email value and then checks the format
  timeout = setTimeout(() => {
    host.email = target.value;
    host.isValid = validateEmail(host.email);
    host.errorMessage = host.isValid ? "" : "Correo inválido";
    host.errorMessage = host.email ? host.errorMessage : "";
    if (!host.isValid && host.email)
      host.inputClass = ["form-control", "error"];
    if (host.isValid) host.inputClass = ["form-control", "success"];
  }, 1000);
}

// Function to validate email format
function validateEmail(mail) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return true;
  return false;
}

// Submit fake, calling to https://jsonplaceholder.typicode.com/posts
async function submit(host) {
  // The process ends if there´s already a call in progress
  if (host.submitting) return;
  try {
    // Starts the request process
    host.submitting = true;
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Fake",
        body: host.email,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    await response.json();
    // If there´re no errors, changes the variable to shows the success view
    host.submitted = true;
  } catch (error) {
    console.log(error);
    host.errorMessage = error.toString();
  } finally {
    // The process always finish here
    host.submitting = false;
  }
}

// Defines and exports the SubscribeForm component
export default {
  submitting: false,
  submitted: false,
  email: "",
  isValid: false,
  errorMessage: "",
  inputClass: ["form-control"],
  render: ({
    submitting,
    submitted,
    email,
    isValid,
    errorMessage,
    inputClass
  }) => html`
    ${style}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <div class="form">
      <form class="form-signin">
        <!-- Form to submit subscription -->
        ${!submitted &&
          html`
            <h2 class="mb-4 text-white">
              ¡Suscríbete!
            </h2>
            <p class="mb-4 text-white text-center">
              👨🏻‍💻Recibe mensualmente en tu correo electrónico 📩 todo el
              contenido y recursos que tengo para ti 🚀
            </p>
            <p class="text-left text-danger mb-0">${errorMessage}</p>
            <input
              type="email"
              id="inputEmail"
              class="${inputClass}"
              value="${email}"
              placeholder="Escribe tu correo electrónico"
              autofocus="true"
              onkeyup="${handleEmail}"
            />
            <button
              class="btn"
              type="button"
              onclick="${submit}"
              disabled="${isValid ? "" : "true"}"
            >
              <!-- Showing spinner -->
              ${submitting &&
                html`
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                `}
              Suscribir
            </button>
            <a href="https://www.cristopherps.com" target="_blank">
              <img
                class="mt-5 mb-2"
                src="src/img/logo.png"
                alt=""
                width="200rem"
                height="50rem"
              />
            </a>

            <a href="https://www.twitter.com/ps_cristopher" target="_blank">
              <p class="mb-3 text-white">@ps_cristopher</p>
            </a>
          `}
        <!-- Success message -->
        ${submitted &&
          html`
            <h2 class="mb-4 text-white">
              🙌🏼 ¡Gracias! 🙌🏼
            </h2>
            <p class="mb-4 text-white text-center">
              Te has unido a esta gran comunidad 🚀, solo queda confirmar tu
              registro, te hemos enviado un correo electrónico 📩 con un link
              para hacerlo 😁
            </p>
            <a href="https://www.cristopherps.com" target="_blank">
              <img
                class="mt-0 mb-2"
                src="src/img/logo.png"
                alt=""
                width="200rem"
                height="50rem"
              />
            </a>

            <a href="https://www.twitter.com/ps_cristopher" target="_blank">
              <p class="mb-3 text-white">@ps_cristopher</p>
            </a>
          `}
      </form>
    </div>
  `
};
