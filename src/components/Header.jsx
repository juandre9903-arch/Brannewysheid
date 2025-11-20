import React from "react";

const TABS = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "custom", label: "Custom Designs" },
  { id: "contact", label: "Contact" },
];

export default function Header({ currentView, onChangeView }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-mark">B</span>
          <span className="brand-name">Brannewysheid</span>
        </div>
        <nav className="nav">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={
                "nav-link" +
                (currentView === tab.id ? " nav-link--active" : "")
              }
              onClick={() => onChangeView(tab.id)}
            >
              {tab.label}
            </button>
<button
  className={current === "contact" ? "nav-link active" : "nav-link"}
  onClick={() => onChange("contact")}
>
  Contact
</button>
          ))}
        </nav>
      </div>
    </header>
  );
}
