import React from 'react';
import { YellowBox } from 'react-native';

import Routes from './routes';

// remove a mensagem de alerta do socket io
YellowBox.ignoreWarnings(['Unrecognized WebSocket'])

// import { Container } from './styles';

const App = () => <Routes />;

export default App;
