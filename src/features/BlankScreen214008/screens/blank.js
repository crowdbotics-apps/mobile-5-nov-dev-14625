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

  state = { Switch_3: true, Switch_4: false }

  render = () => (
    <View>
      <Button
        title="Press me!"
        color="727cf5"
        onPress={() => alert("Pressed!")}
      />
      <Switch
        value={this.state.Switch_3}
        onValueChange={nextChecked => this.setState({ Switch_3: nextChecked })}
      />
      <Switch
        activeColor="#49d064"
        inactiveColor="#d37a36"
        trackColor={{ false: "#d37a36", true: "#49d064" }}
        value={this.state.Switch_4}
        onValueChange={nextChecked => this.setState({ Switch_4: nextChecked })}
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
  Switch_2: {},
  View_1: {},
  Button_2: {},
  View_1: {},
  Button_2: {},
  Switch_3: {},
  View_1: {},
  Button_2: {},
  Switch_3: {},
  Switch_4: {}
})
