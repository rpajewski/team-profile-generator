class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 12345;
        this.email = 'testemail';
    }
    getName() {
        if (!this.name) {
            return false;
        }
        return true;
    }
    getId() {
        if (this.id.length < 1) {
            return false;
        }
        return true;
    }
    getEmail() {
        if (!this.email) {
            return false;
        }
        return true;
    }
}

module.exports = Employee;