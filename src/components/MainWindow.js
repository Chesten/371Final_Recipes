import './MainWindow.css';
import RecipeEntry from './RecipeEntry'
import Recipe from './Recipe'
function MainWindow(prop){

    var list=[]
    var i=0;

    list.push(<RecipeEntry SearchedRecipe={prop.SearchedRecipe}></RecipeEntry>)

    return(
        <div id="MainWindow">
            <Recipe Recipe={function(title, desc, ingredients, pub){
                prop.Recipe(title, desc, ingredients, pub)
            }}></Recipe>
            <p>this is where all the recipe content will go</p>  
            {list}          
        </div>
    )
}

export default MainWindow