import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

class Mapper extends Component {
  state = {
    zoom: 13
  };

  openPopup (marker) {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup()
      })
    }
  }

  getFirstAddressLatLng = () => {
    let lat = this.props.course.addresses[0].lat;
    let lng = this.props.course.addresses[0].lng;
    return [lat, lng];
  };

  getLatLngForAllAddresses = () => {
    let latlngs = this.props.course.addresses.map(address => {
      return [address.lat, address.lng];
    });
    return latlngs;
  };

  render() {
    return (
      <Map
        style={{ height: "500px", width: "500px", float: "right" }}
        center={this.getFirstAddressLatLng()}
        zoom={this.state.zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          accessToken={
            "pk.eyJ1IjoicGVpZGFuc2F1eXVranVrIiwiYSI6ImNqdnpuczVoczAyOWk0OXF2ZTRhMWt3YjcifQ.JytgGvNkoGKnbHF7T6ajHw"
          }
        />
        {this.props.course.addresses.map(address => {
          return (
            <Marker key={address.id} position={[address.lat, address.lng]} ref={this.openPopup}>
              <Popup>
                {`${address.address_first} ${address.address_second} ${
                  address.city
                } ${address.zipcode}`}
              </Popup>
            </Marker>
          );
        })}
      </Map>
    );
  }
}

const mapStateToProps = state => {
  return { course: state.courses.current };
};

export default connect(mapStateToProps)(Mapper);
