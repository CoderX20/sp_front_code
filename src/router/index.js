import Vue from 'vue'
import VueRouter from 'vue-router'
import HallLeft from "@/views/HallLeft.vue";
import AttractionLeft from "@/views/AttractionLeft.vue";
import AgencyLeft from "@/views/AgencyLeft.vue";
import personFile from "@/views/PersonFile.vue";
import MyHallMessagesShow from "@/components/MyHallMessagesShow.vue";
import MyAttractionMessagesShow from "@/components/MyAttractionMessagesShow.vue";
import MyAgencyCommentsShow from "@/components/MyAgencyCommentsShow.vue";
import AttractionsDetail from "@/components/AttractionsDetail.vue";
import RoutesManager from "@/components/RoutesManager.vue";

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
    path:"/hall",
    components:{
      left:HallLeft
    }
  },
  {
    path:"/attraction",
    components: {
      left:AttractionLeft
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
      left:AgencyLeft
    }
  },
  {
    path:'/user',
    components: {
      person:personFile
    },
    children:[
      {
        path:"hallMessages",
        components:{
          personData:MyHallMessagesShow
        }
      },
      {
        path:"attractionComments",
        components: {
          personData:MyAttractionMessagesShow
        }
      },
      {
        path:"agencyComments",
        components: {
          personData:MyAgencyCommentsShow
        }
      },
      {
        path:"",
        redirect:"hallMessages"
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
