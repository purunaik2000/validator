### Validator

# To install this package just write this command and press enter
```
npm i validator
```

# The object you want to validate will like this
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

# The data object you have to pass in validator function will be like this
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