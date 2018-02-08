import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Config from '../../config';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { VenueItem } from '../../components';
import { apiVenues } from '../../api';
import { addVenues, setVenues } from '../../actions';

class CustomerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.reloadVenues();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.position !== this.props.position) {
      this.reloadVenues(true);
    }
  }

  onPressVenueItem(venue) {

  }

  reloadVenues(fromProps = false) {
    const { position } = this.props;
    let params = position;
    if (position.latitude === -9999 && position.longitude === -9999) {
      // if (fromProps === true) {
      alert('Unable to get position and I am setting the default position.');
      params = {
        latitude: 55.676097,
        longitude: 12.568337,
      };
      // }
      // return;
    }

    apiVenues(params).then((result) => {

      const venueCategories = result.data;
      if (venueCategories && venueCategories.data.length > 0) {
        venueCategories.data.map((vCategory, index) => {
          if (index === 0) {
            return this.props.setVenues(vCategory.venues);
          }
          return this.props.addVenues(vCategory.venues);

        });
      }
    });
  }

  render() {
    const { venues } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.venueContainer}>
          {
            venues.length > 0 && venues.map((venue, index) => (
              <VenueItem
                key={`venueItem_${index}`}
                style={{ height: 230 }}
                imageUrl={venue.images.length > 0 && venue.images[0].url}
                title={venue.title}
                address={venue.address}
                distance={venue.distance}
                onPress={this.onPressVenueItem.bind(this, venue)}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

function select(store) {
  return {
    venues: store.venues,
    position: store.position,
  };
}


function actions(dispatch) {
  return {
    addVenues: data => dispatch(addVenues(data)),
    setVenues: data => dispatch(setVenues(data)),
  };
}

export default connect(select, actions)(CustomerScreen);
