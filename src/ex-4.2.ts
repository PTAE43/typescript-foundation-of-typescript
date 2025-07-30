function processData(data: unknown): string {
  let result;
  if (typeof data === "string") {
    result = data.toUpperCase();
  } else {
    result = "Not a string";
  }
  return result;
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
