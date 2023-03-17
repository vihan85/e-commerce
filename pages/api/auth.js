import checkIsRequired from "../../helpers/validate-isrequires-helper";

function handler(req, res) {
    if (req.method === 'POST') {
        const valueValadate = {
            email: req.body.email,
            pass: req.body.pass,
            confirmPass: req.body.confirmPassWord,
        };
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const auth = {
            status: '',
            error: {},
            account: {
                email: undefined,
                pass: undefined,
                confirmPass: '',
            },
        };
        //isEmail
        if (valueValadate.email && !regexEmail.test(valueValadate.email)) {
            auth.error.email = `Please include an '@' in the email address. "${valueValadate.email}" is missing an '@'.`;
        } else {
            auth.account.email = valueValadate.email;
        }
        //is pass word
        if (valueValadate.pass && !regexPass.test(valueValadate.pass)) {
            auth.error.pass =
                'Password at least: 8 character, 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character,  ';
        } else {
            auth.account.pass = valueValadate.pass;
        }
        //confirm pass
        if (valueValadate.pass && valueValadate.confirmPass && valueValadate.pass !== valueValadate.confirmPass) {
            auth.error.confirmPass = 'pass invalid';
        } else {
            auth.account.confirmPass = valueValadate.confirmPass;
        }
        // isRequired
        checkIsRequired(valueValadate,auth)
        //respon status
        if (Object.values(auth.account).indexOf(undefined) > -1 || Object.keys(auth.error).length > 0 ) {
            auth.status = 'error';

            res.status(422).json(auth);
            return;
        }

        auth.status = 'OK';
        res.status(201).json(auth);
    }
}
export default handler;
