package com.socialtrack;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import android.content.Intent;
import android.provider.AlarmClock;
import java.util.Calendar;
import com.facebook.react.bridge.Callback;

public class CustomHelperModule extends ReactContextBaseJavaModule {
    CustomHelperModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "CustomHelperModule";
    }
    @ReactMethod
    public void createCalendarEvent(String name, String appId, String url, Callback successCallback, Callback errorCallback) {
        try {
            Calendar calendar = Calendar.getInstance();
            int hour12hrs = calendar.get(Calendar.HOUR_OF_DAY);
            int minutes = calendar.get(Calendar.MINUTE);
            Log.d("CalendarModule", "Create event called with name: " + name);
            Intent i = new Intent(AlarmClock.ACTION_SET_ALARM);
            i.putExtra(AlarmClock.EXTRA_MESSAGE, "Let's go for a screen break. Please stop using " + name);
            i.putExtra(AlarmClock.EXTRA_HOUR, hour12hrs);
            i.putExtra(AlarmClock.EXTRA_MINUTES, minutes + 5);
            i.putExtra(AlarmClock.EXTRA_SKIP_UI, true);
            i.putExtra(AlarmClock.EXTRA_IS_PM, false);
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivity(i);
            Log.d("customalarmModule", "alarm set successfully " + name);
            successCallback.invoke("success", appId, url);
        }catch(Exception e){
            errorCallback.invoke(e.toString());
            System.out.println("Unable to set alarm");
        }
    }
    @ReactMethod
    public void openCustomApp(String packageName) {
        try{
            Intent intent = getReactApplicationContext().getPackageManager().getLaunchIntentForPackage(packageName);
            //intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivity(intent);
        }catch(Exception e) {
            System.out.println("Unable to open the requested app");
        }
    }
}
