<template>
  <div class="edit-container">
        <div class="block article-item">
            <span class="demonstration">发表时间：</span>
            <el-date-picker
              v-model="dateValue"
              type="date"
              placeholder="选择日期" :editable=false>
            </el-date-picker>
        </div>
        <p class="article-title article-item">文章标题：
            <el-input v-model="articleTitle" placeholder="请输入内容"></el-input>
        </p>
        <p class="article-item">文章分类：
            <el-select v-model="LabelValue" placeholder="请选择">
                <el-option
                  v-for="item in labelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                </el-option>
            </el-select>
        </p>
        <div class="maskContainer" v-if="dilogStatus">
            <div class="contentContainer">
            <div class="closeBtnContainer" @click="closeMaskFn"></div>
                <textarea class="showAreaContainer" v-model="msgShow" readonly></textarea>
            </div>
        </div>
        <div class="editorContainer">
            <markdown
            :mdValuesP="msg.mdValue"
            :fullPageStatusP="false"
            :editStatusP="true"
            :previewStatusP="true"
            :navStatusP="true"
            :icoStatusP="true"
            @childevent="childEventHandler"
            ></markdown>
        </div>
        <!-- <div class="btnsContainer">
            <div class="btn" @click="getMdValueFn">获取mdValue</div>
            <div class="btn" @click="getHtmlValueFn">获取htmlValue</div>
        </div> -->
        <div class="btns-box">
            <el-button type="primary" class="save-btn" @click="saveArticle(1)">存为草稿箱</el-button>
            <el-button type="primary" class="publish-btn" @click="saveArticle(0)">发布</el-button>
        </div>
  </div>
</template>
<script>
    import markdown from './markdown'
    import moment from 'moment'
    export default {
        name: 'index',
        data() {
            return {
                name: this.$router.query.name,
                articleId: '',
                dateValue: '',
                articleTitle: '',
                msgTextShow: '',
                msgHtmlShow: '',
                dilogStatus:false,
                msg: {
                    mdValue:''
                },
                classifyArray: [
                    {value: 0, name:"node"},
                    {value: 1, name:"javascript"},
                    {value: 2, name:"css"}
                ],
                defaultClassify: {value: 0, name:"node"},
                labelOptions: [{
                    value: 0,
                    label: 'javascript'
                }, {
                    value: 1,
                    label: 'node'
                }, {
                    value: 2,
                    label: 'html/css'
                }, {
                    value: 3,
                    label: 'vue'
                }, {
                    value: 4,
                    label: '数据库'
                }],
                LabelValue: ''
            }
        },
        components: {
            markdown
        },
        methods: {
            saveArticle (flag) {
                console.log(this.name);
                this.getMdValueFn();
                this.getHtmlValueFn();
                let date = moment(this.dateValue).format('YYYY-MM-DD');
                if (this.articleTitle && this.msgTextShow && this.msgHtmlShow && date && this.LabelValue) {
                    if (this.articleId) {
                        var params = {
                            title:this.articleTitle,
                            textContent: this.msgTextShow,
                            htmlContent: this.msgHtmlShow,
                            date: date,
                            label: this.LabelValue,
                            flag: flag,
                            name: this.$route.query.name,
                            id: this.articleId
                        }
                        this.$http.post('/modifyArticle',params, {emulateJSON: true})
                        .then(function (res) {
                            this.articleTitle = '';
                            this.msg = {}
                            this.msg.mdValue = '';
                            this.dateValue = '';
                            this.LabelValue = '';
                            this.$route.push({path: '/home/edit'});
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                    } else {
                        var params = {
                            title:this.articleTitle,
                            textContent: this.msgTextShow,
                            htmlContent: this.msgHtmlShow,
                            date: date,
                            label: this.LabelValue,
                            flag: flag,
                            name: this.$route.query.name
                        }
                        this.$http.post('/saveArticle', params, {emulateJSON: true})
                        .then(function (res) {
                            this.articleTitle = '';
                            this.msg = {}
                            this.msg.mdValue = '';
                            this.dateValue = '';
                            this.LabelValue = '';
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                    }
                } else {
                    this.$message('请填写完所有信息');
                }
            },
            childEventHandler:function(res){
                // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
                this.msg=res;
            },
            //获取markdown里面的内容
            getMdValueFn:function(){
                this.msgTextShow = this.msg.mdValue;
            },
            getHtmlValueFn:function(){
                this.msgHtmlShow = this.msg.htmlValue;
            },
            closeMaskFn:function(){
                this.msgShow='';
                this.dilogStatus=false;
            },
            handleClassify: function (item) {
                this.defaultClassify = item;
            }
        },
        mounted: function () {
            if (this.$route.query.id) {
                this.$http.post('/getOneArticle',{
                        id: this.$route.query.id
                    }, {emulateJSON: true})
                    .then(function(res){
                        this.articleTitle = res.data.info[0].title;
                        this.msg.mdValue = res.data.info[0].textContent;
                        this.dateValue = res.data.info[0].date;
                        this.LabelValue = res.data.info[0].label;
                        this.articleId = res.data.info[0]._id;
                    })
                    .catch(function(err){
                        console.log(err);
                    });
            }
        }
    }
</script>
<style scoped>
    body, html{
        height: 100%;
    }
    .edit-container {
        padding: 40px 40px 0 40px;
        height: 100%;
        box-sizing: border-box;
    }
    .article-item {
        height: 40px;
        line-height: 40px;
        padding: 10px;
    }
    .article-title .el-input {
        width: 50%;
    }
    .classify-name {
        display: inline-block;
        width: 80px;
    }
    .editorContainer {
        margin: 10px;
        width: 90%;
        height: 80%;
        border: 1px solid #ddd;
    }
    .btns-box {
        padding: 20px 132px 0 0;
        float: right;
    }
    .el-input {
        float: none;
    }
</style>


