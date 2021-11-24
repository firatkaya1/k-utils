# kutils

## Başlamadan Önce
Yaklaşık 6 aydır TailwindCSS kullanarak geliştirme yapıyorum. Bu CSS kütüphanesini projelerimde o kadar çok kullandım ki artık bir yerden sonra kopyala yapıştır işi yaptığımı fark ettim.

Yaptığım işin sonucunu da hızlı görmek istemem ve daha az vakit harcayarak oluşturmak istemem nedeniyle en sonunda kalıpları oluşturup tek hareketle kopyalayacağım bir yerde tutmaya karar verdim. Kutils herhangi bir javascript desteği olmadan sadece TailwindCSS kullanılarak geliştirilmiş düz HTML-CSS 'dir. React, Vuejs,Angular projelerinizde kullanmak istediğiniz de sadece ufak javascriptler ekleyerek ilerleyebilirsiniz.

## Nasıl çalışır ?

Bazı elementlerin hazır generator'leri bulunmaktadır. Bunlar aracılığıyla uygun classları arayüzü kullanarak bir araya getirirseniz oluşturabilirsiniz. Aynı zaman da o konu altında farklı boyut ve renklerin uyumlarıyla bol bol örnek göreceksiniz. Bu örnekleri kullanmak istiyorsanız sadece o elementi kopyalayın. Üzerine tıklayarak otomatik bir şekilde kopyalayabilirsiniz.

## Katkıda bulunabilir miyim ?
Evet, katkıda bulunabilirsiniz. Sizlerinde desteğiyle buraları güzel bir şekilde geliştirebiliriz. Katkıda bulunmanız için ufak bir anlatım yapacağım. Böylelikle katkıda bulunmak istediğinizde bir sorun ile karşılaşmayacağınızı ümit etmiş olacağım.

### Adım 1: Projeyi forklayın.

Github adresinden projenin bulunduğu alana gidin ve forklayın. Ardından sevdiğiniz herhangibir IDE'de projeyi açın ve gerekli bağımlılıkları yükleyin. (npm install)

### Adım 2: Brach oluşturun.

Bağımlılıkları yükledikten sonra eklemek istediğiniz özelliğe uygun veya mevcut hataya uygun isimde bir branch oluşturun. Örnek vermek gerekirse buraya buttonları eklemek istiyorum ve oluşturacağım branch ise buna benzer olması gerektiğine karar verdim. Terminal üzerinden, git checkout -b "button-feature" komutunu kullanarak button-feature branchini oluşturdum.

### Adım 3: Değişikliklerinizi yapın.

Öncelikle yeni bir sayfa ekleyip bu sayfaya da eklemek istediğim elementin özelliklerini eklemeye karar verdim. Proje yapımı incelediğinizde her sayfa views/ altında bulunmaktadır. Örneğin, buttonları eklemek istiyorum. views/ klasöründe daha önce böyle bir .vue dosyasının oluşturulmadığını gördüm. Bende bir tane oluşturdum. Bir başlık ve ufak bir açıklama ekledim. Ardından components/ klasörünün altında da ButtonExamples isminde bir component oluşturdum. ButtonExamples altında mevcut buttonların farklı boyutlar da ve farklı renklerde özelliklerini ekledim.

Ardından, oluşturduğum ButtonExamples ismindeki componentimi views/button ismindeki .vue dosyasının içine ekledim. BU adımdan sonra yapmam gereken tek şey, common/menu dosyasına girip yeni bir button linki oluşturmak sonra da router/index.js dosyası altında da oluşturduğum views/button altındaki adresi buraya eklemek olacaktır.

### Adım 4: Commit için anlamlı bir mesaj yazın.

Bütün değişiklikleri eklediniz, testlerinizi yaptınız ve başarıyla çalıştığını gördünüz. Süper ! Bu adımdan sonra terminali açarak git commit -m "Button sayfası oluşturuldu, örnekler eklendi" gibi basit bir commit ile açıklamanızı yazın.

Sonrada pushlayın. git push origin button-feature

### Adım 5:Pull Request Oluşturun

Bu adımda, projenin orjinal github sayfasına gidin. Pull Request ismindeki linke tıklayın. New Pull Request butonuna tıklayın. Kendi oluşturduğumuz button-feature branchini seçin. Ardından Create Pull Request seçeneğine tıklayın. Gerekli başlığı ve açıklama alanlarını anlamlı bir şekilde doldurun. İşte bu kadar ! Bu adımdan sonra eklemiş olduğunuz özelliği inceleyeceğim ve diğer versiyonlarla uyumlu çalışırsa, kaynak kod ile birleştireceğim. Eğer Adım 5'i anlamakta güçlük çekiyorsanız aşağıya sizler için türkçe bir video ve ufak bir döküman bırakacağım.

## İleride eklenmesi beklenen özellikler

Burada mevcut eklenen yenilikleri ve eklenecek yenilikleri görebilirsiniz. Eğer bir öneriniz varsa issue açarak bunu belirtebilirsiniz. Kendime ait zamanımda vaktim kaldıkça bu özellikleri eklemeyi ümit ediyorum.


- [x] Badge
- [x] Alerts
- [x] Buttons
- [x] Pagination
- [x] Chips
- [x] Inputs
- [x] Cards
- [ ] Toast
- [x] Navbars

### 

Bir problemle karşılaşırsanız bana yazabilirsiniz. 

[me@kayafirat.com](mailto:me@kayafirat.com?subject=[GitHub]%vue-dynamic-hero-icons)




