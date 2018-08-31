/**
 * Created by web-01 on 2018/8/15.
 */
module.exports={
    //属性，对webpack进行配置
    configureWebpack:{
        //创建一个模块
        module:{
            //指定规则
            rules:[
                {test:/\.ico$/,use:'file-loader'}
            ]
        }
    }
}