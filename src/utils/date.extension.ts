declare global {
  interface Date {
    localTimeZone(): Date;
  }
}

Date.prototype.localTimeZone = function (): Date {
  const date = new Date(this.valueOf());
  const offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - offset);
  return date;
};

export {};
