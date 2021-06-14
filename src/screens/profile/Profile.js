import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Icon} from 'native-base';
import styles from './Styles';
import ToggleSwitch from 'toggle-switch-react-native';
import {userLogout} from '../../services/redux/actions/Auth';
import {connect, useSelector} from 'react-redux';
import {API_URL} from '@env';
import EditModal from '../../components/modal/UploadImageProfile';
import CustomModal from '../../components/modal/CustomModal';
import {useIsFocused} from '@react-navigation/native';

function Profile(props) {
  const isFocused = useIsFocused();
  const profile = useSelector(state => state.userReducers.user);

  useEffect(()=>{},[])
  const [isNotifOn, setIsNotifOn] = useState(true);
  const [notifTemp, setNotifTemp] = useState()
  const [profileModal, setProfileModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false)
  const [avatar, setAvatar] = useState(`${API_URL}${profile.data[0].avatar}`)

  const avatarChange=(e)=>{
    setAvatar(e)
  }

  return (
    <>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#FFF"
      />
      <View style={styles.container}>
        <Pressable
          style={styles.header}
          onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back-outline" style={styles.back} />
        </Pressable>

        <Modal animationType="fade" visible={profileModal} transparent={true}>
          <EditModal
            modalVisible={profileModal}
            setProfileModal={setProfileModal}
            onChangeAvatar = {avatarChange}
          />
        </Modal>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainInfo}>
            <View style={styles.avatar}>
              {profile.data[0].avatar === null ? (
                <Icon
                  name="person"
                  size={52}
                  color="#FFF"
                  style={styles.avatarIcon}
                />
              ) : (
                <Image
                  source={{uri: avatar}}
                  style={styles.avatar}
                />
              )}
            </View>

            <TouchableOpacity
              onPress={() => {
                setProfileModal(!profileModal);
              }}
              style={styles.editWrapper}>
              <Icon name="pencil-sharp" style={styles.editIcon} />
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>

            <Text style={styles.nameText}>{profile.data[0].username}</Text>
            <Text style={styles.phoneText}>
              {'+62 ' + profile.data[0].phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-')}
            </Text>
          </View>
          <View style={styles.menuSection}>
            <Pressable
              style={styles.menuItem}
              onPress={() => props.navigation.navigate('PersonalInformation')}>
              <Text style={styles.menuText}>Personal Information</Text>
              <Icon name="arrow-forward-outline" style={styles.menuNext} />
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => props.navigation.navigate('ChangePassword')}>
              <Text style={styles.menuText}>Change Password</Text>
              <Icon name="arrow-forward-outline" style={styles.menuNext} />
            </Pressable>
            <Pressable
              style={styles.menuItem}
              onPress={() => props.navigation.navigate('OldPin')}>
              <Text style={styles.menuText}>Change PIN</Text>
              <Icon name="arrow-forward-outline" style={styles.menuNext} />
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>Notification</Text>

              <ToggleSwitch
                isOn={isNotifOn}
                onColor="#6379F4"
                offColor="#7A7886"
                size="medium"
                onToggle={isOn => {setConfirmModal(true); setNotifTemp(isOn)}}
              />
            </Pressable>
            <Pressable
              style={styles.menuItem}
              onPress={() => setLogoutModal(true)}>
              <Text style={styles.menuText}>Logout</Text>
            </Pressable>

            {logoutModal ? (
              <CustomModal
                modalVisible={logoutModal}
                title="Log Out"
                msg="Are you sure want to Logout now?"
                btnLabel3="Cancel"
                onAction3={() => {
                  setLogoutModal(false);
                }}
                btnLabel4="Yes I'm sure"
                onAction4={() => props.onLogoutHandler()}
              />
            ) : null}
          </View>
        </ScrollView>
      </View>
      {confirmModal ? (
        <CustomModal
          modalVisible={confirmModal}
          title={`Turn ${notifTemp?'On':'Off'} Notification`}
          msg={`Are you sure want to turn ${notifTemp?'on':'off'} your notification?`}
          btnLabel3="Cancel"
          onAction3={() => {
            setConfirmModal(false);
          }}
          btnLabel4="Yes I'm sure"
          onAction4={()=>{setIsNotifOn(notifTemp); setConfirmModal(false)}}
        />
      ) : null}
    </>
  );
}

const mapStatetoProps = state => ({
  loginReducers: state.loginReducers,
});

const mapDispatchToProps = dispatch => ({
  onLogoutHandler: () => {
    dispatch(userLogout());
  },
});

const connectedProfile = connect(mapStatetoProps, mapDispatchToProps)(Profile);

export default connectedProfile;
