import { OrbitControls, Environment, Stars, GizmoHelper, GizmoViewport, RoundedBox } from "@react-three/drei"
import { Suspense } from "react"
import { VideoPlane } from "../components/VideoPlane"
import { Figure } from "../models"

export const HomeScene = () => {

    return (
        <>
            {/* Gracias a DREI se puede trabajar el orbitcontrols */}
            <OrbitControls />
            <pointLight position={[10, 15, 15]} color="#D5FF3B" castShadow intensity={100} shadow-camera-near={0.1} shadow-camera-far={200} shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20} shadow-camera-width={1024} shadow-camera-height={1024} />

            <directionalLight position={[10, 15, -5]} color="#570c0c" castShadow intensity={5} shadow-camera-near={0.1} shadow-camera-far={200} shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20} shadow-camera-width={1024} shadow-camera-height={1024} />

            <Environment preset="city" />
            {/* <ambientLight /> */}
            {/*  <mesh position={[0, 1, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="#D80C0C" />
            </mesh>
            */}
            {/* Componente rotacional */}
            <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
                <GizmoViewport axisColors={['red', 'yellow', 'blue']} labelColor="black" />
            </GizmoHelper>

            <group position={[0, -3, 0]}>
                {/* Video */}
                <VideoPlane videourl="../../public/video.mp4" />
                <VideoPlane videourl="../../public/video.mp4" position={[0, 5, -0.51]} rotation-y={Math.PI} />

                {/* Documentación Three Js */}
                {/* Muro */}
                <mesh castShadow receiveShadow position={[0, 5, 0]}>
                    <boxGeometry args={[17, 10, 1]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.4} roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Base */}
                <mesh position={[0, -5, 0]}>
                    <cylinderGeometry args={[10, 10, 10, 64]} />
                    <meshStandardMaterial color="black" envMapIntensity={0.4} roughness={0} metalness={0} />
                </mesh>

                {/* Poligono */}
                <mesh position={[5, 1, 5]} castShadow>
                    <icosahedronGeometry />
                    <meshStandardMaterial color="#8e00f4" envMapIntensity={0.8} roughness={1} metalness={1} />
                </mesh>

                {/* Poligono */}
                <mesh receiveShadow castShadow rotation-x={-Math.PI / 2} position={[8, 1.1, 2]} scale={[2, 2, 2]}>
                    {/* Cuántas caras va a tener cada lado 3,3,3 */}
                    <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
                    <meshStandardMaterial color="#2d2d2d" envMapIntensity={0.4} roughness={0} metalness={0} wireframe />
                </mesh>
            </group>
            <Suspense>
                <Figure position={[4, -2.8, -3]} rotation-y={Math.PI / 0.31} scale={1.5} />
            </Suspense>

            <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={2}></Stars>
        </>
    )
}