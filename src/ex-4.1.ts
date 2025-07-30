type User = {
  id: string;
  name: string;
  age: number; //ลบ ?
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" , age: 17}); //เพิ่มอายุ
console.log(result); // ควรได้ false

// Error ที่เจอคือ parametor user มีค่าเป็น undefined 
// ทำให้การกำหนด ? ไว้ใน age จึงทำให้เกิด error
