import Vue from 'vue'
import VueRouter from 'vue-router'
import MapCom from "@/components/MapCom.vue";
import HallLeft from "@/views/HallLeft.vue";
import AttractionLeft from "@/views/AttractionLeft.vue";
import AgencyLeft from "@/views/AgencyLeft.vue";
import personFile from "@/views/PersonFile.vue";
import AttractionsDetail from "@/components/AttractionsDetail.vue";
import RoutesManager from "@/components/RoutesManager.vue";
import AllMyMessages from "@/components/AllMyMessages.vue";
import AgencyMainPage from "@/components/AgencyMainPage.vue";
import MySpace from "@/components/MySpace.vue";
import AgencyInfoCard from "@/components/AgencyInfoCard.vue";
import MyCollectMessage from "@/components/MyCollectMessage.vue";

Vue.use(VueRouter)

let originPush=VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push=function (location,resolve,reject){
  if(resolve&&reject){
    originPush.call(this,location,resolve,reject)
  }
  else{
    originPush.call(this,location,()=>{},(error)=>{
      error
    })
  }
}
VueRouter.prototype.replace=function (location,resolve,reject){
  if(resolve&&reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},(error)=>{
      error
    })
  }
}

const routes = [
  {
    path: "",
    components: {
      map:MapCom
    }
  },
  {
    path:"/hall",
    components:{
      left:HallLeft,
      map:MapCom
    }
  },
  {
    path:"/attraction",
    components: {
      left:AttractionLeft,
      map:MapCom
    },
    children:[
      {
        path:"attractionDetail",
        components:{
          attractionShow:AttractionsDetail
        },
      },
      {
        path:"routes",
        components: {
          attractionShow:RoutesManager,
        }
      },
    ]
  },
  {
    path:'/agency',
    components: {
      left:AgencyLeft,
      map:MapCom,
    },
    children:[
      {
        path:"",
        components:{
          agencyView:AgencyMainPage
        },
      },
      {
        path:"detail",
        components: {
          agencyView:AgencyInfoCard
        }
      },
    ],
  },
  {
    path:'/user',
    components: {
      person:personFile
    },
    children:[
      {
        path:"myMessages",
        components:{
          personData:AllMyMessages
        }
      },
      {
        path:"",
        redirect:"myMessages"
      },
      {
        path:"myCollect",
        components: {
          personData:MyCollectMessage
        }
      },
    ],
  },
  {
    path:"/space",
    components: {
      person:MySpace
    }
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
