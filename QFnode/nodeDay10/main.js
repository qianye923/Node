//  使用nodemailer向邮箱发送邮件 demo

   const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = nodemailer.createTestAccount();

    // create reusable transporte
    // r object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        //  在nodemailer/well-know/services.json 中查找对应的host和port以及 secure;
        host: 'smtp.qq.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "1006196296@qq.com", // generated ethereal user
            pass:"nkmcasfcohsvbdaa" // generated ethereal password
        }
    });

     transporter.sendMail({
        from: '"Fred Foo 👻" <1006196296@qq.com>', // sender address
        to: '1006196296@qq.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        html: '<b>嘿嘿 。。。。。。</b>' // html body
    });



