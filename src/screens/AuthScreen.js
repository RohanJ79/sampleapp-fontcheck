import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from 'react-native';
//import {Input} from '../components/Input1';
import Card from '../components/Card';
import Input from '../components/Input';

function AuthScreen(props) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <Card style={styles.authcontainer}>
        <ScrollView>
          <Input
            id="userid"
            label="User-ID"
            keyboardType="numeric"
            required
            errorText="Please enter a valid user id"
            onInputChange={() => {}}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={8}
            autoCapitalize="none"
            errorText="Incorrect Password please enter a valid password"
            onInputChange={() => {}}
            initialValue=""
          />
          <Button
            style={styles.btnContainer}
            title="Login"
            onPress={() => props.navigation.navigate('Home')}
          />
        </ScrollView>
      </Card>
    </KeyboardAvoidingView>
  );
}

AuthScreen.navigationOptions = {
  headerTitle: 'Authenticate',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authcontainer: {padding: 20, width: '80%', maxWidth: 400, maxHeight: 400},
  btnContainer: {marginTop: 10},
});
export default AuthScreen;
