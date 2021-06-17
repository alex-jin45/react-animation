import React from "react"
import TooglePopinDown from "./React Spring/TooglePopinDown"

const ReactSpring = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
  }

  return (
    <>
      <h1>React Spring</h1>
      <div style={styles.container}>
        <TooglePopinDown />
      </div>
    </>
  )
}

export default ReactSpring
