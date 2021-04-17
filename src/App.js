import './App.css';
import Header from './components/Header'
import Sidebar from './components/SideBar'

function App() {

  //this is where all DB "functions" and things will go, these will depend on
    //states, 

  var temp = [{name:"john", UID:"123"}, {name:"bill", UID:"234"}, {name:"phil", UID:"098", weird:"something new"}]

  return (
    //this is where we will have the components layed out for our application, similarly to the
      //template tag in vueJS
    //custom tags must start with capitals
    <div className="App">
     <Header ></Header>
     <Sidebar data={temp}
              Search = {function(term){
                console.log(term)
              }}></Sidebar>
    </div>
  );
}

export default App;
