import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Upload() {
  const [file, setFile] = useState({})

  const validatePDF = file => {
    const validType = 'application/pdf'
    if (validType != file.type) {
      return false
    }
    return true
  }

  const handleChange = e => {
    const file = e.target.files[0]
    if (validatePDF(file)) {
      // Enable Submit button
      console.log('This is a pdf file')
      setFile(file);
    } else {
      // Disable Submit button and show an error message for the user
      console.log('Not pdf')
    }
  }

  return (
    <div className="ba-1px df flex-col w-100">
      <Link to="/">Back</Link>
      <div className="df flex-col justify-center align-items-center">
        Upload PDF File
        <form className="df flex-col justify-center align-items-center">
          <input className="pointer" type="file" onChange={handleChange} />
          <button className="pointer" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
