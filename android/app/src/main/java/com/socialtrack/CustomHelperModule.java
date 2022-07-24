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

public class CustomHelperModule extends ReactContextBaseJavaModule {
    CustomHelperModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "CustomHelperModule";
    }
    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Calendar calendar = Calendar.getInstance();
        int hour12hrs = calendar.get(Calendar.HOUR_OF_DAY);
        int minutes = calendar.get(Calendar.MINUTE);
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
        Intent i = new Intent(AlarmClock.ACTION_SET_ALARM);
        i.putExtra(AlarmClock.EXTRA_MESSAGE, "Its time to close the facebook app");
        i.putExtra(AlarmClock.EXTRA_HOUR, hour12hrs);
        i.putExtra(AlarmClock.EXTRA_MINUTES, minutes + 5);
        i.putExtra(AlarmClock.EXTRA_SKIP_UI, true);
        i.putExtra(AlarmClock.EXTRA_IS_PM, false);
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(i);
        Log.d("NARIalarmModule", "alarm new " + name
                + " and location: " + location);
    }
}
