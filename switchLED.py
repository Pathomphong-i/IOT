#5630300474
#5830300494
#5930300267

import time
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt
import Adafruit_ADS1x15 
import math

adc = Adafruit_ADS1x15.ADS1115() 
GAIN =1


GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

#input pin
switch_pin = 15
#output pin
pump_water_loop_pin = 0
pump_water_tank_pin = 5
mix_water_pin = 6
valve_A_pin = 13
valve_B_pin= 19
valve_Acid_pin = 26
led_pin = 14

#input setup pin
GPIO.setup(switch_pin,GPIO.IN, pull_up_down=GPIO.PUD_UP) 
#output setup pin
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

#set text input
pi_switch_status = "OFF"
pi_ec_sensor_status = 0
pi_ph_sensor_status = 0
#set text output
pi_pump_water_loop_status = "ON"
pi_pump_water_tank_status = "OFF"
pi_mix_water_status = "OFF"
pi_valve_A_status = "OFF"
pi_valve_B_status = "OFF"
pi_valve_Acid_status = "OFF"
pi_led_status = "OFF"

#set text mqtt sub for control
mqtt_pump_water_loop_status = "ON"
mqtt_pump_water_tank_status = "OFF"
mqtt_mix_water_status = "OFF"
mqtt_valve_A_status = "OFF"
mqtt_valve_B_status = "OFF"
mqtt_valve_Acid_status = "OFF"
mqtt_switch_status = "OFF"

def on_message(client, userdata, message):
	#set value from mqtt subscribe
	global mqtt_pump_water_loop_status, mqtt_pump_water_tank_status, mqtt_mix_water_status, mqtt_valve_A_status, mqtt_valve_B_status, mqtt_valve_Acid_status, mqtt_switch_status

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
	elif topic == "mqtt_valve_B_status":
		mqtt_valve_B_status = data
	elif topic == "mqtt_valve_Acid_status":
		mqtt_valve_Acid_status = data
	elif topic == "mqtt_switch_status":
		mqtt_switch_status = data		

#mqtt env
mqtt_server = "hairdresser.cloudmqtt.com"
mqtt_port = "xxx"
mqtt_user = "xxx"
mqtt_password = "xxx"
#mqtt connect
client = mqtt.Client()
client.username_pw_set(username=mqtt_user,password=mqtt_password)
client.connect(mqtt_server,mqtt_port)
#subscribe
client.subscribe([("mqtt_pump_water_loop_status",0),("mqtt_pump_water_tank_status",0),
	("mqtt_mix_water_status",0),("mqtt_valve_A_status",0),("mqtt_valve_B_status",0),
	("mqtt_valve_Acid_status",0),("mqtt_switch_status",0)])
client.on_message=on_message
client.loop_start() 

ph_old = 0
ec_old = 0
#main
while True:
	#LED control
	switch_value = GPIO.input(switch_pin) #read switch
	print("sw",switch_value)
	if switch_value == False:
		pi_switch_status = "ON"
	elif switch_value == True:
		pi_switch_status =  "OFF" 

	if pi_switch_status == "ON" or mqtt_switch_status == "ON":
		GPIO.output(led_pin,GPIO.HIGH) 
		if pi_led_status == "OFF":
			pi_led_status = "ON"
			client.publish("pi_led_status", "ON")
			print("Led_ON")
	elif pi_switch_status == "OFF" or mqtt_switch_status == "OFF":
		GPIO.output(led_pin,GPIO.LOW)
		if pi_led_status =="ON":
			pi_led_status = "OFF"
			client.publish("pi_led_status", "OFF")
			print("Led_OFF")
	
	#pump water loop
	if mqtt_pump_water_loop_status == "ON":
		GPIO.output(pump_water_loop_pin,GPIO.HIGH)
		if pi_pump_water_loop_status == "OFF":
			pi_pump_water_loop_status = "ON"
			client.publish("pi_pump_water_loop_status", "ON")
			print("water_loop_ON")
	elif mqtt_pump_water_loop_status == "OFF":
		GPIO.output(pump_water_loop_pin,GPIO.LOW)
		if pi_pump_water_loop_status == "ON":
			pi_pump_water_loop_status = "OFF"
			client.publish("pi_pump_water_loop_status", "OFF")
			print("water_loop_OFF")
	#pump water tank
	if mqtt_pump_water_tank_status == "ON":
		GPIO.output(pump_water_tank_pin,GPIO.LOW)
		if pi_pump_water_tank_status == "OFF":
			pi_pump_water_tank_status = "ON"
			client.publish("pi_pump_water_tank_status", "ON")
			print("water_tank_ON")
	elif mqtt_pump_water_tank_status == "OFF":
		GPIO.output(pump_water_tank_pin,GPIO.HIGH)
		if pi_pump_water_tank_status == "ON":
			pi_pump_water_tank_status = "OFF"
			client.publish("pi_pump_water_tank_status", "OFF")
			print("water_tank_OFF")
	#mix water
	if mqtt_mix_water_status == "ON":
		GPIO.output(mix_water_pin,GPIO.LOW)
		if pi_mix_water_status == "OFF":
			pi_mix_water_status = "ON"
			client.publish("pi_mix_water_status", "ON")
			print("mix_water_ON")
	elif mqtt_mix_water_status == "OFF":
		GPIO.output(mix_water_pin,GPIO.HIGH)
		if pi_mix_water_status == "ON":
			pi_mix_water_status = "OFF"
			client.publish("pi_mix_water_status", "OFF")
			print("mix_water_OFF")
	#valve A
	if mqtt_valve_A_status == "ON":
		GPIO.output(valve_A_pin,GPIO.LOW)
		if pi_valve_A_status == "OFF":
			pi_valve_A_status = "ON"
			client.publish("pi_valve_A_status", "ON")
			print("A_ON")
	elif mqtt_valve_A_status == "OFF":
		GPIO.output(valve_A_pin,GPIO.HIGH)
		if pi_valve_A_status == "ON":
			pi_valve_A_status = "OFF"
			client.publish("pi_valve_A_status", "OFF")
			print("A_OFF")
	#valve B
	if mqtt_valve_B_status == "ON":
		GPIO.output(valve_B_pin,GPIO.LOW)
		if pi_valve_B_status == "OFF":
			pi_valve_B_status = "ON"
			client.publish("pi_valve_B_status", "ON")
			print("B_ON")
	elif mqtt_valve_B_status == "OFF":
		GPIO.output(valve_B_pin,GPIO.HIGH)
		if pi_valve_B_status == "ON":
			pi_valve_B_status = "OFF"
			client.publish("pi_valve_B_status", "OFF")
			print("B_OFF")
	#valve acid
	if mqtt_valve_Acid_status == "ON":
		GPIO.output(valve_Acid_pin,GPIO.LOW)
		if pi_valve_Acid_status == "OFF":
			pi_valve_Acid_status = "ON"
			client.publish("pi_valve_Acid_status", "ON")
			print("Acid_ON")
	elif mqtt_valve_Acid_status == "OFF":
		GPIO.output(valve_Acid_pin,GPIO.HIGH)
		if pi_valve_Acid_status == "ON":
			pi_valve_Acid_status = "OFF"
			client.publish("pi_valve_Acid_status", "OFF")
			print("Acid_OFF")
	#ec
	ec_adc_chanal = 0
	ec_adc_values = adc.read_adc(ec_adc_chanal,gain=GAIN)
		#0v 4640 3.3 5040  3.3/dif
	# ec_volt = (ec_adc_values - 4640)*(3.3/(5040-4640))
	# ec_new_volt = math.ceil(ec_volt*100)/100
	# client.publish("pi_ec_sensor_status", ec_new_volt)
	# print("ec_volt = %.2f" %(ec_volt))
	if ec_adc_values != ec_old:
		client.publish("pi_ec_sensor_status",ec_adc_values)
		ec_old = ec_adc_values	
		print("eh_value =",ec_adc_values)

	#ph
	ph_adc_chanal = 1
	ph_adc_values = adc.read_adc(ph_adc_chanal,gain=GAIN)
		#0v 4640 3.3 5040  3.3/dif
	# ph_volt = (ph_adc_values - 4640)*(3.3/(5040-4640))
	# ph_new_volt = math.ceil(ph_volt*100)/100
	# client.publish("pi_ph_sensor_status", ph_new_volt)
	# print("ph_volt = %.2f" %(ph_volt))
	if ph_adc_values != ph_old:
		client.publish("pi_ph_sensor_status",ph_adc_values)
		ph_old = ph_adc_values
		print("ph_value =", ph_adc_values)

	time.sleep(1)
