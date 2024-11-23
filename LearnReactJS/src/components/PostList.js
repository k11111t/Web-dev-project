import {useState, useEffect} from "react"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    // we pass in [] as 2nd argument - list of dependencies on which this effect depends on
    // we want the api call to happen once, hence we pass in []
    useEffect(() => {
        // returns a promise we need to resolve
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => {return <li key={post.id}>{post.title}</li>})
                }
            </ul>
        </div>
    )
}