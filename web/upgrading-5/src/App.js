import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1>Aplikasi Kontak</h1>
      <Card />
    </main>
  );
}

export default App;
