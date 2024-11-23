export const NameList = () => {
    const names = ['a', 'b', 'c']
    return (
        <div>
            {
                // each child in a list should have a unique key prop!
                // key prop is used internally to construct the list of elements in the DOM
                // in more efficient way, it also prevents bugs when sorting or filtering
                names.map((name) => {
                    return <h3 key={name}>{name}</h3>
                })
            }
        </div>
    )
}