/**
 * Created by web-01 on 2018/8/15.
 */
module.exports={
    //���ԣ���webpack��������
    configureWebpack:{
        //����һ��ģ��
        module:{
            //ָ������
            rules:[
                {test:/\.ico$/,use:'file-loader'}
            ]
        }
    }
}