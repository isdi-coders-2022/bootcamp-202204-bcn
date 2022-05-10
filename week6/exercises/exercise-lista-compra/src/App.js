import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import List from "./components/List/List";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Info />
      <main className="row py-4">
        <List />
      </main>
    </div>
  );
}

export default App;
