import React from 'react'

const Backdrop = ( {show} )=> {
    return (
        <div class={`modal-backdrop fade ${show}`}></div>
    )
}

export default Backdrop;