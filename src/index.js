import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css';
import { Avatar } from "./component/Avatar";

class MyComponent extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    const name = this.getAttribute("name") || "";
    const image = this.getAttribute("image") || "";
    const size = this.getAttribute("size") || "md";
    root.render(<Avatar name={name} image={image} size={size} />);
  }
}

customElements.define("avatar-component", MyComponent);