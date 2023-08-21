const messages = {
  IS_REQUIRED: 'is required',
  NOT_AUTHORIZED: 'not authorized',
  UNEXPECTED: 'an unexpected error occurred',
};

export function buildRequiredErrorMessage(key: string) {
  return [key, messages.IS_REQUIRED].join(' ');
}

export default messages;
