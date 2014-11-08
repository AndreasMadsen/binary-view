
var os = require('os');
var test = require('tap').test;
var bview = require('./binary-view.js');

test('byte padding', function(t) {
  t.equal(bview(new Uint8Array([0])), '00000000');

  t.equal(bview(new Uint8Array([1])), '00000001');
  t.equal(bview(new Uint8Array([2])), '00000010');

  t.equal(bview(new Uint8Array([3])), '00000011');
  t.equal(bview(new Uint8Array([4])), '00000100');

  t.equal(bview(new Uint8Array([7])), '00000111');
  t.equal(bview(new Uint8Array([8])), '00001000');

  t.equal(bview(new Uint8Array([15])), '00001111');
  t.equal(bview(new Uint8Array([16])), '00010000');

  t.equal(bview(new Uint8Array([31])), '00011111');
  t.equal(bview(new Uint8Array([32])), '00100000');

  t.equal(bview(new Uint8Array([63])), '00111111');
  t.equal(bview(new Uint8Array([64])), '01000000');

  t.equal(bview(new Uint8Array([127])), '01111111');
  t.equal(bview(new Uint8Array([128])), '10000000');

  t.equal(bview(new Uint8Array([255])), '11111111');
  t.end();
});

test('multibyte order', function(t) {
  t.equal(bview(new Uint8Array( [1, 2])), '00000001 00000010');
  t.equal(bview(new Uint16Array([259 ])), '00000001 00000011');
  t.equal(bview(new Int16Array([2])), '00000000 00000010');
  t.equal(bview(new Int16Array([1, 2])), '00000000 00000001 00000000 00000010');

  t.equal(bview(new Int8Array(  [-1, -1])), '11111111 11111111');
  t.equal(bview(new Int16Array( [-1    ])), '11111111 11111111');

  t.equal(bview(new Int32Array([255])), '00000000 00000000 00000000 11111111');

  t.end();
});

test('array offset', function(t) {
  var a = new Uint16Array([0, 1, 2, 3, 4, 5]);
  var b = a.subarray(2, 4);

  t.equal(bview(b), '00000000 00000010 00000000 00000011');
  t.end();
});
