import { useState } from 'react'
import { CubeScene } from '@/components/CubeScene'
import { ControlPanel } from '@/components/ControlPanel'

function App() {
  const [hue, setHue] = useState(217)
  const color = `hsl(${hue}, 90%, 60%)`

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <main className="relative min-w-0 flex-1">
        <CubeScene color={color} />
      </main>
      <aside className="w-80 shrink-0">
        <ControlPanel color={color} hue={hue} onHueChange={setHue} />
      </aside>
    </div>
  )
}

export default App
