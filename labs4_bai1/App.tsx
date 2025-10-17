import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import {FlatList} from 'react-native'
import Product from './components/Product'


export default function App() {

const products = [
  {
    id: '1',
    name: 'Cà nấu lẩu, nấu mì mini...',
    imageUrl: require('./assets/ca_nau_lau.png'),
    shopName: 'Shop Devang',
  },
  {
    id: '2',
    name: '1KG Khô Gà Bơ Tỏi...',
    imageUrl: require('./assets/ca_nau_lau.png'),
    shopName: 'LTD Food',
  },
  {
    id: '3',
    name: 'Xe Cần Cẩu Đa Năng',
    imageUrl: require('./assets/ca_nau_lau.png'),
    shopName: 'Thế giới đồ chơi',
  },
  {
    id: '4',
    name: 'Đồ Chơi Dạng Mô Hình',
    imageUrl: require('./assets/ca_nau_lau.png'),
    shopName: 'Thế giới đồ chơi',
  },
  {
    id: '5',
    name: 'Lãnh Đạo Giản Dọn',
    imageUrl: require('./assets/ca_nau_lau.png'),
    shopName: 'Minh Long Book',
  },
];


  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#1BA9FF', height:100,margin:0, padding:20, flex:1, justifyContent:'center',alignItems:'center', color:"#FFFF"}}>
          chat
      </View>
      <View style={{height:100,margin:20, flex:1, justifyContent:'center',alignItems:'center'}}>
         <View>
         ban co thac mac voi san pham vua xem dung ng chat voi shop
         </View>
      </View>
      
      <FlatList
        
        data={products}
        renderItem={({ item }) => (
          <Product name={item.name} imageUrl={item.imageUrl} shopName={item.shopName} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{backgroundColor:'#1BA9FF', height:100,margin:0, padding:20, flex:1, justifyContent:'center',alignItems:'center', color:"#FFFF"}}>
          chat
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
 
});
