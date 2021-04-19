
function Recipe(prop){

    return(
        <div id="Recipe">
            <h4>This is for editing/ creating recipe</h4>
            <form onSubmit={function(e){
                e.preventDefault()
                prop.Recipe(e.target.RecipeName.value, e.target.description.value,
                            e.target.ingredients.value,e.target.pub.value,)
            }}>
                <input type="text" name="RecipeName" placeholder="Recipe Name" ></input>
                <textarea name="description" placeholder="description" rows="4"></textarea>
                <textarea name="ingredients" placeholder="ingredients" rows="4"></textarea>
                <input type="checkbox" name="pub"></input>
                <input type="submit"></input>
            </form>           
        </div>
    )
}

export default Recipe