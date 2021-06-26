const EventEmitter = require('events');

// Create class 

class MyEmitter extends EventEmitter {}

// Init onject

const myEmitter = new MyEmitter();

//Event Listener

myEmitter.on('event', () => console.log('Event Fired!'));

//Init event
myEmitter.emit('event');

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
