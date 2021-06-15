import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import {Button} from 'native-base';
import Backdrop from '../../../components/backdrop/Backdrop';
import styles from './Styles';
import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

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


  // console.log(props.userReducers.user);
  useEffect(()=>{
    if(props.route.params.type==="not-verified"||props.route.params.type==="update"){
      const emailUser = props.route.params.type==="update"?props.route.params.email.toString():props.userReducers.user.email; 
      console.log(emailUser);
      let config = {
        method: 'POST',
        url: `${API_URL}/auth/send-otp`,
        data: {email: emailUser},
      };
      axios(config)
        .then(res => {
          // console.log(res.data.result);
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data?.message === 'Email not found !!!') {
            return Toast.show({
              text: 'User is not registered, go to signup page to get started',
              type: 'danger',
              textStyle: {textAlign: 'center'},
              duration: 3000,
            });
          }
        });
    }
  },[])
  console.log(props.route.params.type);
  
  //   error Handling
  const verificationHandler = ()=> {
    let idUser, isLogin;
    if(!props.route.params){
      idUser=props.userReducers.user.id
    } else{
      idUser=props.route.params.id
    }

    if(props.route.params.type==='non-reset'){
      isLogin=false
    } else if(props.route.params.type==='not-verified') {
      isLogin=true
    }
    console.log(isLogin);
    axios
      .post(`${API_URL}/auth/verify-otp`, {
        otp: [num1, num2, num3, num4, num5, num6].join(''),
        userId: idUser,
      })
      .then(res => {
        console.log(res);
        // console.log('sukses');
        if (props.route.params.type==='update') {
          props.navigation.navigate('HomeScreen');
        } else if (props.route.params.type) {
          props.navigation.navigate('CreatePin', {id:  idUser, isLogin: isLogin});
        } else {
          props.navigation.navigate('ResetPassword', {token: res.data.token});
        }
      })
      .catch(err => {
        console.log('failed', {err});
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
            autoCapitalize="none"
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
            autoCapitalize="none"
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
            autoCapitalize="none"
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
            autoCapitalize="none"
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
            autoCapitalize="none"
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
            autoCapitalize="none"
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
                ? {...styles.buttonOn, top: 250}
                : {...styles.buttonOff, top: 250}
              : isFilled
              ? {...styles.buttonOn}
              : {...styles.buttonOff}
          }
          disabled={isFilled ? false : true}
          onPress={() => {
            verificationHandler();
          }}>
          <Text style={isFilled ? styles.textOn : styles.textOff}>Confirm</Text>
        </Button>
      </View>
    </>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
    userReducers: state.userReducers,
  };
};

const connectedConfirmOtp = connect(mapStatetoProps)(ConfirmOtp);
export default connectedConfirmOtp ;
