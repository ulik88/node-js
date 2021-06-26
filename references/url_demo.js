const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialize Url

console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialize query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through param

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));