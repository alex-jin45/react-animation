import React from "react"
import { useSpring, animated } from "@react-spring/core"

const Rotate = () => {
  const styles = {
    container: {
      width: "30vw",
      height: "30vh",
      background: "#F0F0F0",
      borderRadius: 20,
      position: "relative",
    },
  }

  return <div style={styles.container}></div>
}

export default Rotate
