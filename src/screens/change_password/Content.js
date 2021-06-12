import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Content = () => {
  const [password, setPassword] = useState({});
  const [currentPassword, setCurrentPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.textDescriptionWrapper}>
        <Text style={styles.textDescription}>
          You must enter your current password and then type your new password
          twice.
        </Text>
      </View>

      <View>
        <View style={styles.input}>
          <View style={styles.lefticon}>
            <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
          </View>
          <TextInput
            style={styles.inputbox}
            placeholder="Current Password"
            placeholderTextColor="rgba(169, 169, 169, 0.8)"
            secureTextEntry={currentPassword}
            onChangeText={value => {
              setPassword({...password, currentPassword: value});
            }}
          />
          <TouchableOpacity
            style={styles.righticon}
            onPress={() => {
              setCurrentPassword(!currentPassword);
            }}>
            <Ionicons
              name={currentPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#A9A9A9"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.input}>
          <View style={styles.lefticon}>
            <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
          </View>
          <TextInput
            style={styles.inputbox}
            placeholder="New Password"
            placeholderTextColor="rgba(169, 169, 169, 0.8)"
            secureTextEntry={newPassword}
            onChangeText={value => {
              setPassword({...password, newPassword: value});
            }}
          />
          <TouchableOpacity
            style={styles.righticon}
            onPress={() => {
              setNewPassword(!newPassword);
            }}>
            <Ionicons
              name={newPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#A9A9A9"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.input}>
          <View style={styles.lefticon}>
            <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
          </View>
          <TextInput
            style={styles.inputbox}
            placeholder="Repeat Password"
            placeholderTextColor="rgba(169, 169, 169, 0.8)"
            secureTextEntry={confirmPassword}
            onChangeText={value => {
              setPassword({...password, confirmPassword: value});
            }}
          />
          <TouchableOpacity
            style={styles.righticon}
            onPress={() => {
              setConfirmPassword(!confirmPassword);
            }}>
            <Ionicons
              name={confirmPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#A9A9A9"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btnContinue}>
            <Text style={styles.textContinue}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Content;
