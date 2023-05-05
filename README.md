# kformatter

Convert numbers to k,m... made easy

<hr>

Solution to express numbers in **k,M,G,T,P,E**
e.g 1234 to 1.2k, 1243215 to 1.2M

## Installation

<hr>
Using npm:

`  $ npm i kmformatter`

## Quick Start

Import the libary and use the format nFormatter(number, decimal)

```js
// load the library
import { formatter } from 'kmformatter';

console.log(formatter(1234, 1));
console.log(formatter(1234, 2));

console.log(formatter(3423567, 1));
console.log(formatter(3423567, 3));
```

output

```console
$ 1.2k
$ 1.23k
$ 3.4M
$ 3.423M
```

Special thanks to [@Salman A](https://stackoverflow.com/users/87015/salman-a). He wrote the entire solution, I just modified and released it as an npm package for easier usage.

[This is](https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900) the original reddit comment I took the code from.
