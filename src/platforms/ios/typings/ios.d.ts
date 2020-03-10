
declare class ABKAttributionData extends NSObject {

	static alloc(): ABKAttributionData; // inherited from NSObject

	static new(): ABKAttributionData; // inherited from NSObject

	readonly adGroup: string;

	readonly campaign: string;

	readonly creative: string;

	readonly network: string;

	constructor(o: { network: string; campaign: string; adGroup: string; creative: string; });

	initWithNetworkCampaignAdGroupCreative(network: string, campaign: string, adGroup: string, creative: string): this;
}

declare class ABKBannerCard extends ABKCard implements NSCoding {

	static alloc(): ABKBannerCard; // inherited from NSObject

	static new(): ABKBannerCard; // inherited from NSObject

	domain: string;

	image: string;

	imageAspectRatio: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ABKBannerContentCard extends ABKContentCard implements NSCoding {

	static alloc(): ABKBannerContentCard; // inherited from NSObject

	static new(): ABKBannerContentCard; // inherited from NSObject

	image: string;

	imageAspectRatio: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ABKBannerContentCardCell extends ABKBaseContentCardCell {

	static alloc(): ABKBannerContentCardCell; // inherited from NSObject

	static appearance(): ABKBannerContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKBannerContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKBannerContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKBannerContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKBannerContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKBannerContentCardCell; // inherited from UIAppearance

	static new(): ABKBannerContentCardCell; // inherited from NSObject

	bannerImageView: SDAnimatedImageView;

	imageRatioConstraint: NSLayoutConstraint;

	applyCard(bannerCard: ABKBannerContentCard): void;

	updateImageConstraintsWithRatio(newRatio: number): void;
}

declare class ABKBaseContentCardCell extends UITableViewCell {

	static alloc(): ABKBaseContentCardCell; // inherited from NSObject

	static appearance(): ABKBaseContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKBaseContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKBaseContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKBaseContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKBaseContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKBaseContentCardCell; // inherited from UIAppearance

	static new(): ABKBaseContentCardCell; // inherited from NSObject

	cardSidePadding: number;

	cardSpacing: number;

	delegate: ABKBaseContentCardCellDelegate;

	hideUnreadIndicator: boolean;

	pinImageView: UIImageView;

	rootView: UIView;

	rootViewBottomConstraint: NSLayoutConstraint;

	rootViewLeadingConstraint: NSLayoutConstraint;

	rootViewTopConstraint: NSLayoutConstraint;

	rootViewTrailingConstraint: NSLayoutConstraint;

	unviewedLineView: UIView;

	applyAppboyAttributedTextStyleFromForLabel(text: string, label: UILabel): void;

	applyCard(card: ABKContentCard): void;

	getPlaceHolderImage(): UIImage;
}

interface ABKBaseContentCardCellDelegate extends NSObjectProtocol {

	refreshTableViewCellHeights(): void;
}
declare var ABKBaseContentCardCellDelegate: {

	prototype: ABKBaseContentCardCellDelegate;
};

interface ABKBaseNewsFeedCellDelegate extends NSObjectProtocol {

	refreshTableViewCellHeights(): void;
}
declare var ABKBaseNewsFeedCellDelegate: {

	prototype: ABKBaseNewsFeedCellDelegate;
};

declare class ABKCaptionedImageCard extends ABKCard implements NSCoding {

	static alloc(): ABKCaptionedImageCard; // inherited from NSObject

	static new(): ABKCaptionedImageCard; // inherited from NSObject

	cardDescription: string;

	domain: string;

	image: string;

	imageAspectRatio: number;

	title: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ABKCaptionedImageContentCard extends ABKContentCard implements NSCoding {

	static alloc(): ABKCaptionedImageContentCard; // inherited from NSObject

	static new(): ABKCaptionedImageContentCard; // inherited from NSObject

	cardDescription: string;

	domain: string;

	image: string;

	imageAspectRatio: number;

	title: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ABKCaptionedImageContentCardCell extends ABKBaseContentCardCell {

	static alloc(): ABKCaptionedImageContentCardCell; // inherited from NSObject

	static appearance(): ABKCaptionedImageContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKCaptionedImageContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKCaptionedImageContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKCaptionedImageContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKCaptionedImageContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKCaptionedImageContentCardCell; // inherited from UIAppearance

	static new(): ABKCaptionedImageContentCardCell; // inherited from NSObject

	TitleBackgroundView: UIView;

	captionedImageView: SDAnimatedImageView;

	descriptionBottomConstraint: NSLayoutConstraint;

	descriptionLabel: UILabel;

	imageHeightContraint: NSLayoutConstraint;

	linkBottomConstraint: NSLayoutConstraint;

	linkLabel: UILabel;

	titleLabel: UILabel;

	applyCard(captionedImageCard: ABKCaptionedImageContentCard): void;

	hideLinkLabel(hide: boolean): void;

	updateImageConstraintsWithNewConstant(newConstant: number): void;
}

declare class ABKCard extends NSObject implements NSCoding, NSCopying {

	static alloc(): ABKCard; // inherited from NSObject

	static deserializeCardFromDictionary(cardDictionary: NSDictionary<any, any>): ABKCard;

	static new(): ABKCard; // inherited from NSObject

	categories: ABKCardCategory;

	readonly created: number;

	readonly expiresAt: number;

	extras: NSDictionary<any, any>;

	readonly idString: string;

	openUrlInWebView: boolean;

	readonly updated: number;

	urlString: string;

	viewed: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	hasSameId(card: ABKCard): boolean;

	initWithCoder(coder: NSCoder): this;

	logCardClicked(): void;

	logCardImpression(): void;

	serializeToData(): NSData;
}

declare const enum ABKCardCategory {

	NoCategory = 1,

	News = 2,

	Advertising = 4,

	Announcements = 8,

	Social = 16,

	All = 31
}

declare const enum ABKChannel {

	PushNotificationChannel = 0,

	InAppMessageChannel = 1,

	NewsFeedChannel = 2
}

declare class ABKClassicCard extends ABKCard implements NSCoding {

	static alloc(): ABKClassicCard; // inherited from NSObject

	static new(): ABKClassicCard; // inherited from NSObject

	cardDescription: string;

	domain: string;

	image: string;

	title: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ABKClassicContentCard extends ABKContentCard implements NSCoding {

	static alloc(): ABKClassicContentCard; // inherited from NSObject

	static new(): ABKClassicContentCard; // inherited from NSObject

	cardDescription: string;

	domain: string;

	image: string;

	title: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ABKClassicContentCardCell extends ABKBaseContentCardCell {

	static alloc(): ABKClassicContentCardCell; // inherited from NSObject

	static appearance(): ABKClassicContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKClassicContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKClassicContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKClassicContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKClassicContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKClassicContentCardCell; // inherited from UIAppearance

	static new(): ABKClassicContentCardCell; // inherited from NSObject

	descriptionBottomConstraint: NSLayoutConstraint;

	descriptionLabel: UILabel;

	linkBottomConstraint: NSLayoutConstraint;

	linkLabel: UILabel;

	titleLabel: UILabel;

	applyCard(classicCard: ABKClassicContentCard): void;

	hideLinkLabel(hide: boolean): void;
}

declare class ABKClassicImageContentCardCell extends ABKClassicContentCardCell {

	static alloc(): ABKClassicImageContentCardCell; // inherited from NSObject

	static appearance(): ABKClassicImageContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKClassicImageContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKClassicImageContentCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKClassicImageContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKClassicImageContentCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKClassicImageContentCardCell; // inherited from UIAppearance

	static new(): ABKClassicImageContentCardCell; // inherited from NSObject

	classicImageView: SDAnimatedImageView;
}

declare class ABKContentCard extends NSObject implements NSCoding, NSCopying {

	static alloc(): ABKContentCard; // inherited from NSObject

	static deserializeCardFromDictionary(cardDictionary: NSDictionary<any, any>): ABKContentCard;

	static new(): ABKContentCard; // inherited from NSObject

	clicked: boolean;

	readonly created: number;

	dismissed: boolean;

	dismissible: boolean;

	readonly expiresAt: number;

	extras: NSDictionary<any, any>;

	readonly idString: string;

	openUrlInWebView: boolean;

	pinned: boolean;

	urlString: string;

	viewed: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	hasSameId(card: ABKContentCard): boolean;

	initWithCoder(coder: NSCoder): this;

	isControlCard(): boolean;

	logContentCardClicked(): void;

	logContentCardDismissed(): void;

	logContentCardImpression(): void;

	serializeToData(): NSData;
}

declare class ABKContentCardsController extends NSObject {

	static alloc(): ABKContentCardsController; // inherited from NSObject

	static new(): ABKContentCardsController; // inherited from NSObject

	readonly contentCards: NSArray<any>;

	readonly lastUpdate: Date;

	contentCardCount(): number;

	unviewedContentCardCount(): number;
}

declare var ABKContentCardsProcessedIsSuccessfulKey: string;

declare var ABKContentCardsProcessedNotification: string;

declare class ABKContentCardsTableViewController extends UITableViewController {

	static alloc(): ABKContentCardsTableViewController; // inherited from NSObject

	static dequeueCellFromTableViewForIndexPathForCard(tableView: UITableView, indexPath: NSIndexPath, card: ABKContentCard): ABKBaseContentCardCell;

	static getNavigationContentCardsViewController(): ABKContentCardsTableViewController;

	static new(): ABKContentCardsTableViewController; // inherited from NSObject

	cacheTimeout: number;

	cards: NSMutableArray<ABKContentCard>;

	disableUnreadIndicator: boolean;

	emptyFeedLabel: UILabel;

	emptyFeedView: UIView;

	handleCardClick(card: ABKContentCard): void;

	localizedAppboyContentCardsString(key: string): string;

	populateContentCards(): void;

	requestNewCardsIfTimeout(): void;
}

declare class ABKContentCardsViewController extends UINavigationController {

	static alloc(): ABKContentCardsViewController; // inherited from NSObject

	static new(): ABKContentCardsViewController; // inherited from NSObject

	contentCardsViewController: ABKContentCardsTableViewController;
}

declare class ABKContentCardsWebViewController extends UIViewController implements WKNavigationDelegate {

	static alloc(): ABKContentCardsWebViewController; // inherited from NSObject

	static new(): ABKContentCardsWebViewController; // inherited from NSObject

	progressBar: UIProgressView;

	showDoneButton: boolean;

	url: NSURL;

	webView: WKWebView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

declare const enum ABKDeviceOptions {

	None = 0,

	Resolution = 1,

	Carrier = 2,

	Locale = 4,

	Model = 8,

	OSVersion = 16,

	IDFV = 32,

	IDFA = 64,

	PushEnabled = 128,

	Timezone = 256,

	PushAuthStatus = 512,

	AdTrackingEnabled = 1024,

	PushDisplayOptions = 2048,

	All = 4294967295
}

declare var ABKDeviceWhitelistKey: string;

declare var ABKDisableAutomaticGeofenceRequestsKey: string;

declare var ABKEnableAutomaticLocationCollectionKey: string;

declare var ABKEnableGeofencesKey: string;

declare var ABKEndpointKey: string;

declare class ABKFacebookUser extends NSObject {

	static alloc(): ABKFacebookUser; // inherited from NSObject

	static new(): ABKFacebookUser; // inherited from NSObject

	readonly facebookUserDictionary: NSDictionary<any, any>;

	readonly likes: NSArray<any>;

	readonly numberOfFriends: number;

	constructor(o: { facebookUserDictionary: NSDictionary<any, any>; numberOfFriends: number; likes: NSArray<any> | any[]; });

	initWithFacebookUserDictionaryNumberOfFriendsLikes(facebookUserDictionary: NSDictionary<any, any>, numberOfFriends: number, likes: NSArray<any> | any[]): this;
}

declare class ABKFeedController extends NSObject {

	static alloc(): ABKFeedController; // inherited from NSObject

	static new(): ABKFeedController; // inherited from NSObject

	readonly lastUpdate: Date;

	readonly newsFeedCards: NSArray<any>;

	cardCountForCategories(categories: ABKCardCategory): number;

	getCardsInCategories(categories: ABKCardCategory): NSArray<any>;

	unreadCardCountForCategories(categories: ABKCardCategory): number;
}

declare var ABKFeedUpdatedIsSuccessfulKey: string;

declare var ABKFeedUpdatedNotification: string;

declare class ABKFeedWebViewController extends UIViewController implements WKNavigationDelegate {

	static alloc(): ABKFeedWebViewController; // inherited from NSObject

	static new(): ABKFeedWebViewController; // inherited from NSObject

	progressBar: UIProgressView;

	showDoneButton: boolean;

	url: NSURL;

	webView: WKWebView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

declare var ABKFlushIntervalOptionKey: string;

interface ABKIDFADelegate extends NSObjectProtocol {

	advertisingIdentifierString(): string;

	isAdvertisingTrackingEnabled(): boolean;
}
declare var ABKIDFADelegate: {

	prototype: ABKIDFADelegate;
};

declare var ABKIDFADelegateKey: string;

declare class ABKIdentifierForAdvertisingProvider extends NSObject {

	static alloc(): ABKIdentifierForAdvertisingProvider; // inherited from NSObject

	static getIdentifierForAdvertiser(): string;

	static getIsAdvertisingTrackingEnabledAsNSNumber(): number;

	static new(): ABKIdentifierForAdvertisingProvider; // inherited from NSObject
}

declare class ABKInAppMessage extends NSObject {

	static alloc(): ABKInAppMessage; // inherited from NSObject

	static new(): ABKInAppMessage; // inherited from NSObject

	animateIn: boolean;

	animateOut: boolean;

	backgroundColor: UIColor;

	darkTheme: ABKInAppMessageDarkTheme;

	duration: number;

	enableDarkTheme: boolean;

	extras: NSDictionary<any, any>;

	icon: string;

	iconBackgroundColor: UIColor;

	iconColor: UIColor;

	imageContentMode: UIViewContentMode;

	imageURI: NSURL;

	readonly inAppMessageClickActionType: ABKInAppMessageClickActionType;

	inAppMessageDismissType: ABKInAppMessageDismissType;

	isControl: boolean;

	message: string;

	messageTextAlignment: NSTextAlignment;

	openUrlInWebView: boolean;

	orientation: ABKInAppMessageOrientation;

	textColor: UIColor;

	readonly uri: NSURL;

	logInAppMessageClicked(): void;

	logInAppMessageImpression(): void;

	serializeToData(): NSData;

	setInAppMessageClickActionWithURI(clickActionType: ABKInAppMessageClickActionType, uri: NSURL): void;
}

declare class ABKInAppMessageButton extends NSObject {

	static alloc(): ABKInAppMessageButton; // inherited from NSObject

	static new(): ABKInAppMessageButton; // inherited from NSObject

	buttonBackgroundColor: UIColor;

	buttonBorderColor: UIColor;

	readonly buttonClickActionType: ABKInAppMessageClickActionType;

	readonly buttonClickedURI: NSURL;

	readonly buttonID: number;

	buttonOpenUrlInWebView: boolean;

	buttonText: string;

	buttonTextColor: UIColor;

	buttonTextFont: UIFont;

	setButtonClickActionWithURI(clickActionType: ABKInAppMessageClickActionType, uri: NSURL): void;
}

declare const enum ABKInAppMessageClickActionType {

	DisplayNewsFeed = 0,

	RedirectToURI = 1,

	NoneClickAction = 2
}

declare class ABKInAppMessageControl extends ABKInAppMessage {

	static alloc(): ABKInAppMessageControl; // inherited from NSObject

	static new(): ABKInAppMessageControl; // inherited from NSObject
}

declare class ABKInAppMessageController extends NSObject {

	static alloc(): ABKInAppMessageController; // inherited from NSObject

	static new(): ABKInAppMessageController; // inherited from NSObject

	delegate: ABKInAppMessageControllerDelegate;

	readonly forceHideStatusBar: boolean;

	inAppMessageUIController: ABKInAppMessageUIControlling;

	addInAppMessage(newInAppMessage: ABKInAppMessage): void;

	displayNextInAppMessageWithDelegate(delegate: ABKInAppMessageControllerDelegate): void;

	inAppMessagesRemainingOnStack(): number;
}

interface ABKInAppMessageControllerDelegate extends NSObjectProtocol {

	beforeControlMessageImpressionLogged?(inAppMessage: ABKInAppMessage): ABKInAppMessageDisplayChoice;

	beforeInAppMessageDisplayed?(inAppMessage: ABKInAppMessage): ABKInAppMessageDisplayChoice;
}
declare var ABKInAppMessageControllerDelegate: {

	prototype: ABKInAppMessageControllerDelegate;
};

declare var ABKInAppMessageControllerDelegateKey: string;

declare class ABKInAppMessageDarkButtonTheme extends NSObject {

	static alloc(): ABKInAppMessageDarkButtonTheme; // inherited from NSObject

	static new(): ABKInAppMessageDarkButtonTheme; // inherited from NSObject

	buttonBackgroundColor: UIColor;

	buttonBorderColor: UIColor;

	buttonTextColor: UIColor;

	constructor(o: { fields: NSDictionary<any, any>; });

	initWithFields(darkButtonFields: NSDictionary<any, any>): this;
}

declare class ABKInAppMessageDarkTheme extends NSObject {

	static alloc(): ABKInAppMessageDarkTheme; // inherited from NSObject

	static new(): ABKInAppMessageDarkTheme; // inherited from NSObject

	backgroundColor: UIColor;

	buttons: NSArray<ABKInAppMessageDarkButtonTheme>;

	closeButtonColor: UIColor;

	frameColor: UIColor;

	headerTextColor: UIColor;

	iconBackgroundColor: UIColor;

	iconColor: UIColor;

	textColor: UIColor;

	constructor(o: { fields: NSDictionary<string, string>; });

	getColorForKey(key: string): UIColor;

	initWithFields(darkThemeFields: NSDictionary<string, string>): this;
}

declare const enum ABKInAppMessageDismissType {

	Automatically = 0,

	Manually = 1
}

declare const enum ABKInAppMessageDisplayChoice {

	DisplayInAppMessageNow = 0,

	DisplayInAppMessageLater = 1,

	DiscardInAppMessage = 2
}

declare class ABKInAppMessageFull extends ABKInAppMessageImmersive {

	static alloc(): ABKInAppMessageFull; // inherited from NSObject

	static new(): ABKInAppMessageFull; // inherited from NSObject
}

declare class ABKInAppMessageFullViewController extends ABKInAppMessageImmersiveViewController {

	static alloc(): ABKInAppMessageFullViewController; // inherited from NSObject

	static new(): ABKInAppMessageFullViewController; // inherited from NSObject

	closeXButtonTopConstraint: NSLayoutConstraint;
}

declare class ABKInAppMessageHTML extends ABKInAppMessage {

	static alloc(): ABKInAppMessageHTML; // inherited from NSObject

	static new(): ABKInAppMessageHTML; // inherited from NSObject

	assetsLocalDirectoryPath: NSURL;

	assetsZipRemoteUrl: NSURL;

	logInAppMessageHTMLClickWithButtonID(buttonId: string): void;
}

declare class ABKInAppMessageHTMLFull extends ABKInAppMessageHTML {

	static alloc(): ABKInAppMessageHTMLFull; // inherited from NSObject

	static new(): ABKInAppMessageHTMLFull; // inherited from NSObject
}

declare class ABKInAppMessageHTMLFullViewController extends ABKInAppMessageHTMLViewController {

	static alloc(): ABKInAppMessageHTMLFullViewController; // inherited from NSObject

	static new(): ABKInAppMessageHTMLFullViewController; // inherited from NSObject
}

declare class ABKInAppMessageHTMLJSBridge extends NSObject {

	static alloc(): ABKInAppMessageHTMLJSBridge; // inherited from NSObject

	static isBridgeURL(url: NSURL): boolean;

	static new(): ABKInAppMessageHTMLJSBridge; // inherited from NSObject

	handleBridgeCallWithURLAppboyInstance(url: NSURL, appboy: Appboy): void;
}

declare class ABKInAppMessageHTMLJSInterface extends NSObject {

	static alloc(): ABKInAppMessageHTMLJSInterface; // inherited from NSObject

	static getJSInterface(): string;

	static new(): ABKInAppMessageHTMLJSInterface; // inherited from NSObject
}

declare class ABKInAppMessageHTMLViewController extends ABKInAppMessageViewController implements WKNavigationDelegate, WKUIDelegate {

	static alloc(): ABKInAppMessageHTMLViewController; // inherited from NSObject

	static new(): ABKInAppMessageHTMLViewController; // inherited from NSObject

	bottomConstraint: NSLayoutConstraint;

	topConstraint: NSLayoutConstraint;

	webView: WKWebView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewCommitPreviewingViewController(webView: WKWebView, previewingViewController: UIViewController): void;

	webViewContextMenuConfigurationForElementCompletionHandler(webView: WKWebView, elementInfo: WKContextMenuElementInfo, completionHandler: (p1: UIContextMenuConfiguration) => void): void;

	webViewContextMenuDidEndForElement(webView: WKWebView, elementInfo: WKContextMenuElementInfo): void;

	webViewContextMenuForElementWillCommitWithAnimator(webView: WKWebView, elementInfo: WKContextMenuElementInfo, animator: UIContextMenuInteractionCommitAnimating): void;

	webViewContextMenuWillPresentForElement(webView: WKWebView, elementInfo: WKContextMenuElementInfo): void;

	webViewCreateWebViewWithConfigurationForNavigationActionWindowFeatures(webView: WKWebView, configuration: WKWebViewConfiguration, navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures): WKWebView;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidClose(webView: WKWebView): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewPreviewingViewControllerForElementDefaultActions(webView: WKWebView, elementInfo: WKPreviewElementInfo, previewActions: NSArray<WKPreviewActionItem> | WKPreviewActionItem[]): UIViewController;

	webViewRunJavaScriptAlertPanelWithMessageInitiatedByFrameCompletionHandler(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: () => void): void;

	webViewRunJavaScriptConfirmPanelWithMessageInitiatedByFrameCompletionHandler(webView: WKWebView, message: string, frame: WKFrameInfo, completionHandler: (p1: boolean) => void): void;

	webViewRunJavaScriptTextInputPanelWithPromptDefaultTextInitiatedByFrameCompletionHandler(webView: WKWebView, prompt: string, defaultText: string, frame: WKFrameInfo, completionHandler: (p1: string) => void): void;

	webViewShouldPreviewElement(webView: WKWebView, elementInfo: WKPreviewElementInfo): boolean;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

declare var ABKInAppMessageHideStatusBarKey: string;

declare class ABKInAppMessageImmersive extends ABKInAppMessage {

	static alloc(): ABKInAppMessageImmersive; // inherited from NSObject

	static new(): ABKInAppMessageImmersive; // inherited from NSObject

	readonly buttons: NSArray<ABKInAppMessageButton>;

	closeButtonColor: UIColor;

	frameColor: UIColor;

	header: string;

	headerTextAlignment: NSTextAlignment;

	headerTextColor: UIColor;

	imageStyle: ABKInAppMessageImmersiveImageStyle;

	logInAppMessageClickedWithButtonID(buttonId: number): void;

	setInAppMessageButtons(buttonArray: NSArray<any> | any[]): void;
}

declare const enum ABKInAppMessageImmersiveImageStyle {

	Graphic = 0,

	TopImage = 1
}

declare class ABKInAppMessageImmersiveViewController extends ABKInAppMessageViewController {

	static alloc(): ABKInAppMessageImmersiveViewController; // inherited from NSObject

	static new(): ABKInAppMessageImmersiveViewController; // inherited from NSObject

	graphicImageView: UIImageView;

	headerBodySpaceConstraint: NSLayoutConstraint;

	inAppMessageHeaderLabel: UILabel;

	leftInAppMessageButton: ABKInAppMessageUIButton;

	rightInAppMessageButton: ABKInAppMessageUIButton;

	textsView: UIScrollView;

	buttonClicked(button: ABKInAppMessageUIButton): void;

	changeCloseButtonColor(): void;

	dismissInAppMessage(sender: any): void;

	setupLayoutForGraphic(): void;

	setupLayoutForTopImage(): void;
}

declare class ABKInAppMessageModal extends ABKInAppMessageImmersive {

	static alloc(): ABKInAppMessageModal; // inherited from NSObject

	static new(): ABKInAppMessageModal; // inherited from NSObject
}

declare class ABKInAppMessageModalViewController extends ABKInAppMessageImmersiveViewController {

	static alloc(): ABKInAppMessageModalViewController; // inherited from NSObject

	static new(): ABKInAppMessageModalViewController; // inherited from NSObject

	graphicImageContainerView: UIView;

	iconImageContainerView: UIView;

	iconImageHeightConstraint: NSLayoutConstraint;

	textsViewWidthConstraint: NSLayoutConstraint;
}

declare const enum ABKInAppMessageOrientation {

	Any = 0,

	Portrait = 1,

	Landscape = 2
}

declare class ABKInAppMessageSlideup extends ABKInAppMessage {

	static alloc(): ABKInAppMessageSlideup; // inherited from NSObject

	static new(): ABKInAppMessageSlideup; // inherited from NSObject

	chevronColor: UIColor;

	hideChevron: boolean;

	inAppMessageSlideupAnchor: ABKInAppMessageSlideupAnchor;
}

declare const enum ABKInAppMessageSlideupAnchor {

	FromTop = 0,

	FromBottom = 1
}

declare class ABKInAppMessageSlideupViewController extends ABKInAppMessageViewController {

	static alloc(): ABKInAppMessageSlideupViewController; // inherited from NSObject

	static new(): ABKInAppMessageSlideupViewController; // inherited from NSObject

	arrowImage: UIImageView;

	slideConstraint: NSLayoutConstraint;
}

declare class ABKInAppMessageUIButton extends UIButton {

	static alloc(): ABKInAppMessageUIButton; // inherited from NSObject

	static appearance(): ABKInAppMessageUIButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKInAppMessageUIButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKInAppMessageUIButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKInAppMessageUIButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKInAppMessageUIButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKInAppMessageUIButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): ABKInAppMessageUIButton; // inherited from UIButton

	static new(): ABKInAppMessageUIButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): ABKInAppMessageUIButton; // inherited from UIButton

	inAppButtonModel: ABKInAppMessageButton;
}

declare class ABKInAppMessageUIController extends NSObject implements ABKInAppMessageUIControlling {

	static alloc(): ABKInAppMessageUIController; // inherited from NSObject

	static new(): ABKInAppMessageUIController; // inherited from NSObject

	inAppMessageWindowController: ABKInAppMessageWindowController;

	keyboardVisible: boolean;

	preferredOrientation: UIInterfaceOrientation;

	supportedOrientationMask: UIInterfaceOrientationMask;

	uiDelegate: ABKInAppMessageUIDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getCurrentDisplayChoiceForControlInAppMessage(controlInAppMessage: ABKInAppMessage): ABKInAppMessageDisplayChoice;

	getCurrentDisplayChoiceForInAppMessage(inAppMessage: ABKInAppMessage): ABKInAppMessageDisplayChoice;

	hideCurrentInAppMessage(animated: boolean): void;

	inAppMessageCurrentlyVisible(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setInAppMessageUIDelegate(uiDelegate: any): void;

	showInAppMessage(inAppMessage: ABKInAppMessage): void;
}

interface ABKInAppMessageUIControlling extends NSObjectProtocol {

	getCurrentDisplayChoiceForControlInAppMessage?(controlInAppMessage: ABKInAppMessage): ABKInAppMessageDisplayChoice;

	getCurrentDisplayChoiceForInAppMessage?(inAppMessage: ABKInAppMessage): ABKInAppMessageDisplayChoice;

	hideCurrentInAppMessage?(animated: boolean): void;

	inAppMessageCurrentlyVisible?(): boolean;

	setInAppMessageUIDelegate?(uiDelegate: any): void;

	showInAppMessage?(inAppMessage: ABKInAppMessage): void;
}
declare var ABKInAppMessageUIControlling: {

	prototype: ABKInAppMessageUIControlling;
};

interface ABKInAppMessageUIDelegate extends NSObjectProtocol {

	beforeInAppMessageDisplayedWithKeyboardIsUp?(inAppMessage: ABKInAppMessage, keyboardIsUp: boolean): ABKInAppMessageDisplayChoice;

	inAppMessageViewControllerWithInAppMessage?(inAppMessage: ABKInAppMessage): ABKInAppMessageViewController;

	onInAppMessageButtonClickedButton?(inAppMessage: ABKInAppMessageImmersive, button: ABKInAppMessageButton): boolean;

	onInAppMessageClicked?(inAppMessage: ABKInAppMessage): boolean;

	onInAppMessageDismissed?(inAppMessage: ABKInAppMessage): void;

	onInAppMessageHTMLButtonClickedClickedURLButtonID?(inAppMessage: ABKInAppMessageHTML, clickedURL: NSURL, buttonId: string): boolean;

	setCustomWKWebViewConfiguration?(): WKWebViewConfiguration;
}
declare var ABKInAppMessageUIDelegate: {

	prototype: ABKInAppMessageUIDelegate;
};

declare class ABKInAppMessageView extends UIView {

	static alloc(): ABKInAppMessageView; // inherited from NSObject

	static appearance(): ABKInAppMessageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKInAppMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKInAppMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKInAppMessageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKInAppMessageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKInAppMessageView; // inherited from UIAppearance

	static new(): ABKInAppMessageView; // inherited from NSObject
}

declare class ABKInAppMessageViewController extends UIViewController {

	static alloc(): ABKInAppMessageViewController; // inherited from NSObject

	static new(): ABKInAppMessageViewController; // inherited from NSObject

	iconImageView: UIImageView;

	iconLabelView: UILabel;

	inAppMessage: ABKInAppMessage;

	inAppMessageMessageLabel: UILabel;

	isiPad: boolean;

	constructor(o: { inAppMessage: ABKInAppMessage; });

	applyIconToLabelView(iconLabelView: UILabel): boolean;

	applyImageToImageView(iconImageView: UIImageView): boolean;

	beforeMoveInAppMessageViewOffScreen(): void;

	beforeMoveInAppMessageViewOnScreen(): void;

	hideInAppMessage(animated: boolean): void;

	initWithInAppMessage(inAppMessage: ABKInAppMessage): this;

	moveInAppMessageViewOffScreen(): void;

	moveInAppMessageViewOnScreen(): void;
}

declare class ABKInAppMessageWindow extends UIWindow {

	static alloc(): ABKInAppMessageWindow; // inherited from NSObject

	static appearance(): ABKInAppMessageWindow; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKInAppMessageWindow; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKInAppMessageWindow; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKInAppMessageWindow; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKInAppMessageWindow; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKInAppMessageWindow; // inherited from UIAppearance

	static new(): ABKInAppMessageWindow; // inherited from NSObject

	catchClicksOutsideInAppMessage: boolean;
}

declare class ABKInAppMessageWindowController extends UIViewController implements UIGestureRecognizerDelegate {

	static alloc(): ABKInAppMessageWindowController; // inherited from NSObject

	static new(): ABKInAppMessageWindowController; // inherited from NSObject

	appWindow: UIWindow;

	clickedButtonId: number;

	clickedHTMLButtonId: string;

	inAppMessage: ABKInAppMessage;

	inAppMessageIsTapped: boolean;

	inAppMessagePreviousPanPosition: CGPoint;

	inAppMessageUIDelegate: ABKInAppMessageUIDelegate;

	inAppMessageViewController: ABKInAppMessageViewController;

	inAppMessageWindow: ABKInAppMessageWindow;

	isInRotation: boolean;

	preferredOrientation: UIInterfaceOrientation;

	slideAwayTimer: NSTimer;

	slideupConstraintMaxValue: number;

	supportedOrientationMask: UIInterfaceOrientationMask;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { inAppMessage: ABKInAppMessage; inAppMessageViewController: ABKInAppMessageViewController; inAppMessageDelegate: ABKInAppMessageUIDelegate; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	displayInAppMessageViewWithAnimation(withAnimation: boolean): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	hideInAppMessageViewWithAnimation(withAnimation: boolean): void;

	hideInAppMessageViewWithAnimationCompletionHandler(withAnimation: boolean, completionHandler: () => void): void;

	inAppMessageClickedWithActionTypeURLOpenURLInWebView(actionType: ABKInAppMessageClickActionType, url: NSURL, openUrlInWebView: boolean): void;

	initWithInAppMessageInAppMessageViewControllerInAppMessageDelegate(inAppMessage: ABKInAppMessage, inAppMessageViewController: ABKInAppMessageViewController, delegate: ABKInAppMessageUIDelegate): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	keyboardWasShown(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ABKLocationManager extends NSObject implements CLLocationManagerDelegate {

	static alloc(): ABKLocationManager; // inherited from NSObject

	static new(): ABKLocationManager; // inherited from NSObject

	readonly disableAutomaticGeofenceRequests: boolean;

	readonly enableGeofences: boolean;

	readonly enableLocationTracking: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailRangingBeaconsForConstraintError(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], region: CLBeaconRegion): void;

	locationManagerDidRangeBeaconsSatisfyingConstraint(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], beaconConstraint: CLBeaconIdentityConstraint): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation> | CLLocation[]): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	logSingleLocation(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ABKLocationManagerProvider extends NSObject {

	static alloc(): ABKLocationManagerProvider; // inherited from NSObject

	static locationServicesEnabled(): boolean;

	static new(): ABKLocationManagerProvider; // inherited from NSObject
}

declare var ABKMinimumTriggerTimeIntervalKey: string;

declare class ABKModalWebViewController extends UINavigationController implements WKNavigationDelegate {

	static alloc(): ABKModalWebViewController; // inherited from NSObject

	static new(): ABKModalWebViewController; // inherited from NSObject

	progressBar: UIProgressView;

	url: NSURL;

	webView: WKWebView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

declare class ABKNFBannerCardCell extends ABKNFBaseCardCell {

	static alloc(): ABKNFBannerCardCell; // inherited from NSObject

	static appearance(): ABKNFBannerCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKNFBannerCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKNFBannerCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFBannerCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKNFBannerCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFBannerCardCell; // inherited from UIAppearance

	static new(): ABKNFBannerCardCell; // inherited from NSObject

	bannerImageView: SDAnimatedImageView;

	imageRatioConstraint: NSLayoutConstraint;
}

declare class ABKNFBaseCardCell extends UITableViewCell {

	static alloc(): ABKNFBaseCardCell; // inherited from NSObject

	static appearance(): ABKNFBaseCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKNFBaseCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKNFBaseCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFBaseCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKNFBaseCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFBaseCardCell; // inherited from UIAppearance

	static dequeueCellFromTableViewForIndexPathForCard(tableView: UITableView, indexPath: NSIndexPath, card: ABKCard): ABKNFBaseCardCell;

	static new(): ABKNFBaseCardCell; // inherited from NSObject

	cardSidePadding: number;

	cardSpacing: number;

	delegate: ABKBaseNewsFeedCellDelegate;

	hideUnreadIndicator: boolean;

	rootView: UIView;

	rootViewBottomConstraint: NSLayoutConstraint;

	rootViewLeadingConstraint: NSLayoutConstraint;

	rootViewTopConstraint: NSLayoutConstraint;

	rootViewTrailingConstraint: NSLayoutConstraint;

	unreadIndicatorView: UIImageView;

	applyCard(card: ABKCard): void;

	getPlaceHolderImage(): UIImage;
}

declare class ABKNFCaptionedMessageCardCell extends ABKNFBaseCardCell {

	static alloc(): ABKNFCaptionedMessageCardCell; // inherited from NSObject

	static appearance(): ABKNFCaptionedMessageCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKNFCaptionedMessageCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKNFCaptionedMessageCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFCaptionedMessageCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKNFCaptionedMessageCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFCaptionedMessageCardCell; // inherited from UIAppearance

	static new(): ABKNFCaptionedMessageCardCell; // inherited from NSObject

	TitleBackgroundView: UIView;

	bodyAndLinkConstraint: NSLayoutConstraint;

	captionedImageView: SDAnimatedImageView;

	descriptionLabel: UILabel;

	imageHeightContraint: NSLayoutConstraint;

	linkLabel: UILabel;

	titleLabel: UILabel;

	applyCard(captionedImageCard: ABKCaptionedImageCard): void;

	hideLinkLabel(hide: boolean): void;
}

declare class ABKNFClassicCardCell extends ABKNFBaseCardCell {

	static alloc(): ABKNFClassicCardCell; // inherited from NSObject

	static appearance(): ABKNFClassicCardCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ABKNFClassicCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ABKNFClassicCardCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFClassicCardCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ABKNFClassicCardCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ABKNFClassicCardCell; // inherited from UIAppearance

	static new(): ABKNFClassicCardCell; // inherited from NSObject

	classicImageView: SDAnimatedImageView;

	descriptionLabel: UILabel;

	linkLabel: UILabel;

	titleLabel: UILabel;

	applyCard(classicCard: ABKClassicCard): void;
}

declare class ABKNewsFeedTableViewController extends UITableViewController implements ABKBaseNewsFeedCellDelegate {

	static alloc(): ABKNewsFeedTableViewController; // inherited from NSObject

	static getNavigationFeedViewController(): ABKNewsFeedTableViewController;

	static new(): ABKNewsFeedTableViewController; // inherited from NSObject

	cacheTimeout: number;

	cardImpressions: NSMutableSet<string>;

	cards: NSArray<ABKCard>;

	categories: ABKCardCategory;

	constraintWarningValue: any;

	disableUnreadIndicator: boolean;

	emptyFeedLabel: UILabel;

	emptyFeedView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleCardClick(card: ABKCard): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	localizedAppboyFeedString(key: string): string;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refreshTableViewCellHeights(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ABKNewsFeedViewController extends UINavigationController {

	static alloc(): ABKNewsFeedViewController; // inherited from NSObject

	static new(): ABKNewsFeedViewController; // inherited from NSObject

	newsFeed: ABKNewsFeedTableViewController;
}

declare class ABKNoConnectionLocalization extends NSObject {

	static alloc(): ABKNoConnectionLocalization; // inherited from NSObject

	static getNoConnectionLocalizedString(): string;

	static new(): ABKNoConnectionLocalization; // inherited from NSObject
}

declare const enum ABKNotificationSubscriptionType {

	OptedIn = 0,

	Subscribed = 1,

	Unsubscribed = 2
}

declare var ABKPushStoryAppGroupKey: string;

declare class ABKPushUtils extends NSObject {

	static alloc(): ABKPushUtils; // inherited from NSObject

	static getAppboyUIUserNotificationCategorySet(): NSSet<UIUserNotificationCategory>;

	static getAppboyUNNotificationCategorySet(): NSSet<UNNotificationCategory>;

	static isAppboyInternalRemoteNotification(userInfo: NSDictionary<any, any>): boolean;

	static isAppboyRemoteNotification(userInfo: NSDictionary<any, any>): boolean;

	static isAppboyUserNotification(response: UNNotificationResponse): boolean;

	static isGeofencesSyncRemoteNotification(userInfo: NSDictionary<any, any>): boolean;

	static isGeofencesSyncUserNotification(response: UNNotificationResponse): boolean;

	static isPushStoryRemoteNotification(userInfo: NSDictionary<any, any>): boolean;

	static isUninstallTrackingRemoteNotification(userInfo: NSDictionary<any, any>): boolean;

	static isUninstallTrackingUserNotification(response: UNNotificationResponse): boolean;

	static new(): ABKPushUtils; // inherited from NSObject

	static notificationContainsContentCard(userInfo: NSDictionary<any, any>): boolean;

	static shouldFetchTestTriggersFlagContainedInPayload(userInfo: NSDictionary<any, any>): boolean;
}

declare const enum ABKRequestProcessingPolicy {

	AutomaticRequestProcessing = 0,

	ManualRequestProcessing = 1,

	AutomaticRequestProcessingExceptForDataFlush = 1
}

declare var ABKRequestProcessingPolicyOptionKey: string;

declare const enum ABKSDKFlavor {

	UNITY = 1,

	REACT = 2,

	CORDOVA = 3,

	XAMARIN = 4,

	FLUTTER = 5,

	SEGMENT = 6,

	MPARTICLE = 7,

	TEALIUM = 8
}

declare var ABKSDKFlavorKey: string;

declare class ABKSDWebImageProxy extends NSObject {

	static alloc(): ABKSDWebImageProxy; // inherited from NSObject

	static cacheKeyForURL(url: NSURL): string;

	static clearSDWebImageCache(): void;

	static diskImageExistsForURLCompleted(url: NSURL, completion: (p1: boolean) => void): void;

	static imageFromCacheForKey(key: string): UIImage;

	static isSupportedSDWebImageVersion(): boolean;

	static loadImageWithURLOptionsCompleted(url: NSURL, options: number, completion: (p1: UIImage, p2: NSData, p3: NSError, p4: number, p5: boolean, p6: NSURL) => void): void;

	static new(): ABKSDWebImageProxy; // inherited from NSObject

	static prefetchURLs(imageURLs: NSArray<any> | any[]): void;

	static removeSDWebImageForKey(key: string): void;

	static setImageForViewShowActivityIndicatorWithURLImagePlaceHolderCompleted(imageView: UIImageView, showActivityIndicator: boolean, imageURL: NSURL, placeHolder: UIImage, completion: (p1: UIImage, p2: NSError, p3: number, p4: NSURL) => void): void;
}

declare var ABKSessionTimeoutKey: string;

declare class ABKTextAnnouncementCard extends ABKCard implements NSCoding {

	static alloc(): ABKTextAnnouncementCard; // inherited from NSObject

	static new(): ABKTextAnnouncementCard; // inherited from NSObject

	cardDescription: string;

	domain: string;

	title: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ABKTwitterUser extends NSObject {

	static alloc(): ABKTwitterUser; // inherited from NSObject

	static new(): ABKTwitterUser; // inherited from NSObject

	followersCount: number;

	friendsCount: number;

	profileImageUrl: string;

	screenName: string;

	statusesCount: number;

	twitterID: number;

	twitterName: string;

	userDescription: string;
}

declare class ABKUIURLUtils extends NSObject {

	static URLDelegateHandlesURLFromChannelWithExtras(urlDelegate: ABKURLDelegate, url: NSURL, channel: ABKChannel, extras: NSDictionary<any, any>): boolean;

	static URLShouldOpenInWebView(url: NSURL, openUrlInWebView: boolean): boolean;

	static alloc(): ABKUIURLUtils; // inherited from NSObject

	static displayModalWebViewWithURLTopmostViewController(url: NSURL, topmostViewController: UIViewController): void;

	static getEncodedURIFromString(uriString: string): NSURL;

	static new(): ABKUIURLUtils; // inherited from NSObject

	static openURLWithSystem(url: NSURL): void;

	static topmostViewControllerWithRootViewController(viewController: UIViewController): UIViewController;
}

declare class ABKUIUtils extends NSObject {

	static alloc(): ABKUIUtils; // inherited from NSObject

	static getImageWithNameTypeInAppboyBundle(name: string, type: string, appboyBundle: NSBundle): UIImage;

	static getInterfaceOrientation(): UIInterfaceOrientation;

	static getLocalizedStringInAppboyBundleTable(key: string, appboyBundle: NSBundle, table: string): string;

	static getModalFeedViewControllerClass(): typeof NSObject;

	static getSDWebImageProxyClass(): typeof NSObject;

	static getStatusBarSize(): CGSize;

	static isNotchedPhone(): boolean;

	static new(): ABKUIUtils; // inherited from NSObject

	static objectIsValidAndNotEmpty(object: any): boolean;
}

interface ABKURLDelegate extends NSObjectProtocol {

	handleAppboyURLFromChannelWithExtras(url: NSURL, channel: ABKChannel, extras: NSDictionary<any, any>): boolean;
}
declare var ABKURLDelegate: {

	prototype: ABKURLDelegate;
};

declare var ABKURLDelegateKey: string;

declare class ABKUser extends NSObject {

	static alloc(): ABKUser; // inherited from NSObject

	static new(): ABKUser; // inherited from NSObject

	attributionData: ABKAttributionData;

	avatarImageURL: string;

	country: string;

	dateOfBirth: Date;

	email: string;

	facebookUser: ABKFacebookUser;

	firstName: string;

	homeCity: string;

	language: string;

	lastName: string;

	phone: string;

	twitterUser: ABKTwitterUser;

	readonly userID: string;

	addAliasWithLabel(alias: string, label: string): boolean;

	addLocationCustomAttributeWithKeyLatitudeLongitude(key: string, latitude: number, longitude: number): boolean;

	addToCustomAttributeArrayWithKeyValue(key: string, value: string): boolean;

	incrementCustomUserAttribute(key: string): boolean;

	incrementCustomUserAttributeBy(key: string, incrementValue: number): boolean;

	removeFromCustomAttributeArrayWithKeyValue(key: string, value: string): boolean;

	removeLocationCustomAttributeWithKey(key: string): boolean;

	setCustomAttributeArrayWithKeyArray(key: string, valueArray: NSArray<any> | any[]): boolean;

	setCustomAttributeWithKeyAndBOOLValue(key: string, value: boolean): boolean;

	setCustomAttributeWithKeyAndDateValue(key: string, value: Date): boolean;

	setCustomAttributeWithKeyAndDoubleValue(key: string, value: number): boolean;

	setCustomAttributeWithKeyAndIntegerValue(key: string, value: number): boolean;

	setCustomAttributeWithKeyAndStringValue(key: string, value: string): boolean;

	setEmailNotificationSubscriptionType(emailNotificationSubscriptionType: ABKNotificationSubscriptionType): boolean;

	setGender(gender: ABKUserGenderType): boolean;

	setLastKnownLocationWithLatitudeLongitudeHorizontalAccuracy(latitude: number, longitude: number, horizontalAccuracy: number): boolean;

	setLastKnownLocationWithLatitudeLongitudeHorizontalAccuracyAltitudeVerticalAccuracy(latitude: number, longitude: number, horizontalAccuracy: number, altitude: number, verticalAccuracy: number): boolean;

	setPushNotificationSubscriptionType(pushNotificationSubscriptionType: ABKNotificationSubscriptionType): boolean;

	unsetCustomAttributeWithKey(key: string): boolean;
}

declare const enum ABKUserGenderType {

	Male = 0,

	Female = 1,

	Other = 2,

	Unknown = 3,

	NotApplicable = 4,

	PreferNotToSay = 5
}

declare var AlphaValueOfDefaultIconColorAndButtonBgColor: number;

declare class Appboy extends NSObject {

	static alloc(): Appboy; // inherited from NSObject

	static disableSDK(): void;

	static new(): Appboy; // inherited from NSObject

	static requestEnableSDKOnNextAppRun(): void;

	static sharedInstance(): Appboy;

	static startWithApiKeyInApplicationWithLaunchOptions(apiKey: string, application: UIApplication, launchOptions: NSDictionary<any, any>): void;

	static startWithApiKeyInApplicationWithLaunchOptionsWithAppboyOptions(apiKey: string, application: UIApplication, launchOptions: NSDictionary<any, any>, appboyOptions: NSDictionary<any, any>): void;

	static unsafeInstance(): Appboy;

	static wipeDataAndDisableForAppRun(): void;

	appboyUrlDelegate: ABKURLDelegate;

	readonly contentCardsController: ABKContentCardsController;

	readonly feedController: ABKFeedController;

	idfaDelegate: ABKIDFADelegate;

	readonly inAppMessageController: ABKInAppMessageController;

	readonly locationManager: ABKLocationManager;

	requestProcessingPolicy: ABKRequestProcessingPolicy;

	sdkFlavor: ABKSDKFlavor;

	readonly user: ABKUser;

	changeUser(userId: string): void;

	flushDataAndProcessRequestQueue(): void;

	getActionWithIdentifierForRemoteNotificationCompletionHandler(identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	getDeviceId(): string;

	logContentCardsDisplayed(): void;

	logCustomEvent(eventName: string): void;

	logCustomEventWithProperties(eventName: string, properties: NSDictionary<any, any>): void;

	logFeedDisplayed(): void;

	logPurchaseInCurrencyAtPrice(productIdentifier: string, currencyCode: string, price: NSDecimalNumber): void;

	logPurchaseInCurrencyAtPriceWithProperties(productIdentifier: string, currencyCode: string, price: NSDecimalNumber, properties: NSDictionary<any, any>): void;

	logPurchaseInCurrencyAtPriceWithQuantity(productIdentifier: string, currencyCode: string, price: NSDecimalNumber, quantity: number): void;

	logPurchaseInCurrencyAtPriceWithQuantityAndProperties(productIdentifier: string, currencyCode: string, price: NSDecimalNumber, quantity: number, properties: NSDictionary<any, any>): void;

	pushAuthorizationFromUserNotificationCenter(pushAuthGranted: boolean): void;

	pushNotificationWasSentFromAppboy(options: NSDictionary<any, any>): boolean;

	registerApplicationDidReceiveRemoteNotification(application: UIApplication, notification: NSDictionary<any, any>): void;

	registerApplicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, notification: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	registerDeviceToken(deviceToken: NSData): void;

	requestContentCardsRefresh(): void;

	requestFeedRefresh(): void;

	requestGeofencesWithLongitudeLatitude(longitude: number, latitude: number): void;

	shutdownServerCommunication(): void;

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	userNotificationWasSentFromAppboy(response: UNNotificationResponse): boolean;
}

declare var Appboy_iOS_SDKVersionNumber: number;

declare var Appboy_iOS_SDKVersionString: interop.Reference<number>;

declare var BlueValueOfDefaultIconColorAndButtonBgColor: number;

declare var DefaultNumberOfFriends: number;

declare var GreenValueOfDefaultIconColorAndButtonBgColor: number;

declare var InAppMessageAnimationDuration: number;

declare var InAppMessageSelectedOpacity: number;

declare var InAppMessageShadowBlurRadius: number;

declare var InAppMessageShadowOpacity: number;

declare var RedValueOfDefaultIconColorAndButtonBgColor: number;
