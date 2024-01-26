import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShowDetail from "./components/ShowDetail";
import { SHOE_LIST } from "./constant";

function App() {
  return (
    <div className=" animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShowDetail />
      <NewArrivalSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
