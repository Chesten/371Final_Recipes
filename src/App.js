import './App.css';
import Header from './components/Header'
import Sidebar from './components/SideBar'
import MainWindow from './components/MainWindow'
import { useState } from 'react'
import { firebase } from './firebase/config'

function App() {

  //this is where all DB "functions" and things will go, these will depend on
    //states, 




  var temp = [{name:"john", UID:"123"}, {name:"bill", UID:"234"}, {name:"phil", UID:"098", weird:"something new"}]
  const [UserName, setUserName] = useState('')
  const [SearchedRecipe, setRecipe] = useState(Object)
  function Login(email, password){
    
    //this console log will be one "behind", the set UserName is async
      //but it will update components that use this state
    //console.log("App name: " + UserName )
    //should have checking based on raw data back to DB, then set at end
    firebase.auth().signInWithEmailAndPassword(email, password).then((responce)=>{
      const uid = responce.user.uid
      const userRef= firebase.firestore().collection('users')
      userRef.doc(uid).get().then(firestoreDocument =>{
        if(!firestoreDocument.exists){
          alert("user doesn't exitst anymore")
          return;
        }
        const user = firestoreDocument.data()
        //this might be where we grab user data like name setUserName() for setting
        console.log("USer: "+ JSON.stringify(user))
        setUserName(user.userName)
      })
    }).catch((err) =>{
      alert(err)
    })

  }
  function SighUp(){
    //this is where we do a create on the DB for a new user
      //need to assign new ID value for recipe book collection, 
      //make sure ID isn't taken
      var email = prompt("please enter your Email")
      var userName = prompt("please enter your User Name")
      var password1 = prompt("enter Password (6 char or longer)")
      var password2 = prompt("re Enter password")
      if(password1===password2){
        //will need to do more here for DB integration
        firebase.auth().createUserWithEmailAndPassword(email, password1)
          .then((responce)=>{
            console.log("Responce: " + JSON.stringify(responce))
            const uid = responce.user.uid
            const data = {
              id: uid,
              userName, 
              email,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef.doc(uid).set(data)
            alert("Account created!")
            setUserName(userName)
          }).catch((err)=>{
            alert(err)
          })
      }
      else{
        alert("passwords didn't match ")
      }
  }

  function Search(title){
    var docRef = firebase.firestore().collection("recipes").doc(title)

    docRef.get().then((doc)=>{
      if(doc.exists){
        console.log("doc found: " + JSON.stringify(doc.data()))
        setRecipe(doc.data())
        
      }
      else{
        console.log("doc not found")
      }
    })
  }

  function Recipe(title, desc, ingredients, pub){
    //database creation for a recipe

    //need some checking here for if a title has been entered
      //otherwise the old recipe will be overwritted with the new, 
      //so there needs to be some search, then maybe append a number 
      //for multiple different recipes of the same meal
    firebase.firestore().collection("recipes").doc(title).set({
      Title: title,
      Description: desc, 
      Ingredients: ingredients, 
      isPublic: pub, 
      author: UserName
    }).then(()=>{
      console.log(title + " successfully written!");
    }).catch((error) => {
      console.error("Error writing document: ", error);
  });


  }

  return (
    //this is where we will have the components layed out for our application, similarly to the
      //template tag in vueJS
    //custom tags must start with capitals
    <div className="App">
     <Header name={UserName}
             LogIn = {function(email, pass){
                Login(email, pass)
             }}
             SignUp = {function(){
                SighUp()
             }}></Header>
     <Sidebar data={temp}
              Search = {function(term){
                console.log(term)
                Search(term)
              }}></Sidebar>
      <MainWindow SearchedRecipe = {SearchedRecipe}
                  Recipe = {function(title, desc, ingredients, pub){
                    Recipe(title, desc, ingredients, pub)
              }}></MainWindow>
    </div>
  );
}

export default App;
