
import {useState} from 'react'
import { createStore, combineReducers} from 'redux'

 const initialStatebook = {
 book : 15
 }
 
 const initialStatepen = {
 pen : 15
 }
  

 //reducer 
 const bookreducer = (state=initialStatebook, action )=>
 {
  switch(action.type){
    case "CHANGE_BOOK" : return {
      book: state.book - 1
    }
    default : return state
  }
 }
 
 const penreducer = (state=initialStatepen, action )=>
 {
  switch(action.type){
    case "CHANGE_PEN" : return {
      book: state.pen - 1
    }
    default : return state
  }
 }

const reducer = combineReducers({
  pen : penreducer,
  book : bookreducer
})
 
const store = createStore(reducer)
console.log( "initial value",store.getState())
 store.subscribe(()=>{console.log("update state value" , store.getState())})

 store.dispatch({type : "CHANGE_BOOK"})
 store.dispatch({type : "CHANGE_PEN"})
 
function App() {

   const [newname, setnewname] = useState("Pankaj saini")
  const handleChange =(e)=>{
     setnewname(e.target.value)
  }
  return (
   <>
   <form >
    <input type="text" name="name"  onChange={handleChange} value={newname}/>
    <input type="submit" value="submit" />
   </form>
   </>
  );
}

export default App;
