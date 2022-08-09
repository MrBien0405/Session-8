
//Bài 1: Viết chương trình cộng hai số:
// let a = parseInt(prompt(" nhập số a vào đây"))
// let b = parseInt(prompt(" nhập số b vào đây"))
// function tong (){
// tong = a + b;
// alert(`${tong}`)
// return;
// }tong();
//Bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return
// array = [1, 2, 3, 4, 5, 6]
// let tong = 0;
// let a = []
// function tongarray() {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             a.push(Number(array[i]))
//             console.log(array[i]);
//             tong = tong + array[i]
//             alert(`${tong}`)
//         }
//     }
//     return;
// } tongarray(tong)


//
//Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// let a = Number(prompt("nhập vào 1 số a"))
// function binhphuong(){
// b = a*a;
// alert(`Bình phương của số a là ${b}`)
// return;
// }binhphuong()
// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
// let r = Number(prompt("nhập bán kính hình tròn"))
// function dientichhinhtron (){
//     dientich=Math.PI*r*r;
//     alert(`Diện tích hình tròn là ${dientich}`)
//     chuvi = 2*Math.PI*r;
//     return;
// }dientichhinhtron();
// function chuvihnhtron (){
//     chuvi=Math.PI*r*r;
//     alert(`Chu vi hình tròn là ${chuvi}`)
//     chuvi = 2*Math.PI*r;
//     return;
// }chuvihnhtron();
//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// let a = Number(prompt("nhập vào 1 số nguyên"))
// let giaithua = 1
// function giaithua1so(){
//     for(let i = 1; i<=a; i++){
// giaithua= giaithua*i
//     }alert(`giai thừa số nguyên a là ${giaithua}`)
// return;
// }giaithua1so()


/* Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm
trả về true, ngược lại trả về false. */
// let kytu = prompt("nhập 1 kí tự vào đây");
// function cophaikitusoko() {
//     if (kytu %1 === 0) {
//         alert("true")
//     } else {
//         alert("false")
//     }
//     return;
// } cophaikitusoko()


//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// let a = parseInt(prompt("nhập số nguyên a"));
// let b =parseInt(prompt("nhập số nguyên b"));
// let c = parseInt(prompt("nhập số nguyên c"));
// function giatrinhonhat(){
//     min= Math.min(a,b,c)
//     alert(`Giá trị nhỏ nhất là ${min}`)
//     return;
// }giatrinhonhat()
//
//Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương
// không. Nếu là nguyên dương trả về true, ngược lại trả về false.
// let number = Number(prompt("nhập vào 1 số"));
// function kiemtrasonguyen (){
//     if (Number.isInteger(number)&& number>0) {
//         alert("true")
//     }else{
//         alert("false")
//     }
// }kiemtrasonguyen()
//
/* //
Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó. */
// let a = parseInt(prompt("nhập số nguyên a"));
// let b = parseInt(prompt("nhập số nguyên b"));
// function doicho2songuyen() {
//     temp = a
//     a = b
//     b = temp
//     alert(` a là ${a}, b là ${b}`)
//     return;
// } doicho2songuyen();

//
//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
/* let arr = parseInt(prompt("nhập 1 mảng số nguyên vào đây"));
let str = [];
function daonguocmang() {
    for (let i = arr.length - 1; i >= 0; i--) {
        a = arr[i].split("")
        arr[i].push(a)
        str = str + (arr[i])
    } alert(str)
} daonguocmang() */


//Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ
// đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về-1.
// let mangKytu = prompt(`nhập 1 mảng ký tự`).split("");
// let kyTu = prompt(`nhập 1 ký tự vào đây`);
// let findIndex = 0;
// function kiemtrakytutrogmang() {
//     for (let i = 0; i < mangKytu.length; i++) {
//         if (mangKytu[i] === kyTu) {
//             findIndex = findIndex + 1
//         }
//     }
//     if (findIndex > 0) {
//         alert(`Số lần xuất hiện kí tự đó là ${findIndex}`)
//     } else {
//         alert("-1")
//     }
// }
// kiemtrakytutrogmang()

