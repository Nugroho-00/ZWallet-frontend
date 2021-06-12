import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import {Button} from 'native-base';
import styles from './Styles';
import Header from '../../components/header/Header';

function PinConfirmation(props) {
  const {navigation} = props;
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

  const isValidPin = pin => {
    return !!pin.match(/^[0-9]*$/);
  };

  return (
    <>
      <Header isBack={true} title="Enter Your PIN" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Enter PIN to Transfer</Text>
        <Text style={styles.content}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
        </Text>

        <View style={styles.pinGroup}>
          <TextInput
            style={styles.input}
            value={num1}
            ref={ref}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                isValidPin(code) && ref2.current.focus();
              }
              isValidPin(code) && setNum1(code);
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
            keyboardType="numeric"
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                isValidPin(code) && ref3.current.focus();
              } else if (code.length < 1) {
                ref.current.focus();
              }
              isValidPin(code) && setNum2(code);
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
            keyboardType="numeric"
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                isValidPin(code) && ref4.current.focus();
              } else if (code.length < 1) {
                ref2.current.focus();
              }
              isValidPin(code) && setNum3(code);
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
            keyboardType="numeric"
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                isValidPin(code) && ref5.current.focus();
              } else if (code.length < 1) {
                ref3.current.focus();
              }
              isValidPin(code) && setNum4(code);
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
            keyboardType="numeric"
            maxLength={1}
            onChangeText={code => {
              if (code.length === 1) {
                isValidPin(code) && ref6.current.focus();
              } else if (code.length < 1) {
                ref4.current.focus();
              }
              isValidPin(code) && setNum5(code);
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
            keyboardType="numeric"
            maxLength={1}
            onChangeText={code => {
              if (code.length < 1) {
                ref5.current.focus();
              }
              isValidPin(code) && setNum6(code);
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
                ? {...styles.buttonOn, top: 210}
                : {...styles.buttonOff, top: 210}
              : isFilled
              ? {...styles.buttonOn}
              : {...styles.buttonOff}
          }
          onPress={()=>props.navigation.navigate('ConfirmationResult')}
          disabled={isFilled ? false : true}>
          <Text style={isFilled ? styles.textOn : styles.textOff}>
            Transfer Now
          </Text>
        </Button>
      </View>
    </>
  );
}

export default PinConfirmation;
