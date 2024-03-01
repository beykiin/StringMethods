
let listele=(a)=>{
    for(let i=0;i<a.length;i++){
        console.log(a[i])
    }

}
let isimler=["ahmet","muratcan","kaan","kenan","rümeysa","zümre","davut","Ahmet","Yasin","Çankaya","çankırı"]
console.log(isimler)
//listele(isimler)

//LİSTELRİN METODLARI
//"isimler.push(""): " LİSTEYE YENİ BİR ÖGE EKLEMEK İÇİN KULLANILIR.
isimler.push("osman")  
console.log(isimler)
//"isimler.pop(): " LİSTEDEN SON EKLEDİĞİN ELEMANI ÇIKARIR YA DA SONUNCU ELEMANI ÇIKARIR.
isimler.pop()
console.log(isimler)
//"isimler.sort(): " ALFABETİK SIRALAMA YAPAR. AMA BÜYÜK HARFLE BAŞLAYANLARA ÖNCELİK VERİR ÇÜNKÜ HARFLERİN ASCII KODUNDA BÜYÜK HARFLERİN NUMARALARI DAHA ÖNCEDİR. ARALARINDA 33 SAYI FARK VARDIR. FAKAT BU DURUMDA TÜRKÇE KARAKTERLERDE YANİ Ç-Ğ-Ö GİBİ HARFLERDE İŞE YARAMAZ ÇÜNKÜ ASCII KODUNA BU KARAKTERLER SONRADAN EKLENDİĞİ İÇİN SAYI NUMARALARI YÜKSEKTİR. 
isimler.sort()
console.log(isimler)
//"isimler.reverse(): " BU İSE LİSTEYİ TERSİNE ÇEVİRİP SIRALAMA YAPAR AMA ALFABETİK DEĞİLDİR ALFABETİK OLMASINI İSTİYORSANIZ O ZAMAN İLK İSİMLER.SORT() YAZIP SONRA İSİMLER.REVERSE KULLANMALISIN.
isimler.reverse()
console.log(isimler)
//"isimler.shift(): " İSİMLER.POP()'da SONDAKİ ELEMANI SİLERKEN İSİMLER.SHİFT()'de İSE BAŞTAKİ ELEMANI SİLER.
isimler.shift()
console.log(isimler)
//"isimler.unshift("123"): " İSİMLER.UNSİFT("") İSE PUSH GİBİ EKLEME İŞLEMİ YAPAR AMA LİSTENİN SONUNA DEĞİL BAŞINA EKLER.
isimler.unshift("123")
console.log(isimler)
//EĞER UNSHİFT İ BU ŞEKİLDE KULLANIRSAN EKLEMEK İSTEDİĞİN ÖGEYİ EKLER VE SANA EKLEDİKTEN SONRA LİSTEDE KAÇ ELEMAN OLDUĞUNU YANİ ELEMAN SAYISINI SÖYLER. AYNI ŞEKİLDE SHİFTİ DE YAPARSAN BAŞTAKİ ELEMEANI ÇIKARTIR VE SANA LİSTEDEN ÇIKARTIĞI ELEMANI GÖSTERİR.
console.log(isimler.unshift("123"))
//"isimler.splice(): " İSTEDİĞİN YERE EKLEME İŞLEMİ GERÇEKLEŞTİRİR. İLK YAZDIĞIMIZ SAYI KAÇıNCI İNDEKSTEN SONRA EKLEYECEĞİNİ BEİRLER İKİNCİ YAZDIĞIMIZ SAYI BUNU EKLEDİĞİ YERDEN KAÇ ELEMAN SİLECEĞİNİ BELİRLER VE SON KISIMDA EKLEYECEĞİMİZ ŞEYİ YAZARIZ
isimler.splice(1,3,"654")
console.log(isimler)
// BURDA DA .JOİN("") BU DİZİYİ BİRLEŞTİRİP BİR METİN HALİNE GETİRİR EĞER ARALARINA BİR ŞEY KOYMAK İSTERSEN TIRNAK İÇİNDE BELİRTİRSİN YOKSA HEPSİNİ DİP DİBE YAZAR
let metin=isimler.join("-")
console.log(metin)
// ".SPLİT("")" İSE METİN OLAN ŞEYİ TEKRAR DİZİ HALİNE GETİRİR TIRNAK İÇİNE YAZDIĞIMIZ ŞEY İSE ELEMANI AYIRIĞ DİZİ HALİNE GETİRMEK İÇİN NEYE BAKMASI GEREKTİĞİNİ BELİRTİR ÖRNEĞİN HER TİREDEN SONRAKİ ÖGEYİ DİZİNİN BİR ELEMANI OLARAK ALIR. 
let newİsimler=metin.split("-")
console.log(newİsimler)
//".SLİCE(x)" İSE DİZİNİN BAŞINDAN BELİRLEDİĞİN SAYI KADAR ELEMANI ÇIKARTIP KALANLARI YENİ BİR DİZİ HALİNE GETİRİYOR
let newDizi=isimler.slice(4)
console.log(newDizi)
// :FİND İSE DİZİNİN İÇİNDEKİ ELEMANI BULUR VE GÖSTERİR VARDA EĞER YOKSA UNDEFİNED DER. DİZİNİN İÇİNDE ARAMA İŞLEMİ YAPMAYA YARIYOR.    
console.log(isimler.find(x=>x=="ahmet"))
isimler.push("ahmet")
console.log(isimler)
//.İDEXOF("") DİYE BİR ÖGEYİ İÇİNE YAZARSAN KAÇINCI İNDEXTE OLDUĞUNU GÖSTERİR SANA FAKAT İLK KARŞILAŞTIĞINI ALIR
console.log(isimler.indexOf("ahmet"))
// .LASTİNDEXOF("") İSE SON KARŞILAŞTIĞI AHMETİ ALMIŞ.
console.log(isimler.lastIndexOf("ahmet"))
//.İNCLUDES İSE DİZİNİN İÇİNDE AHMET ÖGESİ VAR MI YOK MU ONA BAKAR EĞER VARSA TRUE DÖNDÜRÜR YOKSA FALSE DÖNDÜRÜR.
console.log(isimler.includes("ahmet"))
