// class Department {
// 	//public is default
// 	private name: string;
// 	private employees: string[] = [];

// 	constructor(n: string) {
// 		this.name = n;
//     }

//shortcut syntax
class Department {
	//property accessible globally with Department.fiscalYear, similar to Math.random() or Object.keys()
	static fiscalYear = 2020;
	protected employees: string[] = [];
	//have to explicitly set public in this case
	constructor(private readonly id: string, public name: string) {
		//cannot access static properties and methods in constructor function
	}

	static createEmployee(name: string) {
		return { name };
	}

	//using this keyword is a typescript construct, by giving it the "Department" type, it will bind the "this" keyword to the instance of the class it is being called from
	describe(this: Department) {
		console.log(`Department ${this.id}: ${this.name}`);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		//must always call super first, with the required parameters of the parent's constructor
		super(id, "IT");
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;

	//getter, making the private property "last report" accessible publicly
	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error("No report found.");
	}
	//setter allows property to be changed publicly
	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error("Please provide a valid value");
		}
		this.addReport(value);
	}

	constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
		this.lastReport = reports[0];
	}
	//can override inherited properties and methods
	addEmployee(name: string) {
		if (name === "Max") {
			return;
		}
		//throws error because private properties are not passed to inheriting classes
		//must use protected keyword instead
		this.employees.push(name);
	}
	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}
}

const accounting = new AccountingDepartment("a1", []);

//access setters as a property, not a method
accounting.mostRecentReport = "QE Report";

//access getters as a property, not a method
console.log(accounting.mostRecentReport);

//calling static method
const employee1 = Department.createEmployee("Max");

//name property is hardcoded into the constructor function
const it = new ITDepartment("a2", ["John"]);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

//Does not work when property is marked as private, can only be access from within the class, i.e. with a class method
//accounting.employees[2] = 'Anna'

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// //Prints the name of this instance because of "this" being passed as an argument to describe.
// accountingCopy.describe();
