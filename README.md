# ViaSesTest

Windows Bilgisayarda Projeyi Ayağa Kaldırma

Gerekli Kurulumlar

1- Node.js   
```https://nodejs.org/en/download/```

2- Java jdk 1.8   
```https://www.oracle.com/in/java/technologies/javase-downloads.html```

3- Android Studio   
```https://developer.android.com/studio```

4- Cordova CLI   
```npm install -g cordova```

İlk kez projeyi ayağa kaldırmak için;

proje içindeki ```/main/www/js/index.js``` dosyasında belirtilen url kısmına webrtc urlini yazdıktan sonra,
komut satırında projesi dizinine girip aşağıdaki komutları çalıştırınız. 
(son komut sırasında cihazınız usb ile bilgisayara bağlı olursa uygulamayı cihazınıza yükleyecek)

```
npm install   
cordova prepare android   
cordova run android   
```

Projeyi ilk kez çalıştırdıktan sonra ```/main/www/js/index.js``` dosyasında yaptığınız değişikliklerin ardından sadece ```cordova run android``` komutunu çalıştırmanız yeterli olacak.  

Ayrıca webrtc sitesinde javascript tarafta aşağıdaki kodlar kullanılarak uygulamada event tetiklenmesi sağlanabilir. (Aşağıda geçilen obje örnektir.)  

```
var messageObj = {
                    EventType:"UserCallClose",
	                  AdditionalData:"//Buradan gerekirse JSON olarak ekstra data geçilebilir."
                  };
webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(messageObj));
```

** Test uygulamasında şuan permission plugini yüklemediğimizden,
gerekli izinleri telefonunuzun uygulama ayarlarına girip,  Mikrofon ve kamera izinleri elle 
açtıktan sonra testlerinizi gerçekleştirebilirsiniz.


Inappbrowser ile ilgili dokümantasyona aşağıdaki linkten ulaşabilirsiniz.
Sayfa yüklenmeden post gönderme vs buradan incelenebilir.     
```https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-inappbrowser/```

Mevcut uygulamada gerekli pluginler ve izinler eklendi. Gereken ek izin olursa
```AndroidManifest.xml``` dosyasına eklemeler yapabilirsiniz. Kullanılan pluginler aşağıda belirtildi.

```
cordova-plugin-camera 5.0.2 "Camera"    
cordova-plugin-file 6.0.2 "File"    
cordova-plugin-inappbrowser 5.0.0 "InAppBrowser"    
cordova-plugin-media-capture 3.0.3 "Capture"    
cordova-plugin-whitelist 1.3.4 "Whitelist"   
```

Şuan inappbrowserda yaşanılan kamera izni ile ilgili bir issue, buna benzer googleda aratılabilir.    
```https://github.com/apache/cordova-plugin-inappbrowser/issues/741```
