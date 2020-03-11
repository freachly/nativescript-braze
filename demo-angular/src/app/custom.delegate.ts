import { ios } from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import { Braze } from 'nativescript-braze';

if (ios) {
    class IOSDelegate extends UIResponder implements UIApplicationDelegate, UNUserNotificationCenterDelegate {
        public static ObjCProtocols = [UIApplicationDelegate, UNUserNotificationCenterDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            const brazeAppboyOptions = {
                [ABKSessionTimeoutKey]: '60',
                [ABKEndpointKey]: 'sdk.fra-01.braze.eu'
            };

            const apiKey = '';

            Braze.getInstance().startUp(apiKey, application, launchOptions, brazeAppboyOptions);

            const center = UNUserNotificationCenter.currentNotificationCenter();
            center.setNotificationCategories(ABKPushUtils.getAppboyUNNotificationCategorySet());
            center.requestAuthorizationWithOptionsCompletionHandler(UNAuthorizationOptions.Alert | UNAuthorizationOptions.Badge | UNAuthorizationOptions.Sound, (granted: boolean, error: NSError) => {
                if (!error) {
                    utils.executeOnMainThread(() => {
                        Braze.getInstance().appboy.pushAuthorizationFromUserNotificationCenter(granted);
                        application.registerForRemoteNotifications();
                    });
                    return granted;
                }
            });

            // TODO: Handle Older IOS versions

            return true;
        };

        applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError) {
            console.log('applicationDidFailToRegisterForRemoteNotificationsWithError: ', error)
        }

        applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void {
            Braze.getInstance().appboy.registerApplicationDidReceiveRemoteNotification(application, userInfo);
        }

        userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void) {
            Braze.getInstance().appboy.userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center, response, completionHandler);
        }

        userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void) {
            completionHandler(UNNotificationPresentationOptions.Alert | UNNotificationPresentationOptions.Sound)
        }

        applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void {
            Braze.getInstance().appboy.registerDeviceToken(deviceToken);
        }
    }

    ios.delegate = IOSDelegate;
}
