import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux';

class Mapper extends Component {
  state = {
    zoom: 13,
  }

  render() {
    const position = [this.props.address.lat, this.props.address.lng]
    let { address } = this.props
    return (
      <Map style={{height: '200px'}} center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          accessToken={'pk.eyJ1IjoicGVpZGFuc2F1eXVranVrIiwiYSI6ImNqdnpuczVoczAyOWk0OXF2ZTRhMWt3YjcifQ.JytgGvNkoGKnbHF7T6ajHw'}
        />
        <Marker position={position}>
          <Popup onOpen={console.log}>
            {`${address.address_first}
              ${address.address_second}
              ${address.city}
              ${address.zipcode}
            `}
          </Popup>
        </Marker>
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return {address: state.courses.current.addresses[0]}
}

export default connect(mapStateToProps)(Mapper)