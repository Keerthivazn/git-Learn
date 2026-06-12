import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  


    <div>
      <h2>First code in React</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, placeat.</p>
    </div>
    {/* jsx JSX stands for JavaScript XML.
     JSX allows us to write HTML in React.
     JSX makes it easier to write and add HTML in React.
 */}
    <h3>React is {3 + 2} times better with JSX.</h3>
    <input type="'text'" />
    <p>Value of PI is {multiple(1)}</p>

  </StrictMode>,
)

function Details({ name, age, location }) {
  return <h4>Hello {name}!,Your Location is {location}</h4>
}
function multiple(value){
  return value* 3.14;
}
export default Details