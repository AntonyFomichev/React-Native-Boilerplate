/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Component from './component';

const EventsScreen = (props) => {
  return <Component navigation={props.navigation} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
