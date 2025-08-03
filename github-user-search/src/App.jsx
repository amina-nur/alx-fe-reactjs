import React  from "react";
import Search from "./components/search";

function App (){
  return(
  <div style ={{ textAlign: "center", padding: '1rem', fontFamily: 'Arial'}}>
    <h1>Github User Search</h1>
    <p>Enter a username to see their profile information.</p>
    <Search />
  </div>
  );
}

export default App;