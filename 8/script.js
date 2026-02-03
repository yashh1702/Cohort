const users = [
    "akarsh@female.com",
    "yash@male.com",
    "h@h.com"
];

function sendEmail(email){
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5);

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);
            if(probability <= 5) resolve("Email successfully sent.")
            else reject("Email not sent..")    
        }, time * 1000);
    });
}

async function sendEmails(userlist){
    let allresponses = userlist.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        })
    });

    let ans = await Promise.all(allresponses);

    ans.forEach(function(status){
        console.log(status)
    })
}
sendEmails(users)
