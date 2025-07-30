type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if (user.age === undefined || user.age < 18) {
    return false;
  } else {
    return true;
  }
  
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// ไม่มี key age อยู่ใน object จึงทำให้กลายเป็นเอาค่า undefined มาเทียบกับ number