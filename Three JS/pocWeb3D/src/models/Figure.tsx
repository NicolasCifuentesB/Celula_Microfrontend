import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export function Figure(props: any) {
    const { nodes, materials } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf") as any;
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_duck.geometry}
                material={materials["White.026"]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_duckArmLeft.geometry}
                    material={materials["White.026"]}
                    position={[0.2, 0, -0.63]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_duckArmRight.geometry}
                    material={materials["White.026"]}
                    position={[-0.2, 0, -0.63]}
                />
                <group position={[0, 0, -0.7]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube1338.geometry}
                        material={materials["White.026"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube1338_1.geometry}
                        material={materials["Yellow.043"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube1338_2.geometry}
                        material={materials["Black.027"]}
                    />
                </group>
            </mesh>
        </group>
    );
}

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf");
