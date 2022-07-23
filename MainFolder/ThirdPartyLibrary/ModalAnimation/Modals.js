import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
//Modal Animation
import CustomModal from './CustomModal';

const Modals = () => {
  // const [btn2, setmodal] = useState(false);
  const [btn1, setbtn1] = useState(false);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);
  const [btn4, setbtn4] = useState(false);
  const [btn5, setbtn5] = useState(false);
  const [btn6, setbtn6] = useState(false);
  const [btn7, setbtn7] = useState(false);
  const [btn8, setbtn8] = useState(false);

  const Btn1 = () => {
    setbtn1(!btn1);
  };
  const Btn2 = () => {
    setbtn2(!btn2);
  };
  const Btn3 = () => {
    setbtn3(!btn3);
  };
  const Btn4 = () => {
    setbtn4(!btn4);
  };
  const Btn5 = () => {
    setbtn5(!btn5);
  };
  const Btn6 = () => {
    setbtn6(!btn6);
  };
  const Btn7 = () => {
    setbtn7(!btn7);
  };
  const Btn8 = () => {
    setbtn8(!btn8);
  };

  return (
    <ScrollView>
      <View>
        {/*  1 */}

        <View>
          <CustomModal
            isVisible={btn1}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            onPress={Btn1}
          />
        </View>
        {/*  1 */}
        {/* 2 */}
        <View>
          <CustomModal
            isVisible={btn2}
            animationIn="fadeInUp"
            animationOut="fadeInDown"
            onPress={Btn2}
          />
        </View>
        {/*  2 */}
        {/*  3 */}
        <View>
          <CustomModal
            isVisible={btn3}
            animationIn="lightSpeedIn"
            animationOut="lightSpeedOut"
            onPress={Btn3}
          />
        </View>
        {/*  3 */}
        {/*  4 */}
        <View>
          <CustomModal
            isVisible={btn4}
            animationIn="flipInX"
            animationOut="flipOutY"
            onPress={Btn4}
          />
        </View>
        {/*  4 */}
        {/*  5 */}
        <View>
          <CustomModal
            isVisible={btn5}
            animationIn="pulse"
            animationOut="rotate"
            onPress={Btn5}
          />
        </View>
        {/*  5 */}
        {/*  6 */}
        <View>
          <CustomModal
            isVisible={btn6}
            animationIn="rubberBand"
            animationOut="shake"
            onPress={Btn6}
          />
        </View>
        {/*  6 */}
        {/*  7 */}
        <View>
          <CustomModal
            isVisible={btn7}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onPress={Btn7}
          />
        </View>
        {/*  7 */}
        {/*  8 */}
        <View>
          <CustomModal
            isVisible={btn8}
            animationIn="swing"
            animationOut="tada"
            onPress={Btn8}
          />
        </View>
        {/*  8 */}

        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn1}>
            <Text style={styles.btntext}>Bounce</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn2}>
            <Text style={styles.btntext}>Fade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn3}>
            <Text style={styles.btntext}>LightSpeed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn4}>
            <Text style={styles.btntext}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn5}>
            <Text style={styles.btntext}>Rotate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn6}>
            <Text style={styles.btntext}>RubberBand</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn7}>
            <Text style={styles.btntext}>Slide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnsave}
            onPress={Btn8}>
            <Text style={styles.btntext}>Swing</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Modals;

const styles = StyleSheet.create({
  btnsave: {
    backgroundColor: '#fff',
    margin: 10,
    elevation: 5,
    width: '90%',
    marginLeft: 15,
    borderRadius: 30,
    marginVertical: 15,
  },
  btntext: {
    padding: 10,
    textAlign: 'center',
    color: 'black',
  },
});
