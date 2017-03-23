/// <reference path="Scripts/collections.ts" />
var AliveClass = (function () {
    function AliveClass() {
    }
    /**
     * This method gets called every 250 milliseconds by the system, any logic updates to the state of your character should occur here.
     * Note: onTick only gets called when the screen is ON.
     * @param time The current time (in milliseconds) on the device.
     */
    AliveClass.prototype.onTick = function (time) {
    };
    /**
     * This method gets called by the system every 1 hour (may be in a different rate depending on the device).
     * Note: this method only gets called when the screen is OFF.
     * @param time The current time (in milliseconds) on the device.
     */
    AliveClass.prototype.onBackgroundTick = function (time) {
    };
    /**
     * This method gets called once when the character is being activated by the system.
     * @param handler An object that allows the code to get reference to the managers.
     * @param disabledPermissions A list of permissions that the user disabled.
     */
    AliveClass.prototype.onStart = function (handler, disabledPermissions) {
    };
    /**
     * This method gets called whenever a phone event (that you registered to) occur on the phone.
     * @param eventName The name of the event that occurred.
     * @param jsonedData The data of the event that occurred.
     * For example, SMS_RECEIVED event will hold data about who sent the SMS, and the SMS content.
     */
    AliveClass.prototype.onPhoneEventOccurred = function (eventName, jsonedData) {
    };
    /**
     * This method gets called when the user is holding and moving the image of your character (on screen).
     * @param oldX The X coordinate in the last tick (Top left).
     * @param oldY The Y coordinate in the last tick (Top left).
     * @param newX The X coordinate in the current tick (Top left).
     * @param newY The Y coordinate in the current tick (Top left).
     */
    AliveClass.prototype.onMove = function (oldX, oldY, newX, newY) {
    };
    /**
     * This method gets called when the user raised his finger off the character image (on screen).
     * @param currentX The X coordinate of the character image on screen (Top left).
     * @param currentY The Y coordinate of the character image on the screen (Top left).
     */
    AliveClass.prototype.onRelease = function (currentX, currentY) {
    };
    /**
     * This method gets called whenever the user is holding the character image (on screen).
     * @param currentX The current X coordinate of the character image (Top left).
     * @param currentY The current Y coordinate of the character image (Top left).
     */
    AliveClass.prototype.onPick = function (currentX, currentY) {
    };
    /**
     * This method gets called whenever the user has pressed a view in the character menu.
     * @param viewName The 'Name' property of the view that was pressed.
     */
    AliveClass.prototype.onMenuItemSelected = function (viewName) {
    };
    /**
     * This method gets called once just before the onStart method and is where the character menu views are defined.
     * @param menuBuilder An object that fills the character menu.
     */
    AliveClass.prototype.onConfigureMenuItems = function (menuBuilder) {
    };
    /**
     * This method gets called when the system done processing the speech recognition input.
     * @param results A stringed version of what the user said.
     */
    AliveClass.prototype.onSpeechRecognitionResults = function (results) { };
    /**
     * This method is called when the system received a reply from a previously HTTP request made by the character.
     * @param response The reply body in a JSON form.
     */
    AliveClass.prototype.onResponseReceived = function (response) {
    };
    /**
     * This method gets called when the system done collecting information about the device location.
     * @param location The location information collected by the system.
     */
    AliveClass.prototype.onLocationReceived = function (location) {
    };
    /**
     * This method gets called when the system done collecting information about the user activity.
     * @param state Information about the user activity.
     * Possible states: IN_VEHICLE, ON_BICYCLE, ON_FOOT, STILL, TILTING, WALKING, RUNNING, UNKNOWN.
     */
    AliveClass.prototype.onUserActivityStateReceived = function (state) {
    };
    /**
     * This method gets called when the system done collecting information about nearby places around the device.
     * @param places A list of places that are near the device.
     */
    AliveClass.prototype.onPlacesReceived = function (places) {
    };
    /**
     * This method gets called when the system done collecting information about the headphone state.
     * @param state 1 - the headphones are PLUGGED, 2 - the headphones are UNPLUGGED.
     */
    AliveClass.prototype.onHeadphoneStateReceived = function (state) {
    };
    /**
     * This method gets called when the system done collecting information about the weather in the location of the device.
     * @param weather Information about the weather.
     */
    AliveClass.prototype.onWeatherReceived = function (weather) {
    };
    return AliveClass;
}());
//# sourceMappingURL=app.js.map