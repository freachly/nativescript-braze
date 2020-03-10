/// <reference path="android-declarations.d.ts"/>
// TODO: Regenerate the typings

declare module com {
	export module appboy {
		export class AppboyAdmReceiver {
			public static class: java.lang.Class<com.appboy.AppboyAdmReceiver>;
			public static CAMPAIGN_ID_KEY: string;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
		export module AppboyAdmReceiver {
			export class HandleAppboyAdmMessageTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
				public static class: java.lang.Class<com.appboy.AppboyAdmReceiver.HandleAppboyAdmMessageTask>;
				public constructor(param0: com.appboy.AppboyAdmReceiver, param1: globalAndroid.content.Context, param2: globalAndroid.content.Intent);
				public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
			}
		}
	}
}

declare module com {
	export module appboy {
		export class AppboyFcmReceiver {
			public static class: java.lang.Class<com.appboy.AppboyFcmReceiver>;
			public static FIREBASE_MESSAGING_SERVICE_ROUTING_ACTION: string;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
		export module AppboyFcmReceiver {
			export class HandleAppboyFcmMessageTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
				public static class: java.lang.Class<com.appboy.AppboyFcmReceiver.HandleAppboyFcmMessageTask>;
				public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
				public constructor(param0: com.appboy.AppboyFcmReceiver, param1: globalAndroid.content.Context, param2: globalAndroid.content.Intent);
			}
		}
	}
}

declare module com {
	export module appboy {
		export class AppboyFirebaseMessagingService {
			public static class: java.lang.Class<com.appboy.AppboyFirebaseMessagingService>;
			public static handleBrazeRemoteMessage(param0: globalAndroid.content.Context, param1: com.google.firebase.messaging.RemoteMessage): boolean;
			public constructor();
			public static isBrazePushNotification(param0: com.google.firebase.messaging.RemoteMessage): boolean;
			public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
		}
	}
}

declare module com {
	export module appboy {
		export class AppboyLifecycleCallbackListener {
			public static class: java.lang.Class<com.appboy.AppboyLifecycleCallbackListener>;
			public onActivityResumed(param0: globalAndroid.app.Activity): void;
			public setInAppMessagingRegistrationBlacklist(param0: java.util.Set<java.lang.Class>): void;
			public setSessionHandlingBlacklist(param0: java.util.Set<java.lang.Class>): void;
			public onActivityPaused(param0: globalAndroid.app.Activity): void;
			public constructor();
			public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
			public constructor(param0: java.util.Set<java.lang.Class>, param1: java.util.Set<java.lang.Class>);
			public constructor(param0: java.util.Set<java.lang.Class>);
			public onActivityStopped(param0: globalAndroid.app.Activity): void;
			public constructor(param0: boolean, param1: boolean, param2: java.util.Set<java.lang.Class>, param3: java.util.Set<java.lang.Class>);
			public constructor(param0: boolean, param1: boolean);
			public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
			public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
			public onActivityStarted(param0: globalAndroid.app.Activity): void;
		}
	}
}

declare module com {
	export module appboy {
		export class IAppboyNavigator {
			public static class: java.lang.Class<com.appboy.IAppboyNavigator>;
			/**
			 * Constructs a new instance of the com.appboy.IAppboyNavigator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				gotoNewsFeed(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.NewsfeedAction): void;
				gotoUri(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.UriAction): void;
			});
			public constructor();
			public gotoUri(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.UriAction): void;
			public gotoNewsFeed(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.NewsfeedAction): void;
		}
	}
}

declare module com {
	export module appboy {
		export module push {
			export class AppboyNotificationActionUtils {
				public static class: java.lang.Class<com.appboy.push.AppboyNotificationActionUtils>;
				public static getActionFieldAtIndex(param0: number, param1: globalAndroid.os.Bundle, param2: string, param3: string): string;
				public static handleNotificationActionClicked(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public static getActionFieldAtIndex(param0: number, param1: globalAndroid.os.Bundle, param2: string): string;
				public static addNotificationActions(param0: globalAndroid.content.Context, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module appboy {
		export module push {
			export class AppboyNotificationFactory {
				public static class: java.lang.Class<com.appboy.push.AppboyNotificationFactory>;
				public createNotification(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: globalAndroid.content.Context, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle): globalAndroid.app.Notification;
				public static getInstance(): com.appboy.push.AppboyNotificationFactory;
				public constructor();
				public populateNotificationBuilder(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: globalAndroid.content.Context, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle): globalAndroid.support.v4.app.NotificationCompat.Builder;
			}
		}
	}
}

declare module com {
	export module appboy {
		export module push {
			export class AppboyNotificationRoutingActivity {
				public static class: java.lang.Class<com.appboy.push.AppboyNotificationRoutingActivity>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module appboy {
		export module push {
			export class AppboyNotificationStyleFactory {
				public static class: java.lang.Class<com.appboy.push.AppboyNotificationStyleFactory>;
				public static BIG_PICTURE_STYLE_IMAGE_HEIGHT: number;
				public static getBigPictureNotificationStyle(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): globalAndroid.support.v4.app.NotificationCompat.BigPictureStyle;
				public static getBigTextNotificationStyle(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.app.NotificationCompat.BigTextStyle;
				public static getBigNotificationStyle(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: globalAndroid.support.v4.app.NotificationCompat.Builder): globalAndroid.support.v4.app.NotificationCompat.Style;
				public static getStoryStyle(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: globalAndroid.support.v4.app.NotificationCompat.Builder): globalAndroid.support.v4.app.NotificationCompat.DecoratedCustomViewStyle;
				public constructor();
			}
		}
	}
}

declare module com {
	export module appboy {
		export module push {
			export class AppboyNotificationUtils {
				public static class: java.lang.Class<com.appboy.push.AppboyNotificationUtils>;
				public static APPBOY_NOTIFICATION_OPENED_SUFFIX: string;
				public static APPBOY_NOTIFICATION_RECEIVED_SUFFIX: string;
				public static APPBOY_NOTIFICATION_DELETED_SUFFIX: string;
				public static getNotificationPriority(param0: globalAndroid.os.Bundle): number;
				public static getAppboyExtrasWithoutPreprocessing(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
				public static setAccentColorIfPresentAndSupported(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle): void;
				public static getNotificationId(param0: globalAndroid.os.Bundle): number;
				public static setPriorityIfPresentAndSupported(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public static setContentIfPresent(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle): void;
				/** @deprecated */
				public static bundleOptString(param0: globalAndroid.os.Bundle, param1: string, param2: string): string;
				public static setCategoryIfPresentAndSupported(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public static setSoundIfPresentAndSupported(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public constructor();
				public static handleNotificationDeleted(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public static getActiveNotificationFactory(): com.appboy.IAppboyNotificationFactory;
				public static isAppboyPushMessage(param0: globalAndroid.content.Intent): boolean;
				public static logPushDeliveryEvent(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): void;
				public static setNotificationBadgeNumberIfPresent(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public static setTitleIfPresent(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle): void;
				public static setVisibilityIfPresentAndSupported(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public static isInAppMessageTestPush(param0: globalAndroid.content.Intent): boolean;
				public static getOrCreateNotificationChannelId(param0: globalAndroid.content.Context, param1: com.appboy.configuration.AppboyConfigurationProvider, param2: globalAndroid.os.Bundle): string;
				public static handleContentCardsSerializedCardIfPresent(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): void;
				public static sendPushMessageReceivedBroadcast(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): void;
				public static routeUserWithNotificationOpenedIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public static setSmallIcon(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: globalAndroid.support.v4.app.NotificationCompat.Builder): number;
				public static requestGeofenceRefreshIfAppropriate(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): boolean;
				public static isNotificationMessage(param0: globalAndroid.content.Intent): boolean;
				/** @deprecated */
				public static setNotificationChannelIfSupported(param0: globalAndroid.content.Context, param1: com.appboy.configuration.AppboyConfigurationProvider, param2: globalAndroid.support.v4.app.NotificationCompat.Builder, param3: globalAndroid.os.Bundle): void;
				public static isValidNotificationPriority(param0: number): boolean;
				public static parseJSONStringDictionaryIntoBundle(param0: string): globalAndroid.os.Bundle;
				public static handleCancelNotificationAction(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public static handlePushStoryPageClicked(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public static setNotificationDurationAlarm(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: number, param3: number): void;
				public static wakeScreenIfAppropriate(param0: globalAndroid.content.Context, param1: com.appboy.configuration.AppboyConfigurationProvider, param2: globalAndroid.os.Bundle): boolean;
				public static setPublicVersionIfPresentAndSupported(param0: globalAndroid.content.Context, param1: com.appboy.configuration.AppboyConfigurationProvider, param2: globalAndroid.support.v4.app.NotificationCompat.Builder, param3: globalAndroid.os.Bundle): void;
				public static setSetShowWhen(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public static isValidNotificationVisibility(param0: number): boolean;
				public static prefetchBitmapsIfNewlyReceivedStoryPush(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
				public static setContentIntentIfPresent(param0: globalAndroid.content.Context, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle): void;
				public static isUninstallTrackingPush(param0: globalAndroid.os.Bundle): boolean;
				public static setTickerIfPresent(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public static logBaiduNotificationClick(param0: globalAndroid.content.Context, param1: string): void;
				public static cancelNotification(param0: globalAndroid.content.Context, param1: number): void;
				public static setLargeIconIfPresentAndSupported(param0: globalAndroid.content.Context, param1: com.appboy.configuration.AppboyConfigurationProvider, param2: globalAndroid.support.v4.app.NotificationCompat.Builder, param3: globalAndroid.os.Bundle): boolean;
				public static setDeleteIntent(param0: globalAndroid.content.Context, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle): void;
				public static getNotificationReceiverClass(): java.lang.Class<any>;
				public static setSummaryTextIfPresentAndSupported(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: globalAndroid.os.Bundle): void;
				public static setStyleIfSupported(param0: globalAndroid.content.Context, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.Bundle): void;
				public static handleNotificationOpened(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module appboy {
		export module push {
			export module support {
				export class HtmlUtils {
					public static class: java.lang.Class<com.appboy.push.support.HtmlUtils>;
					public constructor();
					public static getHtmlSpannedTextIfEnabled(param0: com.appboy.configuration.AppboyConfigurationProvider, param1: string): string;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export class AppboyContentCardsFragment {
				public static class: java.lang.Class<com.appboy.ui.AppboyContentCardsFragment>;
				public mShowNetworkUnavailableRunnable: java.lang.Runnable;
				public mRecyclerView: globalAndroid.support.v7.widget.RecyclerView;
				public mCardAdapter: com.appboy.ui.contentcards.AppboyCardAdapter;
				public mEmptyContentCardsAdapter: com.appboy.ui.contentcards.AppboyEmptyContentCardsAdapter;
				public mContentCardsSwipeLayout: globalAndroid.support.v4.widget.SwipeRefreshLayout;
				public mContentCardsUpdatedSubscriber: com.appboy.events.IEventSubscriber<com.appboy.events.ContentCardsUpdatedEvent>;
				public mDefaultContentCardUpdateHandler: com.appboy.ui.contentcards.handlers.IContentCardsUpdateHandler;
				public mCustomContentCardUpdateHandler: com.appboy.ui.contentcards.handlers.IContentCardsUpdateHandler;
				public mDefaultContentCardsViewBindingHandler: com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler;
				public mCustomContentCardsViewBindingHandler: com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler;
				public getContentCardUpdateHandler(): com.appboy.ui.contentcards.handlers.IContentCardsUpdateHandler;
				public onResume(): void;
				public onPause(): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public attachSwipeHelperCallback(): void;
				public swapRecyclerViewAdapter(param0: globalAndroid.support.v7.widget.RecyclerView.Adapter): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
				public onViewStateRestored(param0: globalAndroid.os.Bundle): void;
				public setContentCardsViewBindingHandler(param0: com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public initializeRecyclerView(): void;
				public getContentCardsRecyclerView(): globalAndroid.support.v7.widget.RecyclerView;
				public setContentCardUpdateHandler(param0: com.appboy.ui.contentcards.handlers.IContentCardsUpdateHandler): void;
				public getContentCardsViewBindingHandler(): com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler;
				public onRefresh(): void;
			}
			export module AppboyContentCardsFragment {
				export class ContentCardsUpdateRunnable {
					public static class: java.lang.Class<com.appboy.ui.AppboyContentCardsFragment.ContentCardsUpdateRunnable>;
					public run(): void;
				}
				export class NetworkUnavailableRunnable {
					public static class: java.lang.Class<com.appboy.ui.AppboyContentCardsFragment.NetworkUnavailableRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export class AppboyFeedFragment {
				public static class: java.lang.Class<com.appboy.ui.AppboyFeedFragment>;
				public setCategories(param0: java.util.EnumSet<com.appboy.enums.CardCategory>): void;
				public onActivityCreated(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onPause(): void;
				public sortFeedCards(param0: java.util.List<com.appboy.models.cards.Card>): java.util.List<com.appboy.models.cards.Card>;
				public getCategories(): java.util.EnumSet<com.appboy.enums.CardCategory>;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public setSortEnabled(param0: boolean): void;
				public constructor();
				public onAttach(param0: globalAndroid.content.Context): void;
				public setCategory(param0: com.appboy.enums.CardCategory): void;
				public getSortEnabled(): boolean;
				public onDestroyView(): void;
				public onRefresh(): void;
				public onDetach(): void;
			}
			export module AppboyFeedFragment {
				export class FeedGestureListener {
					public static class: java.lang.Class<com.appboy.ui.AppboyFeedFragment.FeedGestureListener>;
					public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					public onDown(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: com.appboy.ui.AppboyFeedFragment);
					public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export class AppboyNavigator extends com.appboy.IAppboyNavigator {
				public static class: java.lang.Class<com.appboy.ui.AppboyNavigator>;
				public static setAppboyNavigator(param0: com.appboy.IAppboyNavigator): void;
				public gotoUri(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.UriAction): void;
				public gotoNewsFeed(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.NewsfeedAction): void;
				public static getAppboyNavigator(): com.appboy.IAppboyNavigator;
				public static executeUriAction(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.UriAction): void;
				public static executeNewsFeedAction(param0: globalAndroid.content.Context, param1: com.appboy.ui.actions.NewsfeedAction): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export class AppboyWebViewActivity extends com.appboy.ui.activities.AppboyBaseActivity {
				public static class: java.lang.Class<com.appboy.ui.AppboyWebViewActivity>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export class AppboyXamarinFormsFeedFragment {
				public static class: java.lang.Class<com.appboy.ui.AppboyXamarinFormsFeedFragment>;
				public setCategories(param0: java.util.EnumSet<com.appboy.enums.CardCategory>): void;
				public onActivityCreated(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onPause(): void;
				public getCategories(): java.util.EnumSet<com.appboy.enums.CardCategory>;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
				public onAttach(param0: globalAndroid.content.Context): void;
				public setCategory(param0: com.appboy.enums.CardCategory): void;
				public onDestroyView(): void;
				public onRefresh(): void;
				public onDetach(): void;
			}
			export module AppboyXamarinFormsFeedFragment {
				export class FeedGestureListener {
					public static class: java.lang.Class<com.appboy.ui.AppboyXamarinFormsFeedFragment.FeedGestureListener>;
					public constructor(param0: com.appboy.ui.AppboyXamarinFormsFeedFragment);
					public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					public onDown(param0: globalAndroid.view.MotionEvent): boolean;
					public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export class BuildConfig {
				public static class: java.lang.Class<com.appboy.ui.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module actions {
				export class ActionFactory {
					public static class: java.lang.Class<com.appboy.ui.actions.ActionFactory>;
					public static createUriActionFromUri(param0: globalAndroid.net.Uri, param1: globalAndroid.os.Bundle, param2: boolean, param3: com.appboy.enums.Channel): com.appboy.ui.actions.UriAction;
					public constructor();
					public static createUriActionFromUrlString(param0: string, param1: globalAndroid.os.Bundle, param2: boolean, param3: com.appboy.enums.Channel): com.appboy.ui.actions.UriAction;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module actions {
				export class IAction {
					public static class: java.lang.Class<com.appboy.ui.actions.IAction>;
					/**
					 * Constructs a new instance of the com.appboy.ui.actions.IAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						execute(param0: globalAndroid.content.Context): void;
						getChannel(): com.appboy.enums.Channel;
					});
					public constructor();
					public getChannel(): com.appboy.enums.Channel;
					public execute(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module actions {
				export class NewsfeedAction extends com.appboy.ui.actions.IAction {
					public static class: java.lang.Class<com.appboy.ui.actions.NewsfeedAction>;
					public getChannel(): com.appboy.enums.Channel;
					public getExtras(): globalAndroid.os.Bundle;
					public constructor(param0: globalAndroid.os.Bundle, param1: com.appboy.enums.Channel);
					public execute(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module actions {
				export class UriAction extends com.appboy.ui.actions.IAction {
					public static class: java.lang.Class<com.appboy.ui.actions.UriAction>;
					public getChannel(): com.appboy.enums.Channel;
					public getUseWebView(): boolean;
					public setUseWebView(param0: boolean): void;
					public getExtras(): globalAndroid.os.Bundle;
					public getUri(): globalAndroid.net.Uri;
					public setUri(param0: globalAndroid.net.Uri): void;
					public execute(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module activities {
				export class AppboyBaseActivity {
					public static class: java.lang.Class<com.appboy.ui.activities.AppboyBaseActivity>;
					public onStart(): void;
					public constructor();
					public onPause(): void;
					public onStop(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module activities {
				export class AppboyBaseFragmentActivity {
					public static class: java.lang.Class<com.appboy.ui.activities.AppboyBaseFragmentActivity>;
					public onStart(): void;
					public constructor();
					public onPause(): void;
					public onStop(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module activities {
				export class AppboyContentCardsActivity extends com.appboy.ui.activities.AppboyBaseFragmentActivity {
					public static class: java.lang.Class<com.appboy.ui.activities.AppboyContentCardsActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module activities {
				export class AppboyFeedActivity extends com.appboy.ui.activities.AppboyBaseFragmentActivity {
					public static class: java.lang.Class<com.appboy.ui.activities.AppboyFeedActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module adapters {
				export class AppboyListAdapter extends globalAndroid.widget.ArrayAdapter<com.appboy.models.cards.Card> {
					public static class: java.lang.Class<com.appboy.ui.adapters.AppboyListAdapter>;
					public add(param0: com.appboy.models.cards.Card): void;
					public getViewTypeCount(): number;
					public resetCardImpressionTracker(): void;
					public getItemViewType(param0: number): number;
					public replaceFeed(param0: java.util.List<com.appboy.models.cards.Card>): void;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public batchSetCardsToRead(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: java.util.List<com.appboy.models.cards.Card>);
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export class AppboyCardAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.appboy.ui.contentcards.view.ContentCardViewHolder> implements com.appboy.ui.contentcards.recycler.ItemTouchHelperAdapter  {
					public static class: java.lang.Class<com.appboy.ui.contentcards.AppboyCardAdapter>;
					public replaceCards(param0: java.util.List<com.appboy.models.cards.Card>): void;
					public onViewDetachedFromWindow(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder): void;
					public onBindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: number): void;
					public isItemDismissable(param0: number): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.support.v7.widget.LinearLayoutManager, param2: java.util.List<com.appboy.models.cards.Card>, param3: com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler);
					public markOnScreenCardsAsRead(): void;
					public setImpressedCardIds(param0: java.util.List<string>): void;
					public onViewAttachedToWindow(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder): void;
					public isControlCardAtPosition(param0: number): boolean;
					public getImpressedCardIds(): java.util.List<string>;
					public getItemCount(): number;
					public getItemViewType(param0: number): number;
					public onItemDismiss(param0: number): void;
					public getItemId(param0: number): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.appboy.ui.contentcards.view.ContentCardViewHolder;
				}
				export module AppboyCardAdapter {
					export class CardListDiffCallback {
						public static class: java.lang.Class<com.appboy.ui.contentcards.AppboyCardAdapter.CardListDiffCallback>;
						public getNewListSize(): number;
						public areItemsTheSame(param0: number, param1: number): boolean;
						public areContentsTheSame(param0: number, param1: number): boolean;
						public getOldListSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export class AppboyContentCardsManager {
					public static class: java.lang.Class<com.appboy.ui.contentcards.AppboyContentCardsManager>;
					public static getInstance(): com.appboy.ui.contentcards.AppboyContentCardsManager;
					public getContentCardsActionListener(): com.appboy.ui.contentcards.listeners.IContentCardsActionListener;
					public constructor();
					public setContentCardsActionListener(param0: com.appboy.ui.contentcards.listeners.IContentCardsActionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export class AppboyEmptyContentCardsAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<globalAndroid.support.v7.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<com.appboy.ui.contentcards.AppboyEmptyContentCardsAdapter>;
					public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
					public constructor();
					public getItemCount(): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
				}
				export module AppboyEmptyContentCardsAdapter {
					export class NetworkUnavailableViewHolder {
						public static class: java.lang.Class<com.appboy.ui.contentcards.AppboyEmptyContentCardsAdapter.NetworkUnavailableViewHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module handlers {
					export class DefaultContentCardsUpdateHandler extends com.appboy.ui.contentcards.handlers.IContentCardsUpdateHandler {
						public static class: java.lang.Class<com.appboy.ui.contentcards.handlers.DefaultContentCardsUpdateHandler>;
						public constructor();
						public handleCardUpdate(param0: com.appboy.events.ContentCardsUpdatedEvent): java.util.List<com.appboy.models.cards.Card>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module handlers {
					export class DefaultContentCardsViewBindingHandler extends com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler {
						public static class: java.lang.Class<com.appboy.ui.contentcards.handlers.DefaultContentCardsViewBindingHandler>;
						public constructor();
						public getItemViewType(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: number): number;
						public onBindViewHolder(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: com.appboy.ui.contentcards.view.ContentCardViewHolder, param3: number): void;
						public onCreateViewHolder(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: globalAndroid.view.ViewGroup, param3: number): com.appboy.ui.contentcards.view.ContentCardViewHolder;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module handlers {
					export class IContentCardsUpdateHandler {
						public static class: java.lang.Class<com.appboy.ui.contentcards.handlers.IContentCardsUpdateHandler>;
						/**
						 * Constructs a new instance of the com.appboy.ui.contentcards.handlers.IContentCardsUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							handleCardUpdate(param0: com.appboy.events.ContentCardsUpdatedEvent): java.util.List<com.appboy.models.cards.Card>;
						});
						public constructor();
						public handleCardUpdate(param0: com.appboy.events.ContentCardsUpdatedEvent): java.util.List<com.appboy.models.cards.Card>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module handlers {
					export class IContentCardsViewBindingHandler {
						public static class: java.lang.Class<com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler>;
						/**
						 * Constructs a new instance of the com.appboy.ui.contentcards.handlers.IContentCardsViewBindingHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCreateViewHolder(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: globalAndroid.view.ViewGroup, param3: number): com.appboy.ui.contentcards.view.ContentCardViewHolder;
							onBindViewHolder(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: com.appboy.ui.contentcards.view.ContentCardViewHolder, param3: number): void;
							getItemViewType(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: number): number;
						});
						public constructor();
						public getItemViewType(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: number): number;
						public onBindViewHolder(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: com.appboy.ui.contentcards.view.ContentCardViewHolder, param3: number): void;
						public onCreateViewHolder(param0: globalAndroid.content.Context, param1: java.util.List<com.appboy.models.cards.Card>, param2: globalAndroid.view.ViewGroup, param3: number): com.appboy.ui.contentcards.view.ContentCardViewHolder;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module listeners {
					export class AppboyContentCardsActionListener extends com.appboy.ui.contentcards.listeners.IContentCardsActionListener {
						public static class: java.lang.Class<com.appboy.ui.contentcards.listeners.AppboyContentCardsActionListener>;
						public constructor();
						public onContentCardClicked(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
						public onContentCardDismissed(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module listeners {
					export class IContentCardsActionListener {
						public static class: java.lang.Class<com.appboy.ui.contentcards.listeners.IContentCardsActionListener>;
						/**
						 * Constructs a new instance of the com.appboy.ui.contentcards.listeners.IContentCardsActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onContentCardClicked(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
							onContentCardDismissed(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card): void;
						});
						public constructor();
						public onContentCardClicked(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
						public onContentCardDismissed(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module recycler {
					export class ContentCardsDividerItemDecoration {
						public static class: java.lang.Class<com.appboy.ui.contentcards.recycler.ContentCardsDividerItemDecoration>;
						public constructor(param0: globalAndroid.content.Context);
						public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module recycler {
					export class ItemTouchHelperAdapter {
						public static class: java.lang.Class<com.appboy.ui.contentcards.recycler.ItemTouchHelperAdapter>;
						/**
						 * Constructs a new instance of the com.appboy.ui.contentcards.recycler.ItemTouchHelperAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onItemDismiss(param0: number): void;
							isItemDismissable(param0: number): boolean;
						});
						public constructor();
						public onItemDismiss(param0: number): void;
						public isItemDismissable(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module recycler {
					export class SimpleItemTouchHelperCallback {
						public static class: java.lang.Class<com.appboy.ui.contentcards.recycler.SimpleItemTouchHelperCallback>;
						public isLongPressDragEnabled(): boolean;
						public isItemViewSwipeEnabled(): boolean;
						public getMovementFlags(param0: globalAndroid.support.v7.widget.RecyclerView, param1: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): number;
						public constructor(param0: com.appboy.ui.contentcards.recycler.ItemTouchHelperAdapter);
						public onMove(param0: globalAndroid.support.v7.widget.RecyclerView, param1: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param2: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): boolean;
						public onSwiped(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module view {
					export class BannerImageContentCardView extends com.appboy.ui.contentcards.view.BaseContentCardView<com.appboy.models.cards.BannerImageCard> {
						public static class: java.lang.Class<com.appboy.ui.contentcards.view.BannerImageContentCardView>;
						public constructor(param0: globalAndroid.content.Context);
						public createViewHolder(param0: globalAndroid.view.ViewGroup): com.appboy.ui.contentcards.view.ContentCardViewHolder;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: com.appboy.models.cards.BannerImageCard): void;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: any): void;
					}
					export module BannerImageContentCardView {
						export class ViewHolder extends com.appboy.ui.contentcards.view.ContentCardViewHolder {
							public static class: java.lang.Class<com.appboy.ui.contentcards.view.BannerImageContentCardView.ViewHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module view {
					export abstract class BaseContentCardView<T>  extends com.appboy.ui.widget.BaseCardView<any> {
						public static class: java.lang.Class<com.appboy.ui.contentcards.view.BaseContentCardView<any>>;
						public isClickHandled(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public setOptionalCardImage(param0: globalAndroid.widget.ImageView, param1: number, param2: string, param3: number): void;
						public createViewHolder(param0: globalAndroid.view.ViewGroup): com.appboy.ui.contentcards.view.ContentCardViewHolder;
						public safeSetClipToOutline(param0: globalAndroid.widget.ImageView): void;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module view {
					export class CaptionedImageContentCardView extends com.appboy.ui.contentcards.view.BaseContentCardView<com.appboy.models.cards.CaptionedImageCard> {
						public static class: java.lang.Class<com.appboy.ui.contentcards.view.CaptionedImageContentCardView>;
						public constructor(param0: globalAndroid.content.Context);
						public createViewHolder(param0: globalAndroid.view.ViewGroup): com.appboy.ui.contentcards.view.ContentCardViewHolder;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: com.appboy.models.cards.CaptionedImageCard): void;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: any): void;
					}
					export module CaptionedImageContentCardView {
						export class ViewHolder extends com.appboy.ui.contentcards.view.ContentCardViewHolder {
							public static class: java.lang.Class<com.appboy.ui.contentcards.view.CaptionedImageContentCardView.ViewHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module view {
					export class ContentCardViewHolder {
						public static class: java.lang.Class<com.appboy.ui.contentcards.view.ContentCardViewHolder>;
						public setActionHintText(param0: string): void;
						public setUnreadBarVisible(param0: boolean): void;
						public createCardImageWithStyle(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number, param3: number): globalAndroid.view.View;
						public constructor(param0: globalAndroid.view.View, param1: boolean);
						public setActionHintVisible(param0: boolean): void;
						public setPinnedIconVisible(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module view {
					export class DefaultContentCardView extends com.appboy.ui.contentcards.view.BaseContentCardView<com.appboy.models.cards.Card> {
						public static class: java.lang.Class<com.appboy.ui.contentcards.view.DefaultContentCardView>;
						public constructor(param0: globalAndroid.content.Context);
						public createViewHolder(param0: globalAndroid.view.ViewGroup): com.appboy.ui.contentcards.view.ContentCardViewHolder;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: com.appboy.models.cards.Card): void;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module view {
					export class ShortNewsContentCardView extends com.appboy.ui.contentcards.view.BaseContentCardView<com.appboy.models.cards.ShortNewsCard> {
						public static class: java.lang.Class<com.appboy.ui.contentcards.view.ShortNewsContentCardView>;
						public constructor(param0: globalAndroid.content.Context);
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: com.appboy.models.cards.ShortNewsCard): void;
						public createViewHolder(param0: globalAndroid.view.ViewGroup): com.appboy.ui.contentcards.view.ContentCardViewHolder;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: any): void;
					}
					export module ShortNewsContentCardView {
						export class ViewHolder extends com.appboy.ui.contentcards.view.ContentCardViewHolder {
							public static class: java.lang.Class<com.appboy.ui.contentcards.view.ShortNewsContentCardView.ViewHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module contentcards {
				export module view {
					export class TextAnnouncementContentCardView extends com.appboy.ui.contentcards.view.BaseContentCardView<com.appboy.models.cards.TextAnnouncementCard> {
						public static class: java.lang.Class<com.appboy.ui.contentcards.view.TextAnnouncementContentCardView>;
						public constructor(param0: globalAndroid.content.Context);
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: com.appboy.models.cards.TextAnnouncementCard): void;
						public createViewHolder(param0: globalAndroid.view.ViewGroup): com.appboy.ui.contentcards.view.ContentCardViewHolder;
						public bindViewHolder(param0: com.appboy.ui.contentcards.view.ContentCardViewHolder, param1: any): void;
					}
					export module TextAnnouncementContentCardView {
						export class ViewHolder extends com.appboy.ui.contentcards.view.ContentCardViewHolder {
							public static class: java.lang.Class<com.appboy.ui.contentcards.view.TextAnnouncementContentCardView.ViewHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module feed {
				export class AppboyFeedManager {
					public static class: java.lang.Class<com.appboy.ui.feed.AppboyFeedManager>;
					public static getInstance(): com.appboy.ui.feed.AppboyFeedManager;
					public constructor();
					public setFeedCardClickActionListener(param0: com.appboy.ui.feed.listeners.IFeedClickActionListener): void;
					public getFeedCardClickActionListener(): com.appboy.ui.feed.listeners.IFeedClickActionListener;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module feed {
				export class AppboyImageSwitcher {
					public static class: java.lang.Class<com.appboy.ui.feed.AppboyImageSwitcher>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getReadIcon(): globalAndroid.graphics.drawable.Drawable;
					public setReadIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getUnReadIcon(): globalAndroid.graphics.drawable.Drawable;
					public setUnReadIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module feed {
				export module listeners {
					export class AppboyDefaultFeedClickActionListener extends com.appboy.ui.feed.listeners.IFeedClickActionListener {
						public static class: java.lang.Class<com.appboy.ui.feed.listeners.AppboyDefaultFeedClickActionListener>;
						public constructor();
						public onFeedCardClicked(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module feed {
				export module listeners {
					export class IFeedClickActionListener {
						public static class: java.lang.Class<com.appboy.ui.feed.listeners.IFeedClickActionListener>;
						/**
						 * Constructs a new instance of the com.appboy.ui.feed.listeners.IFeedClickActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFeedCardClicked(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
						});
						public constructor();
						public onFeedCardClicked(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module feed {
				export module view {
					export abstract class BaseFeedCardView<T>  extends com.appboy.ui.widget.BaseCardView<any> implements java.util.Observer  {
						public static class: java.lang.Class<com.appboy.ui.feed.view.BaseFeedCardView<any>>;
						public isClickHandled(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
						public onSetCard(param0: any): void;
						public constructor(param0: globalAndroid.content.Context);
						public setCard(param0: any): void;
						public getLayoutResource(): number;
						public getProperViewFromInflatedStub(param0: number): globalAndroid.view.View;
						public getCard(): com.appboy.models.cards.Card;
						public update(param0: java.util.Observable, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class AppboyAsyncInAppMessageDisplayer extends globalAndroid.os.AsyncTask<com.appboy.models.IInAppMessage,java.lang.Integer,com.appboy.models.IInAppMessage> {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.AppboyAsyncInAppMessageDisplayer>;
					public doInBackground(param0: native.Array<com.appboy.models.IInAppMessage>): com.appboy.models.IInAppMessage;
					public constructor();
					public onPostExecute(param0: com.appboy.models.IInAppMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class AppboyInAppMessageImageView implements com.appboy.ui.inappmessage.IInAppMessageImageView {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.AppboyInAppMessageImageView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAspectRatio(param0: number): void;
					public onMeasure(param0: number, param1: number): void;
					public setCornersRadiiPx(param0: number, param1: number, param2: number, param3: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public setToHalfParentHeight(param0: boolean): void;
					public setInAppMessageImageCropType(param0: com.appboy.enums.inappmessage.CropType): void;
					public setCornersRadiusPx(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class AppboyInAppMessageManager extends com.appboy.ui.inappmessage.AppboyInAppMessageManagerBase {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.AppboyInAppMessageManager>;
					public unregisterInAppMessageManager(param0: globalAndroid.app.Activity): void;
					public constructor();
					public ensureSubscribedToInAppMessageEvents(param0: globalAndroid.content.Context): void;
					public resetAfterInAppMessageClose(): void;
					public static getInstance(): com.appboy.ui.inappmessage.AppboyInAppMessageManager;
					public addInAppMessage(param0: com.appboy.models.IInAppMessage): void;
					public requestDisplayInAppMessage(): boolean;
					public registerInAppMessageManager(param0: globalAndroid.app.Activity): void;
					public hideCurrentlyDisplayingInAppMessage(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class AppboyInAppMessageManagerBase {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.AppboyInAppMessageManagerBase>;
					public getInAppMessageAnimationFactory(): com.appboy.ui.inappmessage.IInAppMessageAnimationFactory;
					public getInAppMessageViewFactory(param0: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.IInAppMessageViewFactory;
					public getDefaultInAppMessageViewFactory(param0: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.IInAppMessageViewFactory;
					public getInAppMessageManagerListener(): com.appboy.ui.inappmessage.listeners.IInAppMessageManagerListener;
					public getApplicationContext(): globalAndroid.content.Context;
					public setCustomHtmlInAppMessageActionListener(param0: com.appboy.ui.inappmessage.listeners.IHtmlInAppMessageActionListener): void;
					public getControlInAppMessageManagerListener(): com.appboy.ui.inappmessage.listeners.IInAppMessageManagerListener;
					public setCustomControlInAppMessageManagerListener(param0: com.appboy.ui.inappmessage.listeners.IInAppMessageManagerListener): void;
					public getActivity(): globalAndroid.app.Activity;
					public getHtmlInAppMessageActionListener(): com.appboy.ui.inappmessage.listeners.IHtmlInAppMessageActionListener;
					public setCustomInAppMessageViewWrapperFactory(param0: com.appboy.ui.inappmessage.IInAppMessageViewWrapperFactory): void;
					public getInAppMessageViewWrapperFactory(): com.appboy.ui.inappmessage.IInAppMessageViewWrapperFactory;
					public setCustomInAppMessageManagerListener(param0: com.appboy.ui.inappmessage.listeners.IInAppMessageManagerListener): void;
					public constructor();
					public getDoesBackButtonDismissInAppMessageView(): boolean;
					public setCustomInAppMessageAnimationFactory(param0: com.appboy.ui.inappmessage.IInAppMessageAnimationFactory): void;
					public setBackButtonDismissesInAppMessageView(param0: boolean): void;
					public setCustomInAppMessageViewFactory(param0: com.appboy.ui.inappmessage.IInAppMessageViewFactory): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class DefaultInAppMessageViewWrapper extends com.appboy.ui.inappmessage.IInAppMessageViewWrapper {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.DefaultInAppMessageViewWrapper>;
					public mInAppMessageView: globalAndroid.view.View;
					public mInAppMessage: com.appboy.models.IInAppMessage;
					public mInAppMessageViewLifecycleListener: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener;
					public mOpeningAnimation: globalAndroid.view.animation.Animation;
					public mClosingAnimation: globalAndroid.view.animation.Animation;
					public mAppboyConfigurationProvider: com.appboy.configuration.AppboyConfigurationProvider;
					public mInAppMessageCloser: com.appboy.ui.inappmessage.InAppMessageCloser;
					public mIsAnimatingClose: boolean;
					public mDismissRunnable: java.lang.Runnable;
					public mClickableInAppMessageView: globalAndroid.view.View;
					public mCloseButton: globalAndroid.view.View;
					public mButtonViews: java.util.List<globalAndroid.view.View>;
					public addInAppMessageViewToViewGroup(param0: globalAndroid.view.ViewGroup, param1: com.appboy.models.IInAppMessage, param2: globalAndroid.view.View, param3: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener): void;
					public open(param0: globalAndroid.app.Activity): void;
					public constructor(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View, param7: java.util.List<globalAndroid.view.View>, param8: globalAndroid.view.View);
					public announceForAccessibilityIfNecessary(): void;
					public createClickListener(): globalAndroid.view.View.OnClickListener;
					public createButtonClickListener(): globalAndroid.view.View.OnClickListener;
					public static setAllViewGroupChildrenAsAccessibilityAuto(param0: globalAndroid.view.ViewGroup): void;
					public createDismissCallbacks(): com.appboy.ui.inappmessage.listeners.SwipeDismissTouchListener.DismissCallbacks;
					public getInAppMessageView(): globalAndroid.view.View;
					public createCloseInAppMessageClickListener(): globalAndroid.view.View.OnClickListener;
					public constructor(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View);
					public announceForAccessibilityIfNecessary(param0: string): void;
					public createTouchAwareListener(): com.appboy.ui.inappmessage.listeners.TouchAwareSwipeDismissTouchListener.ITouchListener;
					public close(): void;
					public static setAllViewGroupChildrenAsNonAccessibilityImportant(param0: globalAndroid.view.ViewGroup): void;
					public getIsAnimatingClose(): boolean;
					public getParentViewGroup(param0: globalAndroid.app.Activity): globalAndroid.view.ViewGroup;
					public getInAppMessage(): com.appboy.models.IInAppMessage;
					public addDismissRunnable(): void;
					public closeInAppMessageView(): void;
					public getLayoutParams(param0: com.appboy.models.IInAppMessage): globalAndroid.view.ViewGroup.LayoutParams;
					public setAndStartAnimation(param0: boolean): void;
					public createAnimationListener(param0: boolean): globalAndroid.view.animation.Animation.AnimationListener;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class IInAppMessageAnimationFactory {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.IInAppMessageAnimationFactory>;
					/**
					 * Constructs a new instance of the com.appboy.ui.inappmessage.IInAppMessageAnimationFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getOpeningAnimation(param0: com.appboy.models.IInAppMessage): globalAndroid.view.animation.Animation;
						getClosingAnimation(param0: com.appboy.models.IInAppMessage): globalAndroid.view.animation.Animation;
					});
					public constructor();
					public getOpeningAnimation(param0: com.appboy.models.IInAppMessage): globalAndroid.view.animation.Animation;
					public getClosingAnimation(param0: com.appboy.models.IInAppMessage): globalAndroid.view.animation.Animation;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class IInAppMessageImageView {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.IInAppMessageImageView>;
					/**
					 * Constructs a new instance of the com.appboy.ui.inappmessage.IInAppMessageImageView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCornersRadiiPx(param0: number, param1: number, param2: number, param3: number): void;
						setCornersRadiusPx(param0: number): void;
						setInAppMessageImageCropType(param0: com.appboy.enums.inappmessage.CropType): void;
						setAspectRatio(param0: number): void;
						setToHalfParentHeight(param0: boolean): void;
					});
					public constructor();
					public setAspectRatio(param0: number): void;
					public setCornersRadiiPx(param0: number, param1: number, param2: number, param3: number): void;
					public setToHalfParentHeight(param0: boolean): void;
					public setInAppMessageImageCropType(param0: com.appboy.enums.inappmessage.CropType): void;
					public setCornersRadiusPx(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class IInAppMessageImmersiveView extends com.appboy.ui.inappmessage.IInAppMessageView {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.IInAppMessageImmersiveView>;
					/**
					 * Constructs a new instance of the com.appboy.ui.inappmessage.IInAppMessageImmersiveView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMessageCloseButtonView(): globalAndroid.view.View;
						getMessageButtonViews(param0: number): java.util.List<globalAndroid.view.View>;
						getMessageClickableView(): globalAndroid.view.View;
						applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						hasAppliedWindowInsets(): boolean;
					});
					public constructor();
					public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
					public getMessageButtonViews(param0: number): java.util.List<globalAndroid.view.View>;
					public getMessageCloseButtonView(): globalAndroid.view.View;
					public hasAppliedWindowInsets(): boolean;
					public getMessageClickableView(): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class IInAppMessageView {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.IInAppMessageView>;
					/**
					 * Constructs a new instance of the com.appboy.ui.inappmessage.IInAppMessageView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMessageClickableView(): globalAndroid.view.View;
						applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						hasAppliedWindowInsets(): boolean;
					});
					public constructor();
					public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
					public hasAppliedWindowInsets(): boolean;
					public getMessageClickableView(): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class IInAppMessageViewFactory {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.IInAppMessageViewFactory>;
					/**
					 * Constructs a new instance of the com.appboy.ui.inappmessage.IInAppMessageViewFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): globalAndroid.view.View;
					});
					public constructor();
					public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class IInAppMessageViewWrapper {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.IInAppMessageViewWrapper>;
					/**
					 * Constructs a new instance of the com.appboy.ui.inappmessage.IInAppMessageViewWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						open(param0: globalAndroid.app.Activity): void;
						close(): void;
						getInAppMessageView(): globalAndroid.view.View;
						getInAppMessage(): com.appboy.models.IInAppMessage;
						getIsAnimatingClose(): boolean;
					});
					public constructor();
					public getInAppMessageView(): globalAndroid.view.View;
					public open(param0: globalAndroid.app.Activity): void;
					public close(): void;
					public getIsAnimatingClose(): boolean;
					public getInAppMessage(): com.appboy.models.IInAppMessage;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class IInAppMessageViewWrapperFactory {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.IInAppMessageViewWrapperFactory>;
					/**
					 * Constructs a new instance of the com.appboy.ui.inappmessage.IInAppMessageViewWrapperFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createInAppMessageViewWrapper(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View): com.appboy.ui.inappmessage.IInAppMessageViewWrapper;
						createInAppMessageViewWrapper(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View, param7: java.util.List<globalAndroid.view.View>, param8: globalAndroid.view.View): com.appboy.ui.inappmessage.IInAppMessageViewWrapper;
					});
					public constructor();
					public createInAppMessageViewWrapper(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View): com.appboy.ui.inappmessage.IInAppMessageViewWrapper;
					public createInAppMessageViewWrapper(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View, param7: java.util.List<globalAndroid.view.View>, param8: globalAndroid.view.View): com.appboy.ui.inappmessage.IInAppMessageViewWrapper;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class InAppMessageCloser {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.InAppMessageCloser>;
					public constructor(param0: com.appboy.ui.inappmessage.IInAppMessageViewWrapper);
					public close(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class InAppMessageOperation {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.InAppMessageOperation>;
					public static DISPLAY_NOW: com.appboy.ui.inappmessage.InAppMessageOperation;
					public static DISPLAY_LATER: com.appboy.ui.inappmessage.InAppMessageOperation;
					public static DISCARD: com.appboy.ui.inappmessage.InAppMessageOperation;
					public static values(): native.Array<com.appboy.ui.inappmessage.InAppMessageOperation>;
					public static valueOf(param0: string): com.appboy.ui.inappmessage.InAppMessageOperation;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export class InAppMessageWebViewClient {
					public static class: java.lang.Class<com.appboy.ui.inappmessage.InAppMessageWebViewClient>;
					public static QUERY_NAME_BUTTON_ID: string;
					public static QUERY_NAME_EXTERNAL_OPEN: string;
					public static QUERY_NAME_DEEPLINK: string;
					public static JAVASCRIPT_PREFIX: string;
					public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					public setWebViewClientStateListener(param0: com.appboy.ui.inappmessage.listeners.IWebViewClientStateListener): void;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageWebViewClientListener);
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module config {
					export class AppboyInAppMessageParams {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.config.AppboyInAppMessageParams>;
						public static MODALIZED_IMAGE_RADIUS_DP: number;
						public static GRAPHIC_MODAL_MAX_WIDTH_DP: number;
						public static GRAPHIC_MODAL_MAX_HEIGHT_DP: number;
						public static setModalizedImageRadiusDp(param0: number): void;
						public constructor();
						public static getModalizedImageRadiusDp(): number;
						public static getGraphicModalMaxHeightDp(): number;
						public static getGraphicModalMaxWidthDp(): number;
						public static setGraphicModalMaxWidthDp(param0: number): void;
						public static setGraphicModalMaxHeightDp(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module factories {
					export class AppboyFullViewFactory extends com.appboy.ui.inappmessage.IInAppMessageViewFactory {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.factories.AppboyFullViewFactory>;
						public constructor();
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): globalAndroid.view.View;
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.views.AppboyInAppMessageFullView;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module factories {
					export class AppboyHtmlFullViewFactory extends com.appboy.ui.inappmessage.IInAppMessageViewFactory {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.factories.AppboyHtmlFullViewFactory>;
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): globalAndroid.view.View;
						public constructor(param0: com.appboy.ui.inappmessage.listeners.IInAppMessageWebViewClientListener);
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.views.AppboyInAppMessageHtmlFullView;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module factories {
					export class AppboyInAppMessageAnimationFactory extends com.appboy.ui.inappmessage.IInAppMessageAnimationFactory {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.factories.AppboyInAppMessageAnimationFactory>;
						public constructor();
						public getClosingAnimation(param0: com.appboy.models.IInAppMessage): globalAndroid.view.animation.Animation;
						public getOpeningAnimation(param0: com.appboy.models.IInAppMessage): globalAndroid.view.animation.Animation;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module factories {
					export class AppboyInAppMessageViewWrapperFactory extends com.appboy.ui.inappmessage.IInAppMessageViewWrapperFactory {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.factories.AppboyInAppMessageViewWrapperFactory>;
						public createInAppMessageViewWrapper(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View, param7: java.util.List<globalAndroid.view.View>, param8: globalAndroid.view.View): com.appboy.ui.inappmessage.IInAppMessageViewWrapper;
						public constructor();
						public createInAppMessageViewWrapper(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage, param2: com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener, param3: com.appboy.configuration.AppboyConfigurationProvider, param4: globalAndroid.view.animation.Animation, param5: globalAndroid.view.animation.Animation, param6: globalAndroid.view.View): com.appboy.ui.inappmessage.IInAppMessageViewWrapper;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module factories {
					export class AppboyModalViewFactory extends com.appboy.ui.inappmessage.IInAppMessageViewFactory {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.factories.AppboyModalViewFactory>;
						public constructor();
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): globalAndroid.view.View;
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.views.AppboyInAppMessageModalView;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module factories {
					export class AppboySlideupViewFactory extends com.appboy.ui.inappmessage.IInAppMessageViewFactory {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.factories.AppboySlideupViewFactory>;
						public constructor();
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.views.AppboyInAppMessageSlideupView;
						public createInAppMessageView(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessage): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module jsinterface {
					export class AppboyInAppMessageHtmlJavascriptInterface {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.jsinterface.AppboyInAppMessageHtmlJavascriptInterface>;
						public logButtonClick(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.appboy.models.IInAppMessageHtml);
						public requestImmediateDataFlush(): void;
						public getUser(): com.appboy.ui.inappmessage.jsinterface.AppboyInAppMessageHtmlUserJavascriptInterface;
						public logPurchaseWithJSON(param0: string, param1: number, param2: string, param3: number, param4: string): void;
						public logCustomEventWithJSON(param0: string, param1: string): void;
						public logClick(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module jsinterface {
					export class AppboyInAppMessageHtmlUserJavascriptInterface {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.jsinterface.AppboyInAppMessageHtmlUserJavascriptInterface>;
						public static JS_BRIDGE_UNSUBSCRIBED: string;
						public static JS_BRIDGE_SUBSCRIBED: string;
						public static JS_BRIDGE_OPTED_IN: string;
						public static JS_BRIDGE_GENDER_MALE: string;
						public static JS_BRIDGE_GENDER_FEMALE: string;
						public static JS_BRIDGE_GENDER_OTHER: string;
						public static JS_BRIDGE_GENDER_UNKNOWN: string;
						public static JS_BRIDGE_GENDER_NOT_APPLICABLE: string;
						public static JS_BRIDGE_GENDER_PREFER_NOT_TO_SAY: string;
						public static JS_BRIDGE_ATTRIBUTE_VALUE: string;
						public setFirstName(param0: string): void;
						public setGender(param0: string): void;
						public constructor(param0: globalAndroid.content.Context);
						public setPhoneNumber(param0: string): void;
						public setCustomLocationAttribute(param0: string, param1: number, param2: number): void;
						public addToCustomAttributeArray(param0: string, param1: string): void;
						public setHomeCity(param0: string): void;
						public setCountry(param0: string): void;
						public setPushNotificationSubscriptionType(param0: string): void;
						public setLanguage(param0: string): void;
						public setCustomUserAttributeArray(param0: string, param1: string): void;
						public setEmail(param0: string): void;
						public setLastName(param0: string): void;
						public incrementCustomUserAttribute(param0: string): void;
						public setDateOfBirth(param0: number, param1: number, param2: number): void;
						public removeFromCustomAttributeArray(param0: string, param1: string): void;
						public setCustomUserAttributeJSON(param0: string, param1: string): void;
						public setEmailNotificationSubscriptionType(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class AppboyDefaultHtmlInAppMessageActionListener extends com.appboy.ui.inappmessage.listeners.IHtmlInAppMessageActionListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.AppboyDefaultHtmlInAppMessageActionListener>;
						public constructor();
						public onCustomEventFired(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
						public onNewsfeedClicked(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
						public onCloseClicked(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public onOtherUrlAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class AppboyDefaultInAppMessageManagerListener extends com.appboy.ui.inappmessage.listeners.IInAppMessageManagerListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.AppboyDefaultInAppMessageManagerListener>;
						public onInAppMessageClicked(param0: com.appboy.models.IInAppMessage, param1: com.appboy.ui.inappmessage.InAppMessageCloser): boolean;
						public beforeInAppMessageViewClosed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public constructor();
						public beforeInAppMessageViewOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						/** @deprecated */
						public onInAppMessageReceived(param0: com.appboy.models.IInAppMessage): boolean;
						public beforeInAppMessageDisplayed(param0: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.InAppMessageOperation;
						public afterInAppMessageViewOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public onInAppMessageDismissed(param0: com.appboy.models.IInAppMessage): void;
						public afterInAppMessageViewClosed(param0: com.appboy.models.IInAppMessage): void;
						public onInAppMessageButtonClicked(param0: com.appboy.models.IInAppMessage, param1: com.appboy.models.MessageButton, param2: com.appboy.ui.inappmessage.InAppMessageCloser): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class AppboyInAppMessageViewLifecycleListener extends com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.AppboyInAppMessageViewLifecycleListener>;
						public onButtonClicked(param0: com.appboy.ui.inappmessage.InAppMessageCloser, param1: com.appboy.models.MessageButton, param2: com.appboy.models.IInAppMessageImmersive): void;
						public constructor();
						public afterOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public beforeClosed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public beforeOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public onClicked(param0: com.appboy.ui.inappmessage.InAppMessageCloser, param1: globalAndroid.view.View, param2: com.appboy.models.IInAppMessage): void;
						public afterClosed(param0: com.appboy.models.IInAppMessage): void;
						public onDismissed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class AppboyInAppMessageWebViewClientListener extends com.appboy.ui.inappmessage.listeners.IInAppMessageWebViewClientListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.AppboyInAppMessageWebViewClientListener>;
						public onCustomEventAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public onOtherUrlAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public onNewsfeedAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public constructor();
						public onCloseAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class IHtmlInAppMessageActionListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.IHtmlInAppMessageActionListener>;
						/**
						 * Constructs a new instance of the com.appboy.ui.inappmessage.listeners.IHtmlInAppMessageActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCloseClicked(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
							onNewsfeedClicked(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
							onCustomEventFired(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
							onOtherUrlAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
						});
						public constructor();
						public onCustomEventFired(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
						public onNewsfeedClicked(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
						public onCloseClicked(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public onOtherUrlAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class IInAppMessageManagerListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.IInAppMessageManagerListener>;
						/**
						 * Constructs a new instance of the com.appboy.ui.inappmessage.listeners.IInAppMessageManagerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInAppMessageReceived(param0: com.appboy.models.IInAppMessage): boolean;
							beforeInAppMessageDisplayed(param0: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.InAppMessageOperation;
							onInAppMessageClicked(param0: com.appboy.models.IInAppMessage, param1: com.appboy.ui.inappmessage.InAppMessageCloser): boolean;
							onInAppMessageButtonClicked(param0: com.appboy.models.IInAppMessage, param1: com.appboy.models.MessageButton, param2: com.appboy.ui.inappmessage.InAppMessageCloser): boolean;
							onInAppMessageDismissed(param0: com.appboy.models.IInAppMessage): void;
							beforeInAppMessageViewOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
							afterInAppMessageViewOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
							beforeInAppMessageViewClosed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
							afterInAppMessageViewClosed(param0: com.appboy.models.IInAppMessage): void;
						});
						public constructor();
						public onInAppMessageClicked(param0: com.appboy.models.IInAppMessage, param1: com.appboy.ui.inappmessage.InAppMessageCloser): boolean;
						public beforeInAppMessageViewClosed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public beforeInAppMessageViewOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						/** @deprecated */
						public onInAppMessageReceived(param0: com.appboy.models.IInAppMessage): boolean;
						public beforeInAppMessageDisplayed(param0: com.appboy.models.IInAppMessage): com.appboy.ui.inappmessage.InAppMessageOperation;
						public afterInAppMessageViewOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public onInAppMessageDismissed(param0: com.appboy.models.IInAppMessage): void;
						public afterInAppMessageViewClosed(param0: com.appboy.models.IInAppMessage): void;
						public onInAppMessageButtonClicked(param0: com.appboy.models.IInAppMessage, param1: com.appboy.models.MessageButton, param2: com.appboy.ui.inappmessage.InAppMessageCloser): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class IInAppMessageViewLifecycleListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener>;
						/**
						 * Constructs a new instance of the com.appboy.ui.inappmessage.listeners.IInAppMessageViewLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							beforeOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
							afterOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
							beforeClosed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
							afterClosed(param0: com.appboy.models.IInAppMessage): void;
							onClicked(param0: com.appboy.ui.inappmessage.InAppMessageCloser, param1: globalAndroid.view.View, param2: com.appboy.models.IInAppMessage): void;
							onButtonClicked(param0: com.appboy.ui.inappmessage.InAppMessageCloser, param1: com.appboy.models.MessageButton, param2: com.appboy.models.IInAppMessageImmersive): void;
							onDismissed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						});
						public constructor();
						public onButtonClicked(param0: com.appboy.ui.inappmessage.InAppMessageCloser, param1: com.appboy.models.MessageButton, param2: com.appboy.models.IInAppMessageImmersive): void;
						public afterOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public beforeClosed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public beforeOpened(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
						public onClicked(param0: com.appboy.ui.inappmessage.InAppMessageCloser, param1: globalAndroid.view.View, param2: com.appboy.models.IInAppMessage): void;
						public afterClosed(param0: com.appboy.models.IInAppMessage): void;
						public onDismissed(param0: globalAndroid.view.View, param1: com.appboy.models.IInAppMessage): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class IInAppMessageWebViewClientListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.IInAppMessageWebViewClientListener>;
						/**
						 * Constructs a new instance of the com.appboy.ui.inappmessage.listeners.IInAppMessageWebViewClientListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCloseAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
							onNewsfeedAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
							onCustomEventAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
							onOtherUrlAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public onCustomEventAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public onOtherUrlAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public onNewsfeedAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
						public onCloseAction(param0: com.appboy.models.IInAppMessage, param1: string, param2: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class IWebViewClientStateListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.IWebViewClientStateListener>;
						/**
						 * Constructs a new instance of the com.appboy.ui.inappmessage.listeners.IWebViewClientStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPageFinished(): void;
						});
						public constructor();
						public onPageFinished(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class SwipeDismissTouchListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.SwipeDismissTouchListener>;
						public performDismiss(): void;
						public constructor(param0: globalAndroid.view.View, param1: any, param2: com.appboy.ui.inappmessage.listeners.SwipeDismissTouchListener.DismissCallbacks);
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
					export module SwipeDismissTouchListener {
						export class DismissCallbacks {
							public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.SwipeDismissTouchListener.DismissCallbacks>;
							/**
							 * Constructs a new instance of the com.appboy.ui.inappmessage.listeners.SwipeDismissTouchListener$DismissCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								canDismiss(param0: any): boolean;
								onDismiss(param0: globalAndroid.view.View, param1: any): void;
							});
							public constructor();
							public canDismiss(param0: any): boolean;
							public onDismiss(param0: globalAndroid.view.View, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module listeners {
					export class TouchAwareSwipeDismissTouchListener extends com.appboy.ui.inappmessage.listeners.SwipeDismissTouchListener {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.TouchAwareSwipeDismissTouchListener>;
						public setTouchListener(param0: com.appboy.ui.inappmessage.listeners.TouchAwareSwipeDismissTouchListener.ITouchListener): void;
						public constructor(param0: globalAndroid.view.View, param1: any, param2: com.appboy.ui.inappmessage.listeners.SwipeDismissTouchListener.DismissCallbacks);
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
					export module TouchAwareSwipeDismissTouchListener {
						export class ITouchListener {
							public static class: java.lang.Class<com.appboy.ui.inappmessage.listeners.TouchAwareSwipeDismissTouchListener.ITouchListener>;
							/**
							 * Constructs a new instance of the com.appboy.ui.inappmessage.listeners.TouchAwareSwipeDismissTouchListener$ITouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTouchStartedOrContinued(): void;
								onTouchEnded(): void;
							});
							public constructor();
							public onTouchEnded(): void;
							public onTouchStartedOrContinued(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export abstract class AppboyInAppMessageBaseView implements com.appboy.ui.inappmessage.IInAppMessageView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageBaseView>;
						public mHasAppliedWindowInsets: boolean;
						public setMessage(param0: string): void;
						public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						public getMessageTextView(): globalAndroid.widget.TextView;
						public setMessageIcon(param0: string, param1: number, param2: number): void;
						public setMessageBackgroundColor(param0: number): void;
						public getMessageClickableView(): globalAndroid.view.View;
						public getAppropriateImageUrl(param0: com.appboy.models.IInAppMessage): string;
						public hasAppliedWindowInsets(): boolean;
						public setMessageTextColor(param0: number): void;
						public setMessageImageView(param0: globalAndroid.graphics.Bitmap): void;
						public getMessageIconView(): globalAndroid.widget.TextView;
						public setMessageTextAlign(param0: com.appboy.enums.inappmessage.TextAlign): void;
						public getMessageImageView(): globalAndroid.widget.ImageView;
						public getMessageBackgroundObject(): any;
						public resetMessageMargins(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export class AppboyInAppMessageBoundedLayout {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageBoundedLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export class AppboyInAppMessageFullView extends com.appboy.ui.inappmessage.views.AppboyInAppMessageImmersiveBaseView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageFullView>;
						public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						public getLongEdge(): number;
						public createAppropriateViews(param0: globalAndroid.app.Activity, param1: com.appboy.models.IInAppMessageImmersive, param2: boolean): void;
						public getMessageTextView(): globalAndroid.widget.TextView;
						public setMessageBackgroundColor(param0: number): void;
						public getMessageCloseButtonView(): globalAndroid.view.View;
						public getMessageClickableView(): globalAndroid.view.View;
						public hasAppliedWindowInsets(): boolean;
						public getMessageHeaderTextView(): globalAndroid.widget.TextView;
						public getFrameView(): globalAndroid.view.View;
						public getMessageButtonViews(param0: number): java.util.List<globalAndroid.view.View>;
						public getShortEdge(): number;
						public getMessageIconView(): globalAndroid.widget.TextView;
						public getMessageImageView(): globalAndroid.widget.ImageView;
						public getMessageBackgroundObject(): any;
						public resetMessageMargins(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getMessageBackgroundObject(): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export abstract class AppboyInAppMessageHtmlBaseView implements com.appboy.ui.inappmessage.IInAppMessageView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageHtmlBaseView>;
						public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						public setInAppMessageWebViewClient(param0: com.appboy.ui.inappmessage.InAppMessageWebViewClient): void;
						public hasAppliedWindowInsets(): boolean;
						public getMessageWebView(): globalAndroid.webkit.WebView;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public setWebViewContent(param0: string, param1: string): void;
						public setHtmlPageFinishedListener(param0: com.appboy.ui.inappmessage.listeners.IWebViewClientStateListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getMessageClickableView(): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export class AppboyInAppMessageHtmlFullView extends com.appboy.ui.inappmessage.views.AppboyInAppMessageHtmlBaseView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageHtmlFullView>;
						public static APPBOY_BRIDGE_PREFIX: string;
						public mMessageWebView: globalAndroid.webkit.WebView;
						public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						public hasAppliedWindowInsets(): boolean;
						public getMessageWebView(): globalAndroid.webkit.WebView;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getMessageClickableView(): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export abstract class AppboyInAppMessageImmersiveBaseView extends com.appboy.ui.inappmessage.views.AppboyInAppMessageBaseView implements com.appboy.ui.inappmessage.IInAppMessageImmersiveView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageImmersiveBaseView>;
						public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						public setFrameColor(param0: java.lang.Integer): void;
						public getMessageTextView(): globalAndroid.widget.TextView;
						public setMessageButtons(param0: java.util.List<com.appboy.models.MessageButton>): void;
						public getMessageCloseButtonView(): globalAndroid.view.View;
						public setMessageCloseButtonColor(param0: number): void;
						public getMessageClickableView(): globalAndroid.view.View;
						public hasAppliedWindowInsets(): boolean;
						public getMessageHeaderTextView(): globalAndroid.widget.TextView;
						public getFrameView(): globalAndroid.view.View;
						public setMessageHeaderTextColor(param0: number): void;
						public getMessageButtonViews(param0: number): java.util.List<globalAndroid.view.View>;
						public setMessageHeaderTextAlignment(param0: com.appboy.enums.inappmessage.TextAlign): void;
						public setMessageHeaderText(param0: string): void;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public resetMessageMargins(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setLargerCloseButtonClickArea(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export class AppboyInAppMessageModalView extends com.appboy.ui.inappmessage.views.AppboyInAppMessageImmersiveBaseView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageModalView>;
						public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						public getMessageTextView(): globalAndroid.widget.TextView;
						public applyInAppMessageParameters(param0: globalAndroid.content.Context, param1: com.appboy.models.IInAppMessageImmersive): void;
						public getMessageBackgroundObject(): globalAndroid.graphics.drawable.Drawable;
						public setMessageBackgroundColor(param0: number): void;
						public getMessageCloseButtonView(): globalAndroid.view.View;
						public getMessageClickableView(): globalAndroid.view.View;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public hasAppliedWindowInsets(): boolean;
						public getMessageHeaderTextView(): globalAndroid.widget.TextView;
						public getFrameView(): globalAndroid.view.View;
						public getMessageButtonViews(param0: number): java.util.List<globalAndroid.view.View>;
						public getMessageIconView(): globalAndroid.widget.TextView;
						public getMessageBackgroundObject(): any;
						public getMessageImageView(): globalAndroid.widget.ImageView;
						public resetMessageMargins(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export class AppboyInAppMessageSlideupView extends com.appboy.ui.inappmessage.views.AppboyInAppMessageBaseView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageSlideupView>;
						public applyWindowInsets(param0: globalAndroid.support.v4.view.WindowInsetsCompat): void;
						public getMessageTextView(): globalAndroid.widget.TextView;
						public setMessageChevron(param0: number, param1: com.appboy.enums.inappmessage.ClickAction): void;
						public setMessageBackgroundColor(param0: number): void;
						public getMessageClickableView(): globalAndroid.view.View;
						public hasAppliedWindowInsets(): boolean;
						public getMessageIconView(): globalAndroid.widget.TextView;
						public applyInAppMessageParameters(param0: com.appboy.models.IInAppMessage): void;
						public getMessageBackgroundObject(): any;
						public getMessageImageView(): globalAndroid.widget.ImageView;
						public resetMessageMargins(param0: boolean): void;
						public getMessageChevronView(): globalAndroid.view.View;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getMessageBackgroundObject(): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export class AppboyInAppMessageWebView {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.AppboyInAppMessageWebView>;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module inappmessage {
				export module views {
					export class InAppMessageViewUtils {
						public static class: java.lang.Class<com.appboy.ui.inappmessage.views.InAppMessageViewUtils>;
						public static setIcon(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: globalAndroid.widget.TextView): void;
						public static closeInAppMessageOnKeycodeBack(): void;
						public constructor();
						public static setViewBackgroundColorFilter(param0: globalAndroid.view.View, param1: number): void;
						public static isValidIcon(param0: string): boolean;
						public static setImage(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.widget.ImageView): void;
						public static setViewBackgroundColor(param0: globalAndroid.view.View, param1: number): void;
						public static setDrawableColor(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
						public static setButtons(param0: java.util.List<globalAndroid.view.View>, param1: java.util.List<com.appboy.models.MessageButton>): void;
						public static setFrameColor(param0: globalAndroid.view.View, param1: java.lang.Integer): void;
						public static setTextViewColor(param0: globalAndroid.widget.TextView, param1: number): void;
						public static resetMessageMarginsIfNecessary(param0: globalAndroid.widget.TextView, param1: globalAndroid.widget.TextView): void;
						public static setTextAlignment(param0: globalAndroid.widget.TextView, param1: com.appboy.enums.inappmessage.TextAlign): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module support {
				export class AnimationUtils {
					public static class: java.lang.Class<com.appboy.ui.support.AnimationUtils>;
					public constructor();
					public static setAnimationParams(param0: globalAndroid.view.animation.Animation, param1: number, param2: boolean): globalAndroid.view.animation.Animation;
					public static createHorizontalAnimation(param0: number, param1: number, param2: number, param3: boolean): globalAndroid.view.animation.Animation;
					public static createVerticalAnimation(param0: number, param1: number, param2: number, param3: boolean): globalAndroid.view.animation.Animation;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module support {
				export class UriUtils {
					public static class: java.lang.Class<com.appboy.ui.support.UriUtils>;
					public static isActivityRegisteredInManifest(param0: globalAndroid.content.Context, param1: string): boolean;
					public constructor();
					public static getMainActivityIntent(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): globalAndroid.content.Intent;
					public static getQueryParameters(param0: globalAndroid.net.Uri): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module support {
				export class ViewUtils {
					public static class: java.lang.Class<com.appboy.ui.support.ViewUtils>;
					public static convertDpToPixels(param0: globalAndroid.content.Context, param1: number): number;
					public static setActivityRequestedOrientation(param0: globalAndroid.app.Activity, param1: number): void;
					public static isCurrentOrientationValid(param0: number, param1: com.appboy.enums.inappmessage.Orientation): boolean;
					public static getMaxSafeTopInset(param0: globalAndroid.support.v4.view.WindowInsetsCompat): number;
					public static setFocusableInTouchModeAndRequestFocus(param0: globalAndroid.view.View): void;
					public static getMaxSafeBottomInset(param0: globalAndroid.support.v4.view.WindowInsetsCompat): number;
					public static isDeviceInNightMode(param0: globalAndroid.content.Context): boolean;
					public static getMaxSafeRightInset(param0: globalAndroid.support.v4.view.WindowInsetsCompat): number;
					public static removeViewFromParent(param0: globalAndroid.view.View): void;
					public static getDisplayHeight(param0: globalAndroid.app.Activity): number;
					public static isRunningOnTablet(param0: globalAndroid.app.Activity): boolean;
					public static setHeightOnViewLayoutParams(param0: globalAndroid.view.View, param1: number): void;
					public constructor();
					public static getMaxSafeLeftInset(param0: globalAndroid.support.v4.view.WindowInsetsCompat): number;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module widget {
				export class BannerImageCardView extends com.appboy.ui.feed.view.BaseFeedCardView<com.appboy.models.cards.BannerImageCard> {
					public static class: java.lang.Class<com.appboy.ui.widget.BannerImageCardView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.BannerImageCard);
					public onSetCard(param0: any): void;
					public getLayoutResource(): number;
					public onSetCard(param0: com.appboy.models.cards.BannerImageCard): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module widget {
				export abstract class BaseCardView<T>  extends globalAndroid.widget.RelativeLayout {
					public static class: java.lang.Class<com.appboy.ui.widget.BaseCardView<any>>;
					public mContext: globalAndroid.content.Context;
					public mCard: any;
					public mImageSwitcher: com.appboy.ui.feed.AppboyImageSwitcher;
					public mAppboyConfigurationProvider: com.appboy.configuration.AppboyConfigurationProvider;
					public constructor(param0: globalAndroid.content.Context);
					public isClickHandled(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction): boolean;
					public static getUriActionForCard(param0: com.appboy.models.cards.Card): com.appboy.ui.actions.UriAction;
					public setOptionalTextView(param0: globalAndroid.widget.TextView, param1: string): void;
					public setCardViewedIndicator(param0: com.appboy.ui.feed.AppboyImageSwitcher, param1: com.appboy.models.cards.Card): void;
					public handleCardClick(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card, param2: com.appboy.ui.actions.IAction, param3: string): void;
					public getClassLogTag(): string;
					public isUnreadIndicatorEnabled(): boolean;
					public setImageViewToUrl(param0: globalAndroid.widget.ImageView, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module widget {
				export class CaptionedImageCardView extends com.appboy.ui.feed.view.BaseFeedCardView<com.appboy.models.cards.CaptionedImageCard> {
					public static class: java.lang.Class<com.appboy.ui.widget.CaptionedImageCardView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.CaptionedImageCard);
					public onSetCard(param0: com.appboy.models.cards.CaptionedImageCard): void;
					public onSetCard(param0: any): void;
					public getLayoutResource(): number;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module widget {
				export class DefaultCardView extends com.appboy.ui.feed.view.BaseFeedCardView<com.appboy.models.cards.Card> {
					public static class: java.lang.Class<com.appboy.ui.widget.DefaultCardView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.Card);
					public onSetCard(param0: com.appboy.models.cards.Card): void;
					public onSetCard(param0: any): void;
					public getLayoutResource(): number;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module widget {
				export class ShortNewsCardView extends com.appboy.ui.feed.view.BaseFeedCardView<com.appboy.models.cards.ShortNewsCard> {
					public static class: java.lang.Class<com.appboy.ui.widget.ShortNewsCardView>;
					public constructor(param0: globalAndroid.content.Context);
					public onSetCard(param0: com.appboy.models.cards.ShortNewsCard): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.ShortNewsCard);
					public onSetCard(param0: any): void;
					public getLayoutResource(): number;
				}
			}
		}
	}
}

declare module com {
	export module appboy {
		export module ui {
			export module widget {
				export class TextAnnouncementCardView extends com.appboy.ui.feed.view.BaseFeedCardView<com.appboy.models.cards.TextAnnouncementCard> {
					public static class: java.lang.Class<com.appboy.ui.widget.TextAnnouncementCardView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: com.appboy.models.cards.TextAnnouncementCard);
					public onSetCard(param0: any): void;
					public onSetCard(param0: com.appboy.models.cards.TextAnnouncementCard): void;
					public getLayoutResource(): number;
				}
			}
		}
	}
}

//Generics information:
//com.appboy.ui.contentcards.view.BaseContentCardView:1
//com.appboy.ui.feed.view.BaseFeedCardView:1
//com.appboy.ui.widget.BaseCardView:1

