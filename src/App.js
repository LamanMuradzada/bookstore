import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Books from "./Pages/Books/Books";
import Contact from "./Pages/Contact/Contact";
import Novel from "./Books/Novel/Novel";
import Fantasy from "./Books/Fantasy/Fantasy";
import Detective from "./Books/Detective/Detective";
import Bestsellers from "./Books/Bestsellers/Bestsellers";
import BookDetails from "./BookDetails/BookDetails";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/books" element={<Books />}/>

        <Route path="/novel" element={<Novel />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/detective" element={<Detective />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<BookDetails/>} />
      </Routes>
    </>
  );
}

export default App;
