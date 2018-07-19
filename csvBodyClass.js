var validator = require("email-validator");

class CsvBody {

    rowArangment(row, originheaders) {
        let arangedRow = [];
        for (let i = 0; i < row.length; i++) {
            for (let j = 0; j < originheaders.length; j++) {

                if (i === originheaders[j].originIndex) {
                    if (row[i] && originheaders[j].header !== 'Phone') {
                        if (originheaders[j].header === "Username") {
                            if (this.usernameField(row[i]) === true) {
                                arangedRow[0] = row[i].trim()
                                break;
                            } else {
                                return {
                                    row: row,
                                    rowStatus: false
                                }
                            }
                        }
                        if (originheaders[j].header === "Name") {
                            if (row[i]) {
                                arangedRow[1] = row[i].trim()
                                break;
                            } else {
                                return {
                                    row: row,
                                    rowStatus: false
                                }
                            }
                        }


                        if (originheaders[j].header === "Email") {
                            if (this.emailField(row[i]) === true) {
                                arangedRow[2] = row[i].toLowerCase().trim()
                                break;
                            } else {
                                return {
                                    row: row,
                                    rowStatus: false

                                }
                            }
                        }

                        if (originheaders[j].header === "Department") {
                            if (this.departmentField(row[i]) === true) {
                                arangedRow[3] = row[i].trim()
                                break;
                            } else {
                                return {
                                    row: row,
                                    rowStatus: false
                                }
                            }
                        }

                    } else if (originheaders[j].header === "Phone") {
                        if (!row[i]) arangedRow[4] = 'Empty Field'; else {
                            arangedRow[4] = this.phoneField(row[i]);

                        }
                    } else return {
                        row: row,
                        rowStatus: false
                    }
                }
            }
        }

        console.log(arangedRow[0], arangedRow[1], arangedRow[2], arangedRow[3], arangedRow[4])
        return arangedRow;


    }

    emailField(email) {
        return validator.validate(email);
    }

    departmentField(department) {
        if (department === 'IT' || department === 'HR' || department === 'Sales' || department === 'Marketing') {
            return true;
        } else {
            return false;
        }
    }

    phoneField(phone) {
        let phoneArr = phone.split("")
        let correctPhone = []
        phoneArr.forEach(element => {
            if (element.match(/^[0-9]+$/) != null) {
                correctPhone.push(element);
                if (correctPhone.length === 3) correctPhone.push('-')
            }
        });
        console.log(correctPhone)
        if (correctPhone.length === 11 && correctPhone[0] === '0' && correctPhone[1] === '5') {
            return correctPhone.join("")
        } else {
            return "Not a valid number"
        }
    }

    usernameField(username) {
        if (/\s/.test(username.trim())) {
            return false
        } else {
            return true
        }
    }
}

var rowsArangement = new CsvBody();
module.exports = rowsArangement;