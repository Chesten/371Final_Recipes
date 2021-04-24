import './MainWindow.css';
import RecipeEntry from './RecipeEntry'
import Recipe from './Recipe'

function MainWindow(prop){

    var list=[]
    var i=0;
    for(i=0; i<prop.ListOfRecipes.length; i++){
        list.push(<button id={prop.ListOfRecipes[i]}
                          name="Search" onClick={function(e){
                              e.preventDefault()
                              prop.Search(e.target.id)
                          }}>{prop.ListOfRecipes[i]}</button>
        )
    }
    var searched = <RecipeEntry key = {i++} SearchedRecipe={prop.SearchedRecipe}></RecipeEntry>

    return(
        <div id="MainWindow">
            <button id = "loadAll" name="LoadAll" onClick={function(e){
                e.preventDefault()
                prop.LoadAll()
            }}>LoadAll</button>
            <Recipe Recipe={function(title, desc, ingredients, pub){
                prop.Recipe(title, desc, ingredients, pub)
            }}></Recipe>
            <p>this is where all the recipe content will go</p>  
            {searched}
            {list}          
        </div>
    )
}

export default MainWindow