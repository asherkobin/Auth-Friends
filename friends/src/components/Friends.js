import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import ManageFriend from "./ManageFriend";
import { useHistory } from "react-router";

const Friends = () => {
  const [friendsData, setFriendsData] = useState();
  const routerHistory = useHistory();
  const [selectedFriend, setSelectedFriend] = useState({
    name: "",
    age: "",
    email: ""
  });
  
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        setFriendsData(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap"}}>
        {
          friendsData && friendsData.map(friendInfo => {
            return <Friend friendInfo={friendInfo} selectFriend={setSelectedFriend} key={friendInfo.id}
              isSelected={selectedFriend && selectedFriend.id === friendInfo.id} />
          })
        }
      </div>
      <hr />
      <ManageFriend setFriendsData={setFriendsData} selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />
      <hr />
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );

  function handleLogout() {
    localStorage.removeItem("USER_TOKEN");
    routerHistory.push("/login");
  }
}

export default Friends;