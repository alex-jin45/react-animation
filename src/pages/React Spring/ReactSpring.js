import React from "react"
import TooglePopinDown from "./TooglePopinDown"
import ToogleMenuMobileAnimation from "./ToogleMenuMobileAnimation"

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
        <ToogleMenuMobileAnimation />
      </div>
    </>
  )
}

export default ReactSpring
