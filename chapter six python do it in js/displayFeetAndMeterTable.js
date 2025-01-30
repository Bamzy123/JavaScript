function footToMeter(foot) {
	return 0.305 * foot;
}

function meterToFoot(meter) {
	return meter / 0.305;
}

function displayFeetAndMeterTable() {
	console.log("Feet   Meters |  Meters     Feet");
	console.log("-----------------------------------------");

	 for (let foot = 1, meter = 20; foot <= 10; foot++, meter += 6) {
        console.log(`${foot.toFixed(1).padStart(4)}    ${footToMeter(foot).toFixed(3).padStart(6)}  |  ` + `${meter.toFixed(1).padStart(4)}    ${meterToFoot(meter).toFixed(3).padStart(6)}`);
   }
}
displayFeetAndMeterTable()


