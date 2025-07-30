function processData(data: unknown): string {
  if(typeof data === "string") {
    return data.toUpperCase();
  } else {
    return `Not a String`;
  }
  
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
/* ไม่สามารถ Compile code ได้ เนื่องจาก Parameter data ถูกกำหนดให้เป็น 
unknown ซึ่งต้องนำมาตรวจสอบค่าให้ตรงกับที่เราตั้งไว้ด้วย typeof จึงจะสามารถ
Compile ได้ */

/* ไม่สามารถ console.log function processData ที่ใส่ Argument เป็น number ได้ เพราะ ได้กำหนดค่าของ parameter ไว้ในข้อแรกด้วย typeof === "string" */