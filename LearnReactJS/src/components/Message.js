import {useState} from 'react'

export const Message = (props) => {
    /* we destructure the useState
            it accepts a default value as its argument
       we can name the variables however we want
            in our case, setMessage is a function used to update the message variable
    */
    const [message, setMessage] = useState('Welcome visitor')
    return (
            <div>
                <h2>{message}</h2>
                <button onClick={() => setMessage('Thank you for subcsribing')}>Subscribe</button>
            </div>
        )
}