import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps{
  title: string;
}


function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}




export default function App() {
  return (
    <View style={styles.container}>
      <Text>  
        Hello DEV
      </Text>
      <Button title="Botao 1"/>
      <Button title="Botao 2"/>
      <Button title="Botao 3"/>
      <StatusBar style="auto"/>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
