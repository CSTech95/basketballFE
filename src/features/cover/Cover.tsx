import React from "react"
import { useSpring, animated } from "@react-spring/web"

import coverImg from "../../images/ball-cover-1.jpg"

const Cover = () => {
  const springs = useSpring({
    from: { y: 100, x: 0, opacity: 0 },
    to: { x: -80, opacity: 0.8 },
    delay: 700,
    //reverse: true,
  })
  return (
    <div
      style={{ backgroundImage: `url(${coverImg})` }}
      className="h-[500px] bg-cover bg-local bg-[url(`../../images/ball-cover-1.jpg`)]"
    >
      <span className="bg-clip-text text-5xl ml-2 font-extrabold text-transparent bg-gradient-to-r from-amber-700 to-orange-700">
        NBA
      </span>
      <div className="invisible flex flex-row justify-end md:visible">
        <animated.div
          style={{
            width: 220,
            height: 320,
            background: "#191717",
            borderRadius: 8,
            ...springs,
          }}
        >
          <div className="text-center text-white text-xl">
            <p className="pt-4 px-4">Review the latest NBA Stats</p>
          </div>
        </animated.div>
      </div>
    </div>
  )
}

export default Cover
