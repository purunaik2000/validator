# Validator

## To install this package just paste this command and press enter
```
npm i dot-validator
```

## The object you want to validate will be like this
```
let obj = {
    "title": "Mr",
    "name": "Sakti Kumar Choudhary",
    "phone": "9645396313",
    "email": "sakti@gmail.com",
    "password": "Sakti@1234",
    "address": {
        "street": "Gandhi Nagar",
        "city": "    ",
        "pincode": "  827013"
    }
}
```

## The object you have to pass in validator function will be like this
```
let data = {
    mandatory: {
        title: obj.title,
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        password: obj.password
    },
    validate: {
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        password: { value: obj.password, min: 10001, max: 10},
        pincode: obj.address.pincode,
        enum: [ "title", obj.title, ["Mr", "Mrs", "Miss"] ]
    },
    msgM: "Please provide this.",
    msgV: "Please provede valid this."
}
```

## Instructions

* Only sinlge object to be passed in function.
* The object can contain 4 keys mandatory, validate, msgM, msgV.
* In mandatory you have to pass an object inside that the fields that are mandetory you have to pass.
* In validate also you have to pass an object where the fiels that you want to validate are there.
* If you want any custom validation with enum then you can pass a key enum in validate object.
* In enum you have to pass an array that contains 3 indexes: 1st for the name of field, 2nd for the data you want to validate and 3rd is for the array from you want to check availability.
* If all the conditions are fullfield you will get boolean True in response.
* If any condition not get fullfilled you will get a suitable error message for that particular field.
* If you want custom message for failure then you can pass 2 keys msgM and msgV for mandatory failure and validation failure respectively.
* In message you have use a this word which will be replaced by the field name..Mak"!dW7m!YU8?