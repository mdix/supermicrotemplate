# Usage
Really simple:

## Node
```javascript
const template = require('supermicrotemplate')
template(
    'All _plc_ are replaced, even multiple _plc_. It is _sml_ and does one _thg_ well.',
    {_plc_: 'placeholders', _sml_: 'small', _thg_: 'thing'})
```
## Require.js
I'm not sure. If you use require.js you probably know how to load it. ;)

## Browser
```html
<script src="supermicrotemplate.js"></script>
<script>
    supermicrotemplate(
        'All _plc_ are replaced, even multiple _plc_. It is _sml_ and does one _thg_ well.',
        {_plc_: 'placeholders', _sml_: 'small', _thg_: 'thing'})
</script>
```
