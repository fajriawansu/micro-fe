import React from 'react'
const Button = React.lazy(() => import('MicroFrontend/Button'))

export default function App() {
  return (
    <div>ShellApplication
        <Button buttonName={"click me"} />
    </div>
  )
}
