import time 
import Adafruit_ADS1x15 

adc = Adafruit_ADS1x15.ADS1115() 

GAIN =1

while True:
      adc_chanal = 0
      adc_values = adc.read_adc(adc_chanal,gain=GAIN)
      #0v 4640 3.3 5040  3.3/dif
      volt = (adc_values - 4640)*(3.3/(5040-4640))
      print(adc_values)
      print("volt = %.2f" %(volt))
