import RPi.GPIO as GPIO
import socket
import time
import paho.mqtt.client as mqtt
import Adafruit_ADS1x15

adc=Adafruit_ADS1x15.ADS1115()
GAIN =1
while 1:
      
      adc_values = adc.read_adc(0,gain=GAIN)
      volt = adc_values * 0.000125
      print("volt =",volt)
