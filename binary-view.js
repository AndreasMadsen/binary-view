
var padding = [
  '00000000',
  '0000000',
  '000000',
  '00000',
  '0000',
  '000',
  '00',
  '0',
  ''
];

function binaryView(typed) {
  var view = new DataView(typed.buffer, typed.byteOffset, typed.byteLength);
  var bytes = new Array(view.byteLength);

  var elemsize = typed.BYTES_PER_ELEMENT;

  var offset = 0;
  var index = 0;

  for (var e = 0; e < typed.length; e++) {

    for (var p = elemsize; p--;) {
      var b = view.getUint8(offset + p).toString(2);
      bytes[index] = padding[b.length] + b;

      index += 1;
    }

    offset += elemsize;
  }

  return bytes.join(' ');
}
module.exports = binaryView;
