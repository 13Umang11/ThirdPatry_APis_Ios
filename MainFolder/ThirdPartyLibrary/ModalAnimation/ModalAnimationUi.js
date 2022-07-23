import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';

//Modal Animation
import Modal from 'react-native-modal';
//DropDown Menu
import DropDownPicker from 'react-native-dropdown-picker';
//Material Menu
import {Menu, MenuItem} from 'react-native-material-menu';
//Popover Menu
import Popover from 'react-native-popover-view';
//ActionSheet
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
//this is for modal actionsheet
import Actionsheet from 'react-native-action-sheet-modal';

import {
  back,
  close,
  dele,
  setting,
  menu,
  sharei,
  bug,
  forwordi,
  search,
  dots,
  profile,
  call,
  mail,
  house,
  user,
  location,
} from '../assets';

const ModalAnimationUi = () => {
  //for textinput
  const [name, setname] = useState();
  const [mobile, setmobile] = useState();
  const [email, setemail] = useState();
  const [add, setadd] = useState();
  const [popshow, setpophide] = useState(false);

  const Popshow = () => {
    setpophide(true);
  };
  const pophide = () => {
    setpophide(false);
  };

  //this is for Actionsheet
  const Actionshow = () => {
    SheetManager.show('Action');
  };
  const Actionhide = () => {
    SheetManager.hideAll('Action');
  };

  //this is for modal Actionsheet
  const [showam, setshowam] = useState(false);
  const [select, onselect] = useState('');

  const list = [
    {
      name: 'Choose from camera',
      value: 'Camera',
    },
    {
      name: 'Choose from gallery',
      value: 'Gallery',
    },
  ];
  const ShowAm = () => {
    setshowam(true);
  };
  const onchange = (value, extraData) => {
    onselect(value);
    setshowam(false);
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

  //for Modal Animation ShoW / Hide
  const [modal, setmodal] = useState(false);
  const [del, setdel] = useState(false);
  const [share, setshare] = useState(false);
  const [report, setreport] = useState(false);
  const [forword, setforword] = useState(false);
  const Share = () => {
    setshare(!share);
  };
  const Report = () => {
    setreport(!report);
  };
  const For = () => {
    setforword(!forword);
  };
  const Show = () => {
    setmodal(!modal);
  };
  const Del = () => {
    setdel(!del);
  };

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

  //   const Cancel = () => {
  //     alert('Page Cancel');
  //   };

  //popover

  return (
    <View style={{flex: 1}}>
      {/*   Modal Animation  for settings  */}
      <StatusBar barStyle="light-content" backgroundColor={'#3C4DAC'} />
      <View>
        <Modal
          isVisible={modal}
          style={{
            backgroundColor: 'white',
            maxHeight: '20%',
            width: '90%',
            borderRadius: 20,
            elevation: 3,
            marginVertical: '70%',
          }}
          animationIn="slideInLeft"
          animationOut="flipInY"
          animationInTiming={500}
          animationOutTiming={800}
          backdropColor="black"
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={800}
          onBackdropPress={Show}
          onBackButtonPress={Show}
          backdropOpacity={0}
          swipeDirection={['up', 'down', 'left', 'right']}>
          <View style={{margin: 10}}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Setting
            </Text>
            <Text style={{color: 'black', margin: 10}}>This is Setting</Text>
            <View>
              <TouchableOpacity
                onPress={Show}
                style={{
                  backgroundColor: 'black',
                  opacity: 0.4,
                  maxWidth: '40%',
                  borderRadius: 20,
                  marginLeft: '30%',
                }}>
                <Text
                  style={{color: 'black', textAlign: 'center', padding: 10}}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* for delete */}
      <View>
        <Modal
          isVisible={del}
          style={{
            backgroundColor: 'white',
            maxHeight: '20%',
            width: '90%',
            borderRadius: 20,
            elevation: 3,
            marginVertical: '70%',
          }}
          animationIn="fadeInUpBig"
          animationOut="swing"
          animationInTiming={500}
          animationOutTiming={500}
          backdropColor="black"
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          onBackdropPress={Del}
          onBackButtonPress={Del}
          backdropOpacity={0}
          swipeDirection={['up', 'down', 'left', 'right']}>
          <View style={{margin: 10}}>
            <Text
              style={{
                marginTop: 15,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Do you want to <Text style={{color: 'red'}}>Delete</Text> this
              {'\n'}
              Account?
            </Text>
            <Text style={{color: 'black', marginTop: 20, textAlign: 'center'}}>
              You cannot undo this action
            </Text>
            <View style={{flexDirection: 'row', margin: 10}}>
              <TouchableOpacity
                onPress={Del}
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  opacity: 0.4,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'blue',
                    textAlign: 'center',
                    padding: 10,
                    fontWeight: 'bold',
                  }}>
                  Cancal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Del}
                style={{
                  borderTopWidth: 1,

                  opacity: 0.4,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 10,
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal animation in delete */}
      {/* Modal animation in share in Popover */}
      <View>
        <Modal
          isVisible={forword}
          style={{
            backgroundColor: 'white',
            maxHeight: '20%',
            width: '90%',
            borderRadius: 20,
            elevation: 3,
            marginVertical: '70%',
          }}
          animationIn="rubberBand"
          animationOut="pulse"
          animationInTiming={500}
          animationOutTiming={500}
          backdropColor="black"
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          onBackdropPress={For}
          onBackButtonPress={For}
          backdropOpacity={0}
          swipeDirection={['up', 'down', 'left', 'right']}>
          <View style={{margin: 10}}>
            <Text
              style={{
                marginTop: 15,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Do you want to <Text style={{color: 'purple'}}>Forword</Text> this
              {'\n'}
              Account?
            </Text>
            <Text style={{color: 'black', marginTop: 20, textAlign: 'center'}}>
              You cannot undo this action
            </Text>
            <View style={{flexDirection: 'row', margin: 10}}>
              <TouchableOpacity
                onPress={For}
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  opacity: 0.4,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'blue',
                    textAlign: 'center',
                    padding: 10,
                    fontWeight: 'bold',
                  }}>
                  Cancal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={For}
                style={{
                  borderTopWidth: 1,
                  opacity: 0.6,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 10,
                  }}>
                  Forward
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal animation in for in Popover */}
      <View>
        <Modal
          isVisible={share}
          style={{
            backgroundColor: 'white',
            maxHeight: '20%',
            width: '90%',
            borderRadius: 20,
            elevation: 3,
            marginVertical: '70%',
          }}
          animationIn="rubberBand"
          animationOut="pulse"
          animationInTiming={500}
          animationOutTiming={500}
          backdropColor="black"
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          onBackdropPress={Share}
          onBackButtonPress={Share}
          backdropOpacity={0}
          swipeDirection={['up', 'down', 'left', 'right']}>
          <View style={{margin: 10}}>
            <Text
              style={{
                marginTop: 15,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Do you want to <Text style={{color: 'green'}}>Share</Text> this
              {'\n'}
              Account?
            </Text>
            <Text style={{color: 'black', marginTop: 20, textAlign: 'center'}}>
              You cannot undo this action
            </Text>
            <View style={{flexDirection: 'row', margin: 10}}>
              <TouchableOpacity
                onPress={Share}
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  opacity: 0.4,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'blue',
                    textAlign: 'center',
                    padding: 10,
                    fontWeight: 'bold',
                  }}>
                  Cancal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Share}
                style={{
                  borderTopWidth: 1,
                  opacity: 0.6,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'green',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 10,
                  }}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal animation in Forword in Popover */}
      {/* Modal animation in Report in Popover */}
      <View>
        <Modal
          isVisible={report}
          style={{
            backgroundColor: 'white',
            maxHeight: 180,
            width: '90%',
            borderRadius: 20,
            elevation: 3,
            marginTop: '70%',
          }}
          animationIn="rotate"
          animationOut="fadeOut"
          animationInTiming={500}
          animationOutTiming={500}
          backdropColor="black"
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          onBackdropPress={Report}
          onBackButtonPress={Report}
          backdropOpacity={0}
          swipeDirection={['up', 'down', 'left', 'right']}>
          <View style={{margin: 10}}>
            <Text
              style={{
                marginTop: 15,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Tell us about <Text style={{color: 'red'}}>Report</Text> In
              {'\n'}
              Brief
            </Text>

            <TextInput
              style={{
                maxWidth: '100%',
                borderRadius: 20,
                marginVertical: 10,
                textAlign: 'center',
                color: 'black',
                backgroundColor: '#b7bdbd',
              }}
              placeholder="Write here about the issue"
              placeholderTextColor="black"></TextInput>

            <View style={{flexDirection: 'row', margin: 10}}>
              <TouchableOpacity
                onPress={Report}
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  opacity: 0.4,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'blue',
                    textAlign: 'center',
                    padding: 10,
                    fontWeight: 'bold',
                  }}>
                  Cancal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Report}
                style={{
                  borderTopWidth: 1,
                  opacity: 0.6,
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 10,
                  }}>
                  Report
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal animation in Forword in Popover */}
      {/*   Modal Animation   */}

      {/* Actionsheet modalsheet */}
      <Actionsheet
        options={list}
        isVisible={showam}
        onClose={() => setshowam(false)}
        onChange={onchange}
        hideCancel={false}
        cancelText="Close"
        cancelTextStyle={{fontSize: 15}}
        cancelContainerStyle={{backgroundColor: 'white'}}
        optionsTextStyle={{fontSize: 15}}
        optionsContainerStyle={{backgroundColor: 'white'}}
        modalProps={{
          animationInTiming: 800,
        }}></Actionsheet>
      {/* Actionsheet modalsheet */}

      {/*   Actionsheet  */}
      <View>
        <ActionSheet
          id="Action"
          CustomHeaderComponent={
            <Text
              style={{
                textAlign: 'center',
                color: 'grey',
                margin: 10,
                fontWeight: 'bold',
              }}>
              Action{'\n'}
              <Text style={{fontWeight: 'normal', textAlign: 'center'}}>
                Select any of the action below to proceed
              </Text>
            </Text>
          }
          headerAlwaysVisible={true}
          containerStyle={{
            width: '95%',
            borderRadius: 20,
            elevation: 4,
          }} // style of container
          extraScroll={2} //
          delayActionSheetDraw={true} // delay true/false
          delayActionSheetDrawTime={100} // delay time of opening
          //bounce
          bounceOnOpen={false} //bounce on open
          // how much we want
          springOffset={100}
          //notch
          overlayColor="black" // Backgroundscreen color
          defaultOverlayOpacity={0.7} //backgrond opacity
          bottomOffset={0}
          //keyborad settings
          keyboardShouldPersistTaps="always"
          keyboardHandlerEnabled={false}
          keyboardDismissMode="on-drag">
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 20, width: 20, margin: 15}}
              source={setting}
            />
            <TouchableOpacity onPress={Show} onPressIn={Actionhide}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 10,
                  marginLeft: '40%',
                  color: 'black',
                }}>
                Setting
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image style={{height: 20, width: 20, margin: 15}} source={dele} />
            <TouchableOpacity onPress={Del} onPressIn={Actionhide}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 10,
                  color: 'red',
                  marginLeft: '40%',
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={{height: 20, width: 20, margin: 15}} source={close} />
            <TouchableOpacity onPress={Actionhide} onPressIn={Actionhide}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 10,
                  marginLeft: '40%',
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
        <View style={{flexDirection: 'row', backgroundColor: '#3C4DAC'}}>
          <Popover
            isVisible={popshow}
            backgroundStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}} //background styleing
            popoverStyle={{
              borderRadius: 20,
            }} //Popover menu styleing
            arrowStyle={{backgroundColor: '#fff'}} // Arrowstyleing
            // arrowShift={} //Arrow shifting
            from={
              <TouchableOpacity onPress={Popshow}>
                <Image
                  style={{height: 30, width: 30, margin: 15}}
                  source={menu}
                />
              </TouchableOpacity>
            }>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, margin: 15}}
                source={sharei}
              />
              <TouchableOpacity onPress={Share} onPressIn={pophide}>
                <Text style={styles.popover}>Share This Contact</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={{height: 30, width: 30, margin: 15}} source={bug} />
              <TouchableOpacity onPress={Report} onPressIn={pophide}>
                <Text style={styles.popover}>Report</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, margin: 15}}
                source={forwordi}
              />
              <TouchableOpacity onPress={For} onPressIn={pophide}>
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
                source={search}
              />
            </TouchableOpacity>

            {/*This is for material menu */}
            <Menu
              style={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                marginTop: 28,
                marginLeft: -18,
              }}
              visible={show}
              anchor={
                <TouchableOpacity onPress={showMenu}>
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      margin: 10,
                      marginLeft: 5,
                      marginTop: 15,
                    }}
                    source={dots}
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
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View>
            <TouchableOpacity activeOpacity={1} onPress={ShowAm}>
              <Image style={styles.image} source={profile} />
            </TouchableOpacity>
          </View>

          <View
            style={{justifyContent: 'space-evenly', flexDirection: 'column'}}>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Image style={[styles.smpic]} source={user} />
              <TextInput
                style={styles.textinput}
                placeholder="Name"
                placeholderTextColor="#000000"
                onChangeText={setname}
                value={name}></TextInput>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={[styles.smpic]} source={call} />
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
                  value={mobile}
                  maxLength={10}></TextInput>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={[styles.smpic]} source={mail} />
              <TextInput
                style={styles.textinput}
                placeholder="Email id"
                keyboardType="email-address"
                placeholderTextColor="#000000"
                onChangeText={setemail}
                value={email}></TextInput>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image style={[styles.smpic]} source={house} />
              <TextInput
                style={styles.textinput}
                placeholder="Address"
                placeholderTextColor="#000000"
                onChangeText={setadd}
                value={add}></TextInput>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{...styles.smpic, marginTop: 15, height: 35, width: 35}}
              source={location}
            />
            <View style={{flexDirection: 'row', marginLeft: -3}}>
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
      </ScrollView>
    </View>
  );
};
export default ModalAnimationUi;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  smpic: {
    height: 32,
    width: 32,
    margin: 10,
    marginTop: 22,
  },
  textinput: {
    borderBottomWidth: 1,
    margin: 10,
    width: '78%',
    padding: 10,
  },
  btnedit: {
    backgroundColor: '#017AD5',
    margin: 10,
    width: 100,
    borderRadius: 30,
    marginLeft: 20,
    justifyContent: 'center',
  },
  btntext: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  textmo: {
    borderBottomWidth: 1,
    margin: 10,
    marginLeft: 0,
    width: '68%',
    padding: 10,
  },
  btnsave: {
    alignSelf: 'center',
    backgroundColor: '#3C4DAC',
    margin: 10,
    width: '90%',
    marginLeft: 10,
    borderRadius: 30,
    padding: 7,
  },
  popover: {
    textAlign: 'center',
    marginHorizontal: 20,
    margin: 10,
    marginTop: 20,
    color: 'black',
  },
});
