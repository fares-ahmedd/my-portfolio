import AboutMe from "./AboutMe";

function Home() {
  return (
    <section className="min-h-[calc(100vh-82px)] grid grid-cols-2 items-center gap-2">
      <AboutMe />
      <div>
        <p>Hey There </p>
      </div>
    </section>
  );
}

export default Home;
