import React, { Component } from 'react'
import Holidays from './Holidays'
import TextHolidays from './TextHolidays'

 class index extends Component {
  render() {
    return (
      <SectionHolidays>
        <HolidaysParent>
        <TextHolidays/>
          <Holidays/>
        </HolidaysParent>
          </SectionHolidays>
    )
  }
}
export default index
