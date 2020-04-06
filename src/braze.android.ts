import { android as androidApp } from "tns-core-modules/application";
import { GenderTypes, BrazeCardCategory, NotificationSubscriptionType, CommonBraze, AppboyEvent } from '.';

const Appboy = (com.appboy as any).Appboy;
const Events = (com.appboy as any).Appboy.events;
const Intent = android.content.Intent;
const AppboyLocationService = (com.appboy as any).services.AppboyLocationService;
const AppboyInAppMessageManager = (com.appboy as any).ui.inappmessage.AppboyInAppMessageManager;
const AppboyProperties = (com.appboy as any).models.outgoing.AppboyProperties;
const AppboyContentCardsFragment = (com.appboy as any).ui.AppboyContentCardsFragment;

export class Braze implements CommonBraze {
    private static instance: Braze = new Braze();

    constructor() {
        if (Braze.instance) {
            throw new Error("Error: Instance failed: Use Braze.getInstance() instead of new.");
        }

        Braze.instance = this;
    }

    static getInstance() {
        return Braze.instance;
    }

    getInstallTrackingId(): string {
        return Appboy.getInstance(androidApp.context).getInstallTrackingId();
    }

    // Noop for android
    setSDKFlavor(): void {
        return;
    }

    changeUser(userId: string): void {
        Appboy.getInstance(androidApp.context).changeUser(userId);
    }

    addAlias(aliasName: string, aliasLabel: string): boolean {
        this.setSDKFlavor();

        return Appboy.getInstance(androidApp.context).getCurrentUser().addAlias(aliasName, aliasLabel);
    }

    registerAndroidPushToken(token: string) {
        Appboy.getInstance(androidApp.context).registerAppboyPushMessages(token);
    }

    setCustomUserAttribute(key: string, value: any) {
        const valueType = typeof (value);

        if (value instanceof Date) {
            return Appboy.getInstance(androidApp.context).getCurrentUser().setCustomUserAttributeToSecondsFromEpoch(key, value);
        } else if (value instanceof Array) {
            return Appboy.getInstance(androidApp.context).getCurrentUser().setCustomUserAttributeArray(key, value)
        } else if (valueType === 'boolean' || valueType === 'string' || valueType === 'number') {
            return Appboy.getInstance(androidApp.context).getCurrentUser().setCustomUserAttribute(key, value);
        }
    }

    incrementCustomUserAttribute(key: string, incrementValue: any): boolean {
        return Appboy.getInstance(androidApp.context).getCurrentUser().incrementCustomUserAttribute(key, incrementValue);
    }

    setFirstName(firstName: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setFirstName(firstName);
    }

    setLastName(lastName: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setLastName(lastName);
    }

    setEmail(email: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setEmail(email);
    }

    setGender(gender: GenderTypes[keyof GenderTypes]): boolean {
        if (!gender) {
            console.log('Invalid gender input');
            return null;
        }

        // TODO: finish implantation;

        return false;
    }

    setLanguage(language: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setLanguage(language);
    }

    setCountry(country: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setCountry(country);
    }

    setHomeCity(homeCity: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setHomeCity(homeCity);
    }

    setPhoneNumber(phoneNumber: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setPhoneNumber(phoneNumber);
    }

    setAvatarImageUrl(avatarImageUrl: string): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setAvatarImageUrl(avatarImageUrl)
    }

    setDateOfBirth(year: number, month: number, day: number): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setDateOfBirth(year, month, day);
    }

    setPushNotificationSubscriptionType(notificationSubscriptionType: NotificationSubscriptionType[keyof NotificationSubscriptionType]): boolean {
        if (!notificationSubscriptionType) {
            console.log('Input subscription type was null. Push notification subscription type not set.');
            return null;
        }

        return Appboy.getInstance(androidApp.context).getCurrentUser().setPushNotificationSubscriptionType(notificationSubscriptionType);
    }

    setEmailNotificationSubscriptionType(notificationSubscriptionType: NotificationSubscriptionType[keyof NotificationSubscriptionType]): boolean {
        if (!notificationSubscriptionType) {
            console.log('Input subscription type was null. Email notification subscription type not set.');
            return null;
        }

        return Appboy.getInstance(androidApp.context).getCurrentUser().setEmailNotificationSubscriptionType(notificationSubscriptionType);
    }

    addToCustomUserAttributeArray(
        key: string,
        value: string
    ): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().addToCustomAttributeArray(key, value);
    }

    logCustomEvent(eventName: string, eventProperties?: object) {
        if (eventProperties) {
            const appboyProperties = new AppboyProperties();

            for (const key in eventProperties) {
                if (eventProperties[key] instanceof Date) {
                    appboyProperties.addProperty(key, new java.util.Date(eventProperties[key].valueOf()));
                    continue;
                }

                appboyProperties.addProperty(key, eventProperties[key]);
            }

            Appboy.getInstance(androidApp.context).logCustomEvent(eventName, appboyProperties);
            return;
        }

        Appboy.getInstance(androidApp.context).logCustomEvent(eventName);
    }

    logPurchase(
        productId: string,
        price: string,
        currencyCode: string,
        quantity: number,
        purchaseProperties?: object
    ): void {
         // TODO: Implement me
    }

    addToCustomAttributeArray(
        key: string,
        value: string
    ): boolean {
        return Appboy.getInstance(androidApp.context).getCurrentUser().addToCustomAttributeArray(key, value);
    }

    removeFromCustomUserAttributeArray() {
        // TODO: Implement me
    }

    unsetCustomUserAttribute(key: string) {
        // TODO: Implement me
    }

    setTwitterData(
        id: number,
        screenName: string,
        name: string,
        description: string,
        followersCount: number,
        friendsCount: number,
        statusesCount: number,
        profileImageUrl: string
    ) {
        // TODO: Implement me
    }

    setFacebookData(
        facebookUserDictionary: object,
        numberOfFriends: number,
        likes: Array<any>
    ) {
        // TODO: Implement me
    }

    setAttributionData(
        network: string,
        campaign: string,
        adGroup: string,
        creative: string
    ) {
        // TODO: Implement me
    }

    launchNewsFeed(): void {
        const intent: android.content.Intent = new Intent(androidApp.foregroundActivity, com.appboy.ui.activities.AppboyFeedActivity.class);

        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        androidApp.context.startActivity(intent);
    }

    launchContentCards(): void {
        const intent: android.content.Intent = new Intent(androidApp.foregroundActivity, com.appboy.ui.activities.AppboyContentCardsActivity.class);

        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        androidApp.context.startActivity(intent);
    }

    requestContentCardsRefresh(): void {
        Appboy.getInstance(androidApp.context).requestContentCardsRefresh(false);
    }

    logContentCardClicked(id: string): void {
        // TODO: Implement me
    }

    logContentCardDismissed(id: string): void {
        // TODO: Implement me
    }

    logContentCardImpression(id: string): void {
        // TODO: Implement me
    }

    logContentCardsDisplayed(): void {
        // TODO: Implement me
    }

    getContentCards(): void {
        // TODO: Implement me
    }

    getCardCategoryForString(category?: BrazeCardCategory): string {
        if (!category) {
            return 'ALL';
        }
        return category.toUpperCase();
    }

    getCardCountForCategories(
        category: BrazeCardCategory[keyof BrazeCardCategory] = BrazeCardCategory.ALL
    ): number {
        // TODO: get by category

        // return Events.FeedUpdatedEvent.getContentCardCount(
        //     this.getCardCategoryForString(category as BrazeCardCategory)
        // );
        return Appboy.getInstance(androidApp.context).getContentCardCount();
    }

    getUnreadCardCountForCategories(
        category: BrazeCardCategory[keyof BrazeCardCategory] = BrazeCardCategory.ALL
    ): number {
        // TODO: get by category

        // return Events.FeedUpdatedEvent.getContentCardUnviewedCount(
        //     this.getCardCategoryForString(category as BrazeCardCategory)
        // );
        return Appboy.getInstance(androidApp.context).getContentCardUnviewedCount();
    }

    requestFeedRefresh(): void {
        Appboy.getInstance(androidApp.context).requestFeedRefresh();
    }

    requestImmediateDataFlush(): void {
        Appboy.getInstance(androidApp.context).requestImmediateDataFlush();
    }

    wipeData(): void {
        Appboy.wipeData(androidApp.context);
    }

    disableSDK(): void {
        Appboy.disableSdk(androidApp.context);
    }

    enableSDK(): void {
        Appboy.enableSdk(androidApp.context);
    }

    requestLocationInitialization(): void {
        AppboyLocationService.requestInitialization(androidApp.context);
    }

    setLocationCustomAttribute(
        key: string,
        latitude: number,
        longitude: number
    ): void {
        Appboy.getInstance(androidApp.context).getCurrentUser().setLocationCustomAttribute(key, latitude, longitude);
    }

    hideCurrentInAppMessage(): void {
        AppboyInAppMessageManager.getInstance().hideCurrentlyDisplayingInAppMessage(true);
    }

    addListener(
        event: AppboyEvent[keyof AppboyEvent],
        subscriber: (notification: any) => any
    ): any {
        let notificationName;
        switch (event) {
            case AppboyEvent.CONTENT_CARDS_UPDATED:
                notificationName = Events.ContentCardsUpdatedEvent;
                break;
            default:
                notificationName = event as string;
                break;
        }
        // TODO: Add listener
    }
}
