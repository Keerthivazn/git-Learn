function Navbar(){
    const alertMsg=() => {
        alert("Welcome to React JSX");
    }
    const mystyles={
        fontSize : "20px",  // Style properties are written in camelCase, e.g. fontSize, instead of font-size.
        backgroundColor : "pink",
        color : "white"
    }
    
    return (
        <div style={mystyles}> 
             <h2>First code in React</h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, placeat.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate cumque quibusdam ducimus consequatur totam laudantium est, illum reiciendis modi?</p>
        <button onClick={alertMsg}>Click Here</button>
        
        </div>
       
    )
}
export default Navbar