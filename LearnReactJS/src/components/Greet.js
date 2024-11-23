/* we call this type of export named export when importing the component 
    into another file, it has to use this exact name of the component */

/* props - contain the parameters we pass in the component e.g. in our 
    case we have a parameter name, we access it via the props */
export const Greet = ({name, children}) => {
    /* when we return, we need to wrap the entire result in a single element */
    return (
        <div>
            <h3> Oi {name} </h3>
            {/* we dont know what could be in the children, so we just return in
                these are defined between the opening and closing tag <>children</> */}
            {children}
        </div>
        
    )
}

/* if we export the component like this, we can name the component 
    however we want in the file we import it to */
//export default Greet