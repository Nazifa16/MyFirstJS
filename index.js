//?question  1------------------------------
var question_1 = prompt("Ilk proqramçı kim olub?");
if (question_1 == "Ada Lavleys") {
  console.log("Afərin!");
  alert(`Afərin!
    növbəti suala keçə bilərsiniz`);

  //?question  2------------------------------
  var question_2 = prompt(`Harbin buz festivalında iştirak etmək istərdiniz? `);

  if (question_2 == "hə") {
    console.log(`Harbinə xoş gəldiniz `);
    alert("Harbinə xoş gəldiniz");
    //?question  3------------------------------
    var question_3 = prompt("Kozetta cizgi filmi hansı əsər əsasında çəkilib?");
    if (question_3 == "Səfillər") {
      console.log(`Afərin,siz çox intellektualsınız
            Növbəti suala keçin`);
      alert(`Afərin,siz çox intellektualsınız
            Növbəti suala keçin`);
      //?question  4------------------------------
      var question_4 = confirm("CSS sevirsiniz?");
      if (question_4 == false) {
        console.log("Əla");
        alert(`Əla!
                Siz qalibsiniz!`);
      } else {
        console.log("Çox pis :(");
        alert(`Çox pis :(
          Artıq şansınız qalmadı`);
      }
    } else {
      console.log("Heyif!");
      alert(`Heyif!
            Siz sonuncu suala keçid şansını itirdiniz :(`);
    }
  } else {
    console.log("Təəssüf siz şansınızı itirdiniz");
    alert("Təəssüf siz növbəti suala keçid şansını itirdiniz");
  }
} else {
  console.log("Siz məğlub oldunuz");
  alert("Siz məğlub oldunuz");
}
