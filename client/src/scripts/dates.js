import { DateTime, Interval } from 'luxon'

// Dates
// ======================================================================

// returns a new datetime object
// of the current local time
export const now = () =>
  DateTime.local().startOf('day')

// accepts a datetime string
// returns a new datetime object
export const fresh = (str) =>
  DateTime.fromISO(str).startOf('day')

// accepts an interval
// returns a new ISO datetime string
// with the day increased by
// the  param interval
export const nextDate = (int) =>
  now().plus({ days: parseInt(int) }).toISODate()

// accepts a datetime object
// returns true if the param
// datetime is in the past
export const passed = (dt) =>
  Interval.fromDateTimes(fresh(dt), fresh(dt)).isBefore(now().endOf('day'))

// accepts a datetime object
// returns the difference in days between
// param datetime and current datetime
export const overdue = (dt) =>
  now().diff(fresh(dt), 'days').days
