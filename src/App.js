import * as Styles from "./App.module.css";

import Transfers from "./components/Transfers/Transfers";
import Subs from "./components/Transfers/Substitutes/Substitutes";

function App() {
  return (
    <div className={Styles.App}>
      <Transfers />
      <Subs />
    </div>
  );
}

export default App;