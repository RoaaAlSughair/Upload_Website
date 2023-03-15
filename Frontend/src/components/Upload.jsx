import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Upload() {
  const [file, setFile] = useState({})
  const [message, setMessage] = useState("")

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
      // Enable Submit button
      console.log('This is a pdf file')
      setFile(file)
      setMessage("")
    } else {
      // Disable Submit button and show an error message for the user
      console.log('Not pdf')
      setMessage("The only acceptable file type is PDF")
    }
  }

  const handleChange = e => {
    const file = e.target.files[0]
    if (validatePDF(file)) {
      // Enable Submit button
      console.log('This is a pdf file')
      setFile(file)
      setMessage("")
    } else {
      // Disable Submit button and show an error message for the user
      console.log('Not pdf')
      setMessage("The only acceptable file type is PDF")
    }
  }

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post(`http://localhost:3000/pdf`, formData)
      .then(() => {
        console.log("Success")
        setMessage("Success!")
      })
      .catch(err => {
        throw err
      })
  }

  return (
    <div className="ba-1px df flex-col w-100">
      <Link to="/">Back</Link>
      <div className="df flex-col justify-center align-items-center">
        Upload PDF File
        <form className="df flex-col justify-center align-items-center">
          <input
            className="pointer"
            type="file"
            onChange={handleChange}
            onDrop={handleDrop}
          />
          <button className="pointer" type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
