const data = {
    name: 'ASM Tamzid',
    id: 562499,
    dept: 'CSE',
    pt: function () {
        console.log(this.id);
    },
    address: {
        city: 'Dhaka',
        country: 'Bangladesh',
    }
}


data.pt();