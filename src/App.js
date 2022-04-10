import React, { useRef, useState, forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />
})

function App(props) {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  const onInputChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div className='p100'>
      <Input
        type='text'
        value={value}
        onChange={onInputChange}
        ref={inputRef}
      />
      <button type='submit' onClick={focus}>
        Focus
      </button>
    </div>
  )
}

export default App
