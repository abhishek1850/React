 
import { createRoot } from 'react-dom/client'
 
import App from './App.jsx'
import Movie from './compenents/Movie.jsx'

createRoot(document.getElementById('root')).render(
  <>
  
    <App />
    <Movie
    name ="Abhishek"
    age = {18}
    />


    <Movie
    name ="Abhi"
    age = {21}
    />

    <Movie
    name ="shek"
    age = {1}
    />
  </>
   
)
