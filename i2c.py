import RPi.GPIO as GPIO
import socket
import time
import paho.mqtt.client as mqtt
import Adafruit_ADS1x15

adc=Adafruit_ADS1x15.ADS1115()
GAIN =1
adc_chanal = 0
while True:
      
      adc_values = adc.read_adc(adc_chanal,gain=GAIN)
      volt = adc_values * 0.000125
      print("volt =",volt)
