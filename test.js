const findParts = require('./')

const tape = require('tape')
const _test = require('tape-promise').default
const test = _test(tape)

test('ensure it always resolves to an array', async function(t) {
	const foundParts = await findParts({ make: 'LOLBUTTFARTS' })

	t.true(Array.isArray(foundParts))
	t.end()
})

test('ensure the shape of the object', async function(t) {
	const foundParts = await findParts()

	const keysThatShouldExist = [
		'make',
		'model',
		'year',
		'color',
		'stockNumber',
		'rowNumber',
		'location',
		'dateInYard',
	]
	const foundPartsKeys = Object.keys(foundParts[0])
	t.true(keysThatShouldExist.every(key => foundPartsKeys.includes(key)))
	t.end()
})
