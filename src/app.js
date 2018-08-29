
import style from './assets/custom.css'; // eslint-disable-line no-unused-vars
import tableauwdcInit from '@tabloids/wdclib'; // eslint-disable-line no-unused-vars
// import Q from 'q';
import SpotifyConnector from './modules/SpotifyConnector';

tableauwdcInit();

let connector = new SpotifyConnector();

connector.register();
