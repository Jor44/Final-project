import { Route, Routes } from "react-router";
import { Landing } from "./pages/landing/landing";
import { Login } from "./pages/login/login";
import { Users } from "./pages/users/users";
import { UserDetails } from "./pages/user-details/user-details";
import { useEffect, useState } from "react";
import { WithoutUI } from "./pages/without-ui/without-ui";
import axios from "axios";


function App() {
  const [list, setList] = useState([
    { com: '', name: 'Marc-André ter Stegen', year: 1992, position: 'Goalkeeper', number: 1, id: Math.random() },
    { com: '', name: 'Ronald Araujo', year: 1999, position: 'Defender', number: 4, id: Math.random() },
    { com: '', name: 'Jules Koundé', year: 1998, position: 'Defender', number: 23, id: Math.random() },
    { com: '', name: 'Marcos Alonso', year: 1990, position: 'Defender', number: 17, id: Math.random() },
    { com: '', name: 'Jordi Alba', year: 1989, position: 'Defender', number: 18, id: Math.random() },
    { com: '', name: 'Sergio Busquets', year: 1988, position: 'Midfielder', number: 5, id: Math.random() },
    { com: '', name: 'Sergi Roberto', year: 1992, position: 'Midfielder', number: 20, id: Math.random() },
    { com: '', name: 'Gavi', year: 2004, position: 'Midfielder', number: 30, id: Math.random() },
    { com: '', name: 'Robert Lewandowski', year: 1988, position: 'Forward', number: 9, id: Math.random() },
    { com: '', name: 'Ansu Fati', year: 2002, position: 'Forward', number: 10, id: Math.random() },
    { com: '', name: 'Ousmane Dembélé', year: 1997, position: 'Forward', number: 7, id: Math.random() },
  ]);

  useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/users").then(response => {
      console.log(response.data)
    })
      .catch(error => {
        console.log(error(error))
      })
  }, [])

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/users"} element={<Users />} />
        <Route path={"/user-details/:number"} element={<UserDetails list={list} />} />
        <Route path={"/no-ui"} element={<WithoutUI />} />
        <Route path={'*'} element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
