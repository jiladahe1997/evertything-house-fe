<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="视频名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="视频类别" prop="videoCatagory">
        <el-select v-model="ruleForm.videoCatagory" placeholder="请选择视频类别">
          <el-option label="彩虹六号" value="0"></el-option>
          <el-option label="战地5" value="1"></el-option>
          <el-option label="CSGO" value="2"></el-option>
          <el-option label="云顶之奕" value="3"></el-option>
          <el-option label="日常生活" value="4"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="视频简介" prop="introduction">
        <el-input type="textarea" v-model="ruleForm.introduction"></el-input>
      </el-form-item>

      <el-form-item label="视频链接" prop="videoUrl" v-show="false">
        <el-input v-model="ruleForm.videoUrl"></el-input>
      </el-form-item>

      <el-form-item label="视频封面图" prop="imgUrl" v-show="false">
        <el-input v-model="ruleForm.imgUrl"></el-input>
      </el-form-item>

      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8">
          <el-upload
            class="upload-demo"
            drag
            action=""
            :http-request="imgUpload"
            :before-upload="beforeImgUpload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将视频封面图片拖到此处，或点击上传</div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
          </el-upload>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="imgPercentage"></el-progress>
        </el-col>

        <el-col :span="4"></el-col>
        <el-col :span="8">
          <el-upload
            class="upload-demo"
            drag
            action=""
            :http-request="videoUpload"
            :before-upload="beforeVideoUpload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将视频拖到此处，或点击上传</div>
            <div class="el-upload__tip" slot="tip">只能上传mp4文件</div>
          </el-upload>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="videoPercentage"></el-progress>
        </el-col>
      </el-row>

      <br>
      <br>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">点击上传</el-button>
      </el-form-item>
    </el-form>




  </div>
</template>

<script>
    var COS = require('cos-js-sdk-v5');
    import axios from 'axios'


        var cos = new COS({
        getAuthorization: function (options,callback) {
            // 异步获取临时密钥
            // console.log(options.Bucket);
            // axios.get('/api/TencentCloudKey'+"?bucket=sls-cloudfunction-ap-guangzhou-code-1256609098&region=ap-guangzhou")
            // console.log(options.Bucket);
            // console.log(options.Region);
            axios.get('/api/TencentCloudKey'+'?bucket='+options.Bucket+'&region='+options.Region)   
               .then(function (response) {     
                    callback({
                        TmpSecretId: response.data.data.tmpSecretId,
                        TmpSecretKey: response.data.data.tmpSecretKey,
                        XCosSecurityToken: response.data.data.sessionToken,
                        // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
                        StartTime: response.data.data.startTime, // 单位是秒
                        ExpiredTime: response.data.data.expiredTime
                    });
                })
        }
    });
         
console.log(cos);
console.log("!@#$$#@@#$$"+cos.SecretId);





    export default {
        name: 'videoUpload',
        data () {
            return {
                videoPercentage:0,
                imgPercentage:0,
                ruleForm: {
                    name: '',
                    videoCatagory: '',
                    introduction: '',
                    videoUrl:"",
                    imgUrl:"",
                },
                rules: {
                    name: [
                        { required: true, message: '请输入视频名称', trigger: 'blur' },
                        { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                    ],
                    videoCatagory: [
                        { required: true, message: '请选择视频类别', trigger: 'change' }
                    ],

                    introduction: [
                        { required: true, message: '请填写视频简介', trigger: 'blur' },
                        { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
                    ],

                    videoUrl: [
                        { required: true, message: '请上传视频', trigger: 'change' }
                    ],
                    imgUrl: [
                        { required: true, message: '请上传视频封面', trigger: 'change' }
                    ],
                }
            };
        },
        methods:{
            beforeImgUpload (file) {
                var imgName = file.name;
                var idx = imgName.lastIndexOf(".");
                if (idx != -1){
                    var ext = imgName.substr(idx+1).toUpperCase();
                    ext = ext.toLowerCase( );
                    if (ext!='jpg' && ext!='png'){
                        this.$message.error('只能上传jpg/png文件')
                    }else{
                        return true;
                    }
                }else{
                    this.$message.error('只能上传jpg/png文件')
                }
            },
            imgUpload(item){
                var that=this;
                cos.putObject({
                    Bucket: 'sls-cloudfunction-ap-guangzhou-code-1256609098', /* 必须 */
                    Region: 'ap-guangzhou',     /* 存储桶所在地域，必须字段 */
                    Key: Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)+item.file.name,              /* 必须 */
                    StorageClass: 'STANDARD',
                    Body: item.file, // 上传文件对象
                    onProgress: function(progressData) {
                        console.log(JSON.stringify(progressData));
                        console.log("**********progress************");
                        that.imgPercentage=progressData.percent*100;
                    }
                }, function(err, data) {
                    console.log(err || data);
                    console.log(cos);
                    console.log(err);
                    console.log("**********result************");
                    that.ruleForm.imgUrl=data.Location;
                });
            },

            beforeVideoUpload (file) {
                var videoName = file.name;
                var idx = videoName.lastIndexOf(".");
                if (idx != -1){
                    var ext = videoName.substr(idx+1).toUpperCase();
                    ext = ext.toLowerCase( );
                    if (ext!='mp4'){
                        this.$message.error('只能上传mp4文件')
                    }else{
                        return true;
                    }
                }else{
                    this.$message.error('只能上传mp4文件')
                }
                },
            videoUpload(item){
                var that=this;
                cos.putObject({
                    Bucket: 'sls-cloudfunction-ap-guangzhou-code-1256609098', /* 必须 */
                    Region: 'ap-guangzhou',     /* 存储桶所在地域，必须字段 */
                    Key: Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)+item.file.name,              /* 必须 */
                    StorageClass: 'STANDARD',
                    Body: item.file, // 上传文件对象
                    onProgress: function(progressData) {
                        console.log(JSON.stringify(progressData));
                        that.videoPercentage=progressData.percent*100;
                    }
                }, function(err, data) {
                    that.ruleForm.videoUrl=data.Location;
                });
                },
            submitForm(formName) {
                var that =this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        
                        axios.post('/api/videoUpload',{
                            name:that.ruleForm.name,
                            videoCatagory:that.ruleForm.videoCatagory,
                            // introduction: that.ruleForm.introduction,
                            introduction: that.ruleForm.introduction,
                            videoUrl:that.ruleForm.videoUrl,
                            imgUrl: that.ruleForm.imgUrl
                        })
                            .then(function (res) {
                                console.log(res.status.code);
                                alert('提交成功');
                            })
                            .catch(function (error) {
                    console.log("!!!!!!!!!!!!!!!!!!!!");   
                    console.log(that.ruleForm); 
                    console.log(error); 
                    console.log("!!!!!!!!!!!!!!!!!!!!");     
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
