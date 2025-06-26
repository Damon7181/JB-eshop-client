"use client";

import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import { Provider } from "react-redux";
import store from "../store";

export default function SaunaWrapper({ children }) {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <header>
          <NavbarComponent />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </Provider>
  );
}
