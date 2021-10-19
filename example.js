const repeat = require('./repeate');

console.log('repeat("a", 5): ', repeat('a', 5));
console.log('repeat("a", 0): ', repeat('a', 0));

console.log('repeat("testme ", 2): ', repeat('testme', 2));

try {
  const v = repeat('x', undefined);

  console.log('repeat("x", undefined):', v);
} catch (e) {
  console.log(' ---- error was thrwn when calling: repeat("x", undefined) ---- ');
  console.error(e);
}
