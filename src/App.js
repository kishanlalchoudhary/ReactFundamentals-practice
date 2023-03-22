import "./App.css";
import Welcome from "./Components/Welcome";
import Clock from "./Components/Clock";
import { useState } from "react";
import LoginControl from "./Components/LoginControl";
import Blog from "./Components/Blog";
import Form from "./Components/Form";
import List from "./Components/List";
import Search from "./Components/Search";
import WelcomeDialog from "./Components/WelcomeDialog";

function App() {
  // function formatUser(user){
  //   return (user.firstname + " " + user.lastname);
  // }
  const userInfo = {
    firstname: "Kishanlal",
    lastname: "Choudhary",
  };
  // function getGreeting(user){
  //   if(user){
  //     return <h1>Hello, {formatUser(user)}</h1>
  //   }
  //   return <h1>Hello, Stranger!</h1>
  // }
  // const element = <h1>Hello, World and Welcome to React Course</h1>
  // const name = "Kishanlal Choudhary"

  const [flag, setFlag] = useState(true);
  const toggle = () => {
    console.log("Toggle clicked");
    setFlag(!flag);
  };

  const posts = [
    {
      id: 1,
      title: "Hello World",
      content: "Welcoming to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
    {
      id: 3,
      title: "Run App",
      content: "You can run React app with npm start command.",
    },
    {
      id: 4,
      title: "Build Components",
      content: "You can run React app with npm start command.",
    },
    {
      id: 5,
      title: "Define States",
      content: "You can run React app with npm start command.",
    },
    {
      id: 6,
      title: "React Hooks",
      content: "You can run React app with npm start command.",
    },
    {
      id: 7,
      title: "Forms Handling",
      content: "You can run React app with npm start command.",
    },
    {
      id: 8,
      title: "Exit",
      content: "You can run React app with npm start command.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const filterList = posts.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });

  return (
    // <div>
    //   <div>{element}</div>
    //   <div>{name}</div>
    //   <div>Hello, {formatUser(user)}</div>
    //   {getGreeting(user)}
    // </div>
    // <div>Hello World</div>
    // <div>
    //   <Welcome name="Kishanlal" user={userInfo} />
    //   <Welcome name="Abhishek" user={userInfo} />
    //   <Welcome name="Sunay" user={userInfo} />
    // </div>
    <div>
      {/* <button onClick={toggle}>Toggle clock Component</button> */}
      {/* {flag ? <Clock /> : "No clock Component"} */}
      {/* <LoginControl /> */}
      {/* <Blog posts={posts} /> */}
      {/* <Form /> */}
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <List list={filterList} />
      <WelcomeDialog />
    </div>
  );
}

export default App;
