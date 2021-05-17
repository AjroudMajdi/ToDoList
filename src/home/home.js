import { useState } from "react";
import { TextField, Button } from "react-md";
import { Link } from "@reach/router";

import "./style.scss";

const Home = () => {
  const [nom, setNom] = useState("");
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");

  const addtasks = () => {
    setTasks(tasks.includes(nom) ? tasks : [...tasks, { nom, description }]);
    setNom("");
  };

  const removetask = (nom) => {
    setTasks([...tasks.filter((name) => name.nom !== nom)]);
  };

  return (
    <>
      <div className="home-page">
        <div className="top-bar">
          <span className="logo">ToDo</span>
          <Link className="btn danger sm" to="/login">
            Logout
          </Link>
        </div>

        <div className="invite-member-field">
          <TextField
            value={nom}
            className="invite-member-textField"
            label="nom de la tache "
            onChange={({ target }) => setNom(target.value)}
          />{" "}
          <TextField
            value={description}
            className="invite-member-textField"
            label="Description"
            onChange={({ target }) => setDescription(target.value)}
          />
          <Button primary flat onClick={() => addtasks()}>
            Ajouter la tache
          </Button>
        </div>
        <div className="emailList">
          {tasks.map((mb, index) => (
            <div className="emailList-item" key={index}>
              <div className="name"> {mb.nom}</div>
              <div className="information">
                <div>{mb.description}</div>
              </div>

              <Button icon onClick={() => removetask(mb.nom)}>
                Supprimer
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
