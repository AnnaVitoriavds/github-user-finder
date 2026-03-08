import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function LanguageChart({ repos }) {

  const languages = {};

  repos.forEach(repo => {

    if(repo.language){
      languages[repo.language] =
        (languages[repo.language] || 0) + 1;
    }

  });

  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        data: Object.values(languages),
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6"
        ]
      }
    ]
  };

  return (

    <div style={{marginTop:"30px"}}>

      <h3>📊 Linguagens</h3>

      <Pie data={data} />

    </div>

  );

}

export default LanguageChart;