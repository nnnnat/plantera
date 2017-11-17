// dates
export class Dates {
  // how long overdue
  overdue (dt) {
    const diff = Math.abs(this.parse(dt).getTime() - this.nowRaw().getTime())
    return Math.ceil(diff / (1000 * 3600 * 24))
  }

  // has the provided date passed
  passed (dt) {
    return this.compare(this.nowRaw(), dt)
  }

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
    const d1 = (typeof dt1 === 'string') ? this.parse(dt1) : dt1
    const d2 = (typeof dt2 === 'string') ? this.parse(dt2) : dt2
    return (d1 >= d2)
  }

  // returns todays raw date
  nowRaw () {
    return new Date()
  }

  // returns todays formated date
  now () {
    return this.format(new Date())
  }

  // formats date object to mm/dd/yyyy string
  format (dt) {
    return `${(dt.getMonth() + 1)}/${dt.getDate()}/${dt.getFullYear()}`
  }

  // parses date string into date object
  parse (str) {
    return new Date(str)
  }
}
