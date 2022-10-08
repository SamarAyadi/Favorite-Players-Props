import React from "react";
import Card from "./Card";
import Players from "../players";
import Avatar from "./Avatar";

function createCard(player) {
  return (
    <Card
      key={player.id}
      id={player.id}
      name={player.name}
      img={player.imageURL}
      club={player.club}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">Favorite Players</h1>
      <Avatar image="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/278751804_139077381997224_5910582505045951044_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bUs3XZZ4uvEAX_JJ9wh&_nc_ht=scontent.ftun9-1.fna&oh=00_AT_GJbUaIFP-zIYWaOFs0d7leBpT7Ljj3jNu5Tev5EPB6w&oe=6346A875" />
      {Players.map(createCard)}
    </div>
  );
}

export default App;
