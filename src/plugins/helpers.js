export function mobileChecker() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 966) {
    return false;
  } else {
    return true;
  }
}
