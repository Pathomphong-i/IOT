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


GPIO.output(pump_water_loop_pin,GPIO.LOW)
GPIO.output(pump_water_tank_pin,GPIO.LOW)
GPIO.output(mix_water_pin,GPIO.LOW)
GPIO.output(valve_A_pin,GPIO.LOW)
GPIO.output(valve_B_pin,GPIO.LOW)
GPIO.output(valve_Acid_pin,GPIO.LOW)
