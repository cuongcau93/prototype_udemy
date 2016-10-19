var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var cuong = {
    firstname: 'cuong',
    lastname: 'nguyen manh'
}

var mai = {
    firstname: 'mai',
    lastname: 'nguyen thi'
}

cuong.__proto__ = person;
console.log(cuong.getFullName());

mai.__proto__ = person;
console.log(mai.getFullName());

var sum = {
    x: 1,
    y: 2,
    getSum: function(){
        return this.x + this.y;
    }
}

var sum1 = {
    x: 5,
    y:9
}

sum1.__proto__ = sum;
console.log(sum1.getSum());