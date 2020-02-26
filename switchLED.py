#5630300474
#5830300494
#5930300267

import time
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

#input
switch_pin = 2
ec_sensor_pin = 3
ph_sensor_pin = 4
#output
pump_water_loop_pin = 0
pump_water_tank_pin = 5
mix_water_pin = 6
valve_A_pin = 13
valve_B_pin= 19
valve_Acid_pin = 26
led_pin = 14

GPIO.setup(switch_pin,GPIO.IN, pull_up_down=GPIO.PUD_UP) 
GPIO.setup(ec_sensor_pin,GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(ph_sensor_pin,GPIO.IN, pull_up_down=GPIO.PUD_UP)

GPIO.setup(pump_water_loop_pin,GPIO.OUT)
GPIO.setup(pump_water_tank_pin,GPIO.OUT)
GPIO.setup(mix_water_pin,GPIO.OUT)
GPIO.setup(valve_A_pin,GPIO.OUT)
GPIO.setup(valve_B_pin,GPIO.OUT)
GPIO.setup(valve_Acid_pin,GPIO.OUT) 
GPIO.setup(led_pin,GPIO.OUT)

#preset relay active low "OFF"
GPIO.output(pump_water_loop_pin,GPIO.HIGH)
GPIO.output(pump_water_tank_pin,GPIO.HIGH)
GPIO.output(mix_water_pin,GPIO.HIGH)
GPIO.output(valve_A_pin,GPIO.HIGH)
GPIO.output(valve_B_pin,GPIO.HIGH)
GPIO.output(valve_Acid_pin,GPIO.HIGH)

pump_water_loop_status = "OFF"
pump_water_tank_status = "OFF"
mix_water_status = "OFF"
valve_A_status = "OFF"
valve_B_status = "OFF"
valve_Acid_status = "OFF"
led_status = "OFF"

switch_status = "OFF"
ec_sensor_status = "OFF"
ph_sensor_status = "OFF"

mqtt_pump_water_loop_status = "OFF"
mqtt_pump_water_tank_status = "OFF"
mqtt_mix_water_status = "OFF"
mqtt_valve_A_status = "OFF"
mqtt_valve_B_status = "OFF"
mqtt_valve_Acid_status = "OFF"
mqtt_switch_status = "OFF"
mqtt_led_status = "OFF"

def on_message(client, userdata, message):
	#set value from mqtt subscribe
	global mqtt_pump_water_loop_status, mqtt_pump_water_tank_status, mqtt_mix_water_status, mqtt_valve_A_status, mqtt_valve_B_status, mqtt_valve_Acid_status, mqtt_switch_status, mqtt_led_status

	topic = str(message.topic)
	data = str(message.payload.decode("utf-8"))
	data = data.rstrip()
	print("Topic/message",topic,data)

	#topic pw
	if topic == "mqtt_pump_water_loop_status":
		mqtt_pump_water_loop_status = data
	elif topic == "mqtt_pump_water_tank_status":
		mqtt_pump_water_tank_status = data
	elif topic == "mqtt_mix_water_status":
		mqtt_mix_water_status = data
	elif topic == "mqtt_valve_A_status":
		mqtt_valve_A_status = data
	elif topic == "mqtt_vale_B_status":
		mqtt_valve_B_status = data
	elif topic == "mqtt_vale_Acid_status":
		mqtt_valve_Acid_status = data
	elif topic == "mqtt_switch_status":
		mqtt_switch_status = data		
	elif topic == "mqtt_led_status":
		mqtt_led_status = data

mqtt_server = "hairdresser.cloudmqtt.com"
mqtt_port = "15847"
mqtt_user = "uwzbsztw"
mqtt_password = "Vv2syCm0pNyU"

client = mqtt.Client()
client.username_pw_set(username=mqtt_user,password=mqtt_password)
client.connect(mqtt_server,mqtt_port)
#subscribe
client.subscribe([("mqtt_pump_water_loop_status",0),("mqtt_pump_water_tank_status",0),
	("mqtt_mix_water_status",0),("mqtt_vale_A_status",0),("mtqq_vale_B_status",0),
	("mqtt_vale_Acid_status",0),("mqtt_switch_status",0),("mqtt_led_status",0)])
client.on_message=on_message
client.loop_start() 


while True:
    #read input pin (pull up)
	switch_value = GPIO.input(switch_pin)
	ec_sensor_value = GPIO.input(ec_sensor_pin)
	ph_sensor_value = GPIO.input(ph_sensor_pin)
	
	if switch_value == False:
		switch_status = "ON"
	elif switch_value == True:
		switch_status =  "OFF" 

	if ec_sensor_value == False:
		ec_sensor_status = "ON"
	elif ec_sensor_value == True:
		ec_sensor_status = "OFF"

	if ph_sensor_value == False:
		ph_sensor_status = "ON"
	elif ph_sensor_value == True:
		ph_sensor_status = "OFF"
     
        
	#LED control
	if switch_status == "ON" or mqtt_switch_status == "ON":
        	GPIO.output(led_pin,GPIO.HIGH) 
		if led_status == "OFF":
			led_status = "ON"
			#publish
			client.publish("pi_led_status", "ON")
			print("Led_ON")
   	elif switch_status == "OFF" or mqtt_switch_status == "OFF":
    	    	GPIO.output(led_pin,GPIO.LOW)
		if led_status =="ON":
			led_status = "OFF"
			#publish
			client.publish("pi_led_status", "OFF")
			print("Led_OFF")
	
	#relay active low
	if mqtt_pump_water_loop_status == "ON":
		GPIO.output(pump_water_loop_pin,GPIO.LOW)
		pump_water_loop_status = "ON"
	elif mqtt_pump_water_loop_status == "OFF":
		GPIO.output(pump_water_loop_pin,GPIO.HIGH)
		pump_water_loop_status = "OFF"

	if mqtt_pump_water_tank_status == "ON":
		GPIO.output(pump_water_tank_pin,GPIO.LOW)
		pump_water_tank_status = "ON"
	elif mqtt_pump_water_tank_status == "OFF":
		GPIO.output(pump_water_tank_pin,GPIO.HIGH)
		pump_water_tank_status = "OFF"
	
	if mqtt_mix_water_status == "ON":
		GPIO.output(mix_water_pin,GPIO.LOW)
		mix_water_status = "ON"
	elif mqtt_mix_water_status == "OFF":
		GPIO.output(mix_water_pin,GPIO.HIGH)
		mix_water_status = "OFF"

	if mqtt_valve_A_status == "ON":
		GPIO.output(valve_A_pin.GPIO.LOW)
		valve_A_status = "ON"
	elif mqtt_valve_A_status == "OFF":
		GPIO.output(valve_A_pin,GPIO.HIGH)
		valve_A_status = "OFF"

	if mqtt_valve_B_status == "ON":
		GPIO.output(valve_B_pin,GPIO.LOW)
		valve_B_status = "ON"
	elif mqtt_valve_B_status == "OFF":
		GPIO.output(valve_B_pin,GPIO.HIGH)

	if mqtt_valve_Acid_status == "ON":
		GPIO.output(valve_Acid_pin,GPIO.LOW)
		valve_Acid_status = "ON"
	elif mqtt_valve_Acid_status == "OFF":
		GPIO.output(valve_Acid_pin,GPIO.HIGH)
