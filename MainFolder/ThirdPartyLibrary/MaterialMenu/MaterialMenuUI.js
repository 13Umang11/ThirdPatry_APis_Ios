import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Menu, MenuItem} from 'react-native-material-menu';

const DropUi = () => {
  //for textinput
  const [name, setname] = useState();
  const [mobile, setmobile] = useState();
  const [email, setemail] = useState();
  const [add, setadd] = useState();

  //for dropdown code
  const [open, setOpen] = useState(false);
  const [code, setcode] = useState('India');
  const [item, setItem] = useState([
    {label: '+91', value: 'India'},
    {label: '+1', value: 'Usa'},
  ]);

  //for cities dropdown
  const [open1, setOpen1] = useState(false);
  const [city, setcity] = useState('India');
  const [items, setItems] = useState([
    {label: 'Surat', value: 'Surat'},
    {label: 'Valsad', value: 'Valsad'},
  ]);

  //for metirial menu
  const [show, setshow] = useState();

  //hide menu
  const hideMenu = () => setshow(false);

  //show menu
  const showMenu = () => setshow(true);

  //onpress in menu
  const Refresh = () => {
    alert('Page Refresh');
  };
  const Settings = () => {
    alert('Page Settings');
  };
  const SendFeedBack = () => {
    alert('Page SendFeedBack');
  };
  const Help = () => {
    alert('Page Help');
  };

  return (
    <View>
      <View>
        <View style={{flexDirection: 'row', backgroundColor: '#6200EE'}}>
          <TouchableOpacity>
            <Image
              style={{height: 30, width: 30, margin: 10}}
              source={{
                uri: 'https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_list-30-256.png',
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            New Contact
          </Text>

          <View style={{marginLeft: '23%', flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30, margin: 10, marginLeft: '20%'}}
                source={{
                  uri: 'https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/search-256.png',
                }}
              />
            </TouchableOpacity>

            {/*This is for material menu */}
            <Menu
              style={{borderRadius: 20, marginTop: 28}}
              visible={show}
              anchor={
                <TouchableOpacity onPress={showMenu}>
                  <Image
                    style={{height: 20, width: 20, margin: 10, marginTop: 15}}
                    source={{
                      uri: 'https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_more-23-256.png',
                    }}
                  />
                </TouchableOpacity>
              }
              onRequestClose={hideMenu}>
              <MenuItem onPress={Refresh}>Refresh</MenuItem>
              <MenuItem onPress={Settings}>Settings</MenuItem>
              <MenuItem onPress={SendFeedBack}>Send FeedBack</MenuItem>
              <MenuItem onPress={Help}>Help</MenuItem>
              <MenuItem disabled>Sign Out</MenuItem>
            </Menu>
            {/*menu */}
          </View>
        </View>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5c2QCGWIDwM5VfLmcIWkU3aMzzQ18uf2ISQ&usqp=CAU',
        }}
      />
      <View style={{marginTop: 10, flexDirection: 'row'}}>
        <Image
          style={[styles.smpic]}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-128.png',
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Name"
          placeholderTextColor="#000000"
          onChangeText={setname}
          value={name}></TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={[styles.smpic]}
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-03-256.png',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <DropDownPicker
            open={open}
            value={code}
            items={item}
            setOpen={setOpen}
            setValue={setcode}
            setItems={setItem}
            //style
            style={{width: 50, zIndex: 2, elevation: 3}}
            containerStyle={{width: 50, margin: 10}}
            selectedItemLabelStyle={{fontWeight: 'bold'}}
            showArrowIcon={false}
            selectedItemContainerStyle={{backgroundColor: '#dfdfdf'}}
            textStyle={{textAlign: 'center'}}
            showTickIcon={false}
            dropDownDirection="TOP"
          />
          <TextInput
            style={styles.textmo}
            placeholder="Mobile No"
            keyboardType="number-pad"
            placeholderTextColor="#000000"
            onChangeText={setmobile}
            value={mobile}></TextInput>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={[styles.smpic]}
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo-14-128.png',
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Email id"
          keyboardType="email-address"
          placeholderTextColor="#000000"
          onChangeText={setemail}
          value={email}></TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={[styles.smpic]}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/home_house_desktop_dashboard-128.png',
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Address"
          placeholderTextColor="#000000"
          onChangeText={setadd}
          value={add}></TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={[styles.smpic]}
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami10-15-256.png',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <DropDownPicker
            open={open1}
            value={city}
            items={items}
            setOpen={setOpen1}
            setValue={setcity}
            setItems={setItems}
            //style
            style={{width: '100%', zIndex: 2, elevation: 3}}
            containerStyle={{width: '40%', margin: 10}}
            selectedItemLabelStyle={{fontWeight: 'bold'}}
            showArrowIcon={false}
            selectedItemContainerStyle={{backgroundColor: '#dfdfdf'}}
            textStyle={{textAlign: 'center'}}
            showTickIcon={false}
            placeholder="City"
            dropDownDirection="TOP"
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default DropUi;

const styles = StyleSheet.create({
  image: {
    height: '34%',
    width: '65%',
    marginHorizontal: 60,
    marginTop: 20,
  },
  smpic: {
    height: 25,
    width: 25,
    margin: 10,
    marginTop: 20,
  },
  textinput: {
    borderBottomWidth: 1,
    margin: 10,
    width: '78%',
    backgroundColor: '#dfdfdf',
    padding: 10,
  },
  btn: {
    backgroundColor: '#5890FF',
    margin: 10,
    width: 100,
    borderRadius: 30,
  },
  btntext: {
    padding: 10,
    textAlign: 'center',
    color: 'black',
  },
  textmo: {
    borderBottomWidth: 1,
    margin: 10,
    marginLeft: 0,
    width: '68%',
    backgroundColor: '#dfdfdf',
    padding: 10,
  },
});
