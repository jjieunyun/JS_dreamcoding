const EventEmitter = require('events');

//직접 EventEmitter를 만들필요없이 상속받으면 된다.
//EventEmitter를만들면 객체내애서 발생하는 event만 들을 수 있다. -> 다른곳에서 들을 수없다
class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;
