import * as React from 'react'
import { Animated, StyleSheet, TextInput, View } from 'react-native'
import Svg, { Circle, G } from 'react-native-svg'
import colors from 'tailwindcss/colors'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export default function DonutChart({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 1000,
  color = colors.yellow[400],
  delay = 0,
  textColor,
  max = 100
}) {
  const animatedValue = React.useRef(new Animated.Value(0)).current
  const circleRef = React.useRef()
  const inputRef = React.useRef()
  const halfcircle = radius + strokeWidth
  const circleCircumference = 2 * Math.PI * radius
  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true
    }).start()
  }

  React.useEffect(() => {
    animation(percentage)

    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPercentage = (100 * v.value) / max
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercentage) / 100
        circleRef.current.setNativeProps({
          strokeDashoffset
        })
      }
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}%`
        })
      }
    })
    return () => {
      animatedValue.removeAllListeners()
    }
  }, [max, percentage])

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={` 0 0 ${halfcircle * 2} ${halfcircle * 2} `}
      >
        <G rotation="-90" origin={`${halfcircle} ,${halfcircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={0.2}
            fill="transparent"
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFill,
          { fontSize: radius / 2, color: textColor ?? color },
          { fontWeight: '900', textAlign: 'center' }
        ]}
      />
    </View>
  )
}
