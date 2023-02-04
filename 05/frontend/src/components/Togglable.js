import { useState, useImperativeHandle, forwardRef } from "react";

const Togglable = forwardRef((props, ref) => {
  const [visibility, setVisibility] = useState(false)

  const hideWhenVisible = { display: visibility ? 'none' : '' }
  const showWhenVisible = { display: visibility ? '' : 'none'}

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

useImperativeHandle(ref, () => {
  return {
    toggleVisibility
  }
})
  return (
    <div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={() => setVisibility(false)}>cancel</button>
      </div>
      <div style={hideWhenVisible}>
        <button onClick={() => setVisibility(true)}>{props.buttonLabel}</button>
      </div>
    </div>
  )
})

export default Togglable