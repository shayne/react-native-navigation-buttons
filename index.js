/* @flow */
'use strict';

var React = require('react-native');

var {
  Text,
  TouchableOpacity,
  View,
} = React;

var ReactART = require('react-native/Libraries/ART/ReactNativeART');

var {
  Group,
  Surface,
  Shape,
} = ReactART;


var ARROW_PATH = "M 0.5,21 L 22,42 26,38 9,21 26,4 22,-0 0.5,21 Z M 0.5,21";

class LeftNavigationButton extends React.Component {
  render() {
    var [ow, oh] = [26, 42];
    var {width, height, ...innerStyle} = {
      width: 13,
      height: 21,
      alignItems: 'center',
      paddingLeft: 8,
      flexDirection: 'row',
      ...this.props.style};

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={innerStyle}>
            <Surface width={width} height={height}>
              <Group scaleX={width / ow} scaleY={height / oh}>
                <Shape fill="#3d71ff" d={ARROW_PATH} />
              </Group>
            </Surface>
            <Text numberOfLines={1} style={{ width: 112, fontSize: 17, color: '#3d71ff', paddingLeft: 6, top: -0.25 }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = {
  LeftNavigationButton,
};
