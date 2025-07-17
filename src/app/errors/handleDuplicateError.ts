import { TErrorSources, TGenericErrorResponse } from '../interface/errors';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: `${extractedMessage} is already exists`,
    errorSources,
  };
};

export default handleDuplicateError;