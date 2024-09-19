import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const phonesData = [
  { id: '1', image: require('./assets/image/vs_silver.png'), title: 'Điện Thoại Vsmart Joy 3 \n- Hàng chính hãng', color: 'Hồng', price: '$1790001', supplierName: 'Tiki Tradding' 
  },
  { id: '2', image: require('./assets/image/vs_red.png'),  title: 'Điện Thoại Vsmart Joy 3 \n- Hàng chính hãng', color: 'Đỏ', price: '$1790002', supplierName: 'Tiki Tradding'
  },
  { id: '3', image: require('./assets/image/vs_black.png'), title: 'Điện Thoại Vsmart Joy 3 \n- Hàng chính hãng', color: 'Đen', price: '$1790003', supplierName: 'Tiki Tradding'
  },
  { id: '4', image: require('./assets/image/vs_blue.png'), title: 'Điện Thoại Vsmart Joy 3 \n- Hàng chính hãng', color: 'Xanh', price: '$1790004', supplierName: 'Tiki Tradding'
  }
];

function PhoneDetailScreen({route, navigation}) {
  // Dữ liệu điện thoại đã chọn được truyền từ SelectionColorScreen
  const { SelectPhones } = route.params || {}; // Trường hợp không có selectedPhone thì giữ nguyên

  // Lấy dữ liệu của điện thoại từ phonesData dựa trên màu đã chọn
  const phoneDetail = phonesData.find(phone => phone.color === SelectPhones) || phonesData[0]; // Nếu không có chọn thì mặc định là điện thoại đầu tiên

  return (
    <ScrollView style={styles.container}>
      <Image
        source={phoneDetail.image} // Thay đổi URL này với URL hình ảnh thực tế
        style={styles.productImage}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.productTitle}>{phoneDetail.title}</Text>
        <Text style={styles.productPrice}>{phoneDetail.price}</Text>
        <Text style={styles.originalPrice}>1.990.000 đ</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★★★★★</Text>
          <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
        </View>
        <Text style={styles.promotion}>Giảm giá khi thanh toán qua VietQR</Text>
        <TouchableOpacity style={styles.colorButton} 
                          onPress={() => navigation.navigate('Selection Color')}>
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

function SelectionColorScreen({navigation}) {
  const [SelectPhones,setPhones] = useState('Xanh');

  const filterPhone = () =>{
    return phonesData.filter(phone => phone.color === SelectPhones);
  }

  return (
    <ScrollView style = {stylesColorScreen.container}>
      <FlatList
          data={filterPhone()} 
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
             <View style={stylesColorScreen.DetailPhoneView}>
                <Image 
                  source = {item.image}
                  style={stylesColorScreen.phoneImage}
                />
                <View style={stylesColorScreen.DetailPhoneText}>
                  <Text style = {stylesColorScreen.TextDefault}>
                    {item.title}
                  </Text>
                  <Text style = {stylesColorScreen.TextDefault}>
                    Màu: {item.color}
                  </Text>
                  <Text style = {stylesColorScreen.TextDefault}>
                    Cung cấp bởi {item.supplierName}
                  </Text>
                  <Text style = {stylesColorScreen.TextDefault}>
                    Giá: {item.price}
                  </Text>
                </View> 
             </View>
          )}
        />

      <View style={stylesColorScreen.SelectionColor}>
        <Text>
          Chọn một màu bên dưới:
        </Text>

        <TouchableOpacity onPress = { () => setPhones('Hồng')}>
          <Image 
        source = {require('./assets/image/Blue1.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

        <TouchableOpacity onPress = { () => setPhones('Đỏ')}>
          <Image 
        source = {require('./assets/image/Red.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

        <TouchableOpacity onPress = { () => setPhones('Đen')}>
          <Image 
        source = {require('./assets/image/Black.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

        <TouchableOpacity onPress = { () => setPhones('Xanh')}>
          <Image 
        source = {require('./assets/image/Blue2.png')}
        style={stylesColorScreen.ColorImage}
      />
        </TouchableOpacity>

      <TouchableOpacity style ={stylesColorScreen.submitButton} 
         onPress={() => {
            // Truyền dữ liệu về màn hình Phone Detail khi nhấn XONG
            navigation.navigate('Phone Detail', { SelectPhones });
          }}>
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
      <Stack.Navigator initialRouteName="Phone Detail">
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

    DetailPhoneText: {
      padding: 20,
      flexDirection: 'column',
    },

    TextDefault:{
      // padding: 20,
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
      width: 80,
      height: 80, 
      margin: 5     
    },

    submitButton:{
      backgroundColor: '#6699FF',
      margin:10,
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 10,
      paddingBottom: 10
    },

    submitText:{
      color: 'white',
      fontWeight: 700
    }
});

