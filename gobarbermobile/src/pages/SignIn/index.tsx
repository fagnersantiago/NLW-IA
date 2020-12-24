import React  from "react";
import {Image, KeyboardAvoidingView, View, Platform, ScrollView, Keyboard} from "react-native";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


import logoImg from '../../assets/logo.png';

import {
    Container, 
    Title, 
    ForgotPassword,
    ForgotPasswordText, 
    CreateAccountButton, 
    CreateAccountButtonText,

    } from "./styles";


const SignIn: React.FC = () => {

  const navigation = useNavigation();

  //const handledSignIn = useCallback();
  
  return (
    <>
     <KeyboardAvoidingView 
     style={{flex:1}}
     behavior={Platform.OS === 'ios' ? 'padding': undefined}
     enabled
     >

    <ScrollView  

    keyboardShouldPersistTaps='handled' 
    contentContainerStyle={{flex: 1}}> 

      <Container>

        <Image source={logoImg} />

        <View>
        <Title>Faça seu Logon </Title>
        </View>

        <Input name="email" icon="mail" placeholder="Email" />

        <Input name="password" icon="lock" placeholder="Senha" />

        <Button onPress={() => {}}>Entrar</Button>

        <ForgotPassword onPress={() => {}}>

          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>

        </ForgotPassword>

      </Container>

 </ScrollView> 

    </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}> 

       <Icon name= "log-in" size={20} color= '#ff9000'/>

        <CreateAccountButtonText>Criar uma Conta </CreateAccountButtonText>

      </CreateAccountButton>
    </>
  );
};

export default SignIn;
