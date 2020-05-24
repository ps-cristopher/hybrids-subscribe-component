import { html } from "hybrids";

export default html`
  <style>
    @font-face {
      font-family: "Lucida Console", Courier, monospace;
    }

    .form {
      font-family: "Lucida Console", Courier, monospace;
      border: 5px solid #222f36;
      border-radius: 10px 10px 10px 10px;
      margin: auto;
      max-width: 30rem;
      background-color: rgba(34, 47, 54, 0.8);
      color: white;
      transition: all 0.2s ease;
    }

    .form-signin {
      width: 100%;
      max-width: 330px;
      padding: 15px;
      margin: auto;
    }
    .form-signin .checkbox {
      font-weight: 400;
    }
    .form-signin .form-control {
      position: relative;
      box-sizing: border-box;
      height: auto;
      padding: 10px;
      font-size: 16px;
    }
    .form-signin .form-control:focus {
      z-index: 2;
    }
    .form-signin input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .form-control {
      width: 100%;
      border-radius: 5px 5px 0px 0px;
      margin-top: 0.5rem;
    }

    .btn {
      background-color: #f1d300;
      border-color: #f1d300;
      border-radius: 0px 0px 5px 5px;
      color: #222f36;
      width: 100%;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #1e73be;
      border-color: #1e73be;
      color: white;
    }

    .btn:disabled {
      background-color: gray;
      border-color: gray;
      color: white;
      cursor: not-allowed;
    }

    .error {
      color: rgba(229, 103, 23, 1) !important;
      border-color: rgba(229, 103, 23, 0.8);
      box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset,
        0 0 8px rgba(229, 103, 23, 0.6);
      outline: none;
    }

    .error:focus {
      border-color: rgba(229, 103, 23, 0.8);
      box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset,
        0 0 8px rgba(229, 103, 23, 0.6);
      outline: none;
    }

    .success {
      color: rgba(30, 126, 52, 1) !important;
      border-color: rgba(30, 126, 52, 0.8);
      box-shadow: 0 1px 1px rgba(30, 126, 52, 0.075) inset,
        0 0 8px rgba(30, 126, 52, 0.6);
      outline: none;
    }

    .success:focus {
      border-color: rgba(30, 126, 52, 0.8);
      box-shadow: 0 1px 1px rgba(30, 126, 52, 0.075) inset,
        0 0 8px rgba(30, 126, 52, 0.6);
      outline: none;
    }
  </style>
`;
