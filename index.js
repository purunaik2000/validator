const moment = require('moment');
const isValid = {
    name: function (name, min, max) {
        let x = min || 3;
        let y = max || 30;
        if (x > y) min ? (y = 1000) : (x = 3);
        if (x > y) min ? (y = 1000) : x = y;
        const regex = /^[a-zA-Z ]{3,30}$/
        return regex.test(name);
    },
    userName: function (userName, min, max) {
        let x = min || 5;
        let y = max || 29;
        if (x > y) min ? (y = 1000) : (x = Math.min(y - 1, 3));
        let regex = new RegExp(`^[A-Za-z_][A-Za-z0-9_]{${x - 1},${y - 1}}$`);
        return regex.test(userName);
    },
    email: function (email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(email);
    },
    phone: function (phone) {
        return !(isNaN(phone) || phone.length != 10);
    },
    pincode: function (pincode) {
        return !(isNaN(pincode) || pincode.length != 6);
    },
    password: function (password, min, max) {
        let x = min || 8;
        let y = max || 15;
        if (x > y) min ? (y = 1000) : (x = Math.min(y, 4));
        let regex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{${x},${y}}$`);
        return regex.test(password);
    },
    date: function (date, format) {
        let x = format || "MM/DD/YYYY";
        return moment(date, x).isValid();
    },
    city: function (city, min, max) {
        let x = min || 3;
        let y = max || 25;
        if (x > y) min ? (y = 1000) : (x = 3);
        if (x > y) min ? (y = 1000) : x = y;
        const regex = /^[a-zA-Z ]{3,30}$/
        return regex.test(city);
    }
}

exports.validator = function (data) {
    try {
        if (typeof data != "object") return "Validator function rwquire an object to be passed.";
        let mandatory = data.mandatory;

        if (mandatory) {
            let fields = Object.keys(mandatory);
            for (let i = 0; i < fields.length; i++) {
                if (!mandatory[`${fields[i]}`] || !mandatory[`${fields[i]}`].toString().trim()) {
                    if (data.msgM) return data.msgM.replace("this", fields[i]);
                    return `${fields[i]} is requirred.`;
                }
            }
        }

        let validate = data.validate;
        if (validate && validate.enum) {
            var extra = validate.enum;
            if (!extra[2].includes(extra[1])) {
                if (data.msgV) return data.msgV.replace("this", extra[0]);
                return `${extra[0]} is invalid.`;
            }
            delete validate.enum;
        }

        if (validate) {
            let fields = Object.keys(validate);
            for (let i = 0; i < fields.length; i++) {
                let x = validate[`${fields[i]}`];
                let min, max;
                if (typeof x == "object") {
                    min = x.min;
                    max = x.max;
                    x = x.value;
                }
                if (min && min > 1000) min = 4;
                if (x) {
                    x = x.toString().trim();
                    let valid = isValid[`${fields[i]}`](x, min, max);
                    if (!valid) {
                        if (data.msgV) return data.msgV.replace("this", fields[i]);
                        return `Please provide valid ${fields[i]}`
                    }
                }
            }
        }
        return true;
    } catch (error) {
        if (error.message.includes("fields[i]")) return "Please check the fields.";
        return error.message;
    }
}