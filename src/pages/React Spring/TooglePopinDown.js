import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const TooglePopinDown = () => {
  const [animation, setAnimation] = useState(false)

  const [style, animate] = useSpring(() => ({
    reset: true,
    from: { marginTop: animation ? 50 : -500, opacity: animation ? 1 : 0 },
  }))

  const animateDiv = () => {
    if (!animation) animate({ marginTop: 50, opacity: 1, delay: 200 })
    if (animation) animate({ marginTop: -500, opacity: 0, delay: 300 })
    setAnimation(!animation)
  }

  const styles = {
    container: {
      width: "30vw",
      height: "30vh",
      background: "#a9a9a9",
      borderRadius: 20,
      position: "relative",
    },
    button: {
      background: "white",
      border: "none",
      borderRadius: 10,
      padding: 10,
      position: "absolute",
      left: "50%",
      bottom: "5vh",
      transform: "translateX(-50%)",
    },
    content: {
      width: "90%",
      margin: "auto",
      background: "white",
      textAlign: "center",
      borderRadius: 10,
      padding: 5,
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button onClick={animateDiv} style={styles.button}>
          {animation ? "Toogle animated Up" : "Toogle animated Down"}
        </button>
      </div>
      <animated.div style={style}>
        <div style={styles.content}>
          <p>Hey there ! React Spring is awesome.</p>
        </div>
      </animated.div>
    </div>
  )
}

export default TooglePopinDown
