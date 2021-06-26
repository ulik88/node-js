const { Obserable } = require('rxjs');

const obserable = Obserable.create(obserable => {
    obserable.next('Hello');
    obserable.next('World');
    obserable.error('An Error occured');
    obserable.complete();
});

obserable.subscribe(
    data => console.log('Data: ', data),
    error => console.log('Error: ', error),
    finished => console.log('Finished!'),
);