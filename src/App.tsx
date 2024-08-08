import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <main className="container-layout mt-[82px]  rounded-xl bg-second-background ">
      <Header />
      <Home />
      <Skills />

      <Projects />
    </main>
  );
}

export default App;
