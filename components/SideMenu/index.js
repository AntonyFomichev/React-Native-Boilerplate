import React, {useEffect} from 'react';
import {Keyboard} from 'react-native';
import {connect} from 'react-redux';
import Component from './component';

const Container = (props) => {
  useEffect(() => {
    Keyboard.dismiss();
  });

  return <Component {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
