function handler(req, res) {
    if (req.method === 'POST') {
        const valueValadate = {
            email: req.body.email,
            pass: req.body.pass,
            confirmPass: req.body.confirmPassWord
        };
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const auth = {
            status: '',
            error: {},
        };
        //isEmail
        if (!regexEmail.test(valueValadate.email)) {
            auth.error.email = 'Your Email invalid';
        }
        //pass word
        if (!regexPass.test(valueValadate.pass)) {
            auth.error.pass =
                'Password at least: 8 character, 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character,  ';
        }
        //confirm pass
        if(valueValadate.pass !== valueValadate.confirmPass) {
            auth.error.confirmPass = 'pass invalid'
        }
        for (let key in valueValadate) {
            // isRequired
            if (valueValadate[key] === '') {
                auth.error[key] = 'please enter this infomation';
            }
        }
        if (Object.keys(auth.error).length > 0) {
            auth.status = 'error';
            res.status(442).json(auth);
            return;
        } else {
            auth.status = 'OK';
            res.status(201).json(auth);
        }
    }
}
export default handler;
