import { UserProvider } from "./context.user";
import { ThemeProvider } from "./context.theme";

const ContextProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export default ContextProvider;
