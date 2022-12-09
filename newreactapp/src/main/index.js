
import { Component } from 'react';
// import {Title} from '../MainTags'
import FindGift from './findGift/index';
import TextHolidays from './holidays/TextHolidays'
import Holidays from './holidays/Holidays';
import HowToWork from './howToWork';

class Main extends Component{
    render(){
        return(
            <main>
          <FindGift/>
         <HowToWork/>
         <TextHolidays/>
         <Holidays/>
            </main>
        )
    }
}


export default Main