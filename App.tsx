import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/components/SignUp';
import LoginPage from './src/components/LoginPage';
import Forgotpassword from './src/components/Forgotpassword';
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Header></Header>
    //   <WelcomePage/>
      
    // </View>
    // <FlexBoxTry/>
    // <Layoutone/>
    // <SignUp></SignUp>
    // <LoginPage></LoginPage>
    <Forgotpassword></Forgotpassword>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'#000000',
    
  },
  Header:{
    flex:1
  }
  ,
  WelcomePage:
  {
    flex:2
  }
});
