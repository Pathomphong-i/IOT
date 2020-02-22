#5630300474
#5830300494
#5930300267
#TEST
import time
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(14,GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(15,GPIO.OUT)

GPIO.setup(2,GPIO.IN, pull_up_down=GPIO.PUD_UP) #Acide input

GPIO.setup(23,GPIO.IN, pull_up_down=GPIO.PUD_UP) #Pull Water input
GPIO.setup(3,GPIO.OUT) #Pull Water Output

GPIO.setup(24,GPIO.IN, pull_up_down=GPIO.PUD_UP) #EC input
GPIO.setup(4,GPIO.OUT) #EC Output

acidMoniter_status = "OFF"
acid_status = "0"

led_status = "OFF"
sw_status = "0"
mqtt_status = "0"

pwMoniter_status = "OFF"
mqtt_pw = "0"
pw_status = "0"

ecMoniter_status = "OFF"
mqtt_ec = "0"
ec_status = "0"

def on_message(client, userdata, message):
	#set mqtt_status
	global mqtt_status
	global mqtt_pw
	global mqtt_ec
	
	topic = str(message.topic)
	data = str(message.payload.decode("utf-8"))
	data = data.rstrip()

        #topic pw
        if topic == "mqtt_pw" and data == "1":
                pw_status = "1"
        elif topic == "mqtt_pw" and data == "0":
                pw_status = "0"
        #topic EC
        if topic == "mqtt_ec" and data == "1":
                ec_status = "1"
        elif topic == "mqtt_ec" and data == "0":
                ec_status = "0"
                
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
client.subscribe("mqtt_pw",0)
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
        #acid_status = GPIO.input(2)
	#if acid_status == False:
	#	client.publish("acidMoniter_status", "ON")
		
    	#elif acid_status == True:		
	#	client.publish("acidMoniter_status", "OFF")
		
        
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
        pw_state = GPIO.input(23)
        if pw_status == "1" or pw_state == True:
        	GPIO.output(3,GPIO.HIGH) 
		if pwMoniter_status == "OFF":
			pwMoniter_status = "ON"
			#publish
			client.publish("pwMoniter_status", "ON")
			print("ON")
        elif pw_status == "0" or pw_state == False:
    	    	GPIO.output(3,GPIO.LOW)
		if pwMoniter_status =="ON":
			pwMoniter_status = "OFF"
			#publish
			client.publish("pwMoniter_status", "OFF")
			print("OFF")
        #EC
        ec_state = GPIO.input(24)
        if ec_status == "1" or ec_state == True:
        	GPIO.output(4,GPIO.HIGH) 
		if ecMoniter_status == "OFF":
			ecMoniter_status = "ON"
			#publish
			client.publish("ecMoniter_status", "ON")
			print("ON")
        elif ec_status == "0" or ec_state == False:
    	    	GPIO.output(4,GPIO.LOW)
		if ecMoniter_status =="ON":
			ecMoniter_status = "OFF"
			#publish
			client.publish("ecMoniter_status", "OFF")
			print("OFF")
	
