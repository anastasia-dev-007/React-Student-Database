//Mini application which allows to manage a list of students

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Details from "./routes/Details";
import Edit from "./routes/Edit";

function App() {
  return (
    // Set up a React Router with different routes for Main, Details, and Edit components.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
