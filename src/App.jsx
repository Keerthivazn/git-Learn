import './App.css'
import Herosection from './Herosection'
import Navbar from './Navbar'
import Footer from './Footer'
import Details from './main';
import { useState,useEffect,useRef ,useContext, useMemo, useCallback, useReducer} from 'react';
import { createContext } from 'react';
import { useFormState } from 'react-dom';
import List from './List';

const fruitlist = ['apple', 'banana', 'cherry'];
const users = [
  { id: 1, name: "Keerthi", age: 27 },
  { id: 2, name: "madhan", age: 28 },
  { id: 3, name: "Mani", age: 25 }
];

function App() {
  //  Pass Props from Component to Component
  function Car(props) {
    return (
      <h3>I am having {props.brand}</h3>
    )
  }

  function Garage() {
    return (
      <>

        <Car brand="Mahindra" />
        <Car />
      </>
    )
  }
  // Pass Multiple Properties
  function Mycar(details) {
    return (
      <h3>I am a {details.color} {details.brand} {details.model} </h3>
    )
  }
  // Object Props   Array Props
  let x = [1990, 1999, 2000, 2001];
  let y = { name: "Suzuki MAX 100", age: 32 };

  function Person(bike) {
    return (
      <>
        <p>My Favourite bike is {bike.info.name} and it is {bike.info.age} years Old.</p>
        <p>It was launched in {bike.years[0]} as a indian make tied up with TVS</p>
      </>
    )
  }
  // Destructuring Props
  function Bike(props) {
    const { year, model, ...rest } = props;
    return (
      <p>My Suzuki model is  {rest.brand} {model}</p>
    )
  }
  // Props Children
  // In React, you can send the content between the opening and closing tags of a component, to another component.
  // This can be accessed in the other component using the props.children property.

  function Son(props) {
    return (
      <div style={{ background: "lightgreen" }}>
        <h3>Son</h3>
        <div>{props.children}</div>
      </div>
    )
  }

  function Daughter(props) {
    return (
      <div style={{ background: "skyblue" }}>
        <h3>Daughter</h3>
        <div>{props.children}</div>
      </div>
    )
  }

  function Parent() {
    return (
      <>
        <Son>
          <p>This is written in parent component but it is displayed as son componennt</p>
        </Son>
        <Daughter>
          <p>This is also written in parent component but it is dispalyed as daughter component</p>
        </Daughter>
      </>
    )
  }

// Just like HTML DOM events, React can perform actions based on user events.
// React has the same events as HTML: click, change, mouseover etc.
// React event handlers are written inside curly braces:
// onClick={shoot}  instead of onclick="shoot()".
  function Football() {
    const shoot = () => {
       alert("Superb shot!")
    }
    return (     
        <button onClick={shoot}>Take a shot</button>
  
    )
  }
// Passing Arguments
// To pass an argument to an event handler, use an arrow function.
  function Soccer(){
    const goal= (a) => {
      alert(a);
    }
    return (
      <button onClick={() => goal("Bicycle shot!")}>Goal</button>
    )
  }

// if Statement
// We can use the if JavaScript operator to decide which component to render.
function Missedgoal(){
  return (
    <h3   >MISSED GOAL!</h3>
  )
}

function Madegoal(){
  return (
    <h3>GOAL !!!</h3>
  )
}

function Goal(props){
  const isGoal=props.isGoal;
  if(isGoal){
    return <Madegoal/>
  }
  return <Missedgoal/>
}

function Goal1(props){
  const isGoal=props.isGoal;
  return (
    <> 
    {isGoal ? <Madegoal/> : <Missedgoal/>}
    </>
  )
}

function Goal2(props){
  return (
    <> 
    {props.brand && <h4>My bike is {props.brand}</h4> }
    </>
  )
}

function Fruits(){
  const fruits =["Avacado","Grapes","Mango"];

  return (
    <ul>
      {fruits.map((fruits)=> <li>{fruits}</li>)}
    </ul>
  )
}

function Mycars(){
  const cars =["BMW","AUDI","VOLVO"];
  return (
    <ul>
       {cars.map((car,index) => <li key={index}>{car}</li>)}
    </ul>
  )
}
// In React, the value of the form element is kept in the component's state property and updated only with the setState() function.
// In other words; React provides a way to manage form data through component state, leading to what are known as "controlled components."
function Myform(){
  return (
    <form>
      <label >Enter your name : 
        <input type="text" />
      </label>
    </form>
  )
}

function Myform1(){
  const [name,setName]= useState("");

  return (
    <form>
      <label>Emter your name :
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
        <p>Current value : {name}</p>
      </label>
    </form>
  )
}

function Formsubmit(){
  const [car,setCar] = useState("");

  function handlechange(e){
    setCar(e.target.value) ;
  }
  function handlesubmit(e){
    e.preventDefault();
    alert(car);
  }
  return (
  <form onSubmit={handlesubmit}>
    <label >Carname :
      <input type="text" value={car} onChange={handlechange}/>
    </label>
    <input type="submit" />
  </form>
  )
}

// In React the value of a textarea is placed in a value attribute, just like with the input element.
function Textareareact(){
  const [content,setContent] = useState("");

  return (
    <form> 
      <label >Enter your message : 
        <textarea value={content}  onChange={(e) => {setContent(e.target.value)}}/>
        <p>Current value :{content}</p>
      </label>
    </form>
  )
}

// In React, the selected value is defined with a value attribute on the select tag:
function Select(){
  const [option,setOption] = useState("Quanto C4");
  return (
    <form>
      <select value={option} onChange={(e) => {setOption(e.target.value)}} >
      <option value ="XUV 700">XUV 700</option>
      <option value ="Scorpio classic">Scorpio classic</option>
      <option value ="XUV 300">XUV 300</option>
      <option value ="Quanto C4">Quanto C4</option>
      </select>
    </form>
  )
}

// . Using a single useState call with an object to hold all form field values.
function Multipleinputs(){
  const [inputs,setInputs] = useState({firstname : "Keerthivasan", lastname :"V"});

  function handlechange(e){
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name] : value}))
  }
  return (
    <form>
      <label >Firstname :
        <input type="text" name="firstname" value={inputs.firstname} onChange={handlechange}/>
      </label>
      <label >Lastname :
        <input type="text" name="lastname" value={inputs.lastname} onChange={handlechange}/>
      </label>
      <p>Current value : {inputs.firstname} . {inputs.lastname}</p>
    </form>
  )
}

function Checkbox(){
  const [inputs, setInputs] = useState({});

  const handlechange =(e) =>{
    const target =e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setInputs((values) => ({...values,[name] : value}));
  }

  const handlesubmit =(event) => {
    let fillings="";
    if(inputs.tomato){
      fillings += "tomato";
    }
    if(inputs.onion){
      if(inputs.tomato)fillings += " and ";
      fillings +="onion" ;
    }
    if(fillings === "" )fillings += "no fillings";
    alert(`${inputs.firstname} wants a burger with ${fillings} `);
    event.preventDefault();
  }

  return (
    <form onSubmit={handlesubmit}>
      <label >Enter your name : 
        <input type="text" name="firstname" value={inputs.firstname} onChange={handlechange}  />
      </label>

      <label >Tomato
        <input type="checkbox" name="tomato" value={inputs.tomato} onChange={handlechange} />
      </label>

      <label >Onion
        <input type="checkbox" name ="onion" value={inputs.onion } onChange={handlechange} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

function Radiobutton(){
  const [selectedfruit,setSelectedfruit] = useState("Avacado");

  const handlechange = (e) => {
    setSelectedfruit(e.target.value)
  }

  const handlesubmit =(event) => {
    alert(`Your Fav fruits is ${selectedfruit}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handlesubmit}>
      <label >Apple
        <input type="radio" name="fruit" onChange={handlechange}  value="Apple" checked={selectedfruit === "Apple"} />
      </label>
      <label >Banana
        <input type="radio" name="fruit" onChange={handlechange} value="Banana" checked={selectedfruit === "Banana"}/>
      </label>
      <label >Avacado
        <input type="radio" name="fruit" onChange={handlechange} value="Avacado" checked={selectedfruit === "Avacado"}/>
      </label>
      <button type="submit">Submit</button>
    </form>

  )
}


// Hooks are functions that let you use React features like state and lifecycle behavior inside function components.
//  Hooks allow functions to have access to state and other React features without using classes.
// They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.
// Hooks are functions that let you "hook into" React state and lifecycle features from functional components.
// We use useState because normal variables do not make React update the UI when their values change.
function Favcolor(){
  const [color, setColor]= useState("white");
// Notice that again, we are destructuring the returned values from useState.
// The first value, color, is our current state.
// The second value, setColor, is the function that is used to update our state.
// useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
  return (
    <> 
    <h4>This is {color} car</h4>
    <button onClick={() => setColor("blue")}>Change to blue</button>
    <button onClick={() => setColor("pink")}>Change to pink</button>
    <button onClick={() => setColor("black")}>Change to black</button>
    <button onClick={() => setColor("peach")}>Change to peach</button>
    </>

// setCount("blue") updates the state.
// React notices the state change.
// React re-renders the component.(with normal variable it cannot be renrendered)
// The UI updates automatically
  );
}

// useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)

  function Timer(){
    const [count, setCount]= useState(0);

    useEffect(() => {setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000);
  });
  return <h4>it rendered {count} times</h4>
  }


function Timer1(){
    const [count1, setCount]= useState(0);

    useEffect(() => {setTimeout(() => {
      setCount((c) => c + 1)
    }, 1000);
  },[]);
 
  
  return <h4>it rendered {count1} times</h4>
  }   

  function Effect(){
    const [num,setNum] = useState(10);
    useEffect(() => {setNum(100)
      console.log("from useEffect");
      return() => {
        setNum(10)
        console.log("memory cleared");
        
      }
    },[])
   
    return (
      <>
      <h5>{num}</h5>
      <button onClick={() => setNum((num) => num + 1)}>
        Add
      </button>
      </>
    )
  }
 
  // useRef 
  // useState → "Changing this should update the screen."
// useRef → "I just need to remember or access something; no UI update needed."
// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).
// It's like doing this: const count = {current: 0}. We can access the count by using count.current.
  function Refhook(){
    const [input,setInput] = useState("");
    const count = useRef(0);


    useEffect(() => {
      count.current = count.current + 1;
    })
    return (
      <>
      <input type="text" value = {input} onChange={(e) => setInput(e.target.value) } />
      <p>Render count : {count.current}</p>
      </>
    )

  }

// Accessing DOM Elements
  function Refhook1(){
   const inputElement = useRef();

   const focusInput = () => {
    inputElement.current.focus();
   }

   return (
    <>
    <input type="text" ref={inputElement} />
    <button onClick={focusInput}>Focus Input</button>
    </>
   )
  }

// Tracking State Changes
  function Refhook2(){
    const [input,setInput] =useState("");
    const previousinput = useRef("");

    useEffect(() => {
      previousinput.current=input
    },[input])

    return (
      <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <p>Current value : {input}</p>
      <p>Previous value : {previousinput.current}</p>
      </>
      
    )
  }

  //useContext
  // we will need to pass the state as "props" through each nested component. This is called "prop drilling".
  //Even though component 2 did not need the state, it had to pass the state along so that it could reach component 3.
  function Component1(){
    const [name,setName] = useState("Without usecontext");

    return (
      <> 
      <h3> {name}</h3>
      <Component2 name={name}/>
      </>
    )
  }

  function Component2({name}){
    return (
      <>
      <h3>Component 2</h3>
      <Component3 name={name}/>
      </>
    )
  }

  function Component3({name}){
    return (
      <>
      <h3>Componenet 3</h3>
      <Component4 name={name} />
      </>
    )
  }

  function Component4({name}){
    return (
      <>
       <h3>Componenet 4</h3>
      <h3> {name} again</h3>
      </>
    )

  }

  //The solution is to create context.
  const Usercontext = createContext();

function Context1(){
  const [name,setName] = useState("useContext");
  return (
    <Usercontext.Provider value ={name}>
    <h3>Welcome to {name}</h3>
    <Context2/>
    </Usercontext.Provider>
  )
}

function Context2(){
  return (
    <>
    <h3>Context 2</h3>
    <Context3/>
    </>
  )
}

function Context3(){
  return (
    <>
    <h3>Context 3</h3>
    <Context4/>
    </>
  )
}

function Context4(){
const user = useContext(Usercontext);
  return (
    <>
    <h3>Context 4</h3>
      <h3>Welcome to {user} again</h3>
    </>
  )
}

// useMemo Hook returns a memoized value.
// Think of memoization as caching a value so that it does not need to be recalculated.
// useMemo Hook only runs when one of its dependencies update.
// useMemo and useCallback Hooks are similar:
// useMemo returns a memoized value.
// useCallback returns a memoized function.
function Memo(){
  const [number,setNumber] = useState(0);
  const [counter,setCounter] =useState(0);

  function cubenum(num){
    console.log("Calculation done!");
    return Math.pow(num,3);
  }
  const result =cubenum(number);
  return (
    <>
    <input type="number" onChange={(e) => (setNumber(e.target.value))} value={number} />
    <p>Cube of the number is {result}</p>
    <button onClick={() => (setCounter(counter + 1))}>Counter ++</button>
    <h3>Counter : {counter}</h3>
    </>
  )
}

// Without useMemo : Every time count changes, the component re-renders and squarenumber() runs again.

// With useMemo : squarenumber() only runs when number changes.+
// useMemo memoizes a computed value and recalculates it only when its dependencies change. 
// It is mainly used to optimize performance by avoiding expensive calculations on every render.+
// Use useMemo when:
// ✅ Filtering large lists
// ✅ Sorting large datasets
// ✅ Complex calculations
// ✅ Dashboard statistics
// ✅ Expensive data transformations


function Memo1(){
  const [number,setNumber] = useState(0);
  const [count,setCount] = useState(0);

  function squarenumber(num){
    console.log("done");
    return Math.pow(num,2);
  }
  const result = useMemo(() => {return squarenumber(number)},[number]);
  return (
    <>
    <input type="number" onChange={(e) => setNumber(e.target.value)}  value={number}/>
    <p>Square of the number is : {result}</p>
    <button onClick={() => setCount(count +1)}>Count increment</button>
    <p>Count : {count}</p>
    </>
  )
}

function Memo2(){
  const [count,setCount] =useState(0);
  const [todo,setTodo] =useState([]);
  const calculation=useMemo(() => expensivecalculation(count),[count]);

return(
  <>
  {todo.map((todo,index)=> {return <p key={index}>{todo}</p>})}
  <button onClick={() => setTodo((t) => [...t,"New Todo"])}>Add todo</button>
  Count : {count}
  <button onClick={()=> setCount((c) => c +1)}>+</button>
  </>
)
   function expensivecalculation(num){
    console.log("Calculating...");
    for (let i = 0; i < 100000000; i++) {
      num +=1;   
    }
    return num;
   }
} 
        
// useCallback Hook
// useCallback Hook is used to memoize a callback function.
// Memoizing a function means caching the result of a function so that it does not need to be recalculated.
// The useCallback function only re-executes when one of its dependencies changes value.
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// useCallback Hook accepts two arguments.
// useCallback(callback, dependencies)
// callback: The function that you want to memoize.
// dependencies: An array of dependencies for the callback function. The memoized callback will only change if one of these dependencies has changed.
function Callback(){
  const [number,setNumber] =useState(0);
  const [dark,setDark] = useState(false);

  const getItems = useCallback( () => {
    return [number +1 ,number +2 ,number +3];
    },[number]);

  const theme = {
  backgroundColor : dark ? "black" : "white",
  color : dark ? "white" : "black"
}

return (
  <div style={theme}>
      <input type="number" value={number} onChange={(e) => {setNumber(parseInt(e.target.value))}} />
      <button  onClick={() => setDark(curr => !curr)}>Toggle theme</button>
      <List getItems={getItems}/>
  </div>
)
}

function reducerFunction(state,action){
  switch (action.type) {
    case "increment":
      return state + 1;
   case "decrement":
      return state - 1;
    default:
      return state;
  }
}
function Reducerhook(){
  const [count,dispatch] = useReducer(reducerFunction ,0);
  return (
    <>
    <button onClick={() => {dispatch({type : "decrement"})}}>Decrement</button>
    <h3>Count : {count}</h3>
    <button onClick={() => {dispatch({type : "increment"})}}>Decrement</button>

    </>
  )
}

function Home(){
  return <h1>Home page</h1>
}

function About(){
  return <h1>About page</h1>
}

function Contact(){
  return <h1>Contact page</h1>
}

function Router(){
  return (
    <BrowserRouter>
    <link rel="stylesheet" href="" />
    </BrowserRouter>
  )
}



  return (
    <>

      <Navbar />
      <Herosection /> 
      <Footer />
      <Garage />
      <Mycar model="Quanto" color="red" brand="Mahindra" />
      <Person years={x} info={y} />
      <Bike brand="Suzuki" model="Max R 100" year={1994} />
      <Parent />
      <Football />
      <Soccer/>
      <Goal isGoal={false}/>
      <Goal1 isGoal={true}/>
        <Goal2 brand="MaxR 100"/>
      <Favcolor/>
      <Fruits/>
      <Myform/>
      <Myform1/>
      <Formsubmit/>
      <Textareareact/>
      <Select/>
      <Multipleinputs/>
      <Checkbox/>
      <Radiobutton/>
      
      
           <Mycars/>
      <Timer/>

 <Timer1/>
 <Effect/>
<Refhook/>
<Refhook1/>
<Refhook2/>
<Component1/>
<Context1/>
<Memo/>
<Memo1/>
<Memo2/>
<Callback/>
<Reducerhook/>





      <ul>
        {fruitlist.map(nameoffruit =><li key={nameoffruit}>{nameoffruit}</li>)}
      </ul>
      <ul>
        {users.map(user =>
          <li key={user.id}>{user.name} is {user.age} years old</li>
        )}
      </ul>


    </>
  );
};




export default App
















