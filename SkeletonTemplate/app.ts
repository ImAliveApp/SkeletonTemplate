/// <reference path="Scripts/collections.ts" />

class AliveClass implements IAliveAgent {
    private resourceManagerHelper: ResourceManagerHelper;


    public constructor() {

    }

    onTick(time: number): void {

    }

    onBackgroundTick(time: number) {
        
    }

    onStart(handler: IManagersHandler, disabledPermissions: string[]): void {

    }

    onPhoneEventOccurred(eventName: string, jsonedData: string): void {

    }

    onMove(oldX: number, oldY: number, newX: number, newY: number): void {

    }

    onRelease(currentX: number, currentY: number): void {

    }

    onPick(currentX: number, currentY: number): void {

    }

    onMenuItemSelected(itemName: string): void {
       
    }

    onConfigureMenuItems(menuBuilder: IMenuBuilder): void {

    }

    onSpeechRecognitionResults(results: string): void { }

    onResponseReceived(response: string): void {

    }

    onLocationReceived(location: IAliveLocation): void {

    }

    onUserActivityStateReceived(state: IAliveUserActivity) {

    }

    onPlacesReceived(places: IAlivePlaceLikelihood[]): void {
        
    }

    onHeadphoneStateReceived(state: number) {

    }

    onWeatherReceived(weather: IAliveWeather) {

    }
}