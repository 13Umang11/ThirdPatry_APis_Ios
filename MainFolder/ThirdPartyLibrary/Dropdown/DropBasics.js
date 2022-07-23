import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  //activeindicator
  const [loading, setLoading] = useState(false);

  //country
  const [opencountry, setopencountry] = useState(false);
  const [value, setvalue] = useState('India');
  const [country, setcountry] = useState([
    {
      label: 'United States',
      value: 'United States',
      icon: () => (
        <Image
          style={{height: 20, width: 30}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
          }}
        />
      ),
    },
    {
      label: 'Italy',
      value: 'Italy',

      icon: () => (
        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/I/51GhVkfno6L._SY355_.jpg',
          }}
          style={{height: 20, width: 30}}
        />
      ),
    },
    {
      label: 'Russia',
      value: 'Russia',
      icon: () => (
        <Image
          source={{
            uri: 'https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg',
          }}
          style={{height: 20, width: 30}}
        />
      ),
    },
    {
      label: 'France',
      value: 'France',
      icon: () => (
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
          }}
          style={{height: 20, width: 30}}
        />
      ),
    },
    {
      label: 'Germany',
      value: 'Germany',
      icon: () => (
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
          }}
          style={{height: 20, width: 30}}
        />
      ),
    },
    {
      label: 'India',
      value: ' India',
      icon: () => (
        <Image
          source={{
            uri: 'https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3303/18825/india-flag__43506.1639690368.jpg?c=2',
          }}
          style={{height: 20, width: 30}}
        />
      ),
    },
  ]);

  //state
  const [openstate, setopenstate] = useState(false);
  const [value1, setvalue1] = useState();
  const [state, setstate] = useState([
    {label: 'Gujarat', value: 'Gujarat'},
    {label: 'Maharashtra', value: 'Maharashtra'},
    {label: 'Kerala', value: 'Kerala'},
    {label: 'West Bengal', value: 'West Bengal'},
    {label: 'Rajasthan', value: 'Rajasthan'},
    {label: 'Assam', value: 'Assam'},
  ]);

  const [opencity, setopencity] = useState(false);
  const [value2, setvalue2] = useState();
  const [city, setcity] = useState([
    {label: 'Surat', value: 'Surat'},
    {label: 'Valsad', value: 'Valsad'},
  ]);

  return (
    <View>
      <View style={{marginTop: 50, marginVertical: 190}}>
        <DropDownPicker
          //
          // for key
          itemKey="value"
          //

          style={{width: '40%', margin: 50, elevation: 4}}
          maxHeight={90}
          open={openstate}
          value={value1}
          showTickIcon={false}
          items={state}
          // showArrowIcon={false}
          // disableBorderRadius={true}
          // onPress={() => alert("it's open")}
          // disabled={true}
          // onOpen={() => console.log('open')}
          // onClose={() => console.log('close  ' + value1)}
          // onChangeValue={value1 => {
          //   console.log(value1);
          // }}

          // for matching witdh
          dropDownContainerStyle={{
            backgroundColor: '#dfdfdf',
            width: '40%',
            margin: 50,
          }}
          placeholder="Select State"
          placeholderStyle={{
            color: 'red',
            fontWeight: 'bold',
          }}
          textStyle={{shadowColor: 'black'}}
          setOpen={setopenstate}
          setValue={setvalue1}
          setItems={setstate}
        />
        <DropDownPicker
          style={{
            width: '40%',
            marginTop: 70,
            margin: 50,
            backgroundColor: 'green',
          }}
          //placeholder
          placeholder="Select Counrty"
          placeholderStyle={{color: 'black'}}
          //mode
          mode="SIMPLE"
          //search
          searchable={true}
          searchPlaceholder="search Country"
          searchPlaceholderTextColor="green"
          searchTextInputProps={{maxLength: 20}}
          addCustomItem={true}
          searchContainerStyle={{
            backgroundColor: '#dfdfdf',
            margin: 10,
            borderRadius: 20,
          }}
          searchTextInputStyle={{
            color: 'black',
          }}
          //for same as dropdown width
          dropDownContainerStyle={{
            backgroundColor: '#dfdfdf',
            width: '40%',
            margin: 50,
          }}
          //selected item
          selectedItemLabelStyle={{
            fontWeight: 'normal',
          }}
          selectedItemContainerStyle={{
            backgroundColor: 'blue',
          }}
          //active indicator
          loading={loading}
          //lable styteling
          textStyle={{fontWeight: 'bold', textAlign: 'center'}}
          disableBorderRadius={true}
          //mandotory values
          open={opencountry}
          showArrowIcon={false}
          value={value}
          items={country}
          showTickIcon={false}
          // onSelectItem={items => {
          //   console.log(items);
          // }}
          setOpen={setopencountry}
          setValue={setvalue}
          setItems={setcountry}
        />
      </View>
      <DropDownPicker
        style={{width: '40%', margin: 50, elevation: 4}}
        maxHeight={90}
        open={opencity}
        value={value2}
        showTickIcon={false}
        items={city}
        arrowIconContainerStyle={{}}
        dropDownDirection="TOP"
        placeholder="Select State"
        placeholderStyle={{
          color: 'red',
          fontWeight: 'bold',
        }}
        dropDownContainerStyle={{
          backgroundColor: '#dfdfdf',
          width: '40%',
          margin: 50,
        }}
        textStyle={{shadowColor: 'black'}}
        setOpen={setopencity}
        setValue={setvalue2}
        setItems={setcity}
        // when it's an only one item
        closeAfterSelecting={true}
      />
    </View>
  );
};
export default Dropdown;

const styles = StyleSheet.create({});
