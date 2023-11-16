import React from 'react'

export const Jokes = (props) => {
    console.log(props.upvotes)
    console.log(props.isPun)
  return (
    <>
    <div className='jokes'>
    {props.setup && <h2>Setup: {props.setup}</h2>}
    <h4>Punchline: {props.punchline}</h4>
    </div>
    <hr />
    </>
  )
}
