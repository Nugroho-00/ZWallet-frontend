import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Toast} from 'native-base';
import axios from 'axios';
import {API_URL} from '@env';
import {connect} from 'react-redux';
import classes from './Styles';

const UploadImageProfile = props => {
  const UpdateData = props.userReducers.user?.data[0];
  const [photo, setPhoto] = useState(`${API_URL}${UpdateData?.avatar}`);
  const [file, setFile] = useState();
  const fadeAnim = useRef(new Animated.Value(1000)).current;

  const swipeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const swipeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1000,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      props.setProfileModal(false);
    });
  };

  const onCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 400,
        maxWidth: 400,
      },
      result => {
        if (result.didCancel) {
          return Alert.alert('Action Canceled', 'No image selected', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        setFile(result?.assets[0]);
        setPhoto(result?.assets[0].uri);
      },
    );
  };

  const onGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 400,
        maxWidth: 400,
      },
      result => {
        if (result.didCancel) {
          return Alert.alert('Action Canceled', 'No image selected', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        setFile(result?.assets[0]);
        setPhoto(result?.assets[0].uri);
      },
    );
  };

  const FormData = require('form-data');
  const data = new FormData();
  const config = {
    method: 'PATCH',
    url: `${API_URL}/profile/edit`,
    headers: {
      authorization: `Bearer ${props.loginReducers.user?.token}`,
    },
    data: data,
  };

  function submitHandler() {
    if (file) {
      data.append('image', {
        uri: file.uri,
        name: file.fileName,
        type: file.type,
      });
    }
    axios(config)
      .then(res => {
        console.log(res);
        if (res.data.message === 'Data Updated') {
          Toast.show({
            text: 'Success',
            type: 'success',
            textStyle: {textAlign: 'center'},
            duration: 2000,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    swipeIn();
  }, []);

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      bounces
      style={[classes.modalcontainer, {translateX: fadeAnim}]}>
      <View style={classes.container}>
        <Text style={classes.header}>Edit Picture Profile</Text>
        <ImageBackground
          imageStyle={{borderRadius: 100}}
          style={classes.profilepicture}
          source={{uri: photo}}
        />
        <View style={classes.btngroup}>
          <View style={classes.btncontainer}>
            <TouchableOpacity style={classes.btnprimary} onPress={onCamera}>
              <Text style={classes.btntextprimary}>Camera</Text>
            </TouchableOpacity>
          </View>
          <View style={classes.btncontainer}>
            <TouchableOpacity style={classes.btnsecondary} onPress={onGallery}>
              <Text style={classes.btntextsecondary}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={classes.btncontainer}>
          <TouchableOpacity
            style={classes.btnprimary}
            onPress={async () => {
              await submitHandler();
              swipeOut();
            }}>
            <Text style={classes.btntextprimary}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={classes.btncontainer}>
          <TouchableOpacity
            onPress={async () => {
              swipeOut();
            }}
            style={classes.btnsecondary}>
            <Text style={classes.btntextsecondary}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const mapStatetoProps = state => ({
  loginReducers: state.loginReducers,
  userReducers: state.userReducers,
});

const connectedUpload = connect(mapStatetoProps)(UploadImageProfile);

export default connectedUpload;
