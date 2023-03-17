<script lang="ts" setup>

  useHead({
    title: 'Kiosk',
    meta: [
        { 
        name: 'keywords', 
        content: 'Kiosk, Nuxt 3, Backend'
        },
        {
        name: 'Description',
        content: 'Kiosk Nuxt 3,  IT Genius Engineering'
        }
    ]
  })
  
  
  let assets = [
    {
      "type": "WASHER",
      "name": "INS-001",
      "status": "READY",
      "selected":false,
      "selectedProd":0,
      products: [
        {
          "name":"20 Baht",
          "price":20,
          "qty":30,
          "unit":"minute",
          "temp":30,
          "speed":800,
          "rinse":2,
          "selected":false
        },
        {
          "name":"30 Baht",
          "price":30,
          "qty":60,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":2,
          "selected":true
        },
        {
          "name":"40 Baht",
          "price":40,
          "qty":90,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":3,
          "selected":false
        }
      ]
    },
    {
      "type": "WASHER",
      "name": "INS-002",
      "status": "BUSY",
      "selected":false,
      "selectedProd":0,
      products: [
      {
          "name":"20 Baht",
          "price":20,
          "qty":30,
          "unit":"minute",
          "temp":30,
          "speed":800,
          "rinse":2,
          "selected":false
        },
        {
          "name":"30 Baht",
          "price":30,
          "qty":60,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":2,
          "selected":true
        },
        {
          "name":"40 Baht",
          "price":40,
          "qty":90,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":3,
          "selected":false
        }
      ]
    },
    {
      "type": "WASHER",
      "name": "INS-003",
      "status": "OFFLINE",
      "selected":false,
      "selectedProd":0,
      products: [
      {
          "name":"20 Baht",
          "price":20,
          "qty":30,
          "unit":"minute",
          "temp":30,
          "speed":800,
          "rinse":2,
          "selected":false
        },
        {
          "name":"30 Baht",
          "price":30,
          "qty":60,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":2,
          "selected":true
        },
        {
          "name":"40 Baht",
          "price":40,
          "qty":90,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":3,
          "selected":false
        }
      ]
    },
    {
      "type": "WASHER",
      "name": "INS-004",
      "status": "READY",
      "selected":false,
      "selectedProd":0,
      products: [
      {
          "name":"20 Baht",
          "price":20,
          "qty":30,
          "unit":"minute",
          "temp":30,
          "speed":800,
          "rinse":2,
          "selected":false
        },
        {
          "name":"30 Baht",
          "price":30,
          "qty":60,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":2,
          "selected":true
        },
        {
          "name":"40 Baht",
          "price":40,
          "qty":90,
          "unit":"minute",
          "temp":40,
          "speed":1000,
          "rinse":3,
          "selected":false
        }
      ]
    }
  ]

  const count = ref(0)
  const select = useMachine()
  const status = ref('READY')
  const selected = ref(false)
  const addCart = async(assInx:number,prodInx:number) => {
    assets[assInx].selectedProd = prodInx
    if(assets[assInx].status == "READY")
    {
      assets[assInx].status = "BOOKED"
      status.value =assets[assInx].status
      selected.value = true
      assets[assInx].selected = selected.value
      count.value++
    }
    else
    {
      assets[assInx].status = "READY"
      status.value =assets[assInx].status
      selected.value = false
      assets[assInx].selected = selected.value
      count.value--
    }
  }

  const removeCart = async(assInx:number,prodInx:number) => {
    assets[assInx].selectedProd = prodInx
    assets[assInx].status = "READY"
    status.value =assets[assInx].status
    selected.value = false
    assets[assInx].selected = selected.value
    count.value--
  }
 
   
 

</script>

<template>
  <div class="banner-wrapper"> 
    <v-container>
      <v-row > 
        <v-col v-for="(asset,assetinx) in assets" :key="asset.name" cols="4">
          <v-card  v-if="asset.type === 'WASHER'" class="mx-auto" color="gray-lighten-5">
            <v-row  style="height: 14vh">
              <v-col cols="9" class="mt-3"> 
 
                  <div class="text-h5 font-weight-bold text-no-wrap text-left">Washing Machine</div>
                  <div class="text-h6 font-weight-bold text-left">
                    <span v-if="asset.status === 'READY'" class="text-green-accent-4">{{ asset.name }}&nbsp&nbsp&nbsp({{ asset.status }})</span>
                    <!-- <span v-if="asset.status === 'READY'" :class="asset.status === 'READY'?'text-green-accent-4':'text-blue-accent-4'">{{ asset.name }}&nbsp&nbsp&nbsp({{ asset.status }})</span> -->
                    <span v-else-if="asset.status === 'BUSY'" class="text-red-accent-4">{{ asset.name }}&nbsp&nbsp&nbsp({{ asset.status }})</span>
                    <span v-else-if="asset.status === 'OFFLINE'" class="text-grey-lighten-1">{{ asset.name }}&nbsp&nbsp&nbsp({{ asset.status }})</span>
                    <span v-else-if="asset.status === 'BOOKED'" class="text-blue-accent-4">{{ asset.name }}&nbsp&nbsp&nbsp({{ asset.status }})</span>
                  </div>        
                       
              </v-col>
              <v-col cols="3"> 
                  <!-- <v-img v-if="asset.status === 'READY'" :src="active?'/images/kiosk/newWasher-Green.png':'/images/kiosk/newWasher-Blue.png'" alt="kiosk" height="120"></v-img> -->
                  
                  <v-img v-if="asset.status === 'READY'" src="https://www.flipup.net/wp-content/uploads/2020/11/Wash-Green.jpg" alt="kiosk" height="120"></v-img>
                  <v-img v-if="asset.status === 'BUSY'" src="https://www.flipup.net/wp-content/uploads/2020/11/Wash-Red.jpg" alt="kiosk" height="120"></v-img>
                  <v-img v-if="asset.status === 'OFFLINE'" src="https://www.flipup.net/wp-content/uploads/2020/11/Wash-Gray.jpg" alt="kiosk" height="120"></v-img>
                  <v-img v-if="asset.status === 'BOOKED'" src="https://www.flipup.net/wp-content/uploads/2020/11/Wash-Blue.jpg" alt="kiosk" height="120"></v-img>
              </v-col>
            </v-row>
            <v-row style="height: 1vh"> 
              <div class="mx-5 text-decoration-underline font-weight-medium">Service: {{ asset.products[select[0][assetinx]].qty }} minutes</div>
            </v-row>
            <v-row justify="center" style="height: 3vh">
              <v-col cols="4" justify="center"><v-label class="ma-2 opertext">อุณหภูมิ(&deg;C)</v-label></v-col>
              <v-col cols="4" justify="center"><v-label class="ma-2 opertext">ปั่นหมาด(รอบ)</v-label></v-col>
              <v-col cols="4" justify="center"><v-label class="ma-2 opertext">ล้างน้ำ(ครั้ง)</v-label></v-col>
            </v-row>
            <v-row justify="center" style="height: 8vh">
              <v-col cols="4" justify="center">
                <v-chip variant="text" class="mt-2" color="red">
                <v-icon size="25" class="ma-1">mdi-thermometer-lines</v-icon>
                <span class="subheading">{{asset.products[select[0][assetinx]].temp}}</span>
                </v-chip>
              </v-col>
              <v-col cols="4" justify="center"> 
                <v-chip variant="text" class="mt-2" color="green">
                  <v-icon size="25" class="ma-1">mdi-fan</v-icon>
                  <span class="subheading">{{asset.products[select[0][assetinx]].speed}}</span>
                </v-chip>
              </v-col>
              <v-col cols="4" justify="center">
                <v-chip variant="text" class="mt-2" color="blue">
                  <v-icon size="25" class="ma-3">mdi-cup</v-icon>
                  <span class="subheading">{{asset.products[select[0][assetinx]].rinse}}</span>
                </v-chip>
              </v-col>
            </v-row>          
            
            <v-row  justify="center" style="height: 9vh">
              <span class="subheading font-weight-bold text-blue-darken-2" >เลือกบริการ (select service)</span>
              <v-chip-group v-model="select[0][assetinx]" selected-class="text-primary" mandatory>  
                <v-chip v-for="prod in asset.products" :key="prod.name">{{prod.price}} Baht</v-chip>
              </v-chip-group>
            </v-row>
    
            <v-card-actions>
              <v-btn  v-if="asset.status === 'READY'" @click="addCart(assetinx,select[0][assetinx])" prepend-icon="mdi-cart"  
                variant="outlined" rounded="pill"  block color="blue-accent-4">
                Add to cart
              </v-btn>
              <v-btn  v-else-if="asset.status === 'BOOKED'" @click="removeCart(assetinx,select[0][assetinx])" prepend-icon="mdi-cart"  
                variant="outlined" rounded="pill"  block color="blue-accent-4">
                Remove from cart
              </v-btn>
              <!-- <v-btn  v-if="asset.status === 'READY'" @click="toggleactive" prepend-icon="mdi-cart"  
                variant="outlined" rounded="pill"  block :color="active?'blue-accent-4':'green-accent-4'">
                Add to cart
              </v-btn> -->
              <v-btn v-else prepend-icon="mdi-cart"  variant="outlined"  rounded="pill" block color="blue-accent-4" disabled>Add to cart</v-btn>
               
            </v-card-actions>

          </v-card>

        </v-col>
      </v-row>  
      <div justify="center"><p>Cart: {{ count }}</p></div>
    </v-container>    
  </div>
  
 
</template>

<style scoped>
  .banner-wrapper {
      background: #53b1fe;
      padding: 40px 0 20px;
      min-height: 600px;
      display: flex;
      align-items: center;
    }

  .opertext{
    font-size: 0.85rem;
    font-weight: 500
  }
</style>
