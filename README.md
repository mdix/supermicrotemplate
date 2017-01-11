# Usage
Really simple:
```javascript
const template = require('supermicrotemplate')
template(
    'All _plc_ are replaced, even multiple _plc_. It is _sml_ and does one _thg_ well.',
    {_plc_: 'placeholders', _sml_: 'small', _thg_: 'thing'})
```