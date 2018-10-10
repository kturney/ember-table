export default function(object, action, ...args) {
  if (typeof object[action] === 'function') {
    return object[action](...args);
  }

  return object.sendAction(action, ...args);
}
