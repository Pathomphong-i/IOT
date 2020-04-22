<template>
  <div class="topic">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="topics in topic" :key="topics.name">
          <v-card
          :elevation="2" 
          flat 
          class="text-xs-center ma-3" >
            <v-responsive class="pt-4">
              <div class="text-center">{{ topics.name }}</div>              
              <div class="ma-5 mr-90" v-if="topics.name === 'Pump Loop'">
                  <v-icon v-if = "status_pump_loop === 'OFF'" size=100 class="mr-8">fas fa-cogs</v-icon>
                  <v-icon v-if = "status_pump_loop === 'ON'" size=100 class="mr-8" color="green">fas fa-cogs</v-icon>
                  <v-btn color="green white--text" value="ON" class="ml-11 mt-5" @click="contoller_pump_loop('ON')">ON</v-btn>
                  <v-btn color="red white--text" value="OFF" class="ml-11 mt-5" @click="contoller_pump_loop('OFF')">OFF</v-btn>
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'Pump Tank'">
                  <v-icon v-if = "status_pump_tank === 'OFF'" size=100 class="mr-8">fas fa-cogs</v-icon>
                  <v-icon v-if = "status_pump_tank === 'ON'" size=100 class="mr-8" color="green">fas fa-cogs</v-icon>
                  <v-btn color="green white--text" value="ON" class="ml-11 mt-5" @click="contoller_pump_tank('ON')">ON</v-btn>
                  <v-btn color="red white--text" value="OFF" class="ml-11 mt-5" @click="contoller_pump_tank('OFF')">OFF</v-btn>
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'Vortex Mixer'">
                  <v-icon v-if = "status_vortex === 'OFF'" size=100 class="mr-8">fas fa-fan</v-icon>
                  <v-icon v-if = "status_vortex === 'ON'" size=100 class="mr-8" color="green">fas fa-fan</v-icon>
                  <v-btn color="green white--text" value="ON" class="ml-11 mt-5" @click="contoller_vortex('ON')">ON</v-btn>
                  <v-btn color="red white--text" value="OFF" class="ml-11 mt-5" @click="contoller_vortex('OFF')">OFF</v-btn>
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'Valve Substance A'">
                  <v-icon v-if = "status_sub_a === 'OFF'" size=100 class="mr-12">fas fa-faucet</v-icon>
                  <v-icon v-if = "status_sub_a === 'ON'" size=100 class="mr-12" color="green">fas fa-faucet</v-icon>
                  <v-btn color="green white--text" value="ON" class="ml-12 mt-5" @click="contoller_sub_a('ON')">ON</v-btn>
                  <v-btn color="red white--text" value="ON" class="ml-11 mt-5" @click="contoller_sub_a('OFF')">OFF</v-btn>
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'Valve Substance B'">
                  <v-icon v-if = "status_sub_b === 'OFF'" size=100 class="mr-12">fas fa-faucet</v-icon>
                  <v-icon v-if = "status_sub_b === 'ON'" size=100 class="mr-12" color="green">fas fa-faucet</v-icon>
                  <v-btn color="green white--text" value="ON" class="ml-12 mt-5" @click="contoller_sub_b('ON')">ON</v-btn>
                  <v-btn color="red white--text" value="ON" class="ml-11 mt-5" @click="contoller_sub_b('OFF')">OFF</v-btn>
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'Valve Substance Acids'">
                  <v-icon v-if = "status_sub_acid === 'OFF'" size=100 class="mr-12">fas fa-faucet</v-icon>
                  <v-icon v-if = "status_sub_acid === 'ON'" size=100 class="mr-12" color="green">fas fa-faucet</v-icon>
                  <v-btn color="green white--text" value="ON" class="ml-12 mt-5" @click="contoller_sub_acid('ON')">ON</v-btn>
                  <v-btn color="red white--text" value="ON" class="ml-11 mt-5" @click="contoller_sub_acid('OFF')">OFF</v-btn>
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'LED'">
                  <v-icon v-if = "status_led === 'OFF'" size=100 class="mr-12">fas fa-dot-circle</v-icon>
                  <v-icon v-if = "status_led === 'ON'" size=100 class="mr-12" color="green">fas fa-dot-circle</v-icon>
                  <v-btn color="green white--text" value="ON" class="ml-6 mt-5" @click="contoller_led('ON')">ON</v-btn>
                  <v-btn color="red white--text" value="ON" class="ml-11 mt-5" @click="contoller_led('OFF')">OFF</v-btn>
    
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'pH'">
                  <div class="text-center display-4 font-weight-bold">{{ value_ph }}</div>
              </div>
              <div class="ma-5 mr-90" v-else-if="topics.name === 'EC'">
                  <div class="text-center display-4 font-weight-bold">{{ value_ec }}</div>
              </div>
              
              </v-responsive>          
          <v-card-text>
            </v-card-text>
          </v-card>
          
        </v-flex>        
      </v-layout>
      <p class="display-3" >History</p>      
      <v-progress-linear
        value="100"
        height="2"
        color="grey lighten-2"
        class="mt-2"
      ></v-progress-linear>
      <v-select
        class="my-2"        
        :items="dropdown_history"
        v-model="select"
        item-text="text"
        item-value="select"
        label="Select History..."
        return-object
        v-on:change="changeHistory(`${select.select}`)"
      >
      </v-select>
      <div>
      <v-data-table
          v-if="select_history == 'pump_loop'"
          :headers="headers_valuePumpLoop"
          :items="history_valuePumpLoop"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'pump_tank'"
          :headers="headers_valuePumpTank"
          :items="history_valuePumpTank"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'vortex'"
          :headers="headers_valueVortex"
          :items="history_valueVortex"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'sub_a'"
          :headers="headers_valueSubA"
          :items="history_valueSubA"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'sub_b'"
          :headers="headers_valueSubB"
          :items="history_valueSubB"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'sub_acid'"
          :headers="headers_valueSubACID"
          :items="history_valueSubACID"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'led'"
          :headers="headers_valueLed"
          :items="history_valueLED"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'ph'"
          :headers="headers_valuePH"
          :items="history_valuePH"          
        >
      </v-data-table>
      <v-data-table
          v-if="select_history == 'ec'"
          :headers="headers_valueEC"
          :items="history_valueEC"          
        >
      </v-data-table>
      </div>
    </v-container>
  </div>
  
  
</template>

<script>
  // import ValuePHService from '../ValuePHService'
  import ValuePumpLoopService from '../ValuePumpLoopService'
  import ValuePumpTankService from '../ValuePumpTankService'
  import ValueVortexService from '../ValueVortexService'
  import ValueSubAService from '../ValueSubAService'
  import ValueSubBService from '../ValueSubBService'
  import ValueSubACIDService from '../ValueSubACIDService'
  import ValueLEDService from '../ValueLEDService'
  import ValuePHService from '../ValuePHService'
  import ValueECService from '../ValueECService'
  export default {
    name: 'DashBoard',
    data:() => {
      return {
        topic: [
          { name: 'Pump Loop', detail: 'water loop'},
          { name: 'Pump Tank', detail: 'tank to'},
          { name: 'Vortex Mixer', detail: 'water loop'},
          { name: 'Valve Substance A', detail: 'water loop'},
          { name: 'Valve Substance B', detail: 'water loop'},
          { name: 'Valve Substance Acids', detail: 'water loop'},
          { name: 'LED', datail: 'led'},
          { name: 'pH', datail: 'pH'},
          { name: 'EC', datail: 'ec'}

        ],
        status_pump_loop: 'OFF',
        status_pump_tank: "OFF",
        status_vortex: "OFF",
        status_sub_a: "OFF",
        status_sub_b: "OFF",
        status_sub_acid: "OFF",
        status_led: "OFF",
        value_ph: "50",
        value_ec: "100",
        history_valuePH: [],
        history_valuePumpLoop: [],
        history_valuePumpTank: [],
        history_valueVortex: [],
        history_valueSubA: [],
        history_valueSubB: [],
        history_valueSubACID: [],
        history_valueLED: [],
        history_valueEC: [],
        headers_valuePumpLoop: [    
          { text: 'Action' ,value:'status'},
          { text: 'Feedback Pump Loop' ,value:'status_pump'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valuePumpTank: [    
          { text: 'Action' ,value:'status'},
          { text: 'Feedback Pump Tank' ,value:'status_pump'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valueVortex: [    
          { text: 'Action' ,value:'status'},
          { text: 'Feedback Vortex Mixer' ,value:'status_pump'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valueSubA: [    
          { text: 'Action' ,value:'status'},
          { text: 'Feedback Valve Substance A' ,value:'status_pump'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valueSubB: [    
          { text: 'Action' ,value:'status'},
          { text: 'Feedback Valve Substance B' ,value:'status_pump'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valueSubACID: [    
          { text: 'Action' ,value:'status'},
          { text: 'Feedback Valve Substance Acids' ,value:'status_pump'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valueLed: [    
          { text: 'Action' ,value:'status'},
          { text: 'Feedback LED' ,value:'status_pump'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valuePH: [    
          { text: 'Value' ,value:'value'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        headers_valueEC: [    
          { text: 'Value' ,value:'value'},
          { text: 'Date' ,value:'createdAt'}        
        ],
        dropdown_history: [
          { text: 'Pump Loop', select: 'pump_loop' },
          { text: 'Pump Tank', select: 'pump_tank' },
          { text: 'Vortex Mixer', select: 'vortex' },
          { text: 'Valve Substance A', select: 'sub_a' },
          { text: 'Valve Substance B', select: 'sub_b' },
          { text: 'Valve Substance Acids', select: 'sub_acid' },
          { text: 'LED', select: 'led' },
          { text: 'pH', select: 'ph' },
          { text: 'EC', select: 'ec' },
        ],
        select: {text: 'Pump Loop', select: 'pump_loop'},
        select_history: "pump_loop",
        count_timePH: 0,
        count_timeEC: 0
      }
    },
     methods: {
      contoller_pump_loop(value){
        if(value == "ON"){
          this.$mqtt.publish('mqtt_pump_water_loop_status', 'ON')
        }else{
          this.$mqtt.publish('mqtt_pump_water_loop_status', 'OFF')
        }
      },
      contoller_pump_tank(value){
        if(value == "ON"){
          this.$mqtt.publish('mqtt_pump_water_tank_status', 'ON')
        }else{
          this.$mqtt.publish('mqtt_pump_water_tank_status', 'OFF')
        }
      },
      contoller_vortex(value){
        if(value == "ON"){
          this.$mqtt.publish('mqtt_mix_water_status', 'ON')
        }else{
          this.$mqtt.publish('mqtt_mix_water_status', 'OFF')
        }
      },
      contoller_sub_a(value){
        if(value == "ON"){
          this.$mqtt.publish('mqtt_valve_A_status', 'ON')
        }else{
          this.$mqtt.publish('mqtt_valve_A_status', 'OFF')
        }
      },
      contoller_sub_b(value){
        if(value == "ON"){
          this.$mqtt.publish('mqtt_valve_B_status', 'ON')
        }else{
          this.$mqtt.publish('mqtt_valve_B_status', 'OFF')
        }
      },
      contoller_sub_acid(value){
        if(value == "ON"){
          this.$mqtt.publish('mqtt_valve_Acid_status', 'ON')
        }else{
          this.$mqtt.publish('mqtt_valve_Acid_status', 'OFF')
        }
      },
      contoller_led(value){
        if(value == "ON"){
          this.$mqtt.publish('mqtt_switch_status', 'ON')
        }else{
          this.$mqtt.publish('mqtt_switch_status', 'OFF')
        }
      },
      async insert_valuePumpLoop(status,status_pump){
        await ValuePumpLoopService.insertValuePumpLoop(status,status_pump)
        this.history_valuePumpLoop = await ValuePumpLoopService.getValuePumpLoop()
      },
      async insert_valuePumpTank(status,status_pump){
        await ValuePumpTankService.insertValuePumpTank(status,status_pump)
        this.history_valuePumpTank = await ValuePumpTankService.getValuePumpTank()
      },
      async insert_valueVortex(status,status_pump){
        await ValueVortexService.insertValueVortex(status,status_pump)
        this.history_valueVortex = await ValueVortexService.getValueVortex()
      },
      async insert_valueSubA(status,status_pump){
        await ValueSubAService.insertValueSubA(status,status_pump)
        this.history_valueSubA = await ValueSubAService.getValueSubA()
      },
      async insert_valueSubB(status,status_pump){
        await ValueSubBService.insertValueSubB(status,status_pump)
        this.history_valueSubB = await ValueSubBService.getValueSubB()
      },
      async insert_valueSubACID(status,status_pump){
        await ValueSubACIDService.insertValueACID(status,status_pump)
        this.history_valueSubACID = await ValueSubACIDService.getValueACID()
      },
      async insert_valueLED(status,status_pump){
        await ValueLEDService.insertValueLED(status,status_pump)
        this.history_valueLED = await ValueLEDService.getValueLED()
      },
      async insert_valuePH(value){
        await ValuePHService.insertValuePH(value)
        this.history_valuePH = await ValuePHService.getValuePH()
      },
      async insert_valueEC(value){
        await ValueECService.insertValueEC(value)
        this.history_valueEC = await ValueECService.getValueEC()
      },
      changeHistory(value){
        console.log(value)
        this.select_history = value
      }
      
    },
    mqtt: {
    /** 'VueMqtt/publish1' or '+/publish1' */
    'pi_pump_water_loop_status' (data) {
      if(data.toString() == "ON"){
        this.status_pump_loop = "ON"
        this.insert_valuePumpLoop("ON","ON")  
      }else if(data.toString() == "OFF"){
        this.status_pump_loop = "OFF"
        this.insert_valuePumpLoop("OFF","OFF") 
      }
    },
    'pi_pump_water_tank_status' (data) {
      if(data.toString() == "ON"){
        this.status_pump_tank = "ON"
        this.insert_valuePumpTank("ON","ON")  
      }else if(data.toString() == "OFF"){
        this.status_pump_tank = "OFF"
        this.insert_valuePumpTank("OFF","OFF") 
      }
    },
    'pi_mix_water_status' (data) {
      if(data.toString() == "ON"){
        this.status_vortex = "ON"
        this.insert_valueVortex("ON","ON")  
      }else if(data.toString() == "OFF"){
        this.status_vortex = "OFF"
        this.insert_valueVortex("OFF","OFF") 
      }
    },
    'pi_valve_A_status' (data) {
      if(data.toString() == "ON"){
        this.status_sub_a = "ON"
        this.insert_valueSubA("ON","ON")  
      }else if(data.toString() == "OFF"){
        this.status_sub_a = "OFF"
        this.insert_valueSubA("OFF","OFF") 
      }
    },
    'pi_valve_B_status' (data) {
    if(data.toString() == "ON"){
        this.status_sub_b = "ON"
        this.insert_valueSubB("ON","ON")  
      }else if(data.toString() == "OFF"){
        this.status_sub_b = "OFF"
        this.insert_valueSubB("OFF","OFF") 
      }
    },
    'pi_valve_Acid_status' (data) {
    if(data.toString() == "ON"){
        this.status_sub_acid = "ON"
        this.insert_valueSubACID("ON","ON")  
      }else if(data.toString() == "OFF"){
        this.status_sub_acid = "OFF"
        this.insert_valueSubACID("OFF","OFF") 
      }
    },
    'pi_led_status' (data) {
    if(data.toString() == "ON"){
        this.status_led = "ON"
        this.insert_valueLED("ON","ON")  
      }else if(data.toString() == "OFF"){
        this.status_led = "OFF"
        this.insert_valueLED("OFF","OFF") 
      }
    },
    'pi_ph_sensor_status' (data) {
      if(data){
        this.count_timePH = this.count_timePH + 1
        if(this.count_timePH == 3){
          this.value_ph = data.toString()
          this.insert_valuePH(data.toString())
          this.count_timePH = 0
        }        
      }
    },
    'pi_ec_sensor_status' (data) {
      if(data){
        this.count_timeEC = this.count_timeEC + 1
        if(this.count_timeEC == 5){
          this.value_ec = data.toString()
          this.insert_valueEC(data.toString())
          this.count_timeEC = 0
        }        
      }
    }
  },
  async mounted() {
    this.history_valuePumpLoop = await ValuePumpLoopService.getValuePumpLoop()
    this.history_valuePumpTank = await ValuePumpTankService.getValuePumpTank()
    this.history_valueVortex = await ValueVortexService.getValueVortex()
    this.history_valueSubA = await ValueSubAService.getValueSubA()
    this.history_valueSubB = await ValueSubBService.getValueSubB()
    this.history_valueSubACID = await ValueSubACIDService.getValueACID()
    this.history_valueLED = await ValueLEDService.getValueLED()
    this.history_valuePH = await ValuePHService.getValuePH()
    this.history_valueEC = await ValueECService.getValueEC()
  }
}
</script>
