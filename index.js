const scrapeIt = require(`scrape-it`)

module.exports = async function findPart(searchOptions = {}) {
	if(typeof searchOptions !== 'object') {
		throw new Error(`Invalid parameter passed. Got ${typeof searchOptions}. Expected object.`)
	}
	
	const { data } = await scrapeIt(`https://www.upullitne.com/search-inventory/`, {
		rows: {
			listItem: `tr`,
			data: {
				make: `td:first-child`,
				model: `td:nth-child(2)`,
				year: `td:nth-child(3)`,
				color: `td:nth-child(4)`,
				stockNumber: `td:nth-child(5)`,
				rowNumber: `td:nth-child(6)`,
				location: `td:nth-child(7)`,
				dateInYard: `td:nth-child(8)`,
			}
		}
	})
	const vehicleList = data.rows

	const searchKeys = Object.keys(searchOptions)
	if(searchOptions && searchKeys.length > 0) {
		const filteredVehicleList = vehicleList.filter(vehicle => {
			let included = true
			searchKeys.forEach(key => {
				if(Array.isArray(searchOptions[key])) {
					if(!searchOptions[key].map(val => `${val}`.toUpperCase()).includes(vehicle[key].toUpperCase())) {
						included = false
					}
				} else if(searchOptions[key].toUpperCase() !== vehicle[key].toUpperCase()) {
					included = false
				}
			})

			return included
		})

		return filteredVehicleList
	}

	return vehicleList
}
