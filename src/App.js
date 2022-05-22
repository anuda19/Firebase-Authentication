import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppProvider } from "./Context";
import Modal from "./Modal";
import Sidebar from "./Sidebar";



function App() {

  return (
    <div >
      <AppProvider>
      <Sidebar />
      <Modal />
      </AppProvider>
    </div>
  );
}

export default App;
