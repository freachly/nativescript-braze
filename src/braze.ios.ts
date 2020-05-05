import {
    BrazeCardCategory, GenderTypes, NotificationSubscriptionType, AppboyEvent,
    ContentCardType, MonthsAsNumber, CommonBraze
} from './';
import { ios } from 'tns-core-modules/application/application';

declare const Appboy: any;
declare const ABKNewsFeedViewController: any;

export class Braze implements CommonBraze {
    private static instance: Braze = new Braze();
    appboy: Appboy = null;

    constructor() {
        if (Braze.instance) {
            throw new Error("Error: Instance failed: Use Braze.getInstance() instead of new.");
        }

        Braze.instance = this;
    }

    static getInstance() {
        return Braze.instance;
    }

    startUp(apiKey: string, application: UIApplication, launchOptions: NSDictionary<any, any>, appboyOptions?: any): void {
        if (!appboyOptions) {
            Appboy.startWithApiKeyInApplicationWithLaunchOptions(apiKey, application, launchOptions);
        } else {
            Appboy.startWithApiKeyInApplicationWithLaunchOptionsWithAppboyOptions(apiKey, application, launchOptions, appboyOptions);
        }

        this.appboy = Appboy.sharedInstance();
    }

    getInitialURL(): void {
        // TODO: Implement logic
    }

    getInstallTrackingId(): string {
        return this.appboy.getDeviceId();
    }

    setSDKFlavor(): void {
        this.appboy.sdkFlavor = 2;
    }

    changeUser(userId: string): void {
        this.setSDKFlavor();
        this.appboy.changeUser(userId);
    }

    addAlias(aliasName: string, aliasLabel: string): boolean {
        this.setSDKFlavor();

        return this.appboy.user.addAliasWithLabel(aliasName, aliasLabel);
    }

    // Noop for iOS
    registerAndroidPushToken(token: string): void {
        return;
    }

    setCustomUserAttribute(key: string, value: any): boolean | null {
        const valueType = typeof(value);

        if (value instanceof Date) {
            return this.appboy.user.setCustomAttributeWithKeyAndDateValue(key, value);
        } else if (value instanceof Array) {
            return this.appboy.user.setCustomAttributeArrayWithKeyArray(key, value);
        } else if (valueType === 'boolean') {
            return this.appboy.user.setCustomAttributeWithKeyAndBOOLValue(key, value);
        } else if (valueType === 'string') {
            return this.appboy.user.setCustomAttributeWithKeyAndStringValue(key, value);
        } else if (valueType === 'number') {
            if (parseInt(value) === parseFloat(value)) {
                return this.appboy.user.setCustomAttributeWithKeyAndIntegerValue(key, value);
            } else {
                return this.appboy.user.setCustomAttributeWithKeyAndDoubleValue(key, value);
            }
        }

        return null;
    }

    addToCustomUserAttributeArray(
        key: string,
        value: string
    ): void {
        this.appboy.user.addToCustomAttributeArrayWithKeyValue(key, value);
    }

    incrementCustomUserAttribute(key: string, incrementValue: number) {
        this.appboy.user.incrementCustomUserAttributeBy(key, incrementValue);
    }

    setFirstName(firstName: string): void {
        this.appboy.user.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.appboy.user.lastName = lastName;
    }

    setEmail(email: string): void {
        this.appboy.user.email = email;
    }

    setGender(gender: GenderTypes[keyof GenderTypes]): boolean {
        // TODO: Implement me
        return true;
    }

    setLanguage(language: string): void {
        this.appboy.user.language = language;
    }

    setCountry(country: string): void {
        this.appboy.user.country = country;
    }

    setPhoneNumber(phoneNumber: string): void {
        this.appboy.user.phone = phoneNumber;
    }

    setHomeCity(homeCity: string): void {
        this.appboy.user.homeCity = homeCity;
    }

    setAvatarImageUrl(avatarImageUrl: string): void {
        this.appboy.user.avatarImageURL = avatarImageUrl;
    }

    setDateOfBirth(year: number, month: MonthsAsNumber, day: number): void {
        // TODO: Implement me
    }

    setPushNotificationSubscriptionType(notificationSubscriptionType: NotificationSubscriptionType[keyof NotificationSubscriptionType]): boolean {
        // TODO: Implement me
        // return this.appboy.user.setPushNotificationSubscriptionType(notificationSubscriptionType);
        return true;
    }

    setEmailNotificationSubscriptionType(notificationSubscriptionType: NotificationSubscriptionType[keyof NotificationSubscriptionType]): boolean {
        // TODO: Implement me
        // return this.appboy.user.setEmailNotificationSubscriptionType(notificationSubscriptionType);
        return true;
    }

    logCustomEvent(eventName: string, eventProperties?: object) {
        if (eventProperties) {
            this.appboy.logCustomEventWithProperties(eventName, NSDictionary.dictionaryWithDictionary(eventProperties as NSDictionary<any, any>));
            return;
        }

        this.appboy.logCustomEvent(eventName);
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
        return this.appboy.user.addToCustomAttributeArrayWithKeyValue(key, value);
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

    launchNewsFeed(title: string = 'News Feed'): void {
        const feedModal = ABKNewsFeedViewController.alloc().init();
        feedModal.newsFeed.title = title;

        const keyWindow = UIApplication.sharedApplication.keyWindow;
        const mainViewController = keyWindow.rootViewController;

        mainViewController.presentViewControllerAnimatedCompletion(feedModal, true, null);
    }

    launchContentCards(title: string = 'Content Cards'): void {
        const contentCardsModal = ABKContentCardsViewController.alloc().init();
        contentCardsModal.contentCardsViewController.title =  title;

        const keyWindow = UIApplication.sharedApplication.keyWindow;
        const mainViewController = keyWindow.rootViewController;

        mainViewController.presentViewControllerAnimatedCompletion(contentCardsModal, true, null);
    }

    requestContentCardsRefresh(): void {
        this.appboy.requestContentCardsRefresh();
    }

    logContentCardClicked(id: string): void {

    }

    logContentCardDismissed(id: string): void {

    }

    logContentCardImpression(id: string): void {

    }

    logContentCardsDisplayed(): void {

    }

    getContentCards(): void {
    // getContentCards(): Promise<ContentCard[]> {
        // TODO: Implement me
        // return new Promise();
    }

    getCardCategoryForString(category?: BrazeCardCategory[keyof BrazeCardCategory]): ABKCardCategory {
        let cardCategory: ABKCardCategory;
        switch (category) {
            case BrazeCardCategory.ADVERTISING:
                cardCategory = ABKCardCategory.Advertising;
                break;
            case BrazeCardCategory.ANNOUNCEMENTS:
                cardCategory = ABKCardCategory.Announcements;
                break;
            case BrazeCardCategory.NEWS:
                cardCategory = ABKCardCategory.News;
                break;
            case BrazeCardCategory.SOCIAL:
                cardCategory = ABKCardCategory.Social;
                break;
            case BrazeCardCategory.NO_CATEGORY:
                cardCategory = ABKCardCategory.NoCategory;
                break;
            case BrazeCardCategory.ALL:
            default:
                cardCategory = ABKCardCategory.All;
                break;
        }
        return cardCategory;
    }

    getCardCountForCategories(
        category: BrazeCardCategory[keyof BrazeCardCategory] = BrazeCardCategory.ALL
    ): number {
        return this.appboy.feedController.cardCountForCategories(this.getCardCategoryForString(category));
    }

    getUnreadCardCountForCategories(
        category: BrazeCardCategory[keyof BrazeCardCategory] = BrazeCardCategory.ALL
    ): number {
        return this.appboy.feedController.unreadCardCountForCategories(this.getCardCategoryForString(category));
    }

    requestFeedRefresh(): void {
        this.appboy.requestFeedRefresh();
    }

    requestImmediateDataFlush(): void {
        this.appboy.flushDataAndProcessRequestQueue();
    }

    wipeData(): void {
        Appboy.wipeData();
    }

    disableSDK(): void {
        Appboy.disableSDK();
    }

    enableSDK(): void {
        Appboy.requestEnableSDKOnNextAppRun();
    }

    // Noop Android only
    requestLocationInitialization(): void {
        return;
    }

    setLocationCustomAttribute(
        key: string,
        latitude: number,
        longitude: number
    ): void {
        this.appboy.user.addLocationCustomAttributeWithKeyLatitudeLongitude(key, latitude, longitude);
    }

    hideCurrentInAppMessage(): void {
        this.appboy.inAppMessageController.inAppMessageUIController.hideCurrentInAppMessage(true);
    }

    addListener(
        event: AppboyEvent[keyof AppboyEvent],
        subscriber: (notification: any) => any
    ): any {
        let notificationName;
        switch (event) {
            case AppboyEvent.CONTENT_CARDS_UPDATED:
                notificationName = ABKContentCardsProcessedNotification;
                break;
            case AppboyEvent.FEED_UPDATED:
                notificationName = ABKFeedUpdatedNotification;
                break;
            default:
                notificationName = event as string;
                break;
        }
        return ios.addNotificationObserver(notificationName, subscriber);
    }
}