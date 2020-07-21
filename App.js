import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Router , Scene , Lightbox ,Drawer} from 'react-native-router-flux';
import {Root} from "native-base";
import {connect , Provider} from 'react-redux';




import Login from './src/Login'
import WebSite from './src/Items/WebSite'
import Guide from './src/Items/Guide'
import CameraRoll from './src/Items/CameraRoll'


import Reports from './src/tabs/Reports'
import Cartable from './src/tabs/Cartable'
import CartableItems from './src/tabs/CartableItems'
import Setting from './src/tabs/Setting'
import Mission from './src/allreports/Mission'

import GetCurrentLocation from './src/tabs/GetCurrentLocation'
import SendCurrentLocation from './src/tabs/SendCurrentLocation'

import Intro from './src/Items/Intro'



import Splash from './src/Splash'
import DrawerLayout from './src/Items/DrawerLayout'
import store from './src/redux/store'

EStyleSheet.build({
    $statusBarColor : '#2c3e50',
    $headerColor : '#34495e',
    $IS : 'IRANSansMobile'
})


import {Platform, StyleSheet, Text, View} from 'react-native';
import CardLog from './src/allreports/CardLog';
import UserCardLog from './src/allreports/UserCardLog';
import WaittingForMe from './src/allreports/WaittingForMe';

import Defective from './src/allreports/Defective'
import Output from './src/allreports/Output';
import LeaveRequest from './src/requests/LeaveRequest';
import CardlogRequest from './src/requests/CardlogRequest';

import MissionRequest from './src/requests/MissionRequest';
import RemainLeave from './src/allreports/RemainLeave';
import UserStatus from './src/allreports/UserStatus';



export default class App extends  React.Component {
  render() {
 const RouterWithRedux = connect()(Router)
 const refreshOnBack = () => {Actions.pop({refresh:{}})}

//export PATH="/Users/asmasormeili/Library/Android/sdk/platform-tools":$PATH
    return (
           <Provider store={store}>

   <Root>
            <RouterWithRedux>
                <Scene hideNavBar>
                    <Scene key="root" hideNavBar>
                    <Scene key="login" direction="vertical" component={Login}    />

                        <Drawer
                          direction="horizontal"
                            key="drawer"
                            contentComponent={DrawerLayout}
          
                            drawerPosition="right"
                        >
                            <Scene hideNavBar>
                              
                                <Scene key="getcurrentlocation" direction="vertical" component={GetCurrentLocation}    />
                                <Scene key="sendcurrentlocation" direction="vertical" component={SendCurrentLocation}    />
                                <Scene key="cameraroll" direction="vertical" component={CameraRoll}    />

                                <Scene key="reports" direction="horizontal" component={Reports}  initial />
                                <Scene key="cartable" direction="horizontal" component={Cartable}   />
                                <Scene key="website" direction="horizontal" component={WebSite}   />
                                <Scene key="guide" direction="horizontal" component={Guide}   />

                                <Scene key="setting" direction="vertical" component={Setting}   />
                                <Scene key="leaverequest" direction="vertical" component={LeaveRequest}   />
                                <Scene key="cardlogrequest" direction="vertical" component={CardlogRequest}   />

                                <Scene key="missionrequest" direction="vertical" component={MissionRequest}   />
                                <Scene key="remainleavereport" direction="vertical" component={RemainLeave}   />

                                <Scene key="intro" direction="vertical" component={Intro}    />
                                <Scene key="cardlogreport" direction="vertical" component={CardLog}    />
                                <Scene key="usercardlogreport" direction="vertical" component={UserCardLog}    />
                                <Scene key="waittingforme" direction="vertical" component={WaittingForMe}    />


                                <Scene key="defectivereport" direction="vertical" component={Defective}    />
                                <Scene key="outputreport" direction="vertical" component={Output}    />
                                <Scene key="userstatusreport" direction="vertical" component={UserStatus}    />

                                <Scene key="missionreport" direction="vertical" component={Mission}    />
                                <Scene key="cartableitems" direction="horizontal" component={CartableItems}   />












                            </Scene>
                        </Drawer>
                    </Scene>

                    <Scene key="splash" component={Splash} initial/>
                </Scene>
            </RouterWithRedux>
            </Root>

               </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


