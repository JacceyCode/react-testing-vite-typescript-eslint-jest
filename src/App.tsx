import "./index.css";
// import { Application } from "./components/application/application";
// import { Skills } from "./components/skills/skills";
// import { Counter } from "./components/counter/counter";
import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./providers/app-providers";

function App() {
  // const skills = ["HTML", "CSS", "JavaScript", "Jest"];
  return (
    // <div className="App">
    //   {/* <Application /> */}
    //   {/* <Skills skills={skills} /> */}
    //   <Counter />
    // </div>
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
