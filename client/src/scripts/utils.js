// dates
export class Dates {
  // adds days to a date
  // returns new fromated date 
  nextDate (dt, int) {
    let date = this.parse(dt)
    date.setDate(date.getDate() + int)
    return this.format(date)
  }
  
  // returns true if the first date
  // is >= the second date
  compare (dt1, dt2) {
    console.log('date one', this.parse(dt1))
    console.log('date two', this.parse(dt2))
    return (this.parse(dt1) >= this.parse(dt2))
  }

  // returns todays formated date
  now () {
    return this.format(new Date())
  }

  // formats date object to mm/dd/yyyy string
  format (dt) {
    return `${ (dt.getMonth()+1) }/${ dt.getDate() }/${ dt.getFullYear() }`
  }

  // parses date string into date object
  parse (str) {
    return new Date(str)
  }
}
