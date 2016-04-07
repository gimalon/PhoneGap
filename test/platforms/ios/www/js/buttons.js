//Button Functions
var func1=document.getElementById("trackEvent");
var func2=document.getElementById("setCurrency");
var func3=document.getElementById("setUserId");
var func4=document.getElementById("getUserId");
if(func1){
    func1.addEventListener("click", trackEvent, false);
}
if(func2){
    func2.addEventListener("click", setCurrency, false);
}
if(func3){
    func3.addEventListener("click", setUserId, false);
}
if(func4){
    func4.addEventListener("click", getUserId, false);
}

 function setCurrency(currencyId){
    console.log("Curreny set");
    currencyId = "USD";
    window.plugins.appsFlyer.setCurrencyCode(currencyId);
}
 function setUserId(userAppId) {
    console.log("User set");
    userAppId = "887788778";
    window.plugins.appsFlyer.setAppUserId(userAppId);
}
 function getUserId() {
    console.log("Got user Id");
    window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
}
 function getUserIdCallbackFn(id) {
    alert('received id is: ' + id);
}
 function trackEvent(eventName, eventValues) {
    console.log("Event tracked");
    eventName = "af_add_to_cart";
    eventValues = {"af_content_id": "id123", "af_currency":"USD", "af_revenue": "2"};
    window.plugins.appsFlyer.trackEvent(eventName, eventValues);
}
