function person() {
    return {
        make: "Toyota",
        model: "Camry",
        year: "2021",
    };
}

const car = person();

for (const key in car) {
    console.log(key + ": " + car[key]);
}
