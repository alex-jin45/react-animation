import React from "react"
import TooglePopinDown from "./TooglePopinDown"
import ToogleMenuMobileAnimation from "./ToogleMenuMobileAnimation"
// import Rotation from "./Rotation"
import ClickAnimation from "./ClickAnimation"

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
        <ClickAnimation />
      </div>
    </>
  )
}

export default ReactSpring
