import http from "@/utils/requests"

// 登陆检查
export const check_login=(params)=>{
    return http.post('login',params)
}

// 注册新用户
export const register_users=(params)=>{
    return http.post('/register',params)
}

// 获取大厅发言信息
export const get_messages=()=>{
    return http.post('/getMessages')
}

// 添加大厅发言信息
export const add_messages=(params)=>{
    return http.post('/addMessage',params)
}

// 删除大厅发言信息
export const pop_messages=(params)=>{
    return http.post('/popMessage',params)
}

// 获取我的大厅点赞记录
export const get_my_trumps=(params)=>{
    return http.post('/getTrumpData',params)
}

// 对大厅发言进行点赞
export const trump_hall_message=(params)=>{
    return http.post('/trumpHallMessage',params)
}

// 取消大厅发言的点赞
export const cancel_trump_hall_message=(params)=>{
    return http.post('/cancelTrumpHallMessage',params)
}

// 更改用户名
export const alter_account_name=(params)=>{
    return http.post('/alterName',params)
}

// 删除账户
export const del_account=(params)=>{
    return http.post("/delMyAccount",params)
}

// 修改用户名
export const alter_password=(params)=>{
    return http.post('/alterPassword',params)
}

// 获取当前用户大厅发言数据
export const get_my_hall_messages=(params)=>{
    return http.post('/getMyHallMessages',params)
}

// 修改大厅发言
export const edit_hall_message=(params)=>{
    return http.post('/editHallMessage',params)
}

// 获取景点城市信息，已经去重
export const get_attractions_city=()=>{
    return http.post('/getAttractionsCity')
}

// 获取景点A级信息，已经去重
export const get_attractions_level=()=>{
    return http.post('/getAttractionsLevel')
}

// 获取部分景点
export const get_attractions_range=(params)=>{
    return http.post('/getAttractionsRange',params)
}

// 利用id获取景点
export const get_attraction_by_id=(params)=>{
    return http.post("/getAttractionsByID",params)
}

// 获取景点评分
export const add_attraction_score=(params)=>{
    return http.post('/addAttractionScore',params)
}

// 修改景点评分
export const alter_attraction_score=(params)=>{
    return http.post('/alterAttractionScore',params)
}

// 获取当前用户对景点的评分
export const get_my_attraction_score=(params)=>{
    return http.post('/getMyAttractionScore',params)
}

// 获取景点评论信息
export const get_attraction_comments=(params)=>{
    return http.post('/getAttractionComments',params)
}

// 添加景点评论
export const add_attraction_comment=(params)=>{
    return http.post('/addAttractionComment',params)
}

// 移除景点评论
export const remove_attraction_comment=(params)=>{
    return http.post('/removeAttractionCommentID',params)
}

// 获取被当前用户点赞的景点评论
export const get_my_attraction_trump_comments=(params)=>{
    return http.post('/getMyAttractionTrumpComments',params)
}

// 对某个景点评论进行点赞
export const trump_attraction_comment=(params)=>{
    return http.post('/trumpAttractionComment',params)
}

// 取消景点评论点赞
export const cancel_trump_attraction_comment=(params)=>{
    return http.post('/cancelTrumpAttractionComment',params)
}

// 上传景点照片文件
export const upload_attraction_file=(params)=>{
    return http.post('/uploadAttractionData',params)
}

// 获取景点评论的分词信息
export const get_word_cut_attraction_comments=(params)=>{
    return http.post("/getWordsCutAttractionComments",params)
}

// 利用账号id获取路线
export const get_my_routes_id=(params)=>{
    return http.post('/getRoutesByAccountID',params)
}

// 添加路线
export const add_new_route=(params)=>{
    return http.post('/addNewRoute',params)
}

// 修改用户头像
export const alter_user_avatar=(params)=>{
    return http.post("/alterAccountAvatar",params)
}

// 获取当前用户所有景点下的评论
export const get_all_my_attractions_comments=(params)=>{
    return http.post('/getAllMyAttractionComments',params)
}

// 注册新的管理员
export const register_admin=(params)=>{
    return http.post('/registerAdmin',params)
}

export const edit_my_signature=(params)=>{
    return http.post('/editMySignature',params)
}

// 更新路线
export const update_my_routes_attractions=(params)=>{
    return http.post('/updateRouteAttractions',params)
}

// 更新路线起点
export const update_route_start=(params)=>{
    return http.post('/addRouteStart',params)
}

// 获取热门景点
export const get_hot_attractions=()=>{
    return http.post('/getHotAttractions')
}

export const del_my_route=(params)=>{
    return http.post('/delMyRoute',params)
}

// 更改路线名
export const alter_route_name=(params)=>{
    return http.post('/alterRouteName',params)
}

// 根据路线id获取路线数据
export const get_route_id=(params)=>{
    return http.post('/getRouteByID',params)
}

// 获取热门旅行社
export const get_hot_agency=()=>{
    return http.post('/getHotAgency')
}

// 根据用户搜索获取旅行社信息
export const get_agency_search=(params)=>{
    return http.post('/getAgencySearch',params)
}

export const get_user_info=(params)=>{
    return http.post('/getUserInfo',params)
}
