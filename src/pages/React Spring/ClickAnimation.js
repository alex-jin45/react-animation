import React, { useState } from "react"
import useMeasure from "react-use-measure"
import { useSpring, animated } from "@react-spring/web"

const ClickAnimation = () => {
  const [open, toggle] = useState(false)
  const [ref, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0, position: "absolute", top: 0, left: 0, height: "100%", background: "hotpink" })

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    main: {
      position: "relative",
      width: 200,
      height: 50,
      cursor: "pointer",
      borderRadius: 5,
      border: "2px solid #272727",
      overflow: "hidden",
    },
    fill: {},
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#272727",
    },
  }

  return (
    <div style={styles.container}>
      <div ref={ref} styles={styles.main} onClick={() => toggle(!open)}>
        <animated.div style={props} />
        <animated.div styles={styles.content}>{props.width.to((x) => x.toFixed(0))}</animated.div>
      </div>
    </div>
  )
}

export default ClickAnimation
