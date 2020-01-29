import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ManageFriend = ({setFriendsData, selectedFriend, setSelectedFriend}) => {
  
  const handleAddFriend = e => {
    e.preventDefault();
    
    axiosWithAuth().post("/api/friends", { name: selectedFriend.name, age: selectedFriend.age, email: selectedFriend.email })
      .then(res => {
        setFriendsData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    setSelectedFriend({ name: "", age: "", email: "" });
  }

  const handleEditFriend = e => {
    e.preventDefault();
    
    axiosWithAuth().put("/api/friends/" + selectedFriend.id, selectedFriend)
      .then(res => {
        setFriendsData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    setSelectedFriend({ name: "", age: "", email: "" });
  }

  const handleDeleteFriend = e => {
    e.preventDefault();
    
    axiosWithAuth().delete("/api/friends/" + selectedFriend.id)
      .then(res => {
        setFriendsData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

      setSelectedFriend({ name: "", age: "", email: "" });
  }

  const handleChange = e => {
    setSelectedFriend({
      ...selectedFriend,
      [e.target.name]: e.target.value
    });
  }
  
  return (
    <form>
      <div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" 
            value={selectedFriend.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" name="age" id="age" 
            value={selectedFriend.age} onChange={handleChange} />
          </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" 
            value={selectedFriend.email} onChange={handleChange} />
        </div>
      </div>
      <button onClick={handleAddFriend}>Add Friend</button>
      <button onClick={handleEditFriend}>Edit Friend</button>
      <button onClick={handleDeleteFriend}>Delete Friend</button>
    </form>
  );
}

export default ManageFriend;