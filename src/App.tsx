import React, {Fragment,useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './App.css'
import Home from "./pages/Home";
import { Provider } from 'react-redux';
import store from './store'
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

function App() {

   useEffect(() =>{
    //init Materialize JS
    M.AutoInit();
   });

  return (
      <Provider store={store}>
        <Fragment>
            <SearchBar />
            <div className='container'>
                <AddBtn />
                <AddLogModal />
                <EditLogModal />
                <AddTechModal />
                <TechListModal />
                <Logs />
            </div>
        </Fragment>
      </Provider>
  )
}

export default App
