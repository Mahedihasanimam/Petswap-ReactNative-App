import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { IconNotification, message, navigateicon, qurcode, uplodimg } from '../assets/icons/Icons';
import avater from '../assets/images/Profile.png'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
  const Navigation=useNavigation();
  const [isScanning, setIsScanning] = useState(false);

  const onSuccess = (e) => {
    setIsScanning(false);
    Alert.alert('QR Code Scanned', e.data);
  };

  const closedCallsData = [
    { id: '1', title: 'ViewSonic', date: '17/12/2024', code: 'JF265NC0SB', address: 'Road no. 14, Block-D, Banasree, Dhaka.' },
    { id: '2', title: 'Samsung', date: '20/12/2024', code: 'AB345FCX23', address: 'Road no. 3, Block-B, Gulshan, Dhaka.' },
    { id: '3', title: 'Apple', date: '22/12/2024', code: 'XY908SDA43', address: 'Road no. 10, Block-C, Dhanmondi, Dhaka.' },
    { id: '4', title: 'Apple', date: '22/12/2024', code: 'XY908SDA43', address: 'Road no. 10, Block-C, Dhanmondi, Dhaka.' },
    { id: '5', title: 'ViewSonic', date: '17/12/2024', code: 'JF265NC0SB', address: 'Road no. 14, Block-D, Banasree, Dhaka.' },
    { id: '6', title: 'Samsung', date: '20/12/2024', code: 'AB345FCX23', address: 'Road no. 3, Block-B, Gulshan, Dhaka.' },
    { id: '7', title: 'Apple', date: '22/12/2024', code: 'XY908SDA43', address: 'Road no. 10, Block-C, Dhanmondi, Dhaka.' },
    { id: '8', title: 'Apple', date: '22/12/2024', code: 'XY908SDA43', address: 'Road no. 10, Block-C, Dhanmondi, Dhaka.' }
  ];

  const renderClosedCall = ({ item }) => (
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
  return (
    <ScrollView style={styles.container}>
      {/* He ader------------------------------------------ */}
      <View style={styles.header}>

        <View style={styles.profileInfo}>
          <Image
            source={avater}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.greeting}>Good afternoon,</Text>
            <Text style={styles.userName}>Md.mehedi Hasan</Text>
          </View>
        </View>
        <View style={styles.buttons}>


          <TouchableOpacity  >
            <SvgXml xml={message} />

          </TouchableOpacity>
          <TouchableOpacity  >
            <SvgXml xml={IconNotification} />

          </TouchableOpacity>
        </View>
      </View>

      {/* QR Code Section */}
     
       <View style={styles.qrSection}>
        <TouchableOpacity
          style={styles.qrBox}
          onPress={() => setIsScanning(true)}
        >
          <SvgXml xml={qurcode} />
          <Text style={styles.scanText}>Scan the QR code of your device</Text>
        </TouchableOpacity>
      </View>

      {/* QR Scanner Modal */}
      <Modal visible={isScanning} animationType="slide">
        <QRCodeScanner
          onRead={onSuccess}
          showMarker={true}
          reactivate={true}
          topContent={<Text style={styles.centerText}>Scanning...</Text>}
          bottomContent={
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => setIsScanning(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          }
        />
      </Modal>

      {/* Open Calls */}
      <View style={styles.callsSection}>
        <Text style={styles.sectionTitle}>Open calls</Text>
        <View style={styles.callCard}>
          <View style={styles.buttons}>
            <Text style={styles.callTitle}>ViewSonic</Text>
            <Text style={styles.callDate}>17/12/2024</Text>
            <TouchableOpacity>
              <SvgXml xml={navigateicon } />
            </TouchableOpacity>
          </View>

          <View style={styles.buttons}>
          <Text style={styles.callCode}>JF265NC0SB</Text>
          <View style={styles.callFooter}>
            <Text style={styles.statusNew}>New</Text>
          </View>

          </View>
          <Text style={styles.callAddress}>Road no. 14, Block-D, Banasree, Dhaka.</Text>
        </View>
      </View>

      {/* Closed Calls */}
      <View style={styles.callsSection}>
        <View style={styles.closedHeader}>
          <Text style={styles.sectionTitle}>Closed calls</Text>
          <TouchableOpacity onPress={() => Navigation.navigate('allrecomendation')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={closedCallsData}
          renderItem={renderClosedCall}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   
  },
  header: {
    backgroundColor: '#E50914',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,


  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  time: {
    color: 'white',
    fontSize: 18,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    color: 'white',
    fontSize: 14,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qrSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  qrBox: {
    width:'95%',
    
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    borderStyle: 'dashed',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanText: {
    marginTop: 10,
    color: '#888888',
    fontSize: 14,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  buttonTouchable: {
    padding: 16,
    backgroundColor: '#FF5252',
    borderRadius: 8,
    margin: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  callsSection: {
    backgroundColor: 'white',
    padding:5,
   
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  callCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  
  callTitle: {
    color: '#FF0205',
    fontSize: 14,
    fontWeight: '500',
  },
  callCode: {
    color: '#000000',
    fontSize:12,
    fontWeight: '500',
    marginVertical: 5,
  },
  callAddress: {
    color: '#878787',
    fontSize: 14,
    fontWeight: '400',
  },
  callFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  callDate: {
    color: '#878787',
    fontSize: 10,
    fontWeight:'400',
  },
  statusNew: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#FF8383',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  statusCompleted: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#00950A',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  closedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  

  },
  seeAll: {
    color: '#000000',
    fontWeight: 'bold',
    borderColor: '#FF6769',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15
  }


});

export default HomePage;
