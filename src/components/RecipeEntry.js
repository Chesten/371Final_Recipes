
function RecipeEntry(prop){

    var Name =prop.Name

    return(
        <div id="Recipe">
            <p>This is a single recipe Entry</p>
            {Name}            
        </div>
    )
}

export default RecipeEntry