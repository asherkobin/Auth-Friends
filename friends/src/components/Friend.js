import React from "react";

const Friend = ({friendInfo, selectFriend, isSelected}) => {
  return (
    <div onClick={() => selectFriend(friendInfo)} style={{ border: isSelected ? "2px solid blue" : "1px solid blue", margin: "5px", padding: "5px", cursor: "pointer" }}>
      <div>Name: {friendInfo.name}</div>
      <div>Age: {friendInfo.age}</div>
      <div>Email: {friendInfo.email}</div>
    </div>
  );
}

export default Friend;