import React, { useState } from 'react';

import TeamList from './components/TeamList';
import Form from './components/Form';

const App = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    favGame: ''
  });
  const [team, setTeam] = useState([
    {
      name: "Chris",
      age: 24,
      favGame: "League of Legends"
    },
    {
      name: "Brandon",
      age: 20,
      favGame: "Binding of Isaac"
    },
    {
      name: "Adrian",
      age: 13,
      favGame: "Fortnite"
    },
    {
      name: "Kindel",
      age: 10,
      favGame: "Roblox"
    },
    {
      name: "Jesse",
      age: 2,
      favGame: "Dinosaurs VR"
    }
  ]);

  const handleInputChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  };
  const onFormSubmit = event => {
    event.preventDefault();
    setTeam([
      ...team,
      {
        name: formValues.name,
        age: formValues.age,
        favGame: formValues.favGame
      }
    ])

    setFormValues({
      name: '',
      age: '',
      favGame: ''
    })
  }

  return (
    <div>
      <header className="p-5 flex flex-col items-center">
        <Form formValues={formValues} handleInputChange={handleInputChange} onFormSubmit={onFormSubmit} />
        <TeamList team={team} />
      </header>
    </div>
  );
}

export default App;
