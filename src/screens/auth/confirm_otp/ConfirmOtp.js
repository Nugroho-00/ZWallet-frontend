import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import {Button} from 'native-base';
import Backdrop from '../../../components/backdrop/Backdrop';
import styles from './Styles';
import {API_URL} from '@env';
import axios from 'axios';

const ConfirmOtp = props => {
  const [isFilled, setIsFilled] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [num5, setNum5] = useState('');
  const [num6, setNum6] = useState('');

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  useEffect(() => {
    if (num1 && num2 && num3 && num4 && num5 && num6) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [num1, num2, num3, num4, num5, num6]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsEdit(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsEdit(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [num1, num2, num3, num4, num5, num6]);

  //   error Handling
  const verificationHandler = e => {
    e.preventDefault();
    axios
      .post(`${API_URL}/data/auth/verify-otp`, {
        id: props.idUser,
        otp: [num1, num2, num3, num4, num5, num6].join(''),
      })
      .then(res => {
        console.log('sukses');
        props.codeOTP([num1, num2, num3, num4, num5, num6].join(''));
        props.navigation.navigate('CreateNewPassword');
      })
      .catch(err => {
        console.log('failed', err);
        setErrorMessage('Oops. You entered the wrong OTP code');
      });
  };

  return (
    <>
      <Backdrop />
      <View style={styles.container}>
        <Text style={styles.title}>Please input your OTP</Text>
        <Text style={styles.content}>
          We have sent your OTP (One Time Password) code via Email
        </Text>

        {/* INPUT PIN SECTION */}

        <View style={styles.pinGroup}>
          <TextInput
            style={styles.input}
            value={num1}
            ref={ref}
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                ref2.current.focus();
              }
              setNum1(code);
            }}
            onPressIn={() => {
              setErrorMessage('');
              setIsEdit(true);
            }}
            // onBlur={() => setIsEdit(false)}
            disableFullscreenUI={true}
          />
          <TextInput
            style={styles.input}
            value={num2}
            ref={ref2}
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                ref3.current.focus();
              } else if (code.length < 1) {
                ref.current.focus();
              }
              setNum2(code);
            }}
            onPressIn={() => {
              setErrorMessage('');
              setIsEdit(true);
            }}
            // onBlur={() => setIsEdit(false)}
            disableFullscreenUI={true}
          />
          <TextInput
            style={styles.input}
            value={num3}
            ref={ref3}
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                ref4.current.focus();
              } else if (code.length < 1) {
                ref2.current.focus();
              }
              setNum3(code);
            }}
            onPressIn={() => {
              setErrorMessage('');
              setIsEdit(true);
            }}
            // onBlur={() => setIsEdit(false)}
            disableFullscreenUI={true}
          />
          <TextInput
            style={styles.input}
            value={num4}
            ref={ref4}
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                ref5.current.focus();
              } else if (code.length < 1) {
                ref3.current.focus();
              }
              setNum4(code);
            }}
            onPressIn={() => {
              setErrorMessage('');
              setIsEdit(true);
            }}
            // onBlur={() => setIsEdit(false)}
            disableFullscreenUI={true}
          />
          <TextInput
            style={styles.input}
            value={num5}
            ref={ref5}
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                ref6.current.focus();
              } else if (code.length < 1) {
                ref4.current.focus();
              }
              setNum5(code);
            }}
            onPressIn={() => {
              setErrorMessage('');
              setIsEdit(true);
            }}
            // onBlur={() => setIsEdit(false)}
            disableFullscreenUI={true}
          />
          <TextInput
            style={styles.input}
            value={num6}
            ref={ref6}
            maxLength={1}
            onChangeText={code => {
              if (code.length < 1) {
                ref5.current.focus();
              }
              setNum6(code);
            }}
            onPressIn={() => {
              setErrorMessage('');
              setIsEdit(true);
            }}
            // onBlur={() => setIsEdit(false)}
            disableFullscreenUI={true}
          />
        </View>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        {/* CONFIRM BUTTON */}
        <Button
          style={
            isEdit
              ? isFilled
                ? {...styles.buttonOn, top: 200}
                : {...styles.buttonOff, top: 200}
              : isFilled
              ? {...styles.buttonOn}
              : {...styles.buttonOff}
          }
          disabled={isFilled ? false : true}
          onPress={() => {
            props.navigation.navigate('ResetPassword');
          }}>
          <Text style={isFilled ? styles.textOn : styles.textOff}>Confirm</Text>
        </Button>
      </View>
    </>
  );
};

export default ConfirmOtp;
