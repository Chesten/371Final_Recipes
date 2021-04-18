import './App.css';
import Header from './components/Header'
import Sidebar from './components/SideBar'
import MainWindow from './components/MainWindow'
import { useState } from 'react'

function App() {

  //this is where all DB "functions" and things will go, these will depend on
    //states, 

  var temp = [{name:"john", UID:"123"}, {name:"bill", UID:"234"}, {name:"phil", UID:"098", weird:"something new"}]
  const [UserName, setUserName] = useState('')

  function Login(ID, password){
    setUserName(ID)
    //this console log will be one "behind", the set UserName is async
      //but it will update components that use this state
    //console.log("App name: " + UserName )
    //should have checking based on raw data back to DB, then set at end

    console.log(password)
  }
  function SighUp(){
    //this is where we do a create on the DB for a new user
      //need to assign new ID value for recipe book collection, 
      //make sure ID isn't taken
      var userName = prompt("please enter your User Name")
      var password1 = prompt("enter Password")
      var password2 = prompt("re Enter password")
      if(password1===password2){
        //will need to do more here for DB integration
        alert("account created")
        setUserName(userName)
      }
      else{
        alert("passwords didn't match " + password1 + " " + password2)
      }
  }


  return (
    //this is where we will have the components layed out for our application, similarly to the
      //template tag in vueJS
    //custom tags must start with capitals
    <div className="App">
     <Header name={UserName}
             LogIn = {function(ID, pass){
                Login(ID, pass)
             }}
             SignUp = {function(){
                SighUp()
             }}></Header>
     <Sidebar data={temp}
              Search = {function(term){
                console.log(term)
              }}></Sidebar>
      <MainWindow></MainWindow>
    </div>
  );
}

export default App;
