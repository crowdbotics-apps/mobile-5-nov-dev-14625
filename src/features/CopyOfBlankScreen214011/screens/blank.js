import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_3: true, Switch_4: false, Switch_5: true }

  render = () => (
    <View>
      <Button
        title="Press me!"
        color="727cf5"
        onPress={() => alert("Pressed!")}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_3}
        onValueChange={nextChecked => this.setState({ Switch_3: nextChecked })}
      />
      <Switch
        activeColor="#49d064"
        inactiveColor="#d37a36"
        value={this.state.Switch_4}
        onValueChange={nextChecked => this.setState({ Switch_4: nextChecked })}
      />
      <Switch
        activeColor="#ff42e9"
        trackColor={{ false: "#C0CCDA", true: "#ff42e9" }}
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Button_2: {},
  Switch_3: {},
  Switch_4: {},
  Switch_5: {}
})
