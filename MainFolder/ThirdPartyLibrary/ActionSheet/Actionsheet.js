import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

const Actionsheet = () => {
  // const [show, onshow] = useState(false);

  const Actionshow = () => {
    SheetManager.show('helloworld_sheet');
  };
  // const Actionhide = () => {
  //   SheetManager.hideAll();
  // };

  return (
    <View>
      <ActionSheet
        id="helloworld_sheet"
        //ref={""}
        CustomHeaderComponent={<Text>"Delln"</Text>}
        initialOffsetFromBottom={5}
        extraScroll={0} //
        containerStyle={{
          width: '90%',
          borderRadius: 20,
          elevation: 4,
        }} // style of container
        delayActionSheetDraw={true} // delay true/false
        delayActionSheetDrawTime={100} // delay time of opening
        headerAlwaysVisible={true}
        // animated={false}
        // openAnimationSpeed={5}
        // closeAnimationDuration={400}
        gestureEnabled={true}
        // closeOnTouchBackdrop={false}
        //bounce
        bounceOnOpen={true} //bounce on open
        bounciness={20} // how much we want
        springOffset={100}
        //notch
        indicatorColor="#000000" //notch color
        indicatorStyle={{width: '60%'}} //notch style
        overlayColor="red" // Backgroundscreen color
        defaultOverlayOpacity={0.3} //backgrond opacity
        closable={true}
        bottomOffset={2}
        //keyborad settings
        keyboardShouldPersistTaps="always"
        keyboardHandlerEnabled={false}
        keyboardDismissMode="on-drag"
        statusBarTranslucen={false}
        //close onbackpressbutton in phone
        closeOnPressBack={false}
        // drawUnderStatusBar={true}
      >
        <ScrollView>
          <Text style={{textAlign: 'center', margin: 10}}>Apple</Text>
          <Text style={{textAlign: 'center', margin: 10}}>Apple</Text>
          <Text style={{textAlign: 'center', margin: 10}}>Apple</Text>
        </ScrollView>
      </ActionSheet>
      <View>
        <Text
          style={{textAlign: 'center', marginVertical: '50%'}}
          onPress={Actionshow}>
          Hello World
        </Text>
      </View>
    </View>
  );
};

export default Actionsheet;
