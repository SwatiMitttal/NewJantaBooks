import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Share
} from 'react-native'

function Mshare(){

const [ival, setIval] = useState('');
const smes = () => {
   Share.share({
      message: ival.toString(),
    }).then((result) => console.log(result))
      .catch((errorMsg) => console.log(errorMsg));
  }

  return(
    <>
  <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
         Mobile Verification
        </Text>
        <Text style={styles.titles}>
          Enter Text to Share
        </Text>
        <TextInput
          value={ival}
          onChangeText={
            (ival) => setIval(ival)
          }
          placeholder={'Enter Text to Share'}
          style={styles.tin}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={shareMessage}>
          <Text style={styles.but}>
            Share Input Text
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  
    </>
  )
}

export default Mshare

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titles: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  but: {
    color: '#fff',
    textAlign: 'center',
  },
  tin: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
})