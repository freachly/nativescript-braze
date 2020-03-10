import { android as androidApp } from "tns-core-modules/application";

const AppboyLifecycleCallbackListener = com.appboy.AppboyLifecycleCallbackListener;
const FirebaseApp = (com.google as any).firebase.FirebaseApp;

@JavaProxy("org.nativescript.brazedemoangular")
class Application extends android.app.Application {
    public onCreate(): void {
        super.onCreate();

        FirebaseApp.initializeApp(this);

        this.registerActivityLifecycleCallbacks(new AppboyLifecycleCallbackListener() as any);
    }
}

