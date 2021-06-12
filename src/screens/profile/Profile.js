import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {Icon} from 'native-base';
import styles from './Styles';
import ToggleSwitch from 'toggle-switch-react-native';
import {userLogout} from '../../services/redux/actions/Auth';
import {connect} from 'react-redux';

function Profile(props) {
  const [isNotifOn, setIsNotifOn] = useState(true);
  return (
    <>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#FFF"
      />
      <View style={styles.container}>
        <Pressable style={styles.header} onPress={()=>props.navigation.goBack()}>
          <Icon name="arrow-back-outline" style={styles.back} />
        </Pressable>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainInfo}>
            <View style={styles.avatar}>
              {/* <Image source={{uri:'Image URL'}}/> */}
              <Icon name="person-outline" style={styles.avatarIcon} />
            </View>

            <View style={styles.editWrapper}>
              <Icon name="pencil-sharp" style={styles.editIcon} />
              <Text style={styles.editText}>Edit</Text>
            </View>

            <Text style={styles.nameText}>Robert Chandler</Text>
            <Text style={styles.phoneText}>+62 813-9387-7946</Text>
          </View>
          <View style={styles.menuSection}>
            <Pressable style={styles.menuItem} onPress={()=>props.navigation.navigate('PersonalInformation')}>
              <Text style={styles.menuText}>Personal Information</Text>
              <Icon name="arrow-forward-outline" style={styles.menuNext} />
            </Pressable>

            <Pressable style={styles.menuItem} onPress={()=>props.navigation.navigate('ChangePassword')}>
              <Text style={styles.menuText}>Change Password</Text>
              <Icon name="arrow-forward-outline" style={styles.menuNext} />
            </Pressable>
            <Pressable style={styles.menuItem} onPress={()=>props.navigation.navigate('OldPin')}>
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
                onToggle={isOn => setIsNotifOn(isOn)}
              />
            </Pressable>
            <Pressable style={styles.menuItem}
            onPress={() => {
              props.onLogoutHandler();
            }}
            >
              <Text style={styles.menuText}>Logout</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
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
