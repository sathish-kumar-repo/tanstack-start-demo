import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="p-8">
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  )
}
