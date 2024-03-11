declare global {
  interface Date {
    localTimeZone(): Date;

    now(): Date;

    addSeconds(seconds: number): Date;

    addMinutes(minutes: number): Date;

    addHours(hours: number): Date;

    addDays(days: number): Date;

    minusSeconds(seconds: number): Date;

    minusMinutes(minutes: number): Date;

    minusHours(hours: number): Date;

    minusDays(days: number): Date;

    isBefore(other: Date): boolean;

    isAfter(other: Date): boolean;

    getDayStart(): Date;

    getDayEnd(): Date;
  }
}

Date.prototype.localTimeZone = function (): Date {
  const date = new Date(this.valueOf());
  const offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - offset);
  return date;
};

Date.prototype.now = function (): Date {
  return new Date();
};

Date.prototype.addSeconds = function (seconds: number): Date {
  return new Date(this.getTime() + seconds * 1000);
};

Date.prototype.addMinutes = function (minutes: number): Date {
  return new Date(this.getTime() + minutes * 60 * 1000);
};

Date.prototype.addHours = function (hours: number): Date {
  return new Date(this.getTime() + hours * 60 * 60 * 1000);
};

Date.prototype.addDays = function (days: number): Date {
  return new Date(this.getTime() + days * 24 * 60 * 60 * 1000);
};

Date.prototype.minusSeconds = function (seconds: number): Date {
  return new Date(this.getTime() - seconds * 1000);
};

Date.prototype.minusMinutes = function (minutes: number): Date {
  return new Date(this.getTime() - minutes * 60 * 1000);
};

Date.prototype.minusHours = function (hours: number): Date {
  return new Date(this.getTime() - hours * 60 * 60 * 1000);
};

Date.prototype.minusDays = function (days: number): Date {
  return new Date(this.getTime() - days * 24 * 60 * 60 * 1000);
};

Date.prototype.isBefore = function (other: Date): boolean {
  return this < other;
};

Date.prototype.isAfter = function (other: Date): boolean {
  return this > other;
};

Date.prototype.getDayStart = function (): Date {
  const date = new Date(this.valueOf());
  date.setHours(0, 0, 0, 0);
  return date;
};

Date.prototype.getDayEnd = function (): Date {
  const date = new Date(this.valueOf());
  date.setHours(23, 59, 59, 999);
  return date;
};

export {};
