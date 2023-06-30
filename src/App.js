import Content from "./Content";
import { Footer } from "./Footer";
import Header from "./Header";

//CSS dosyaları dogrudan ımport edılır export edılmesıne gerek yok.
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
