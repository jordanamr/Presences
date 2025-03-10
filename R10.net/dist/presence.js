var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new(P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const presence = new Presence({ clientId: "650497315391537153" })
const pages    = {
 "/kontrolpaneli":"Üye Kontrol Paneli",
 "/groups":"Sosyal Gruplar",
 "/members/albums.html":"Albümler",
 "/profil/arkadaslistesi/":"Arkadaş Listesi",
 "/profil/imzadegistir/":"İmza Değiştirme",
 "/profil/duzenle":"Profiliniz Düzenliyor",
 "/profil/seceneklerim/":"Seçenekleri Düzenliyor",
 "/online.php":"Kimler Online",
 "/r10likelist.php":"R10 Like Listesi",
 "/uzmanara.php":"Uzman Ara",
 "/site-analiz/":"Site Analiz",
 "/seo-analiz/":"SEO Analiz",
 "/sira-bulucu/":"Sıra Bulucu",
 "/whois/":"WHOIS Sorgulama",
 "/itrader_main.php":"Ticaret Bölümü",
 "/search.php":"Arama",
 "/pm/":"Özel Mesajlar",
};

presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
    const page = document.location.pathname
    const kategori = document.querySelector("body > main > div > div.threadList > div > ul > li:nth-child(1)")
    const post = document.querySelector("body > main > div > div.pagination > div.left.double > a.rbtn.rgreen > span:nth-child(2)")
    const ozel = document.querySelector("body > main > div > div.privateMessages.single > div.left > div.head > div.title")
    const cevap = document.querySelector("body > main > div > form > div:nth-child(12) > div.head")
    const head = document.querySelector("head > title")
    const grup = document.querySelector("body > main > div > div:nth-child(3) > div")
    const analiz = document.querySelector("body > div.page-header.r10title > div > div > h4 > span")
    const report = document.querySelector("body > main > div > form > div > div.head")

    let data = { largeImageKey: "logo_beyaz", startTimestamp: Math.floor(Date.now() / 1000) };

    if (kategori && kategori.textContent != "") {
        data.details = "Bir kategoriyi inceliyor:"
        data.state = document.querySelector("body > main > div > div.breadCrumb > div.top > div.left > div:nth-child(2) > span:nth-child(1) > h2").textContent
    } else if ( post && post.textContent != ""){
    	data.details ="Bir konuyu inceliyor:"
    	data.state   =document.querySelector("body > main > div > div.breadCrumb > div.top > div.left > div:nth-child(2) > span > h2").textContent
    } else if (head.textContent.includes("Profil bilgileri:")){
    	data.details ="Bir kullanıcıyı inceliyor:"
    	data.state   =document.querySelector("body > main > div.container > div.left > div:nth-child(1) > div > div.top > div.info > div.name > a").textContent
    } else if (cevap && cevap.textContent != "" ){
    	data.details ="Bir konuya cevap yazıyor:"
    	data.state   =document.querySelector("body > main > div > div.breadCrumb > div.bottom > ul > li:nth-child(4) > a > span").textContent
    } else if (analiz && analiz.textContent == "R10.net - Webmaster & SEO Araçları" ){
    	data.details ="Forumda geziniyor:"
    	data.state   ="Webmaster & SEO Araçları"
    } else if (report && report.textContent == "Mesajı Moderatöre Bildir" ){
    	data.details ="Bir konuyu moderatöre bildiriyor:"
    	data.state   =document.querySelector("body > main > div > div.breadCrumb > div.bottom > ul > li:nth-child(4) > a > span").textContent
    } else if (pages[page] || pages[page.slice(0, -1)]) {
        data.details = "Forumda geziniyor:"
        data.state = pages[page] || pages[page.slice(0, -1)];
    } else {
    	data.details ="Forumda geziniyor:"
    	data.state   ="Ana Sayfa"
    }

    if (data.details && data.state && data.details != "" && data.state != "") presence.setActivity(data);
}));