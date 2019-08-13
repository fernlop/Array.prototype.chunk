const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

Array.prototype.chunk = function (size) {
    return this.reduce((chunks, el, i) => (i % size ?
    chunks[chunks.length - 1].push(el) :
    chunks.push([el])) && chunks, []);
}

const chunks = data.chunk(5);

console.log(chunks);