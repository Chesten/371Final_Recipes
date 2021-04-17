function Sidebar(prop){
    //this will eventually get modified heavily, just a template for 
        //prop handling 
        //call prop.<variable> and story it if you want

    var data = prop.data;
    //this is a handy trick for creating lists, just use array
    var list = []
    var i=0
 
    //populate array with <li> elements for each item in data
    while(i<data.length){
        list.push(<li key = {data[i].UID}>
            {data[i].name} UID: {data[i].UID}
        </li>)
        i++
    }

    return(
        <nav>
            <p>temp nav</p>
            <form onSubmit ={function(e){
                e.preventDefault()
                prop.Search(e.target.SearchTerm.value)
            }}>
                <input type = "text" name="SearchTerm" placeholder="Search Recipe"></input>
                <input type = "submit"></input>
            </form>
            <ol>
                {/*then just call it in the ol element*/}
                {list}
            </ol>
        </nav>
    )
}

export default Sidebar