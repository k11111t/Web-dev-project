// export const UserGreeting = () => {
//     const isLoggedIn = false;
//     // ternary operator:   condition ? result_true : result_false
//     return <div>Welcome {isLoggedIn ? 'Kit' : 'Guest'}</div>
// }


export const UserGreeting = () => {
    const isLoggedIn = true
    // short circuit operator - special case of ternary operator, where we return nothing if its false
    return <div>Welcome {isLoggedIn && 'Kit'}</div>
}
