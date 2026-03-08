import { useEffect, useState } from "react";
import LanguageChart from "./LanguageChart";

function UserCard({ user }) {

  const [repos, setRepos] = useState([]);

  useEffect(() => {

    async function buscarRepos() {

      const resposta = await fetch(user.repos_url);
      const dados = await resposta.json();

      setRepos(dados.slice(0,5));

    }

    buscarRepos();

  }, [user]);

  return (

    <div className="card">

      <img src={user.avatar_url} alt="avatar"/>

      <h2>{user.name || user.login}</h2>

      <p className="bio">{user.bio}</p>

      <div className="stats">

        <span>👥 {user.followers} seguidores</span>
        <span>📦 {user.public_repos} repos</span>

      </div>

      <a 
        href={user.html_url} 
        target="_blank" 
        rel="noreferrer"
      >
        Ver perfil
      </a>

      <h3>⭐ Últimos repositórios</h3>

      <ul className="repos">

        {repos.map(repo => (

          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
          </li>

        ))}

      </ul>

      {/* gráfico de linguagens */}

      <LanguageChart repos={repos} />

    </div>

  );

}

export default UserCard;