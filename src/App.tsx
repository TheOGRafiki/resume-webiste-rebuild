import { useState } from 'react';
import './App.css';
import MyNavBar from './Components/MyNavBar';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <MyNavBar />
            <Home />
            <Resume />
            <Projects />
            <AboutMe />
        </div>
    );
}

export default App;
