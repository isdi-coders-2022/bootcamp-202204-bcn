import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
        <div className="actions">
          <Actions />
        </div>
      </main>
    </div>
  );
}

export default App;
