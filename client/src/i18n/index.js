import { HomeMessages } from 'containers/Home';

const formats = {
  date: {
    date: {
      timeZone: 'utc',
    },
  },
  number: {
    money: {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'symbol',
      maximumFractionDigits: 2,
    },
    date: {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    },
    compact: {
      notation: 'compact',
      compactDisplay: 'short',
      minimumFractionDigits: 3,
      maximumSignificantDigits: 2,
    },
  },
};
const messages = {
  ...HomeMessages,
};
export { messages, formats };
