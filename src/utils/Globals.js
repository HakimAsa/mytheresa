import CONS from './Constants.js';

export const getMythRestUrl = () => {
  return CONS.API_URL;
};

export const validInput = (param) => {
  return typeof param === 'undefined' || (!param && typeof param === 'object') || (!param && typeof param === 'number');
};

export const doSetFullUrl = (hasForwardslash = true, ...endPoints) => {
  if (validInput(endPoints.length)) throw new Error('Your input array should contain at least one element');
  const hasFS = CONS.FORWARDSLASH + endPoints.join(CONS.FORWARDSLASH);
  return hasForwardslash
    ? hasFS.startsWith('//')
      ? getMythRestUrl() + hasFS.replace('//', '/')
      : getMythRestUrl() + hasFS
    : getMythRestUrl() + endPoints.join(CONS.FORWARDSLASH);
};

export const hideCharacters = (str, len = 35) => {
  if (str && typeof str !== 'string') throw new Error(CONS.INPUT_STRING);
  return str.length > len ? `${str.substring(0, len)}...` : str;
};
