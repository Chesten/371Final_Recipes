function Sidebar(prop){
    //this will eventually get modified heavily, just a template for 
        //prop handling 
        //call prop.<variable> and story it if you want

    var data = prop.data;
    //this is a handy trick for creating lists, just use array
    var list = []
    var i=0
    for(i=0; i<prop.ListOfRecipes.length; i++){
        list.push(<li><button id={prop.ListOfRecipes[i]}
                name="Search" onClick={function(e){
                    e.preventDefault()
                    prop.Search(e.target.id)
                }}>{prop.ListOfRecipes[i]}</button></li>
        )
    }
    

    return(
        <nav id="SideBar">
            <p>temp nav</p>
            <form onSubmit ={function(e){
                e.preventDefault()
                prop.Search(e.target.SearchTerm.value)
            }}>
                <input type = "text" name="SearchTerm" placeholder="Search Recipe"></input>
                <input type = "submit"></input>
            </form>
            <button id = "loadAll" name="LoadAll" onClick={function(e){
                e.preventDefault()
                prop.LoadAll()
            }}>LoadAll</button>
            <ul>
                {/*then just call it in the ol element*/}
                {list}
            </ul>
        </nav>
    )
}

export default Sidebar