import { Scene } from "./components/scene/scene.tsx";
import { Form } from "./components/form/form.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div id="app">
      <aside className={"aside"}>
        <Form />
      </aside>
      <main className={"main"}>
        <Toaster
          toastOptions={{
            style: {
              background: "#242424",
              color: "rgba(255, 255, 255, 0.87)",
              border: "1px solid white",
            },
          }}
        />
        <Scene />
      </main>
    </div>
  );
}

export default App;
