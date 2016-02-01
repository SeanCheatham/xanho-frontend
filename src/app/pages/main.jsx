import React from 'react';
import RaisedButton from '../../../node_modules/material-ui/lib/app-bar';
import ThemeManager from '../../../node_modules/material-ui/lib/styles/theme-manager';
import LightRawTheme from '../../../node_modules/material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from '../../../node_modules/material-ui/lib/styles/colors';
import Header from './../components/header';

const Main = React.createClass({


  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  },

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  },

  _handleTouchTap() {
    this.setState({
      open: true,
    });
  },

  render() {
    return (
        <Header />

        <Footer />
    );
  },
});

export default Main;
