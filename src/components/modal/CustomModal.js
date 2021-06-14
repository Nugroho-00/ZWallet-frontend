/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from 'react-native';

const CustomModal = props => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        fullscreen={true}
        transparent={true}
        visible={props.modalVisible}>
        <View
          style={{
            ...styles.centeredView,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View style={{...styles.modalView}}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={{alignItems: 'center'}}>
              <View style={{alignItems: 'center'}}>
                {props.msg ? (
                  <Text style={styles.modalText}>{props.msg}</Text>
                ) : props.content ? (
                  <Image style={styles.avatar} source={props.content} />
                ) : null}
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {props.btnLabel ? (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={props.onAction}>
                  <Text style={styles.textStyle}>{props.btnLabel}</Text>
                </Pressable>
              ) : null}
              {props.btnLabel2 ? (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={props.onAction2}>
                  <Text style={styles.textStyle}>{props.btnLabel2}</Text>
                </Pressable>
              ) : null}
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {props.btnLabel3 ? (
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={props.onAction3}>
                  <Text style={styles.textStyle}>{props.btnLabel3}</Text>
                </Pressable>
              ) : null}
              {props.btnLabel4 ? (
                <Pressable
                  style={[styles.button, styles.buttonSave]}
                  onPress={props.onAction4}>
                  <Text style={styles.textStyle}>{props.btnLabel4}</Text>
                </Pressable>
              ) : null}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    justifyContent: 'space-between',
    width: '85%',
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#5784BA',
    minWidth: 110,
  },
  buttonSave: {
    backgroundColor: '#6379F4',
    minWidth: 110,
  },
  buttonCancel: {
    backgroundColor: '#EB4335',
    minWidth: 110,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  modalText: {
    fontFamily: 'Montserrat-Regular',
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 25,
    marginBottom: 16,
    textAlign: 'center',
    color: '#6379F4',

  },
});

export default CustomModal;
