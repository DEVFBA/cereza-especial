import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {
  Row
} from 'react-bootstrap';

import { 
  Header
} from '../components/Header';

import { 
  ButtonsSection
} from '../containers/ButtonsSection';
import { 
  BestSmile
} from '../containers/BestSmile';
import { 
  Dec4_2020
} from '../containers/Dec4_2020';
import { 
  Dec6_2020
} from '../containers/Dec6_2020';
import { 
  Dec11_2020
} from '../containers/Dec11_2020';
import { 
  Dec18_2020
} from '../containers/Dec18_2020';
import { 
  Dec25_2020
} from '../containers/Dec25_2020';
import { 
  Jan1_2021
} from '../containers/Jan1_2021';
import { 
  SpecialInvitation
} from '../containers/SpecialInvitation';
import { 
  May10_2021
} from '../containers/May10_2021';
import { 
  Sep09_2021
} from '../containers/Sep09_2021';

import {
  weekDay,
  monthString
} from '../utils/generalFunctions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

function App() {

  const[dayName, setDayName]            = useState('');
  const[day, setDay]                    = useState('');
  const[month, setMonth]                = useState('');
  const[year, setYear]                  = useState('');

  useEffect(() => {

    let date                              = new Date();

    setDay(date.getDate());
    setDayName(weekDay(date.getDay()));
    setMonth(monthString(date.getMonth()));
    setYear(date.getFullYear());

  }, []);

  return (
    <Fragment>

      <BrowserRouter>
      
        <Header 
          dayName         = { dayName }
          day             = { day }
          month           = { month }
          year            = { year }
        />

        <ButtonsSection />

        <Row
          className       = 'mt-5'
        >
          <Switch>
            <Route exact path   = '/dec42020'             component = { Dec4_2020 }/>
            <Route exact path   = '/dec62020'             component = { Dec6_2020 }/>
            <Route exact path   = '/dec112020'            component = { Dec11_2020 }/>
            <Route exact path   = '/dec182020'            component = { Dec18_2020 }/>
            <Route exact path   = '/dec252020'            component = { Dec25_2020 }/>
            <Route exact path   = '/jan12021'             component = { Jan1_2021 }/>
            <Route exact path   = '/BestSmile'            component = { BestSmile }/>
            <Route exact path   = '/SpecialInvitation'    component = { SpecialInvitation }/>
            <Route exact path   = '/may1022021'           component = { May10_2021 }/>
            <Route exact path   = '/sep092021'            component = { Sep09_2021 }/>
          </Switch>
        </Row>

      </BrowserRouter>


    </Fragment>

  );
}

export default App;
