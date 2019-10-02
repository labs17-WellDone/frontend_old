import React, { useState } from "react"
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl"

export default function Map({ pumps, setModalId }) {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "500px",
    latitude: 12.55,
    longitude: 104.9,
    zoom: 6.28,
    minZoom: 6.28,
    maxZoom: 13,
  })

  const [maxBounds] = useState([
    [10.572449, 103.140854], // Southwest coordinates
    [14.841942, 107.66624], // Northeast coordinates
  ])

  // var maxBounds = [
  //   [10.572449, 103.140854], // Southwest coordinates
  //   [14.841942, 107.66624], // Northeast coordinates
  // ]

  const mapPins = {
    status: {
      functional: "../static/success.svg",
      unknown: "../static/unknown.svg",
      nonFunctional: "../static/error.svg",
    },
  }

  return (
    <div css={{ img: { cursor: "pointer" } }}>
      <ReactMapGL
        // andy's
        fitBounds={undefined}
        maxBounds={maxBounds}
        mapStyle="mapbox://styles/brudnak/cjzypjc362w9u1clduir026aw"
        mapboxApiAccessToken="pk.eyJ1IjoiYnJ1ZG5hayIsImEiOiJjanpramh2bnMwMGU4M210M3N5amRnMTVkIn0.ShGGESPCjVZo2MugiijwWw"
        onViewportChange={view => setViewPort({ ...view, width: "100%" })}
        css={{ borderRadius: 5 }}
        maxBounds={[
          [-74.04728500751165, 40.68392799015035],
          [-73.91058699000139, 40.87764500765852],
        ]}
        {...viewPort}>
        {pumps.map(pump => (
          <Marker
            latitude={pump.latitude}
            longitude={pump.longitude}
            offsetLeft={-20}
            offsetTop={-10}>
            {pump.status === 0 ? (
              <img
                src={mapPins.status.nonFunctional}
                width={"31px"}
                css={{ zIndex: 2 }}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : pump.status === 1 ? (
              <img
                src={mapPins.status.unknown}
                width={"31px"}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : pump.status === 2 ? (
              <img
                src={mapPins.status.functional}
                width={"31px"}
                onClick={() => setModalId(pump.id)}
                alt=""
              />
            ) : null}
          </Marker>
        ))}
        <div css={{ position: "absolute", right: 10, bottom: "9%" }}>
          <NavigationControl showZoom />
        </div>
      </ReactMapGL>
    </div>
  )
}
