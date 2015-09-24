var app = {

  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    this.blockScreen = app.blockScreen();
    document.addEventListener('deviceready', this.onDeviceReady, false)
    document.addEventListener("online", this.onOnline.bind(this), false);
    document.addEventListener("offline", this.onOffline.bind(this), false);
  },

  onDeviceReady: function() {
    console.log('onDeviceReady');
  },

  onOnline: function() {
    console.log('onOnline');
    this.blockScreen(true);
  },

  onOffline: function() {
    console.log('onOffline');
    this.blockScreen(false);
  },

  blockScreen: function() {
    var
      InAppBrowser;

    return function(show) {
      if (show) {
        console.log('InAppBrowser:', InAppBrowser);
        console.log('cordova.InAppBrowser:', cordova.InAppBrowser);
        if (InAppBrowser) {
          InAppBrowser = null;
        }
        InAppBrowser = cordova.InAppBrowser.open('http://fatenation.ru/', '_blank', 'location=no,toolbar=no');
      } else {
        if (InAppBrowser) {
          InAppBrowser.close();
        }
      }
    }
  }
};

app.initialize();
