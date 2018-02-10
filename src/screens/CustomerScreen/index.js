/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import _ from 'lodash';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { loadAllCustomers } from '../../actions/customers';
import { SpinnerModal } from '../../components';
import Search from 'react-native-search-box';

import AppContainer from '../AppContainer';
import { NavItems } from '../../components';
import styles from './styles';

export class CustomerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: [],
      isLoading: true,
      searchText: '',
    };
    this.keys = _.range(0, 26).map(value => String.fromCharCode(65 + value));
    this.keys.push('#');
    this.props.loadAllCustomers();
  }

  componentDidMount() {}

  componentWillReceiveProps(newProps) {
    if (
      newProps.customers &&
      !Immutable.List(newProps.customers).equals(
        Immutable.List(this.props.customers),
      )
    ) {
      this.setState({ isLoading: false });
      this.filterCustomers(newProps.customers);
    }
  }

  onClickMap = () => {};

  filterCustomers(customers = this.props.customers) {
    const { searchText, data } = this.state;
    let filteredCustomers = customers;
    if (searchText !== '') {
      filteredCustomers = customers.filter(
        customer => this.getDisplayName(customer).toUpperCase().indexOf(searchText.toUpperCase()) >= 0,
      );
    }
    let filtered = _.groupBy(
      filteredCustomers,
      customer =>
        (String.fromCharCode(65) <=
          this.getDisplayName(customer)[0].toUpperCase() &&
        String.fromCharCode(90) >=
          this.getDisplayName(customer)[0].toUpperCase()) ? this.getDisplayName(customer)[0].toUpperCase() : '#',
    );
    const newKeys = this.keys.filter(key => filtered[key]);
    filtered = newKeys.map(key => {
      return {
        key,
        data: filtered[key] ? filtered[key] : [],
      };
    });

    this.setState({ data: filtered });
  }

  getDisplayName = customer => {
    if (!customer) {
      return '';
    }
    if (customer.customer_type === 'Commercial') {
      return customer.name;
    }
    let nameValue = `${customer.first_name} ${customer.last_name}`;
    if (customer.name_prefix !== '') {
      nameValue = customer.name_prefix + nameValue;
    }
    return nameValue;
  };

  onChangeText = (text) => {
    this.setState({ searchText: text }, () => {
      this.filterCustomers();
    })
  }

  onCancel = () => {
    this.setState({ searchText: '' }, () => {
      this.filterCustomers();
    })
  }

  renderListItem = ({ item, index }) => {
    return (
      <View style={styles.listItem} key={`customer_list_${index + 1}`}>
        <Text style={styles.itemText}>{this.getDisplayName(item)}</Text>
      </View>
    );
  };

  renderSeparator = () => (
    <View style={styles.separator}>
      <View style={styles.separatorContent} />
    </View>
  );

  renderSectionHeader = ({ section, index }) => {
    return (
      <View style={styles.sectionItem} key={`customer_list_section_${index + 1}`}>
        <Text style={styles.sectionText}>{section.key}</Text>
      </View>
    );
  };

  render() {
    return (
      <AppContainer
        title="Customer"
        navigation={this.props.navigation}
        renderLeftButton={NavItems.hamburgerButton(this.props.navigation)}
      >
        <View style={styles.mainContainer}>
          <Search
            ref="search_box"
            onChangeText={this.onChangeText}
            onCancel={this.onCancel}
            /**
             * There many props that can customizable
             * Please scroll down to Props section
             */
          />
          <SectionList
            renderItem={this.renderListItem}
            ItemSeparatorComponent={this.renderSeparator}
            renderSectionHeader={this.renderSectionHeader}
            sections={this.state.data}
          />
          <SpinnerModal
            text='Loading...'
            isVisible={this.state.isLoading}
          />
        </View>
      </AppContainer>
    );
  }
}

CustomerScreen.propTypes = {
  loadAllCustomers: PropTypes.func.isRequired,
  customers: PropTypes.any,
};

const mapStateToProps = state => ({ customers: state.get('customers') });

// const dispatchToProps = (dispatch) => {
//   return {
//     login: (email, password) => dispatch(login(email, password))
//   }
// }

export default connect(mapStateToProps, { loadAllCustomers })(CustomerScreen);
