import './MainWindow.css';
import RecipeEntry from './RecipeEntry'


function MainWindow(prop){

    var names = ["jim", "joe", "bob", "another"]
    var list=[]
    var i=0;
    while(i<names.length){
        list.push(<RecipeEntry Name={names[i]}></RecipeEntry>)
        i++
    }

    return(
        <div id="MainWindow">
            <p>this is where all the recipe content will go</p>  
            {list}          
        </div>
    )
}

export default MainWindow