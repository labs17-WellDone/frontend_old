import React from "react"
import Nav from "../components/Nav"

export default function settings() {
  return (
    <>
      <div className="container">
        <h2>Settings Page</h2>
      </div>
      <style jsx>{`
        .container {
          display: flex;
        }
        h2 {
          margin-left: 10px;
        }
      `}</style>
    </>
  )
}
