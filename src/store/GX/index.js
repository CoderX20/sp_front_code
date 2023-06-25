
const gx = {
    state: () => ({
        hasLogin:true,
        userInfo:{},
        myTrumpHallMessages:[],
        myHallMessages:[],
        attractions:[],
        attractions_map:[],
        attraction_comments:[],
        myTrumpAttractionComments:[],
        query_city:"",
        myRouteAttractions:{
            attractions:[],
        },
        myRouteStart:"",
        isEditStart:false,
        myNearbyAttractions:[],
        isShowNearbyAttractions:false,
        isClickAgency:false,
        clickCityName:"",
        shouldClearAgencyLayers:false,
        space_trump_data:[],
        space_collect_data:[],
    }),
    mutations: {},
    getters: {},
    actions:{

    },
}

export default gx