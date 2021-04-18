import './App.css';
import Header from './components/Header'
import Sidebar from './components/SideBar'
import { useState } from 'react'

function App() {

  //this is where all DB "functions" and things will go, these will depend on
    //states, 

  var temp = [{name:"john", UID:"123"}, {name:"bill", UID:"234"}, {name:"phil", UID:"098", weird:"something new"}]
  const [UserName, setUserName] = useState('')

  function Login(ID, password){
    setUserName(ID)
    //this console log will be one "behind", the set UserName is async
      //but it will update "children" components
    //should have checking based on raw data back to DB, then set at end
    console.log("App name: " + UserName )
    console.log(password)
  }

  return (
    //this is where we will have the components layed out for our application, similarly to the
      //template tag in vueJS
    //custom tags must start with capitals
    <div className="App">
     <Header name={UserName}
             LogIn = {function(ID, pass){
                Login(ID, pass)
             }}></Header>
     <Sidebar data={temp}
              Search = {function(term){
                console.log(term)
              }}></Sidebar>
    </div>
  );
}

export default App;
