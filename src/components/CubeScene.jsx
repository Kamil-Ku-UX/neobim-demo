import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'

function Cube({ color }) {
  return (
    <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
    </mesh>
  )
}

export function CubeScene({ color }) {
  return (
    <Canvas shadows camera={{ position: [4, 3, 5], fov: 45 }}>
      <color attach="background" args={['#f5f5f5']} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <hemisphereLight args={['#ffffff', '#d4d4d4', 0.6]} />

      <Cube color={color} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.15} />
      </mesh>
      <Grid
        args={[20, 20]}
        cellColor="#d4d4d4"
        sectionColor="#a3a3a3"
        fadeDistance={25}
        infiniteGrid
      />

      <OrbitControls
        makeDefault
        target={[0, 0.75, 0]}
        enableDamping
        maxPolarAngle={Math.PI / 2 - 0.05}
        minDistance={2}
        maxDistance={20}
      />
    </Canvas>
  )
}
