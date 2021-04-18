import './Header.css';
function Header(prop){

    var name=prop.name;
    var prompt;
    if(name==""){
        prompt = <h3>Please log in for full features</h3>
    }
    else{
        console.log("name:" + name)
        prompt = <h3>Welcome back {name}</h3>
    }

    return(
        <div id="HeaderBanner">
            <h1>Recipe Books Connected</h1>
            {prompt}
            <form id="LogIn"onSubmit={function(e){
                e.preventDefault()
                prop.LogIn(e.target.UserName.value, e.target.pass.value)
            }}>
                <input type="text" name= "UserName" placeholder="User Name"></input>
                <input type="password" name="pass"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Header