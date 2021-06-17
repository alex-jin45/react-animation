import React from "react"
import TooglePopin from "./React Spring/TooglePopin"

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
        <TooglePopin />
      </div>
    </>
  )
}

export default ReactSpring
