<template>
  <div id="my-space">
    <div id="tool">
      <el-button size="small" icon="el-icon-back" title="返回" @click="back"></el-button>
      <br>
      <el-button size="small" icon="el-icon-plus" title="新建动态" type="primary"
                 v-if="account_id===userInfo.userid&&identify===userInfo.identify" @click="ShowAddDialog"></el-button>
    </div>
    <div id="container">
      <div id="top" class="space-row">
        <div id="user-avatar">
          <img src="@/assets/img/已登陆.png" alt="" width="150" v-if="user_info.avatar===''">
          <img :src="user_info.avatar" alt="" width="100" v-else>
        </div>
        <div id="basic-info">
          <div>
            <h4>{{user_info.name}}</h4>
          </div>
          <hr>
          <div style="font: italic 0.9em 'Fira Sans', serif;">
            <p>{{user_info.signature}}</p>
          </div>
        </div>
      </div>
      <div id="space-show-place" class="space-row">
        <div style="text-align: center" v-if="this.space_message_list.length<=0">
          <img src="@/assets/img/没有数据.png" width="150" alt=""><br>
          <h5>当前空间没有留言记录</h5>
        </div>
        <space-message-card v-for="item in space_message_list" :key="item.id"
                            :message-info="item" :account_id="account_id"></space-message-card>
      </div>
    </div>
    <el-dialog title="新增空间留言" id="add-new-message-dialog" :visible.sync="isShowAddNewDialog" width="40%"
               @close="CloseAddDialog">
      <div class="row">
        <el-input placeholder="请输入内容" type="textarea" :rows="6" maxlength="400" show-word-limit
                  v-model="new_message"></el-input>
      </div>
      <div class="row">
        <el-collapse>
          <el-collapse-item title="我的路线" name="1">
            <el-checkbox-group v-model="route_selected">
              <el-checkbox v-for="item in my_routes" :key="item.id" :label="item.name" :value="item.id"></el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div>
        <el-upload id="upload" action="" :limit="3" accept="image/*" :auto-upload="false" :show-file-list="true"
                   :file-list="img_list" list-type="picture-card" :on-change="onChange" :on-remove="onRemove">
          <i class="el-icon-plus"></i>
          <div slot="tip">最大上传数量：3</div>
        </el-upload>
      </div>
      <div class="row" id="buts">
        <el-button type="primary" @click="subSpaceMessage">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
import SpaceMessageCard from "@/components/SpaceMessageCard.vue";
export default {
  data(){
    return{
      account_id:Number(this.$route.query.account_id),
      identify:this.$route.query.identify,
      user_info:{},
      space_message_list:[],
      isShowAddNewDialog:false,
      my_routes:[],
      route_selected:[],
      new_message:"",
      img_list:[],
      img_base64_list:[],
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      space_trump_data:state => state.gx.space_trump_data,
      space_collect_data:state => state.gx.space_collect_data,
    })
  },
  components:{
    SpaceMessageCard
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    getBasicInfo(){
      if (this.account_id&&this.identify){
        gx_api.get_user_info({
          account_id:this.account_id,
          identify:this.identify
        }).then((response)=>{
          if (response.data.state===1){
            this.user_info=response.data.user
          }
          else {
            this.$message.warning("未能找到相关数据")
            setTimeout(()=>{
              this.$router.go(-1)
            },1000)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
      else {
        this.$message.warning("未能找到相关数据")
        setTimeout(()=>{
          this.$router.go(-1)
        },1000)
      }
    },
    getSpaceMessages(){
      gx_api.get_space_message({
        account_id:this.account_id,
        identify:this.identify
      }).then((response)=>{
        this.space_message_list=response.data.message_list
      }).catch((err)=>{
        console.log(err)
      })
    },
    ShowAddDialog(){
      this.isShowAddNewDialog=true
      this.getMyRoutes()
    },
    CloseAddDialog(){
      this.new_message=""
      this.my_routes=[]
      this.route_selected=[]
      this.img_list=[]
    },
    getMyRoutes(){
      gx_api.get_my_routes_id({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify
      }).then((response)=>{
        this.my_routes=response.data.routes
      }).catch((err)=>{
        console.log(err)
      })
    },
    onChange(file) {
      let reader=new FileReader()
      reader.addEventListener('load',()=>{
        this.img_base64_list.push(reader.result)
      },false)
      // console.log(file)
      if (file){
        if (file.size / 1024 / 1024 < 5){
          this.img_list.push(file)
          reader.readAsDataURL(file.raw)
        }
        else {
          this.img_list.pop()
          this.$message.warning("文件大小不能超过5M")
        }
      }
    },
    onRemove(file){
      this.img_base64_list.splice(this.img_list.indexOf(file),1)
      this.img_list=this.img_list.filter(item=>item!==file)
    },
    subSpaceMessage(){
      var year=new Date().getFullYear()
      var month=new Date().getMonth()+1
      var day=new Date().getDate()
      var time=`${year}-${month}-${day}`
      let selected_route_id=this.route_selected.map(item=>{
        return this.my_routes.filter(el=>el.name===item)[0].id
      })
      let message=this.new_message
      let i
      for (i=0;i<selected_route_id.length;i++){
        message+=`<a href="#/?route_id=${selected_route_id[i]}" target="_blank">${this.route_selected[i]}</a>`
      }
      gx_api.add_space_message({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        message:message,
        img:this.img_base64_list.join('\n'),
        time:time
      }).then(()=>{
        this.$message.success("动态添加成功")
        this.isShowAddNewDialog=false
        this.getSpaceMessages()
      }).catch((err)=>{
        console.log(err)
      })
    },
    getTrumpData(){
      gx_api.get_my_space_message_trump_data({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.$store.state.gx.space_trump_data=response.data.messages
      }).catch((err)=>{
        console.log(err)
      })
    },
    getCollectData(){
      gx_api.get_my_space_message_collect_data({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.$store.state.gx.space_collect_data=response.data.messages
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getBasicInfo()
    this.getSpaceMessages()
    this.getTrumpData()
    this.getCollectData()
  }
}
</script>

<style lang="less" scoped>
#tool{
  position: fixed;
  top: 70px;
  left: 10px;
  .el-button{
    margin: 5px;
  }
}
#container{
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .space-row{
    width: 700px;
    border-left: 2px lightskyblue solid;
    border-right: 2px lightskyblue solid;
  }
  #top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px lightskyblue solid;
    img{
      border-radius: 50%;
      margin: 5px;
    }
    #basic-info{
      flex: 1;
      div{
        padding: 10px;
      }
    }
  }
  #space-show-place{
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
#add-new-message-dialog{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .row{
    width: 100%;
    margin: 10px;
  }
  #buts{
    text-align: center;
  }
}
</style>
