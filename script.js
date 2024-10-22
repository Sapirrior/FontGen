function convert() {
  
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  let convertedText = "";
  input.value = input.value.toLowerCase();
  
  for (let i = 0; i < input.value.length; i++) {
    
    const char = input.value.charAt(i);
    
    switch (char) {
      
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
        
        case ' ':
        convertedText += ' ';
        break;
        
    };
    output.value = convertedText
  };
};