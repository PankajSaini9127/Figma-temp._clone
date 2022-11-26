 import React from 'react'
import { buyBook , buyPen} from './Redux/actions/action'
import {connect} from 'react-redux'


const mapStatetoProps = (state)=>{
    return{
        book : state.book,
        pen : state.pen
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    buybook: (value)=>{
        dispatch(buyBook(value))
    },
    buyPen : ()=>{
        dispatch(buyPen())
    }
    }
}



function Rdux(props) {
    const [value, setValue] = React.useState("")
   return (
    <>
        <h1>Redux </h1>
        <pre>
               Book : {props.book}
               pen : {props.pen}
        </pre>
        <button onClick={props.buybook}>buyBook</button>
        <hr/>
        <button onClick={props.buyPen}>buyPen</button>
        <hr/>
        <input type="text" value={value} onChange={e=>{setValue(e.target.value)}}/>
        <button onClick={()=>{props.buybook(value)}}>buy book</button>
        </>
   )
 }

// export default connect(mapStatetoProps,mapDispatchToProps)(Rdux) 
export default Rdux