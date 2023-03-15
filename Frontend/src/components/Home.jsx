import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/Home.scss'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3000/`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])

  return (
    <div className="home w-100 df flex-col">
      <div className="df flex-row justify-between align-items-center">
        <h1>My Files</h1>
        {data.length <= 100 ? (
          <Link to="/uploadFile">
            <button>Add File</button>
          </Link>
        ) : (
          <button disabled>Add File</button>
        )}
      </div>
      {data.length <= 100 ? null : <p>You can only upload up to 100 files.</p>}
      <section className="all-files">
        {data.length > 0
          ? data.map(el => {
              return (
                <div className="file pa16 df flex-col radius4" key={el._id}>
                  <img
                    className="w-100"
                    src="data:image/png;base64,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"
                    alt={el.contentType + ' document'}
                    height="250"
                  />
                  <h4>{el.filename}</h4>
                  <p>Uploaded on {el.uploadDate}</p>
                  <a href={el.directory + '/' + el.filename} target='_blank'>
                    <button>View</button>
                  </a>
                  <a href={el.directory + '/' + el.filename} download>
                    <button>Download</button>
                  </a>
                </div>
              )
            })
          : null}
      </section>
    </div>
  )
}
