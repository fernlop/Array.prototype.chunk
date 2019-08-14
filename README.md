# Array.prototype.chunk

> Proposal

__Motivation:__

Many api's or handlers of large datasets have a limit per request. A function to split an array of datasets into chunks with the size of the limit and then processing them could make this much easier.
 
__Other usecases:__

If found many questions on the internet about splitting an array into equal parts. You could solve this with Array.prototype.chunk the following way:

```js
const array = [1,2,3,4,5,6,7,8,9,10];

const equalChunks = array.chunk(array.length/2); // To create 2 equal parts

```

__Proposal:__

Have a `Array.prototype.chunk` method, they might look like:

```js
// Limit of 5 items per request
const chunks = [1,2,3,4,5,6,7,8,9,10].chunk(5);
// chunks = [ [1,2,3,4,5][6,7,8,9,10] ]


chunks.forEach(chunk => submit(chunk))
// or
chunks.map(chunk => submit(chunk))

```

Function example for creating chunks:

```js
Array.prototype.chunk = function (size) {
    return this.reduce((chunks, el, i) => (i % size ?
    chunks[chunks.length - 1].push(el) :
    chunks.push([el])) && chunks, []);
}
```

__JS librarys using this:__

>Lodash: 

_.chunk(array, [size=1])

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

__ Requests / Discussions on the internet about this:__

>Split array into chunks
https://stackoverflow.com/questions/8495687/split-array-into-chunks


>How do you split an array into array pairs in JavaScript?
https://stackoverflow.com/questions/31352141/how-do-you-split-an-array-into-array-pairs-in-javascript

>Splitting a JS array into N arrays
https://stackoverflow.com/questions/8188548/splitting-a-js-array-into-n-arrays

	Duplicates:
	
	>Split array into chunks of N length [duplicate]
	https://stackoverflow.com/questions/11318680/split-array-into-chunks-of-n-length
	
	>
	https://stackoverflow.com/questions/31352141/how-do-you-split-an-array-into-array-pairs-in-javascript
	
	
Documentations about this:

>How to split an array into chunks of the same size easily in Javascript
https://ourcodeworld.com/articles/read/278/how-to-split-an-array-into-chunks-of-the-same-size-easily-in-javascript

	
>Four ways to chunk an array
https://medium.com/@Dragonza/four-ways-to-chunk-an-array-e19c889eac4

>JavaScript: Chunk an array into smaller arrays of a specified size
https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-265.php


>Split an array into chunks of a given size in JavaScript
https://binbytes.com/blog/split-an-array-into-chunks-of-a-given-size-in-javascript


>Array Chunking
https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking


>JavaScript: Split an array into chunks of a given size
http://www.frontcoded.com/splitting-javascript-array-into-chunks.html


https://gist.github.com/webinista/11240585





__How are other languages handling this?__

__PHP:__ 
```php
<?php
$input_array = array('a', 'b', 'c', 'd', 'e');
print_r(array_chunk($input_array, 2));
print_r(array_chunk($input_array, 2, true));
?>
```

I didn't find a built in solution for this in other languages but many requests for this functionality on stackoverflow:

>Java
https://stackoverflow.com/questions/12026885/is-there-a-common-java-utility-to-break-a-list-into-batches
https://stackoverflow.com/questions/19237371/split-array-into-pieces-of-x-length

>Python
https://stackoverflow.com/questions/312443/how-do-you-split-a-list-into-evenly-sized-chunks
https://stackoverflow.com/questions/2130016/splitting-a-list-into-n-parts-of-approximately-equal-length
https://stackoverflow.com/questions/24483182/python-split-list-into-n-chunks/29679492
