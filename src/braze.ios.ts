import { GenderTypes, NotificationSubscriptionType, MonthsAsNumber, BrazeCardCategory, CommonBraze } from './';

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

    launchNewsFeed(): void {
        const feedModal = ABKNewsFeedViewController.alloc().init();
        // TODO: check why this does not work
        feedModal.navigationItem.title = 'News';

        const keyWindow = UIApplication.sharedApplication.keyWindow;
        const mainViewController = keyWindow.rootViewController;

        mainViewController.presentViewControllerAnimatedCompletion(feedModal, true, null);
    }

    launchContentCards(): void {
        const contentCardsModal = ABKNewsFeedViewController.alloc().init();
        // TODO: check why this does not work
        contentCardsModal.navigationItem.title = 'Content Cards';

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

    getCardCountForCategories(
        category: BrazeCardCategory[keyof BrazeCardCategory]
    ): number {
        // return this.appboy.feedController.cardCountForCategories(category);
        return 0;
    }

    getUnreadCardCountForCategories(
        category: BrazeCardCategory[keyof BrazeCardCategory]
    ): number {
        return this.appboy.feedController.unreadCardCountForCategories(category as any);
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
    
    // addListener(event: AppboyEvent[keyof AppboyEvent], subscriber: Function): EmitterSubscription {
        // TODO: Check how this can be implemented. Maybe look at the web version??
    // }
}