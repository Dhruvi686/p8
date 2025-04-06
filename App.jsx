import React from "react";
import "./App.css";
import "./index.css";

function ProfileCard({ name, photo, bio }) {
  return (
    <div className="card mx-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={photo} alt="Profile" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{bio}</p>
        <a href="#" className="btn btn-primary">View Profile</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <ProfileCard 
          name="DHRUVI PATEL" 
          photo="data:image/jpeg”
          bio="I am currently pursuing a B.Tech degree in information technology"
        />
      </div>
    </div>
  );
}

export default App;
