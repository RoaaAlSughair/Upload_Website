import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Upload() {
  const [file, setFile] = useState({})
  const [message, setMessage] = useState('')
  const [active, setActive] = useState(false)
  const navigate = useNavigate()

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

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('pdf', file)
    axios.post(`http://localhost:3000/pdf`, formData).catch(err => {
      throw err
    })
  }

  const navigateTo = () => {
    navigate('/')
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
            <button
              onClick={e => {
                handleSubmit(e)
                navigateTo()
              }}>
              Submit
            </button>
          ) : (
            <button disabled type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
