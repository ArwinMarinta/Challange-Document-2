function changeWord(selectedText, changeText, text) {
  //Memgunakan method replace dari sebuah text untuk mencari dan mengganti text
  const newText = text.replace(selectedText, changeText);
  return newText;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besar cintaku padamu";

//Kalimat 1
const text1 = changeWord("mencintai", "membenci", kalimat1);
console.log(text1);

//Kalimat 2
const text2 = changeWord("bromo", "sumeru", kalimat2);
console.log(text2);
