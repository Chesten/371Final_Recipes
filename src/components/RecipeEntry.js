
function RecipeEntry(prop){

    var Recipe = JSON.parse(JSON.stringify(prop.SearchedRecipe))
    console.log(Recipe.Title)
    return(
        <div id="RecipeEntry">

            <h5>{Recipe.Title}</h5>
            <p>{Recipe.Description}<br></br>
                {Recipe.Ingredients}<br></br>
            </p>    
 
        </div>
    )
}

export default RecipeEntry