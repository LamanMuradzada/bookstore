import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Books from "./Pages/Books/Books";
import Contact from "./Pages/Contact/Contact";
import Novel from "./Books/Novel/Novel";
import Fantasy from "./Books/Fantasy/Fantasy";
import Detective from "./Books/Detective/Detective";
import History from "./Books/History/History";
import BookDetails from "./BookDetails/BookDetails";
import SearchResult from "./SearchForm/SearchResult/SearchResult";
import Basket from "./Basket/Basket";

function App() {
  return (
    <div className="wrapper">
     
        <Navbar />
     
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/books" element={<Books />} />

        <Route path="/novel" element={<Novel />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/detective" element={<Detective />} />
        <Route path="/history" element={<History />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/book/:id" element={<BookDetails />} />

        <Route path="/result/:bookName" element={<SearchResult />} />

        <Route path="/basket" element={<Basket />}/>
      </Routes>

    </div>
  );
}

export default App;
