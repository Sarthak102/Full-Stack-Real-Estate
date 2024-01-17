import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ss0iku35kwv6j57y.us.auth0.com"
     clientId="VtXc5NHFNWzkKl1rhbZdSxSoej9TGAcY"
     authorizationParams={{
      redirect_uri: "https://full-stack-real-estate-pied.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
