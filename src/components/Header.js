import './Header.css';
function Header(prop){

    var name=prop.name;
    var prompt;
    if(name===""){
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
            <button id="SignUp"name="SignIn" onClick={function(e){
                    e.preventDefault()
                    prop.SignUp()
                }}>SignUp</button>
                <form id="LogIn" onSubmit={function(e){
                    e.preventDefault()
                    prop.LogIn(e.target.email.value, e.target.pass.value)
                }}>
                    <input type="text" name= "email" placeholder="email"></input>
                    <input type="password" name="pass"></input>
                    <input type="submit" name="logIn" value="logIn"></input>
                </form>
        </div>
    )
}

export default Header