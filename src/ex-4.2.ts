function processData(data: string | number): string | number{
  if(typeof data === "string"){
    return data.toUpperCase();
  }else{
    return "Not a string";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ มีการส่งค่าที่เป็น ตัวเลขเข้าไปใน parameter
// ทำให้มีการ error และไม่สามารถใช้ toUpperCase กับตัวเลขได้
// จำเป็นตัองใช้ if-else ในการเช็คก่อนว่าเป็นข้อความหรือตัวเลข
// เพื่อแสดงผล Agrument ที่ส่งมาเป็น Not a string 