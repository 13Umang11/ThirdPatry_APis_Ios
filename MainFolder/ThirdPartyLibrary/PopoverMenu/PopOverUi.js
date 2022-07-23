import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

//DropDown Menu
import DropDownPicker from 'react-native-dropdown-picker';
//Material Menu
import {Menu, MenuItem} from 'react-native-material-menu';
//Popover Menu
import Popover from 'react-native-popover-view';
//ActionSheet
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

const DropUi = () => {
  //for textinput
  const [name, setname] = useState();
  const [mobile, setmobile] = useState();
  const [email, setemail] = useState();
  const [add, setadd] = useState();

  //this is for Actionsheet
  const Actionshow = () => {
    SheetManager.show('helloworld_sheet');
  };
  const Actionhide = () => {
    SheetManager.hideAll();
  };

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
  //

  const Delete = () => {
    alert('Page Delete');
  };
  //   const Cancel = () => {
  //     alert('Page Cancel');
  //   };

  //popover
  const Share = () => {
    alert('Page Share');
  };
  const Report = () => {
    alert('Page Report');
  };
  const Forward = () => {
    alert('Page Forward');
  };

  return (
    <View>
      {/*   Actionsheet  */}
      <View>
        <ActionSheet
          id="helloworld_sheet"
          //ref={""}
          CustomHeaderComponent={
            <Text
              style={{
                textAlign: 'center',
                color: 'grey',
                margin: 10,
                fontWeight: 'bold',
              }}>
              Action{'\n'}
              <Text style={{fontWeight: 'normal'}}>
                Select any of the action below to proceed
              </Text>
            </Text>
          }
          headerAlwaysVisible={true}
          containerStyle={{
            width: '90%',
            borderRadius: 20,
            elevation: 4,
          }} // style of container
          extraScroll={2} //
          delayActionSheetDraw={true} // delay true/false
          delayActionSheetDrawTime={100} // delay time of opening
          //bounce
          bounceOnOpen={true} //bounce on open
          bounciness={10} // how much we want
          springOffset={100}
          //notch
          overlayColor="purple" // Backgroundscreen color
          defaultOverlayOpacity={0.2} //backgrond opacity
          bottomOffset={0}
          //keyborad settings
          keyboardShouldPersistTaps="always"
          keyboardHandlerEnabled={false}
          keyboardDismissMode="on-drag">
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 20, width: 20, margin: 15}}
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_settings_48px-128.png',
              }}
            />
            <TouchableOpacity onPress={Settings}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 10,
                  marginLeft: '35%',
                  color: 'black',
                }}>
                Setting
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 20, width: 20, margin: 15}}
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_delete_48px-128.png',
              }}
            />
            <TouchableOpacity onPress={Delete}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 10,
                  color: 'red',
                  marginLeft: '35%',
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 20, width: 20, margin: 15}}
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/navigation-40/24/cross-128.png',
              }}
            />
            <TouchableOpacity onPress={Actionhide}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 10,
                  marginLeft: '35%',
                  color: 'black',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
      </View>
      {/*   ActionSheet   */}
      <View>
        <View style={{flexDirection: 'row', backgroundColor: '#6200EE'}}>
          <Popover
            backgroundStyle={{backgroundColor: 'rgba(184, 191, 186,0.6)'}} //background styleing
            popoverStyle={{
              borderRadius: 20,
            }} //Popover menu styleing
            arrowStyle={{backgroundColor: 'black'}} // Arrowstyleing
            // arrowShift={3} //Arrow shifting
            from={
              <TouchableOpacity>
                <Image
                  style={{height: 30, width: 30, margin: 15}}
                  source={{
                    uri: 'https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_list-30-256.png',
                  }}
                />
              </TouchableOpacity>
            }>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, margin: 15}}
                source={{
                  uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-256.png',
                }}
              />
              <TouchableOpacity onPress={Share}>
                <Text style={styles.popover}>Share This Contact</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, margin: 15}}
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_bug_report_48px-128.png',
                }}
              />
              <TouchableOpacity onPress={Report}>
                <Text style={styles.popover}>Report</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, margin: 15}}
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/typicons-2/24/arrow-forward-256.png',
                }}
              />
              <TouchableOpacity onPress={Forward}>
                <Text style={styles.popover}>Forward</Text>
              </TouchableOpacity>
            </View>
          </Popover>
          <Text
            style={{
              marginTop: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            New Contact
          </Text>

          <View style={{marginLeft: '23%', flexDirection: 'row', marginTop: 5}}>
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
            {/*Marterieal menu */}
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
          {/*   Actionsheet Button */}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={Actionshow} style={styles.btnedit}>
              <Text style={styles.btntext}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btnsave}>
        <Text style={styles.btntext}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DropUi;

const styles = StyleSheet.create({
  image: {
    height: '30%',
    width: '60%',
    marginHorizontal: 75,
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
  btnedit: {
    backgroundColor: '#df03fc',
    margin: 10,
    width: 100,
    borderRadius: 30,
    marginLeft: 20,
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
  btnsave: {
    backgroundColor: '#5890FF',
    margin: 10,
    width: '90%',
    marginLeft: 15,
    borderRadius: 30,
  },
  popover: {
    textAlign: 'center',
    marginHorizontal: 20,
    margin: 10,
    marginTop: 20,
    color: 'black',
  },
});
