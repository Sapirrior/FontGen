function convert() {
  
  const input1 = document.getElementById("inputT");
  const input2 = document.getElementById("outputTS");
  const input3 = document.getElementById("outputTB");
  let convertedText = "";
  let convertedText2 = "";
  
  for (let i = 0; i < input1.value.length; i++) {
    
    const char = input1.value.charAt(i);
    
    switch (char) {
      
      case ' ':
        convertedText += ' ';
        break;
      
      case 'a':
        convertedText += 'ᴀ';
        break;
        
        case 'b':
        convertedText += 'ʙ';
        break;
        
        case 'c':
        convertedText += 'ᴄ';
        break;
        
        case 'd':
        convertedText += 'ᴅ';
        break;
        
        case 'e':
        convertedText += 'ᴇ';
        break;
        
        case 'f':
        convertedText += 'ꜰ';
        break;
        
        case 'g':
        convertedText += 'ɢ';
        break;
        
        case 'h':
        convertedText += 'ʜ';
        break;
        
        case 'i':
        convertedText += 'ɪ';
        break;
        
        case 'j':
        convertedText += 'ᴊ';
        break;
        
        case 'k':
        convertedText += 'ᴋ';
        break;
        
        case 'l':
        convertedText += 'ʟ';
        break;
        
        case 'm':
        convertedText += 'ᴍ';
        break;
        
        case 'n':
        convertedText += 'ɴ';
        break;
        
        case 'o':
        convertedText += 'ᴏ';
        break;
        
        case 'p':
        convertedText += 'ᴘ';
        break;
        
        case 'q':
        convertedText += 'ǫ';
        break;
        
        case 'r':
        convertedText += 'ʀ';
        break;
        
        case 's':
        convertedText += 'ѕ';
        break;
        
        case 't':
        convertedText += 'ᴛ';
        break;
        
        case 'u':
        convertedText += 'ᴜ';
        break;
        
        case 'v':
        convertedText += 'ᴠ';
        break;
        
        case 'w':
        convertedText += 'ᴡ';
        break;
        
        case 'x':
        convertedText += 'х';
        break;
        
        case 'y':
        convertedText += 'ʏ';
        break;
        
        case 'z':
        convertedText += 'ᴢ';
        break;
        
        case '1':
        convertedText += '₁';
        break;
        
        case '2':
        convertedText += '₂';
        break;
        
        case '3':
        convertedText += '₃';
        break;
        
        case '4':
        convertedText += '₄';
        break;
        
        case '5':
        convertedText += '₅';
        break;
        
        case '6':
        convertedText += '₆';
        break;
        
        case '7':
        convertedText += '₇';
        break;
        
        case '8':
        convertedText += '₈';
        break;
        
        case '9':
        convertedText += '₉';
        break;
        
        case '0':
        convertedText += '₀';
        break;
        
        
    };
    
    input2.value = convertedText
  };
  
  for (let i = 0; i < input1.value.length; i++) {
    
    const char = input1.value.charAt(i);
    
    switch (char) {
      
      case ' ':
        convertedText2 += ' ';
        break;
        
        case 'A':
        convertedText2 += 'Ⓐ';
        break;
        
        case 'B':
        convertedText2 += 'Ⓑ';
        break;
        
        case 'C':
        convertedText2 += 'Ⓒ';
        break;
        
        case 'D':
        convertedText2 += 'Ⓓ';
        break;
        
        case 'E':
        convertedText2 += 'Ⓔ';
        break;
        
        case 'F':
        convertedText2 += 'Ⓕ';
        break;
        
        case 'G':
        convertedText2 += 'Ⓖ';
        break;
        
        case 'H':
        convertedText2 += 'Ⓗ';
        break;
        
        case 'I':
        convertedText2 += 'Ⓘ';
        break;
        
        case 'J':
        convertedText2 += 'Ⓙ';
        break;
        
        case 'K':
        convertedText2 += 'Ⓚ';
        break;
        
        case 'L':
        convertedText2 += 'Ⓛ';
        break;
        
        case 'M':
        convertedText2 += 'Ⓜ';
        break;
        
        case 'N':
        convertedText2 += 'Ⓝ';
        break;
        
        case 'O':
        convertedText2 += 'Ⓞ';
        break;
        
        case 'P':
        convertedText2 += 'Ⓟ';
        break;
        
        case 'Q':
        convertedText2 += 'Ⓠ';
        break;
        
        case 'R':
        convertedText2 += 'Ⓡ';
        break;
        
        case 'S':
        convertedText2 += 'Ⓢ';
        break;
        
        case 'T':
        convertedText2 += 'Ⓣ';
        break;
        
        case 'U':
        convertedText2 += 'Ⓤ';
        break;
        
        case 'V':
        convertedText2 += 'Ⓥ';
        break;
        
        case 'W':
        convertedText2 += 'Ⓦ';
        break;
        
        case 'X':
        convertedText2 += 'Ⓧ';
        break;
        
        case 'Y':
        convertedText2 += 'Ⓨ';
        break;
        
        case 'Z':
        convertedText2 += 'Ⓩ';
        break;
        
        case 'a':
        convertedText2 += 'ⓐ';
        break;
        
        case 'b':
        convertedText2 += 'ⓑ';
        break;
        
        case 'c':
        convertedText2 += 'ⓒ';
        break;
        
        case 'd':
        convertedText2 += 'ⓓ';
        break;
        
        case 'e':
        convertedText2 += 'ⓔ';
        break;
        
        case 'f':
        convertedText2 += 'ⓕ';
        break;
        
        case 'g':
        convertedText2 += 'ⓖ';
        break;
        
        case 'h':
        convertedText2 += 'ⓗ';
        break;
        
        case 'i':
        convertedText2 += 'ⓘ';
        break;
        
        case 'j':
        convertedText2 += 'ⓙ';
        break;
        
        case 'k':
        convertedText2 += 'ⓚ';
        break;
        
        case 'l':
        convertedText2 += 'ⓛ';
        break;
        
        case 'm':
        convertedText2 += 'ⓜ';
        break;
        
        case 'n':
        convertedText2 += 'ⓝ';
        break;
        
        case 'o':
        convertedText2 += 'ⓞ';
        break;
        
        case 'p':
        convertedText2 += 'ⓟ';
        break;
        
        case 'q':
        convertedText2 += 'ⓠ';
        break;
        
        case 'r':
        convertedText2 += 'ⓡ';
        break;
        
        case 's':
        convertedText2 += 'ⓢ';
        break;
        
        case 't':
        convertedText2 += 'ⓣ';
        break;
        
        case 'u':
        convertedText2 += 'ⓤ';
        break;
        
        case 'v':
        convertedText2 += 'ⓥ';
        break;
        
        case 'w':
        convertedText2 += 'ⓦ';
        break;
        
        case 'x':
        convertedText2 += 'ⓧ';
        break;
        
        case 'y':
        convertedText2 += 'ⓨ';
        break;
        
        case 'z':
        convertedText2 += 'ⓩ';
        break;
        
        case '1':
        convertedText2 += '①';
        break;
        
        case '2':
        convertedText2 += '②';
        break;
        
        case '3':
        convertedText2 += '③';
        break;
        
        case '4':
        convertedText2 += '④';
        break;
        
        case '5':
        convertedText2 += '⑤';
        break;
        
        case '6':
        convertedText2 += '⑥';
        break;
        
        case '7':
        convertedText2 += '⑦';
        break;
        
        case '8':
        convertedText2 += '⑧';
        break;
        
        case '9':
        convertedText2 += '⑨';
        break;
        
        case '0':
        convertedText2 += '⓪';
        break;
        
    };
    
    input3.value = convertedText2;
    
  };
  
  
}
