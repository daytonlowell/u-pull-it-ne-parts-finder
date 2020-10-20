U-Pull-It NE Parts Finder

> A JS api for querying upullitne.com/search-inventory

# Install
`npm i u-pull-it-ne-parts-finder`

# Usage
## API
The main function optionally takes an object with any of the following properties for filtering: 
* `make`
* `model`
* `year`
* `color`
* `stockNumber`
* `rowNumber`
* `location`
* `dateInYard`

They can be `string`s or an `array` of `string`s to be ORing your search.

A `Promise` is returned that `resolve`s to an `array` of `object` matches. See `Example Output` section below.

```js
const findPart = require('u-pull-it-ne-parts-finder')

findPart({
	make: [ 'CHEVROLET', 'PONTIAC' ],
	model: [ 'EQUINOX', 'TORRENT'],
	year: [ 2005, 2006, 2007, 2008, 2009 ],
	location: 'LINCOLN',
}).then(foundParts => {
	//whatever
})
```

# Example Output
```js
[
  {
    make: 'PONTIAC',
    model: 'TORRENT',
    year: '2006',
    color: 'BLACK',
    stockNumber: 'LCN014193',
    rowNumber: '214',
    location: 'LINCOLN',
    dateInYard: '2020-07-28'
  },
  {
    make: 'CHEVROLET',
    model: 'EQUINOX',
    year: '2005',
    color: 'MAROON',
    stockNumber: 'LCN014981',
    rowNumber: '201',
    location: 'LINCOLN',
    dateInYard: '2020-09-16'
  },
  {
    make: 'CHEVROLET',
    model: 'EQUINOX',
    year: '2006',
    color: 'WHITE',
    stockNumber: 'LCN015010',
    rowNumber: '201',
    location: 'LINCOLN',
    dateInYard: '2020-09-16'
  },
  {
    make: 'CHEVROLET',
    model: 'EQUINOX',
    year: '2007',
    color: 'BLUE',
    stockNumber: 'LCN015160',
    rowNumber: '204',
    location: 'LINCOLN',
    dateInYard: '2020-09-22'
  },
  {
    make: 'CHEVROLET',
    model: 'EQUINOX',
    year: '2006',
    color: 'WHITE',
    stockNumber: 'LCN015184',
    rowNumber: '205',
    location: 'LINCOLN',
    dateInYard: '2020-09-24'
  },
  {
    make: 'CHEVROLET',
    model: 'EQUINOX',
    year: '2007',
    color: 'BLACK',
    stockNumber: 'LCN015351',
    rowNumber: '207',
    location: 'LINCOLN',
    dateInYard: '2020-10-02'
  }
]
```