import { Component, OnInit } from "@angular/core";

import { Braze } from 'nativescript-braze';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public userId: string = '5c19418562b230fec890ae63';
    public eventName: string = 'Test';
    public deviceId = '';

    brazeInstance: Braze;

    constructor() {
        this.brazeInstance = Braze.getInstance();
        this.brazeInstance.changeUser(this.userId);
    }

    ngOnInit(): void {}

    onGetDeviceId(): void {
        this.deviceId = this.brazeInstance.getInstallTrackingId();
    }

    onChangeUser(): void {
        this.brazeInstance.changeUser(this.userId);
    }

    onLogCustomEvent(): void {
        this.brazeInstance.logCustomEvent(this.eventName);
        this.brazeInstance.logCustomEvent(this.eventName, {'stringKey': 'stringValue', 'intKey': 42, 'floatKey': 1.23, 'boolKey': true, 'dateKey': new Date()});
    }

    onLaunchNewsFeed(): void {
        this.brazeInstance.launchNewsFeed();
    }

    onLaunchContentCards(): void {
        this.brazeInstance.launchContentCards();
    }

    onNewsFeedRefresh(): void {
        this.brazeInstance.requestFeedRefresh();
    }
}
