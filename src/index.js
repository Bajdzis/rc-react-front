import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//importy w głównym pliku
//który bedzie kopiowany wtedy bedzie można stworzyć komponenty z innymi układami wielokrotnego uzytku
import Pinfo from './modules/Pinfo';
import Gallery from './components/Gallery';
import Tabs from './components/Tabs';
import Tag from './components/Tag'
import Description from "./components/Description";
import Icon from './components/Icon';
import Option from './components/Option';
import Button from './components/Button'
//idwywidualnie zmienimy tylko importy i stworzymy nowe komponenty dla wszystkich

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App 
        pinfoModule={Pinfo}
        galleryComponent={Gallery}
        tabsComponent={Tabs}
        tagComponent={Tag}
        descriptionComponent={Description}
        iconComponent={Icon}
        optionComponent={Option}
        buttonComponent={Button}
    />,
    document.getElementById('root')
);
registerServiceWorker();
