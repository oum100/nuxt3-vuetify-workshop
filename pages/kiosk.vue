import type { Defu from 'defu';
<script lang="ts" setup>
    definePageMeta({
      layout: "kiosk",
    })
    
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

  const drawer = ref(false)
  const dialog = ref(false)  

  const count = ref(0)
  const total = ref(0)
  const picked = ref(false)
  const pickedList= ref([[0,0,0,0,0,0],[0,0,0,0,0,0]])
  interface pickedItem{
    assetName:string,
    type:string,
    uuid:string,
    product:{
      sku:string,
      skuName:string,
      price:number,
      qty:number,
      unit:string
    }
  }
  const carts:pickedItem[] = []

  const addItem = (item:string,prodinx:number)=>{
    const inx = assets.findIndex((x) => x.uuid === item);
    
    picked.value = true
    assets[inx].state = 'booked'
    assets[inx].picked = picked.value
    assets[inx].prodSelected = prodinx
    count.value++   
    total.value = total.value + assets[inx].products[prodinx].price

    carts.push(
      {
        "assetName":assets[inx].assetName,
        "type": assets[inx].type,
        "uuid": assets[inx].uuid,
        "product": assets[inx].products[prodinx]
      }
    )
    // console.log(carts)
  }  

  const removeItem =(item:string,prodinx:number)=>{
     
    const inx = assets.findIndex((x) => x.uuid === item);
    picked.value = false
    assets[inx].state = 'ready'
    assets[inx].picked = picked.value
    assets[inx].prodSelected = prodinx
    count.value--
    total.value = total.value - assets[inx].products[prodinx].price

    const index = carts.findIndex((x:any) => x.uuid === item);
    carts.splice(index, 1);
    // console.log(carts)
  }  



  const menuitems = [
    { title: 'Home', icon: 'mdi-home', to: '/' },
    { title: 'Setting', icon: 'mdi-cog-outline', to: '/about' },
    { title: 'Logout', icon: 'mdi-logout', to: '/contact'}
  ]
  


  const assets = [
  {
      "assetName":"INS-001",
      "uuid": "ECM3VZMCCVBP001",
      "type": "washer",
      "state": "ready",
      "picked":false,
      "prodSelected":0,
      products: [
          { "sku": "MA10000106-01", "skuName": "Cold", "price": 30, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "Worm", "price": 40, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-03", "skuName": "Hot", "price": 50, "qty": 60,"unit":"minute"},
        ],
    },
    {
      "assetName":"DRY-002",
      "uuid": "ECM3VZMCCVBP002",
      "type": "dryer",
      "state": "ready",
      "picked":false,
      "prodSelected":0,
      products: [
          { "sku": "MA10000106-01", "skuName": "60m", "price": 40, "qty": 60,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "75m", "price": 50, "qty": 75,"unit":"minute"},
        ],
    },
    {
      "assetName":"INS-003",
      "uuid": "ECM3VZMCCVBP003",
      "type": "washer",
      "state": "ready",
      "picked":false,
      "prodSelected":0,
      products: [
          { "sku": "MA10000106-01", "skuName": "Cold", "price": 30, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "Worm", "price": 40, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-03", "skuName": "Hot", "price": 50, "qty": 60,"unit":"minute"},
        ],
    },
    {
      "assetName":"DRY-004",
      "uuid": "ECM3VZMCCVBP004",
      "type": "dryer",
      "state": "ready",
      "picked":false,
      "prodSelected":1,
      products: [
          { "sku": "MA10000106-01", "skuName": "60m", "price": 40, "qty": 60,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "75m", "price": 50, "qty": 75,"unit":"minute"},
        ],
    },
    {
      "assetName":"INS-005",
      "uuid": "ECM3VZMCCVBP005",
      "type": "washer",
      "state": "ready",
      "picked":false,
      "prodSelected":1,
      products: [
          { "sku": "MA10000106-01", "skuName": "Cold", "price": 30, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "Worm", "price": 40, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-03", "skuName": "Hot", "price": 50, "qty": 60,"unit":"minute"},
        ],
    },
    {
      "assetName":"DRY-006",
      "uuid": "ECM3VZMCCVBP006",
      "type": "dryer",
      "state": "ready",
      "picked":false,
      "prodSelected":1,
      products: [
          { "sku": "MA10000106-01", "skuName": "60m", "price": 40, "qty": 60,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "75m", "price": 50, "qty": 75,"unit":"minute"},
        ],
    },
    {
      "assetName":"INS-007",
      "uuid": "ECM3VZMCCVBP007",
      "type": "washer",
      "state": "ready",
      "picked":false,
      "prodSelected":0,
      products: [
          { "sku": "MA10000106-01", "skuName": "Cold", "price": 30, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "Worm", "price": 40, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-03", "skuName": "Hot", "price": 50, "qty": 60,"unit":"minute"},
        ],
    },
    {
      "assetName":"DRY-008",
      "uuid": "ECM3VZMCCVBP008",
      "type": "dryer",
      "state": "ready",
      "picked":false,
      "prodSelected":0,
      products: [
          { "sku": "MA10000106-01", "skuName": "60m", "price": 40, "qty": 60,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "75m", "price": 50, "qty": 75,"unit":"minute"},
        ],
    },
    {
      "assetName":"INS-009",
      "uuid": "ECM3VZMCCVBP009",
      "type": "washer",
      "state": "ready",
      "picked":false,
      "prodSelected":0,
      products: [
          { "sku": "MA10000106-01", "skuName": "Cold", "price": 30, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "Worm", "price": 40, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-03", "skuName": "Hot", "price": 50, "qty": 60,"unit":"minute"},
        ],
    },
    {
      "assetName":"DRY-010",
      "uuid": "ECM3VZMCCVBP010",
      "type": "dryer",
      "state": "ready",
      "picked":false,
      "prodSelected":1,
      products: [
          { "sku": "MA10000106-01", "skuName": "60m", "price": 40, "qty": 60,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "75m", "price": 50, "qty": 75,"unit":"minute"},
        ],
    },
    {
      "assetName":"INS-011",
      "uuid": "ECM3VZMCCVBP011",
      "type": "washer",
      "state": "ready",
      "picked":false,
      "prodSelected":1,
      products: [
          { "sku": "MA10000106-01", "skuName": "Cold", "price": 30, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "Worm", "price": 40, "qty": 30,"unit":"minute"},
          { "sku": "MA10000106-03", "skuName": "Hot", "price": 50, "qty": 60,"unit":"minute"},
        ],
    },
    {
      "assetName":"DRY-012",
      "uuid": "ECM3VZMCCVBP012",
      "type": "dryer",
      "state": "ready",
      "picked":false,
      "prodSelected":1,
      products: [
          { "sku": "MA10000106-01", "skuName": "60m", "price": 40, "qty": 60,"unit":"minute"},
          { "sku": "MA10000106-02", "skuName": "75m", "price": 50, "qty": 75,"unit":"minute"},
        ],
    },

  ]
  
</script> 

<template>  
  <div class="banner-wrapper">
    <v-container fluid class="mt-0"> 
      <v-app-bar color="primary" density="compact">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-bold">Regent Home 18</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog=true"><v-icon>mdi-cart</v-icon>{{ count }}</v-btn>   
        <!-- <v-btn icon="mdi-dots-vertical" id="menu-vertical"></v-btn> -->
        <v-avatar color="info" class="mx-4">WL</v-avatar>

        <!-- <v-menu activator="#menu-vertical">
          <v-list>
            <v-list-item v-for="(menuitem,index) in menuitems" :key="index">
              <v-list-item-title><v-icon>{{ menuitem.icon }}</v-icon>&nbsp{{ menuitem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
        <v-dialog v-model="dialog" width="auto">
          <v-sheet >
            <v-card>
              <v-card-items>
                <v-card-title class="text-h5 text-primary justify-end"><v-icon>mdi-cart-variant</v-icon>Cart: <span >&nbsp&nbsp Items:{{ count }} &nbsp&nbsp Total:{{ total }}</span></v-card-title>
              </v-card-items>
              <v-card-text>
                <v-table fixed-header >
                  <thead>
                    <tr>
                      <th>Machine Name</th>
                      <th>Type</th>
                      <th>Product</th>
                      <th>Service Time</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cart in carts">
                      <td>{{ cart.assetName }}</td>
                      <td v-if="cart.type === 'washer'"><v-icon color="blue">mdi-washing-machine</v-icon>{{ cart.type }}</td>
                      <td v-if="cart.type === 'dryer'"><v-icon color="red">mdi-tumble-dryer</v-icon>{{ cart.type }}</td>
                      <td><v-chip size="small" color="blue">{{ cart.product.skuName }}</v-chip>&nbsp<span style="font-size:1vw">{{ cart.product.sku }}</span></td>
                      <td>{{ cart.product.qty }} {{ cart.product.unit }}</td>
                      <td>{{ cart.product.price }}</td>
                      <td><v-btn variant="text" ><v-icon size="large">mdi-trash-can-outline</v-icon></v-btn></td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
              <v-card-actions class="justify-center">
                <div >
                  <v-btn  width="200" color="success">Confirm</v-btn>
                  <v-btn  width="200" @click="dialog = false">Back</v-btn>
                </div>

              </v-card-actions>
            </v-card>
          </v-sheet>
        </v-dialog>
      </v-app-bar>
     
      <v-navigation-drawer v-model="drawer"  temporary>
          <v-list>
            <v-list-item v-for="(menuitem,index) in menuitems" :key="index">
              <v-list-item-title><v-icon>{{ menuitem.icon }}</v-icon>&nbsp{{ menuitem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-navigation-drawer>
      <v-row class="mt-1">       
        <v-col v-for="(asset,assetIndex) in assets.filter((x) => x.type === 'dryer')" :key="asset.uuid" cols="2" justify="center">
          <v-row justify="center" align="center">
            <div class="text-h6 text-center text-white font-weight-bold">{{asset.assetName}}</div>
          </v-row>
          <v-row justify="center" align="center" style="font-size:1.3vw"><div class="text-white font-weight-medium" >Price: {{ asset.products[pickedList[0][assetIndex]].price }}</div></v-row>
          <v-row justify="center" align="center">  
            <div class="mb-1">
              <!-- <div >  
                <v-chip-group v-if="asset.state === 'ready'" v-model="pickedList[0][assetIndex]" selected-class="text-white" mandato >
                  <v-chip v-for="(product,prodIndex) in asset.products" :key="product.sku" label size="default" variant="outlined">{{ product.skuName }}</v-chip>
                </v-chip-group>  
                
                <v-chip-group v-else disabled v-model="pickedList[0][assetIndex]" selected-class="text-white" mandator >
                  <v-chip v-for="(product,prodIndex) in asset.products" :key="product.sku" label size="default" variant="outlined" disabled>{{ product.skuName }}</v-chip>
                </v-chip-group> 
              </div> -->
              <v-btn-toggle v-if="asset.state === 'ready'" v-model="pickedList[0][assetIndex]" color="primary" mandatory density="compact" divided rounded="xl">
                  <v-btn v-for="(product,prodIndex) in asset.products" :key="product.sku" size="small">{{ product.skuName }}</v-btn>
              </v-btn-toggle>
              <v-btn-toggle v-else="asset.state === 'ready'" v-model="pickedList[0][assetIndex]" color="primary" mandatory density="compact" divided rounded="xl">
                  <v-btn v-for="(product,prodIndex) in asset.products" :key="product.sku" size="small" disabled>{{ product.skuName }}</v-btn>
              </v-btn-toggle>
            </div>
          </v-row>
          <v-row align="center" justify="center" class="mb-1">
            <v-img v-if="asset.state ==='ready'" src="/images/kiosk/NewDryer-Green.png" height="180" alt="kiosk"  :title="asset.state" @click="addItem(asset.uuid,pickedList[0][assetIndex])"/>
            <v-img v-if="asset.state ==='booked'" src="/images/kiosk/NewDryer-Blue.png" height="180" alt="kiosk"  :title="asset.state"  @click="removeItem(asset.uuid,pickedList[0][assetIndex])"/>
            <v-img v-if="asset.state ==='busy'" src="/images/kiosk/NewDryer-Red.png" height="180" alt="kiosk"  :title="asset.state" />
            <v-img v-if="asset.state ==='offline'" src="/images/kiosk/NewDryer-Gray.png" height="180" alt="kiosk"  :title="asset.state"/>
          </v-row>
        </v-col>  
      </v-row> 
      <v-row class="mt-1" justify="center" align="center">       
        <v-col v-for="(asset,assetIndex) in assets.filter((x) => x.type === 'washer')" :key="asset.uuid" cols="2" justify="center">
          <v-row justify="center" align="center">
            <div class="text-h6 text-center text-white font-weight-bold">{{asset.assetName}}</div>
          </v-row>
          <v-row justify="center" align="center" style="font-size:1.3vw" ><div class="text-white font-weight-medium" >Price: {{ asset.products[pickedList[1][assetIndex]].price }}</div></v-row>
          <v-row justify="center" align="center">  
            <div class="mb-1">  
              <!-- <v-chip-group v-if="asset.state === 'ready'" v-model="pickedList[1][assetIndex]" selected-class="text-white" mandato >
                <v-chip v-for="(product,prodIndex) in asset.products" :key="product.sku" label size="default" variant="outlined">{{ product.skuName }}</v-chip>
              </v-chip-group>  

              <v-chip-group v-else disabled v-model="pickedList[1][assetIndex]" selected-class="text-white" mandator >
                <v-chip v-for="(product,prodIndex) in asset.products" :key="product.sku" label size="default" variant="outlined" disabled>{{ product.skuName }}</v-chip>
              </v-chip-group>  -->
              <v-btn-toggle v-if="asset.state === 'ready'" v-model="pickedList[1][assetIndex]" color="primary" mandatory density="compact" divided rounded="xl">
                <v-btn v-for="(product,prodIndex) in asset.products" :key="product.sku" size="small">{{ product.skuName }}</v-btn>
              </v-btn-toggle>
              <v-btn-toggle v-else="asset.state === 'ready'" v-model="pickedList[1][assetIndex]" color="primary" mandatory density="compact" divided rounded="xl">
                  <v-btn v-for="(product,prodIndex) in asset.products" :key="product.sku" size="small" disabled>{{ product.skuName }}</v-btn>
              </v-btn-toggle>              
            </div>
          </v-row>
          <v-row align="center" justify="center"  class="mb-1">
            <v-img v-if="asset.state ==='ready'" src="/images/kiosk/NewWasher-Green.png" alt="kiosk" height="180" :title="asset.state"  @click="addItem(asset.uuid,pickedList[1][assetIndex])"/>
            <v-img v-if="asset.state ==='booked'" src="/images/kiosk/NewWasher-Blue.png" alt="kiosk"  height="180" :title="asset.state" @click="removeItem(asset.uuid,pickedList[1][assetIndex])"/>
            <v-img v-if="asset.state ==='busy'" src="/images/kiosk/NewWasher-Red.png" alt="kiosk" height="180" :title="asset.state"/>
            <v-img v-if="asset.state ==='offline'" src="/images/kiosk/NewWasher-Gray.png" alt="kiosk" height="180" :title="asset.state"/>
          </v-row>
        </v-col>  
      </v-row> 
      
      <div class="text-h5 text-center text-white font-weight-bold mt-0"> 
        <span><v-icon icon="mdi-cart"></v-icon> [ Item: {{ count }}</span>&nbsp&nbsp
        <span>,Total: {{ total }} ]</span>
        <div>
          <v-btn width="300" class="ma-2" color="primary" style="font-size:1.3vw" title="Submit" prepend-icon="mdi-cart-check" @click="dialog=true">Submit</v-btn>
          <v-btn width="300" class="ma-2" style="font-size:1.3vw" title="Clear all item from cart" prepend-icon="mdi-cart-remove">Clear Cart</v-btn>
        </div>
      </div>
    </v-container>    
  </div>
</template>

<style scoped>
  .banner-wrapper {
    background: #55aff8;
    padding: 40px 0 20px;
    min-height: 600px;
    display: flex;
    align-items: center;
  }

  .v-btn-toggle {
    height:25px;
  }

</style>
