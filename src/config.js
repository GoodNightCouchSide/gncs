/*eslint-disable */
export const remoteCouchdbUrl =
  process.env.NODE_ENV === 'development'
    ? `${window.location.protocol}//${window.location.hostname}:5984/gncs`
    : 'TODO'
/*eslint-enable */
