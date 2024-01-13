import { useSpring, animated } from "@react-spring/web"
import useWindowDimensions from "../../utility/useWindowDimensions"

export default function HomeBanner() {
  const { height, width } = useWindowDimensions()
  if (width == null) width = 0
  const springs = useSpring({
    from: { x: 0, opacity: 0 },
    to: { x: width * 0.3, opacity: 1 },
  })

  return (
    <animated.div
      style={{
        width: 300,
        height: 200,
        background: "#ff6d6d",
        borderRadius: 0,
        ...springs,
      }}
    >
      <div className="h-full grid content-center p-2">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          officiis nam atque magni velit odit consequatur tempore temporibus
          nobis cupiditate! Possimus aut cupiditate eum, sunt aperiam animi
          nostrum. Tempora, minima!
        </p>
      </div>
    </animated.div>
  )
}
