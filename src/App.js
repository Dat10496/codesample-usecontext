import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Header />
      <div class="row ">
        <SideMenu />
        <MainContent />
      </div>
    </>
  );
}

export default App;
