import React from 'react';
import ReactDOM from 'react-dom';
import Concore from 'concore-sdk-js';
import * as serviceWorker from './serviceWorker';

/* CSS */
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'react-toastify/dist/ReactToastify.css';
import './_assets/css/app.css';

/* JS */
import 'owl.carousel/dist/owl.carousel.min.js';
import 'bootstrap/js/dist/util.js';
import 'bootstrap/js/dist/modal.js';
import './_js/scroll.js';
import './_js/others.js';


/* App Router */
import AppRouter from './router.jsx';

/* CONSTS */
import { CONFIG } from './_constants/index.js';

/* INIT CONCORE*/
Concore.init('https://api.concore.io/api', CONFIG.APP_ID, CONFIG.APP_KEY);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
