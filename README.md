#binary-view

> Return a pretty binary print of a typed array

## Installation

```sheel
npm install binary-view
```

## Documentation

This module is a single function there takes a TypedArray and outputs a string,
in a binary format.

```JavaScript
  var bview = require('binary-view');

  console.log(bview(new Int16Array([1, 2])) // '00000000 00000001 00000000 00000010'
```

The module assumes that the underlying byte data is stored as little endian,
which is by far the most common and used by all Intel processors. However the
output string is in big endian, since this is the network byte order and in
my opinion the most readable (by humans).

##License

**The software is license under "MIT"**

> Copyright (c) 2014 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
