function SearchBar({ username, setUsername, buscarUsuario }) {

  const handleKey = (e) => {

    if(e.key === "Enter"){
      buscarUsuario();
    }

  };

  return (

    <div className="search">

      <input
        type="text"
        placeholder="Digite o usuário do GitHub..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
      />

      <button onClick={buscarUsuario}>
        Buscar
      </button>

    </div>

  );

}

export default SearchBar;