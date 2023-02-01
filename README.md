# validator
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