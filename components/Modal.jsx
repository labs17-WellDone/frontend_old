import React from "react"
import ModalCard from "./ModalCard"

export default function Modal({ pumps, modalId }) {
  const selectedPump = modalId ? pumps.find(pump => pump.id === modalId) : null
  return (
    <div>
      {modalId ? (
        <div>
          <h3>Pump #{selectedPump.id}</h3>
        </div>
      ) : (
        <h3>Select a Pump</h3>
      )}
    </div>
  )
  // return (
  //   <div>
  //     {pumps.map(pump => {
  //       if (pump.id === modalId) {
  //         return <ModalCard pump={pump} />
  //       }
  //     })}
  //   </div>
  // )
}
