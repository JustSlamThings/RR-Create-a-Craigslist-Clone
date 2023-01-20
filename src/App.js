// Import data

import Directory from "./Components/Directory";
import Gallery from "./Components/Gallery";
import Searchbar from "./Components/Searchbar";
import Sidebar from "./Components/Sidebar";

// Import components
// import './App.css';
// import './Components/Directory';
// import './Components/Gallery';
// // import './Components/Help';
// // import './postings';
// import './Components/Searchbar';
// import Searchbar from './Components/Searchbar';
// import './Components/Sidebar';

function App(){

const animal1="goldfish";
const animal2="hamster";


  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}

<Searchbar/>
<Directory/>
<Gallery/>
<Sidebar message={'Why so Serious'} pet = {animal1} />
<Sidebar message={'Hello World'} pet = {animal2} />


{/* App
Searchbar
Directory
Gallery
Posting
Sidebar
Help */}


      </div>
    </div>
  );
}

export default App;
