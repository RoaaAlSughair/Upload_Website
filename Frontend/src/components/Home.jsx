import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../styles/Home.scss'

export default function Home() {
  return (
    <div className="ba-1px w-100">
      <div className="df flex-row justify-between align-items-center">
        <h1>My Files</h1>
        <Link to="/uploadFile">
          <button>Add File</button>
        </Link>
      </div>
      <section className="all-files">Home</section>
    </div>
  )
}
