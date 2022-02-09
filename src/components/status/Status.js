import React from "react"

import "./Status.scss"

const Status = ({ character }) => {
  let statusClass = "status-unknown"

  if (character.status === "Dead") {
    statusClass = "status-dead"
  } else if (character.status === "Alive") {
    statusClass = "status-alive"
  }

  return <div className={statusClass} data-testid="icon"></div>
}

export default Status
