import { SvgXml } from "react-native-svg";
import { navigateicon } from "../assets/icons/Icons";
import { TouchableOpacity } from "react-native";

 export const renderClosedCall = ({ item }) => (
    <View style={styles.callCard}>
      <View style={styles.buttons}>
        <Text style={styles.callTitle}>{item.title}</Text>
        <Text style={styles.callDate}>{item.date}</Text>
        <TouchableOpacity>
          <SvgXml xml={navigateicon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <Text style={styles.callCode}>{item.code}</Text>
        <View style={styles.callFooter}>
          <Text style={styles.statusCompleted}>Completed</Text>
        </View>
      </View>
      <Text style={styles.callAddress}>{item.address}</Text>
    </View>
  );


  const styles = StyleSheet.create({
    callCard: {
      backgroundColor: '#E6ECEC4D',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    callTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
    },
    callDate: {
      fontSize: 14,
      color: '#A8A8A8',
    },
    callCode: {
      fontSize: 14,
      color: '#000000',
    },
    callFooter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusCompleted: {
      fontSize: 12,
      color: '#064145',
      fontWeight: 'bold',
    },
    callAddress: {
      fontSize: 14,
      color: '#000000',
    },
    
  });