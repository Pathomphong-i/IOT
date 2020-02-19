#5930300267
#5630300474
import time
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(14,GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(15,GPIO.OUT)

led_status = "OFF"
sw_status = "0"
mqtt_status = "0"

def on_message(client, userdata, message):
	#set mqtt_status
	global mqtt_status
	topic = str(message.topic)
	data = str(message.payload.decode("utf-8"))
	#print(topic,data)
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
	
