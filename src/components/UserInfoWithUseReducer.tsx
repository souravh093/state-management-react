import React from "react";

const UserInfoWithUseReducer = () => {
  return (
    <form>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        className="border-2 border-gray-500"
      />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="age"
        className="border-2 border-gray-500"
      />
      <input
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobby"
        className="border-2 border-gray-500"
      />
    </form>
  );
};

export default UserInfoWithUseReducer;
