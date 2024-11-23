export const ClickHandler = () => {

    const clickHandler = (event, count = 1) => {
        console.log('Button Clicked', count, event)
    }
    return (
        <div>
            {/* DO NOT ADD PARANTHESES - or the function will get called when rendered */}
            <button onClick={clickHandler}>Click</button>
            {/* this is how we pass in other parameters in the click handler */}
            <button onClick={(event) => clickHandler(event, 3)}>Click 3</button>
        </div>
    )
}