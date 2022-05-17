// Buffer is created using one of the following functions

const buf = Buffer.from("Hey!");
console.log(typeof buf);
console.log(buf);

console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf[3]);

console.log(buf.toString());
const mybuf = Buffer.allocUnsafe(1024); // 2kb data allocated unsafely
console.log(mybuf.toString());
