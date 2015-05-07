function Foo() {
	this.a = 10;
}

Foo.prototype.b = 20;
foo = new Foo();
foo2 = new Foo();

console.log(foo.a);
console.log(foo.b);

foo.b = 30
console.log(foo.b);

console.log(foo2.a);
console.log(foo2.b);

Foo.prototype.b = 40;
console.log(foo.b);
console.log(foo2.b);
