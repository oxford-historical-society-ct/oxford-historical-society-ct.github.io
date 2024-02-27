var ScreenWidth = 0;
var ScreenHeight = 0;
var ImageWidth = 0;
var ImageHeight = 0;
var BorderType = '';

function GetScreenSize() {
  if (self.screen) {
    ScreenWidth = screen.width;
    ScreenHeight = screen.height;
    }
  else if (self.java) {
    dtk = java.awt.Toolkit.getDefaultToolkit();
    ss = dtk.getScreenSize();
    ScreenWidth = ss.width;
    ScreenHeight = ss.height;
    }
  else if (self.theBody) {
    ScreenWidth = theBody.offsetWidth;
    ScreenHeight = theBody.offsetHeight;
    }
  else {
    ScreenWidth = 800;
    ScreenHeight = 600;
    }
}

function GetWindowSize() {
  if (typeof(window.innerWidth ) == 'number') {
    ScreenWidth = window.innerWidth;
    ScreenHeight = window.innerHeight;
    }
  else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    ScreenWidth = document.documentElement.clientWidth;
    ScreenHeight = document.documentElement.clientHeight;
    }
  else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
    ScreenWidth = document.body.clientWidth;
    ScreenHeight = document.body.clientHeight;
    }
  else
    GetScreenSize();
}

function SetSize(W, H, Percent) {
  var Ratio = 0.0;
  var Temp = 0.0;

  GetWindowSize();
  if (Percent < 100) {
    ScreenWidth = Math.round(ScreenWidth * Percent / 100);
    ScreenHeight = Math.round(ScreenHeight * Percent / 100);
  }

  if (W > ScreenWidth) {
    Ratio = ScreenWidth / W;
    Temp = ScreenHeight / H;
    if (Temp < Ratio)
      Ratio = Temp;
    ImageWidth = Math.round(W * Ratio);
    ImageHeight = Math.round(H * Ratio);
  }
  else if (H > ScreenHeight) {
    Ratio = ScreenHeight / H;
    ImageWidth = Math.round(W * Ratio);
    ImageHeight = Math.round(H * Ratio);
  }
  else {
    ImageWidth = W;
    ImageHeight = H;
  }
}

// Copyright © 2004 Fookes Software, www.fookes.com