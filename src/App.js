import * as Styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom"

import Layout from "./UI/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className={Styles.App}>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;