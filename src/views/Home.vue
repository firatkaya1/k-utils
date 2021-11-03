<template>
  <div class="flex flex-col px-4 lg:px-2 mt-24 text-justify mb-48 xl:w-1/2 lg:w-1/2 2xl:w-1/3 w-full mx-auto">
    <h1 class="font-bold text-xl">Başlamadan Önce</h1>
    <hr class="my-4">
    <div class="mb-24 leading-10 font-mono text-sm">
      <p>
        Yaklaşık 6 aydır TailwindCSS kullanarak geliştirme yapıyorum. Bu CSS kütüphanesini projelerimde o kadar çok kullandım ki artık bir yerden sonra kopyala yapıştır işi yaptığımı fark ettim.
      </p>
      <p>
        Yaptığım işin sonucunu da hızlı görmek istemem ve daha az vakit harcayarak oluşturmak istemem nedeniyle en sonunda kalıpları oluşturup tek hareketle kopyalayacağım bir yerde tutmaya karar verdim.
        <span class="font-bold text-blue-600"> Kutils</span> herhangi bir javascript desteği olmadan sadece TailwindCSS kullanılarak geliştirilmiş düz HTML-CSS 'dir. React, Vuejs,Angular projelerinizde kullanmak 
        istediğiniz de sadece ufak javascriptler ekleyerek ilerleyebilirsiniz.
      </p>
    </div>
    <!-- Nasıl Çalışır -->
    <div>
      <h1 class="font-bold text-xl"> Nasıl çalışır ? </h1>
      <hr class="my-4">
      <p class="leading-10">
        Bazı elementlerin hazır generator'leri bulunmaktadır. Bunlar aracılığıyla uygun classları arayüzü kullanarak bir araya getirirseniz oluşturabilirsiniz. Aynı zaman da o konu altında farklı boyut ve renklerin uyumlarıyla bol bol 
        örnek göreceksiniz. 

        Bu örnekleri kullanmak istiyorsanız sadece o elementi kopyalayın. <span class="font-bold"> Üzerine tıklayarak otomatik bir şekilde kopyalayabilirsiniz. </span>
      </p>
    </div>
    <!-- Katkıda Bulunun -->
    <div class="mt-16 leading-10" >
        <h1 class="font-bold text-xl"> Katkıda bulunabilir miyim ?</h1>
        <hr class="my-4">
        <p >
          Evet, katkıda bulunabilirsiniz. Sizlerinde desteğiyle buraları güzel bir şekilde geliştirebiliriz. Katkıda bulunmanız için ufak bir anlatım yapacağım. Böylelikle katkıda bulunmak istediğinizde 
          bir sorun ile karşılaşmayacağınızı ümit etmiş olacağım.
        </p>
        <h1 class="font-bold text-lg mt-4"> Adım 1: Projeyi forklayın.</h1>
        <p>
          Github adresinden projenin bulunduğu alana gidin ve forklayın. Ardından sevdiğiniz herhangibir IDE'de projeyi açın ve gerekli bağımlılıkları yükleyin. <span class="italic">(npm install)</span>
        </p>
        <h1 class="font-bold text-lg mt-4"> Adım 2: Brach oluşturun.</h1>
        <p>
          Bağımlılıkları yükledikten sonra eklemek istediğiniz özelliğe uygun veya mevcut hataya uygun isimde bir branch oluşturun. Örnek vermek gerekirse buraya <span>buttonları</span> eklemek istiyorum ve 
          oluşturacağım branch ise buna benzer olması gerektiğine karar verdim. Terminal üzerinden, <span class="italic underline px-2"> git checkout -b "button-feature" </span>  komutunu kullanarak button-feature branchini oluşturdum.
        </p>
        <h1 class="font-bold text-lg mt-4"> Adım 3: Değişikliklerinizi yapın.</h1>
        <p>
          Öncelikle yeni bir sayfa ekleyip bu sayfaya da eklemek istediğim elementin özelliklerini eklemeye karar verdim. Proje yapımı incelediğinizde her sayfa views/ altında bulunmaktadır. Örneğin, buttonları eklemek istiyorum. 
          <span class="italic"> views/ </span> klasöründe daha önce böyle bir .vue dosyasının oluşturulmadığını gördüm. Bende bir tane oluşturdum. Bir başlık ve ufak bir açıklama ekledim. Ardından <span class="italic"> components/</span> klasörünün altında da <span class="italic">ButtonExamples</span> isminde bir 
          component oluşturdum. <span class="italic">ButtonExamples</span> altında mevcut buttonların farklı boyutlar da ve farklı renklerde özelliklerini ekledim.
        </p>
        <p>
          Ardından, oluşturduğum ButtonExamples ismindeki componentimi <span class="italic ">views/button </span> ismindeki .vue dosyasının içine ekledim. BU adımdan sonra yapmam gereken tek şey,  <span class="italic ">common/menu  </span> dosyasına girip yeni  bir button linki oluşturmak 
          sonra da <span class="italic">router/index.js</span> dosyası altında da oluşturduğum  <span class="italic">views/button </span> altındaki adresi buraya eklemek olacaktır. 
        </p>
        <h1 class="font-bold text-lg mt-4"> Adım 4: Commit için anlamlı bir mesaj yazın.</h1>
        <p>
          Bütün değişiklikleri eklediniz, testlerinizi yaptınız ve başarıyla çalıştığını gördünüz. Süper !  Bu adımdan sonra terminali açarak  <span class="italic underline px-3"> git commit -m "Button sayfası oluşturuldu, örnekler eklendi" </span> gibi basit bir commit ile açıklamanızı yazın.
        </p>
        <p>
          Sonrada pushlayın. <span class="italic underline px-2"> git push origin button-feature </span>
        </p>
        <h1 class="font-bold text-lg mt-4"> Adım 5:Pull Request Oluşturun </h1>
        <p>
          Bu adımda, projenin orjinal github sayfasına gidin. <span class="text-green-600"> Pull Request  </span> ismindeki linke tıklayın. <span class="text-blue-600"> New Pull Request </span> butonuna tıklayın. Kendi oluşturduğumuz button-feature branchini seçin. 
          Ardından <span class="text-green-600"> Create Pull Request </span> seçeneğine tıklayın. Gerekli başlığı ve açıklama alanlarını anlamlı bir şekilde doldurun. İşte bu kadar ! Bu adımdan sonra eklemiş olduğunuz özelliği inceleyeceğim ve diğer versiyonlarla uyumlu çalışırsa,
          kaynak kod ile birleştireceğim. Eğer Adım 5'i anlamakta güçlük çekiyorsanız aşağıya sizler için türkçe bir video ve ufak bir döküman bırakacağım. 
        </p>
        <a class="text-blue-500 hover:underline hover:text-blue-600" href="https://www.youtube.com/watch?v=N_qEmSRsFlI" target="_blank"> Bu adresden örnek türkçe açıklamalı videoya ulaşabilirsiniz.</a><br>
        <a class="text-blue-500 hover:underline hover:text-blue-600" href="https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork" target="_blank"> Bu adresden ise nasıl bir PR açabileceğinize dair dökümanı okuyabilirsiniz. </a>
    </div>
    <!-- Eklemeyi planladıklarım -->
    <div class="mt-16 leading-10" >
        <h1 class="font-bold text-xl"> İleride eklenmesi beklenen özellikler</h1>
        <hr class="my-4">
        <p >
          Burada mevcut eklenen yenilikleri ve eklenecek yenilikleri görebilirsiniz. Eğer bir öneriniz varsa issue açarak bunu belirtebilirsiniz. Kendime ait zamanımda vaktim kaldıkça bu özellikleri eklemeyi ümit ediyorum.
        </p>
        <div class="flex flex-col">
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> Badge
          </label>
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> Alerts
          </label>
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> Buttons
          </label>
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> Pagination
          </label>
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> Chips
          </label>
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> Navbars
          </label>
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> Progress
          </label>
          <label class="font-mono line-through text-green-500">
            <input type="checkbox" class="transform scale-150" checked disabled> List  groups
          </label>
          <label class="font-mono ">
            <input type="checkbox" class="transform scale-150"> Inputs
          </label>
          <label class="font-mono ">
            <input type="checkbox" class="transform scale-150"> Cards
          </label>
          <label class="font-mono ">
            <input type="checkbox" class="transform scale-150"> Toast
          </label>
        </div>
    </div>
     <!-- Gerekli Linkler-->
    <div class="mt-24 leading-10" >
        <h1 class="font-bold text-xl"> Gerekli Linkler </h1>
        <hr class="my-4">
        <p>
          Bu alanda projenin kaynak kodlarının bulunduğu adresi ziyaret edebilir ve TailwindCSS'in resmi dökümanını inceleyebilirsiniz.
          <a class="text-blue-500 hover:underline hover:text-blue-600" href="https://www.tailwindcss.com" target="_blank"> TailwindCSS adresine ulaşmak isteyenleri buradan uğurlayalım.</a><br>
          <a class="text-blue-500 hover:underline hover:text-blue-600" href="https://github.com/firatkaya1/k-utils" target="_blank"> Kaynak kodları görmek isteyenleri bu tarafa alalım.</a><br>
        </p>
    </div>
  </div>
</template>

<script>
export default {
    name:"Home"
}
</script>

<style>

</style>