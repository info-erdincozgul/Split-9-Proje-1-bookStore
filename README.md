# Book Shopping Cart
## Proje Hakkında
Bu proje, React Context API'yi kullanarak geliştirilmiş basit bir e-ticaret uygulamasıdır. Kullanıcılar ürünleri listeleyebilir, alışveriş sepetine ekleyebilir ve sepet içeriğini görüntüleyebilirler. Uygulamanın en önemli özelliği, durum yönetiminin merkezi Context API ile sağlanması ve sepet verilerinin tarayıcının yerel depolama alanında (localStorage) kalıcı hale getirilmesidir.

Proje, sayfalar arası gezinim için React Router ve bileşen bazlı dinamik stillendirme için Styled Components kullanır.
## Başlıca Özellikler:
* Merkezi Durum Yönetimi (Context API): Ürün listesi ve alışveriş sepeti gibi uygulama durumları, ProductContext ve CartContext bileşenleri aracılığıyla yönetilir. Bu sayede prop geçişi (prop drilling) olmadan verilere kolayca erişilebilir.
* Veri Kalıcılığı (useLocalStorage Custom Hook): Sepetteki veriler, özel bir hook olan useLocalStorage kullanılarak localStorage'da saklanır. Bu, sayfa yenilendiğinde bile sepet içeriğinin korunmasını sağlar.
* Sayfa Gezinimi (React Router): Uygulama içerisinde gezinim, React Router kullanılarak sağlanır. Ürünler (/) ve alışveriş sepeti (/cart) olmak üzere iki ana sayfa bulunur.
* Alışveriş Sepeti Yönetimi:
    * Products.jsx bileşeni, ProductContext'ten ürünleri alır ve Product bileşenlerini kullanarak listeler.
    * Product.jsx bileşeni, "Add to cart" butonu ile ürünü sepete ekleme işlevini gerçekleştirir.
    * ShoppingCart.jsx bileşeni, CartContext'ten sepet verilerini alır, toplam fiyatı hesaplar ve sepet içeriğini listeler.
    * ShoppingCartItem.jsx bileşeni, sepetten ürün silme butonu içerir.
* Bileşen Bazlı Stil (Styled Components): Uygulamanın görsel tasarımı, Styled Components kütüphanesi kullanılarak oluşturulmuştur. Stiller, ayrı bir scParts.jsx dosyasında merkezi olarak tanımlanmıştır.
## Proje Yapısı
src/:
* App.jsx: Uygulamanın ana bileşeni; Context sağlayıcılarını ve React Router yönlendirme mantığını içerir.
* contexts/: Uygulamanın durum yönetimini sağlayan Context dosyalarını barındırır.
* components/: Uygulamanın arayüz bileşenlerini barındıran klasördür.
* hooks/: Özel useLocalStorage hook'unu içerir.
* data.js: Uygulamadaki ürün verilerini içeren yerel veri dosyasıdır.
## Nasıl Çalıştırılır?
Bu projeyi yerel ortamınızda çalıştırmak için Node.js ve npm'in kurulu olması gerekir.
1. Gerekli Paketleri Yükleyin:
```
Bash
npm install
```
2. Uygulamayı Başlatın:
```
Bash
npm run dev
```
3. Tarayıcıda Görüntüleyin: Komut çalıştıktan sonra, projeniz genellikle http://localhost:5173/ adresinde otomatik olarak açılır.
## Kazanımlar
Bu projeyi inceleyerek veya üzerinde çalışarak aşağıdaki konularda deneyim kazanabilirsiniz:
* React Context API: Geleneksel durum yönetimi yöntemleri yerine, Context API ile verileri nasıl paylaşacağınızı öğrenirsiniz.
* Custom Hook Oluşturma: localStorage gibi tarayıcı özelliklerini kapsayan ve durumu kalıcı hale getiren kendi özel hook'unuzu nasıl yazacağınızı öğrenirsiniz.
* React Router: Çok sayfalı bir React uygulamasında yönlendirme işlemlerini nasıl yöneteceğinizi ve navigasyon bileşenlerini nasıl oluşturacağınızı anlarsınız.
* Styled Components: CSS'i React bileşenlerine entegre ederek daha dinamik ve sürdürülebilir stil kodları yazma becerisi kazanırsınız.
* Modüler Mimari: Farklı işlevlere sahip bileşenleri, hook'ları ve context'leri ayrı dosyalarda tutarak temiz ve anlaşılır bir kod yapısı oluşturma pratiği elde edersiniz.