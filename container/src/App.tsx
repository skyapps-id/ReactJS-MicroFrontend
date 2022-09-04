import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore
import { Product } from 'product/Product';

import "./index.scss";

const App = () => (
  <div>
    <header className="bg-gray-200 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Example Store</h1>
      </div>
    </header>
    <main className="mt-10 text-3xl mx-auto max-w-6xl">
      <Product/>
    </main>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
