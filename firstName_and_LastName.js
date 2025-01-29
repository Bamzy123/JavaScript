const person = {
	firstName: "Stephen",
	lastName: "Omotoso",

	fullName: function() {
		return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())