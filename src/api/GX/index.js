import http from "@/utils/requests"

export const check_login=(params)=>{
    return http.post('login',params)
}

export const register_users=(params)=>{
    return http.post('/register',params)
}

export const get_messages=()=>{
    return http.post('/getMessages')
}

export const add_messages=(params)=>{
    return http.post('/addMessage',params)
}

export const pop_messages=(params)=>{
    return http.post('/popMessage',params)
}

export const get_my_trumps=(params)=>{
    return http.post('/getTrumpData',params)
}

export const trump_hall_message=(params)=>{
    return http.post('/trumpHallMessage',params)
}

export const cancel_trump_hall_message=(params)=>{
    return http.post('/cancelTrumpHallMessage',params)
}

export const alter_account_name=(params)=>{
    return http.post('/alterName',params)
}

export const del_account=(params)=>{
    return http.post("/delMyAccount",params)
}

export const alter_password=(params)=>{
    return http.post('/alterPassword',params)
}

export const get_my_hall_messages=(params)=>{
    return http.post('/getMyHallMessages',params)
}

export const edit_hall_message=(params)=>{
    return http.post('/editHallMessage',params)
}

export const get_attractions_city=()=>{
    return http.post('/getAttractionsCity')
}

export const get_attractions_level=()=>{
    return http.post('/getAttractionsLevel')
}

export const get_attractions_range=(params)=>{
    return http.post('/getAttractionsRange',params)
}

export const get_attraction_by_id=(params)=>{
    return http.post("/getAttractionsByID",params)
}

export const add_attraction_score=(params)=>{
    return http.post('/addAttractionScore',params)
}

export const alter_attraction_score=(params)=>{
    return http.post('/alterAttractionScore',params)
}

export const get_my_attraction_score=(params)=>{
    return http.post('/getMyAttractionScore',params)
}