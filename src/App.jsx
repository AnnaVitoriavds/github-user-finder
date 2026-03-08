import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const buscarUsuario = async () => {

    if(username === "") return;

    setLoading(true);

    try{

      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userRes.json();

      const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
      const repoData = await repoRes.json();

      setUser(userData);
      setRepos(repoData.slice(0,5));

    }catch(error){
      console.log(error);
    }

    setLoading(false);
  };

  return (

    <div className={darkMode ? "container dark" : "container light"}>

      <div className="topbar">

        <h1>🔎 GitHub Finder</h1>

        <button
          className="mode"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>

      <SearchBar
        username={username}
        setUsername={setUsername}
        buscarUsuario={buscarUsuario}
      />

      {loading && <div className="loader"></div>}

      {user && !loading && (
        <UserCard user={user} repos={repos} />
      )}

    </div>

  );
}

export default App;