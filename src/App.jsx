import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { CardList } from "./components/CardList/CardList";
function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <CardList />
      </div>
    </>
  );
}

export default App;
