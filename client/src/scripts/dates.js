// Dates
// ======================================================================

// how long overdue
export const overdue = (dt) => {
  const diff = Math.abs(parse(dt).getTime() - nowRaw().getTime())
  return Math.ceil(diff / (1000 * 3600 * 24))
}

// has the provided date passed
export const passed = (dt) => {
  return compare(nowRaw(), dt)
}

// adds days to a date
// returns new fromated date
export const nextDate = (dt, int) => {
  let date = parse(dt)
  date.setDate(date.getDate() + int)
  console.log('next date', date)
  console.log('formated next date', format(date))
  return format(date)
}

// returns true if the first date
// is >= the second date
export const compare = (dt1, dt2) => {
  const d1 = (typeof dt1 === 'string') ? parse(dt1) : dt1
  const d2 = (typeof dt2 === 'string') ? parse(dt2) : dt2
  return (d1 >= d2)
}

// returns todays raw date
export const nowRaw = () => {
  return new Date()
}

// returns todays formated date
export const now = () => {
  return format(new Date())
}

// formats date object to mm/dd/yyyy string
export const format = (dt) => {
  return `${(dt.getMonth() + 1)}/${dt.getDate()}/${dt.getFullYear()}`
}

// parses date string into date object
export const parse = (str) => {
  return new Date(str)
}
