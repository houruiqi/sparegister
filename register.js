$(function(){
    var $name = $('#name'),
    $namemsg = $('#name_verification'),
    $phone = $('#phone'),
    $phonemsg = $('#phone_verification'),
    $pw = $('#password'),
    $pwmsg = $('#password_verification'),
    $code = $('#vc'),
    $codemsg = $('#vcinput_verification'),
    $vcinput= $('#vcinput'),
    $btn = $('#btnsubmission');

    $btn.click(function(){
        validate('#name');
        validate('#phone');
        validate('#password');
        validate('#vcinput');
        if(!validate('#name') || !validate('#phone') || !validate('#password') || !validate('#vcinput'))
            return;
    })
    $name.click(function(){
        $namemsg.html("");
    })
    $phone.click(function(){
        $phonemsg.html("");
    })
    $pw.click(function(){
        $pwmsg.html("");
    })
    $vcinput.click(function(){
        $codemsg.html("");
    })
    $name.blur(function(){
        validate('#name');
    })
    $phone.blur(function(){
        validate('#phone');
    })
    $pw.blur(function(){
        validate('#password');
    })
    $vcinput.blur(function(){
        validate('#vcinput');
    })
    var t = 5;
    $code.click(function(){
        console.log('adsd');
        // 
        var e = setInterval(function() {
            $code.html("已发送（" + t-- + "s）");
            if(t > 0){
                $code.attr("disabled","disabled");
            }
            if(t == 0){
                $code.removeAttr("disabled");
                clearInterval(e);
                t = 5;
                $code.html("获取验证码");
            }
        }, 1000);
        
    })
    function validate(field) {
        console.log(field);
        var $data = $(field),
            $msg = $(field+'_verification');
        // validate null
        if($data.val()===''){
            if(field == '#name'){
                $msg.html("用户名不能为空");
            }
            else if(field == '#phone'){
                $msg.html("手机号不能为空");
            }
            else if(field == '#password'){
                $msg.html("密码不能为空");
            }
            else if(field == '#vcinput'){
                $msg.html("验证码不能为空");
            }
            
            return false;
        }
        // validate number
        if($data.val()!=''){
            // var flag = 0;
            var str = $data.val();
            // console.log(str);
            if(field == '#name'){
                isNaN(str)?(judgeteshu(str)): $msg.html("用户名仅支持中英文、数字和下划线,且不能为纯数字");
                function judgeteshu(str){
                    var pattern = /(^[\u4E00-\u9FA5a-zA-Z0-9_]*$)/;
                    console.log(pattern.test(str));
                    pattern.test(str)?judgelength(str):$msg.html("用户名仅支持中英文、数字和下划线,且不能为纯数字");
                }
                function judgelength(str){
                    str.length<=14?$msg.html(""):$msg.html("用户名不能超过14个字符")
                }
            }
            else if(field == '#phone'){
                var phonenum =  /0?(13|14|15|18|17)[0-9]{9}/;
                phonenum.test(str)?$msg.html(""):$msg.html("手机号码格式不正确");
            }
            else if (field == '#password'){
                var pwnum = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/;
                pwnum.test(str)?$msg.html(""):$msg.html("长度为8~14个字符，字母/数字以及标点符号至少包含2种，不允许有空格、中文");
            }
            else if(field == '#vc'){
                $msg.html("");
            }
        }

        return true;
    }
})