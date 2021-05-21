// Building the toggle component

import React, {useCallback, useEffect, useState} from 'react'
import {Switch} from '../switch'

const Toggle = ({onToggle}) => {
  const [isOn, setIsOn] = useState(false)

  const toggle = useCallback(() => {
    setIsOn((prev) => !prev)
  }, [])

  useEffect(() => {
    onToggle(isOn)
  }, [isOn, onToggle])

  return <Switch on={isOn} onClick={toggle} />
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
