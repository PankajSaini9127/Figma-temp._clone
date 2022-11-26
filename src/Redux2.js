import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyBook ,buyPen} from './Redux/actions/action'

export default function Redux2() {
    const book = useSelector(state=>state.book.book)
    const pen = useSelector(state=>state.pen.pen)

    const dispatch = useDispatch()

  return (
    <>
     <h5>Books : {book}</h5>
     <h5>Pens : {pen}</h5>
    <button onClick={()=>{dispatch(buyBook())}}>buy book</button>
    <button onClick={()=>{dispatch(buyPen())}}>buy Pen</button>
    </>
  )
}
