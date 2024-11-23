// import logo from './logo.svg';
import './App.css';
import './AppStyle.css'
// difference in how we import the css
import styles from './AppStyle.module.css' 

/*
  import with curly braces if we want to define the name of the component
  works only when the export is default, not named
*/
import { Greet } from './components/Greet'
import { Message } from './components/Message'
import { ClickHandler } from './components/ClickHandler'
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreetin';
import { NameList } from './components/NameList';
import { Stylesheet } from './components/Stylesheet';
import { Inline } from './components/Inline';
import { Form } from './components/Form';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

function App() {
  return (
    <div className="App">
      {/* we pass in properties - THEY ARE IMMUTABLE - cannot be modified 
      inside the component 
      we use STATES fo data that changes*/}

        {/* props */}
        <Greet name="Viet" />

        {/* children */}
        <Greet name="Kit">
            <p>This is Joe</p>
        </Greet>

        {/* state management */}
        <Message />

        {/* event handling */}
        <ClickHandler />

        {/* parent-child communication */}
        <ParentComponent/>

        {/* conditional rendering */}
        <UserGreeting/>

        {/* List rendering */}
        <NameList/>
        
        {/* Style sheets */}
        <Stylesheet/>
        {/* inline styles */}
        <Inline/>
        {/* CSS modules */}
        
        <h1 className='error'>Error</h1>
        {/* we access the class name using the variable */}
        <h1 className={styles.success}>Error</h1>

        {/* Forms */}
        <Form />

        {/* HTTP requests*/}
        {/* <PostList/> */}
        <PostForm />

        <PostList />

    </div>
  );
}

export default App;
