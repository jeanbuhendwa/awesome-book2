import { DateTime } from './luxon.js';

const dateTime = document.getElementById('dateTime');

const newDate = () => {
  const dtime = DateTime.fromISO('2023-02-20T13:46:00');
  const humanReadable = dtime
    .setLocale('en')
    .toLocaleString(DateTime.DATETIME_FULL);

  dateTime.innerHTML += humanReadable;
};

export default newDate;
