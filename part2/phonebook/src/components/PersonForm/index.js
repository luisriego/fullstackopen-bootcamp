import React from 'react'

export const PersonForm = ({submitHandle, nameChange, numberChange}) => {
    return (
      <>
        <h3>add a new</h3>
        <form onSubmit={submitHandle}>
            <div>
                name: <input type="text" onChange={nameChange}/>
            </div>
            <div>
                number: <input type="text" onChange={numberChange}/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
      </>
    )
}
