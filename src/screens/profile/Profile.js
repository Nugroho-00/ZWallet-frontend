import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TextInput, Keyboard, StatusBar, ScrollView, Image, Pressable} from 'react-native';
import {Button, Icon} from 'native-base';
import styles from './Styles';
// import Header from '../../components/header/Header';
import ToggleSwitch from 'toggle-switch-react-native'


function Profile() {
    const [isNotifOn, setIsNotifOn] = useState(true)
    return (
        <>
        <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#FFF"
      />
      <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="arrow-back-outline" style={styles.back} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.mainInfo}>
                  <View style={styles.avatar}>
                  {/* <Image source={{uri:'Image URL'}}/> */}
                  <Icon name="person-outline" style={styles.avatarIcon}/>
                  </View>

                  <View style={styles.editWrapper}>
                  <Icon name="pencil-sharp" style={styles.editIcon}/>
                  <Text style={styles.editText}>Edit</Text>
                  </View>

                  <Text style={styles.nameText}>Robert Chandler</Text>
                  <Text style={styles.phoneText}>+62 813-9387-7946</Text>
              </View>
              <View style={styles.menuSection}>
                  <Pressable style={styles.menuItem}>
                      <Text style={styles.menuText}>Personal Information</Text>
                      <Icon name="arrow-forward-outline" style={styles.menuNext}/>
                  </Pressable>
                  
                  <Pressable style={styles.menuItem}>
                      <Text style={styles.menuText}>Change Password</Text>
                      <Icon name="arrow-forward-outline" style={styles.menuNext}/>
                  </Pressable>
                  <Pressable style={styles.menuItem}>
                      <Text style={styles.menuText}>Change PIN</Text>
                      <Icon name="arrow-forward-outline" style={styles.menuNext}/>
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
                  <Pressable style={styles.menuItem}>
                      <Text style={styles.menuText}>Logout</Text>
                 
                  </Pressable>
              </View>
          </ScrollView>
      </View>
        </>
    )
}

export default Profile
