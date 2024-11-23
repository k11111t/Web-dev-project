import { useState } from "react"

export const Form = () => {
    const [username, setUsername] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault() // to prevent page refresh
        alert(`Form data is ${username}`)
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <button type='submit'>Submit</button>
    </form>
}

// todo - select dropdown