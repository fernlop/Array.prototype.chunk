# Array.prototype.chunk

> Proposal

__Motivation:__

Many api's or handlers of large datasets have a limit per request. A function to split an array of datasets into chunks with the size of the limit and then processing them could make this much easier.
 

__Proposal:__

Have a `Array.prototype.chunk` method, they might look like:

```js
// Limit of 5 items per request
const chunks = [1,2,3,4,5,6,7,8,9,10].chunk(5);
// chunks = [ [1,2,3,4,5][6,7,8,9,10] ]

```

__How are other langugaes handling this?__

__PHP:__ 
```php
<?php
$input_array = array('a', 'b', 'c', 'd', 'e');
print_r(array_chunk($input_array, 2));
print_r(array_chunk($input_array, 2, true));
?>
```
