import { Canvas } from "@react-three/fiber"
import { HomeScene } from "../scenes"

export const App = () => {
  return (
    <>
      <main className="app">
        <section className="hero">
          <h1>Web 3D Célula Frontend</h1>
          <h3>Por Fabián Rodríguez</h3>
        </section>
      </main>
      <Canvas className="canvas" shadows camera={{ position: [0, 30, 60], fov: 15 }}>
        <HomeScene></HomeScene>
      </Canvas>
    </>

  )
}
