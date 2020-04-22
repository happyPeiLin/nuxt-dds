<template>
  <div class="home">
    <div class="blank">
      <div class="rule">
        <audio ref="audio" ></audio>
        <audio ref="audio2"></audio>
        游戏规则：开始游戏后会随机出现三种地鼠
        <span>
          <img src="../assets/ds1.jpg" alt />
        </span>
        <span>
          <img src="../assets/ds2.jpg" alt />
        </span>
        <span>
          <img src="../assets/ds3.jpg" alt />
        </span>,单击
        <span>
          <img src="../assets/ds1.jpg" alt />
        </span> 得一分，双击
        <span>
          <img src="../assets/ds3.jpg" alt />
        </span>
        得两分。点击错误扣一分。如果你的得分进入前十，将可以记录进左侧排行榜。如使用手机模式，则无法看到排行榜，但仍能记录得分。
      </div>
    </div>
    <div class="flex" style="width:100%">
      <div class="sider siderL" style="flex:6">
        <ul>
          <li>
            <span
              class="rank1"
              style="text-align:center;font-size:20px;line-height:20px;color:black;font-weight:bold"
            >昵称</span>
            <span
              class="rank2"
              style="text-align:center;font-size:20px;line-height:20px;color:black;font-weight:bold"
            >分数</span>
            <span
              class="rank3"
              style="text-align:center;font-size:20px;line-height:20px;color:black;font-weight:bold"
            >记录时间</span>
          </li>
          <li>
            <span
              class="rank1"
              style="text-align:center;font-size:20px;line-height:20px;color:black;font-weight:5000"
            ></span>
            <span
              class="rank2"
              style="text-align:center;font-size:20px;line-height:20px;color:black;font-weight:5000"
            ></span>
            <span
              class="rank3"
              style="text-align:center;font-size:20px;line-height:20px;color:black;font-weight:5000"
            ></span>
          </li>
          <li v-for="(item,index) in group2.slice(0, 14)" :key="index">
            <span class="rank1">{{item.name}}</span>
            <span class="rank2">{{item.age}}</span>
            <span class="rank3">{{item.time}}</span>
          </li>
        </ul>
      </div>

      <div class="background">
        <div class="line1">
          <div style="flex:5"></div>
          <div class="score" style="flex:20">得分：{{this.score}}</div>
          <div style="flex:5"></div>
          <button class="startButton" @click="gameStart" style="flex:35">{{words}}</button>
          <div style="flex:5"></div>
          <div class="count" style="flex:20">倒计时：{{this.countTime}}</div>
          <div style="flex:5"></div>
        </div>
        <div class="line2" >
          <div class="notice">
            <p class="remin">你可在此处输入你的昵称，如果你的得分在前十，你的昵称和得分将会在排行榜显示</p>
            本轮得分： {{this.score}}
            <input id="reminder" placeholder="请输入昵称" maxlength="12" />
            <button @click="confirm">确定</button>
          </div>
          <div id="box1" class="line22 mark" @click="click($event)" style="margin-left:200px" >
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />
            <img class="bad" src="../assets/bad.jpg" style="width:100%; height:100%" alt />
            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===1&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===1&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===1&type===3"
            />
          </div>
          <div id="box2" class="line22 mark" @click="click($event)">
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===2&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===2&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===2&type===3"
            />
          </div>
          <div id="box3" class="line22 mark" @click="click($event)">
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===3&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===3&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===3&type===3"
            />
          </div>
        </div>
        <div class="line3">
          <div id="box4" class="line33 mark" @click="click($event)" style="margin-left:150px" >
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===4&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===4&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===4&type===3"
            />
          </div>
          <div id="box5" class="line33 mark" @click="click($event)">
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===5&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===5&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===5&type===3"
            />
          </div>
          <div id="box6" class="line33 mark" @click="click($event)">
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===6&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===6&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===6&type===3"
            />
          </div>
        </div>
        <div class="line4">
          <div id="box7" class="line44 mark" @click="click($event)" style="margin-left:130px">
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===7&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===7&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===7&type===3"
            />
          </div>
          <div id="box8" class="line44 mark" @click="click($event)">
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===8&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===8&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===8&type===3"
            />
          </div>
          <div id="box9" class="line44 mark" @click="click($event)">
            <img class="good" src="../assets/dmz.jpg" style="width:100%;height:100%" alt />

            <img
              src="../assets/ds1.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===9&type===1"
            />
            <img
              src="../assets/ds2.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===9&type===2"
            />
            <img
              src="../assets/ds3.jpg"
              alt
              style="width:100%;height:100%"
              v-show="id===9&type===3"
            />
          </div>
        </div>
        <div class="line5">
          <div class="good" style="width:0;height:0"></div>
        </div>
      </div>

      <div class="sider" style="flex:6"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: () => {
    return {
      time: "",
      group: "",
      group2: "",
      nickname: "匿名",
      lastScore: 0,
      id: 0,
      idSpare: 0,
      type: 0,
      countTime: 30,
      timer1: undefined,
      timer2: undefined,
      score: 0,
      state: false,
      state2: 2,
      state3: 2,
      words: "开始游戏"
    };
  },
  methods: {
    compare(property, desc) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        if (desc == true) {
          return value1 - value2;
        } else {
          return value2 - value1;
        }
      };
    },
    koaget() {
      var self = this;
      axios
        .post("http://localhost:3000/users/getUser", {
          type: "type999"
        })
        .then(function(response) {
          self.group = response.data.results;

          self.group2 = self.group.sort(self.compare("age", false));
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    confirm() {
      if (document.getElementById("reminder").value !== "") {
        this.nickname = document.getElementById("reminder").value;
        console.log("nickname= " + this.nickname)
      
      this.time = new Date().toLocaleString("chinese", { hour12: false });
      console.log(this.time);

      axios
        .post("http://localhost:3000/users/addUser", {
          name: this.nickname,
          age: this.lastScore,
          type: "type999",
          time: this.time
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

      }
      this.lastScore = this.score;
      this.koaget();
      this.words = "开始游戏";
      this.state = false;
      this.score = 0;
      this.countTime = 30;
      document.getElementsByClassName("notice")[0].style.display = "none";
    },
    change(ns) {
      this.$store.dispatch(`${ns}/setData`, `${ns} updated`);
    },

    gameStart() {
      if (this.state === false) {
        this.state = true;
        this.countTime = 30;
        this.words = "游戏进行中";

        this.timer1 = setInterval(() => {
          this.state2 = 2;
          this.state3 = 2;
          this.idSpare = Math.ceil(Math.random() * 9);
          if (this.id !== this.idSpare) {
            this.id = this.idSpare;
          } else if (this.id !== 5) {
            this.id = 5;
          } else {
            this.id = 9;
          }
          this.type = Math.ceil(Math.random() * 3);
        }, 1000);
        this.timer2 = setInterval(() => {
          this.countTime--;
        }, 1000);
      } else {
      }
    },

    click(e) {
      if (this.state === true) {
        if (
          e.target.src !== undefined &&
          (this.type === 1) & (this.state2 === 2)
        ) {

          this.score++;
          this.state2++;


          document.getElementsByClassName("good")[this.id - 1].style.display =
            "block";
          this.id = 10;

          setTimeout(() => {
            document.getElementsByClassName("good")[0].style.display = "none";
            document.getElementsByClassName("good")[1].style.display = "none";
            document.getElementsByClassName("good")[2].style.display = "none";
            document.getElementsByClassName("good")[3].style.display = "none";
            document.getElementsByClassName("good")[4].style.display = "none";
            document.getElementsByClassName("good")[5].style.display = "none";
            document.getElementsByClassName("good")[6].style.display = "none";
            document.getElementsByClassName("good")[7].style.display = "none";
            document.getElementsByClassName("good")[8].style.display = "none";
          }, 700);
        } else if (
          e.target.src !== undefined &&
          (this.type === 1) & (this.state2 > 2)
        ) {
          console.log("多单击了一次");
          this.score--;
        } else if (
          e.target.src !== undefined &&
          (this.type === 3) & (this.state3 === 2)
        ) {
          this.state3++;
        } else if (
          e.target.src !== undefined &&
          (this.type === 3) & (this.state3 === 3)
        ) {
          this.score = this.score + 2;
          this.state3++;
          document.getElementsByClassName("good")[this.id - 1].style.display =
            "block";
          this.id = 10;

          setTimeout(() => {
            document.getElementsByClassName("good")[0].style.display = "none";
            document.getElementsByClassName("good")[1].style.display = "none";
            document.getElementsByClassName("good")[2].style.display = "none";
            document.getElementsByClassName("good")[3].style.display = "none";
            document.getElementsByClassName("good")[4].style.display = "none";
            document.getElementsByClassName("good")[5].style.display = "none";
            document.getElementsByClassName("good")[6].style.display = "none";
            document.getElementsByClassName("good")[7].style.display = "none";
            document.getElementsByClassName("good")[8].style.display = "none";
          }, 700);
        } else {
          this.score--;
        }
      } else {
        alert("请点击开始游戏");
      }
    }
  },

  mounted() {
    this.koaget();
  },

  watch: {
    countTime: function() {
      if (this.countTime <= 0) {
        clearInterval(this.timer1);
        clearInterval(this.timer2);
        this.id = 0;
        this.type = 0;
        document.getElementsByClassName("notice")[0].style.display = "block";
      }
    }
  }
};
</script>

<style>
@media only screen and (max-width: 450px) {
  .remin {
    display: none !important;
  }
  .home {
    background: none !important;
  }
  .sider {
    display: none;
  }
  .background {
    width: 100% !important;
    min-width: 100px !important;
  }
  .blank {
    height: 100px !important;
  }
  .rule {
    width: 100% !important;
    min-width: 100px !important;
    padding: 0 !important;
    font-size: 15px !important;
    line-height: 15px !important;
    height: 60px !important;
  }

  .rule span {
    width: 20px !important;
  }

  .rule div {
    display: block !important;
    margin-top: 15px;
    font-size: 13px;
    color: red;
  }
  .startButton {
    height: 35px !important;
    font-size: 15px !important;
    margin-top: 5px !important;
  }
  .score {
    margin-top: 5px !important;
    height: 30px !important;
    font-size: 15px !important;
    line-height: 30px !important;
  }
  .count {
    margin-top: 5px !important;
    height: 30px !important;
    font-size: 14px !important;
    line-height: 30px !important;
  }
  .line1 {
    height: 7% !important;
  }
  .line2 {
    height: 8% !important;
  }
  .line3 {
    height: 9% !important;
  }
  .line4 {
    height: 10% !important;
  }
  .line5 {
    height: 1% !important;
  }
  .notice {
    width: 250px !important;
    height: 150px !important;
    margin-left: 60px !important;
    margin-top: 15px !important;
    font-size: 30px !important;
    line-height: 50px !important;
    border-radius: 15px !important;
  }

  .notice button {
    display: block;
    position: relative;
    left: 100px !important;
    bottom: 0px !important;
    border-radius: 20px;
    outline: none;
  }
}

@keyframes good {
  from {
    opacity: 0.9;
  }
  to {
    opacity: 0.1;
  }
}

@keyframes bad {
  from {
    opacity: 0.9;
  }
  to {
    opacity: 0.1;
  }
}

.good {
  -webkit-animation: good 0.5s;
  display: none;
  opacity: 0.1;
}

.bad {
  -webkit-animation: bad 0.5s;
  display: none;
  opacity: 0.1;
}

.home {
  background: url("../assets/ds4.jpg");
  background-size: 300px 100px;
}
.flex {
  display: -webkit-flex;
   justify-content: center
}
.background {
  background: url("../assets/bjt.jpg") no-repeat;
  background-size: 100%;
  width: 1000px;
  min-width: 1000px;
  height: 600px;
  flex-direction: column;
  display: -webkit-flex;
}
.blank {
  height: 100px;
  font-size: 20px;
  color: black;
  background-color: #fff;
}
.rule {
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  height: 100px;
  line-height: 30px;
  text-align: left;
  padding-top: 20px;
}
.rule div {
  display: none;
}
.rule span {
  display: inline-block;
  width: 40px;
  height: 20px;
}

.rule span img {
  width: 100%;
}
.line1 {
  height: 100px;
  display: flex;
}
.line2 {
  height: 145px;
}
.line3 {
  height: 140px;
}
.line4 {
  height: 155px;
}
.line5 {
  height: 60px;
}

.line22 {
  width: 20%;
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
}

.line33 {
  width: 23%;
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
}

.line44 {
  width: 26%;
  /* opacity: 0.5;
  background-color: pink; */
  height: 100%;
  display: inline-block;
  /* border: 1px solid black; */
  box-sizing: border-box;
}

.startButton {
  width: 350px;
  height: 100px;
  font-size: 30px;
  border-radius: 50px;
  margin-top: 12px;
  background-color: #c7f560;
  outline: none;
  display: inline-block;
}

.score {
  border-radius: 30px;
  background-color: orange;
  margin-top: 20px;
  font-size: 30px;
  line-height: 2.5;
}
.count {
  border-radius: 30px;
  background-color: orange;
  margin-top: 20px;
  font-size: 30px;
  line-height: 2.5;
}

.notice {
  width: 600px;
  height: 300px;
  background-color: orange;
  margin-top: 80px;
  margin-left: 200px;
  border-radius: 50px;
  opacity: 0.95;
  display: none;
  font-size: 60px;
  line-height: 250px;
  position: relative;
}

.notice input {
  width: 100px;
  height: 30px;
  font-size: 15px;
}

.notice p {
  width: 100px;
  height: 20px;
  font-size: 14px;
  display: block;
  position: absolute;
  line-height: 15px;
  right: 70px;
  top: 35px;
  color: red;
  font-weight: 999;
  text-align: left;
}

.notice button {
  display: block;
  position: relative;
  left: 400px;
  bottom: 50px;
  border-radius: 20px;
  outline: none;
}

.siderL {
  background-color: white;
}

.siderL span {
  /* width: 100px; */
  height: 20px;
  overflow: hidden;
  display: inline-block;
}

.rank1 {
  width: 100px;
  color: red;
  font-size: 15px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
}
.rank2 {
  width: 50px;
  color: orange;
  font-size: 15px;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: bold;
}
.rank3 {
  color: grey;
  width: 110px;
  font-size: 12px;
  line-height: 25px;
}
</style>
