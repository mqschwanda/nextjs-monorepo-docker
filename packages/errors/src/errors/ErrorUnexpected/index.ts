import messages from 'messages';

export default class ErrorUnexpected extends Error {
  constructor(
    message: string = messages.UNEXPECTED,
  ) {
    super(
      message,
    );
  }
}
