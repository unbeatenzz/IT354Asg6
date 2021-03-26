import './App.css';
import Projects from "./components/Projects"
import Students from "./components/Students"
import { useState } from "react"

function App() {
  const [students,setStudents] = useState(
    {
      id: 1,
      sname: "Yubai Zhang",
      smajor: "Information system",
      sinterests: "PHP, Java, C++ and all programming frameworks",
    },
  )

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "PHP Laravel API",
      time: "February 20, 2021",
    },
    {
        id: 2,
        name: "Python Django Web application",
        time: "March 20, 2021",
      },
      {
        id: 3,
        name: "Angular front end",
        time: "June 20, 2021",
      },

])

const deleteProject = (id) =>{
  setProjects(projects.filter((project) => project.id != id))
}


  return (
    <div class="container-fluid">
      <div className="container">
        <div class="row">
          
          <div class="col">
          <div class="border m-2 p-3">
          <h2 class="bg-light">{students.sname}</h2>
            <h5>{students.smajor}</h5>
            <p>{students.sinterests}</p>
          </div>
          <div class="border m-2 p-2">
            <h4>Projects</h4>
            {projects.length > 0 ?
            (<Projects projects={projects} onDelete={deleteProject} />) : ("No Projects to show")}
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
