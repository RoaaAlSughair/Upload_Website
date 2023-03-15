import React, {useState} from 'react'
import {redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Upload() {
  const [file, setFile] = useState({})
  const [message, setMessage] = useState('')
  const [active, setActive] = useState(false)

  const validatePDF = file => {
    const validType = 'application/pdf'
    if (validType != file.type) {
      return false
    }
    return true
  }

  const handleDrop = e => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (validatePDF(file)) {
      setFile(file)
      setActive(true)
      setMessage('Done! Now it is the time to submit it')
    } else {
      setActive(false)
      setMessage('The only acceptable file type is PDF')
    }
  }

  const handleChange = e => {
    const file = e.target.files[0]
    if (validatePDF(file)) {
      setFile(file)
      setActive(true)
      setMessage('Done! Now it is the time to submit it')
    } else {
      setActive(false)
      setMessage('The only acceptable file type is PDF')
    }
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios
      .post(`http://localhost:3000/pdf`, formData)
      .then(() => {
        setMessage('Success!')
        redirect('/')
      })
      .catch(err => {
        throw err
      })
  }

  return (
    <div className="df flex-col w-100">
      <Link className="mb16" to="/">
        Back
      </Link>
      <div className="wrap tc df flex-col justify-center align-items-center">
        <h1>Upload PDF File Here</h1>
        <form className="df flex-col justify-center align-items-center">
          <div className="area">
            <input
              className="pointer"
              type="file"
              onChange={handleChange}
              onDrop={handleDrop}
            />
          </div>
          {message ? (
            <small>
              <p className="tc">{message}</p>
            </small>
          ) : null}
          {active ? (
            <button type="submit" onSubmit={handleSubmit}>
              Submit
            </button>
          ) : (
            <button disabled type="submit" onSubmit={handleSubmit}>
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
