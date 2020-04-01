## a-random-string

> A a super simple random string generator.

a-random-string creates a random 7 digit string consisting of upper and lowercase letters along with numbers.

### to use

```js
const arandomstring = require('a-random-string');

console.log(arandomstring.generate());
```

Mongoose Random Id
```js
_id: {
    'type': String,
    'default': arandomstring.generate
}
```

Currently this package only supports a seven digit string.