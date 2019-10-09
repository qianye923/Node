// 用户名和密码登录验证

app.get("/newUser", (req, res) => {
    console.log(req)


    const username = req.query.username;
    let passworld=req.query.passworld
    

    username = username.replace(/[!@#$%^&*]/g, '')
    if (!username || !passworld ||) {
        return  res.sendStatus(400)
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

    users[username] = { salt, hash };
    res.sendStatus(200);
})