import * as Styles from "./App.module.css";
import Transfers from "./components/Transfers/Transfers";

function App() {
  return (
    <div className={Styles.App}>
      <Transfers />
    </div>
  );
}

export default App;
