import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
  const { loggedIn, login, logout, users, loading, error } =
    useContext(UserContext);

  return (
    <div className="profile">
      <h2>User Authentication</h2>

      {loggedIn ? (
        <>
          {loading ? (
            <p>Loading user data...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <h3>
              Welcome, {users.length > 0 ? users[0].name : "User"}!
            </h3>
          )}

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are currently logged out.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;