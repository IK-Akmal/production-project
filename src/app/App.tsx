import AppRouter from "./providers/router";
import { Navbar } from "widgets/Navbar";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
