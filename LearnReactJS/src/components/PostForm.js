import { useState } from "react";

export const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (event) => {
        event.preventDefault() // prevent font submission and page refresh
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: userId,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type='text' placeholder='UserId' value={userId} onChange={(event) => setUserId(event.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='Body' value={body} onChange={(event) => setBody(event.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}