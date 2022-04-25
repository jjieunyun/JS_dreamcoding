//이벤트 만들기

//events라는 노드js모듈안에 있는 EventEmitter클래스 가져오기
const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};
emitter.on('ellie', callback1);

emitter.on('ellie', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('ellie', { message: 1 });
emitter.emit('ellie', { message: 2 });
emitter.removeAllListeners(); //모든 이벤트 제거
emitter.emit('ellie', { message: 3 });
