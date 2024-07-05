import { useUser } from "../context/context.user";
import { useTheme } from "../context/context.theme";

const UserComponent = () => {
  const { state: userState, dispatch: userDispatch } = useUser();
  const { state: themeState, dispatch: themeDispatch } = useTheme();

  const login = () => {
    userDispatch({
      type: "SET_USER",
      payload: { name: "John Doe", email: "john@example.com" },
    });
  };
  const logout = () => {
    userDispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      {" "}
      <h1>User Component</h1>{" "}
      {userState.user ? (
        <div>
          {" "}
          <p>Name: {userState.user.name}</p>{" "}
          <p>Email: {userState.user.email}</p>{" "}
          <button onClick={logout}>Logout</button>{" "}
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}{" "}
    </div>
  );
};

export default UserComponent;
