import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const coursesData = [
//   { id: '1', title: 'Product Design', author: 'Dennis Sweeney', price: '$190', rating: '4.5', lessons: '12 lessons', image: require('./assets/image/ProductDesign.jpg') 
//   },
//   { id: '2', title: 'Website Design', author: 'Ramono Wultschner', price: '$59', rating: '4.5', lessons: '12 lessons', image: require('./assets/image/WebsiteDesign.jpg') 
//   },
//   { id: '3', title: 'Mobile UI Design', author: 'Ramono Wultschner', price: '$320', rating: '4.5', lessons: '12 lessons', image: require('./assets/image/MobileUI_Design.jpg') 
//   },
//   { id: '4', title: 'Digital Portrait', author: 'Ramono Wultschner', price: '$67', rating: '4.5', lessons: '12 lessons', image: require('./assets/image/digital_Portrait.jpg') 
//   }
// ];

function PhoneDetailScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/image/DefaultPhone.png')} // Thay đổi URL này với URL hình ảnh thực tế
        style={styles.productImage}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <Text style={styles.productPrice}>1.790.000 đ</Text>
        <Text style={styles.originalPrice}>1.990.000 đ</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★★★★★</Text>
          <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
        </View>
        <Text style={styles.promotion}>Giảm giá khi thanh toán qua VietQR</Text>
        <TouchableOpacity style={styles.colorButton} 
                          onPress={() => navigation.navigate('SelectionColorScreen')}>
  <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
  <Text style={styles.colorButtonArrow}>></Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function SelectionColorScreen() {
  return (
    <ScrollView style = {stylesColorScreen.container}>
      <View style={stylesColorScreen.DetailPhoneView}>
      <Image 
        source = {require('./assets/image/DefaultPhone.png')}
        style={stylesColorScreen.phoneImage}
      />

        <Text style = {stylesColorScreen.TextDefault}>
          Điện thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>

      <View style={stylesColorScreen.SelectionColor}>
        <Text>
          Chọn một màu bên dưới:
        </Text>

        <TouchableOpacity>
          <Image 
        source = {require('./assets/image/Blue1.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
        source = {require('./assets/image/Red.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
        source = {require('./assets/image/Black.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
        source = {require('./assets/image/Blue2.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

      <TouchableOpacity style ={stylesColorScreen.submitButton}>
        <Text style ={stylesColorScreen.submitText}>
          XONG
        </Text>
      </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();



export default function App() {

  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Phone Detail" component={PhoneDetailScreen} />
      <Stack.Screen name="Selection Color" component={SelectionColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300, // Có thể thay đổi kích thước tùy theo yêu cầu
    resizeMode: 'contain'
  },
  detailContainer: {
    padding: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'grey',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    color: 'gold',
    marginRight: 10,
  },
  reviewCount: {
    fontSize: 12,
    color: 'grey',
  },
  promotion: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  colorButton: {
  flexDirection: 'row', // Chỉnh các phần tử con theo hàng ngang
  alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
  backgroundColor: 'white',
  borderColor: '#8c4eed',
  borderWidth: 1,
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 20,
  marginTop: 10,
  marginBottom: 20,
  justifyContent: 'space-between' // Phân bố khoảng cách đều giữa nội dung và biểu tượng
},
colorButtonText: {
  color: '#8c4eed',
  fontWeight: 'bold'
},
colorButtonArrow: {
  color: '#8c4eed',
  fontWeight: 'bold',
  fontSize: 18 // Có thể điều chỉnh kích thước cho phù hợp
},

});


const stylesColorScreen = StyleSheet.create({
    container:{
       flexDirection:'column',
    },

    DetailPhoneView:{
      flex:1,
      flexDirection:'row',
      padding: 20,
      // marginBottom: -20
    },

    phoneImage:{
      width: 90,
      height: 110,
    },

    TextDefault:{
      padding: 10,
      fontWeight: 600,
      fontSize: 16,
    },

    SelectionColor:{
      flex: 3,
      flexDirection: 'column',
      backgroundColor: '#C0C0C0',
      alignItems: 'center',
      
    },

    ColorImage:{
      width: 60,
      height: 60, 
      margin: 5     
    },

    submitButton:{
      backgroundColor: '#6699FF',
      margin:10,
      paddingLeft: 50,
      paddingRight: 50

    },

    submitText:{
      color: 'white',
      fontWeight: 700
    }
});

