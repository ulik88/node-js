const { Observable, merge } = require('rxjs')

const observables = [
    Observable.create(observer => observer.next('Hello')),
    Observable.create(observer => observer.next('Hello')),
    Observable.create(observer => observer.next('Hello'))
]

const mergedObservables = merge(...observables)
mergedObservables.subscribe(event => { console.log(event) })