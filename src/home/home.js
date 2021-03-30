import { useState, useEffect } from "react";
import { TextField, Button } from "react-md";
import { Link } from "@reach/router";

import "./style.scss";

const Home = ({ tasksStorageKey }) => {
  const [nom, setNom] = useState("");
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("tasksStorageKey");
    setTasks(data ? JSON.parse(data) : []);
  }, []);

  const addtasks = () => {
    setTasks(tasks.includes(nom) ? tasks : [...tasks, { nom, description }]);
    setNom("");
    localStorage.setItem("tasksStorageKey", JSON.stringify(tasks));
  };

  const removetask = (nom) => {
    setTasks([...tasks.filter((name) => name.nom !== nom)]);
  };

  return (
    <>
      <div className="top-bar">
        <span className="logo">To Do List : </span>
        <Link className="btn danger sm" to="/logout">
          Deconnexion
        </Link>
      </div>

      <div className="taches">
        <div className="taches-tacheslist">
          <div className="title">Liste des Taches</div>
          {tasks.map((mb, index) => (
            <div className="item" key={index}>
              <div className="name">
                {" "}
                <b>{mb.nom} :</b>
              </div>
              <div className="description">
                <div>{mb.description}</div>
              </div>

              <Button
                className="button"
                primary
                flat
                onClick={() => removetask(mb.nom)}
              >
                Supprimer
              </Button>
            </div>
          ))}
        </div>
        <TextField
          value={nom}
          className="taches-textField"
          label="nom de la tache: "
          onChange={({ target }) => setNom(target.value)}
        />{" "}
        <TextField
          value={description}
          className="taches-textField"
          label="Description: "
          onChange={({ target }) => setDescription(target.value)}
        />
        <Button
          className="taches-addbtn"
          primary
          flat
          onClick={() => addtasks()}
        >
          Ajouter la tache
        </Button>
      </div>
    </>
  );
};
export default Home;
