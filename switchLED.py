#5630300474
#5830300494
#5930300267
#testbranch

import time
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(14,GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(2,GPIO.IN, pull_up_down=GPIO.PUD_UP) #Acide input
GPIO.setup(15,GPIO.OUT)
GPIO.setup(3,GPIO.OUT) #Pull Water Output
GPIO.setup(4,GPIO.OUT) #EC Output

AcidMoniter_status = "OFF"
led_status = "OFF"
sw_status = "0"
mqtt_status = "0"
Acid_status = "0"
pw_status = "0"
pwMoniter_status = "OFF"
ec_status = "0"
ecMoniter_status = "OFF"

def on_message(client, userdata, message):
	#set mqtt_status
	global mqtt_status
	topic = str(message.topic)
	data = str(message.payload.decode("utf-8"))
	data = data.rstrip()
    
    
	print("ToP/Mes",topic,data)
	if topic == "mqtt_status" and data == "1":
		mqtt_status = "1"
	elif topic == "mqtt_status" and data == "0":
		mqtt_status = "0"

mqtt_server = "hairdresser.cloudmqtt.com"
mqtt_port = "15847"
mqtt_user = "uwzbsztw"
mqtt_password = "Vv2syCm0pNyU"

client = mqtt.Client()
client.username_pw_set(username=mqtt_user,password=mqtt_password)
client.connect(mqtt_server,mqtt_port)
#subscribe
client.subscribe("mqtt_status",0)
client.on_message=on_message
client.loop_start() 


while True:
        #read switch 
	state = GPIO.input(14)
	if state == False:
		sw_status = "1"
		
    	elif state == True:
                sw_status =  "0"

        #Read Acid
        state_Acid = GPIO.input(2)
	if state_Acid == False:
		client.publish("AcidMoniter_status", "ON")
		
    	elif state_Acid == True:		
		client.publish("AcidMoniter_status", "OFF")
		
        
	#LED control
	if sw_status == "1" or mqtt_status == "1":
        	GPIO.output(15,GPIO.HIGH) 
		if led_status == "OFF":
			led_status = "ON"
			#publish
			client.publish("led_status", "ON")
			print("ON")
   	elif sw_status == "0" or mqtt_status == "0":
    	    	GPIO.output(15,GPIO.LOW)
		if led_status =="ON":
			led_status = "OFF"
			#publish
			client.publish("led_status", "OFF")
			print("OFF")
        #PullWater
        if pw_status == "1" or mqtt_status == "1":
        	GPIO.output(3,GPIO.HIGH) 
		if pwMoniter_status == "OFF":
			pwMoniter_status = "ON"
			#publish
			client.publish("pwMoniter_status", "ON")
			print("ON")
        elif pw_status == "0" or mqtt_status == "0":
    	    	GPIO.output(3,GPIO.LOW)
		if pwMoniter_status =="ON":
			pwMoniter_status = "OFF"
			#publish
			client.publish("pwMoniter_status", "OFF")
			print("OFF")
        #EC
        if ec_status == "1" or mqtt_status == "1":
        	GPIO.output(4,GPIO.HIGH) 
		if ecMoniter_status == "OFF":
			ecMoniter_status = "ON"
			#publish
			client.publish("ecMoniter_status", "ON")
			print("ON")
        elif ec_status == "0" or mqtt_status == "0":
    	    	GPIO.output(4,GPIO.LOW)
		if ecMoniter_status =="ON":
			ecMoniter_status = "OFF"
			#publish
			client.publish("ecMoniter_status", "OFF")
			print("OFF")
	
