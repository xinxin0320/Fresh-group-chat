<template>
<div id="Session">
<div class="vue_continue">
  <div class="vue_conversation">
    <h3>会话 <img src="./image/jia.png" height="18" width="18" alt=""></h3>
    
    <i><img src="./image/G.png" height="24" width="58" alt=""></i>
  </div>
  <ul class="vue_continue_ul">
    <li>
      <div class="vue_li_left">
        <i><img src="./image/#bg.png" height="30" width="30" alt=""></i>
        <div class="vue_title">
          <p><b>所有人</b> <span class="time">12-18</span></p>
          <p>我:你好</p>
        </div>
      </div>
      
    </li>
    <li>
      <div class="vue_li_left">
        <i><img src="./image/Cc.png" height="30" width="33" alt=""></i>
        <div class="vue_title">
          <p><b>nikeName</b><span class="time">12-18</span></p>
          <p>我:你好</p>
        </div>
      </div>
      
    </li>
    <li>
      <div class="vue_li_left">
        <i><img src="./image/BEIBEI.png" height="30" width="33" alt=""></i>
        <div class="vue_title">
          <p><b>小助手</b><span class="time">12-18</span></p>
          <p>Hi，很高兴认识你</p>
        </div>
      </div>
      
    </li>
    
    
  </ul>
  
</div>
  
</div>
</template>

<script>
export default {
  name: 'Session',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// #Session{
//   position:absolute;
//   top:0;
//   z-index:100;
// }

.vue_continue{
      background-color:#fff;

      .vue_conversation{
        height:45px;
        line-height:45px;
        border-bottom:1px solid #EBEBEB;
        display:flex;
        justify-content: space-between;
        padding-left:10px;
        padding-right:10px;
        h3{
          font-size: 16px;
          img{

          }
        }

      }
      .vue_continue_ul{
        font-size:16px;
        color:#404040;
        
        li{
          height:70px;
          line-height:70px;
          padding-left:10px;
          padding-right:10px;
          display:flex;
          justify-content: space-between;
          &:hover{
            background-color:#EBEBEB;
          }
          &:first-child{
            background-color:#EBEBEB;
          }
          .vue_li_left{
            display:flex;
            justify-content: space-between;
            i{
              margin-right:10px;
            }
            .vue_title{
              line-height:20px;
              display:block;
              p:first-child{
                width:200px;
                margin-top:10px;
                display:flex;
                justify-content:space-between;
                font-size:14px;

                .time{
                  font-size:12px;
                  color:#7F7F7F;

                }
              }
              p:last-child{
                margin-top:8px;
                font-size:12px;
                color:#7F7F7F;
              }
            }

          }
        }
      }
      

    }

</style>
